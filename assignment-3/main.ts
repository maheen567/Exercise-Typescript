//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "Maheen";

//to lowercase:
console.log(personName.toLowerCase());

//to uppercase
console.log(personName.toLocaleUpperCase());

//to titlecase
console.log(personName.replace(/\bw/g,c=>c.toLocaleUpperCase()));
