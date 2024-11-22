const $ = (selector) => document.getElementById(selector);

const input = $("number")
const btn = $("btn")
const result = $("result")

let findEvenNum = (n) => {
    return (n %2 === 0) ? `${n} is an even number.` : `${n} is an odd number.`
}

const printXBoxPattern = (n) => {
    let output = ""
    for(let i=1; i<=n; i++) {
        let bag = "";
        for(let j=1; j<=n;j++) {
            if(i==1 || j==1 || i==n || j==n || i==j || i+j == n+1) {
                bag += "*&nbsp;"
            }
            else {
                bag += "&nbsp;&nbsp;&nbsp;"
            }
        }
        output += bag + "<br>"
    }
    return output
}


btn.addEventListener("click", () => {
    const num = parseInt(input.value);
    if (isNaN(num) || num < 1) {
        alert("Please Enter a Valid Number");
        input.value = ""
        result.innerHTML = ""
    } else {
        input.value = ""
        result.innerHTML = findEvenNum(num) + "<br>" + "<br>" + printXBoxPattern(num);
    }
});