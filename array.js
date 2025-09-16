const numbers = [1,2,3,4,5]
numbers.splice(1, 0, 7,9)
console.log(numbers)

const employeeList = [
    {
        id: 1,
        name: 'jim'
    },
     {
        id: 2,
        name: 'jide'
    },
     {
        id: 3,
        name: 'jite'
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
console.log(combinedArray.splice(1,4))

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

