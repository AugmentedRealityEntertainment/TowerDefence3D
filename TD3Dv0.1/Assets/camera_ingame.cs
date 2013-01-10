using UnityEngine;
using System.Collections;

public class camera_ingame : MonoBehaviour 
{
	public float speedMovement = 10;
	public float speedRotation = 10;
	public float speedScroll = 40;
	
	public Vector3 Max, Min;
	
	void Update()
	{
		transform.position = new Vector3(
			Mathf.Clamp(transform.position.x,Min.x,Max.x),
			Mathf.Clamp(transform.position.y,Min.y,Max.y),
			Mathf.Clamp(transform.position.z,Min.z,Max.z));
	}
	
	void LateUpdate()
	{
		if(Input.anyKeyDown)
		{
			GameObject.Find("Camera").GetComponent<SmoothLookAt>().target = null;
		}
		if(Input.GetKey(KeyCode.W))
		{
			transform.Translate(0,0,speedMovement*Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.S))
		{
			transform.Translate(0,0,-speedMovement*Time.deltaTime);
		}
		if(Input.GetKey(KeyCode.A))
		{
			transform.Translate(-speedMovement*Time.deltaTime,0,0);
		}
		if(Input.GetKey(KeyCode.D))
		{
			transform.Translate(speedMovement*Time.deltaTime,0,0);
		}
		if (Input.GetAxis("Mouse ScrollWheel") > 0) // forward
    	{
        	transform.Translate(0,0,speedScroll*Time.deltaTime);
    	}
    	if (Input.GetAxis("Mouse ScrollWheel") < 0) // back
    	{
        	transform.Translate(0,0,-speedScroll*Time.deltaTime);
    	}
	}
}
