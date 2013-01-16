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
   /*
    var hp : float;
    var maxhp : float;
    var healthBarWidth : int;
    var heightOfBar : int;
    var myHealthBar : GameObject;
    var myhb : GameObject;
    
    function Start (){
    healthBarWidth = 20;
    myhb = Instantiate(myHealthBar,transform.position,transform.rotation);
    }
    
    function Update (){
    myhb.transform.position = Camera.main.WorldToViewportPoint(transform.position);
    myhb.transform.position.x -=0.05;
    myhb.transform.position.y -=0.05;
    myhb.transform.localScale = Vector3.zero;
    var healthpercent : float = hp/maxhp;
    if(healthpercent < 0){healthpercent=0;}
    if(healthpercent >100){healthpercent =100;}
 	healthBarWidth = healthpercent*20;
 	myhb.guiTexture.pixelInset=Rect(100,100,healthBarWidth,heightOfBar);   
    }
*/