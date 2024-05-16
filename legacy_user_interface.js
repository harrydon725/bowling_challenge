const Scorecard = require("./scorecard");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout});


function userinterface(){
    const scorecard = new Scorecard();
    let current_round = 1;
    while (current_round < 11){     
        readline.question('First Bowl score >>> ', bowl1 => {
            bowl1 = parseInt(bowl1, 10);
            
            readline.question('Second Bowl score >>> ', bowl2 => {
                bowl2 = parseInt(bowl2, 10);
                

                scorecard.addframe(bowl1, bowl2);
                readline.close(); 
                
                console.log(scorecard.returnFrames());
                console.log(scorecard.calculateScore());
                current_round += 1;  
                console.log(current_round)
            })})};
}   
userinterface();