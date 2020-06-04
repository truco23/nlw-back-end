import express from 'express';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.get('/', (req, res) => {
    res.json({ success: 'Bem-vindo a NWL' })
})

app.listen(8080, () => {
    console.log('Bem-vindo a NLW :)');
})