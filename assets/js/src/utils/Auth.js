//Las clases que no instancian objetos, osea que no crean objetos, se les denomina clases abstractas

import { Render } from "../render/Render.js"


export class Auth { // ESTA CLASE NO CREA OBJETOS! -> Sirve para darle identidad a los procesos
    static Veterinarios = []
    static VeterinarioActual = null
    static Admin = null
    static UsuarioActual = null

    static procesarLogin(usuario, password) {
        // Verificar si es admin
        if (Auth.Admin && Auth.Admin.verificarCredenciales(usuario, password)) {
            Auth.UsuarioActual = Auth.Admin
            alert(`Admin logueado con éxito`)
            Render.mostrarDashboardAdmin(Auth.Admin)
            return Auth.Admin
        }

        // Verificar si es veterinario
        const Veterinario = Auth.Veterinarios.find(veterinario => veterinario.verificarCredenciales(usuario, password))

        if (Veterinario) {
            Auth.VeterinarioActual = Veterinario
            Auth.UsuarioActual = Veterinario
            alert(`Dr. ${Veterinario.nombreCompleto} logueado con éxito`)
            Render.mostrarDashboard(Auth.VeterinarioActual)
            Render.mostrarMascotas(Auth.VeterinarioActual.mascotas)

            return Auth.VeterinarioActual
        } else {
            alert('Error al loguear usuario')
        }
    }

    static registrarVeterinario(nuevoVeterinario) {
        const existeveterinario = Auth.Veterinarios.some(
            (veterinario) => veterinario.id === nuevoVeterinario.id,
        );

        if (existeveterinario) {
            throw new Error("El veterinario ya esta registrado en el sistema");
        }

        Auth.Veterinarios.push(nuevoVeterinario);
    }

    static registrarAdmin(nuevoAdmin) {
        Auth.Admin = nuevoAdmin
    }

    static mostrarVeterinarios() {
        return Auth.Veterinarios
    }
    
    static logout() {
        Auth.VeterinarioActual = null;
        alert('Sesión cerrada. Hasta luego!');
        location.reload();
    }
}