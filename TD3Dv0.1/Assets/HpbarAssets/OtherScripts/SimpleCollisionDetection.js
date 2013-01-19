
//Basic collision detection checking for two differently named objects

    function OnCollisionEnter(theCollision : Collision){

      Debug.Log(theCollision.gameObject.name + "was hit");

    }

