let globalArray=[]

function generateRandomValues(arr) // this function generates 10 randm values and pushes them into the array
{
let tempArray = new Array(10).fill(0).map(()=>Math.floor(Math.random()*100)+1)
arr.push(...tempArray)
}

function bubbleSort(arr)// this function sorts the array in an ascending order using the bubble sort algorithm
    {
        let tempArray = arr
        for (let i=0;i<tempArray.length;i++)
        {
            for (let j=0;j<tempArray.length - i -1; j++)
            {
if (tempArray[j]>tempArray[j+1])
{
    let temp=tempArray[j]
    tempArray[j] = tempArray[j+1]
    tempArray[j+1]=temp
}
            }
        }
        return tempArray
    }


function main()
{
    generateRandomValues(globalArray)
    console.clear()
    console.log('Unsorted array: ')
console.log(globalArray)
console.log('Sorted array: ')
console.log(bubbleSort(globalArray))
}

main()



