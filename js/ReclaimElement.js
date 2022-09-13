const sum1paragraph = document.querySelector('p.sum1')

let sum = 0


class ReclaimElement{
  constructor(li){
    this.li = li
    this.sum = 0
    this.details = []
    
    this.li.children[1].addEventListener("click", this.add.bind(this))
    this.li.children[2].addEventListener('click',this.showDetails.bind(this))
  }
  add(){
    
    const buttons= document.querySelectorAll("button")
    buttons.forEach(button => button.disabled= true)
    console.log(window.screen)
    const [reclaimName, cokoId] = this.li.childNodes
    //console.log(this, reclaimName.textContent, cokoId.textContent)
    const div = document.createElement("div")
    document.body.appendChild(div)
    const paragraphMessage = document.createElement('p')
    paragraphMessage.style.marginLeft= "10px"
    const confirmButton = document.createElement('button')
    confirmButton.style.margin= "0 10px"
    
    confirmButton.textContent = "Potwierdź"
    const cancelButton = document.createElement('button')
    cancelButton.textContent = "Anuluj"
    const paragraphInfo = document.createElement('p')
    paragraphInfo.style.marginLeft= "10px"
    paragraphMessage.innerHTML = `Wpisz wagę w kilogramach dla: ${reclaimName.textContent}<br> nr Coko: ${cokoId.textContent}`
    
    
    
    const inputElement = document.createElement("input")
    inputElement.setAttribute("type", "number")
    inputElement.style.display= "block"
    inputElement.style.margin= "0 0 20px 10px"
    div.append(paragraphMessage, inputElement, confirmButton, cancelButton,  paragraphInfo)
    div.classList.add("add-window")
    div.style.top= `${window.scrollY+ 200}px`
    //document.body.style.backgroundColor= "#36486b"
    const addElement =()=>{
      const amount= inputElement.value
    if (!+amount){
      return paragraphInfo.textContent= "Niepoprawna wartość"
    }
    
    this.details.push(amount+ 'kg ')
    this.sum += +amount
    paragraphInfo.textContent= `Dodano ${amount} kg do ${this.li.childNodes[0].textContent}`
    this.li.childNodes[1].querySelector('span').textContent = ` Suma: ${this.sum} kg`
    sum += +amount
    sum1paragraph.textContent= `Suma: ${sum}`
    buttons.forEach(button => button.disabled = false)
    document.body.removeChild(div)
    confirmButton.removeEventListener("click", addElement)
    cancelButton.removeEventListener("click", cancelAction)
    }
    confirmButton.addEventListener("click", addElement)
    const cancelAction = () =>{ 
      confirmButton.removeEventListener("click", addElement)
      cancelButton.removeEventListener("click", cancelAction)
      buttons.forEach(button => button.disabled = false)
      document.body.removeChild(div)
    }
    cancelButton.addEventListener("click", cancelAction)
    
  }
  
  showDetails(){
    const [reclaimName, cokoId] = this.li.childNodes
    const buttons= document.querySelectorAll("button")
    buttons.forEach(button => button.disabled= true)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.classList.add("add-window")
    const paragraphInfo = document.createElement('p')
    paragraphInfo.style.marginLeft= "10px"
    const confirmButton = document.createElement('button')
    confirmButton.style.display = "block"
    confirmButton.style.textAlign= "center"
    confirmButton.textContent= "OK"
    confirmButton.style.margin = "10px auto"
    div.append(paragraphInfo, confirmButton)
    div.style.top= `${window.scrollY + 200}px`
    console.log(window.scrollY)
    div.style.height = "180px"
    if (!this.details.length){
      paragraphInfo.textContent ="Nie ma nic do wyświetlenia"
    }
    else{
      
      paragraphInfo.innerHTML = `Tworzywo: ${reclaimName.textContent}, nr Coko: ${cokoId.textContent} <br> ${this.details}<br> Suma ${this.sum} kg`
      
    }

    const closeWindow = () =>{
      buttons.forEach(button => button.disabled = false)
      document.body.removeChild(div)
      confirmButton.removeEventListener("click", closeWindow)
    }

    confirmButton.addEventListener("click", closeWindow)
  }
}