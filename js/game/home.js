function Home(){
  Show("background","home");
  PlaySound("room","room",{loop:-1});
  player("I'm home. Sorry I'm late");
  dad("Great, I'm was just getting hungry");
  dad("Get a pizza for me.");
  dad("Supreme");
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
  dad("Of course I mind!");
  dad("Go make yourself something.");
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
  narrator("TV: Flock of Geese gets caught in the engi of Flight B732");
  if($.loop == 2){
    thought("No way this would happen two days in a row!");
    player("Didn't this happen yesterday?");
    dad("You need to have your head checked out.");
    dad("Go to sleep; that should help sort you out");
  }else{
    dad("You should get to bed; you need to get up early tommorrow.");
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

function StayHome(){
  Show("background","home");
  PlaySound("room","room",{loop:-1});
  dad("*Opens Door*");
  dad("<b>WHAT ARE YOU DOING AT HOME?!</b>");
  dad("<b>YOU SHOULD BE AT WORK</b>");
  if(!$.temp.dressed){
    dad("<b>WHY ARE YOU NOT DRESSED?!</b>");
  }
	Choose({
	  "I'm living my own life now":Indepence,
	  "Explain":Explain
	});
}

function Indepence(m){
  player(m);
  player("I am going to live how I want.");
  player("*Slams Door*");
  Clear();
  LeaveHome();
}
function Explain(){
  player("It doesn't matter what I do anyway.");
  player("Anything I do will have no effect.");
  player("Whenever I wake up, its the same day.");
  dad("Wow. You need to see a psychologist.");
  dad("<small>I might have to go to work</small>");
  Choose({
	  "No, its the truth!":Truth,
	  "*Throw yourself out of the window*":Leap,
	  "*Leave*":Leave
	});
}
function Leap(m){
  player(m);
  Show("background","building");
  narrator("You feel a rush as you approach the concrete below");
  narrator("<b>*SMACK*</b>");
  Clear();
  Wakeup();
}
function Truth(m){
  player(m);
  dad("You're crazy");
  Choose({
	  "*Throw yourself out of the window*":Leap,
	  "*Leave*":Leave
	});
}
function Leave(m){
  player(m);
  Clear();
  LeaveHome();
}