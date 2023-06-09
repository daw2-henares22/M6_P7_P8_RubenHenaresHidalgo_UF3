import { router } from "./Router"
import multiavatar from '@multiavatar/multiavatar/esm'

export const editarPerfil = {
    template:`
    <h2>Editar Perfil</h2>
    <form id="formEditar" class="needs-validation" novalidate>
        <input type="hidden" id="id">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nick</label>
            <input id="nickE" type="text" class="form-control nicke" aria-describedby="nick" value="" required>
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Introduce el nick</div> 
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input  id="emailE" type="text" class="form-control" aria-describedby="email" value="" required>
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Introduce el correo electrónico</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input  id="passwordE" type="password" class="form-control" value="" required>
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Minimo 6 y maximo 16</div>
        </div>
        <div id="avatar" class="w-50"></div>
        <button id="editar" type="submit" class="btn btn-primary enviarEditar">Editar</button>
    </form>
    `,
    script:()=>{
        console.log('hola, soy editarPerfil')

        document.querySelector("#editar").addEventListener("click", (e)=>{
            e.preventDefault()
            document.querySelector('#formEditar').classList.add('was-validated');
            if(formEditar.checkValidity()){
                formEditar.classList.remove('was-validated')
            }
        })
        const main = document.querySelector("main")
        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('enviarEditar')){
                router.editarEnviar(event)
            }
        })
        main.addEventListener("keydown",(event)=>{
            if(event.target.classList.contains('nicke')){
                let svgCode = multiavatar(event.target.value)
                document.querySelector('#avatarE').innerHTML = svgCode
            }
        })        
    }
}