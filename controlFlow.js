const point = 110
const customerType = point > 100 ? "Gold" : "silver"
console.log(customerType)

const c1 = "blue"
const c2 = "red"
const truthy = c1 && c2
console.log(truthy)


let job = "developer"

switch (job) {
    case "fashion designer " :
        console.log("sew cloth")
        case "cloud eng":
            console.log.log("manage cloud architects")
            case "developer":
                console.log("builds solution")
                default: ("can be anything")
}


const numbers = [1,2,33,7,9,8,6,4]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}



let fuel= 10
while( fuel > 0){
    console.log("driving")
    fuel--
}


let i = 0
do {
    console.log(i)
    i++;
} while(i<10)

    const course = {
        title : 'javascript',
        duaration : 3,
        section: 12
    }

    for (const k in course){
        console.log(course[k])
    }

    const names = ["David", "Dam", "Kay", "Jude"]
    for (const elements of names)
        console.log(elements)

    const items = [1,10,7,2,3,4,5]
    for ( const i of items){
        if (i === 4){
            break
        }
        console.log(i)

    }

    const obj = {a:1, b:2, c:3}
    for (const O in obj){
        if (O === 'b')
        {
            break
        }
        console.log(O)
    }

 for (i= 0; i<10; i++){
    if (i%2 === 0){
        continue
    }

    console.log(i)
 }

 function getDog (name, breed, weight, age){
    return{
        name,
        breed,
        weight,
        age,
        eat(){
            console.log('Eat')
        },
        bark(){
            console.log("whoof!")
        }

    }

 }

 const newDog = getDog("Marley", "german shepherd", 10, 2)
 console.log(newDog)

// constructor function
 function Details (name, number, teacher,school){
    this.name = name;
    this.number = number;
    this.teacher = teacher;
    this.school = school
 }

 const assign = new Details("Nusery2", 20, "miss blessing", "bnps")
 console.log(assign)


 const person = {
    name: "onegirllikethat"
 }

 person["favouritefood"] = "Garri"

 console.log(person)


 const a = { value:20}
 const b= a
a.value = 100
 console.log(a)
 console.log(b)

 const item = {
    name: "ade",
    gender: "female",
    age: 10
 }
const key = Object.keys(item)
const value = Object.values(item)
const prop = Object.entries(item)
console.log(key)
console.log(value)
console.log(prop)

const var1 = {name : "dami"}
const var2 = {...var1}
var2.name = 100
console.log(var2)

const var3 = {val: 10}
const var4 = var3
Object.assign[var4, var3];
var4.val = 100
console.log(var3)
console.log(var4)

for (i=0; i<= 100; i++){
    console.log(i)
}

const randomNum = Math.round(Math.random()*(1-100))
console.log(randomNum)

const sentence = 'This is a new sring'
if (sentence.includes("new")){
    console.log(true)
}else{
    console.log(false)
}

const employees = [
    {
        id: 1,
        name: "Jim"
    },
    {
        id: 2,
        name :"Kate"
    }
]

const employee = employees.find(function(e){
    return e.name = "jim"
})

console.log(employee)


const add = (v1, v2)=>{
return v1+v2
}

console.log(add(10,2))

const list = [
    {
        id: 1,
        item : "milk"
    },
    {
        id: 2,
        item: "meat"
    }
]

const listInclude = list.find((e)=>{
return e.item = "meat"
})

console.log(listInclude)

const arrayList = [10,12,24,76]
const Output = arrayList.forEach((number, index) => {
    console.log(`${index} of ${number}`)
})
console.log(Output)


const arr1 = [12, 14, 89,90]
const arr2 = [78,76,78,43]
const both = arr1.concat(arr2)
const both2 = {...arr1, arr2}
console.log(both)
console.log(both2)

const num = [10,25,78,90,54,33,25]
const numFilter = num.filter(num=>num%2 ===0)

console.log(numFilter)

const jobRole = [
    {
        name: "ben",
        role : "dev"
    },
    {
        name: "ken",
        role: "dev"
    },
    {
        name: "hen",
        role:"pm"
    }
];

const filterRole = jobRole.filter(jobRole => jobRole.role === "dev")
console.log(filterRole)