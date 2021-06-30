
const cartcontent = document.getElementById('cart')

cartcontent.innerHTML = `
        <div class="card">
            <div class="container">
                <div class ="text-uppercase strong-bold-text">cart</div>
                <div  class="card-body col" id="card-body"></div>
                <div id="total">
                    
                </div>    
            </div>
            <div class="card-footer"  id="card-footer">
                <span type="button" onclick="save()"> Save 
                <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow">
                </span>
            </div>
        </div>
        `



let bets =[]
let totalPriceValue

//mostra no carrinho cada aposta adicionada
function displayBetsList(betsList){
    console.log(betsList);
    const cart = document.getElementById('card-body')
    const formatedPrice = new Intl.NumberFormat([], {style: 'currency',currency: 'BRL'})
    const cartContent = document.createElement('div')
    const deleteBtn =  document.createElement('div')
    const betData =  document.createElement('div')
    const id = Math.random().toString(32).substr(2,9)
    const betNums = document.createElement('p')

    const betPrice = document.createElement('p')
    const betType = document.createElement('span')
    const priceAndType = document.createElement('p')
  
    priceAndType.setAttribute('class','row')
    cartContent.setAttribute('class','row')
    cartContent.setAttribute('id', id)

    deleteBtn.setAttribute('class','col-2 delete-btn')
    deleteBtn.innerHTML = '<img src="../layout/img/trash-can.svg" width="20px" id="trash-can">'
    deleteBtn.addEventListener('click', function(){
        deleteBet(betsList, id)
    }, false)

    betNums.setAttribute('class', 'bet-nums')
    betNums.innerHTML = betsList.range
   
    betData.setAttribute('style', `border-color: ${betsList.color};margin-bottom:10px`)
    betData.setAttribute('class','bet-content col-10')
    betType.setAttribute('style',`
        font-style: italic;
        font-family: Helvetica;
        font-weight: bold;
        color: ${betsList.color}`
    )
    betType.setAttribute('class','col')
    betType.appendChild(document.createTextNode(`${betsList.type}`))

    betPrice.setAttribute('class','bet-nums col')
    betPrice.innerHTML = formatedPrice.format(betsList.price)
    
    priceAndType.appendChild(betType)
    priceAndType.appendChild(betPrice)
    betData.appendChild(betNums)
    betData.appendChild(priceAndType)
    cartContent.appendChild(deleteBtn)
    cartContent.appendChild(betData)
    cart.appendChild(cartContent)
    bets.push(betsList)
    totalPrice()
}

//calcula o valor total do carrinho
function totalPrice(){
    let prices = []
    const totalPriceTag = document.getElementById('total')
    const totalPriceText = document.createElement('p')
    const cartText = document.createElement('span')
    const totalText = document.createElement('span')
    const totalPriceNumber = document.createElement('span')
    const priceFormater = new Intl.NumberFormat([], {style: 'currency',currency: 'BRL'}) 

    if(totalPriceTag.hasChildNodes()){
        totalPriceTag.removeChild(totalPriceTag.childNodes[0])
    }
    bets.forEach(e=>{
        prices.push(e.price)
    })
    totalPriceValue= prices.reduce(function(acumulador, currentValue){
        return acumulador + currentValue
    })
    cartText.setAttribute('class','strong-bold-text text-uppercase')
    totalText.setAttribute('class','betType text-uppercase')
    totalPriceNumber.setAttribute('class','betType text-uppercase')

    cartText.appendChild(document.createTextNode('Cart'))
    totalText.appendChild(document.createTextNode(' Total: '))
    totalPriceNumber.appendChild(document.createTextNode(`${ priceFormater.format(totalPriceValue)}`))

    totalPriceText.appendChild(cartText)
    totalPriceText.appendChild(totalText)
    totalPriceText.appendChild(totalPriceNumber)
    totalPriceTag.appendChild(totalPriceText) 
}

//deleta uma aposta do carrinho
function deleteBet(obj, id){
    const selectedItem = bets.findIndex((item)=>item === obj)
    document.getElementById(id).remove()
    document.getElementById('total').remove()
    bets.splice(selectedItem,1)
}

//limpa o cariinho
function clearCart(){
    const cart = document.getElementById('card-body')
    document.getElementById('total').remove()
    if (cart.hasChildNodes()) {
        while (cart.firstChild) {
            cart.firstChild.remove()
        }
    }
    return
}

//salva as apostas 
function save(){
    if(bets.length === 0){
        alert('carrinho vazio')
        return
    }else if(totalPriceValue < 30){
        alert('valor minimo do carrinho: R$ 30,00')
        return
    }
    alert("apostas Salvas!!!")
    bets=[]
    clearCart()
    /*const ajax = new XMLHttpRequest()
    bets.forEach(element =>{
        ajax.open('POST', 'http://localhost:3000/betsList', true)
        ajax.setRequestHeader("Content-type","application/json")
        ajax.send(JSON.stringfy(element) )        
    })*/
}

