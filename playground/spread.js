// function tambah(a,b){
//     return a + b;
// }
//
// console.log(tambah(3,6));
//
// var toAdd = [4,5];
// console.log(tambah(...toAdd));

// var groupA = ['Nop', 'Anggrai'];
// var groupB = ['Musti','Soni'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Nopvi', 22];
var personTwo = ['Mustika', 24];
//Hi Nop, you are 22
function greet (name, age){
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Nopvi', 'Mustika'];
var finaly = ['Soni', ...names];

finaly.forEach(function(name){
  console.log('Hi ' + name);
});
