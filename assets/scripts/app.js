const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function handlerAttack(mode) {
    let typeMode = mode;
    const damage = dealMonsterDamage(typeMode);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;


    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won !");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost !");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("You have a draw !");
    }

}

function attackHandler() {    // Start system button Attack
    handlerAttack(ATTACK_VALUE)
}

function strongAttackHandler() {
    handlerAttack(STRONG_ATTACK_VALUE)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
