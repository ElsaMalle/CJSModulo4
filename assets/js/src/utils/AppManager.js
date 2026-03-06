
import { Mascota } from "../models/Mascota.js"
import { Render } from "../render/Render.js"


export class AppManager {

    static agregarMascota(veterinarioActual) {
        const inputNombreMascota = document.querySelector('#mascotaNombre')
        const inputNacimientoMascota = document.querySelector('#mascotaFechaNacimiento')
        const inputNombreDueno = document.querySelector('#mascotaDueno')
        const inputApellidoDueno = document.querySelector('#mascotaApellidoDueno')        
        const inputevolucionmedica = document.querySelector('#mascotaevolucionmedica')
        

        const mascota = new Mascota(
            inputNombreMascota.value,
            inputNombreDueno.value,
            inputApellidoDueno.value,
            inputNacimientoMascota.value,
            inputevolucionmedica.value,
            veterinarioActual.nombreCompleto
        )

        veterinarioActual.agregarMascota(mascota)

        Render.mostrarMascotas(veterinarioActual.mascotas)

        document.querySelector('#addMascotaForm').reset()

        const modalMascota = document.querySelector('#addMascotaModal')
        const modal = bootstrap.Modal.getInstance(modalMascota) || new bootstrap.Modal(modalMascota)
        modal.hide()
    }

    static buscarMascota(veterinarioActual, criterio) {
        if(!veterinarioActual) return

        const mascotas = veterinarioActual.buscarMascota(criterio)
        Render.mostrarMascotas(mascotas)
    }
}