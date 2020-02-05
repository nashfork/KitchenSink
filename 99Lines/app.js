let friends = ['Meggan', 'Art', 'Corey', 'Rick', 'Adam']

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
    for (let k = 99; k > 0; k--) {
        console.log([k] + ' ' + 'lines of code in the file,' + ' ' + [k] + ' ' + 'lines of code;' + ' ' + friends[i] + ' ' +  'strikes one out, clears it all out,' + ' ' + [k-1] + ' ' + 'lines of code in the file');
        if (k === 1) {
            console.log([k] + ' ' + 'line of code in the file,' + ' ' + [k] + ' ' + 'line of code;' + ' ' + friends[i] + ' ' +  'strikes one out, clears it all out,' + ' ' + 'no more' + ' ' + 'lines of code in the file')
        }
    }
}