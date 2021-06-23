const content = document.getElementById('listPageContent')

content.innerHTML = `
    <div class="row">
        <div class="col-2">
            <strong class="text-uppercase" id="recenteGames-text">Recent games</strong>
        </div>
        <div class="col">
            <strong id="filters-text">Filters</strong>
            <span id="lotofacil-btn"> Lotofácil</span>
            <span id="megaSena-btn">Mega-Sena</span>
            <span id="lotomania-btn"> Lotomania</span>
        </div>
        <div class="col text-start">
            <strong id="newBet-text">New Bet <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow"/></strong>
        </div>
    </div>

    ${lotofacil()}
`

function lotofacil() {
    return "<div>teste lotofacil</div>"
}