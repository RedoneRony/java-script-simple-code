const priya = ' Asif Akbar';
const meye =  "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line'+
'this is my second line.\n' +
'third lne text here \n' +
'fourth line text here \n';
console.log(multiLine);

const multiLineNew = `This is my first Line
This is my second Line
This is my third Line
This is my fourth Line`;
console.log(multiLineNew);
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = ' <h3 class="friend-name">Friend-1</h3>'
const old2 = ' <h3 class="friend-name">Friend-' + count + '</h3>'
const old3 = ` <h3 class="friend-name">Friend-${count}</h3>`;
const new1 = ` <h3 class="friend-name">Friend-${friends.length}</h3>`
const first = 'mamun';
const last = 'Chowdhury';
const fullOld = first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in dhaka.`;
// console.log(new1);
console.log(fullNew);
