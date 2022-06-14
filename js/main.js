const reclaimList = [...document.querySelectorAll('li')]
const sumEverythingButton = document.querySelector('button.sum-everything')
console.log(reclaimList)
const reclaimObjectList= []
reclaimList.forEach(el =>{
  reclaimObjectList.push(new ReclaimElement(el))
})
console.log(reclaimObjectList)
sumEverythingButton.addEventListener('click', ()=>{
  console.log(reclaimObjectList)
  const sumOfEverything = reclaimObjectList.reduce((prev, next)=> prev + next.sum,0)
  if (!sumOfEverything){
    return alert("Nic tu nie ma")
  }
  alert(`Suma wynosu ${sumOfEverything} kg`)
})