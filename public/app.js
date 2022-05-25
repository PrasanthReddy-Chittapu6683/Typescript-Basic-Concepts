import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/Payments.js";
const formTag = document.querySelector('.new-item-form'); // Capture the form tag element using classname
console.log(formTag);
//Capture Input fileds
const typeDropdown = document.querySelector('#type');
const toFromTextbox = document.querySelector('#tofrom');
const detailsTextbox = document.querySelector('#details');
const amountTextbox = document.querySelector('#amount');
const ul = document.querySelector('ul');
const listTemplate = new ListTemplate(ul);
formTag === null || formTag === void 0 ? void 0 : formTag.addEventListener('submit', (e) => {
    e.preventDefault();
    let values; // Define Tuples with specific array structre types
    values = [toFromTextbox.value, detailsTextbox.value, amountTextbox.valueAsNumber];
    let doc;
    if (typeDropdown.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    console.log(doc);
    listTemplate.render(doc, typeDropdown.value, 'end');
});
//GENERIC : Allows us to create re-usable  blocks of code with different types
const addUUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const dOne = addUUID({ name: 'Prasanth', age: 40, sal: 23434656 });
// const dTwo = addUUID('sdf') Thows error because we are using  T extends object which the function allow only object structure parameters.
console.log(dOne);
console.log(dOne.sal);
const docThree = {
    uid: 1,
    resourceName: 'PRasanth',
    data: "ASDASD"
};
const doc4 = {
    uid: 2,
    resourceName: 'PRasanth',
    data: ["ASDASD", 'xcvxcv']
};
const doc5 = {
    uid: 3,
    resourceName: 'PRasanth',
    data: { name: 'asd', ss: 3453 }
};
console.log(docThree, doc4, doc5);
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
var DeparmentTypes;
(function (DeparmentTypes) {
    DeparmentTypes[DeparmentTypes["Book"] = 0] = "Book";
    DeparmentTypes[DeparmentTypes["Author"] = 1] = "Author";
    DeparmentTypes[DeparmentTypes["Film"] = 2] = "Film";
    DeparmentTypes[DeparmentTypes["Director"] = 3] = "Director";
    DeparmentTypes[DeparmentTypes["Producer"] = 4] = "Producer";
})(DeparmentTypes || (DeparmentTypes = {}));
const one = {
    deparmentType: DeparmentTypes.Book,
    data: "asd"
};
console.log(one);
//  OUTPUT
// {
//     "deparmentType": 0,
//     "data": "asd"
// }
const two = {
    deparmentType: DeparmentTypes.Director,
    data: "asd"
};
console.log(two);
//  OUTPUT
// {
//     "deparmentType": 3,
//     "data": "asd"
// }
//TUPLES
let array = [123, '3e45435', true];
array[0] = false; // allowed
let tup = [345, 'sdf', true];
// tup[0] = 'asd' // not-allowed
tup[0] = 7878; // allowed
