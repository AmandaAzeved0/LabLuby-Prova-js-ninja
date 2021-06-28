
const content = document.getElementById('betsPageContent')
content.innerHTML = `
        <div class="row">
            <div class="col">
                <strong class="text-uppercase newBetFor-text" id="newBetFor-text">New Bet For </strong>
                <span class="betType" id="betType"></span>
            </div>
            
            <div>
            <strong class="tiny-text" id="filters-text">Choose a game</strong>
            </div>
            <br/>
            <div class="col">
            <button class="btn " onclick="lotofacil()" id="lotofacil-btn" name="subtitleText">Lotofácil</span>
                <button class="btn" onclick="megaSena()" id="megaSena-btn" name="subtitleText">Mega-Sena</span>
                <button class="btn" onclick="lotomania()" id="lotomania-btn" name="subtitleText"> Lotomania</button>
                <br/>
                <strong class="tiny-text">Fill your bet</strong>
                <br/>
                <strong class="tiny-text" id="gameDescription"></strong>
                <div id="numbers"></div>
                <div id="betActions"></div>
            </div>
            <div class="col-4" id="cart"></div>
            
        </div>
    `

const betType = document.getElementById('betType')
let subtitleText
let gameType 
let gameConfig

function init(){
    this.sendGamesTypesRequest()
    
}

function sendGamesTypesRequest(){
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'http://localhost:3000/gamesTypes', true)
    ajax.send()
    console.log(ajax.responseText)
    ajax.addEventListener('readystatechange', getGameInfo, false)    
}

function getGameInfo(){
    if(!(this.readyState === 4 && this.status === 200)) return
    const data = JSON.parse(this.responseText)
    const types = getTypes(data)
    gameType = types[0]
}

function getTypes(data){
    const arr = []
    for (let key in data){
        if(data.hasOwnProperty(key))
        arr.push(data[key].types);
    }
    return arr
}

function lotofacil(){  
    subtitleText = document.getElementById('lotofacil-btn').textContent
    subTitle(subtitleText)
    selectGameType("Lotofácil")
    checkCurrentPckdNumbers()   
}

function megaSena() { 
    subtitleText = document.getElementById('megaSena-btn').textContent 
    subTitle(subtitleText)
    selectGameType("Mega-Sena")
    checkCurrentPckdNumbers() 
}

function lotomania() {   
    subtitleText = document.getElementById('lotomania-btn').textContent 
    subTitle(subtitleText)
    selectGameType("Quina")
    checkCurrentPckdNumbers()

}

function selectGameType(gameName){
    for (let key in gameType){
        if( gameType[key].type === gameName){
            gtype(gameType[key])
            showDescription()
            tableInfo()
        } 
   }   
}

function subTitle(subtitleText){
    if(betType.hasChildNodes()){
        betType.removeChild(betType.childNodes[0])
    }
    betType.appendChild(document.createTextNode(subtitleText))
}

init()

