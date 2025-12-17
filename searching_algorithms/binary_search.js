let globalArray =[]

function randomize()
{
  let temp=new Array(20).fill(0).map(()=>Math.floor(Math.random()*100)+1)
    return temp
}


function mergeSort(arr)
{
let l= arr.length
if (l<=1)
{return arr}
else{
    let midPoint = Math.floor(l/2)
    let leftHalf = arr.slice(0,midPoint)
    let rightHalf = arr.slice(midPoint)
    let sortedLeft = mergeSort(leftHalf)
    let sortedRight = mergeSort(rightHalf)
    return merge(sortedLeft,sortedRight)
}
}

function merge(left, right)
{
    let mergedArray =[]
    let leftIndex=0
    let rightIndex = 0
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if (left[leftIndex]<=right[rightIndex])
        {
            mergedArray.push(left[leftIndex])
            leftIndex++
        }
        else if(right[rightIndex]<left[leftIndex]){
mergedArray.push(right[rightIndex])
rightIndex++
        }
    }
mergedArray = mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex))
return mergedArray
}


function binarySearch(arr,targetElement)
{
    let arrayStart = 0
    let arrayEnd = arr.length-1
    while(arrayStart<=arrayEnd)
    {
        let midPoint = Math.floor((arrayStart + arrayEnd)/2)
        if (arr[midPoint]===targetElement){return midPoint}
        else if (arr[midPoint]<targetElement){arrayStart= midPoint+1}
        else if(arr[midPoint]>targetElement){arrayEnd = midPoint-1}
    }
    return -1
}

function printArray()
{
    console.clear()
    globalArray = randomize()
    console.log('Unsorted array: ')
    console.log(globalArray) 
    console.log('Sorted array: ')
    let sortedArray = mergeSort(globalArray)
    console.log(sortedArray)
    console.log('target element: ')
    let targetElement = 23
    console.log(targetElement)
    console.log('index of target element: ')
    console.log(binarySearch(sortedArray,targetElement))
    
    
}

printArray()
