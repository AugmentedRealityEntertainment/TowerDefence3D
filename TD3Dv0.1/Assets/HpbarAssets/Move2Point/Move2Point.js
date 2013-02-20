
var currentPosition : Vector3;

var destinationPositions : Vector3[];

var movementSpeed : float = 1;

var indexOfDestination : int;

var destinationReached : boolean;

var epsilon : int = 2;

function Update () {

currentPosition = gameObject.transform.position;

var movementVector = destinationPositions[indexOfDestination] - currentPosition;

//normalized vector fix different movement speed on different distance
gameObject.transform.Translate(movementVector.normalized * Time.deltaTime * movementSpeed);

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