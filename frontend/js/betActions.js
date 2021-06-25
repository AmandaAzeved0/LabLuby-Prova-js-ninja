const actionsButtons = document.getElementById('betActions')

actionsButtons.innerHTML=`
    <br/><br/>
    <div class="col">
    <button class="btn completeOrClear-btn" onclick="completeGame()" id="complete-btn"> completeGame</span>
    <button class="btn completeOrClear-btn" onclick="ClearGame()" id="clear-btn">ClearGame</span>
    <button class="btn addToCart-btn" onclick="addToCart()" id="addToCart-btn"> addToCart</button>
    </div>

`