using UnityEngine;
using System.Collections;

public class main_menu : MonoBehaviour 
{
	public bool isStart, isExit;
	
	void OnMouseUp()
	{
		if(isStart)
			Application.LoadLevel(1);
		else if(isExit)
			Application.Quit();
	}
	
	void OnMouseEnter()
	{
		renderer.material.color = Color.red;
	}
	
	void OnMouseExit()
	{
		renderer.material.color = Color.white;
	}
}
