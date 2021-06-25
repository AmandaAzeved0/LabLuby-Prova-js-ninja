const menuSuperior = document.getElementById('menu')

menuSuperior.innerHTML = `
    <div class="container-fluid row ps-lg-5 pe-lg-5">
        <div class="col" id="menu-brand">
            <strong >TGL</strong>
        </div>
        <div class="col-2 text-start" id="right-menu-options">
        <a href="#" class="text-decoration-none text-black-50"><strong>  Account </strong></a> 
        </div>
        <div class="col-1 text-start" id="right-menu-options">
        <a href="index.html" class="text-decoration-none text-black-50">
            <strong >Sair &nbsp <img src="../layout/img/right-arrow2.svg" width="15rem" /></strong>
        </a>
        </div>
    </div>
    <hr id="bottom-menu-line"/>
`