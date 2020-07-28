const check = (str) => {
    let stack = [];
    let valid = true;

    [...str].forEach((c) => {
        switch (c){
            case '(':
                stack.push(c)
                break;
            case ')':
                let current = stack.pop()
                if(current !== '('){
                    valid = false
                }
                break;
        }

    })

    return valid && !stack.length
}

module.exports = {
    check
}

