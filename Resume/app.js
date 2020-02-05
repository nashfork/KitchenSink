let resume = {
    Name: 'Brendon George',
    Career: 'Historian',
    Description: 'I love learning'
}
let allcaps = resume.Name.toUpperCase();
console.log('Name:', allcaps)
function displayPosition (param1, param2, param3) {
    console.log(param1)
    console.log(param2)
    console.log(param3)
}
displayPosition(allcaps, resume.Career, resume.Description)

console.log('My Interests:')
displayPosition("* Fishing", "* Reading", "* Cross-stitch")