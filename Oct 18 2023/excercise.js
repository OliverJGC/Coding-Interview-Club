const list = [2, 3, 1, 2, 4]
const temp = []

for (let i = 0; i < list.length; i++) {

    if(temp.includes(list[i])) {
        console.log(list[i])
    }
    else {
        temp.push(list[i])
    }

}