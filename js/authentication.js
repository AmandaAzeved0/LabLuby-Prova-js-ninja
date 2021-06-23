const content = document.getElementById("homePageContent");

content.innerHTML = `
    <p class="fst-italic fw-bold" id="form-title">Authentication</p>

    <div>
        <form class="row">
            <div class="container col-6 p-2 border border-white rounded-3 bg-white shadow">
               
                <input type="email" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginEmail" placeholder="Email">
                
                <input type="password" class="form-control p-3 fst-italic fw-bold fs-6 border-0 border-bottom" id="LoginPassword" placeholder="Password">
                
                <a href="../pages/resetPassword.html" class="text-decoration-none"><p class="text-start fst-italic fw-bold" id="forgetPassword-text">I forget my password</p> </a>
                
                <a href="#" onclick="login()" class="fst-italic fw-bold" id="logIn-text">Log In <img src="../layout/img/right-arrow.svg" width="20px" id="right-arrow"></a>
                
                <p></p>
            </div>
        </form>
        <br/>
        <a href="../pages/createUser.html" class="fst-italic fw-bold" id="signUp-text">Sign Up <img src="../layout/img/right-arrow2.svg" width="20px" id="right-arrow"></a>
    </div>
`
function login() {
    const email = document.getElementById("LoginEmail").value
    const senha = document.getElementById("LoginPassword").value

    const users = JSON.parse(localStorage.getItem('user'))

    users.map(user => {
        if (email === user.email && senha === user.senha) {
           return window.location.href = "../pages/list.html";
        }else if (email !== user.email && senha !== user.senha) {
            alert("Usuário não encontrado! \nClique em Sing Up para se cadastrar! ")
        }
    })
}