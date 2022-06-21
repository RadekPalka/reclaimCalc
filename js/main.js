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
