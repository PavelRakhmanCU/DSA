let globalArray = []

let randomize=()=>{
    let temp = new Array(20).fill(0).map(()=>Math.floor(Math.random()*100)+1)
    return temp
}

let linearSearch =(targetElement,arr)=>{
    for (let i=0;i<arr.length;i++)
    {
        if (arr[i]===targetElement){
            return i
        }
    }
    return -1
}

const printArrays=()=>{
    
    globalArray=randomize()
    console.clear()
    console.log('Global Array: ')
    console.log(globalArray)
    let targetElement = 24
    console.log(`The target element is ${targetElement}`)
    let index = linearSearch(targetElement,globalArray)
    if(index ===-1) {console.log('Element not found')}
    else{console.log(`The target element is found at ${index}`)}
}

printArrays()