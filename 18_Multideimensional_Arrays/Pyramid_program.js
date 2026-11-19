let p = 10;

for (let i=1; i<=p; i++){
  let row = "";
  for (let j=i; j<=p-1; j++){
    row += " "
  }
  for(let k=1; k<=2*i-1; k++){
    row += "*";
} 
  console.log(row);
}