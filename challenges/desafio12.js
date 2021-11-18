db.voos
  .count({
    $or: [
      { "aeroportoDestino.pais": { $eq: "BRASIL" } },
      { "aeroportoDestino.pais": { $eq: "ARGENTINA" } },
      { "aeroportoDestino.pais": { $eq: "CHILE" } },
    ],
  });
