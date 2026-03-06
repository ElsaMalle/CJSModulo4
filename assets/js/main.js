
import { Veterinario } from './src/models/Veterinario.js';
import { Mascota } from './src/models/Mascota.js';
import { AppManager } from './src/utils/AppManager.js';
import { Auth } from './src/utils/Auth.js';


let veterinarioActual = null

const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm")

const formularioMascota = document.querySelector("#addMascotaForm");

const buscadorMascota = document.querySelector("#searchMascota");

const veterinario = new Veterinario('clarrain', '123456789', 'Carolina', 'Larrain')
const veterinario2 = new Veterinario('agarcia', '123456789','Alan', 'Garcia')

const mascota1 = new Mascota('Newton', 'Elsa', 'Malle', '2009-09-18', 'gatito bello', veterinario.nombreCompleto)
const mascota2 = new Mascota('Carlota', 'Eduardo', 'Malle', '2015-02-02', 'Problemas de equilibrio', veterinario.nombreCompleto)

veterinario.agregarMascota(mascota1)
veterinario.agregarMascota(mascota2)

Auth.registrarVeterinario(veterinario)
Auth.registrarVeterinario(veterinario2)

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    veterinarioActual = Auth.procesarLogin(usuario.value, password.value)
})

formularioMascota.addEventListener('submit', (event) => {
    event.preventDefault()
    AppManager.agregarMascota(veterinarioActual)
})

buscadorMascota.addEventListener('input', () => {
    const criterio = buscadorMascota.value
    AppManager.buscarMascota(veterinarioActual, criterio)
})

const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener('click', () => {
    Auth.logout();
});

//esto se lo pedi a la IA, para hacer mas facil la revision
const cargarCuentasPrueba = () => {
    const contenedor = document.querySelector("#cuentasPrueba");
    if (!contenedor) return; 
    const listaVetes = Auth.mostrarVeterinarios();
    const htmlVetes = listaVetes.map(v => `
        <div class="mb-2 p-2 border-bottom">
            <span class="badge bg-info text-dark">VET (${v.nombreCompleto})</span><br>
            <strong>User:</strong> <code>${v.usuario}</code> | 
            <strong>Pass:</strong> <code>123456789</code>
        </div>
    `).join('');

    contenedor.innerHTML = htmlVetes;
};

cargarCuentasPrueba();