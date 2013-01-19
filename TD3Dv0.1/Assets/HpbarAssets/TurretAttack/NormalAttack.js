
var projectilePrefab : GameObject;

var currentTarget : GameObject;

var reloaded : boolean;

var shotsPerSec : float = 1.0;

function Update () {


if(gameObject.GetComponent(DetectObjectInRange)!=null){
	var target : GameObject = gameObject.GetComponent(DetectObjectInRange).currentTarget;
	currentTarget = target;
	if (target!=null){
		Shoot(target);
	}
}
else{
	Debug.Log("DetectObjectInRange <- Component not found");
}
}

var time = 1/shotsPerSec;
function Shoot (target : GameObject) {


if(reloaded == true){
	reloaded = false;
	Debug.Log(gameObject.name + " - Ready");
	
	var bullet = Instantiate(projectilePrefab, gameObject.transform.position, Quaternion.identity);
	
	if(bullet.GetComponent(FollowObject)!=null){ 
		bullet.GetComponent(FollowObject).followedObject = target;
	}
	else{
		Debug.Log("FollowObject <- Component not found");
	}
}else{
 	if(time > 0){
 		time -= Time.deltaTime;
	}
	if (time <= 0 ){
  		reloaded = true;
  		time = 1/shotsPerSec;
 	}
	Debug.Log(gameObject.name + " - Reloading...");	
}
}


