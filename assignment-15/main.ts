//Question15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guest:string[] = ["Rana", "Sana", "Mana", "Rani"];
for(let i=0; i<guest.length; i++){
    console.log(`You're cordially invited to a dinner, ` + guest[i])
}; 


let absentGuest:string = "Rana";
let newGuest:string = "Hassan";
guest[0] = newGuest

for(let i=0; i<guest.length; i++){
    console.log(`You're cordially invited to a dinner, ` + guest[i])
};

console.log(`Mr.${absentGuest} is not coming to the party.`);

