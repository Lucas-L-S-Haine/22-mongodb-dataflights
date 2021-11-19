const erase = db.voos
  .deleteMany(
    { $and: [
      { litrosCombustivel: { $exists: true } },
      { "empresa.nome": "AZUL" },
      { litrosCombustivel: { $lt: 400 } },
    ] },
  );
erase;
