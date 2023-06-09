export const login = {
    template: `
   <h1 class="pb-3">Login</h1> 
    <form id="formlogin" class="row g-3 d-block needs-validation" novalidate >
        <div class="col-md-10">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" class="form-control" required>
            <!-- mensaje si valida -->
            <div class="valid-feedback">Email correcto</div>
            <!-- mensaje si no valida -->
            <article class="invalid-feedback">Incorrecto, introduce un email que sea correcto</div>
        </div>
        <div class="col-md-10">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="pass" required maxlength="16" minlength="6" pattern="[A-Z]{1,}[^A-Z]{1,}[0-9]{1,}">
            <!-- mensaje si valida -->
            <div class="valid-feedback">Password correcta</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Incorrecta, el orden es letras mayusculas, letras minusculas y numeros </div>
        </div>
        <div class="col-12">
            <button type="submit" id="enviar" class="btn btn-primary">Enviar</button>
        </div>
    </form>`,
    script: () => {
        document.getElementById('enviar').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#formlogin').classList.add('was-validated');
            if (formlogin.checkValidity()) {
                formlogin.classList.remove('was-validated')
            }
        })
    }
}