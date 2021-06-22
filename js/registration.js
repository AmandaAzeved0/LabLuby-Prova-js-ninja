const content = document.getElementById("newUserPageContent");

content.innerHTML = `
    <p class="fst-italic fw-bold" id="form-title">Registration</p>
    <div>
        <form class="row">
            <div class="container col-6 p-2 border border-white rounded-3 bg-white shadow">

                <input type="text" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginNome" placeholder="Name">

                <input type="email" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginEmail" placeholder="Email">

                <input type="password" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginPassword" placeholder="Password">
                <br/>  
                <a href="#" onclick="signUp()" class="fst-italic fw-bold" id="logIn-text">Register <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow"></a>
                <p></p>
            </div>
        </form>
        <br/>

        <a href="index.html" class="fst-italic fw-bold" id="signUp-text"><img src="../layout/img/left-arrow.svg" width="20px" id="left-arrow"> Back</a>
    </div>
`

function signUp() {
    const nome = document.getElementById("LoginNome").value
    const email = document.getElementById("LoginEmail").value
    const senha = document.getElementById("LoginPassword").value

    if ((nome === "") || (email === "") || (senha === "")) {
        alert("Preencha todos os campos!")

    } else if (localStorage.length === 0) {      
        const user = [{
            id: 1,
            nome: nome,
            email: email,
            senha: senha
        }]

        localStorage.setItem('user', JSON.stringify(user))
        alert("Usuário cadastrado com sucesso!")

    } else {
        const users = JSON.parse(localStorage.getItem('user'))
        users.push({
            id: users.length + 1,
            nome: nome,
            email: email,
            senha: senha
        })

        localStorage.setItem('user', JSON.stringify(users))
        alert("Usuário cadastrado com sucesso!")
    }


}