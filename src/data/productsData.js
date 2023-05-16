const productsData = [
  {
    id: 201,
    title: "Disco Rígido WD-BLUE 1TB SATA",
    seller: "Western Digital",
    stock: 6,
    price: 13000,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/WD-BLUE-1TB_1_skaajh.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/WD-BLUE-1TB_2_wsa204.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/WD-BLUE-1TB_3_v1vy9g.jpg",
      },
    ],
  },
  {
    id: 202,
    title: "Disco Rígido Seagate 1TB SATA",
    seller: "Seagate",
    stock: 4,
    price: 12899,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/SEAGATE-1TB_1_enlimr.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/SEAGATE-1TB_2_dbgblr.jpg",
      },
    ],
  },
  {
    id: 203,
    title: "Disco Rígido WD-BLUE 2TB SATA",
    seller: "Western Digital",
    stock: 1,
    price: 19499,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/WD-BLUE-2TB_1_wopqr0.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/WD-BLUE-2TB_2_hhfdf0.jpg",
      },
    ],
  },
  {
    id: 204,
    title: "Disco Solido SSD Gigabyte 120GB",
    seller: "Gigabyte",
    stock: 1,
    price: 8700,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-GIGABYTE-120_1_zziejj.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/SOLIDO-GIGABYTE-120_2_ukxpqo.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/SOLIDO-GIGABYTE-120_3_k8xezl.jpg",
      },
    ],
  },
  {
    id: 205,
    title: "Disco Solido SSD Adata 240GB",
    seller: "Adata",
    stock: 0,
    price: 7150,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-ADATA-240_1_ortjpm.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-ADATA-240_2_sopdsy.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-ADATA-240_3_ldrqln.jpg",
      },
    ],
  },
  {
    id: 206,
    title: "Disco Solido SSD Crucial 500GB",
    seller: "Crucial",
    stock: 1,
    price: 11200,
    category: "almacenamiento",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-CRUCIAL-500_1_aldkzr.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/SOLIDO-CRUCIAL-500_2_rmowad.jpg",
      },
    ],
  },
  {
    id: 207,
    title: "Fuente Redragon 500W 80+ Bronze",
    seller: "Redragon",
    stock: 1,
    price: 16350,
    category: "fuentes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/FUENTE-REDRAGON-500W-BRONCE_1_bsurdv.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121267/FUENTE-REDRAGON-500W-BRONCE_2_nfv3op.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121267/FUENTE-REDRAGON-500W-BRONCE_3_o3pwdd.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121267/FUENTE-REDRAGON-500W-BRONCE_4_jylkmo.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/FUENTE-REDRAGON-500W-BRONCE_5_fgl41o.jpg",
      },
    ],
  },
  {
    id: 208,
    title: "Fuente ASUS-TUF 550W 80+ Bronze",
    seller: "Asus",
    stock: 1,
    price: 28300,
    category: "fuentes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/FUENTE-ASUS-550W-BRONCE_1_hxxcu6.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/FUENTE-ASUS-550W-BRONCE_2_xbckug.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/FUENTE-ASUS-550W-BRONCE_3_k7tghp.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/FUENTE-ASUS-550W-BRONCE_4_s9dtln.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/FUENTE-ASUS-550W-BRONCE_5_dc2khg.jpg",
      },
    ],
  },
  {
    id: 209,
    title: "Fuente ASUS-TUF 750W 80+ Bronze",
    seller: "Asus",
    stock: 1,
    price: 35450,
    category: "fuentes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/FUENTE-ASUS-750W-BRONCE_1_xnxuxp.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/FUENTE-ASUS-750W-BRONCE_2_p6azqx.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/FUENTE-ASUS-750W-BRONCE_3_qhb6r4.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/FUENTE-ASUS-750W-BRONCE_4_aehqyj.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/FUENTE-ASUS-750W-BRONCE_5_zvbmnr.jpg",
      },
    ],
  },
  {
    id: 210,
    title: "Fuente Gigabyte 850W 80+ Gold",
    seller: "Gigabyte",
    stock: 1,
    price: 40320,
    category: "fuentes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/FUENTE-GIGABYTE-850W-GOLD_1_cvn3ip.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/FUENTE-GIGABYTE-850W-GOLD_2_bd9xps.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/FUENTE-GIGABYTE-850W-GOLD_3_lqm10e.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/FUENTE-GIGABYTE-850W-GOLD_4_nnpe6q.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121266/FUENTE-GIGABYTE-850W-GOLD_5_c47dfo.jpg",
      },
    ],
  },
  {
    id: 211,
    title: "Fuente ASUS-ROG-THOR 850W 80+ Platinum",
    seller: "Asus",
    stock: 1,
    price: 72350,
    category: "fuentes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/FUENTE-ASUSROG-850W-PLATINUM_1_rjnw0j.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/FUENTE-ASUSROG-850W-PLATINUM_2_wxaiey.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121264/FUENTE-ASUSROG-850W-PLATINUM_3_whc4f8.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/FUENTE-ASUSROG-850W-PLATINUM_4_rrvddm.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/FUENTE-ASUSROG-850W-PLATINUM_5_wqgddd.jpg",
      },
    ],
  },
  {
    id: 212,
    title: "Gabinete Deepcool MATREXX 50 ADD-RGB 4F",
    seller: "Deepcool",
    stock: 1,
    price: 38430,
    featured: true,
    category: "gabinetes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/DEEPCOOL-MATREXX-50_1_eanzaf.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/DEEPCOOL-MATREXX-50_2_dugbvq.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/DEEPCOOL-MATREXX-50_3_nenzvj.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/DEEPCOOL-MATREXX-50_4_ghhen9.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/DEEPCOOL-MATREXX-50_5_ulm6jj.jpg",
      },
    ],
  },
  {
    id: 213,
    title: "Gabinete Sentey F10 RGB M-ATX",
    seller: "Sentey",
    stock: 1,
    price: 20110,
    category: "gabinetes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/SENTEY-F10-RGB_1_dtdoy0.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_2_yksuqz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_3_zhdbhw.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_4_ntrjiv.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_5_sx9a6k.jpg",
      },
    ],
  },
  {
    id: 214,
    title: "Gabinete Silverstone FARA-R1 BLACK",
    seller: "Silverstone",
    stock: 1,
    price: 19999,
    category: "gabinetes",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/SENTEY-F10-RGB_1_dtdoy0.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_2_yksuqz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_3_zhdbhw.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_4_ntrjiv.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121263/SENTEY-F10-RGB_5_sx9a6k.jpg",
      },
    ],
  },
  {
    id: 215,
    title: "Memoria Adata DDR4 8GB 3200MHz",
    seller: "Adata",
    stock: 1,
    price: 19999,
    category: "memorias",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/MEMORIA-ADATA-8GB-DDR4_1_zqbroi.jpg",
      },
    ],
  },
  {
    id: 216,
    title: "Memoria Corsair DDR4 Vengeance 16GB (2x8GB) 3200MHz RGB",
    seller: "Corsair",
    stock: 1,
    price: 50110,
    category: "memorias",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/MEMORIA-CORSAIR-2X8GB-DDR4_1_b1uggn.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/MEMORIA-CORSAIR-2X8GB-DDR4_2_uf6eux.jpg",
      },
    ],
  },
  {
    id: 217,
    title: "Memoria Kingston DDR4 16GB 3200MHz RGB",
    seller: "Kingston",
    stock: 1,
    price: 45999,
    category: "memorias",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/MEMORIA-KINGSTON-16GB-DDR4_1_ukbc9p.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/MEMORIA-KINGSTON-16GB-DDR4_2_fklbyy.jpg",
      },
    ],
  },
  {
    id: 218,
    title: "Mother Gigabyte GA-A320M-H AM4",
    seller: "Gigabyte",
    stock: 1,
    price: 20799,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/GIGABYTE-GA-A320M-H-AM4_1_n3rqvz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-GA-A320M-H-AM4_2_svuew6.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-GA-A320M-H-AM4_3_qis9vl.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-GA-A320M-H-AM4_4_yrh4h3.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-GA-A320M-H-AM4_5_s0ivw9.jpg",
      },
    ],
  },
  {
    id: 219,
    title: "Mother ASUS-ROG-STRIX B450-F GAMING-II AM4",
    seller: "Asus",
    stock: 1,
    price: 59999,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/ASUS-ROG-B450-F-AM4_1_rejtkk.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/ASUS-ROG-B450-F-AM4_2_renc7b.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/ASUS-ROG-B450-F-AM4_3_q2yfwm.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/ASUS-ROG-B450-F-AM4_4_rvokzl.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/ASUS-ROG-B450-F-AM4_5_ugbiu4.jpg",
      },
    ],
  },
  {
    id: 220,
    title: "Mother MSI A520M-A PRO AM4",
    seller: "Msi",
    stock: 1,
    price: 29999,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/MSI-A520M-A-PRO-AM4_1_nkhu3e.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/MSI-A520M-A-PRO-AM4_2_hwb7mc.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/MSI-A520M-A-PRO-AM4_3_o0bk7y.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/MSI-A520M-A-PRO-AM4_4_lyoraq.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121259/MSI-A520M-A-PRO-AM4_5_q8dmra.jpg",
      },
    ],
  },
  {
    id: 221,
    title: "Mother Gigabyte Z690 Gaming X DDR5 LGA1700",
    seller: "Gigabyte",
    stock: 1,
    price: 125999,
    featured: true,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-Z690_1_n9ogyr.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/GIGABYTE-Z690_2_zanucx.jpg",
      },
    ],
  },
  {
    id: 222,
    title: "Mother Gigabyte B560M-DS3H V2",
    seller: "Gigabyte",
    stock: 1,
    price: 25999,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GIGABYTE-B560M-DS3H_1_u1qrvv.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/GIGABYTE-B560M-DS3H_2_ogrchn.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/GIGABYTE-B560M-DS3H_3_y7fvpl.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/GIGABYTE-B560M-DS3H_4_ykdxpf.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/GIGABYTE-B560M-DS3H_5_qgfzdu.jpg",
      },
    ],
  },
  {
    id: 223,
    title: "Mother ASUS-TUF Z790-Plus Gaming Wifi D4 LGA1700",
    seller: "Asus",
    stock: 1,
    price: 135999,
    category: "mothers",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/ASUS-TUF-Z790_1_ywfr5k.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/ASUS-TUF-Z790_2_esyf1t.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/ASUS-TUF-Z790_3_dswvhh.jpg",
      },
    ],
  },
  {
    id: 224,
    title: "Placa de Video ASUS-TUF GeForce GTX 1660TI 6GB OC GDDR6",
    seller: "Asus",
    stock: 1,
    price: 107999,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/GEFORCE-GTX-1660TI-TUF_1_ktefos.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/GEFORCE-GTX-1660TI-TUF_2_qezjoe.jpg",
      },
    ],
  },
  {
    id: 225,
    title: "Placa de Video ZOTAC GeForce RTX 3070TI 8GB GDDR6 Trinity",
    seller: "Zotac",
    stock: 1,
    price: 265500,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/GEFORCE-RTX-3070TI-TRINITY_1_vjhp0l.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121253/GEFORCE-RTX-3070TI-TRINITY_2_y4m625.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-3070TI-TRINITY_3_utszu0.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-3070TI-TRINITY_4_qj18bn.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-3070TI-TRINITY_5_hczjy0.jpg",
      },
    ],
  },
  {
    id: 226,
    title: "Placa de Video PNY XLR8 GeForce RTX 4090 24GB GDDR6",
    seller: "PNY",
    stock: 1,
    price: 930999,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-4090-PNY_1_yx27yg.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-4090-PNY_2_n4xyyu.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-4090-PNY_3_r7hjce.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/GEFORCE-RTX-4090-PNY_4_wzgsm0.jpg",
      },
    ],
  },
  {
    id: 227,
    title: "Placa de Video Asrock Radeon RX 570 8GB GDDR5 Phantom",
    seller: "Asrock",
    stock: 1,
    price: 98999,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-570-ASROCK_1_iohjfx.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-570-ASROCK_2_xmdfmo.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-570-ASROCK_3_ur0rpz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-570-ASROCK_4_aj49bh.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-570-ASROCK_5_h5cbe8.jpg",
      },
    ],
  },
  {
    id: 228,
    title: "Placa de Video MSI Radeon RX 6650XT 8GB MECH 2X OC",
    seller: "Msi",
    stock: 1,
    price: 167600,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-6650XT-MSI_1_whu5nw.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-6650XT-MSI_2_fgxthn.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/RADEON-RX-6650XT-MSI_3_hanyze.jpg",
      },
    ],
  },
  {
    id: 229,
    title: "Placa de Video PowerColor Radeon RX 6700XT 12GB RED-DEVIL",
    seller: "Powercolor",
    stock: 1,
    price: 135750,
    category: "placas",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RADEON-RX-6700XT-POWERCOLOR_1_dpij35.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RADEON-RX-6700XT-POWERCOLOR_2_lc8oln.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RADEON-RX-6700XT-POWERCOLOR_3_ttsndh.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RADEON-RX-6700XT-POWERCOLOR_4_wzbo6p.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RADEON-RX-6700XT-POWERCOLOR_5_tv3cn2.jpg",
      },
    ],
  },
  {
    id: 230,
    title: "Procesador AMD Ryzen 5 5600X AM4 4.4GHz + COOLER",
    seller: "AMD",
    stock: 1,
    price: 67999,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RYZEN-5-5600X_1_g9uqj5.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RYZEN-5-5600X_2_sgkluk.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121261/RYZEN-5-5600X_3_tb0r4l.jpg",
      },
    ],
  },
  {
    id: 231,
    title: "Procesador AMD Ryzen 7 5700X AM4 4.6GHz - SIN COOLER",
    seller: "AMD",
    stock: 1,
    price: 98999,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/RYZEN-7-5700X_1_cim9ka.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/RYZEN-7-5700X_2_ibxv33.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/RYZEN-7-5700X_3_ibwq1c.jpg",
      },
    ],
  },
  {
    id: 232,
    title: "Procesador AMD Ryzen 9 5900X AM4 4.8GHz - SIN COOLER",
    seller: "AMD",
    stock: 1,
    price: 193300,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/RYZEN-9-5900X_1_r816f4.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121262/RYZEN-9-5900X_2_fsdovi.jpg",
      },
    ],
  },
  {
    id: 233,
    title: "Procesador Intel Core i3 12100 12th Gen S1700",
    seller: "Intel",
    stock: 1,
    price: 43999,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/INTEL-I3-12100_1_pplwsp.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/INTEL-I3-12100_2_esahwz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/INTEL-I3-12100_3_evvprr.jpg",
      },
    ],
  },
  {
    id: 234,
    title: "Procesador Intel Core i5 12600KF 4.90GHz Turbo Socket 1700",
    seller: "Intel",
    stock: 1,
    price: 92999,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/INTEL-I5-12600KF_1_x7fp7z.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/INTEL-I5-12600KF_2_uadgrg.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/INTEL-I5-12600KF_3_n1mxjk.jpg",
      },
    ],
  },
  {
    id: 235,
    title: "Procesador Intel Core i7 12700K 5.0GHz Turbo Socket 1700",
    seller: "Intel",
    stock: 1,
    price: 135700,
    category: "procesadores",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/INTEL-I7-12700K_1_xevl20.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/INTEL-I7-12700K_2_vrmgtb.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/INTEL-I7-12700K_3_nw6u64.jpg",
      },
    ],
  },
  {
    id: 236,
    title: "Cooler FAN ID-Cooling TF-12025-ARGB",
    seller: "ID-Cooling",
    stock: 1,
    price: 2800,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/TF-12025_1_ttorhv.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/TF-12025_2_ewzblz.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/TF-12025_3_rtc6vi.jpg",
      },
    ],
  },
  {
    id: 237,
    title: "Cooler FAN ID-Cooling TF-12025-ARGB SNOW",
    seller: "ID-Cooling",
    stock: 1,
    price: 2850,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/TF-12025-WHITE_1_f01o7u.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121265/TF-12025-WHITE_2_jnra24.jpg",
      },
    ],
  },
  {
    id: 238,
    title: "Cooler FAN Cooler Master MF120 S2",
    seller: "Cooler Master",
    stock: 1,
    price: 3500,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/COOLERMASTER-MF120_1_icanpc.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/COOLERMASTER-MF120_2_yeul1t.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/COOLERMASTER-MF120_3_xp4iow.jpg",
      },
    ],
  },
  {
    id: 239,
    title: "Cooler CPU ID-Cooling SE-914-XT ARGB",
    seller: "ID-Cooling",
    stock: 1,
    price: 13500,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/ID-COOLING-SE-914-XT_1_nyajfl.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/ID-COOLING-SE-914-XT_2_ahnkqw.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/ID-COOLING-SE-914-XT_3_colva8.jpg",
      },
    ],
  },
  {
    id: 240,
    title: "Cooler CPU Deepcool GAMMAXX L240 ARGB",
    seller: "Deepcool",
    stock: 1,
    price: 29999,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/DEEPCOOL-GAMMAXX-L240_2_dfmcsf.webp",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121257/DEEPCOOL-GAMMAXX-L240_1_rqhr33.webp",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/DEEPCOOL-GAMMAXX-L240_3_r5atfe.webp",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121258/DEEPCOOL-GAMMAXX-L240_4_w7kolc.webp",
      },
    ],
  },
  {
    id: 241,
    title: "Cooler CPU ASUS ROG STRIX LC120",
    seller: "Asus",
    stock: 1,
    price: 58350,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/ASUS-ROG-STRIX-LC120_1_iugkjp.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/ASUS-ROG-STRIX-LC120_2_obddo2.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121254/ASUS-ROG-STRIX-LC120_3_a8jglw.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/ASUS-ROG-STRIX-LC120_4_xjciql.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121255/ASUS-ROG-STRIX-LC120_5_lmzjh1.jpg",
      },
    ],
  },
  {
    id: 242,
    title: "Pasta Termica ID-Cooling ID-TG05",
    seller: "ID-Cooling",
    stock: 1,
    price: 499,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/ID-COOLING-PASTATERMICA_1_nobknk.jpg",
      },
    ],
  },
  {
    id: 243,
    title: "Pasta Termica Cooler Master RPD Grease High Performance",
    seller: "Cooler Master",
    stock: 1,
    price: 1050,
    category: "refrigeracion",
    images: [
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121256/COOLERMASTER-PASTATERMICA_1_a9hywe.jpg",
      },
      {
        url: "https://res.cloudinary.com/dwytn5mmn/image/upload/v1680121260/COOLERMASTER-PASTATERMICA_2_texv6m.jpg",
      },
    ],
  },
];

export default productsData;
