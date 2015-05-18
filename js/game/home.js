function Home(){
  Show("background","home");
  player("I'm home. Sorry I'm late");
  relative("Great, I'm was just getting hungry");
  relative("Get a pizza for me.");
  relative("Supreme");
  if($.loop === 2){
    thought("Of course he wants the same thing");
  }
  Choose({
    "*Order a pizza*":function(m){player(m);Home2();}
  });
}
function Home2(){
  Wait(1000);
  narrator("*the pizza arrives*");
  player("Here's your pizza");
  if($.loop === 2){
    thought("There's no point in asking for any");
    Choose({
      "*Makes a sandwich*":function(m){player(m);Home4();}
    });
  }else{
    Choose({
      "Do you mind if I have a slice?":function(m){player(m);Home3();}
    });
  }
}
function Home3(){
  relative("Of course I mind!");
  relative("Go make yourself something.");
  Choose({
    "Ok":function(m){player(m);player("*Makes a sandwhich*");Home4();}
  });
}
function Home4(){
  player("*sits down and starts watching tv*");
  
  narrator("TV: Breaking News");
  /* (maybe)
  if($.temp.denied){
    narrator("TV: " + $.temp.denied + " does something");
  }*/
  narrator("TV: something"); //todo: make news
  if($.loop == 2){
    thought("No way this would happen two days in a row!");
    player("Didn't this happen yesterday?");
    relative("You need to have your head checked out.");
    relative("Go to sleep; that should help sort you out");
  }else{
    relative("You should get to bed; you need to get up early tommorrow.");
  }
  Choose({
    "Ok":function(m){player(m);EndHome();}
  });
}
function EndHome(){
  Show("background","room");
  player("*goes to sleep*");
  Clear();
  Wakeup();
}