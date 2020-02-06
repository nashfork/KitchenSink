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

console.log('My Previous Experience:')
displayPosition('* History, Geography, Sociology', '* Undergraduate teaching History Department', '* Secretary at St. Pauls Lutheran Church')

let act = [
{
name: 'fishing',
quality: 'cool'
},
{
name: 'writing',
quality: 'not cool'
},
{
name: 'walking',
quality: 'not cool'
},
{
name: 'parenting',
quality: 'cool'
}
];
function skillName(x) {
    if (x.quality === 'cool') {
        return console.log('* BAM:',x.name)
    } else {
        return console.log('*',x.name)
    }
}

console.log('My Skills:')
for (let i = 0; i < act.length; i++) {
    skillName(act[i])
}

