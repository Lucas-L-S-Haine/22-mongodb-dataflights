const resumo = db.voos.count({
  $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ],
});
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: resumo,
});
