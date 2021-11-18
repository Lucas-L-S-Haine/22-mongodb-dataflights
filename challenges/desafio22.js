db.voos.findOne(
  {
    $and: [
      { "empresa.nome": { $in: ["AMERICAN AIRLINES", "DELTA AIRLINES"] } },
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
    ],
  },
  {
    _id: false,
    vooId: true, 
  },
);
