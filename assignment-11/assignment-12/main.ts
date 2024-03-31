//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let names:string[] =["Nabiha", "Ayesha", "Sarah", "Mahi", "Fatima"]
const message:string = "Welcome to the Typescript class!"

for(let i=0; i<names.length; i++) {                       //for loop
     console.log(message + names[i]); 
};