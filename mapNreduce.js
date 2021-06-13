
//1 Map the list of numbers to a list of their square roots: [1, 9, 16, 100]
var numbers = [1, 2, 3, 4, 5];

numbers.map(Math.sqrt)


//2 Map the list of words so each is wrapped in a <h1> tag: 
var words = ["Intro", "Requirements", "Analysis", "Implementation", "Conclusion", "Discussion",
"References"];

function h1wrap(word) { return "<h1>" + word + "</h1>";}

words.map(h1wrap());


//3 Use map to uppercase the words (all letters):
var yells = ["i'm", "yelling", "today"];

function upCase(word){return word.toUpperCase();}

yells.map(upCase());


//4 Use map to transform words into their lengths:
var lWords = ["I", "have", "looooooong",
"words"];


function len(word){return word.length;}

lWords.map(len);


//5 Get the json file comics.json from the course site. Paste it into your
// browser’s Javascript console. Use map to get all the image urls, and wrap
// them in img-tags.

comics.map(res => res.img);


//6 Use reduce to sum the array of numbers:
var numbers = [1,2,3,4,5];

function sum(total, num) {
  return total + num;
}

numbers.reduce(sum);


//7 Use reduce to sum the x-value of the objects in the array:
var arr = [{x: 1},{x:2},{x: 3}]

arr.reduce((a, b) => ({x: a.x + b.x}));


//8 Use reduce to flatten an array of arrays:
var flatMe = [[1,2], [3,4], [5,6]];

function flat(total, num) {
  var res = total.concat(num);
    return res.flat();
}


//9 Use reduce to return an array of the positive numbers:
var numbers =  [-3, -1, 2, 4, 5];

