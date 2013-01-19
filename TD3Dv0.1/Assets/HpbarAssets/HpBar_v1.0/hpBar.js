    var target : Transform;
    
    var texture : Texture;
    
	var maxHP : float = 100.0;
    
    var currentHP : float;
    
    var resolution = 67.0;
    
    var objectToWhichBarIsAttached : GameObject;
    
    function Update ()
    {	
     SetMaxHP();
     SetCurrentHP();
	 ComputeAndSetBarWidth();
	 ComputePositionOfABar(); 
    }
	
	function SetMaxHP(){
	maxHP = objectToWhichBarIsAttached.GetComponent(State).maxHP;
	}
	 
	function SetCurrentHP(){
	currentHP = objectToWhichBarIsAttached.GetComponent(State).currentHP;
	} 
	 
	function ComputeAndSetBarWidth(){
	barWidth = (currentHP*resolution)/maxHP ; 
	
	if (barWidth <= resolution){
		guiTexture.pixelInset.width = barWidth; 
	}
	else if (barWidth > resolution){
		guiTexture.pixelInset.width = resolution;
	}
	else{
		guiTexture.pixelInset.width = 0;
	}
	}
	
	function ComputePositionOfABar()
	{
	gameObject.guiTexture.texture = texture;
    transform.position =  Camera.main.WorldToViewportPoint(target.position);
	}