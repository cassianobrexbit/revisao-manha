const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Escreva o nome: `, name => {
    nome = name;
    //console.log(`Hi ${name}!`);
    readline.close();
});
