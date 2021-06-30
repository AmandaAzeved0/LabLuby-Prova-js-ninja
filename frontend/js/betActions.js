const actionsButtons = document.getElementById('betActions')

actionsButtons.innerHTML=`
    <br/><br/>
    <div class="col">
    <button class="btn completeOrClear-btn" onclick="completeGame()" id="complete-btn"> Complete Game</span>
    <button class="btn completeOrClear-btn" onclick="clearGame()" id="clear-btn">Clear Game</span>
    <button class="btn addToCart-btn" onclick="addToCart()" id="addToCart-btn"><img src="../layout/img/cart.svg" width="20px" id="cart-icon"> Add To Cart</button>
    </div>

`
