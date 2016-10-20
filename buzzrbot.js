var msg = prompt("Please enter your message", "You text");
var time = prompt("Please enter time for next chat (seconds)", "10");
function BuzzrBot(){
   if( msg == ''){
      msg = "Hello World --- create by xPeCex";
   }
   if( time == ''){
      time = 5;
   }
   $("#chatinput")[0].value = msg;
   $("#btnsend").trigger('click');
   $("#btnend").trigger('click');
   $('.nextbtn').trigger('click');
}
setInterval(BuzzrBot, time * 1000);
