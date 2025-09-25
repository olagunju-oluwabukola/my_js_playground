//function declaration
function sayHi (){
console.log ("hi")
}

sayHi()
// function expression
const greeeting = function () {
    console.log('hello')
};

greeeting()


//hoisting
add(2,4)
function add (num1, num2){
    console.log(num1 + num2)
}

//spread operator

const product =[
    {
    name: 'oriflame',
    price: 200,
    size: 'big'
},
// {
//     name: 'oriJumpo',
//     price: 2500,
//     size: 'small'
// }
]
console.log(product)

for(const productsPrice of product){
    console.log("product prrice:" +  productsPrice.price)
}

const new_product = {
...product,
name: 'oriflame'
}

console.log( new_product)




function multiply (...args) {
    return args.reduce((accumulator, currentvalue) => accumulator*currentvalue)
}

console.log(multiply(10,23,45))

function multiplier (multipl, ...numbers){
    return numbers.map(num=> multipl * num)
}


console.log(multiplier(2,4,5,6,78))

//default parameters
function code_lang (langiage = 'javascript'){
    console.log(`write code in ${langiage}`)
}

code_lang()
code_lang("python")
code_lang("go lang")


function codeDetails (program = 'js', tool = 'vs code'){
    console.log(`writting code in ${program} using ${tool}`)
}

codeDetails("r", 'jupitter note')
codeDetails('Go lang')
codeDetails("vs")

function createUser (name, role='admin', status = 'active'){
    console.log(`name: ${name} , role: ${role}, status : ${status}`)
}

createUser("bukola", "super admin", "inactive")
createUser("olaoluwa")

//ggetters and setters

const info = {
    name: 'javascript course',
    duration: '3 hours',
   get details(){
        return `${this.name} is ${this.duration}`
    },

    set details(value){
        // if (typeof value !== "string"){
        //     throw new Error(`value, ${value} is not a string`)
        // }
    let parts = value.split (" is ")
    this.name = parts[0]
    this.duration = parts[1]
    }
};

console.log(info.details)
//  info.details = "javscript course  is 10 hours"
// const newNmae = info.name = 'go lang'
// const newTime = info.details = '12 hours'
// info.details =  newNmae +  newTime

try{
    info.details = "javscript course  is 10 hours";
}
catch (e){
    console.log(`${e.message}`)
}
// console.log(info.details)