
const content = document.getElementById('betsPageContent')
content.innerHTML = `
        <div class="row">
            <div class="col-8">
                <strong class="text-uppercase strong-bold-text" id="newBetFor-text">New Bet </strong>
                <span class="betType text-uppercase"> For</span>
                <span class="betType text-uppercase" id="betType"></span>
                <div>
                <strong class="tiny-text" id="filters-text">Choose a game</strong>
                <br/><br/>
                </div>
                <div id="filters"></div>
                <br/>
                <div>
                    <strong class="tiny-text">Fill your bet</strong>
                    <strong class="tiny-text col" id="gameDescription"></strong>
                </div>
                <div id="numbers"></div>
                <div id="betActions"></div>
                </div>
                <div class="col-4" id="cart"></div>
            
            </div>
            
            
        </div>
    `

const betType = document.getElementById('betType')
let gameType 
let gameConfig

function init(){
    this.sendGamesTypesRequest()    
}

function sendGamesTypesRequest(){
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'http://localhost:3000/gamesTypes', true)
    ajax.send()
    ajax.addEventListener('readystatechange', getGameInfo, false)    
}

function getGameInfo(){
    if(!(this.readyState === 4 && this.status === 200)) return
    const data = JSON.parse(this.responseText)
    const types = getTypes(data)
    gameType = types[0]
    showGameFilters()
}

function showGameFilters(){
    let filterDiv = document.getElementById('filters')
    gameType.forEach(element => {
        const label = document.createElement('label')
        const input = document.createElement('input')
        const span = document.createElement('span')

        span.innerHTML=element.type
        //span.setAttribute('id', `${element.type}`)

        input.setAttribute('class' , 'btn')
        input.setAttribute('type' , "radio")
        //input.setAttribute('value' , `${element.type}`)
        input.setAttribute('name' , 'bet')
        input.setAttribute('id' , `${element.type}`)

       /*span.setAttribute('style',
            `
                color: ${element.color};
                border: 2px solid ${element.color};
                border-radius: 2rem;
                padding: 5px 20px;
                margin:5px;
                
            ` 
        )*/

        setColor(input,span,element.color)
        input.addEventListener("click", function(){
            //setColor(span,element.color)
            filter(element)    
        },false)
        
        label.appendChild(input)
        label.appendChild(span)
        filterDiv.appendChild(label)
       
    });
}

function filter(element){
    const subtitleText = element.type
    subTitle(subtitleText)
    selectGameType(element.type)
    checkCurrentSelectedNumbersArray()
}

function getTypes(data){
    const arr = []
    for (let key in data){
        if(data.hasOwnProperty(key))
        arr.push(data[key].types);
    }
    return arr
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

function setColor(input,span,color){
    const elements = document.getElementById('filters').childNodes
    if(input.checked === false){
        console.log(input.checked);
        span.setAttribute('style',
            `
                color: ${color};
                border: 2px solid ${color};
                border-radius: 2rem;
                padding: 5px 20px;
                margin:5px;
                
           ` )

    }else if(input.checked === true){    
        span.removeAttribute('style')
        console.log(span);
        span.setAttribute('style',
        `
            color: '#ffff';
            border: 2px solid ${color};
            background-color = ${color};
            border-radius: 2rem;
            padding: 5px 20px;
            margin:5px;
            
       ` )

    }
    /*elements.forEach(element =>{
        console.log(element.childNodes[0].checked);
        if (element.childNodes[0].checked === true){
            span.style.color = '#ffff'
            span.style.backgroundColor = color
            span.parentNode.childNodes[0].checked=true
            
        }
        span.style.color=  color
        span.style.backgroundColor = '#ffff'
        span.style.border=  '2px solid color'
        span.style.borderRadius =  '2rem'
        span.style.padding=  '5px 20px'
        span.style.margin= '5px'
        span.parentNode.childNodes[0].checked=false
    })*/
}
init()
