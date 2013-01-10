using UnityEngine;
using System.Collections;

public class click_target : MonoBehaviour 
{
	private float doubleClickStart = 0;
	public float delay = 0.3f;

    void OnMouseUp()
    {
        if ((Time.time - doubleClickStart) < delay)
        {
            this.OnDoubleClick();
            doubleClickStart = -1;
        }
        else
        {
            doubleClickStart = Time.time;
        }
    }

    void OnDoubleClick()
    {
        GameObject.Find("Camera").GetComponent<SmoothLookAt>().target = transform;
    }
}
