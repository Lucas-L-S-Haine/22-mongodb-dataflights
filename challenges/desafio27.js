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
db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { 
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  },
);
