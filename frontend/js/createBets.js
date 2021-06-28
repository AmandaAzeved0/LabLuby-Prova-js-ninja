const table = document.getElementById('numbers')

table.innerHTML = `
    <br/><br/>
     <table id="tableContent">
     </table>
     <br/><br/>
     <div id="selected-numbers"><div>
`


let maxRange
let pckdNumbers = []

let type 
function gtype(gtype){
    const gameType = {
        name : gtype.type,
        description: gtype.description,
        price : gtype.price,
        range: gtype.range,
        maxNumber: gtype["max-number"],
        color: gtype.color,
    }
    type = gameType
}

//muda a descrição do jogo conforme a escolha do usuario (ok)
function showDescription() {

    const description = document.getElementById("gameDescription")
    const text = document.createElement('p')
    text.setAttribute('id', 'text')

    if (description.hasChildNodes()) {
        const oldText = document.getElementById('text')
        oldText.remove()
    }
    text.textContent = type.description
    description.appendChild(text)
}

//determinas algumas propriedades da tabela de acordo com o tipo de jogo
function tableInfo() {
    let tableNumbers = []

    for(let i =1;i<=type.range;i++){
        tableNumbers.push(i)
    }
    console.log(type.range);
    const rows = tableNumbers.length > 25 ? tableNumbers.length / 10 : 5
    const columns = tableNumbers.length > 25 ? 9 : 4

    checkTable()
    tableGenerator(tableNumbers, rows, columns)
}

//da pra pensar melhor nisso
let arrDefault=[]
for(let i =1;i<=60;i++){
    arrDefault.push(i)
}
// gera uma tabela de numeros de acordo com o range do tipo de jogo escolhido(ok)
function tableGenerator(arr=arrDefault, numberOfRows=5, numberOfColumns=9) {
    let salto = arr.length > 25 ? 10 : 5
    for (let row = 1; row <= numberOfRows; row++) {
        let tr = document.createElement('tr')
        for (let column = 0; column <= numberOfColumns; column++) {
            let hop = 0
            let td = document.createElement('td')
            let btn = document.createElement('input')
            arr[hop] > 9 ?
                btn.setAttribute('value', `${arr.splice(hop, 1)}`)
                : btn.setAttribute('value', `0${arr.splice(hop, 1)}`)
            btn.setAttribute('class', 'number-btn')
            btn.setAttribute('type', 'button')
            btn.setAttribute('onclick', `pickedNumber(${btn.value})`)
            td.appendChild(btn)
            tr.appendChild(td)
            hop += salto
        }
        document.getElementById('tableContent').appendChild(tr)
    }
}

//verifica se ja existe uma tabela de numeros na tela (0k)
function checkTable() {
    const tableContent = document.getElementById("tableContent")
    if (tableContent.hasChildNodes()) {
        while (tableContent.firstChild) {
            tableContent.firstChild.remove()
        }
    }
    return
}

//verifica se ja existe um array de números escolhidos na tela (0k)
function checkCurrentPckdNumbers(){
    const currentPckdNumbers = document.getElementById("selected-numbers")
    if(currentPckdNumbers.hasChildNodes()){
        currentPckdNumbers.removeChild(currentPckdNumbers.childNodes[0])
        pckdNumbers = []
    }
    return
}

//mostra os números escolhidos ate o momento (ok)
function pickedNumber(num) {   
    if (pckdNumbers.length >= type.maxNumber ){
       return  alert(`Escolha somente ${type.maxNumber} números`)
    }
    pckdNumbers.push(num)
    showPckdNumbers()
    
}
//ok
function showPckdNumbers(){

    const showPckdNumbers = document.getElementById('selected-numbers')
    const content = document.createElement('p')

    if (showPckdNumbers.hasChildNodes()) {
        showPckdNumbers.removeChild(showPckdNumbers.childNodes[0])
    }
    content.appendChild(document.createTextNode(`${pckdNumbers}, `))
    showPckdNumbers.appendChild(content)
}

//ok
function addToCart(){  
    const body = {
       "type":type.name,
       "price":type.price,
       "range": pckdNumbers
    }
    const ajax = new XMLHttpRequest()
    ajax.open('POST', 'http://localhost:3000/betsList')
    ajax.setRequestHeader("Content-type","application/json")
    ajax.send(JSON.stringify(body))
}
//ok
function completeGame(){
    pckdNumbers = []
    for( let i = 1; i <= type.maxNumber; i++){
        pckdNumbers.push(Math.floor(Math.random() * type.range) + 1)
    }
    showPckdNumbers()
    console.log(pckdNumbers);
}

//remove um jogo em curso (ok)
function clearGame(){
    const currentPckdNumbers = document.getElementById("selected-numbers")
    currentPckdNumbers.removeChild(currentPckdNumbers.childNodes[0])
    pckdNumbers = []
}













