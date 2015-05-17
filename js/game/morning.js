function Start(){
	$ = {};

	narrator("<b>[Untitled]</b>");
	narrator("A game about life.");
	narrator("Are you ready to begin?");
	Choose({
		"Yes": function(m){player(m);Clear();Wakeup()},
		"No": function(m){player(m);Clear();Wakeup()}
	});
}

function Wakeup(){
  $.temp = {};
  if($.loop){
    $.loop++;
  }else{
    $.loop = 1;
  }
  Show("background","alarm");
  PlaySound("alarm","alarm",{loop:0, volume:0.7});
  narrator("*Alarm Sounds*");
  Choose({
		"*Wake up*": function(m){player(m);PlaySound("alarm","alarm",{loop:0, volume:0});Clear();narrator("You get out of bed");MorningRoutine();}
	});
}
function MorningRoutine(){
  //set room art
	if($.temp.dressed){
	  Choose({
		  "*leave*": function(m){player(m);Clear();LeaveHome();}
	  });
	}else{
	  Choose({
		  "*Get Dressed*": function(m){player(m);$.temp.dressed = true;MorningRoutine();}
	  });
	}
}
function LeaveHome(){
	narrator("You walk out the front door");
  if($.loop <= 2){
  	narrator("*SPLASH*");
  	narrator("A car driving by hit a puddle and drenched you in disgusting water");
  	$.temp.drenched  = true;
  	if($.loop == 2){
  	  thought("Wait");
  	  thought("...");
  	  thought("What are the odds this would happen twice in a row?");
  	}
  	Choose({
		  "*Go back home and change clothes*": function(m){player(m);narrator('After changing clothes, you begin your day as usual.');EndMorning()}
	  });
	  return;
	}else{
	  EndMorning();
	}
	
}
function EndMorning(){
  Clear();
	StartWork();
}