console.log("Hello World")
console.log(" ")

const person = 
`{
    "firstName": "Biruk",
    "lastName": "Yidnekachew",
    "course": "WEB115",
    "section": "2816",
    "role": "students"
}`

console.log("Person object:")
const personParse = JSON.parse(person)
console.log(personParse)

console.log(" ")

console.log("JSON Format:")
console.log(person)