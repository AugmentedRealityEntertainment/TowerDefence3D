#pragma strict

var range : float;
function Update () {

var arrayOfCollisions = Physics.OverlapSphere(gameObject.transform.position,range);

var i = 0;
while (arrayOfCollisions[i]!= null)
{
if (arrayOfCollisions[i].gameObject.name != gameObject.name)
{
Debug.Log(arrayOfCollisions[i].gameObject.name + " is in range of " + gameObject.name +
								" at point " + arrayOfCollisions[i].gameObject.transform.position.x + ","
											 + arrayOfCollisions[i].gameObject.transform.position.y + ","
											 + arrayOfCollisions[i].gameObject.transform.position.z);
Debug.DrawRay(gameObject.transform.position,arrayOfCollisions[i].gameObject.transform.position - gameObject.transform.position, Color.green);
Debug.Log(i + " objects in range");
}
i++;
}

}

/*function OnCollisionEnter(theCollision : Collision){

Debug.Log(theCollision.gameObject.name + " is in range of " + gameObject.name +
						" at point " + theCollision.gameObject.transform.position.x + ","
									 + theCollision.gameObject.transform.position.y + ","
									 + theCollision.gameObject.transform.position.z);
}*/