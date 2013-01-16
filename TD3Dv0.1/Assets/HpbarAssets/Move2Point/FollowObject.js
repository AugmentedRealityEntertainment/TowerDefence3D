
var currentPosition : Vector3;

var destinationPosition : Vector3;

var movementSpeed : float = 0.1;

var followedObject : GameObject;

var distanceBetweenObjects : float; // under development

function Update () {
currentPosition = gameObject.transform.position;

destinationPosition = followedObject.transform.position;


var movementVector = destinationPosition - currentPosition;

movementVector.x = (movementVector.x + (Mathf.Sqrt(2)*distanceBetweenObjects)) * Time.deltaTime * movementSpeed;
movementVector.y = 0;//movementVector.y * Time.deltaTime * movementSpeed;
movementVector.z = (movementVector.z + (Mathf.Sqrt(2)*distanceBetweenObjects)) * Time.deltaTime * movementSpeed;

gameObject.transform.Translate(movementVector);

}
