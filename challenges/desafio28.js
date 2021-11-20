const latam = "LATAM AIRLINES BRASIL";
const resumo = db.voos.count(
  {
    "empresa.nome": latam,
    natureza: "Doméstica",
  },
);
db.resumoVoos.insertOne(
  {
    empresa: latam,
    totalVoosDomesticos: resumo,
  },
);
db.resumoVoos.findOne(
  { empresa: latam },
  { _id: false, empresa: true, totalVoosDomesticos: true },
);
