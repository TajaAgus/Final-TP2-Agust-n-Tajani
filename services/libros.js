import ModelMem from "../model/DAO/librosMem.js";
import axios from 'axios';

class Service {
    constructor() {
        this.model = new ModelMem();
    }

    saveLibro = async (libro) => {
        libro.estado = "disponible"
        return await this.model.saveLibro(libro);
    };

    dltLibro = async (codigo) => {
        return await this.model.dltLibro(parseInt(codigo));
    };

    getLibros = async () => {
        return {libros: await this.model.getLibros()};
    };

    alquilarLibro = async (codigo) => {
        const libro = await this.model.alquilarLibro(parseInt(codigo));

        const resSorteo = await this.verSorteo()

        if (resSorteo){
            await this.model.dltLibro(parseInt(codigo));
            return {mensaje: "Ganaste el sorteo! Te quedas con el libro!"}

        } else {
            return libro
        }
        
    };

    devolverLibro = async (codigo) => {
        return await this.model.devolverLibro(parseInt(codigo));
    };

    marcarNoApto = async (codigo) => {
        return await this.model.marcarNoApto(parseInt(codigo));
    };

    verSorteo = async () => {
        try {
            const res = await axios.get('https://libros.deno.dev/premios');
            const data = res.data;
            return data.premio
        } catch (error) {
            console.error('Error:', error);
            return false
        }
    }

}

export default Service;
