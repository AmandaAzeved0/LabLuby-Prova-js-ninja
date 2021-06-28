
const fs = require('fs')

module.exports = app => {

    app.get('/gamesTypes', (req, res) => {
        fs.readFile('../backend/src/app/controllers/json/gameTypes.json', 'utf8', function(err, data) {
            if (err) {
                const response = { status: 'falha', resultado: err }
                res.json(response)
            } else {
                const obj = JSON.parse(data)
                const response = {obj }
                res.json(response)
            }
        })
    })

    const betsList = function(){
        const content = fs.readFileSync('../backend/src/app/controllers/json/betsList.json', 'utf8')
        return JSON.parse(content) 
    }

    const updateBetList = function(){

    }

    app.get('/betsList',(req, res) => {
        const content = betsList()
        res.send(content)
    })

    app.post('/betsList', (req, res) => {
        const {type, price, range } = req.body
        const currentBets = betsList()
        currentBets.push({ 
            id: Math.random().toString(32).substr(2,9),
            type, 
            price, 
            range })
        fs.writeFileSync('../backend/src/app/controllers/json/betsList.json', JSON.stringify(currentBets),'utf8')
        res.send(currentBets)
    })

    app.delete('/betsList/:id', (req, res) => {
        const {id} = req.params
        const currentBets = betsList()
        const selectedItem = currentBets.findIndex((item)=>item.id === id)
        currentBets.splice(selectedItem,1)
        fs.writeFileSync('../backend/src/app/controllers/json/betsList.json', JSON.stringify(currentBets),'utf8')
        res.send(currentBets)
        
    })
}