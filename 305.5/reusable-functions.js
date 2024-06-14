
// Take an array of numbers and return the sum.

function sumOfArray(numbers){
    let sum =0;
 for(let i= 0; i < numbers.length; i ++){
   sum += numbers[i]
 }
 console.log(sum)
}
sumOfArray([1,2,3])


// Take an array of numbers and return the average.

function average(numbers){
    let sum = 0
    for(let i= 0; i < numbers.length; i ++){
        sum += numbers[i]
      }

      console.log("The average is " + sum/ numbers.length)

}

average([1,2,3])



// Take an array of strings and return the longest string.
function longestString(strings){
    let biggestString =" "

       
        biggestString = "sad"
    for(let i= 0; i < strings.length; i++){
        console.log(strings[i])
        if ( i === 0){
            biggestString = strings[i]
        } else if (biggestString.length > strings[i].length ){
            console.log(`${biggestString} is still bigger than ${strings[i]}`)
        } else {
            biggestString = strings[i]
            console.log(`New Biggest String is ${strings[i]}`)
        }
      }

      console.log(biggestString)

}
// longestString(["sad", "mad" ,"dad", "chad", "lad"])

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(array, num){
    let result = []
    for (let i= 0; i < array.length; i++){
        if ( array[i].length > num){
            result.push(array[i])
        } else{
            console.log(`${array[i]} is not longer than ${num}`)
        }
    }
    if (result.length != 0){
        console.log(result)
    } else{
        console.log("Theres no string thats higher than your number")
    }
} 

stringsLongerThan(["Ophiocordyceps-Unilateralis", "Me" ,"Horse", "Turkey", "Dog"], 10)

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.


let starting = 0;
function recursionNumber(n){

starting +=1

if (starting >= n){
    console.log(starting)

} else {
    console.log(starting)
    recursionNumber(n)
}
}

recursionNumber(10)

// let csvWithoutN = csv.split("\n") // -> creates a new array that splits the array between \n
