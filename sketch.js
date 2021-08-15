

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ')

function setup(){
  var b2 = createButton("click here to Swap");
  b2.mouseClicked(swap)
  }


function draw()
{
}

function swap() {
  [a, b] = [b, a]
  console.log("The first nu,ber after swapping" + a)
  console.log("The second number after swapping" + b)}
