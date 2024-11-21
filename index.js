// leap hear


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}


const year = parseInt(prompt("Entrez une année : "), 10);
console.log(isLeapYear(year));

// ticket
function ticketPricing(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return `Le prix du billet est de ${price} $.`;
}


const age = parseInt(prompt("Entrez votre âge : "), 10);
console.log(ticketPricing(age));



// sequence et fibonaci

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = parseInt(prompt("Entrez un nombre pour la séquence de Fibonacci : "), 10);
console.log(`Le ${n}ᵉ nombre de Fibonacci est ${fibonacci(n)}.`);

// vrificateur de palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}


const text = prompt("Entrez une chaîne pour vérifier si c'est un palindrome : ");
if (isPalindrome(text)) {
    console.log(`"${text}" est un palindrome.`);
} else {
    console.log(`"${text}" n'est pas un palindrome.`);
}



