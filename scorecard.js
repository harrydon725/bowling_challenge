class Scorecard{
    constructor(){
        this.frames = [] // Store of frames
        this.cleared10 = false // if a frame clears all 10 pins it makes this true this can help us with the next frame
        this.strike = false // if the frame is cleared in oe bowl this is also marked as true so we can distinguish between a apre and a strike
        this.score = 0 // current tally of score
        this.round = 0 // current tallyof rounds, not used as of yet

    }
    addframe(bowl1,bowl2){
        //adds last frame and updates score 
        // changes cleared 10 and strike Booleans - this allows the next frame to be multiplied correctly
        // return nothing
        // Side effects adds frame and changes modifier
        
        if (typeof bowl1 !== 'number' || typeof bowl2 !== 'number') { // Makes sure the inputs are numbers
            throw new Error('Frames must be numbers');}
        
        if (bowl1 + bowl2 > 10){ //checks whethere frame is less than or equal 10
            throw new Error('Frames cannot be more than 10');
        }
        if (bowl1 === 10){
            this.frames.push(['STRIKE'])
        } else if (bowl1 + bowl2 === 10){
            this.frames.push(['Spare',bowl1,bowl2])
        } else{
            this.frames.push([bowl1,bowl2])            
        }
        
        
        if (this.strike === true){ //scoringlogic
            this.score += 2 *  (bowl1 + bowl2)
        } else if (this.cleared10 === true){
            this.score += bowl1 + bowl1 + bowl2
        } else { this.score += (bowl1 + bowl2)
        }
        this.cleared10 = false // resets these values
        this.strike = false
        if (bowl1+bowl2 === 10){
            this.cleared10 = true
            if(bowl1 === 10){
                this.strike = true
            }
        }
        
    }

    addfinalframe(bowl1,bowl2,bowl3){
        if (typeof bowl1 !== 'number' || typeof bowl2 !== 'number'||typeof bowl3 !== 'number') { // Makes sure the inputs are numbers
            throw new Error('Frames must be numbers');}
        if (bowl1 > 10 || bowl2 > 10 || bowl3 > 10){
            throw new Error('Each bowl has to be 10 or less');
        }
        
        
        
        if (this.strike === true){ //scoringlogic
            this.score += 2 *  (bowl1 + bowl2+ bowl3)
        } else if (this.cleared10 === true){
            this.score += bowl1+bowl1+bowl2+bowl3
        } else{
            this.score += bowl1+bowl2+bowl3}


        
        this.cleared10 = false
        this.strike = false


        if (bowl1 === 10){
            bowl1 = 'STRIKE'
        }
        if (bowl2 === 10){
            bowl2 = 'STRIKE'
        }
        if (bowl3 === 10){
            bowl3 = 'STRIKE'
        }
        this.frames.push([bowl1,bowl2,bowl3])
        



    }
    calculateScore(){
        return this.score
        //returns the this.score
        
    }
    returnFrames(){
        return this.frames
    }
};



module.exports = Scorecard