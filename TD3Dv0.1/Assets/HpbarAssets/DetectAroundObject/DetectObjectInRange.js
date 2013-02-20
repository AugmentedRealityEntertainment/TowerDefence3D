#pragma strict
var disableDebug : boolean = false;

var range : float;

var currentTarget : GameObject;

function Update () {

var arrayOfCollisions = Physics.OverlapSphere(gameObject.transform.position,range);

var i : int;
	for (i = 0;i < arrayOfCollisions.Length;i++)
	{
	var ind : int;
	
		if (arrayOfCollisions[i].GetComponent(State).isAttackable == true){
			if (arrayOfCollisions[i].gameObject.name != gameObject.name)		{
				if (!disableDebug){
				Debug.Log(arrayOfCollisions[i].gameObject.name + " is in range of " + gameObject.name +
												" at point " + arrayOfCollisions[i].gameObject.transform.position.x + ","
															 + arrayOfCollisions[i].gameObject.transform.position.y + ","
															 + arrayOfCollisions[i].gameObject.transform.position.z);
				Debug.DrawRay(gameObject.transform.position,arrayOfCollisions[i].gameObject.transform.position - gameObject.transform.position, Color.red);
				}
			currentTarget = arrayOfCollisions[i].gameObject;
			}
		}
	}

}
