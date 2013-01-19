
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
	movementVector.x = movementVector.x * Time.deltaTime * movementSpeed;
	if (allowVerticalFollowing){
		movementVector.y = movementVector.y * Time.deltaTime * movementSpeed;
	}else{
		movementVector.y = 0;
	}
	movementVector.z = movementVector.z * Time.deltaTime * movementSpeed;
}
else
{
	movementVector.x = 0;
	movementVector.y = 0;
	movementVector.z = 0;
}
}


gameObject.transform.Translate(movementVector);

}
