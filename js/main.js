const reclaimList = [...document.querySelectorAll('li')]
const addBtn = document.querySelector('button.sum')
console.log(reclaimList)
const reclaimObjectList= []
reclaimList.forEach(el =>{
  reclaimObjectList.push(new ReclaimElement(el))
})
console.log(reclaimObjectList)
addBtn.addEventListener('click', ()=>{
  console.log(reclaimObjectList)
  const sumOfEverything = reclaimObjectList.reduce((prev, next)=> prev + next.sum,0)
  console.log(sumOfEverything)
})