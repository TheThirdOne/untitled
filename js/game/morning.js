function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	//PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	narrator("<b>[Untitled]</b>");
	narrator("A game about life.");
	narrator("Are you ready to begin?");
  Wakeup();
	Choose({
		"Yes": Wakeup,
		"No": Wakeup
	});

}

function Wakeup(m){
  if(m){
    
  }
  Show("background","alarm");
  PlaySound("bg","alarm",{loop:0, volume:0.7});
  narrator("Hopefully, you can find yours");
  Choose({
		"Ok": function(m){},
		"Later, Mom": function(m){}
	});
}