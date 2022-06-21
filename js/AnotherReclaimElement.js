const sum2paragraph = document.querySelector('p.sum2')

let sum2 = 0


class AnotherReclaimElement{
  constructor(li){
    this.li = li
    this.sum = 0
    this.details = []
    
    this.li.children[1].addEventListener("click", this.add.bind(this))
    this.li.children[2].addEventListener('click',this.showDetails.bind(this))
  }
  add(){
    const amount = prompt("Podaj wagę w kilogramach")
    if (!+amount){
      return alert("Niepoprawna wartość")
    }
    
    this.details.push(amount+ 'kg ')
    this.sum += +amount
    alert(`Dodano ${amount} kg do ${this.li.childNodes[0].textContent}`)
    this.li.childNodes[1].querySelector('span').textContent = `Suma: ${this.sum} kg`
    sum2 += +amount
    sum2paragraph.textContent= `Suma: ${sum2}`
  }
  
  showDetails(){
    if (!this.details.length){
      return alert("Nie ma nic do wyświetlenia")
    }
    alert(this.details+" Suma: "+ this.sum+ " kg")
  }
}