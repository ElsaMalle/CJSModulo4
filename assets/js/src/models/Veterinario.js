import { REGEX_NAME } from "../utils/constants.js"
import { Validator } from "../utils/validador.js"


export class Veterinario {
    #id
    #usuario
    #password
    #nombre
    #apellido
    #mascotas = []

    constructor(usuario, password, nombre, apellido) {
        this.#id = crypto.randomUUID()
        this.#usuario = usuario || this.#generarUsuario()
        this.#password = '123456789'
        this.#nombre = Validator.valor(nombre, REGEX_NAME, 'campo nombre invalido')
        this.#apellido = Validator.valor(apellido, REGEX_NAME, 'campo apellido invalido')

    }
    #generarUsuario() {
        const inicialNombre = this.#nombre.charAt(0).toLowerCase();
        const Apellido = this.#apellido.toLowerCase();

        return `${inicialNombre}${Apellido}`
    }

    get id() {
        return `${this.#id}`
    }

    get usuario() {
        return `${this.#usuario}`
    }

    get password() {
        return `${this.#password}`
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`
    }

    get nombre() {
        return `${this.#nombre}`
    }

    get apellido() {
        return `${this.#apellido}`
    }

    get mascotas() {
        return [...this.#mascotas]
    }

    // Setter
    setNombre(newNombre) {
        const nombreValido = Validator.valor(newNombre)
        this.#nombre = nombreValido
    }

    setApellido(newApellido) {
        const apellidoValido = Validator.valor(newApellido)
        this.#apellido = apellidoValido
    }

    setPassword(newPassword) {
        this.#password = newPassword
    }

    agregarMascota(nuevamascota) {
        const existemascota = this.#mascotas.some(mascota => mascota.id === nuevamascota.id);
        if (existemascota) {
            throw new Error('La mascota ya esta registrada a este veterinario');
        }
        this.#mascotas.push(nuevamascota);
    }

    buscarMascota(nombre) {
        if (!nombre || nombre.trim() === '') {
            return this.mascotas
        }
        const nombreBuscado = nombre.toLowerCase()
        return this.mascotas.filter(mascota => mascota.nombre.toLowerCase().includes(nombreBuscado))
    }

    cantidadMascotas() {
        return this.mascotas.length
    }

    verificarCredenciales(usuario, password) {
        return this.#usuario === usuario && this.#password === password
    }

    toFullObject() {
        return {
            id: this.#id,
            usuario: this.#usuario,
            password: this.#password,
            nombre: this.#nombre,
            apellido: this.#apellido,
            mascotas: this.mascotas
        }
    }

    getInfo() {
        return {
            id: this.#id,
            usuario: this.#usuario,
            nombre: this.#nombre,
            apellido: this.#apellido,
            nombreCompleto: this.nombreCompleto,
            cantidadMascotas: this.cantidadMascotas()
        }
    }
}
