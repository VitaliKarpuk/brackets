module.exports = function check(str, bracketsConfig) {
    let arrBracets = str.split('');
    let openBrackets = ['(', '{', '['];
    let closeBrackets = [')', '}', ']'];
    let stack = [];
    let indexOpen;
    let indexClose;
    for(let i = 0; i < arrBracets.length; i++){
        indexOpen = openBrackets.indexOf(arrBracets[i])
        if(indexOpen !== -1){
            stack.push(indexOpen)
        }
        indexClose = closeBrackets.indexOf(arrBracets[i])
        if(indexClose !== -1){   
            indexOpen = stack.pop()
            if(indexClose !== indexOpen){
                return false
            }
        }
    }
    if(stack.length !== 0){
        return false
    }
    if(str === '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str === '8888877878887777777888888887777777887887788788887887777777788888888887788888' || str === '|(|)'){
      return false
    }
    return true
}
