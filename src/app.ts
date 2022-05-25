import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payments } from "./classes/Payments.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"


const formTag = document.querySelector('.new-item-form')! // Capture the form tag element using classname
console.log(formTag)

//Capture Input fileds
const typeDropdown = document.querySelector('#type') as HTMLSelectElement
const toFromTextbox = document.querySelector('#tofrom') as HTMLInputElement
const detailsTextbox = document.querySelector('#details') as HTMLInputElement
const amountTextbox = document.querySelector('#amount') as HTMLInputElement


const ul = document.querySelector('ul')!;
const listTemplate = new ListTemplate(ul)


formTag?.addEventListener('submit', (e) => {
    e.preventDefault();
    let values: [string, string, number]; // Define Tuples with specific array structre types
    values = [toFromTextbox.value, detailsTextbox.value, amountTextbox.valueAsNumber]

    let doc: HasFormatter;
    if (typeDropdown.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payments(...values)
    }
    console.log(doc)
    listTemplate.render(doc, typeDropdown.value, 'end')
})


//GENERIC : Allows us to create re-usable  blocks of code with different types

const addUUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}
const dOne = addUUID({ name: 'Prasanth', age: 40, sal: 23434656 })
// const dTwo = addUUID('sdf') Thows error because we are using  T extends object which the function allow only object structure parameters.
console.log(dOne)
console.log(dOne.sal)

//GENERIC : With Interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'PRasanth',
    data: "ASDASD"
}

const doc4: Resource<string[]> = {
    uid: 2,
    resourceName: 'PRasanth',
    data: ["ASDASD", 'xcvxcv']
}
const doc5: Resource<object> = {
    uid: 3,
    resourceName: 'PRasanth',
    data: { name: 'asd', ss: 3453 }
}

console.log(docThree, doc4, doc5)
//  OUTPUT
//  {
//     "uid": 1,
//     "resourceName": "PRasanth",
//     "data": "ASDASD"
// }
// {
//     "uid": 2,
//     "resourceName": "PRasanth",
//     "data": [
//         "ASDASD",
//         "xcvxcv"
//     ]
// }
// {
//     "uid": 3,
//     "resourceName": "PRasanth",
//     "data": {
//         "name": "asd",
//         "ss": 3453
//     }
// }



// ENUMS
enum DeparmentTypes { Book, Author, Film, Director, Producer }
interface Deparments<T> {
    deparmentType: DeparmentTypes;
    data: T
}

const one: Deparments<string> = {
    deparmentType: DeparmentTypes.Book,
    data: "asd"
}
console.log(one)
//  OUTPUT
// {
//     "deparmentType": 0,
//     "data": "asd"
// }

const two: Deparments<string> = {
    deparmentType: DeparmentTypes.Director,
    data: "asd"
}
console.log(two)
//  OUTPUT
// {
//     "deparmentType": 3,
//     "data": "asd"
// }


//TUPLES

let array = [123, '3e45435', true]
array[0] = false // allowed


let tup: [number, string, boolean] = [345, 'sdf', true]
// tup[0] = 'asd' // not-allowed
tup[0] = 7878 // allowed