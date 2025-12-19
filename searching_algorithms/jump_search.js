let globalArray = []


function randomize() // this function generates an array of 100 random numbers between 1 and 0
// All values are sorted in ascending order. Why? We are testing the jump search algorithm, which requires aa SORTED array
{
    let tempArray = new Array(100).fill(0).map(()=>Math.floor(Math.random()*100)+1)
    globalArray = tempArray.sort((a,b)=>a-b)
}


function jumpSearch(arr, targetElement)
{
    let jump = Math.floor(Math.sqrt(arr.length))
    let blockStart=0

    while (blockStart+jump<arr.length && targetElement > arr[blockStart+jump])
    {
        blockStart +=jump
    }
    for (let i=blockStart;i< Math.min(blockStart+jump,arr.length);i++)
    {
        if (arr[i]===targetElement)
        {
            return i
        }
        
    }
return -1
}



function printArray() {
  randomize();
  console.clear();
  console.log('Our main array:', globalArray);
 
  const target = globalArray[Math.floor(Math.random() * globalArray.length)];
  console.log('Target element:', target);
  console.log('Index found:', jumpSearch(globalArray, target));
}

printArray();