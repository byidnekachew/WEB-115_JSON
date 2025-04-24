console.log("Hello World")
console.log(" ")

document.getElementById('button').addEventListener("click", () => {

    const person = 
    `{
        "firstName": "${document.getElementById('firstName').value}",
        "lastName": "${document.getElementById('lastName').value}",
        "course": "${document.getElementById('course').value}",
        "section": "${document.getElementById('section').value}",
        "role": "${document.getElementById('role').value}"
    }`

    console.log("Person object:")
    const personParse = JSON.parse(person)
    console.log(personParse)

    console.log(" ")

    console.log("JSON Format:")
    console.log(person)
})