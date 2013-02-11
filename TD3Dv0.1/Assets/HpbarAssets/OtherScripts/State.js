#pragma strict

enum TYPE {Turret,Enemy,Spawner,Enviorment,Effect};

var isAttackable : boolean; // true if object can be attacked

var type : TYPE; // type of object

var maxHP : float = 100; // maximum value of health

var currentHP : float = 100; // current level of health
    
var decreaseByDamage  : float; // write to decrease health
    
var increaseByDamage  : float; // write to increas health

function Update () {
SubtractHP(Mathf.Abs(decreaseByDamage));
AddHP(Mathf.Abs(increaseByDamage));
increaseByDamage =decreaseByDamage =0;
}

function SubtractHP(damageDealt:float)
{
currentHP = currentHP - damageDealt;
if (currentHP<0){currentHP=0;}
if (currentHP>maxHP){currentHP=maxHP;} 
}

function AddHP(damageHealt:float)
{
currentHP = currentHP + damageHealt;
if (currentHP<0){currentHP=0;}
if (currentHP>maxHP){currentHP=maxHP;}
}