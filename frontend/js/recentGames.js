const recentContent = document.getElementById('recentGamesContent')
recentContent.innerHTML = `
        <div class="row">
            <div class="col">
                <strong class="text-uppercase newBetFor-text" id="newBetFor-text">Recent games </strong>
                <div id="filters" class="col">
                <br/>
                <span type="button"  onclick="newBetPage()" class="newBet-text" > New Bet
                    <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow">
                </span>
            </div>
            <br/>       
        </div>
        <br/> <br/>  
        <div class="row" id= "recentBets-list">
        
        </div>
`

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'http://localhost:3000/betsList')
    ajax.setRequestHeader("Content-type","application/json")
    ajax.send()
    ajax.addEventListener('readystatechange', listRecentBets , false)


    function newBetPage(){
        return window.location.href = "../pages/betsPage.html"
    }

    function listRecentBets(){
        if(!(this.readyState === 4 && this.status === 200)) return
        const bets = JSON.parse(this.responseText)
        const list = document.getElementById('recentBets-list')
        console.log(bets);
        bets.forEach(element => {
            const formatedPrice = new Intl.NumberFormat([], {style: 'currency',currency: 'BRL'})
            const betContent = document.createElement('div')

            betContent.setAttribute('style', `border-color: ${element.color};margin-bottom:10px`)
            betContent.setAttribute('class','bet-content')

            const betNums = document.createElement('p')
            const betCreatedAt = document.createElement('p') 
            const betPrice = document.createElement('p')
            const betType = document.createElement('p')
            
            betCreatedAt.innerHTML = element.created_at
            betPrice.innerHTML = formatedPrice.format(element.price)
            betNums.setAttribute('class', 'bet-nums')
            betNums.innerHTML = element.range
            betType.setAttribute('style',`
                font-style: italic;
                font-family: Helvetica;
                font-weight: bold;
                color: ${element.color}`
            )
            betType.appendChild(document.createTextNode(`${element.type}`))

            betContent.appendChild(betNums)
            betContent.appendChild(betCreatedAt)
            betContent.appendChild(betPrice)
            betContent.appendChild(betType)
            list.appendChild(betContent)
        })
    }

