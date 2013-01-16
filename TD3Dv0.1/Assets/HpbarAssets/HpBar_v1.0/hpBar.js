    var target : Transform;
    
    var texture : Texture;
    
	var maxHP : int = 100;
	
    var decreaseByPercent : float;
    
    var decreaseByDamage  : float;
    
    var currentHP : float;
    
    var resolution = 67.0;
   
    
      function Update ()
    {	
    	 
    	 var hpLeftAfterDamage = (maxHP - decreaseByDamage)/maxHP ;
    	 currentHP = hpLeftAfterDamage*maxHP;
    	 
  		 if (hpLeftAfterDamage*resolution >= 0)
    	 {
    		 guiTexture.pixelInset.width = hpLeftAfterDamage*resolution; 
    	 }
    	 else
    	     guiTexture.pixelInset.width = 0;
    	  
		 gameObject.guiTexture.texture = texture;
         transform.position =  Camera.main.WorldToViewportPoint(target.position);

    }
