let globalArray = []
function generateRandomValues()
{
let tempArray = new Array(20).fill(0).map(()=>Math.floor(Math.random()*100)+1)
globalArray.push(...tempArray)
}

function mergeSort(arr)
{
let tempArray = arr
let l = tempArray.length
if (l<=1)
{
return tempArray
}
else{
    let midPoint = Math.floor(l/2)
    let left = tempArray.slice(0, midPoint)
    let right =tempArray.slice(midPoint)
    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)
    return (merge(sortedLeft,sortedRight))
}
}

function merge(left, right)
{
let leftIndex=0
let rightIndex =0
let mergedArray=[]
while(leftIndex<left.length && rightIndex<right.length)
{
    if(left[leftIndex]<right[rightIndex])
    {
        mergedArray.push(left[leftIndex])
        leftIndex++
    }
    else
    {
        mergedArray.push(right[rightIndex])
        rightIndex++
    }
}
return(mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex)))
}


function printGlobalArray()
{
    globalArray=[]
    generateRandomValues()
    console.log('Unsorted array: ')
console.log(globalArray)


    console.log('Sorted array: ')
console.log(mergeSort(globalArray))
}

printGlobalArray()