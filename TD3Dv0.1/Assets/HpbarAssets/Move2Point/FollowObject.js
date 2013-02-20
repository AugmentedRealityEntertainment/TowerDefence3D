
var currentPosition : Vector3;

var destinationPosition : Vector3;

var movementSpeed : float = 0.1;

var followedObject : GameObject = null;

var distanceBetweenObjects : float;

var allowVerticalFollowing : boolean = false;

private var epsilon :float = 0.031;

function Update () {
currentPosition = gameObject.transform.position;

if (followedObject!=null){
destinationPosition = followedObject.transform.position;


var movementVector = destinationPosition - currentPosition;

if (Vector3.Distance(currentPosition,destinationPosition) >= distanceBetweenObjects)
{
	movementVector = movementVector.normalized * Time.deltaTime * movementSpeed;

	if (allowVerticalFollowing == false){
		movementVector.y = 0;
	}
}
else
{
	movementVector.x = 0;
	movementVector.y = 0;
	movementVector.z = 0;
}
}
else{
Destroy(gameObject);
}


gameObject.transform.Translate(movementVector);

}
