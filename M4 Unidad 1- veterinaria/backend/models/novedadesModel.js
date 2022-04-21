var pool = require('./bd');

// listar
async function getNovedades () {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}
// incertar una novedad
async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// eliminar una novedad
async function deleteNovedadesById(id) {
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

// modificar una novedad
// para modificar 1ero traigo una novedad por id
async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try{
        var query ="update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadById, modificarNovedadById }
