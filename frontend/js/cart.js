
const cartcontent = document.getElementById('cart')

cartcontent.innerHTML = `
        <div class="card">
            <div class="container">
                <div class ="text-uppercase newBetFor-text">Recent Bets</div>
                <div  class="card-body col" id="card-body"></div>
                <div>
                    <p class="betType text-uppercase" id="total" >total: R$</p>
                </div>    
            </div>
            <div class="card-footer"  id="card-footer">
                <span type="button" onclick="save()"> Save 
                <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow">
                </span>
            </div>
        </div>
        `



function init(){
    this.getBetsList()
}

function getBetsList(){
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'http://localhost:3000/betsList' , true)
    ajax.send()
    ajax.addEventListener('readystatechange', displayBetsList, false)

}
let totalPrice

function save(){
    totalPrice >= 30 ? alert("Apostas Feitas!"): alert("Faça um pedido de no mínimo R$ 30,00")
}
    


function displayBetsList(){

    if(!(this.readyState === 4 && this.status === 200)) return
    const bets = JSON.parse(this.responseText)

    const cart = document.getElementById('card-body')
    const totalPriceText = document.getElementById('total')
    const prices = []

    bets.forEach(element => {
        const fragment = document.createElement('div')
        const betText = document.createElement('p')
        const deleteBtn = document.createElement('button')
        const id = element.id

        deleteBtn.innerHTML = 'delete'
        deleteBtn.setAttribute('class', 'col-3 delete-btn')
    
        deleteBtn.addEventListener("click", deleteBet.bind(null, id), false)

        betText.setAttribute('class', 'col-7 card-bet-content')
        betText.innerHTML = element.range

        prices.push(Number(element.price))

        fragment.setAttribute('class','row')
        fragment.appendChild(deleteBtn)
        fragment.appendChild(betText)
        

        cart.appendChild(fragment)
    })

    totalPrice = prices.reduce(function(acumulador, currentValue){
        return acumulador + currentValue
    })
    totalPriceText.appendChild(document.createTextNode(`  ${totalPrice}`))



    //aqui tudo certo
    function deleteBet(id){
        console.log(id);
        const url = `http://localhost:3000/betsList/${id}`
        const ajax = new XMLHttpRequest()
        ajax.open('DELETE', url , true)
        ajax.send()
    }

}
init()
