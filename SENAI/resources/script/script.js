let emails = [
    "ana@gmail.com",
    "pedro@hotmail.com",
    "amanda@gmail.com",
    "paulo@yahoo.com",
    "mariana@gmail.com",
    "andre@hotmail.com",
    "carla@gmail.com",
    "bruno@yahoo.com"
];

// Exercício 1 - includes()
// Criar um array com os emails que incluem "gmail"

let emailsGmail = emails.filter(email =>
    email.includes("gmail")
);

console.log("Emails que incluem gmail:");
console.log(emailsGmail);


// Exercício 2 - startsWith()
// Criar um array com os emails que começam com a letra "a"

let emailsLetraA = emails.filter(email =>
    email.startsWith("a")
);

console.log("Emails que começam com a letra a:");
console.log(emailsLetraA);


// Exercício 3 - endsWith()
// Criar um array com os emails que terminam com "hotmail.com"

let emailsHotmail = emails.filter(email =>
    email.endsWith("hotmail.com")
);

console.log("Emails que terminam com hotmail.com:");
console.log(emailsHotmail);


// Desafio - startsWith() e endsWith()
// Emails que começam com "a" e terminam com "gmail.com"

let desafio = emails.filter(email =>
    email.startsWith("a") && email.endsWith("gmail.com")
);

console.log("Desafio:");
console.log(desafio);