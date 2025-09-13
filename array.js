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