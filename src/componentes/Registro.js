import { router } from "./Router"

export const registro = {
    template:`
    <h1 class="pb-3">Regristo</h1> 
    <form id="form2" class="needs-validation" novalidate>
        <div class="mb-3">
            <label for="nick" class="form-label">Nick:</label>
            <input id="nick" type="text" class="form-control w-50 nick" required pattern="[A-Z_]{1,10}">
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Solo mayusculas, del 1 y 10, no espacios y solo _</div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control w-50" id="email" value="" required>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control w-50" id="password" required maxlength="16" minlength="6">
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Minimo 6 y maximo 16</div>
        </div>
        <div id="avatar" class="w-25"></div>
        <button id="enviar" type="submit" class="btn btn-primary">Registrarse</button>
    </form>
    `,
    script: ()=>{
        const botonRegistro=document.querySelector("#enviar")
        botonRegistro.addEventListener("click", router.añadir)
        const input = document.querySelector("input")
        input.addEventListener("keydown",(event)=>{
            if(event.target.classList.contains('nick')){
                router.avatar(event)
            }
        })     
        
        document.querySelector('#nick').classList.add('was-validated');
        document.querySelector('#enviar').addEventListener('click', (e)=>{
            e.preventDefault();
            console.log('validandooooo');
            document.querySelector('#form2').classList.add('was-validated');
            if(form2.checkValidity()){
                form2.classList.remove('was-validated')
            }
        });
    }
}