import app from "./app";
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Está rodando na porta: ${port}`));
