var fname = "Saddam";
var lname = "Hosain";
var fullname = fname.concat(" " + lname);
// console.log(fullname);

// //substring and slice
// console.log(fullname.substring(5, 3)); // da
// console.log(fullname.slice(5, 3)); // empty string

// console.log(fullname.substring(-5, 3)); // Sad
// console.log(fullname.substring(-5, -3)); //empty string

// console.log(fullname.slice(-5, 3)); //empty
// console.log(fullname.slice(5, -3)); //m Hos
// console.log(fullname.slice(-5, -3)); //os


// console.log(fullname.substr(0,6))//not used


var name = 'saddam hossain'
var name1 ='SADDAM HOSSAIN'

// console.log(name.toUpperCase())
// console.log(name1.toLowerCase())

// console.log(name1.charAt(0))
// console.log(name1.charCodeAt(5))
// console.log(name1.startsWith('SADDAM'))
// console.log(name1.endsWith('N'))


// var str = '     knignt    '
// console.log(str)
// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())


var str1 = 'Saddam hossain Knight'
// console.log(str1.split('a'))

console.log(str1.replace('Saddam','Sh'))