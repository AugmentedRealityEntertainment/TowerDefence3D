#pragma strict

enum TYPE {Base,Top,Weapon,Tower1,Tower3,Critter,Projectile,Start};
enum CATEGORY {Tower,Enemy,Spawner,Enviorment,Effect};

var isAttackable : boolean; // true if object can be attacked

var type : TYPE; // type of object

var category : CATEGORY;	// category of object
    
var decreaseByDamage  : float; // write to decrease health
    
var increaseByDamage  : float; // write to increas health

var towerBase : State;
var towerTop : State;
var towerWeapon : State;

//STATS

//other
var parry : int;
var morale : int;
var attackRange : int;
var currentHP : float = 100; // current level of health

//strength
var armor : int;
var maxHP : float = 100; // maximum value of health
var damageS : float;
var blockRate : float;
var armorPenetration : float;

//agility
var speedMovement : float;
var attackSpeed : float;
var swingSpeed : float;
var dodge : float;
var block : float;
var chanceToHitA : float;
var chanceToCritA : float;

//intelect
var mana : int;
var spellPenetration : float;
var spellResistance : float;
var castSpeed : float;
var cooldown : float;
var damageI : float;
var manaRegenPer5Sec : float;
var chanceToHitI : float;
var chanceToCritI : float;

function Start()
{
	if(category == CATEGORY.Tower && type == TYPE.Tower3)
		AssignTowerComponents();	
}

function AssignTowerComponents()
{
	for(var child : GameObject in gameObject)
	{
		var script : State;
		script = child.GetComponent(State);
		switch(script.type)
		{
			case TYPE.Base:
				break;
			case TYPE.Top:
				break;
			case TYPE.Weapon:
				break;
		}
	}
}

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

function UpdateStats()
{
	//other
	
}
