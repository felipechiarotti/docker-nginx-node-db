const express = require('express')
const app = express()
const port = 3000

const dbHost = 'mysql-desafio'
const dbName = 'desafiodb'

const config = {
    host: dbHost,
    user: 'root',
    password: 'root',
    database: dbName
}

const mysql = require('mysql')
connection = mysql.createConnection(config)


generateInsertQuery = (name) => {
    return `INSERT INTO people(Name) values('${name}')`
}

generateSelectQuery = (tableName) => {
    return `SELECT Name from ${tableName}`
}

function executeQuery(sql, selector){
     
} 

executeDbQuery = (sql, callback) =>{
    console.log(`Executed Query: ${sql}`)
    if(!sql.startsWith("SELECT")){
        connection.query(sql)
        return
    }

    connection.query(sql, (err, rows) => {
        teste = rows.map( (row) => {
            return row.Name
        })
        console.log(teste)
        callback(teste)
    })
    
}



app.get('/:name',  (req, res) => {
    const insertSql = generateInsertQuery(req.params.name)
    executeDbQuery(insertSql)

    const selectSql = generateSelectQuery('people')
    executeDbQuery(selectSql, (results) =>{
        res.write('<h1>Full Cycle Rocks!</h1>')
        results.map((row) => {
            res.write(`<p>${row}</p>`)
        })
    
        res.send()
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

