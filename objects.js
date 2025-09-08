function dogDetails(name, breed, color, height){
    return {
        name, breed,color,height
    }

}

const dogTwo = dogDetails("brad", "german shepherd", "brown", 6.7)
dogTwo.owner = 'festus'
const dogThree = dogDetails("stoner", "boxer", "white", 3.4)
dogThree['owner'] = 'mark'

delete dogThree.breed;
console.log( dogThree )
console.log( dogTwo)

//constructor functions are named with pascal case and the function keyword are nouns. they contain objects with key-value pairs
function Dog (nam, bred, colr, heght){
    this.nam = nam,
    this.bred = bred,
    this.colr = colr,
    this.heght = heght
}

const dogfour = new Dog('mario', 'american eskimo', 'white', 3.5)
console.log(dogfour)



function addNumbers(num3, num4){
    return num3 + num4
}

const n = addNumbers(10,20)



// obbjects are copied by values while primitives are coppied by reference
//copied by reference
let var1 = 10
let var2 = var1

var1 = 100

console.log (var1)
console.log(var2)
//copied by value
let var3 = {value: 100}
let var4 = var3

var3.value = 300

console.log(var3)
console.log(var4)

//making a clone of an object
let var6 = {value : 10}
let var7 = {...var6}

Object.assign(var6, var7)

var7.value = 209

console.log(var7, var6)

// object iteration
const ObjValue = {
title: 'my list',
item: 'some stuffs',
list: 10
}
//iterates values
const values = Object.values(ObjValue)
//iterates keys
const keys = Object.keys(ObjValue)
//iterates entries (whole  properties)
const entries = Object.entries(ObjValue)

console.log(values)
console.log(keys)
console.log(entries)


let max = 1
let min = 10
const randomNumber = Math.round(Math.random()* (max-min) + min)
console.log(randomNumber)

let sentence = "I am so blessed"
const sentenceReplace = sentence.replace('so', 'super')
console.log(sentenceReplace)
const sentenceTrim = sentence.trim()
console.log(sentenceTrim)
const sentenceIncludes = sentence.includes('blessed')
console.log(sentenceIncludes)
console.log(sentence)
const sentenceStart = sentence.startsWith('I')
console.log(sentenceStart)
const sentenceSplit = sentence.split(' ')
console.log(sentenceSplit)

const sentenceLowerCase = sentence.toLocaleLowerCase()
const sentenceUpperCase = sentence.toUpperCase()
console.log("lowercase:" + " " +  sentenceLowerCase, "uppercase:" +  " " +   sentenceUpperCase)

const sentencePosition = sentence.indexOf("s")

console.log(sentencePosition)