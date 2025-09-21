const numbers = [1,2,3,4,5]
numbers.splice(1, 0, 7,9)
console.log(numbers)

const employeeList = [
    {
        id: 1,
        name: 'jim',
        role: 'developer',
        email: 'JIM@gmail.com'
    },
     {
        id: 2,
        name: 'jide',
        role: "driver",
        email: 'JIDE@gmail.com'
    },
     {
        id: 3,
        name: 'jite',
        role: "developer",
        email: 'JITE@gmail.com'
    }
]

const employeeIncludes = employeeList.find( (e) => e.id === 2)
console.log(employeeIncludes)

const objets = {
    name: 'ola',
    age: 12
}


console.log(Object.values(objets))

// with slice, i could specify a start and end index of an array--and takes 2 argument

const array1 = ['ola', 'ade', 'ayo']
const array2 = ['tolu', 'lope', 'bola']

const combinedArray = array1.concat(array2)
console.log( combinedArray)
console.log( "combined result" + "" +combinedArray.slice(1,4))

const spreadArray = [...array1, array2]

console.log(spreadArray)

//.join methods allows for the conversion of arry into a string and the .join method takes the eparator(to be used on the string) as an argument

const joinedArray = array1.join('- ')
console.log(joinedArray)

//the split method converts an existing array to a new array. the way it works is it locates whatever argument that is passed into the method, and acts on it for the separation of that array and converts them into srtings
const sentence = 'I am blessed'
const split_Sentence = sentence.split(' ')

console.log(split_Sentence)

//sort -arranges thne content od an array in an ascending order

const sortedArray = array1.sort()
console.log(sortedArray)

//every method

const num = [2,4,6,8,10];

const areAllEven = num.every(n => n % 2 === 0);

console.log(`are all even : ${areAllEven}`)


//some method - returns true if a certain element in the array fulfils the required parameter
const oneEvenNum = [10, 13,17,19,37]
const hasOneEvenNum = oneEvenNum.some(evenNum => evenNum % 2 === 0)

console.log(`has one even number : ${hasOneEvenNum}`)

//filter method

const arrayNum = [1,2,3,4,5,6,7,8,9]
const filterEvenNum = arrayNum.filter(en =>{
    return en % 2 === 0
})

console.log(`filtered array : ${filterEvenNum}`)

const devRole = employeeList.filter(employee => employee.role === 'developer')

console.log(devRole)

//map method

const squardNum = numbers.map(nm => nm*nm)
console.log(a=squardNum)
console.log(numbers)

const charcters = ["a", "b", "c", "d"]
const mapToUpperCase = charcters.map(ch => ch.toLocaleUpperCase())
console.log(mapToUpperCase)

const mappedEmploye = employeeList.map(em => ({
    ...em,
    email: em.email.toLocaleLowerCase()
}) )

console.log(mappedEmploye)

 //reduvced array

 const reducednumbers = [10,23,45,67]
//  let sum = 0

//  for (const rn of reducednumbers)
//     sum += rn
// console.log(sum)

const reducedArray = reducednumbers.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue
})

console.log(reducedArray)