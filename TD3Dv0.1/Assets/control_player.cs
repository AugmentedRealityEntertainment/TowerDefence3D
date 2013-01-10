using UnityEngine;
using System.Collections;

public class control_player : MonoBehaviour 
{
	public Transform target;
	private Rigidbody myRigid;
	public float movementSpeed = 10;

	// Use this for initialization
	void Start () 
	{
		myRigid = target.rigidbody;
	}
	
	// Update is called once per frame
	void Update () 
	{
		
	}
	
	void FixedUpdate()
	{
		if(Input.GetKey(KeyCode.LeftArrow))
			myRigid.AddForce(-movementSpeed,0,0,ForceMode.Acceleration);
		if(Input.GetKey(KeyCode.RightArrow))
			myRigid.AddForce(movementSpeed,0,0,ForceMode.Acceleration);
		if(Input.GetKey(KeyCode.UpArrow))
			myRigid.AddForce(0,0,movementSpeed,ForceMode.Acceleration);
		if(Input.GetKey(KeyCode.DownArrow))
			myRigid.AddForce(0,0,-movementSpeed,ForceMode.Acceleration);
	}
}
