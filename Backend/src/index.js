const express = require('express');
const cors = require('cors')
const server = express();
server.use(cors())
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const PORT = 3333; // usar uma porta diferente da porta padrão do MongoDB
server.listen(PORT, () => {
    console.log(`API ONLINE. Escutando na porta ${PORT}`);
});
