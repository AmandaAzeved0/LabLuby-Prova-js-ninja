const content = document.getElementById('betsPageContent')

content.innerHTML = `

    <div class="row">
        <div class="col-2">
            <strong class="text-uppercase newBetFor-text" id="newBetFor-text">New Bet For </strong>
            <span class="betType" id="betType">Mega sena</span>
        </div>
        <div>
        <strong id="filters-text">Choose a game</strong>
        </div>
        <div class="col">
            
            <button class="btn " onclick="lotofacil()" id="lotofacil-btn"> Lotofácil</span>
            <button class="btn" onclick="megaSena()" id="megaSena-btn">Mega-Sena</span>
            <button class="btn" onclick="lotomania()" id="lotomania-btn"> Lotomania</span>
        </div>
        <div class="col-4" id="cart">
        </div>
    </div>
    

`

function lotofacil() {
    return "<div>teste lotofacil</div>"
}