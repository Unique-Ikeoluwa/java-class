let complexArray = [
    42,
    'example',
    [true, false, [null, 'deep', [99, ['even deeper', [undefined, {key: ['find me']}]]]]],
    {data: ['start', {nested: ['keep going', {final: ['almost', {target: 'you got it!'}]}]}]},
    [[['very', ['deep', [3,14, ['levels', {mystery: ['last', ['hidden', ['treasure']]] }]]]]]]
];

console.log(complexArray[4][0][0][1][1][2][1].mystery[0])

let numbers = [1, 2, 3, 7, 4, 5, 6];

numbers.splice(numbers.indexOf(7), 1);
numbers.push(7); 

console.log(numbers);

let todos1 =[
    "eat","movie","sleep"
];
let todos2 = new Array("eat","movie","sleep");
complexArray.pop()

console.log(complexArray)

let todos3 = "eat,movie, sleep".split(" ");

console.log(todos3)

let star = [true, false, "hungry", 40]

console.log(star.slice(2,-3))