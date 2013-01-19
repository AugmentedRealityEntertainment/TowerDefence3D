#pragma strict

var isAttackable : boolean;

enum TYPE {Turret,Enemy,Spawner,Enviorment,Effect};

var type : TYPE;

var maxHP : float = 100;

var currentHP : float = 100;
    
var decreaseByDamage  : float;
    
var increaseByDamage  : float;

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