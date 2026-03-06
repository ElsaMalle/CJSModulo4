console.log("conectados")

class Mascota {
    constructor(nombre, tutor, evolucionMedica = []) {
        this.nombre = nombre;
        this.tutor = tutor;
        this.evolucionMedica = evolucionMedica;
    }
}

class Veterinario {
    constructor(nombreUsuario, contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
        this.pacientes = []; // Arreglo para almacenar las mascotas
    }

    // Método para agregar un paciente usando destructuring
    agregarPaciente = (nuevaMascota) => {
        this.pacientes.push(nuevaMascota);
        console.log(`✅ Mascota "${nuevaMascota.nombre}" registrada con éxito.`);
    };

    consultarRegistros = () => {
        if (this.pacientes.length === 0) {
            return console.log("⚠️ No hay pacientes registrados.");
        }

        console.log(`--- Expedientes de ${this.nombreUsuario} ---`);
        this.pacientes.forEach(({ nombre, tutor, evolucionMedica }, index) => {
            console.log(`${index + 1}. Nombre: ${nombre} | Tutor: ${tutor}`);
            console.log(`   Evolución: ${evolucionMedica.join(", ") || "Sin registros"}`);
        });
    };
}
    

// --- Ejemplo de uso ---

// 1. Instanciar al veterinario
const vetJuan = new Veterinario("DrJuanito", "admin123");

// 2. Crear mascotas
const mascota1 = new Mascota("Firulais", "Carlos", ["Vacuna rabia", "Control peso"]);
const mascota2 = new Mascota("Luna", "Elena");

// 3. Registrar pacientes
vetJuan.agregarPaciente(mascota1);
vetJuan.agregarPaciente(mascota2);

// 4. Consultar la lista
vetJuan.consultarRegistros();
