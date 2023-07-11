//Here I get arrays with all constellations
let North_constellations = [
    {
      id: 1,
      name: "Andromeda",
      description: "Andromeda is a constellation in the northern sky...",
      features: ["Key stars: Alpheratz, Mirach, Almach...", "Notable features: Andromeda contains the Andromeda Galaxy, which is the nearest spiral galaxy to our Milky Way..."],
      image: "",
      isStudied: false
    },
    {
      id: 2,
      name: "Ursa Major",
      description: "Ursa Major is a constellation in the northern sky...",
      features: ["Key stars: Dubhe, Merak, Alkaid...", "Notable features: Ursa Major contains the Big Dipper, which is one of the most recognized asterisms in the night sky..."],
      image: "",
      isStudied: false
    },
    {
      id: 3,
      name: "Auriga",
      description: "Auriga is a constellation in the northern sky...",
      features: ["Key stars: Capella, Menkalinan, Alnath...", "Notable features: Auriga is often depicted as a charioteer or a shepherd..."],
      image: "",
      isStudied: false
    },
    {
      id: 4,
      name: "Bootes",
      description: "Bootes is a constellation in the northern sky...",
      features: ["Key stars: Arcturus, Nekkar, Seginus...", "Notable features: Bootes is often depicted as a herdsman or a plowman..."],
      image: "",
      isStudied: false
    },
    {
      id: 5,
      name: "Coma Berenices",
      description: "Coma Berenices is a small northern constellation...",
      features: ["Key stars: Diadem, Chara, Al Dafirah...", "Notable features: Coma Berenices contains the Coma Cluster (Abell 1656), a large cluster of galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 6,
      name: "Hercules",
      description: "Hercules is a constellation in the northern sky...",
      features: ["Key stars: Rasalgethi, Kornephoros, Zeta Herculis...", "Notable features: Hercules is often depicted as a hero or demigod..."],
      image: "",
      isStudied: false
    },
    {
      id: 7,
      name: "Canes Venatici",
      description: "Canes Venatici is a small northern constellation...",
      features: ["Key stars: Cor Caroli, Chara, La Superba...", "Notable features: Canes Venatici contains the Whirlpool Galaxy (M51) and several other galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 8,
      name: "Virgo",
      description: "Virgo is one of the constellations of the zodiac...",
      features: ["Key stars: Spica, Porrima, Vindemiatrix...", "Notable features: Virgo is often depicted as a maiden or a woman..."],
      image: "",
      isStudied: false
    },
    {
      id: 9,
      name: "Delphinus",
      description: "Delphinus is a small constellation in the northern sky...",
      features: ["Key stars: Rotanev, Sualocin...", "Notable features: Delphinus is often depicted as a dolphin..."],
      image: "",
      isStudied: false
    },
    {
      id: 10,
      name: "Draco",
      description: "Draco is a constellation in the northern sky...",
      features: ["Key stars: Thuban, Edasich, Aldhibah...", "Notable features: Draco is often depicted as a dragon..."],
      image: "",
      isStudied: false
    },
    {
      id: 11,
      name: "Camelopardalis",
      description: "Camelopardalis is a constellation in the northern sky...",
      features: ["Key stars: Beta Camelopardalis, Alpha Camelopardalis...", "Notable features: Camelopardalis is often depicted as a giraffe..."],
      image: "",
      isStudied: false
    },
    {
      id: 12,
      name: "Serpens",
      description: "Serpens is a constellation in the northern hemisphere...",
      features: ["Key stars: Unukalhai, Alya...", "Notable features: Serpens is often depicted as a serpent..."],
      image: "",
      isStudied: false
    },
    {
      id: 13,
      name: "Ophiuchus",
      description: "Ophiuchus is a large constellation located around the celestial equator...",
      features: ["Key stars: Rasalhague, Sabik, Cebalrai...", "Notable features: Ophiuchus is often depicted as a serpent-bearer or a healer..."],
      image: "",
      isStudied: false
    },
    {
      id: 14,
      name: "Zodiac",
      description: "The Zodiac is a belt of the heavens...",
      features: ["Key stars: Aldebaran, Regulus, Antares...", "Notable features: The Zodiac is a ring of constellations that lie along the ecliptic..."],
      image: "",
      isStudied: false
    },
    {
      id: 15,
      name: "Cepheus",
      description: "Cepheus is a constellation in the northern sky...",
      features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
      image: "",
      isStudied: false
    },
    {
      id: 16,
      name: "Lyra",
      description: "Lyra is a small constellation in the northern sky...",
      features: ["Key stars: Vega, Sulafat, Sheliak...", "Notable features: Lyra is often depicted as a lyre or a harp..."],
      image: "",
      isStudied: false
    },
    {
        id: 17,
        name: "Vulpecula",
        description: "Vulpecula is a faint constellation in the northern sky...",
        features: ["Key stars: Anser, Deneb Algedi...", "Notable features: Vulpecula is often depicted as a fox..."],
        image: "",
        isStudied: false
      },
      {
        id: 18,
        name: "Ursa Minor",
        description: "Ursa Minor is a constellation in the northern sky...",
        features: ["Key stars: Polaris, Kochab, Pherkad...", "Notable features: Ursa Minor contains the Little Dipper, which includes Polaris, the North Star..."],
        image: "",
        isStudied: false
      },
      {
        id: 19,
        name: "Equuleus",
        description: "Equuleus is a constellation in the northern sky...",
        features: ["Key stars: Kitalpha, Beidalgeuse...", "Notable features: Equuleus is often depicted as a little horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 20,
        name: "Leo Minor",
        description: "Leo Minor is a small constellation in the northern sky...",
        features: ["Key stars: Praecipua, Zosma...", "Notable features: Leo Minor is often depicted as a little lion..."],
        image: "",
        isStudied: false
      },
      {
        id: 21,
        name: "Aries",
        description: "Aries is a constellation in the northern sky...",
        features: ["Key stars: Hamal, Sheratan, Mesarthim...", "Notable features: Aries is often depicted as a ram or a sheep..."],
        image: "",
        isStudied: false
      },
      {
        id: 22,
        name: "Aquila",
        description: "Aquila is a constellation in the northern sky...",
        features: ["Key stars: Altair, Tarazed, Alshain...", "Notable features: Aquila is often depicted as an eagle..."],
        image: "",
        isStudied: false
      },
      {
        id: 23,
        name: "Pegasus",
        description: "Pegasus is a constellation in the northern sky...",
        features: ["Key stars: Markab, Scheat, Algenib...", "Notable features: Pegasus is often depicted as a winged horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 24,
        name: "Pisces",
        description: "Pisces is a constellation in the northern sky...",
        features: ["Key stars: Alrescha, Fum al Samakah...", "Notable features: Pisces is often depicted as two fish tied together with a cord..."],
        image: "",
        isStudied: false
      },
      {
        id: 25,
        name: "Lynx",
        description: "Lynx is a constellation in the northern sky...",
        features: ["Key stars: Alpha Lyncis, U Lyncis...", "Notable features: Lynx is often depicted as a lynx or a wildcat..."],
        image: "",
        isStudied: false
      },
      {
        id: 26,
        name: "Corona Borealis",
        description: "Corona Borealis is a small constellation in the northern sky...",
        features: ["Key stars: Alphecca, Nusakan...", "Notable features: Corona Borealis is often depicted as a crown..."],
        image: "",
        isStudied: false
      },
      {
        id: 27,
        name: "Sagitta",
        description: "Sagitta is a small constellation in the northern sky...",
        features: ["Key stars: Gamma Sagittae, Delta Sagittae...", "Notable features: Sagitta is often depicted as an arrow..."],
        image: "",
        isStudied: false
      },
      {
        id: 28,
        name: "Triangulum",
        description: "Triangulum is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Trianguli, Beta Trianguli...", "Notable features: Triangulum is often depicted as a triangle..."],
        image: "",
        isStudied: false
      },
      {
        id: 29,
        name: "Cepheus",
        description: "Cepheus is a constellation in the northern sky...",
        features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
        image: "",
        isStudied: false
      },
      {
        id: 30,
        name: "Scutum",
        description: "Scutum is a small constellation in the southern sky...",
        features: ["Key stars: Alpha Scuti, Beta Scuti...", "Notable features: Scutum is often depicted as a shield..."],
        image: "",
        isStudied: false
      },
      {
        id: 31,
        name: "Lacerta",
        description: "Lacerta is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Lacertae, Beta Lacertae...", "Notable features: Lacerta is often depicted as a lizard..."],
        image: "",
        isStudied: false
      },
      {
        id: 32,
        name: "Perseus",
        description: "Perseus is a constellation in the northern sky...",
        features: ["Key stars: Mirfak, Algol, Gorgonea Tertia...", "Notable features: Perseus is often depicted as a hero holding the head of Medusa..."],
        image: "",
        isStudied: false
      },
      {
        id: 33,
        name: "Cassiopeia",
        description: "Cassiopeia is a constellation in the northern sky...",
        features: [
          "Key stars: Schedar, Caph, Gamma Cassiopeiae...",
          "Notable features: Cassiopeia is known for its distinctive 'W' or 'M' shape, depending on the position in the sky...",
          "Mythology: In Greek mythology, Cassiopeia was the queen of Ethiopia and the mother of Andromeda..."
        ],
        image: "",
        isStudied: false
      }
    ]
let South_constellations = [
    {
      id: 1,
      name: "South",
      description: "Andromeda is a constellation in the northern sky...",
      features: ["Key stars: Alpheratz, Mirach, Almach...", "Notable features: Andromeda contains the Andromeda Galaxy, which is the nearest spiral galaxy to our Milky Way..."],
      image: "",
      isStudied: false
    },
    {
      id: 2,
      name: "Ursa Major",
      description: "Ursa Major is a constellation in the northern sky...",
      features: ["Key stars: Dubhe, Merak, Alkaid...", "Notable features: Ursa Major contains the Big Dipper, which is one of the most recognized asterisms in the night sky..."],
      image: "",
      isStudied: false
    },
    {
      id: 3,
      name: "Auriga",
      description: "Auriga is a constellation in the northern sky...",
      features: ["Key stars: Capella, Menkalinan, Alnath...", "Notable features: Auriga is often depicted as a charioteer or a shepherd..."],
      image: "",
      isStudied: false
    },
    {
      id: 4,
      name: "Bootes",
      description: "Bootes is a constellation in the northern sky...",
      features: ["Key stars: Arcturus, Nekkar, Seginus...", "Notable features: Bootes is often depicted as a herdsman or a plowman..."],
      image: "",
      isStudied: false
    },
    {
      id: 5,
      name: "Coma Berenices",
      description: "Coma Berenices is a small northern constellation...",
      features: ["Key stars: Diadem, Chara, Al Dafirah...", "Notable features: Coma Berenices contains the Coma Cluster (Abell 1656), a large cluster of galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 6,
      name: "Hercules",
      description: "Hercules is a constellation in the northern sky...",
      features: ["Key stars: Rasalgethi, Kornephoros, Zeta Herculis...", "Notable features: Hercules is often depicted as a hero or demigod..."],
      image: "",
      isStudied: false
    },
    {
      id: 7,
      name: "Canes Venatici",
      description: "Canes Venatici is a small northern constellation...",
      features: ["Key stars: Cor Caroli, Chara, La Superba...", "Notable features: Canes Venatici contains the Whirlpool Galaxy (M51) and several other galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 8,
      name: "Virgo",
      description: "Virgo is one of the constellations of the zodiac...",
      features: ["Key stars: Spica, Porrima, Vindemiatrix...", "Notable features: Virgo is often depicted as a maiden or a woman..."],
      image: "",
      isStudied: false
    },
    {
      id: 9,
      name: "Delphinus",
      description: "Delphinus is a small constellation in the northern sky...",
      features: ["Key stars: Rotanev, Sualocin...", "Notable features: Delphinus is often depicted as a dolphin..."],
      image: "",
      isStudied: false
    },
    {
      id: 10,
      name: "Draco",
      description: "Draco is a constellation in the northern sky...",
      features: ["Key stars: Thuban, Edasich, Aldhibah...", "Notable features: Draco is often depicted as a dragon..."],
      image: "",
      isStudied: false
    },
    {
      id: 11,
      name: "Camelopardalis",
      description: "Camelopardalis is a constellation in the northern sky...",
      features: ["Key stars: Beta Camelopardalis, Alpha Camelopardalis...", "Notable features: Camelopardalis is often depicted as a giraffe..."],
      image: "",
      isStudied: false
    },
    {
      id: 12,
      name: "Serpens",
      description: "Serpens is a constellation in the northern hemisphere...",
      features: ["Key stars: Unukalhai, Alya...", "Notable features: Serpens is often depicted as a serpent..."],
      image: "",
      isStudied: false
    },
    {
      id: 13,
      name: "Ophiuchus",
      description: "Ophiuchus is a large constellation located around the celestial equator...",
      features: ["Key stars: Rasalhague, Sabik, Cebalrai...", "Notable features: Ophiuchus is often depicted as a serpent-bearer or a healer..."],
      image: "",
      isStudied: false
    },
    {
      id: 14,
      name: "Zodiac",
      description: "The Zodiac is a belt of the heavens...",
      features: ["Key stars: Aldebaran, Regulus, Antares...", "Notable features: The Zodiac is a ring of constellations that lie along the ecliptic..."],
      image: "",
      isStudied: false
    },
    {
      id: 15,
      name: "Cepheus",
      description: "Cepheus is a constellation in the northern sky...",
      features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
      image: "",
      isStudied: false
    },
    {
      id: 16,
      name: "Lyra",
      description: "Lyra is a small constellation in the northern sky...",
      features: ["Key stars: Vega, Sulafat, Sheliak...", "Notable features: Lyra is often depicted as a lyre or a harp..."],
      image: "",
      isStudied: false
    },
    {
        id: 17,
        name: "Vulpecula",
        description: "Vulpecula is a faint constellation in the northern sky...",
        features: ["Key stars: Anser, Deneb Algedi...", "Notable features: Vulpecula is often depicted as a fox..."],
        image: "",
        isStudied: false
      },
      {
        id: 18,
        name: "Ursa Minor",
        description: "Ursa Minor is a constellation in the northern sky...",
        features: ["Key stars: Polaris, Kochab, Pherkad...", "Notable features: Ursa Minor contains the Little Dipper, which includes Polaris, the North Star..."],
        image: "",
        isStudied: false
      },
      {
        id: 19,
        name: "Equuleus",
        description: "Equuleus is a constellation in the northern sky...",
        features: ["Key stars: Kitalpha, Beidalgeuse...", "Notable features: Equuleus is often depicted as a little horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 20,
        name: "Leo Minor",
        description: "Leo Minor is a small constellation in the northern sky...",
        features: ["Key stars: Praecipua, Zosma...", "Notable features: Leo Minor is often depicted as a little lion..."],
        image: "",
        isStudied: false
      },
      {
        id: 21,
        name: "Aries",
        description: "Aries is a constellation in the northern sky...",
        features: ["Key stars: Hamal, Sheratan, Mesarthim...", "Notable features: Aries is often depicted as a ram or a sheep..."],
        image: "",
        isStudied: false
      },
      {
        id: 22,
        name: "Aquila",
        description: "Aquila is a constellation in the northern sky...",
        features: ["Key stars: Altair, Tarazed, Alshain...", "Notable features: Aquila is often depicted as an eagle..."],
        image: "",
        isStudied: false
      },
      {
        id: 23,
        name: "Pegasus",
        description: "Pegasus is a constellation in the northern sky...",
        features: ["Key stars: Markab, Scheat, Algenib...", "Notable features: Pegasus is often depicted as a winged horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 24,
        name: "Pisces",
        description: "Pisces is a constellation in the northern sky...",
        features: ["Key stars: Alrescha, Fum al Samakah...", "Notable features: Pisces is often depicted as two fish tied together with a cord..."],
        image: "",
        isStudied: false
      },
      {
        id: 25,
        name: "Lynx",
        description: "Lynx is a constellation in the northern sky...",
        features: ["Key stars: Alpha Lyncis, U Lyncis...", "Notable features: Lynx is often depicted as a lynx or a wildcat..."],
        image: "",
        isStudied: false
      },
      {
        id: 26,
        name: "Corona Borealis",
        description: "Corona Borealis is a small constellation in the northern sky...",
        features: ["Key stars: Alphecca, Nusakan...", "Notable features: Corona Borealis is often depicted as a crown..."],
        image: "",
        isStudied: false
      },
      {
        id: 27,
        name: "Sagitta",
        description: "Sagitta is a small constellation in the northern sky...",
        features: ["Key stars: Gamma Sagittae, Delta Sagittae...", "Notable features: Sagitta is often depicted as an arrow..."],
        image: "",
        isStudied: false
      },
      {
        id: 28,
        name: "Triangulum",
        description: "Triangulum is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Trianguli, Beta Trianguli...", "Notable features: Triangulum is often depicted as a triangle..."],
        image: "",
        isStudied: false
      },
      {
        id: 29,
        name: "Cepheus",
        description: "Cepheus is a constellation in the northern sky...",
        features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
        image: "",
        isStudied: false
      },
      {
        id: 30,
        name: "Scutum",
        description: "Scutum is a small constellation in the southern sky...",
        features: ["Key stars: Alpha Scuti, Beta Scuti...", "Notable features: Scutum is often depicted as a shield..."],
        image: "",
        isStudied: false
      },
      {
        id: 31,
        name: "Lacerta",
        description: "Lacerta is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Lacertae, Beta Lacertae...", "Notable features: Lacerta is often depicted as a lizard..."],
        image: "",
        isStudied: false
      },
      {
        id: 32,
        name: "Perseus",
        description: "Perseus is a constellation in the northern sky...",
        features: ["Key stars: Mirfak, Algol, Gorgonea Tertia...", "Notable features: Perseus is often depicted as a hero holding the head of Medusa..."],
        image: "",
        isStudied: false
      },
      {
        id: 33,
        name: "Cassiopeia",
        description: "Cassiopeia is a constellation in the northern sky...",
        features: [
          "Key stars: Schedar, Caph, Gamma Cassiopeiae...",
          "Notable features: Cassiopeia is known for its distinctive 'W' or 'M' shape, depending on the position in the sky...",
          "Mythology: In Greek mythology, Cassiopeia was the queen of Ethiopia and the mother of Andromeda..."
        ],
        image: "",
        isStudied: false
      }
    ]
let Zodiac_constellations = [
    {
      id: 1,
      name: "Zodiac",
      description: "Andromeda is a constellation in the northern sky...",
      features: ["Key stars: Alpheratz, Mirach, Almach...", "Notable features: Andromeda contains the Andromeda Galaxy, which is the nearest spiral galaxy to our Milky Way..."],
      image: "",
      isStudied: false
    },
    {
      id: 2,
      name: "Ursa Major",
      description: "Ursa Major is a constellation in the northern sky...",
      features: ["Key stars: Dubhe, Merak, Alkaid...", "Notable features: Ursa Major contains the Big Dipper, which is one of the most recognized asterisms in the night sky..."],
      image: "",
      isStudied: false
    },
    {
      id: 3,
      name: "Auriga",
      description: "Auriga is a constellation in the northern sky...",
      features: ["Key stars: Capella, Menkalinan, Alnath...", "Notable features: Auriga is often depicted as a charioteer or a shepherd..."],
      image: "",
      isStudied: false
    },
    {
      id: 4,
      name: "Bootes",
      description: "Bootes is a constellation in the northern sky...",
      features: ["Key stars: Arcturus, Nekkar, Seginus...", "Notable features: Bootes is often depicted as a herdsman or a plowman..."],
      image: "",
      isStudied: false
    },
    {
      id: 5,
      name: "Coma Berenices",
      description: "Coma Berenices is a small northern constellation...",
      features: ["Key stars: Diadem, Chara, Al Dafirah...", "Notable features: Coma Berenices contains the Coma Cluster (Abell 1656), a large cluster of galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 6,
      name: "Hercules",
      description: "Hercules is a constellation in the northern sky...",
      features: ["Key stars: Rasalgethi, Kornephoros, Zeta Herculis...", "Notable features: Hercules is often depicted as a hero or demigod..."],
      image: "",
      isStudied: false
    },
    {
      id: 7,
      name: "Canes Venatici",
      description: "Canes Venatici is a small northern constellation...",
      features: ["Key stars: Cor Caroli, Chara, La Superba...", "Notable features: Canes Venatici contains the Whirlpool Galaxy (M51) and several other galaxies..."],
      image: "",
      isStudied: false
    },
    {
      id: 8,
      name: "Virgo",
      description: "Virgo is one of the constellations of the zodiac...",
      features: ["Key stars: Spica, Porrima, Vindemiatrix...", "Notable features: Virgo is often depicted as a maiden or a woman..."],
      image: "",
      isStudied: false
    },
    {
      id: 9,
      name: "Delphinus",
      description: "Delphinus is a small constellation in the northern sky...",
      features: ["Key stars: Rotanev, Sualocin...", "Notable features: Delphinus is often depicted as a dolphin..."],
      image: "",
      isStudied: false
    },
    {
      id: 10,
      name: "Draco",
      description: "Draco is a constellation in the northern sky...",
      features: ["Key stars: Thuban, Edasich, Aldhibah...", "Notable features: Draco is often depicted as a dragon..."],
      image: "",
      isStudied: false
    },
    {
      id: 11,
      name: "Camelopardalis",
      description: "Camelopardalis is a constellation in the northern sky...",
      features: ["Key stars: Beta Camelopardalis, Alpha Camelopardalis...", "Notable features: Camelopardalis is often depicted as a giraffe..."],
      image: "",
      isStudied: false
    },
    {
      id: 12,
      name: "Serpens",
      description: "Serpens is a constellation in the northern hemisphere...",
      features: ["Key stars: Unukalhai, Alya...", "Notable features: Serpens is often depicted as a serpent..."],
      image: "",
      isStudied: false
    },
    {
      id: 13,
      name: "Ophiuchus",
      description: "Ophiuchus is a large constellation located around the celestial equator...",
      features: ["Key stars: Rasalhague, Sabik, Cebalrai...", "Notable features: Ophiuchus is often depicted as a serpent-bearer or a healer..."],
      image: "",
      isStudied: false
    },
    {
      id: 14,
      name: "Zodiac",
      description: "The Zodiac is a belt of the heavens...",
      features: ["Key stars: Aldebaran, Regulus, Antares...", "Notable features: The Zodiac is a ring of constellations that lie along the ecliptic..."],
      image: "",
      isStudied: false
    },
    {
      id: 15,
      name: "Cepheus",
      description: "Cepheus is a constellation in the northern sky...",
      features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
      image: "",
      isStudied: false
    },
    {
      id: 16,
      name: "Lyra",
      description: "Lyra is a small constellation in the northern sky...",
      features: ["Key stars: Vega, Sulafat, Sheliak...", "Notable features: Lyra is often depicted as a lyre or a harp..."],
      image: "",
      isStudied: false
    },
    {
        id: 17,
        name: "Vulpecula",
        description: "Vulpecula is a faint constellation in the northern sky...",
        features: ["Key stars: Anser, Deneb Algedi...", "Notable features: Vulpecula is often depicted as a fox..."],
        image: "",
        isStudied: false
      },
      {
        id: 18,
        name: "Ursa Minor",
        description: "Ursa Minor is a constellation in the northern sky...",
        features: ["Key stars: Polaris, Kochab, Pherkad...", "Notable features: Ursa Minor contains the Little Dipper, which includes Polaris, the North Star..."],
        image: "",
        isStudied: false
      },
      {
        id: 19,
        name: "Equuleus",
        description: "Equuleus is a constellation in the northern sky...",
        features: ["Key stars: Kitalpha, Beidalgeuse...", "Notable features: Equuleus is often depicted as a little horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 20,
        name: "Leo Minor",
        description: "Leo Minor is a small constellation in the northern sky...",
        features: ["Key stars: Praecipua, Zosma...", "Notable features: Leo Minor is often depicted as a little lion..."],
        image: "",
        isStudied: false
      },
      {
        id: 21,
        name: "Aries",
        description: "Aries is a constellation in the northern sky...",
        features: ["Key stars: Hamal, Sheratan, Mesarthim...", "Notable features: Aries is often depicted as a ram or a sheep..."],
        image: "",
        isStudied: false
      },
      {
        id: 22,
        name: "Aquila",
        description: "Aquila is a constellation in the northern sky...",
        features: ["Key stars: Altair, Tarazed, Alshain...", "Notable features: Aquila is often depicted as an eagle..."],
        image: "",
        isStudied: false
      },
      {
        id: 23,
        name: "Pegasus",
        description: "Pegasus is a constellation in the northern sky...",
        features: ["Key stars: Markab, Scheat, Algenib...", "Notable features: Pegasus is often depicted as a winged horse..."],
        image: "",
        isStudied: false
      },
      {
        id: 24,
        name: "Pisces",
        description: "Pisces is a constellation in the northern sky...",
        features: ["Key stars: Alrescha, Fum al Samakah...", "Notable features: Pisces is often depicted as two fish tied together with a cord..."],
        image: "",
        isStudied: false
      },
      {
        id: 25,
        name: "Lynx",
        description: "Lynx is a constellation in the northern sky...",
        features: ["Key stars: Alpha Lyncis, U Lyncis...", "Notable features: Lynx is often depicted as a lynx or a wildcat..."],
        image: "",
        isStudied: false
      },
      {
        id: 26,
        name: "Corona Borealis",
        description: "Corona Borealis is a small constellation in the northern sky...",
        features: ["Key stars: Alphecca, Nusakan...", "Notable features: Corona Borealis is often depicted as a crown..."],
        image: "",
        isStudied: false
      },
      {
        id: 27,
        name: "Sagitta",
        description: "Sagitta is a small constellation in the northern sky...",
        features: ["Key stars: Gamma Sagittae, Delta Sagittae...", "Notable features: Sagitta is often depicted as an arrow..."],
        image: "",
        isStudied: false
      },
      {
        id: 28,
        name: "Triangulum",
        description: "Triangulum is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Trianguli, Beta Trianguli...", "Notable features: Triangulum is often depicted as a triangle..."],
        image: "",
        isStudied: false
      },
      {
        id: 29,
        name: "Cepheus",
        description: "Cepheus is a constellation in the northern sky...",
        features: ["Key stars: Alderamin, Alrai, Al Kidr...", "Notable features: Cepheus is often depicted as a king..."],
        image: "",
        isStudied: false
      },
      {
        id: 30,
        name: "Scutum",
        description: "Scutum is a small constellation in the southern sky...",
        features: ["Key stars: Alpha Scuti, Beta Scuti...", "Notable features: Scutum is often depicted as a shield..."],
        image: "",
        isStudied: false
      },
      {
        id: 31,
        name: "Lacerta",
        description: "Lacerta is a small constellation in the northern sky...",
        features: ["Key stars: Alpha Lacertae, Beta Lacertae...", "Notable features: Lacerta is often depicted as a lizard..."],
        image: "",
        isStudied: false
      },
      {
        id: 32,
        name: "Perseus",
        description: "Perseus is a constellation in the northern sky...",
        features: ["Key stars: Mirfak, Algol, Gorgonea Tertia...", "Notable features: Perseus is often depicted as a hero holding the head of Medusa..."],
        image: "",
        isStudied: false
      },
      {
        id: 33,
        name: "Cassiopeia",
        description: "Cassiopeia is a constellation in the northern sky...",
        features: [
          "Key stars: Schedar, Caph, Gamma Cassiopeiae...",
          "Notable features: Cassiopeia is known for its distinctive 'W' or 'M' shape, depending on the position in the sky...",
          "Mythology: In Greek mythology, Cassiopeia was the queen of Ethiopia and the mother of Andromeda..."
        ],
        image: "",
        isStudied: false
      }
    ]
const QuizBlock = document.querySelector('.quiz-block')
const Left = document.querySelector('.quiz-container__left')
const Center = document.querySelector('.quiz-container__center')
const Top = document.querySelector('.quiz-container__right')
const Bottom = document.querySelector('.quiz-container__bottom')
let currentPositionQuiz = 0
let currentBlockQuiz = null



//Here I create a function which take an array and fill the exercise-block
const Quiz =  (constellations) =>{
    Left.style.animation = 'MainBGReverse 1s linear forwards'
    Center.style.animation = 'MainBGReverse 1s linear forwards'
    Top.style.animation = 'MainBGReverse 1s linear forwards'
    Bottom.style.animation = 'MainBGReverse 1s linear forwards'
  setTimeout(()=>{
    
    Left.style.display = 'none'
    Center.style.display = 'none'
    Top.style.display = 'none'
    Bottom.style.display = 'none'
    QuizBlock.innerHTML = ''
    QuizBlock.style.display  = 'flex'
    QuizBlock.style.animation = 'MainBG 1s linear forwards'
  
  constellations.forEach((element,index) => {
    const newBlock = document.createElement('div')
    newBlock.classList.add('quiz-block__block')
    index == 0 ? newBlock.classList.add('first'): null
    index == 0 ? newBlock.classList.add('current'): null
   
    newBlock.innerHTML = `
    <div class="cover"></div>
  
                      <div class="quiz-block__image">
                          <img src="./source/1619734157_1-phonoteka_org-p-sozvezdiya-bez-fona-1.png" alt="">
                      </div>
                      <div class="quiz-block__question">
                        <ul>
                            <li>${constellations[Math.floor(Math.random() * constellations.length)].name}</li>
                            <li>${constellations[Math.floor(Math.random() * constellations.length)].name}</li>
                            <li>${constellations[Math.floor(Math.random() * constellations.length)].name}</li>
                            <li>${constellations[Math.floor(Math.random() * constellations.length)].name}</li>
                        </ul>
                    </div>
                   
                      <div class="quiz-block__buttons">
                          <button class="quiz-block__previous">previous</button>
                          <button class="quiz-block__next">next</button>
                      </div>
                      </div>
                      `

  
                      QuizBlock.appendChild(newBlock)
  
  });
  currentBlockQuiz = document.querySelector('.current')
  const previous = document.querySelectorAll('.quiz-block__previous')
  const next = document.querySelectorAll('.quiz-block__next')
  MovingQuiz(next,'next')
  MovingQuiz(previous,'previous')
  
  const allIsStudied = document.querySelectorAll('.quiz-block__studied')
  allIsStudied.forEach((element,index) => {
    element.addEventListener('click', ()=>{
      if(constellations[index].isStudied == false){
        constellations[index].isStudied = true
        element.innerHTML = 'Studied'
      }
    })
  });
  },1000)
  
  }
  
  //Here I start work with buttons and get all buttons for each object
  
  //I fix current position and also fix current block and get back the list of all blocks
  
  //Here I create a function which get an array with one button type and direction
  const MovingQuiz = (array,direction) =>{
  
    const all_blocks = document.querySelectorAll('.quiz-block__block')
  
    array.forEach((element,index) => {
      element.addEventListener('click', ()=>{
          if(direction == 'next' && array.length != index + 1){
            currentPositionQuiz += -440
            QuizBlock.style.left = `${currentPositionQuiz}px`
            currentBlockQuiz.classList.remove('current')
            currentBlockQuiz = all_blocks[index+1]
            currentBlockQuiz.classList.add('current')
  
  
          }else if(direction == 'previous' && currentPositionQuiz != 0){
            currentPositionQuiz += 440
            QuizBlock.style.left = `${currentPositionQuiz}px`
            currentBlockQuiz.classList.remove('current')
            currentBlockQuiz = all_blocks[index-1]
            currentBlockQuiz.classList.add('current')
  
          }    
        
      })
    });
  }
  