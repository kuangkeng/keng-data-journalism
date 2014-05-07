
//google table code start here

google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
      
  var cssClassNames = {'headerCell': 'header'};

      // Create and populate the data table.
      var data = google.visualization.arrayToDataTable([

  ['<p class=topcell>Company','<p class=topcell>Value (RM)', '<p class=topcell>Percentage of total contract value', '<p class=topcell>No. of contract', '<p class=topcell>Company registration no.', '<p class=topcell>Company registration no. with MOF'],

  ["PRIMABUMI",876236864,2.74,202,"24896-H","357-40009610"],
  ["INAI KIARA - HWA CHI JV",808330222,2.52,1,"WAIVED",""],
  ["AHMAD ZAKI",689110639,2.15,4,"81250-W",""],
  ["QUALITY REPUTATION",511034158,1.60,82,"603865-D",""],
  ["PERTAMA PADI",388650000,1.21,1,"804404-K",""],
  ["DATASONIC TECHNOLOGIES",378387458,1.18,6,"219626-X",""],
  ["BRILLIANCE INFORMATION",357312434,1.12,9,"374044-H",""],
  ["PHARMANIAGA LOGISTICS",325908913,1.02,52,"260790-T",""],
  ["TARGET RESOURCES",301250000,0.94,2,"153178-V",""],
  ["HEITECH PADU",296222370,0.92,16,"310-628-D","357-00044594"],
  ["LOH & LOH-GEORGE KENT-HAZAMA JV",265925352,0.83,1,"0","0"],
  ["M S ALLY PHARMA",263844262,0.82,179,"0",""],
  ["INNOVATION ASSOCIATES",228843215,0.71,1,"555149-U",""],
  ["LEADSHINE",190239166,0.59,3,"203535-M",""],
  ["GTC GLOBAL",179613600,0.56,3,"559823 P","357-02056688"],
  ["SRI TINGGI",173300000,0.54,1,"83182-D",""],
  ["PANZANA ENTERPRISE",163000000,0.51,1,"83573-P",""],
  ["SUNISSA",157338838,0.49,1,"",""],
  ["REMT UTAMA",151768426,0.47,2,"409864-W",""],
  ["TREE MED",151314336,0.47,8,"530993-K",""],
  ["MUTIARA MURNI",148754015,0.46,74,"162999-M",""],
  ["NIAZ ENTERPRISES",146145000,0.46,1,"347274-D",""],
  ["TELEKOM MALAYSIA",144527440,0.45,20,"128740-P","0"],
  ["PEREMEGA",135896535,0.42,1,"503006-D",""],
  ["EMPAYAR SETIA",114090311,0.36,1,"239721-U",""],
  ["PEMBINAAN MITRAJAYA",108474821,0.34,4,"144554-T",""],
  ["PUNCAK TEKNOLOGI",107958760,0.34,5,"454105-H","357-01005306"],
  ["EGA ELEKTRIKAL (ESAJADI-GUMI ELEKTIKAL JV)",99999995,0.31,1,"#N/A","#N/A"],
  ["PERKASA SUTERA",97000000,0.30,1,"202685-V","1401 A 93 0270"],
  ["CAKNA ENTERPRISE",95955556,0.30,1,"",""],
  ["RUMAKAYA",95947147,0.30,2,"385344-V",""],
  ["WBS CONSTRUCTION",93003861,0.29,1,"502388-A",""],
  ["JAWAT JOHAN",92950654,0.29,2,"522994-U",""],
  ["KENCANA HL-LEIGHTON JV",91909932,0.29,1,"0","0102 A 2003 0548"],
  ["MENTA CONSTRUCTION",91636716,0.29,2,"83199-M",""],
  ["TAMASETIA RESOURCES",91088599,0.28,30,"434647-T",""],
  ["MZS POWER EQUIPMENT",89546270,0.28,2,"523309-H",""],
  ["ASIA BARU CONSTRUCTION",84702000,0.26,1,"145873-V","1006 A91 0184"],
  ["AMP CORPORATION",83777631,0.26,6,"447605-P","357-00043311"],
  ["LEADCOM",81270213,0.25,3,"340065-D","357-00042137"],
  ["N.A.Z MEDICAL SUPPLIERS",80701938,0.25,2,"1048345-K",""],
  ["HAKIKAT ENGINEERING",79520121,0.25,3,"295793-P",""],
  ["KIWITECH",79268800,0.25,1,"533440-X",""],
  ["BADANBAS",72704320,0.23,1,"","357-02005623"],
  ["A) ROYCE PHARMA B) FIDIN UNIVERSAL",70875000,0.22,1,"#N/A","#N/A"],
  ["MEGA COSMIC",70651000,0.22,1,"348544-H",""],
  ["KEJURUTERAAN KARISMA UNGGUL (S)",69625365,0.22,1,"755647-P",""],
  ["LIGHT SPEED ELECTRICAL",69475228,0.22,1,"589552-M",""],
  ["MAXVEC",66351811,0.21,5,"800113-U",""],
  ["SYSTEMATIC AVIATION SERVICES",64396055,0.20,4,"235829-W","357-00033739"],
  ["CHE SOM CONTRACTOR",63088598,0.20,1,"DBKK183400",""],
  ["JAVEL ENGINEERING",63000000,0.20,1,"304155-H",""],
  ["MESINIAGA",61480691,0.19,14,"79244-V","357-00009605"],
  ["POINTGATE SYSTEMS",60832495,0.19,3,"425095-U","357-00051085"],
  ["SAMA SAMA MAJU",60140000,0.19,2,"789094-K",""],
  ["ALAM LANGKAWI",58997186,0.18,1,"",""],
  ["UNI-WAY",58313870,0.18,2,"174874-A",""],
  ["ANFORT CORPORATION",58284848,0.18,6,"553176-D",""],
  ["MAJUTERA",58196465,0.18,3,"58787-H","1407 A 91 0091"],
  ["KUMPULAN KILANG SAWIT RISDA",57321300,0.18,2,"43130-X",""],
  ["HASCITA",56363897,0.18,1,"342131-H",""],
  ["UZAIMIN ENTERPRISE (ALOR SETAR)",56035993,0.17,1,"",""],
  ["GELIGA SISTEM",55392254,0.17,28,"167975-M",""],
  ["ENCORAL DIGITAL SOLUTIONS",55198101,0.17,9,"191053-W",""],
  ["TEKAD WARISAN",54100000,0.17,2,"LA517849-T",""],
  ["LAZCORP HOLDINGS",53924403,0.17,11,"478343-X",""],
  ["FAJAR DAYAMAS",53718808,0.17,1,"677762-H",""],
  ["ISMAIL IBRAHIM",53435589,0.17,3,"124320-M",""],
  ["GLOBAL KOMITED",52650000,0.16,9,"611788-P","357-02052193"],
  ["DUTA ALAM CONSTRUCTION",52171068,0.16,2,"","1104 A 2004 0016"],
  ["MARIMAS",51893878,0.16,1,"",""],
  ["NWK BUILDERS",51660430,0.16,1,"",""],
  ["MAZLEE CORPORATION",50099000,0.16,2,"457176-A",""],
  ["PINTAR USAHA",50021060,0.16,5,"835363-U",""],
  ["GEO-PROGRESSIVE",50000000,0.16,1,"585222-V",""],
  ["PERCETAKAN KESELAMATAN NASIONAL",49998900,0.16,1,"166151-T",""],
  ["MEXAJATI",49924920,0.16,2,"489855-M",""],
  ["AVP ENGINEERING",49859786,0.16,4,"305835-A","357-02035165"],
  ["MEWAH KOTA",49367505,0.15,2,"76368-X",""],
  ["I-ILHAM CORPORATION",49327589,0.15,1,"558192-X",""],
  ["SPA INTEGRATED",49315676,0.15,1,"252925-D","357-00038448"],
  ["ILIASCO CORPORATION",49173573,0.15,1,"329439-P",""],
  ["MVA ENGINEERING",47620191,0.15,1,"847932W",""],
  ["ERA FROZEN FOOD",47075814,0.15,5,"641171-W",""],
  ["ALMATAB",46859551,0.15,1,"",""],
  ["ALAM JITU BINA",46760546,0.15,1,"144519-H",""],
  ["EMAS RAMAI",46479947,0.15,1,"143016-T",""],
  ["ARAH JITU",45800000,0.14,1,"257419-T",""],
  ["BUMI HANDAL",45212680,0.14,1,"503111-H",""],
  ["PELANGI WIRA",44950000,0.14,1,"242243-X",""],
  ["PRINSIP HASIL",44753170,0.14,1,"633127P",""],
  ["TH TECHNOLOGIES",44243606,0.14,1,"",""],
  ["JOHAN TEKNOLOGI MAKLUMAT",43609409,0.14,2,"347474-H",""],
  ["ASTURI METAL BUILDERS",43587679,0.14,2,"326994-M",""],
  ["RAJA CHULAN DAN RAKAN",43363965,0.14,3,"357-00002306",""],
  ["ARTIMAL DE SYSTEM",43000000,0.13,5,"465281-M",""],
  ["PERLIS MARINE ENGINEERING",42880000,0.13,1,"235461-V","357-00026618"],
  ["BINA JAYA MANTAP",42674582,0.13,2,"280001-A",""],
  ["MATTS HOLDINGS",42559307,0.13,1,"205343-U",""],
  ["TERAS ERAMAJU",42028491,0.13,1,"777617-M",""],
  ["<p class=total>TOTAL","12222582170",38.17,909,"<p style=text-align:center;>-","<p style=text-align:center;>-"]
    
      ]);

 // Create and draw the google table visualization.
      
      var table = new google.visualization.Table(document.getElementById('table'));

      var formatter = new google.visualization.NumberFormat(
        {pattern:'##,###,###,###'}
      );
      formatter.format(data, 1); // Apply formatter to second column

      var formatter = new google.visualization.NumberFormat(
        {suffix: '%'}
      );
      formatter.format(data, 2); // Apply formatter to second column
  
      table.draw(data, {allowHtml: true, showRowNumber: true, height: 500, 'cssClassNames': cssClassNames});

      
}



