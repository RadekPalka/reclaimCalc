const reclaimList = [...document.querySelectorAll('li.reclaim')]
const anotherReclaimList = [...document.querySelectorAll('li.reclaim2')]

const reclaimObjectList= []
reclaimList.forEach(el =>{
  reclaimObjectList.push(new ReclaimElement(el))
})
const anotherReclaimObjectList= []
anotherReclaimList.forEach(el =>{
  anotherReclaimObjectList.push(new AnotherReclaimElement(el))
})
// sumEverythingButton.addEventListener('click', ()=>{
//   console.log(reclaimObjectList)
//   const sumOfEverything = reclaimObjectList.reduce((prev, next)=> prev + next.sum,0)
//   if (!sumOfEverything){
//     return alert("Nic tu nie ma")
//   }
//   alert(`Suma wynosu ${sumOfEverything} kg`)
// })