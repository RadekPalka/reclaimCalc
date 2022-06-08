const reclaimList = [...document.querySelectorAll('li')]
console.log(reclaimList)
const reclaimObjectList= []
reclaimList.forEach(el =>{
  reclaimObjectList.push(new ReclaimElement(el))
})
console.log(reclaimObjectList)
