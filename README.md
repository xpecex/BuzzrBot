# BuzzrBot

<h3>Usage:</h3>
<br>
Copy and paste in console from http://www.buzzr.com.br/chat.html
<br><br>
<code>
var msg = prompt("Please enter your message", "You text");
var time = prompt("Please enter time for next chat (seconds)", "10");
function BuzzrBot(){
   if( msg == ''){
      msg = "My Bitcoin address: 1HgkZtoVwvByRHe14jBnJ9fk5rqcCh9mdK --- create by xPeCex";
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
</code>
<br><br>
<h3><center>Bitcoin Address: 1HgkZtoVwvByRHe14jBnJ9fk5rqcCh9mdK </center></h3>
<h3>License</h3>
<b> MIT </b>



