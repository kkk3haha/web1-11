var number = Math.floor(Math.random()*3);
var answer = parseInt;

var message;
 while(1){
  answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));
if(answer === number){
  message= 'あたり！';
 break;
}else if (answer<number){
 answer = parseInt(window.prompt('残念！もっと大きいです！0~2の数字を入力してください！'));
}else if (number<answer){
 answer = parseInt(window.prompt('残念！もっと小さいです！0~2の数字を入力してください！'));
}else{
  answer = parseInt(window.prompt('0~3の数字を入力してください！'));
}
 }


