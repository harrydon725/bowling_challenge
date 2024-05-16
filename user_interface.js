const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const Scorecard = require("./scorecard");


function userinterface() {
    const scorecard = new Scorecard();
    let current_round = 1;

    function playRound() { // end of game
        if (current_round > 10) {
            readline.close();
            console.log("End of da Game!");
            console.log(scorecard.returnFrames());
            console.log(`Final Score: ${scorecard.calculateScore()}`);
            return;
        }
        if (current_round === 10){ // final round
            console.log(`Final Round`);
            readline.question('First Bowl score >>> ', bowl1 => {
                bowl1 = parseInt(bowl1, 10);
    
                readline.question('Second Bowl score >>> ', bowl2 => {
                    bowl2 = parseInt(bowl2, 10);
                    
                    readline.question('Third Bowl score >>> ', bowl3 => {
                        bowl3 = parseInt(bowl2, 10);
    
                    scorecard.addfinalframe(bowl1, bowl2, bowl3);
                    
                    console.log(scorecard.returnFrames());
                    console.log(scorecard.calculateScore());
                    current_round += 1;
                    playRound();
                });
            });
        }
            
        )}else{ // rounds 1-9

        console.log(`Round ${current_round}`);
        readline.question('First Bowl score >>> ', bowl1 => {
            bowl1 = parseInt(bowl1, 10);

            readline.question('Second Bowl score >>> ', bowl2 => {
                bowl2 = parseInt(bowl2, 10);

                scorecard.addframe(bowl1, bowl2);
                
                console.log(scorecard.returnFrames());
                console.log(scorecard.calculateScore());
                current_round += 1;
                playRound(); 
            });
        });
    }}

    playRound(); // Start the first round
}

userinterface();

module.exports = userinterface()