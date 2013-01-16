
var currentPosition : Vector3;

var destinationPosition : Vector3;

var movementSpeed : float = 0.1;



function Update () {

currentPosition = gameObject.transform.position;

var movementVector = destinationPosition - currentPosition;

movementVector.x = movementVector.x * Time.deltaTime * movementSpeed;
movementVector.y = 0;//movementVector.y * Time.deltaTime * movementSpeed;
movementVector.z = movementVector.z * Time.deltaTime * movementSpeed;

gameObject.transform.Translate(movementVector);

}
