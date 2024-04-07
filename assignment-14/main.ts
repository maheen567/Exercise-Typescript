//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest:string[] = ["Rana", "Sana", "Mana", "Rani"];
for(let i=0; i<guest.length; i++){
    console.log(`You're invited to a dinner, ` + guest[i])
};