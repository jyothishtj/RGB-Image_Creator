/**
* Utility function to create a random integer from min and max values.
* Reference https://www.w3schools.com/js/js_random.asp
* @function randInt
* @Params Integer "Min" and "Max" values
* @returns Integer "random integer between Min and Max"
*/
export const randInt= (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

