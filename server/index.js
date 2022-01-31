const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const path = require('path');


const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/src/App.js')));


app.get('/api', (req, res) => {
    const tasks = [
        { taskText: 'Work', key: uuid.v4() },
        { taskText: 'Leran', key: uuid.v4() },
        { taskText: 'Have Fun', key: uuid.v4() },
        { taskText: 'Clean', key: uuid.v4() },
        { taskText: 'Rest', key: uuid.v4() }
    ]
    res.send(tasks)
})

app.listen(port, () => console.log(
    `server is up on port ${port}`
))