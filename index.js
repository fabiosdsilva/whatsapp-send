import app from "./app";

app.listen(process.env.PORT, () => console.log(`Está rodando na porta: ${process.env.PORT}`));
