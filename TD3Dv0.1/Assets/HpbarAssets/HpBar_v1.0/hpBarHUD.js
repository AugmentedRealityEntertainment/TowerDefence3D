    var target : Transform;
    
    var texture : Texture;
    
    function Update (){	
		 gameObject.guiTexture.texture = texture;
         var wantedPos = Camera.mainCamera.WorldToViewportPoint (target.position);
         transform.position = wantedPos;
    }
    
