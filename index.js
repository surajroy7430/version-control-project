let findEvenNum = (num) => {
    if(num %2 === 0) {
        console.log(num,"is an even number.")
    } else {
        console.log(num,"is an odd number.")
    }
}
findEvenNum(6)
findEvenNum(5)

console.log(" ")

let patternPrint = (n) => {
    for(let i=1; i<=n; i++) {
        let bag = "";
        for(let j=n; j>=i; j--) {
            bag += "*" + " "
        }
        console.log(bag);
        
    }
}
patternPrint(5)

console.log(" ")

let patternBoxPrint = (n) => {
    for(let i=1; i<=n; i++) {
        let bag = "";
        if(i === 1 || i === n) {
            for(let j=1; j<=n; j++) {
                bag += "*"
                
                if(j < i || i < n) {
                    bag += " "
                }
            }
        }
        else {
            bag += "* "
            for(let j=1; j<=n-2; j++) {
                bag += "  "
            }
            bag += "*"
        }
        console.log(bag);
    }
}
patternBoxPrint(6)
