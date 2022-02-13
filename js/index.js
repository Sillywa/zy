var options = {
  strings: [
      '&nbsp;&nbsp;&nbsp;&nbsp;我的周莹小宝贝，情人节快乐鸭~\n&nbsp;&nbsp;&nbsp;&nbsp;我们的故事开始于2021年10月24日，那天是我们认识的第一天。然后在2021年12月25日，那是我们在一起的第一天，而今天2022年02月14日，是我们一起度过的第一个情人节。很幸运每一个特殊的日子都有宝贝，和宝贝在一起的每一天都非常开心幸福。十分幸运你出现在我的人生中，在对的年纪，对的时间，一切都刚刚好。我想这大概就是人们常说的在最好的年纪遇到了最爱的人吧。在以后的日子里，我会一直陪着宝贝，陪你哭，陪你笑，陪你走过每一个晨昏与四季。希望我们能成为彼此生命中不可或缺的一部分，能手牵手一起走到最后。未来的日子很长，我们一起加油，一起努力，让我们都成为彼此最好的自己。\n&nbsp;&nbsp;&nbsp;&nbsp;最后，在这特别的一天，送给我最漂亮最可爱的小宝贝一朵玫瑰花，希望你能喜欢。\n&nbsp;&nbsp;&nbsp;&nbsp;爱你，王稳'
  ],
  typeSpeed: 200,   //打印速度
  startDelay: 300, //开始之前的延迟300毫
  onComplete: (self) => {
    $(".container").css("z-index",111);
    $(".container").append('<div class="glass"></div><div class="glow"></div><div class="rose-leaves"><div></div><div></div></div><div class="rose-petals"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div class="sparkles"><div></div><div></div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>')
    $(".rosebk").css("background","rgba(18, 33, 57, 0.86)");
    setTimeout(function() {
      snowflake()
    },3000)
  },
};
var typed = new Typed('#typed', options);


var container = $("#content");
// 页面可视区域
visualWidth = container.width();
visualHeight = container.height();
//玫瑰花飘落
var roses = [
  "./images/snowflake/snowflake1.png",
  "./images/snowflake/snowflake2.png",
  "./images/snowflake/snowflake3.png",
  "./images/snowflake/snowflake4.png",
  "./images/snowflake/snowflake5.png",
  "./images/snowflake/snowflake6.png"
]

function snowflake(){
  var  flakeContainer = $('#snowflake');
  function getImageName (){
    var index = Math.floor(Math.random()*6);
      return roses[index];
  }
  //创建一朵玫瑰花
  function  createSnowBox(){
      var url = getImageName ();
      return $("<div class='snowbox'></div>").css({
          'width': 41,
          'height': 41,
          'position': 'absolute',
          'backgroundSize': 'cover',
          'zIndex': 100000,
          'top': '-41px',
          'backgroundImage':'url('+url+')'
      }).addClass('snowRoll');
  }

  //开始飘落
  setInterval(function(){
      var startPositionLeft = Math.random()*visualWidth-100,
          startOpacity = 1,
          endPositionTop = visualHeight - 40,
          endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
          duration = visualHeight * 10 + Math.random() * 5000;

      //随机透明度，不小于0.5
      var randomOpacity =Math.random();
      randomOpacityStart = randomOpacity < 0.5 ? startOpacity : randomOpacity;

      //创建一朵玫瑰花
      var rose = createSnowBox();

      rose.css({
          left : startPositionLeft,
          opacity : randomOpacityStart
      });
      
      flakeContainer.append(rose);

      rose.transition({
          top:endPositionTop,
          left:endPositionLeft,
          opacity:0.5
      },duration,'ease-out', function() {
          $(this).remove() //结束后删除
      });
  },200)
}

var now = new Date();
function createtime() {
    var grt= new Date("12/25/2021 12:30:00");//此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; 
    dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); 
    hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){
      hnum = "0" + hnum;
    } 
    minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); 
    if(String(mnum).length ==1 ){
      mnum = "0" + mnum;
    }
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); 
    if(String(snum).length ==1 ){
      snum = "0" + snum;
    }
    document.getElementById("times").innerHTML = "和宝贝在一起的第 " + dnum+" 天 " + hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval("createtime()",250);
var flag = 0
document.getElementById("btn").addEventListener("click",function() {
  if(!flag) {
    document.getElementById("music").play();
    flag = 1;
    $("#novoice").hide()
  } else {
    document.getElementById("music").pause();
    flag = 0;
    $("#novoice").show()
  } 
})

