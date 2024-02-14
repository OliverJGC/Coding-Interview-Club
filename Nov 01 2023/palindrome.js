const number = 1234
const numberList = number.toString().split("")
const list = []
for(i=3;i>=number.toString.length;i--){
    list.push(numberList[i-1])
}
console.log(list.join()==numberList.join())