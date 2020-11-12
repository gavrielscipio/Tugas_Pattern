let pattern = ""
let input = 4

for(let i = 0 ; i < 5 ; i++){
      for(let j = 0 ; j < input - i ; j++){
        pattern += " "
    } for ( let y = i ; y >= 0 ; y--){ 
        pattern += `${y}`    
    } for ( let z = 1 ; z <= i  ; z++)
        pattern += `${z}`
     pattern += "\n"
}
console.log(pattern)


