const table = document.getElementById('numbers')

table.innerHTML = `
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

//muda a descrição do jogo conforme a escolha do usuario
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

//determina algumas propriedades da tabela de acordo com o tipo de jogo
function tableInfo() {
    let tableNumbers = []
    let rows
    let columns

    if(type.range % 10 === 0 && type.range !== 10){
        rows = type.range/10
        columns = 9
    }else if(type.range % 5 === 0){
        rows = type.range/5
        columns = 4
    }else if(type.range === 10){
        rows = 2
        columns = 4
    }

    for(let i =1;i<=type.range;i++){
        tableNumbers.push(i)
    }

    checkTable()
    checkCurrentSelectedNumbersArray()
    tableGenerator(tableNumbers, rows, columns)
}

// gera uma tabela de números de acordo com o range do tipo de jogo escolhido
function tableGenerator(arr, numberOfRows, numberOfColumns) {
    let salto = arr.length % 10 === 0 ? 10 : 5
    for (let row = 1; row <= numberOfRows; row++) {
        let tr = document.createElement('tr')
        for (let column = 0; column <= numberOfColumns; column++) {
            let hop = 0
            let td = document.createElement('td')
            const label = document.createElement('label')
            const input = document.createElement('input')
            const span = document.createElement('span')
                       
            arr[hop] > 9 ?
                span.innerHTML=`${arr.splice(hop, 1)}`
                : span.innerHTML=`0${arr.splice(hop, 1)}`

            span.setAttribute('class', 'nBtn')
            input.setAttribute('type','checkbox')
            input.setAttribute('id',span.innerHTML)
            input.addEventListener('click', selectedNumbers.bind(null, Number(span.innerHTML)))
            label.appendChild(input)
            label.appendChild(span)
            
            td.appendChild(label)
            tr.appendChild(td)
            hop += salto
        }
        document.getElementById('tableContent').appendChild(tr)
    }
}

//verifica se ja existe uma tabela de números na tela (0k)
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
function checkCurrentSelectedNumbersArray(){
    if (pckdNumbers.length !== 0)
        pckdNumbers = []
    return
}

//verifica se o numero escolhido ja existe no array, se sim, retira
function selectedNumbers(num){
    if(pckdNumbers.indexOf(num) !== -1 ){
        let index = pckdNumbers.indexOf(num)
        pckdNumbers.splice(index,1) 
        change(false,num)
        console.log(pckdNumbers)
        return
    }
    addNumbers(num)
}

//insere ou remove um numero (ok)
function addNumbers(num){  
    if(pckdNumbers.length < type.maxNumber  ){
        if(pckdNumbers.indexOf(num) === -1 ){
            pckdNumbers.push(num)
            change(true, num)
           
        }else if(pckdNumbers.indexOf(num) !== -1 ){     
            let index = pckdNumbers.indexOf(num)
            change(false, num)
            pckdNumbers.splice(index,1)   
        }
        return
    }
    change(false, num)
    alert(`Escolha somente ${type.maxNumber} números`)
     
}

//muda o estado de um item na checkbox
function change(bool, num){
    const input = num > 9? document.getElementById(`${num}`) : document.getElementById(`0${num}`)
    input.checked = bool
    return bool
}
//verifica ser o tamnho do array esta correto e gera um obj pra ser mostrado no carrinho
function addToCart(){
    if (pckdNumbers.length < type.maxNumber){
        return  alert(`Escolha ${type.maxNumber} números`)
    }
    const date = new Date()
    const body = {
       "type":type.name,
       "price":type.price,
       "range": pckdNumbers.sort(crescentSort),
       "color": type.color,
       "created_at": date.toLocaleDateString()
    }
    displayBetsList(body)
    clearGame()
}
//completa um aposta
function completeGame(){
    while(pckdNumbers.length < type.maxNumber){
        let random = Math.floor(Math.random() * type.range) + 1
        if( pckdNumbers.indexOf(random) === -1) {
            selectedNumbers(random)
        }
    }
}
// ordena os números da aposta
function crescentSort(a,b){
    return a - b 
}

//remove um jogo em curso (ok)
function clearGame(){
    tableInfo()
    pckdNumbers = []
}













