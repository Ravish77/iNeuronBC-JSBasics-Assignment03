let n = 4; 

let string = "";
let val = 1;

for(let i = 0; i < n; i++) { 
  for(let j = 0; j <=i; j++) { 
    string += val+" "
    val ++;
  }

  string += "\n";
}

console.log(string);