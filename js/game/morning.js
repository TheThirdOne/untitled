function Start(){
	$ = {};
  Show("background","menu");
	narrator("<b>[Untitled]</b>");
	narrator("I'm the narrator");
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
  PlaySound("room","room",{loop:-1});
  narrator("*Alarm Sounds*");
  Choose({
		"*Wake up*": function(m){player(m);PlaySound("alarm","alarm",{loop:0, volume:0});ClearDialogue();MorningRoutine(true);}
	});
}
function MorningRoutine(a){
  Show("background","room");
  if(a){
    narrator("You get out of bed");
  }
  var tmp = {};
	if($.temp.dressed){
		  tmp["*leave*"]=function(m){player(m);Clear();LeaveHome();};
	}else{
		  tmp["*Get Dressed*"] = function(m){player(m);$.temp.dressed = true;MorningRoutine();};
	}
	if($.loop > 2){
	    tmp["*Stay Home*"] = function(m){player(m);StayHome();};
	}
	Choose(tmp);
}
function LeaveHome(){
  Show("background","building");
  PlaySound("city","city",{loop:-1});
	narrator("You walk out the front door");
  if(!$.temp.late){
    PlaySound("splash","splash",{loop:0, volume:.7});
  	narrator("*SPLASH*");
  	if($.loop > 2){
  	  player("*Duck*");
  	}else{
    	narrator("A car driving by hit a puddle and drenched you in disgusting water");
    	$.temp.late  = true;
    	if($.loop == 2){
    	  thought("Wait");
    	  thought("...");
    	  thought("What are the odds this would happen twice in a row?");
    	}
    	Choose({
  		  "*Go back home and change clothes*": function(m){player(m);narrator('After changing clothes, you begin your day as usual.');EndMorning()}
  	  });
	    return;
  	}
	}
	
	narrator("Where do you go now?");
	Choose({
  		  "Work": function(m){player(m);EndMorning();},
  		  "The pub acrossed the street":Pub,
  	  });
	
}
function EndMorning(){
  Clear();
	StartWork();
}