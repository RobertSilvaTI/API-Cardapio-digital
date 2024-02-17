import sqlite3 from "sqlite3";

const Sqlite = sqlite3.verbose();

function query(command, params, method = 'all'){
    return new Promise(function(resolve, reject){
        db[method](command, params, function(error, result){
            if (error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    });
}

const db = new Sqlite.Database('banco.db', Sqlite.OPEN_READWRITE, function(err){
    if (err){
        return console.log("Erro ao conectar ao banco: " + err.message);
    }
});

export {db, query};