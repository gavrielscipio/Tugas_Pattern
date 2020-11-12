// CASE : n = 5
// 1 2 3 4 5 4 3 2 1    
// 2 3 4 5 4 3 2        
// 3 4 5 4 3            
// 4 5 4                
// 5                    

let n = 5
let pattern = ""
let intial = 1
for (let i = n; i > 0; i--) {
    let output = intial
    let output2
    for (let j = 2 * i - 1; j > 0; j--) {
        if (output > 5) {
            output2--
            pattern += `${output2} `
        } else {
            pattern += `${output} `
            output2 = output
            output++
        }
    }

    pattern += "\n"
    intial += 1
}

console.log(pattern)