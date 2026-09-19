const prompt=require('prompt-sync')();
let n =parseInt (prompt ('entrer votre nombre de multipication: '));


for (let i=1;i<=10;i++) {
    let resultat =n*i ;


console.log(`${n}*${i} = ${resultat}`);

}

