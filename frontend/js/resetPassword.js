const content = document.getElementById("resetPasswordPageContent");

content.innerHTML = `

    <p class="fst-italic fw-bold" id="form-title">Reset password</p>
    <div>
        <form class="row">
            <div class="container col-6 p-2 border border-white rounded-3 bg-white shadow">
                <input type="email" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginEmail" placeholder="Email">
                <p></p>
                <a href="#" onclick="sendResetPassWordEmail()" class="fst-italic fw-bold" id="logIn-text">Send link 
                    <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow">
                </a>
                <p></p>
            </div>
        </form>
        <br/>
        <a href="index.html" class="fst-italic fw-bold" id="signUp-text"><img src="../layout/img/left-arrow.svg" width="20px" id="left-arrow"> Back</a>
    </div>
`

function sendResetPassWordEmail() {
    const email = document.getElementById("LoginEmail").value
    const users = JSON.parse(localStorage.getItem('user'))

    if (email === "") {
        alert("Preencha o campo corretamente!")
    }

    users.filter(user => {
        if (email === user.email) {
            alert(`Olá ${user.nome}, enviamos para o seu email um link para correção de sua senha!`)
        }else if (email !== user.email && senha !== user.senha) {
            alert("Usuário não encontrado! \nClique em Sing Up para se cadastrar! ")
        }
    })
}