
//•CreateanarrayofStringsandusingaforloopsaveallthevaluesinanothervariableseparatedbysemi-colon.

const string_array = ['word0', 'word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9'] 

for (var i = 0; i < string_array.length; i++) { 
  
    let string = `${string_array[i]};`
    console.log(string)
}

//•Createafunctionthatreceivedanumberandvalidateifitisoddoreven,useternaryoperations.

const aFunctionThatReceivesANumberAndValidatesIfItsOddOrEven = (number) => number % 2 === 0 ? true : false

for(var i = 1; i < 11; i++) {
console.log( `is number ${i} even? ${aFunctionThatReceivesANumberAndValidatesIfItsOddOrEven(i)}`)

} 
