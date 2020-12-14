const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerAttack = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {    // Start system button Attack
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;

}

attackBtn.addEventListener('click', attackHandler);