dataSetVersion = "2024-08-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Games",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Hurricane of the Ancient One", tooltip: "1 - HoAO", key: "HoAO" },
      { name: "Rush for the Shadow Egg", tooltip: "1.5 - RftSE", key: "RftSE" },
      { name: "Cycle of Hakurama", tooltip: "2 - CoH", key: "CoH" },
      { name: "Violet Blooming Sky", tooltip: "2.5 - VBS", key: "VBS" },
    ]
  },
  {
    name: "Filter by JDRs",
    key: "jdrs",
    tooltip: "Check this to restrict to certain JDRs.",
    checked: false,
    sub: [
      { name: "Vérifications d'Usage", tooltip: "One-shot", key: "VU" },
      { name: "La Dernière Epoque", tooltip: "Campagne", key: "DE" },
      { name: "L'Âge des Méditatifs", tooltip: "Campagne", key: "AM" },
      { name: "Remembrances", tooltip: "Campagne", key: "Rem"}
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "Stage 1", key: "st1" },
      { name: "Stage 2", key: "st2" },
      { name: "Stage 3", key: "st3" },
      { name: "Stage 4", key: "st4" },
      { name: "Stage 5", key: "st5" },
      { name: "Stage 6", key: "st6" },
      { name: "Stage EX", key: "ex" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Hanase Koma",
    img: "haI8BXJ.png",
    opts: {
      series: [ "HoAO", "RftSE", "CoH" ],
      jdrs: [ "DE", "AM" ],
      stage: [ "st2" ]
    }
  },
  {
    name: "Miko Shiko",
    img: "fnmoh8t.png",
    opts: {
      series: [ "HoAO", "RftSE", "CoH" ],
      jdrs: [ "DE", "AM" ],
      stage: [ "st2" ]
    }
  },
  {
    name: "Yuudoku Kimoe",
    img: "zGry0Ge.png",
    opts: {
      series: [ "HoAO" ],
      stage: [ "st1" ]
    }
  },
  {
    name: "Yuǎnshí Aeralis Yaoqi Zhen",
    img: "XQI7Gbd.png",
    opts: {
      series: [ "HoAO", "RftSE", "CoH" ],
      jdrs: [ "DE" ],
      stage: [ "st2", "st5" ]
    }
  },
  {
    name: "Nijuusei Yingshi",
    img: "aO4mnkQ.png",
    opts: {
      series: [ "HoAO", "RftSE" ],
      jdrs: [ "VU" ],
      stage: [ "st3", "st5" ]
    }
  },
  {
    name: "Hakamori no Yuki",
    img: "En80RZ3.png",
    opts: {
      series: [ "HoAO" ],
      stage: [ "st4" ]
    }
  },
  {
    name: "Fuma Kaorushi",
    img: "KRpimuP.png",
    opts: {
      series: [ "HoAO" ],
      jdrs: [ "AM" ],
      stage: [ "st5" ]
    }
  },
  {
    name: "Fukane no Hasayoshi",
    img: "o1lv2d4.png",
    opts: {
      series: [ "HoAO", "CoH" ],
      jdrs: [ "DE" ],
      stage: [ "st6" ]
    }
  },
  {
    name: "Helena Nyarla no Akasha",
    img: "dd859db.png",
    opts: {
      series: [ "HoAO", "CoH" ],
      jdrs: [ "DE", "AM" ],
      stage: [ "ex" ]
    }
  },
  {
    name: "Suigou Koma",
    img: "WKajq8A.png",
    opts: {
      series: [ "RftSE" ],
      stage: [ "st1" ]
    }
  },
  {
    name: "Muka Pholéone",
    img: "Wo6N0bU.png",
    opts: {
      series: [ "RftSE", "CoH" ],
      jdrs: [ "DE" ],
      stage: [ "st3" ]
    }
  },
  {
    name: "Ania Bisea",
    img: "Bq4yJrf.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "AM" ],
      stage: [ "st4" ]
    }
  },
  {
    name: "Hayla Kezeya",
    img: "0hqNp9X.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "AM" ],
      stage: [ "st3" ]
    }
  },
  {
    name: "Yoshima Karakasa",
    img: "sOwSd74.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "DE" ],
      stage: [ "st4" ]
    }
  },
  {
    name: "Mazeru Hitogara \"Kunaya\" Fang",
    img: "WXD7KkD.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "AM" ],
      stage: [ "st5" ]
    }
  },
  {
    name: "Arcabal Kusanali",
    img: "ONdnJfE.png",
    opts: {
      series: [ "RftSE", "CoH" ],
      jdrs: [ "DE", "AM" ],
      stage: [ "st2" ]
    }
  },
  {
    name: "Juu Makka",
    img: "LDwiwuj.png",
    opts: {
      series: [  "RftSE" ],
      jdrs: [ "AM" ],
      stage: [ "st3" ]
    }
  },
  {
    name: "Adrienne",
    img: "Ofpdxo9.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "DE", "AM" ],
      stage: [ "st4" ]
    }
  },
  {
    name: "Hyakusei Furusato",
    img: "BC622H1.png",
    opts: {
      series: [ "RftSE" ],
      jdrs: [ "AM" ],
      stage: [ "st5" ]
    }
  },
  {
    name: "Amerie Fushikaze",
    img: "hVJChZc.png",
    opts: {
      jdrs: [ "DE", "AM" ],
    }
  },
  {
    name: "Dowa Mugenteki",
    img: "brfiYE3.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Fubaku Akuryomu",
    img: "HYbXYNI.png",
    opts: {
      jdrs: [ "DE", "AM" ],
    }
  },
  {
    name: "Herzia",
    img: "6O90S6B.png",
    opts: {
      series: [ "CoH" ],
      jdrs: [ "DE", ],
    }
  },
  {
    name: "Hoshi Senshuu",
    img: "mcNEMEY.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Hunashi / Arashi",
    img: "MMQd13q.png",
    opts: {
      series: [ "CoH" ],
      jdrs: [ "DE" ],
    }
  },
  {
    name: "Huqin Èr-shí-yī Shĭ tŏngyī",
    img: "10dXj6G.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Jakkou Tori",
    img: "4DDJRgu.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Karakuri Shiki",
    img: "OcmWPti.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Kasa Shizen",
    img: "OLbY2d4.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Manako Zuisho",
    img: "tBWCX0d.png",
    opts: {
      series: [ "VBS" ],
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Mayu Hoshizora",
    img: "FS01Ey8.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Medjed Faré",
    img: "ZSKXyNL.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Myouri Tenun",
    img: "CZ5oNkI.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Pavonia Nide",
    img: "TS0Nv5T.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Utatori",
    img: "uY9Xepq.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Ageya \"Qixing\" Aeralis",
    img: "GcIoTbr.png",
    opts: {
      jdrs: [ "DE", "AM" ],
    }
  },
  {
    name: "Shuukaku Minori",
    img: "1XZHrDd.png",
    opts: {
      jdrs: [ "AM" ],
    }
  },
  {
    name: "Wataru Kimaru",
    img: "kaXp1yK.png",
    opts: {
      jdrs: [ "DE", "AM" ],
    }
  },
  {
    name: "Yoriko Mori",
    img: "dzrhurc.png",
    opts: {
      jdrs: [ "VU", "DE", "AM" ]
    }
  },
  {
    name: "Agalpa Nive",
    img: "3ka86Ea.png",
    opts: {
      jdrs: [ "VU", "DE", "AM" ]
    }
  },
  {
    name: "Créo",
    img: "2Psficd.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Klara",
    img: "024Cbge.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Kresse",
    img: "jAR81y7.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Koizumi Satoshi",
    img: "Okx942o.png",
    opts: {
      jdrs: [ "DE", "AM" ]
    }
  },
  {
    name: "Xemi",
    img: "EZtcDcN.png",
    opts: {
      jdrs: [ "VU" ]
    }
  },
  {
    name: "Saraku Koromiyo",
    img: "3zAlG75.png",
    opts: {
      jdrs: [ "VU", "DE" ]
    }
  },
  {
    name: "Senshi Koromiyo",
    img: "7tpvjH2.png",
    opts: {
      jdrs: [ "Rem" ]
    }
  },
  {
    name: "Xian Hue",
    img: "xkDPOx0.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Shé Zhǔrén (Hayaka 1930->12)",
    img: "Ey5jTul.png",
    opts: {
      jdrs: [ "DE" ]
    }
  },
  {
    name: "Béatrice Fillidrin",
    img: "yPSnA1J.png",
    opts: {
      jdrs: [ "DE" ]
    }
  },
  {
    name: "Jari Koskinen",
    img: "R9VHcyj.png",
    opts: {
      jdrs: [ "DE" ]
    }
  },
  {
    name: "Mircea Vilesang",
    img: "B6W8RDd.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Mylonith",
    img: "Uy4h0XQ.png",
    opts: {
      jdrs: [ "AM" ]
    }
  },
  {
    name: "Enogu Nayamashi",
    img: "L90QTsV.png",
    opts: {
      jdrs: [ "DE", "AM" ]
    }
  }
];
