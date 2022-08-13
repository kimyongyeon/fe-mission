var names = 'skdjflksjdfklsjlkfsdklfsjd';
console.log(names.length);

var n = [];
for(let i of names) {
    n.push(i);
}
console.log('>> ', n);

var nn = n.splice(0, 10, '');
console.log(nn.join(''));

