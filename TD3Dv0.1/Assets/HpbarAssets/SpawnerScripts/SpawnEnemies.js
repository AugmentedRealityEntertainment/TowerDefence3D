    var spawnPoints : Transform[];  // Array of spawn points to be used.
    var enemyPrefabs : GameObject[]; // Array of different Enemies that are used.
    var amountEnemies = 20;  // Total number of enemies to spawn.
    var yieldTimeMin = 2;  // Minimum amount of time before spawning enemies randomly.
    var yieldTimeMax = 5;  // Don't exceed this amount of time between spawning enemies randomly.
     
    function Start(){
        Spawn();
    }
     
    function Spawn(){
       for (i=0; i<amountEnemies; i++){ // How many enemies to instantiate total
          yield WaitForSeconds(Random.Range(yieldTimeMin, yieldTimeMax));  // How long to wait before another enemy is instantiated.
     
          var obj : GameObject = enemyPrefabs[Random.Range(0, enemyPrefabs.length)]; // Randomize the different enemies to instantiate.
          var pos: Transform = spawnPoints[Random.Range(0, spawnPoints.length)];  // Randomize the spawnPoints to instantiate enemy at next.
          
          Instantiate(obj, pos.position, pos.rotation);
       }
    }