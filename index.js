function myName(name){
    console.log("my name is " + name)
}

myName("bukola")

function multiplynum (num1, num2){
    console.log(num1 * num2)
}

 multiplynum(10,12)

 console.log('1' === 1)

 let DOB = 2000
 let age = DOB >= 2000 ? '25' : 'above 25 or less'

 console.log(age)

let color = 'red'
let choice = color ===   'black' ? 'available' : 'not available'

console.log('choice is ' + choice)

let a = true
let b = true

let c = a ?? b
console.log(c)

let d = !true
console.log(d)

let canDrive = true
let answer = canDrive ? 'cannot drive' : 'can drive'

console.log(answer)

const result = 'test' === 'test' ? true : false

console.log(result)


let title = 'bukola'

if (title.length > 10){
    console.log('name is too long')
    }
    else if(title.length > 6 ){
            console.log('name is too short')
    }

    else {
        console.log('use another name')
    }


    const job = 'software dev'

    if (job === 'software dev'){
        console.log('writes code')
    }

    else(
        console.log('job is unknown')
    )

    const bestColor = 'green';

    switch (bestColor) {
        case 'red':
            console.log('not red')
            break;
            case 'green':
                console.log('yes green')
                break;
                case 'white':
                    console.log('not white')
                    break;
                    default :'blue'
                    console.log('false')
    }


    const skill = 'designer'

    switch (skill){
        case 'developer':
        console.log('writes code');
        break;
        case 'designer':
            console.log('builds UI');
            break;
            case 'cloud engineer':
                console.log('manages and deploy cloud resources')
                break;
                default :
                console.log('might be jobless')
    }

    //for loop

    const names = ['bola','ola', 'ade', 'olu']
    for (let idx = 0; idx < names.length; idx++){
        console.log(names[idx])
    }

    const hobbies = ['playing', 'gisting', 'dancing', 'thinking']
    for (let i = 0; i >= hobbies.length; i++){
        console.log(hobbies[i])
    }
    //while loop
let numbers =[ 1,2,3,4,5,6,7,8];
let idx = 0;
while(idx < numbers.length){
    console.log(numbers[idx]);
    idx++;
}

let sum = 0
while(true){
    console.log('loop');
    sum++
    if (sum === 1)
        break;
}

let x = 11;

do{
    console.log(x);
    x++;
}while(x < 10);

//FOR IN LOOP - for objects
const course = {
    name:'dhfrfirf',
    duration: 5,
    section: 10
}

console.log(course["name"])
console.log(course['duration'])
console.log(course.section)

for(const key in course){
    console.log("for in loop : " + course[key])
}

const models = {
    one: 'elite book',
    two: 'probook',
    three: 'zook'
}

const model = ['elite book','probook','zook']

for (const key in model){
    console.log(model[key])
}

const obj = {
    a: 20,
    b:30,
    c:40
}

for (let k in obj){
    if(k === 'b'){
          break;
    }

    console.log(obj[k])
}

//for of loop
for (const element of numbers){
    console.log(element)
}

function maxNum(a,b){
    return a >= b ? a: b
}

console.log(maxNum (20, 60))


function fizzNum (num){
    if (num % 3===0 && num % 5===0){
        return 'fizzbuss'
    }
    else if (num % 3 === 0){
       return "fizz"
    }

    else if(num % 5 ===0){
      return 'buzz'
    }

    else{
        return num
    }
}

console.log(fizzNum(50))

function myArrayFunc(ArrayNum){
    for (const number of ArrayNum){
        if (number % 2 === 0){
            console.log("the even numbers are:" +  number)
        }
    }

}

myArrayFunc([1,2,3,4,5,6,7,8,9,])

function oddNum (odd){
    for (let w = 0; w <=odd.length; w++){
            if(w % 2 != 0){
        console.log("the odd numbers are:" + w)
    }
    }
}
oddNum([1,2,3,4,5,6,7,8,9])
