import Service from "../services/libros.js";

class Controller {
    constructor() {
        this.service = new Service();
    }

    getLibros = async (req, res) => {
        const libros = await this.service.getLibros();
        res.json(libros);
    };

    saveLibro = async (req, res) => {
        const libro = req.body;
        const libroGuardado = await this.service.saveLibro(libro);
        res.json(libroGuardado);
    };

    dltLibro = async (req, res) => {
        try {
        const { codigo } = req.query;
        const libroEliminado = await this.service.dltLibro(codigo);
        res.json(libroEliminado);
        }
        catch (error){
            res.status(404).json({ errorMsg: error.message });
        }
    };

    alquilarLibro = async (req, res) => {
        try {
        const { codigo } = req.query;
        const libro = await this.service.alquilarLibro(codigo);
        res.json(libro);
        }
        catch (error){
            res.status(404).json({ errorMsg: error.message });
        }
    };

    devolverLibro = async (req, res) => {
        try {
        const { codigo } = req.query;
        const libros = await this.service.devolverLibro(codigo);
        res.json(libros);
        }
        catch (error){
            res.status(404).json({ errorMsg: error.message });
        }
    };

    marcarNoApto = async (req, res) => {
        try {
        const { codigo } = req.query;
        const libros = await this.service.marcarNoApto(codigo);
        res.json(libros);
        }
        catch (error){
            res.status(404).json({ errorMsg: error.message });
        }
    };

}

export default Controller;
