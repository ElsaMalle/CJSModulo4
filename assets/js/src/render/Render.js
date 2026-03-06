import { Componentes } from "../components/cardMAscotas.js"

export class Render {
    static mostrarDashboard(veterinarioActual) {
        const loginSection = document.querySelector('#loginSection')
        const dashboardSection = document.querySelector('#dashboardSection')
        const navbar = document.querySelector('#navbar')
        const welcomeText = document.querySelector('#welcomeText')
        const veterinarioInfo = document.querySelector('#veterinarioInfo')

        loginSection.style.display = 'none'
        dashboardSection.style.display = 'block'
        navbar.style.display = 'block'
        welcomeText.textContent = `Bienvenido Dr. ${veterinarioActual.nombreCompleto}`
        veterinarioInfo.textContent = `Dr. ${veterinarioActual.nombreCompleto} - usuario: ${veterinarioActual.usuario}`
    }

    static mostrarMascotas(mascotas) {
        const listaMascotas = document.querySelector('#mascotaList')
        const cantidadMascotas = document.querySelector('#mascotaCount')
        cantidadMascotas.innerHTML = mascotas.length
        const htmlCard = mascotas.map(mascota => Componentes.crearTarjetaMascota(mascota)).join('')
        listaMascotas.innerHTML = htmlCard
    }
}