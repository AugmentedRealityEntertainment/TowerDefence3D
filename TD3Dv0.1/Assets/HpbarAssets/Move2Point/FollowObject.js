
var currentPosition : Vector3;

var destinationPosition : Vector3;

var movementSpeed : float = 0.1;

var followedObject : GameObject = null;

var distanceBetweenObjects : float;

private var epsilon :float = 0.031;

function Update ()
{
currentPosition = gameObject.transform.position;

if (followedObject!=null)
{
	destinationPosition = followedObject.transform.position;

	gameObject.transform.LookAt(destinationPosition);

	if (Vector3.Distance(currentPosition,destinationPosition) >= distanceBetweenObjects)
		gameObject.transform.Translate(Vector3.forward * Time.deltaTime * movementSpeed);
}
else
{
	Destroy(gameObject);
}

}
