#pragma strict

var damage : float;


function OnCollisionEnter(theCollision : Collision){


if (theCollision.gameObject.GetComponent(State)!=null){
	if ((theCollision.gameObject.GetComponent(State).isAttackable == true) && (theCollision.gameObject.GetComponent(State).type == TYPE.Enemy)){
	Debug.Log(theCollision.gameObject.name + " was hit");
	theCollision.gameObject.GetComponent(State).decreaseByDamage = damage;
	Destroy(gameObject);
	}
	else if (theCollision.gameObject.GetComponent(State).isAttackable == false){
	Destroy(gameObject);
	}
}
}

function Update (){
Destroy(gameObject,2);
}