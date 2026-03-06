
/* Mascota: 
    id: UUID
    nombre: string
    apellido: string
    diagnostico: string
    fecha-nacimiento -> string -> Date YYYY-MM-DD
    isAlta: boolean

 */

import { REGEX_NAME } from "../utils/constants.js"
import { Validator } from "../utils/validador.js"


export class Mascota {
    #id
    #nombre
    #diagnostico
    #fechaNacimiento
    #nombredueno
    #apellidodueno
    #nombreVeterinario
    #isAlta = false

    constructor(nombre, nombredueno, apellidodueno, fechaNacimiento, diagnostico,nombreVeterinario) {
        
        this.#id = crypto.randomUUID();
        this.#nombre = Validator.valor(nombre, REGEX_NAME, 'Nombre mascota no valido');
        this.#nombredueno = Validator.valor(nombredueno, REGEX_NAME, 'Nombre dueño no valido');
        this.#apellidodueno = Validator.valor(apellidodueno, REGEX_NAME, 'Apellido dueño no valido');
        this.#fechaNacimiento = fechaNacimiento;
        this.#diagnostico = diagnostico;
        this.#nombreVeterinario = nombreVeterinario || '';
        this.#isAlta = false;
    }
    //getters

    get id() {
        return `${this.#id}`
    }
    get nombre() {
        return this.#nombre
    }
    get nombreDueno() {
        return this.#nombredueno
    }
    get apellidoDueno() {
        return this.#apellidodueno
    }
    get nombreCompletoDueno() {
        return `${this.#nombredueno} ${this.#apellidodueno}`
    }
    get fechaNacimiento() {
        return this.#fechaNacimiento
    }

    get edad() {
        const hoy = new Date()
        const nacimiento = new Date(this.#fechaNacimiento)
        let edad = hoy.getFullYear() - nacimiento.getFullYear()

        const diferenciaMes = hoy.getMonth() - nacimiento.getMonth()
        if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--
        }
        return edad
    }
    get diagnostico() {
        return this.#diagnostico
    }
    get nombreVeterinario() {
        return this.#nombreVeterinario
    }
    get isAlta() {
        return this.#isAlta
    }

    //Setters

    setNombre(newNombre) {
        const nombreValido = Validator.valor(
            newNombre,
            REGEX_NAME,
            "Nombre mascota no valido",
        );
        this.#nombre = nombreValido
    }

    setNombreDueno(newNombreDueno) {
        const nombreValido = Validator.valor(
            newNombreDueno,
            REGEX_NAME,
            "Nombre dueño no valido",
        );
        this.#nombredueno = nombreValido
    }

    setApellidoDueno(newApellido) {
        const apellidoValido = Validator.valor(
            newApellido,
            REGEX_NAME,
            "Apellido dueño no valido",
        );
        this.#apellidodueno = apellidoValido
    }

    setFechaNacimiento(newFechaNacimiento) {
        this.#fechaNacimiento = newFechaNacimiento
    }

    actualizarDiagnostico(nuevoDiagnostico) {
        this.#diagnostico = nuevoDiagnostico
    }
    setNombreVeterinario(nuevoNombre) {
        this.#nombreVeterinario = Validator.valor(nuevoNombre, REGEX_NAME, 'Nombre veterinario no valido')
    }
    setIsAlta() {
        this.#isAlta = !this.#isAlta
    }
}
