function cappyKeyboard(word) {
    let string = word
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
    let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
    
    let check = true
    let listType = ''
    let splitted = string.split("")
    
    
    if(left.includes(splitted[0])) {
        listType = 'left'
    }
    else {
        listType = 'right'
    }
    
    for(let i=0; i<splitted.length; i++) {
        if (left.includes(splitted[i]) && listType === 'left') {
            listType = 'right'
        }
        else if(right.includes(splitted[i]) && listType === 'right') {
            listType = 'left'
        }
        else {
            check = false
        }
    }
    console.log(check)
}

cappyKeyboard('cappy')
