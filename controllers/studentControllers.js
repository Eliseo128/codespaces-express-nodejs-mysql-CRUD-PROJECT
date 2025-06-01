//obtener listado de estudiantes
const db = require('../config/db');
const getStudents = async (req, res) => {
    try {
        const data= await db.query('SELECT * FROM students');
        if (data) {
            return res.status(404).send({
                success: false,
                message: 'No se encontraron estudiantes'
            });
        }
            res.status(200).send({
                success: true,
                message: 'Estudiantes obtenidos correctamente',
                data, // data[0] contiene los resultados de la consulta
            });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error al obtener los estudiantes API',
            error
        });
    }
}

module.exports = { getStudents };