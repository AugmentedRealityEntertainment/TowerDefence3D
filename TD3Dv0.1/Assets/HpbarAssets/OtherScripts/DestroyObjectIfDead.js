#pragma strict


function Update () {
if (gameObject.GetComponent(State).currentHP <= 0)
{
Destroy(gameObject);
}
}