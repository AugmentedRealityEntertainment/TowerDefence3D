    var target : Transform;
    
    var texture : Texture;
    
	var maxHP : float = 100.0;
	
    var decreaseByPercent : float;
    
    var decreaseByDamage  : float;
    
    var increaseByDamage  : float;
    
    var currentHP : float;
    
    var resolution = 67.0;
   
    
    function Update ()
    {	
    	 
	 SubtractHP(Mathf.Abs(decreaseByDamage));
	 AddHP(Mathf.Abs(increaseByDamage));
	 ComputeAndSetBarWidth();
	 ComputePositionOfABar(); 
	 increaseByDamage =decreaseByDamage =0;
    }
    
    
    function SubtractHP(damageDealt:float)
    {
    currentHP = currentHP - damageDealt;
    if (currentHP<0){currentHP=0;}
    if (currentHP>maxHP){currentHP=maxHP;} 
    }
    
    function AddHP(damageHealt:float)
    {
    currentHP = currentHP + damageHealt;
    if (currentHP<0){currentHP=0;}
    if (currentHP>maxHP){currentHP=maxHP;}
    }


	function ComputeAndSetBarWidth()
	{
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