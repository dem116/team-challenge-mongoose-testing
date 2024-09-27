//archivo para poder cerrar el sevidor despues del test pues daba error "est has detected the following 1 open handle potentially keeping Jest from exiting"
const app = require('./index');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
