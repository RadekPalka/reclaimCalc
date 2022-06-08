class ReclaimElement{
  constructor(li){
    this.li = li
    this.sum = 0
    this.details = []
    console.log(this.li.childNodes[3])
    this.li.children[1].addEventListener("click", this.add.bind(this))
    this.li.children[2].addEventListener('click',this.showDetails.bind(this))
  }
  add(){
    const amount = prompt("Podaj wagę w kilogramach")
    if (!+amount){
      return alert("Niepoprawna wartość")
    }
    console.log(this)
    this.details.push(amount+ 'kg ')
    this.sum += +amount
    alert(`Dodano ${amount} kg do ${this.li.childNodes[0].textContent}`)
  }
  
  showDetails(){
    if (this.details.length === 0){
      return alert("Nie ma nic do wyświetlenia")
    }
    alert(this.details+" Suma: "+ this.sum+ " kg")
  }
}