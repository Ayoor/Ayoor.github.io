export function getInitialData(year) {
  const dataLookup = {
    1996: {
      "Solid Fuel": [
        45.40295119, 45.40295119, 45.40295119, 45.40295119, 44.04086266,
        43.8138479, 43.92735528, 43.92735528, 44.8354143, 45.74347333,
        46.08399546, 46.08399546,
      ],
      Electricity: [
        43.27176781, 43.27176781, 43.27176781, 43.27176781, 43.27176781,
        43.27176781, 43.27176781, 43.27176781, 43.27176781, 43.27176781,
        43.27176781, 43.27176781,
      ],
      Gas: [
        62.48399488, 62.48399488, 62.48399488, 62.48399488, 62.61203585,
        62.8681178, 62.99615877, 62.74007682, 62.35595391, 61.71574904,
        61.33162612, 61.07554417,
      ],
      "Liquid Fuel": [
        33.19705642, 32.86999182, 33.85118561, 34.91414554, 32.78822567,
        32.13409648, 32.62469338, 32.86999182, 37.44889616, 40.71954211,
        36.54946852, 38.34832379,
      ],
    },
    1997: {
      "Solid Fuel": [
        46.19750284, 46.19750284, 46.08399546, 45.97048808, 44.72190692,
        44.49489217, 44.60839955, 44.38138479, 44.26787741, 45.8569807,
        45.8569807, 45.8569807,
      ],
      Electricity: [
        43.27176781, 43.27176781, 43.27176781, 43.13984169, 43.13984169,
        43.13984169, 43.13984169, 43.13984169, 42.08443272, 42.08443272,
        42.08443272, 42.08443272,
      ],
      Gas: [
        60.43533931, 60.69142125, 60.9475032, 60.81946223, 60.43533931,
        60.05121639, 59.66709347, 59.5390525, 57.74647887, 57.6184379,
        57.10627401, 56.72215109,
      ],
      "Liquid Fuel": [
        38.51185609, 36.05887163, 32.95175797, 31.316435, 31.39820114,
        30.58053966, 29.27228128, 30.49877351, 29.84464432, 31.316435,
        31.23466885, 30.25347506,
      ],
    },

    1998: {
      "Solid Fuel": [
        45.8569807, 45.8569807, 45.8569807, 45.8569807, 44.8354143,
        44.94892168, 45.06242906, 45.06242906, 45.40295119, 46.87854711,
        46.99205448, 46.99205448,
      ],
      Electricity: [
        41.55672823, 41.55672823, 41.42480211, 41.42480211, 41.42480211,
        41.29287599, 41.42480211, 41.42480211, 41.42480211, 41.42480211,
        41.42480211, 41.42480211,
      ],
      Gas: [
        56.59411012, 57.10627401, 57.6184379, 57.6184379, 56.97823303,
        56.46606914, 56.08194622, 56.08194622, 56.08194622, 56.08194622,
        56.08194622, 56.08194622,
      ],
      "Liquid Fuel": [
        28.12755519, 26.57399836, 25.02044154, 25.18397383, 25.34750613,
        24.52984464, 23.71218316, 23.22158626, 24.03924775, 24.85690924,
        23.9574816, 22.32215863,
      ],
    },
    1999: {
      "Solid Fuel": [
        46.99205448, 46.99205448, 46.99205448, 47.10556186, 45.97048808,
        45.8569807, 45.8569807, 45.8569807, 46.31101022, 47.446084,
        47.55959137, 47.67309875,
      ],
      Electricity: [
        41.55672823, 41.55672823, 41.68865435, 41.29287599, 41.29287599,
        41.29287599, 41.29287599, 41.29287599, 41.29287599, 41.29287599,
        41.29287599, 41.29287599,
      ],
      Gas: [
        56.08194622, 56.08194622, 56.08194622, 56.08194622, 55.95390525,
        55.95390525, 55.82586428, 55.82586428, 55.82586428, 55.82586428,
        55.82586428, 55.82586428,
      ],
      "Liquid Fuel": [
        22.48569092, 22.24039248, 23.30335241, 25.75633688, 25.51103843,
        25.51103843, 28.78168438, 29.35404742, 31.39820114, 31.39820114,
        33.19705642, 38.10302535,
      ],
    },
    2000: {
      "Solid Fuel": [
        47.78660613, 47.67309875, 47.78660613, 47.67309875, 47.67309875,
        46.53802497, 46.19750284, 46.08399546, 46.19750284, 47.10556186,
        48.58115778, 49.03518729,
      ],
      Electricity: [
        41.29287599, 41.29287599, 41.29287599, 41.29287599, 40.23746702,
        40.23746702, 40.23746702, 40.23746702, 40.23746702, 40.23746702,
        40.36939314, 40.36939314,
      ],
      Gas: [
        55.82586428, 55.82586428, 55.6978233, 55.56978233, 55.05761844,
        54.54545455, 54.16133163, 54.16133163, 54.16133163, 54.16133163,
        54.16133163, 54.16133163,
      ],
      "Liquid Fuel": [
        37.28536386, 37.53066231, 38.75715454, 37.6941946, 36.79476697,
        37.8577269, 40.88307441, 41.210139, 52.16680294, 55.19215045,
        51.4309076, 48.81439084,
      ],
    },
    2001: {
      "Solid Fuel": [
        49.26220204, 49.14869467, 49.14869467, 49.14869467, 48.58115778,
        48.35414302, 48.12712826, 48.24063564, 50.62429058, 51.87287174,
        52.21339387, 52.32690125,
      ],
      Electricity: [
        40.36939314, 40.50131926, 40.50131926, 42.08443272, 42.21635884,
        42.21635884, 42.21635884, 42.21635884, 42.21635884, 42.21635884,
        42.21635884, 42.21635884,
      ],
      Gas: [
        54.16133163, 54.16133163, 54.16133163, 54.16133163, 54.16133163,
        54.2893726, 54.2893726, 54.2893726, 54.41741357, 54.41741357,
        54.41741357, 54.41741357,
      ],
      "Liquid Fuel": [
        42.35486509, 43.00899428, 41.61896975, 40.31071137, 42.10956664,
        42.19133279, 40.39247751, 39.16598528, 46.60670482, 38.51185609,
        34.91414554, 32.78822567,
      ],
    },
    2002: {
      "Solid Fuel": [
        52.32690125, 52.32690125, 52.32690125, 52.44040863, 52.44040863,
        51.64585698, 51.41884222, 51.41884222, 51.30533485, 52.21339387,
        53.23496027, 53.68898978,
      ],
      Electricity: [
        44.06332454, 44.06332454, 44.06332454, 44.19525066, 44.32717678,
        44.32717678, 44.4591029, 44.4591029, 44.4591029, 44.4591029,
        44.4591029, 44.59102902,
      ],
      Gas: [
        54.41741357, 54.41741357, 54.41741357, 54.41741357, 54.54545455,
        54.54545455, 54.54545455, 54.54545455, 54.54545455, 54.54545455,
        54.54545455, 54.54545455,
      ],
      "Liquid Fuel": [
        34.3417825, 33.19705642, 35.24121014, 36.54946852, 36.71300082,
        35.73180703, 35.24121014, 34.75061325, 39.32951758, 39.73834832,
        36.05887163, 39.98364677,
      ],
    },
    2003: {
      "Solid Fuel": [
        53.46197503, 53.46197503, 53.57548241, 53.23496027, 52.66742338,
        52.553916, 52.553916, 52.553916, 53.34846765, 54.37003405,
        54.48354143, 54.48354143,
      ],
      Electricity: [
        44.59102902, 44.59102902, 44.59102902, 44.72295515, 44.98680739,
        45.25065963, 45.38258575, 45.51451187, 45.51451187, 45.64643799,
        45.77836412, 45.91029024,
      ],
      Gas: [
        54.67349552, 54.67349552, 54.67349552, 54.67349552, 54.80153649,
        54.92957746, 55.05761844, 55.31370038, 55.44174136, 55.44174136,
        55.56978233, 55.6978233,
      ],
      "Liquid Fuel": [
        41.86426819, 49.22322159, 50.69501226, 37.93949305, 35.65004088,
        34.99591169, 36.22240392, 37.6941946, 37.20359771, 40.39247751,
        40.22894522, 42.10956664,
      ],
    },
    2004: {
      "Solid Fuel": [
        54.71055619, 54.93757094, 54.82406356, 54.82406356, 54.37003405,
        54.25652667, 54.59704881, 55.50510783, 56.86719637, 59.13734393,
        59.8183882, 60.38592509,
      ],
      Electricity: [
        46.17414248, 46.70184697, 47.36147757, 47.75725594, 47.88918206,
        48.02110818, 48.1530343, 48.28496042, 48.41688654, 48.41688654,
        49.07651715, 50.65963061,
      ],
      Gas: [
        55.95390525, 56.33802817, 56.97823303, 57.6184379, 57.87451985,
        57.87451985, 58.38668374, 58.51472471, 58.77080666, 58.77080666,
        59.41101152, 60.43533931,
      ],
      "Liquid Fuel": [
        41.29190515, 40.22894522, 40.71954211, 44.23548651, 47.66966476,
        44.8896157, 45.29844644, 49.71381848, 52.16680294, 59.19869174,
        55.02861815, 51.02207686,
      ],
    },
    2004: {
      "Solid Fuel": [
        60.61293984, 61.06696935, 61.18047673, 61.18047673, 60.61293984,
        60.38592509, 60.27241771, 61.06696935, 61.74801362, 64.35868331,
        65.03972758, 65.15323496,
      ],
      Electricity: [
        53.29815303, 53.56200528, 53.6939314, 53.95778364, 54.08970976,
        54.35356201, 54.35356201, 54.48548813, 55.14511873, 57.25593668,
        59.36675462, 60.55408971,
      ],
      Gas: [
        62.48399488, 62.99615877, 63.38028169, 63.63636364, 63.76440461,
        63.89244558, 63.89244558, 64.02048656, 64.78873239, 66.1971831,
        67.6056338, 68.24583867,
      ],
      "Liquid Fuel": [
        51.7579722, 51.83973835, 59.19869174, 61.32461161, 57.89043336,
        63.69582993, 68.11120196, 72.28127555, 73.83483238, 76.77841374,
        68.43826656, 70.97301717,
      ],
    },
    2006: {
      "Solid Fuel": [
        65.26674234, 65.26674234, 65.38024972, 65.49375709, 66.17480136,
        64.9262202, 64.81271283, 65.38024972, 66.17480136, 69.5800227,
        70.37457435, 70.37457435,
      ],
      Electricity: [
        61.0817942, 61.34564644, 63.32453826, 67.2823219, 71.37203166,
        73.35092348, 74.14248021, 74.93403694, 76.78100264, 80.47493404,
        82.98153034, 84.5646438,
      ],
      Gas: [
        68.88604353, 69.65428937, 71.57490397, 74.64788732, 77.72087068,
        79.64148528, 80.40973111, 81.04993598, 82.07426376, 84.25096031,
        85.91549296, 86.93982074,
      ],
      "Liquid Fuel": [
        72.28127555, 73.67130008, 74.48896157, 76.61488144, 77.10547833,
        77.02371218, 79.47669665, 77.75960752, 73.67130008, 67.62060507,
        64.51349141, 67.62060507,
      ],
    },
    2007: {
      "Solid Fuel": [
        70.48808173, 70.71509648, 70.71509648, 70.71509648, 70.37457435,
        70.03405221, 70.82860386, 72.87173666, 74.2338252, 75.70942111,
      ],
      Electricity: [
        84.82849604, 85.09234828, 84.43271768, 82.05804749, 79.41952507,
        77.176781, 75.46174142, 74.40633245, 73.87862797, 73.61477573,
      ],
      Gas: [
        87.32394366, 87.58002561, 87.58002561, 86.81177977, 85.78745198,
        84.63508323, 83.61075544, 83.09859155, 83.09859155, 87.58002561,
      ],
      "Liquid Fuel": [
        62.87816844, 64.34995912, 66.55764513, 69.33769419, 69.0106296,
        70.72771872, 72.60834015, 71.13654947, 75.47015536, 78.25020442,
        88.79803761, 89.28863451,
      ],
    },

    2008: {
      "Solid Fuel": [
        76.61748014, 76.95800227, 77.2985244, 77.52553916, 79.11464245,
        80.70374574, 81.49829739, 82.40635641, 89.78433598, 98.18388195,
        98.9784336, 99.88649262,
      ],
      Electricity: [
        74.14248021, 83.37730871, 83.37730871, 85.09234828, 85.09234828,
        85.09234828, 85.22427441, 95.11873351, 110.817942, 111.0817942,
        110.9498681, 110.9498681,
      ],
      Gas: [
        83.3546735, 92.18950064, 92.18950064, 94.11011524, 94.11011524,
        94.11011524, 94.11011524, 98.0793854, 108.1946223, 108.9628681,
        108.9628681, 108.9628681,
      ],
      "Liquid Fuel": [
        92.72281276, 92.88634505, 106.050695, 117.2526574, 127.2281276,
        132.8699918, 139.574816, 118.3156173, 115.2902698, 98.52820932,
        90.51512674, 80.53965658,
      ],
    },
    2009: {
      "Solid Fuel": [
        101.0215664, 101.1350738, 101.0215664, 101.0215664, 99.31895573,
        98.52440409, 97.72985244, 98.29738933, 98.52440409, 100.5675369,
        101.3620885, 101.4755959,
      ],
      Electricity: [
        110.9498681, 110.9498681, 110.9498681, 106.2005277, 105.1451187,
        105.1451187, 105.1451187, 104.6174142, 104.6174142, 104.6174142,
        104.4854881, 104.4854881,
      ],
      Gas: [
        108.7067862, 108.7067862, 108.1946223, 102.6888604, 100.5121639,
        100.5121639, 100.5121639, 100.5121639, 100.5121639, 99.87195903,
        99.87195903, 99.87195903,
      ],
      "Liquid Fuel": [
        79.31316435, 74.89779231, 67.53883892, 71.54538021, 71.62714636,
        79.2313982, 70.89125102, 78.98609975, 77.10547833, 82.01144726,
        84.30089943, 86.18152085,
      ],
    },
    2010: {
      "Solid Fuel": [
        101.3620885, 101.4755959, 101.4755959, 101.4755959, 99.09194098,
        97.84335982, 96.93530079, 97.61634506, 97.0374574, 97.61634506,
        98.07037457, 101.0215664,
      ],
      Electricity: [
        104.6174142, 101.5831135, 101.5831135, 98.68073879, 98.68073879,
        98.68073879, 98.68073879, 98.68073879, 98.68073879, 98.68073879,
        98.68073879, 103.1662269,
      ],
      Gas: [
        100.128041, 100.128041, 100.128041, 99.87195903, 99.87195903,
        99.87195903, 99.87195903, 99.87195903, 99.87195903, 99.61587708,
        99.61587708, 100.8962868,
      ],
      "Liquid Fuel": [
        103.5977105, 90.59689289, 96.97465249, 100.0817661, 100.0817661,
        96.8111202, 95.01226492, 94.76696648, 94.52166803, 94.52166803,
        98.20114473, 101.5535568,
      ],
    },
    2011: {
      "Solid Fuel": [
        102.1566402, 103.0646992, 103.9727582, 103.7457435, 104.0862656,
        102.7241771, 102.4971623, 102.7241771, 102.8376844, 103.4052213,
        109.0805902, 109.8751419,
      ],
      Electricity: [
        103.1662269, 104.0897098, 104.4854881, 105.0131926, 105.0131926,
        105.0131926, 105.0131926, 106.8601583, 120.7124011, 122.4274406,
        123.6147757, 123.6147757,
      ],
      Gas: [
        100.8962868, 101.6645327, 103.2010243, 103.9692702, 103.9692702,
        103.9692702, 103.9692702, 104.993598, 112.8040973, 114.46863,
        115.1088348, 115.1088348,
      ],
      "Liquid Fuel": [
        128.1275552, 125.5110384, 119.787408, 130.4170074, 135.6500409,
        125.4292723, 128.6999182, 124.7751431, 120.1144726, 123.7939493,
        123.2215863, 131.3982011,
      ],
    },
    2012: {
      "Solid Fuel": [
        110.215664, 109.5346198, 109.9886493, 109.9886493, 107.7185017,
        106.8104427, 107.1509648, 107.0374574, 107.4914869, 108.399546,
        108.8535755, 109.4211124,
      ],
      Electricity: [
        123.6147757, 122.4274406, 121.8997361, 121.2401055, 121.2401055,
        121.2401055, 121.2401055, 121.2401055, 121.2401055, 121.2401055,
        121.2401055, 130.0791557,
      ],
      Gas: [
        115.1088348, 113.7003841, 112.4199744, 112.4199744, 112.2919334,
        112.2919334, 112.2919334, 112.2919334, 112.2919334, 111.7797695,
        113.8284251, 119.5902689,
      ],
      "Liquid Fuel": [
        131.6434996, 134.0964841, 136.3859362, 134.8323794, 127.3098937,
        117.4161897, 120.3597711, 128.8634505, 132.3793949, 133.8511856,
        130.744072, 137.5306623,
      ],
    },
    2013: {
      "Solid Fuel": [
        109.5346198, 109.7616345, 109.1940976, 109.1940976, 109.4211124,
        109.307605, 109.6481271, 109.5346198, 110.1021566, 111.3507378,
        112.3723042, 112.599319,
      ],
      Electricity: [
        129.9472296, 131.2664908, 131.2664908, 131.2664908, 131.2664908,
        131.2664908, 131.2664908, 131.2664908, 131.2664908, 131.2664908,
        131.2664908, 140.1055409,
      ],
      Gas: [
        119.5902689, 120.9987196, 120.9987196, 120.9987196, 120.9987196,
        120.9987196, 121.3828425, 121.3828425, 121.3828425, 121.3828425,
        121.3828425, 129.3213828,
      ],
      "Liquid Fuel": [
        134.6688471, 143.1725266, 141.4554374, 133.8511856, 125.0204415,
        124.6933769, 127.9640229, 128.045789, 131.0711365, 127.1463614,
        124.6933769, 128.3728536,
      ],
    },
    2014: {
      "Solid Fuel": [
        113.2803632, 113.2803632, 113.1668558, 113.3938706, 112.4858116,
        112.2587968, 112.1452894, 111.9182747, 112.4858116, 114.6424518,
        114.7559591, 114.7559591,
      ],
      Electricity: [
        138.7862797, 139.0501319, 138.6543536, 137.994723, 137.994723,
        137.994723, 137.994723, 137.994723, 137.994723, 137.994723,
        137.994723, 137.994723,
      ],
      Gas: [
        129.0653009, 129.3213828, 129.0653009, 128.2970551, 128.2970551,
        128.2970551, 128.2970551, 128.2970551, 128.2970551, 128.2970551,
        128.2970551, 128.2970551,
      ],
      "Liquid Fuel": [
        125.1022077, 125.26574, 121.6680294, 119.6238757, 118.3156173,
        117.4979558, 116.4349959, 116.6802944, 114.9632052, 109.4848733,
        108.0948487, 99.34587081,
      ],
    },
    2015: {
      "Solid Fuel": [
        114.6424518, 114.6424518, 114.7559591, 114.8694665, 112.4858116,
        112.1452894, 112.0317821, 112.0317821, 112.3723042, 113.8479001,
        114.0749149, 114.0749149,
      ],
      Electricity: [
        137.3350923, 136.4116095, 132.8496042, 132.7176781, 131.9261214,
        131.9261214, 131.9261214, 131.9261214, 129.0237467, 129.0237467,
        129.0237467, 129.0237467,
      ],
      Gas: [
        128.2970551, 128.2970551, 128.2970551, 128.0409731, 128.0409731,
        127.9129321, 127.9129321, 127.9129321, 127.9129321, 127.9129321,
        127.9129321, 127.9129321,
      ],
      "Liquid Fuel": [
        86.67211774, 91.00572363, 88.30744072, 88.47097302, 89.7792314,
        87.40801308, 83.72853639, 74.40719542, 75.5519215, 75.63368765,
        73.01717089, 67.29354047,
      ],
    },
    2016: {
      "Solid Fuel": [
        114.0749149, 114.1884222, 113.9614075, 114.1884222, 112.8263337,
        111.9182747, 111.0102157, 111.123723, 112.0317821, 113.9614075,
        114.7559591, 115.4370034,
      ],
      Electricity: [
        129.0237467, 128.1002639, 124.8021108, 123.0870712, 123.0870712,
        123.0870712, 123.0870712, 123.0870712, 123.0870712, 123.0870712,
        123.0870712, 123.0870712,
      ],
      Gas: [
        127.9129321, 127.9129321, 127.9129321, 127.6568502, 127.6568502,
        127.6568502, 127.6568502, 127.6568502, 127.6568502, 127.6568502,
        127.6568502, 127.6568502,
      ],
      "Liquid Fuel": [
        61.24284546, 58.6263287, 63.20523303, 64.67702371, 68.683565,
        74.24366312, 74.40719542, 72.93540474, 76.2060507, 86.91741619,
        83.40147179, 90.59689289,
      ],
    },
    2017: {
      "Solid Fuel": [
        115.6640182, 116.2315551, 116.2315551, 116.3450624, 114.7559591,
        114.5289444, 114.415437, 114.415437, 114.415437, 116.7990919,
        118.0476731, 118.3881952,
      ],
      Electricity: [
        122.5593668, 122.5593668, 122.5593668, 121.8997361, 122.4274406,
        122.4274406, 123.0870712, 123.0870712, 123.0870712, 123.0870712,
        123.2189974, 123.2189974,
      ],
      Gas: [
        127.6568502, 127.6568502, 128.9372599, 132.1382843, 137.5160051,
        137.5160051, 139.1805378, 139.1805378, 139.1805378, 142.2535211,
        142.2535211, 142.2535211,
      ],
      "Liquid Fuel": [
        95.99345871, 94.52166803, 89.7792314, 89.9427637, 83.72853639,
        82.17497956, 81.52085037, 85.28209321, 88.79803761, 89.69746525,
        97.95584628, 105.5600981,
      ],
    },
    2018: {
      "Solid Fuel": [
        118.61521, 118.61521, 118.9557321, 118.8422247, 115.5505108,
        115.323496, 116.0045403, 116.2315551, 115.7775255, 119.9772985,
        119.0692395, 121.4528944,
      ],
      Electricity: [
        123.3509235, 123.3509235, 123.3509235, 123.7467018, 123.878628,
        126.9129288, 128.3641161, 128.3641161, 129.8153034, 132.4538259,
        132.4538259, 132.4538259,
      ],
      Gas: [
        142.2535211, 142.2535211, 142.2535211, 143.5339309, 143.6619718,
        146.8629962, 149.4238156, 149.4238156, 152.1126761, 155.1856594,
        155.1856594, 155.1856594,
      ],
      "Liquid Fuel": [
        106.8683565, 105.0695012, 110.466067, 110.8748978, 114.7996729,
        113.736713, 110.7931316, 112.1831562, 117.6614881, 126.1651676,
        119.1332788, 111.6107931,
      ],
    },
    2019: {
      "Solid Fuel": [
        121.4528944, 121.5664018, 121.906924, 119.8637911, 120.8853575,
        121.5664018, 121.3393871, 120.5448354, 120.9988649, 122.814983,
        125.7661748, 126.4472191,
      ],
      Electricity: [
        121.2401055, 121.3720317, 121.3720317, 132.585752, 132.585752,
        132.585752, 132.585752, 132.585752, 132.585752, 120.9762533,
        120.9762533, 120.9762533,
      ],
      Gas: [
        147.631242, 147.759283, 147.759283, 163.7644046, 163.7644046,
        163.7644046, 163.7644046, 163.7644046, 163.7644046, 160.3072983,
        160.3072983, 160.3072983,
      ],
      "Liquid Fuel": [
        107.686018, 110.1390025, 110.8748978, 111.3654947, 113.16435,
        108.6672118, 108.0130826, 109.7301717, 109.8119379, 113.8184791,
        110.3025348, 110.3843009,
      ],
    },
    2020: {
      "Solid Fuel": [
        125.3121453, 126.6742338, 126.6742338, 126.5607264, 126.5607264,
        126.4472191, 126.9012486, 125.8796822, 127.014756, 128.830874,
        130.6469921, 130.1929625,
      ],
      Electricity: [
        120.9762533, 120.9762533, 120.9762533, 116.6226913, 116.7546174,
        116.7546174, 116.6226913, 116.6226913, 116.6226913, 102.3746702,
        102.3746702, 102.3746702,
      ],
      Gas: [
        160.3072983, 160.3072983, 160.3072983, 160.5633803, 160.5633803,
        160.5633803, 160.4353393, 160.4353393, 160.4353393, 155.1856594,
        155.1856594, 155.1856594,
      ],
      "Liquid Fuel": [
        114.1455437, 101.4717907, 83.40147179, 64.84055601, 60.67048242,
        70.89125102, 71.46361406, 71.30008177, 68.27473426, 71.30008177,
        67.45707277, 79.64022895,
      ],
    },
    2021: {
      "Solid Fuel": [
        130.3064699, 130.0794552, 130.3064699, 130.4199773, 130.3064699,
        130.6469921, 130.6469921, 130.5334847, 131.2145289, 132.5766175,
        133.1441544, 136.7763905,
      ],
      Electricity: [
        102.3746702, 102.3746702, 102.3746702, 112.005277, 112.005277,
        112.005277, 112.005277, 112.005277, 112.005277, 131.1345646,
        131.1345646, 131.1345646,
      ],
      Gas: [
        155.1856594, 155.1856594, 155.1856594, 169.3982074, 169.3982074,
        169.3982074, 169.6542894, 169.6542894, 169.6542894, 184.3790013,
        184.3790013, 184.3790013,
      ],
      "Liquid Fuel": [
        85.69092396, 92.15044971, 94.76696648, 90.59689289, 94.84873262,
        97.79231398, 98.28291087, 97.05641864, 101.4717907, 120.5233034,
        125.0204415, 121.1774325,
      ],
    },
    2022: {
      "Solid Fuel": [
        137.4574347, 139.954597, 144.9489217, 147.7866061, 151.9863791,
        159.8183882, 165.8342792, 169.4665153,
      ],
      Electricity: [
        131.2664908, 131.2664908, 131.2664908, 218.8654354, 218.8654354,
        218.8654354, 219.1292876, 219.1292876,
      ],
      Gas: [
        185.0192061, 185.0192061, 185.0192061, 260.1792574, 260.1792574,
        260.1792574, 261.3316261, 261.3316261,
      ],
      "Liquid Fuel": [
        125.9198692, 140.8013083, 202.7800491, 193.7857727, 211.1201962,
        223.7939493, 210.3843009, 180.784955,
      ],
    },
  };

  return Object.keys(dataLookup[year]).map((label) => ({
    label,
    data: dataLookup[year][label],
    borderColor: getColor(label),
    borderWidth: 1,
    fill: false,
  }));
}