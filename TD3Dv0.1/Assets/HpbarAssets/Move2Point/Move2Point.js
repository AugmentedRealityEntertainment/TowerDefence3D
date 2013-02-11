
var currentPosition : Vector3;

var destinationPositions : Vector3[];

var movementSpeed : float = 0.1;

var indexOfDestination : int;

var destinationReached : boolean;

var epsilon : int = 2;

function Update () {

currentPosition = gameObject.transform.position;

var movementVector = destinationPositions[indexOfDestination] - currentPosition;

movementVector.x = movementVector.x * Time.deltaTime * movementSpeed;
movementVector.y = 0;//movementVector.y * Time.deltaTime * movementSpeed;
movementVector.z = movementVector.z * Time.deltaTime * movementSpeed;

gameObject.transform.Translate(movementVector);

destinationReached = checkIfDestinationIsReached(epsilon);
	if (destinationReached){
	indexOfDestination++;
	}
	
	if (indexOfDestination == destinationPositions.Length){
	indexOfDestination =0;
	}

}


function checkIfDestinationIsReached(epsilon : int) : boolean {
	if(Vector3.Distance(gameObject.transform.position,destinationPositions[indexOfDestination]) <= epsilon){
		return true;
	}
	else {
		return false;
	}
}