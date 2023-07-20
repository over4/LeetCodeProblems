//  given string of PAYPALISHIRING and number of rows being 3
//  PAYPALISHIRING
//  P   A   H   N
//  A P L S I I G
//  Y   I   R
//  return PAHNAPLSIIGYIR
//  read from left to right

let testword = "PAYPALISHIRING";

function zigzag(word,columns){
    //when a zigzag is not possible 
    if(columns ===1 || word.length < columns){
        return word
    }
    //initialize some variables
    let array = []
    let row = 0
    let reverse = false;
    let result = ""

    //fill the array with blanks
    for(let i =0; i<columns;i++){
        array[i] = []
    }
    //loop through the word
    for(let i = 0; i < word.length;i++){
        array[row].push(word[i])
        //check if we need to go in reverse direction
        if(reverse === false) {
            //not reverse so increase the row
            row ++
        }else {
            row--
        }
        //check if we are in the first or end to change direction
        if(row === columns -1 || row ===0){
            reverse = !reverse
        }
    }

        //now add all of the strings together from each row
        array.forEach((row) =>{
            result += row.join("")
        })
        return result
    }


console.log("The test word with 3 rows : "  +zigzag(testword,3))
console.log("The test word with 4 rows : " + zigzag(testword,4))
