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