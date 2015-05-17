function StartWork(){
  Show("background","alarm");
  if($.temp.drenched){
    narrator("You arrive at work late on account of your accident earlier.");
    narrator("You try to get to your cubicle quickly to make up the lost time.");
    boss("Where were you?");
    if($.loop == 2){
      thought("I can't give him the same excuse I gave yesterday.");
      thought("What can I say?");
      Choose({
    		"As I left my house, a car splashed water on me. So I needed to ...": BossAngry,
    		"I was mugged on the bus.": BossAngry
    	});
    }else{
      BossAngry("As I left my house, a car splashed water on me. So I needed to ...");
    }
  }else{
    $.loop = 1;
  }
  Choose({
		"*Wake up*": function(m){player(m);PlaySound("alarm","alarm",{loop:0, volume:0});Clear();narrator("You get out of bed");MorningRoutine();}
	});
}
//pandybat scene
function BossAngry(m){
  player(m);
  boss("You think I can't tell a lie when I hear one");
  EndWork();
}
function EndWork(){
  Clear();
	Wakeup();
}