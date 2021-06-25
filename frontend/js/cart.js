
const cartcontent = document.getElementById('cart')

cartcontent.innerHTML = `
        <div class="card">
            <div class="container">
                <div class ="text-uppercase newBetFor-text">Recente Bets</div>
                <div  class="card-body col" id="card-body"></div>
                <div>
                    <p class="betType text-uppercase" id="total" >total: R$</p>
                </div>    
            </div>
            <div class="card-footer" id="card-footer">Save <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow"></div>
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
        deleteBtn.setAttribute('class', 'col-3 btn')
    
    
        deleteBtn.addEventListener("click", deleteBet.bind(null, id), false)

        betText.setAttribute('class', 'col card-bet-content')
        betText.innerHTML = element.range

        prices.push(Number(element.price))

        fragment.setAttribute('class','row')
        fragment.appendChild(deleteBtn)
        fragment.appendChild(betText)
        

        cart.appendChild(fragment)
    })

    const totalPrice = prices.reduce(function(acumulador, currentValue){
        return acumulador + currentValue
    })
    totalPriceText.appendChild(document.createTextNode(`  ${totalPrice}`))

    function deleteBet(id){
        console.log(id);
        const url = `http://localhost:3000/betsList/${id}`
        const ajax = new XMLHttpRequest()
        ajax.open('DELETE', url , true)
        ajax.send()
        console.log(ajax.response);
    }

}
init()
