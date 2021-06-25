
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
            <button class="btn " onclick="lotofacil()" id="lotofacil-btn" name="gameName">Lotofácil</span>
                <button class="btn" onclick="megaSena()" id="megaSena-btn" name="gameName">Mega-Sena</span>
                <button class="btn" onclick="lotomania()" id="lotomania-btn" name="gameName"> Lotomania</button>
                <br/>
                <strong class="tiny-text">Fill your bet</strong>
                <br/>
                <strong class="tiny-text" id="gameDescription">Fill your bet</strong>
                <div id="numbers"></div>
                <div id="betActions"></div>
            </div>
            <div class="col-4" id="cart"></div>
            
        </div>
    `

    const betType = document.getElementById('betType')
    let gameName

    function gameConfigRequest(){
        const ajax = new XMLHttpRequest()
        ajax.open('GET', 'http://localhost:3000/gamesTypes')
        ajax.send()
        ajax.addEventListener('readystatechange',getGameConfig, false)
    }

    function getGameConfig(){
        if(!(this.readyState === 4 && this.status === 200)) return
        const data = JSON.parse(this.responseText)
        const arr = types(data)
        console.log(arr[0]);
        return arr[0]
    }

    function types(data){
        const arr = []
        for (let key in data){
            if(data.hasOwnProperty(key))
            arr.push(data[key].types);
        }
        return arr
    }
    function lotofacil(){  
        gameName = document.getElementById('lotofacil-btn').textContent
        subTitle(gameName)
        let teste = displayGameConfig()
        console.log(teste);
        //loadGameSet(gameSet)         
    }
    function megaSena() { 
        gameName = document.getElementById('megaSena-btn').textContent 
        subTitle(gameName)
    }
    function lotomania() {   
        gameName = document.getElementById('lotomania-btn').textContent 
        subTitle(gameName)     
    }

    function subTitle(gameName){
        if(betType.hasChildNodes()){
            betType.removeChild(betType.childNodes[0])
        }
        betType.appendChild(document.createTextNode(gameName))
    }

    function loadGameSet(arr){
        console.log(arr);
    }

    getGameConfig()
