/* Schnier family tree — Dingstede (Oldenburg) to Nebraska to Texas
   Sources: family Hofbuch, 1997 descendant chart, obituaries, passenger list,
   house plaque and cemetery photos from Dingstede, 2011 visit.
*/
const APP_VERSION = "1.8.0";

const PEOPLE = {
  hof: {
    id: "hof",
    name: "Dingstede Hof line",
    dates: "recorded from 1576",
    role: "Baumanns of Dingstede · Oldenburg",
    generation: -4,
    photos: ["farm-sign.jpg", "grave-plaque.jpg"],
    bio: "The Schnier farm at Dingstede (today a hamlet of Hatten, Landkreis Oldenburg, Lower Saxony) is documented in the family Hofbuch compiled for Heinz-Georg Schnier. The village itself appears in 1249 as Thingenstede — a thing-stead, a court place. Schnier / Schnieder / Snier men are listed there as Baumanns (farm holders) from the late 1500s: Dirich Snier in the Hatter corn-tax roll 1576–1585, then a continuous male line of farm heirs through the Thirty Years’ War, the 18th-century Grunderbe (heir-farm) system, and the 19th century. The house plaque still reads “J. Schnier Dingstede.” The cemetery stone reads “Ruhestätte der Familie Schnier · Dingstede.”",
    facts: [
      "1576–1585 Dirich Snier, Hatter corn-tax (Kornschuld).",
      "1643 Dierk Schnieder, Baumann, *1612 †1676; wife Grete Henning of Neuenhuntorf.",
      "His brother Marten Schnieder (*1615 †1661) served “im Kriegswesen” — the Thirty Years’ War.",
      "1685 Johann Diedrich Schnieder, Baumann, *1637 †1687; wife Grete Köhler of Dingstede.",
      "1693 Dierk Schnieder, Baumann, *1667 †1726; wife Trine Garms of Geveshausen.",
      "1728 Johann Schnieder, Baumann, *1701 †1747; wife Wendel Rodiek of Kirchkimmen. After his death she remarried Dierk von Seggern of Hohenböken — the same von Seggern kin that later married into the Nebraska line.",
      "1775 Gerd Henrich Schnier, Baumann, *1740 †1806; wife Gesche Marie Albers of Dingstede.",
      "1809 Arend Schnier, Baumann, *1785 †1863; first wife Gesche Barkemeyer of Dingstede, second wife Gesche Margret Würdemann of Kimmen."
    ],
    sources: [
      "Heinz-Georg Schnier & Traute Marschall geb. Schnier, Hofbeschreibung Nr. 7, Nutteler Straße 8.",
      "House plaque and family grave photographed at Dingstede, 11 May 2011.",
      "Village history: Dingstede first named 1249; parish moved from Ganderkesee to Hatten in 1758."
    ]
  },
  gerd1815: {
    id: "gerd1815",
    name: "Gerd Hinrich Schnier",
    dates: "1815 – 1871",
    role: "Baumann · Dingstede Hof heir",
    generation: -3,
    bio: "Gerd Hinrich Schnier, farmer, born 1815, died 1871. He married Alke Margret Petershagen of Habbrügge in 1844. She was born 1821, died 1904, daughter of Johann Hinrich Petershagen, a tenant farmer at Habbrügge. Gerd Hinrich became Grunderbe after his younger brother Johann Hinrich Arend, the intended heir, died in 1847.",
    facts: [
      "Wife: Alke Margret Petershagen, *1821 †1904.",
      "Children include Heinrich Arend (*1845 †1914), Gesine Margarete (*1850 †1932), Johann Gerhard (*1853 †1934) — the next farm heir — Christine Catharine (*1855 †1885), Anna Catharine (*1858 †1899), Gerhard Heinrich (*1861 †1863).",
      "Son Heinrich Arend bought a plot with buildings from Heinrich Egbers of Dingstede in 1877."
    ],
    sources: ["Hofbuch entry 1863, Gerd Hinrich Schnier."]
  },
  johann1853: {
    id: "johann1853",
    name: "Johann Gerhard Schnier",
    dates: "1853 – 1934",
    role: "Baumann · “Grandpa Schnier” of the farm notes",
    generation: -2,
    photos: ["grave-plaque.jpg"],
    bio: "Johann Gerhard Schnier, farmer, born 1853, died 1934. In 1878 he married Anna Sophie Margarete Tönjes of Hurrel (born 1855, died 1924), daughter of Gerd Hinrich Tönjes of Hurrel. They raised a large family on the Dingstede farm. Diphtheria in the early 1890s killed several of their children. Two sons left for America: Gerhard Hinrich in 1907 and Johann Gerhard a few years later. A family note records that Anna Sophie — grandpa’s sister, by then an old woman in Dingstede — answered the door when relatives visited in late 1971 or early 1972.",
    facts: [
      "Married 1878, Anna Sophie Margarete Tönjes of Hurrel, *1855 †1924.",
      "Thirteen children, 1878–1897.",
      "Diphtheria deaths: Bernhard Wilhelm 1890; Meta Catharine, Johann Hermann and Friedrich Bernhard 1892; Christine Catharine 1898."
    ],
    sources: [
      "Family typescript “Grandpa Schnier history.”",
      "Hofbuch entry 1871, Johann Gerhard Schnier."
    ]
  },
  anna1855: {
    id: "anna1855",
    name: "Anna Sophie Margarete Tönjes",
    dates: "1855 – 1924",
    role: "of Hurrel · farm wife at Dingstede",
    generation: -2,
    bio: "Anna Sophie Margarete Tönjes was born 1855 at Hurrel, daughter of Gerd Hinrich Tönjes. She married Johann Gerhard Schnier in 1878 and died in 1924. She buried several children during the diphtheria years and saw two sons leave for America.",
    facts: ["Daughter of Gerd Hinrich Tönjes, Hurrel.", "Mother of thirteen."],
    sources: ["Grandpa Schnier history; Hofbuch 1871."]
  },
  heinrich1878: {
    id: "heinrich1878",
    name: "Heinrich Gerhard Schnier",
    dates: "1878 – 1954",
    role: "Grunderbe who stayed in Dingstede",
    generation: -1,
    photos: ["hof-then-now.jpg"],
    bio: "Eldest son. He kept the home farm. First wife Regine Catharine Bruns of Hockensberg (*1887 †1922); children Merry, twins Georg Johann and Anneliese (1914), and Hans. Second wife Emma Osterthun of Munderloh (*1884 †1952), no children. Georg Johann (*1914 †1971) later held the farm with Lisa Wilhelmine Stolle; their son Heinz-Georg still lived on the Hof when the family book was compiled. The house was split into two dwellings in 1980.",
    facts: [
      "Twin grandchildren of this branch include Kai and Torben Marschall (1977).",
      "Farm photos in the Hofbuch show the thatched house circa 1965 and the rebuilt white gable in 2003."
    ],
    sources: ["Hofbuch entries 1935 and 1954."]
  },
  gerhard1884: {
    id: "gerhard1884",
    name: "Gerhard Hinrich (G. H.) Schnier",
    dates: "21 Oct 1884 – 28 Apr 1978",
    role: "Emigrant of 1907 · Bancroft / Pender farmer",
    generation: -1,
    photos: ["family-portrait.jpg"],
    bio: "Born 21 October 1884 at Dingstede, Oldenburg. At 22 he sailed from Bremen on the Kaiser Wilhelm der Grosse and landed at New York on 26 June 1907. The passenger list gives birthplace as “pingstede” (Dingstede). He married Adeline Henriette von Seggern on 29 August 1912. They farmed in Thurston County until 1919, then on a farm northwest of Bancroft, Cuming County. He belonged to St. Mark’s Lutheran Church in Pender and served on the council. He died 28 April 1978 at Valley View Nursing Home in Pender, age 93, and is buried at St. Mark’s Cemetery. Pallbearers included his grandson Dale Schnier.",
    facts: [
      "Baptized 30 November 1884 at Kirchhatten (Lutheran), Oldenburg emigrant register.",
      "Ship: Kaiser Wilhelm der Grosse, Bremen → New York, 26 June 1907. NARA T715 roll 930, page 106, line 18.",
      "Thurston County 1912–1919; Bancroft-area farm thereafter.",
      "Six children who lived to adulthood: Gerald, Agnes, Melba, Lester, Kenneth, Wilma.",
      "Brother Johann Gerhard also emigrated and was shot dead in America in 1929.",
      "Sister Anna Sophie Osterloh opened the farmhouse door in Dingstede in 1971/72."
    ],
    sources: [
      "Funeral folder, St. Mark’s Lutheran Church, Pender, 1 May 1978.",
      "Newspaper obituary (hand-dated 28 April 1978).",
      "New York Passenger Lists, 1820–1957.",
      "Oldenburg Auswanderer database: Schnier, Gerhard Heinrich."
    ]
  },
  adeline: {
    id: "adeline",
    name: "Adeline Henriette von Seggern",
    dates: "20 Jun 1892 – 19 Mar 1974",
    role: "Nebraska-born · Oldenburg roots",
    generation: -1,
    photos: ["family-portrait.jpg"],
    bio: "Adeline (“Lena”) Henriette von Seggern was born 20 June 1892 in Thurston County, Nebraska, to Johann Diedrich von Seggern (born 9 August 1857 at Hohenböken / Ganderkesee, Oldenburg) and Caroline Faubel (born 10 October 1869 in Cleveland, Ohio). The von Seggerns and Schniers had already intermarried in the Oldenburg villages — Wendel Rodiek Schnieder married a von Seggern of Hohenböken in 1748. Adeline married Gerhard on 29 August 1912, raised six children on the Bancroft farm, and died 19 March 1974 at Pender. She is the seated woman with the corsage in the mid-century family portrait.",
    facts: [
      "Parents married 12 March 1887 at West Point, Cuming County, Nebraska.",
      "Mother Caroline Faubel died 4 November 1949; father Johann Diedrich died 28 February 1921.",
      "Von Seggern is still a Dingstede village name."
    ],
    sources: [
      "auswanderer-oldenburg.de person I141953.",
      "G. H. Schnier obituary.",
      "Family portrait, mid-20th century."
    ]
  },
  diphtheria: {
    id: "diphtheria",
    name: "The diphtheria children",
    dates: "1890 – 1898",
    role: "Siblings lost at Dingstede",
    generation: -1,
    bio: "Diphtheria tore through the Johann Gerhard household in the 1890s. Bernhard Wilhelm died in 1890; Meta Catharine (born 1881), Johann Hermann (born 1883) and Friedrich Bernhard (born 1886) died in 1892; baby Christine Catharine (born 1897) died in 1898. The Hofbuch and the English family notes agree on the cause.",
    facts: [
      "Meta Catharine *1881 †1892.",
      "Johann Hermann *1883 †1892.",
      "Friedrich Bernhard *1886 †1892.",
      "Bernhard Wilhelm *1887 †1890.",
      "Christine Catharine *1897 †1898."
    ],
    sources: ["Grandpa Schnier history; Hofbuch 1871 child list."]
  },
  annasophie1889: {
    id: "annasophie1889",
    name: "Anna Sophie Osterloh",
    dates: "1889 – 1972",
    role: "Sister who stayed · Dingstede",
    generation: -1,
    photos: ["osterloh-hof.jpg", "sportverein.jpg"],
    bio: "Anna Sophie Schnier married Wilhelm Osterloh of Dingstede (*1881 †1939) in 1910. They lived on the Osterloh Hof, a brick Gulfhaus that burned 17 July 1900 and was rebuilt; Wilhelm bought it in 1908. Family notes say she answered the door when American relatives visited Dingstede in late 1971 or early 1972. She died in 1972. B. Schnier and F. Schnier were among the 37 founders of the Dingstede sports club Einigkeit on 9 February 1921.",
    facts: [
      "Osterloh Hof photo shows the family with horses in front of the rebuilt gable.",
      "Sports club Einigkeit founded 9 Feb 1921; dissolved 22 Nov 1937."
    ],
    sources: ["Grandpa Schnier history; Hofstelle Wilfried Osterloh caption; Sportverein note."]
  },
  johann1893: {
    id: "johann1893",
    name: "Johann Gerhard Schnier",
    dates: "1893 – 1929",
    role: "Second emigrant · killed in America",
    generation: -1,
    bio: "Younger brother of Gerhard Hinrich. He also emigrated to America and, according to both the English family notes and the German Hofbuch, was shot dead there in 1929.",
    facts: ["Born 1893 at Dingstede.", "Died 1929 in the United States."],
    sources: ["Grandpa Schnier history; Hofbuch 1871."]
  },
  gerald: {
    id: "gerald",
    name: "Gerald Schnier",
    dates: "surviving Feb 1998 · Norfolk, Nebraska",
    role: "Son of G. H. · father of Dale",
    generation: 0,
    bio: "Gerald Schnier, first branch on the 1997 American descendant chart, married Delora Alvina Breitbarth at Pender on 9 May 1935. They lived in the Norfolk, Nebraska area. Delora’s 1998 obituary still lists Gerald as surviving. Their children were Ronald, Dale, Larry (deceased by 1997), and Keith.",
    facts: [
      "Married 9 May 1935, Pender, Nebraska.",
      "Four sons: Ronald, Dale, Larry († before 7 July 1997), Keith."
    ],
    sources: [
      "1997 descendant chart: “das Nachkommen von Gerhard Hinrich Schnier.”",
      "Delora Schnier obituary, Norfolk Daily News, February 1998."
    ]
  },
  delora: {
    id: "delora",
    name: "Delora Alvina Breitbarth",
    dates: "13 Aug 1916 – 25 Feb 1998",
    role: "of Bancroft · Gerald’s wife",
    generation: 0,
    bio: "Delora Alvina Breitbarth was born 13 August 1916 at Bancroft, Cuming County, Nebraska, to Fred and Helene (Yost) Breitbarth. She married Gerald Schnier at Pender on 9 May 1935. She died 25 February 1998 at Norfolk and is buried at Hillcrest Cemetery, Norfolk. She was survived by her husband, three sons, eight grandchildren and six great-grandchildren, and was preceded by one son (Larry).",
    facts: [
      "Brothers Glen (Norwalk, California) and Vernon (Sun City, Arizona); sister Joan Fleming (Eagan, Minnesota)."
    ],
    sources: ["Find a Grave 178783791; Norfolk Daily News obituary extracts."]
  },
  dale: {
    id: "dale",
    name: "Dale Schnier",
    dates: "son of Gerald · pallbearer 1978",
    role: "Father of Steven and Tiffany",
    generation: 1,
    bio: "Dale Schnier is the second son of Gerald and Delora on the 1997 chart. He married Sandra Oehlerts (the chart marks the marriage as later divorced). Their children are Tiffany and Steven. Dale was a pallbearer at his grandfather G. H. Schnier’s funeral in Pender on 1 May 1978. The next generation’s public records run Ames and Sergeant Bluff, Iowa, then North Texas. Family accounts also note Air National Guard service and later years in Nocona, Texas.",
    facts: [
      "Pallbearer, G. H. Schnier funeral, 1 May 1978, with Lanny Schnier, Leland Schnier, Dennis Johnson, Clayton Cooper and Mert Nixon.",
      "1997 chart: Dale *2 (# Sandra) — Tiffany *3, Steven *3 (& Lori).",
      "Later associated with Nocona, Texas."
    ],
    sources: ["1997 descendant chart; G. H. funeral folder; family."]
  },
  sandra: {
    id: "sandra",
    name: "Sandra “Sandy” Oehlerts Schnier",
    dates: "daughter of Sylvester and Eleanor",
    role: "Steven’s mother · maiden name Oehlerts",
    generation: 1,
    bio: "Sandra (Sandy) Oehlerts is the daughter of Sylvester Hans Henry Oehlerts (1911–1987) and Eleanor Marie Moritz Oehlerts (1914–1996) of Remsen, Plymouth County, Iowa. The 1997 Schnier descendant chart lists her as Sandra, Dale Schnier’s first wife, with the chart’s mark for a later divorce. Public indexes later also use Sandra Fauth. She is the mother of Tiffany and Steven Dale Schnier.",
    facts: [
      "Grew up in the Remsen / Plymouth County Oehlerts family.",
      "Brother John Herman Oehlerts (1947–1966) was killed in a two-car crash on Highway 3 east of Marcus.",
      "A sister was already Mrs. William Monfore of Greeley, Colorado, by June 1966."
    ],
    sources: ["Family identification; 1997 descendant chart; Remsen crash clippings, June 1966."]
  },
  herman_oehlerts: {
    id: "herman_oehlerts",
    name: "Herman Henry Oehlerts",
    dates: "1878 – 1962",
    role: "of Tama, then Plymouth County, Iowa",
    generation: -1,
    photos: ["herman-mary-stone.jpg"],
    bio: "Herman Henry Oehlerts was born 1878 in Tama County, Iowa. He married Mary Spiecker (also 1878, Benton County, Iowa) at Plymouth County. They farmed and lived in Plymouth County and are buried together at Remsen Community Cemetery under a pink granite double stone: Herman 1878–1962, Mary 1878–1962. Ancestry trees in the family papers give his father as born 1834 and his mother as born 1843 — matching Caroline Oehlerts (1844–1923) also buried at Remsen.",
    facts: [
      "Birth: Tama County, Iowa, 1878.",
      "Marriage and residence: Plymouth County, Iowa.",
      "Sister Mathilda “Tillie” Oehlerts married Gustav “Gust” Strohbeen (1862– ) at Pipestone, Minnesota; they also lived and died in Plymouth County.",
      "Alice Elizabeth Oehlerts, also born Tama County, appears in related trees."
    ],
    sources: [
      "Ancestry screenshots: Hansen Hamdorf Family Tree; Roots Digger Family Tree.",
      "Remsen Community Cemetery, Block 1 East / Lot 41.",
      "Henry Spiecker obituary, 1952: survivor Mrs. Herman Oehlerts of Remsen."
    ]
  },
  mary_spiecker: {
    id: "mary_spiecker",
    name: "Mary Spiecker Oehlerts",
    dates: "1878 – 1962",
    role: "of Benton County · Herman’s wife",
    generation: -1,
    photos: ["herman-mary-stone.jpg"],
    bio: "Mary Spiecker was born 1878 in Benton County, Iowa. Ancestry trees list her father as born 1842 and her mother as born 1841. She married Herman Henry Oehlerts in Plymouth County. Her brother Henry Spiecker (c. 1876–1952), an unmarried retired farmer, died at Sacred Heart Hospital in Le Mars; the obituary names Mrs. Herman Oehlerts of Remsen as his sister. Mary and Herman died the same year, 1962, and share a stone at Remsen.",
    facts: [
      "Birth: 1878, Benton County, Iowa.",
      "Lived and died in Plymouth County.",
      "Brother Henry Spiecker buried from Moeller Funeral Chapel, Remsen, Rev. Paul Wuebben officiating — the same pastor who later buried John Oehlerts."
    ],
    sources: ["Ancestry: Roots Digger Family Tree; Le Mars Globe Post, 22 Dec 1952; Remsen stone."]
  },
  sylvester_oehlerts: {
    id: "sylvester_oehlerts",
    name: "Sylvester Hans Henry Oehlerts",
    dates: "1911 – 1987",
    role: "of Remsen · Sandra’s father",
    generation: 0,
    photos: ["sylvester-eleanor-stone.jpg", "sylvester-eleanor-stone-2.jpg"],
    bio: "Sylvester Hans Henry Oehlerts was born 1911 in Plymouth County, Iowa, son of Herman Henry Oehlerts and Mary Spiecker. He married Eleanor Marie Moritz (1914–1996) in Cherokee County, Iowa. They lived at Remsen — the June 1966 clippings are addressed to Sylvester Oehlerts, Rt. 3, Remsen. He died in 1987 and is buried with Eleanor at Remsen Community Cemetery, Block 2 East, Lot 25.",
    facts: [
      "Birth: 1911, Plymouth County.",
      "Marriage: Cherokee County, Iowa.",
      "Rural route 3, Remsen, at the time of his son John’s funeral.",
      "Stone: SYLVESTER 1911–1987."
    ],
    sources: [
      "Ancestry: Hansen Hamdorf Family Tree.",
      "Remsen Community Cemetery transcription, 2003.",
      "Family gravestone photographs."
    ]
  },
  eleanor_oehlerts: {
    id: "eleanor_oehlerts",
    name: "Eleanor Marie Moritz Oehlerts",
    dates: "1914 – 1996",
    role: "of Remsen · Sandra’s mother",
    generation: 0,
    photos: ["sylvester-eleanor-stone.jpg", "sylvester-eleanor-stone-2.jpg"],
    bio: "Eleanor Marie Moritz was born 1914. She married Sylvester Hans Henry Oehlerts in Cherokee County. They raised their family at Remsen, including John Herman (1947–1966), a daughter who by 1966 was Mrs. William Monfore of Greeley, Colorado, and Sandra (Sandy), later mother of Steven Dale Schnier. Eleanor died in 1996. The double stone at Remsen reads Eleanor 1914–1996 / Sylvester 1911–1987.",
    facts: [
      "Maiden name Moritz, per Ancestry trees in the family papers.",
      "Lived Plymouth County / Remsen.",
      "Buried Remsen Community Cemetery, Block 2 East, Lot 25, with Sylvester and near their son John."
    ],
    sources: ["Ancestry: Hansen Hamdorf Family Tree; Remsen stones; 1966 funeral notice."]
  },
  john_oehlerts: {
    id: "john_oehlerts",
    name: "John Herman Oehlerts",
    dates: "1 Feb 1947 – 1966",
    role: "Sandra’s brother · killed on Highway 3",
    generation: 1,
    photos: ["john-oehlerts-stone.jpg", "crash-clipping.jpg", "crash-clipping-2.jpg"],
    bio: "John Herman Oehlerts was born 1 February 1947 at Remsen. He graduated from Remsen High School in May 1965 and was working as a machinist at Cherokee. Late on a Saturday night he was a passenger in a Pontiac driven westbound by Gary Fiedler, 20, of Remsen, when it met a Rambler driven by David E. Preston, 32, of Cleghorn, head-on on Highway 3 about a mile and a half east of the Marcus junction. John and Preston were killed. Four other Remsen-area young men in the two cars were injured. Funeral services were at St. Paul Evangelical Lutheran Church, Remsen, Rev. Paul Wuebben officiating; burial in Remsen City Cemetery under direction of Moeller Funeral Home. Survivors named in the paper: parents Mr. and Mrs. Sylvester H. Oehlerts of Remsen, and a sister, Mrs. William Monfore of Greeley, Colorado.",
    facts: [
      "Born 1 February 1947, Remsen.",
      "May 1965 graduate, Remsen High School.",
      "Machinist at Cherokee at the time of death.",
      "Crash: Highway 3, 1½ miles east of Marcus, Saturday night; clippings dated 15 June 1966.",
      "Stone at Remsen photographed by the family; cemetery lot shared with Sylvester and Eleanor."
    ],
    sources: [
      "Remsen / northwest Iowa newspaper clippings saved as “Sylvester Oehlerts, Rt. 3, Remsen, Iowa, 6-15-66.”",
      "Family gravestone photograph, Remsen Community Cemetery."
    ]
  },
  monfore_sister: {
    id: "monfore_sister",
    name: "Mrs. William Monfore",
    dates: "living 1966 · Greeley, Colorado",
    role: "Sandra’s sister",
    generation: 1,
    bio: "The June 1966 obituaries for John Herman Oehlerts name one sister besides the parents: Mrs. William Monfore of Greeley, Colorado. First name is not given in the clippings. Greeley was then a major cattle-feeding town; the Monfore / Monfort name is well known there, but the clipping does not identify which William Monfore she married.",
    facts: ["Named as surviving sister of John Oehlerts, June 1966."],
    sources: ["Remsen crash obituaries, June 1966."]
  },
  ronald: {
    id: "ronald",
    name: "Ronald Schnier",
    dates: "living 1997",
    role: "Brother of Dale",
    generation: 1,
    bio: "Eldest son of Gerald and Delora. Married Suzi. Children Randy (Randall; married Connie; children Jeffrey and Becky) and Rusty (Russell; married Lisa; son Alex).",
    facts: ["1997 chart generation 2 under Gerald."],
    sources: ["1997 descendant chart."]
  },
  larry: {
    id: "larry",
    name: "Larry Schnier",
    dates: "† before July 1997",
    role: "Brother of Dale",
    generation: 1,
    bio: "Third son of Gerald and Delora. Marked deceased on the 1997 chart. Married Tanice. Children Jonnie (married Jim Albin; children Addison and Jaxson) and Jasey.",
    facts: ["The + beside his name is the chart’s mark for verstorben."],
    sources: ["1997 descendant chart; Delora obituary."]
  },
  keith: {
    id: "keith",
    name: "Keith Schnier",
    dates: "living 1997",
    role: "Brother of Dale",
    generation: 1,
    bio: "Youngest son of Gerald and Delora. Married Camille. Children Brian (divorced from Gillian; son Christian) and Allison.",
    facts: ["1997 chart generation 2 under Gerald."],
    sources: ["1997 descendant chart."]
  },
  steven: {
    id: "steven",
    name: "Steven Dale Schnier",
    dates: "b. 17 June 1972",
    role: "Focus person · TI analog / power · business development",
    generation: 2,
    bio: "Steven Dale Schnier was born 17 June 1972, son of Dale Schnier and Sandra Oehlerts. The 1997 family chart already lists him as Steven *3 (& Lori). Public records place him in Ames (Iowa State) and Sergeant Bluff, Iowa, before North Texas. He spent a career at Texas Instruments in Richardson / Dallas in business development, product definition, applications support and analog/power electronics — medical imaging, wireless infrastructure, thermal design and low-noise signal chains. He holds an MBA from the University of Dallas. He retired from TI in 2026.",
    facts: [
      "Born 17 June 1972.",
      "Married Lori, an Iowa State electrical engineer who also took an MBA at the University of Dallas.",
      "Sister: Tiffany.",
      "Four children with Lori: Jacob, then triplets Julia, Christian, and Annalise — all Plano East High School graduates.",
      "Jacob, Julia, and Christian attended Texas Tech University. Annalise is studying electrical engineering at the University of Arkansas.",
      "Great-grandson of Gerhard Hinrich Schnier of Dingstede and Adeline von Seggern.",
      "LinkedIn (Richardson): business development, product definition, applications support and pricing at Texas Instruments.",
      "Guest lecture for University of Texas at Dallas Master of Science in Systems Engineering and Management students."
    ],
    sources: [
      "1997 descendant chart.",
      "LinkedIn: Steven Schnier, Texas Instruments, Richardson.",
      "Texas Instruments feature on low-noise signal chains, 5 July 2023.",
      "Altium Academy interview on PCB thermal design."
    ]
  },
  lori: {
    id: "lori",
    name: "Lori Ann Schnier",
    dates: "living · McKinney / DFW",
    role: "Electrical engineer · realtor / escrow",
    generation: 2,
    bio: "Lori is named as Steven’s wife on the 1997 chart. She earned a B.S. in Electrical Engineering at Iowa State University and an MBA at the University of Dallas — the same graduate school as Steven — and later worked in semiconductor marketing before moving into North Texas real estate and title work. In 2022 she publicly announced a role as Sales Executive for Allegiance Title in McKinney.",
    facts: [
      "B.S.E.E., Iowa State University.",
      "MBA, University of Dallas.",
      "Realtor and title / escrow work, McKinney.",
      "Sales Executive, Allegiance Title — McKinney (announced 2022 on LinkedIn).",
      "Four children: Jacob, and triplets Julia, Christian, and Annalise."
    ],
    sources: [
      "1997 chart.",
      "LinkedIn post by Lori Schnier, November 2022 (Allegiance Title, McKinney)."
    ]
  },
  tiffany: {
    id: "tiffany",
    name: "Tiffany Schnier Lockman",
    dates: "living · Omaha metro",
    role: "Sister of Steven · foodservice sales",
    generation: 2,
    bio: "Tiffany Schnier Lockman is Dale and Sandra’s daughter and Steven’s sister. She graduated from Sergeant Bluff-Luton High School in Sergeant Bluff, Iowa, with the class of 1989. Alumni listings give her occupation as market development manager at PepsiCo; later public professional listings place her in Midwest foodservice sales and account management (Hormel, Unilever, H.J. Heinz, PepsiCo Foodservice, TEAM Software). Her daughter is Morgan Lockman.",
    facts: [
      "Sergeant Bluff-Luton High School, class of 1989.",
      "Market development / foodservice sales career, including PepsiCo.",
      "Daughter: Morgan Lockman."
    ],
    sources: [
      "1997 descendant chart.",
      "Sergeant Bluff-Luton High School alumni listing (Tiffany Lockman, née Schnier, class of 1989).",
      "Public professional listings."
    ]
  },
  morgan: {
    id: "morgan",
    name: "Morgan Lockman",
    dates: "daughter of Tiffany",
    role: "Daughter of Tiffany Schnier Lockman",
    generation: 3,
    bio: "Morgan Lockman is the daughter of Tiffany Schnier Lockman, niece of Steven Dale Schnier.",
    facts: ["Daughter of Tiffany Schnier Lockman."],
    sources: ["Family."]
  },
  randy: {
    id: "randy",
    name: "Randy Schnier",
    dates: "son of Ronald",
    role: "Son of Ronald Schnier",
    generation: 2,
    bio: "Randy (Randall) Schnier is a son of Ronald Schnier and Suzi. The 1997 chart lists him as Randall, married to Connie, with children Jeffrey and Becky.",
    facts: ["Also listed as Randall on the 1997 chart.", "Brother of Rusty."],
    sources: ["1997 descendant chart; family."]
  },
  rusty: {
    id: "rusty",
    name: "Rusty Schnier",
    dates: "son of Ronald",
    role: "Son of Ronald Schnier",
    generation: 2,
    bio: "Rusty (Russell) Schnier is a son of Ronald Schnier and Suzi. The 1997 chart lists him as Russell, married to Lisa, with son Alex.",
    facts: ["Also listed as Russell on the 1997 chart.", "Brother of Randy."],
    sources: ["1997 descendant chart; family."]
  },
  jonnie: {
    id: "jonnie",
    name: "Jonnie Schnier Albin",
    dates: "daughter of Larry",
    role: "Daughter of Larry Schnier",
    generation: 2,
    bio: "Jonnie is a daughter of Larry Schnier and Tanice. The 1997 chart lists her as married to Jim Albin, with children Addison and Jaxson.",
    facts: ["Sister of Jasey.", "Married Jim Albin (1997 chart)."],
    sources: ["1997 descendant chart; family."]
  },
  jasey: {
    id: "jasey",
    name: "Jasey Schnier",
    dates: "child of Larry",
    role: "Child of Larry Schnier",
    generation: 2,
    bio: "Jasey is a child of Larry Schnier and Tanice, sibling of Jonnie.",
    facts: ["Sibling of Jonnie."],
    sources: ["1997 descendant chart; family."]
  },
  brian: {
    id: "brian",
    name: "Brian Schnier",
    dates: "son of Keith",
    role: "Son of Keith Schnier",
    generation: 2,
    bio: "Brian Schnier is a son of Keith Schnier and Camille. The 1997 chart notes a later divorce from Gillian and a son, Christian.",
    facts: ["Brother of Allison."],
    sources: ["1997 descendant chart; family."]
  },
  allison: {
    id: "allison",
    name: "Allison Schnier",
    dates: "daughter of Keith",
    role: "Daughter of Keith Schnier",
    generation: 2,
    bio: "Allison Schnier is a daughter of Keith Schnier and Camille, sister of Brian.",
    facts: ["Sister of Brian."],
    sources: ["1997 descendant chart; family."]
  },
  jacob: {
    id: "jacob",
    name: "Jacob Schnier",
    dates: "eldest child of Steven and Lori",
    role: "Plano East · Texas Tech",
    generation: 3,
    bio: "Jacob Schnier is the eldest of Steven and Lori’s four children. He grew up in the Plano / North Texas area and graduated from Plano East Senior High School. After high school he attended Texas Tech University in Lubbock. His younger siblings Julia, Christian, and Annalise are triplets.",
    facts: [
      "Graduate, Plano East Senior High School, Plano, Texas.",
      "Texas Tech University (TTU), Lubbock."
    ],
    sources: ["Family."]
  },
  julia: {
    id: "julia",
    name: "Julia Schnier",
    dates: "triplet · daughter of Steven and Lori",
    role: "Plano East · Texas Tech",
    generation: 3,
    bio: "Julia Schnier is one of the triplets born to Steven Dale Schnier and Lori Ann Schnier — with Christian and Annalise. She grew up in the Plano / North Texas area and graduated from Plano East Senior High School. She earned a B.S. in Nursing at Texas Tech University, passed the NCLEX, and is a licensed registered nurse.",
    facts: [
      "Triplet with Christian and Annalise.",
      "Graduate, Plano East Senior High School, Plano, Texas.",
      "B.S. Nursing, Texas Tech University; NCLEX / licensed RN."
    ],
    sources: ["Family."]
  },
  christian: {
    id: "christian",
    name: "Christian Schnier",
    dates: "triplet · son of Steven and Lori",
    role: "Plano East · Texas Tech",
    generation: 3,
    bio: "Christian Schnier is one of the triplets born to Steven Dale Schnier and Lori Ann Schnier — with Julia and Annalise. He grew up in the Plano / North Texas area and graduated from Plano East Senior High School. After high school he attended Texas Tech University in Lubbock.",
    facts: [
      "Triplet with Julia and Annalise.",
      "Graduate, Plano East Senior High School, Plano, Texas.",
      "Texas Tech University (TTU), Lubbock."
    ],
    sources: ["Family."]
  },
  annalise: {
    id: "annalise",
    name: "Annalise Schnier",
    dates: "triplet · daughter of Steven and Lori",
    role: "Plano East · Arkansas electrical engineering",
    generation: 3,
    bio: "Annalise Schnier is one of the triplets born to Steven Dale Schnier and Lori Ann Schnier — with Julia and Christian. She grew up in the Plano / North Texas area and graduated from Plano East Senior High School. She is studying Electrical Engineering at the University of Arkansas in Fayetteville — the same profession as her mother Lori (Iowa State EE) and close to her father Steven’s work in analog and power electronics at Texas Instruments.",
    facts: [
      "Triplet with Julia and Christian.",
      "Graduate, Plano East Senior High School, Plano, Texas.",
      "Electrical Engineering, University of Arkansas, Fayetteville."
    ],
    sources: ["Family."]
  },
  agnes: {
    id: "agnes",
    name: "Agnes Schnier Johnson",
    dates: "of Pender · living 1978",
    role: "Daughter of G. H.",
    generation: 0,
    bio: "Agnes married Carl Lawrence Johnson and lived at Pender. She survived her father in 1978. The 1997 chart lists children Dennis (Dianne) — Christine Reynolds, Russell, Teresa — and Duane (Clara), with further Johnson, Canarsky and Stouder descendants.",
    facts: ["Pallbearer at G. H.’s funeral: Dennis Johnson."],
    sources: ["G. H. obituary; 1997 chart."]
  },
  melba: {
    id: "melba",
    name: "Melba Schnier Cooper",
    dates: "of Bancroft · living 1997",
    role: "Daughter of G. H.",
    generation: 0,
    bio: "Melba married Glenn Cooper (deceased by 1997) and lived at Bancroft. Children Gary (Cindee), Clayton (Amy) and Glenda Gatzemeyer. Clayton Cooper was a pallbearer for G. H. in 1978.",
    facts: ["1997 chart generation 1 under Gerhard Hinrich."],
    sources: ["G. H. obituary; 1997 chart."]
  },
  lester: {
    id: "lester",
    name: "Lester Schnier",
    dates: "of Bancroft · living 1978",
    role: "Son of G. H.",
    generation: 0,
    bio: "Lester of Bancroft survived his father in 1978. He married Lois Altemester (deceased by 1997). Children Leslie Suhr and Lanny Schnier. Lanny was a pallbearer in 1978.",
    facts: ["Bancroft — the same neighborhood as the G. H. home place."],
    sources: ["G. H. obituary; 1997 chart."]
  },
  kenny: {
    id: "kenny",
    name: "Kenneth Schnier",
    dates: "of Pender · † before 1997",
    role: "Son of G. H.",
    generation: 0,
    bio: "Kenneth (“Kenny”) of Pender survived his father in 1978 and is marked deceased on the 1997 chart. He married Delilah Fenke. Sons Richard, Leland and Clinton. Leland Schnier was a pallbearer in 1978.",
    facts: ["Pender — St. Mark’s Lutheran, the family church."],
    sources: ["G. H. obituary; 1997 chart."]
  },
  wilma: {
    id: "wilma",
    name: "Wilma Schnier Nixon",
    dates: "of Wakefield · living 1997",
    role: "Daughter of G. H.",
    generation: 0,
    bio: "Wilma married Ivan Nixon (deceased by 1997) and lived at Wakefield. Children Merlin, Eldon, Janice Stalling, Lonnie, and further Nixon, Starzl and Vander Veen descendants. Mert Nixon was a pallbearer in 1978.",
    facts: ["1997 chart pages 2–3 carry this branch."],
    sources: ["G. H. obituary; 1997 chart."]
  }
};

const LINKS = [
  { from: "hof", to: "gerd1815", type: "parent" },
  { from: "gerd1815", to: "johann1853", type: "parent" },
  { from: "johann1853", to: "anna1855", type: "spouse" },
  { from: "johann1853", to: "heinrich1878", type: "parent" },
  { from: "johann1853", to: "gerhard1884", type: "parent" },
  { from: "anna1855", to: "gerhard1884", type: "parent" },
  { from: "johann1853", to: "diphtheria", type: "parent" },
  { from: "johann1853", to: "annasophie1889", type: "parent" },
  { from: "johann1853", to: "johann1893", type: "parent" },
  { from: "gerhard1884", to: "adeline", type: "spouse" },
  { from: "gerhard1884", to: "gerald", type: "parent" },
  { from: "adeline", to: "gerald", type: "parent" },
  { from: "gerhard1884", to: "agnes", type: "parent" },
  { from: "gerhard1884", to: "melba", type: "parent" },
  { from: "gerhard1884", to: "lester", type: "parent" },
  { from: "gerhard1884", to: "kenny", type: "parent" },
  { from: "gerhard1884", to: "wilma", type: "parent" },
  { from: "gerald", to: "delora", type: "spouse" },
  { from: "gerald", to: "ronald", type: "parent" },
  { from: "gerald", to: "dale", type: "parent" },
  { from: "delora", to: "dale", type: "parent" },
  { from: "gerald", to: "larry", type: "parent" },
  { from: "gerald", to: "keith", type: "parent" },
  { from: "herman_oehlerts", to: "mary_spiecker", type: "spouse" },
  { from: "herman_oehlerts", to: "sylvester_oehlerts", type: "parent" },
  { from: "mary_spiecker", to: "sylvester_oehlerts", type: "parent" },
  { from: "sylvester_oehlerts", to: "eleanor_oehlerts", type: "spouse" },
  { from: "sylvester_oehlerts", to: "sandra", type: "parent" },
  { from: "eleanor_oehlerts", to: "sandra", type: "parent" },
  { from: "sylvester_oehlerts", to: "john_oehlerts", type: "parent" },
  { from: "eleanor_oehlerts", to: "john_oehlerts", type: "parent" },
  { from: "sylvester_oehlerts", to: "monfore_sister", type: "parent" },
  { from: "eleanor_oehlerts", to: "monfore_sister", type: "parent" },
  { from: "dale", to: "sandra", type: "spouse", dashed: true },
  { from: "dale", to: "steven", type: "parent" },
  { from: "sandra", to: "steven", type: "parent" },
  { from: "dale", to: "tiffany", type: "parent" },
  { from: "sandra", to: "tiffany", type: "parent" },
  { from: "steven", to: "lori", type: "spouse" },
  { from: "steven", to: "jacob", type: "parent" },
  { from: "lori", to: "jacob", type: "parent" },
  { from: "steven", to: "julia", type: "parent" },
  { from: "lori", to: "julia", type: "parent" },
  { from: "steven", to: "christian", type: "parent" },
  { from: "lori", to: "christian", type: "parent" },
  { from: "steven", to: "annalise", type: "parent" },
  { from: "lori", to: "annalise", type: "parent" },
  { from: "tiffany", to: "morgan", type: "parent" },
  { from: "ronald", to: "randy", type: "parent" },
  { from: "ronald", to: "rusty", type: "parent" },
  { from: "larry", to: "jonnie", type: "parent" },
  { from: "larry", to: "jasey", type: "parent" },
  { from: "keith", to: "brian", type: "parent" },
  { from: "keith", to: "allison", type: "parent" }
];

const GENERATION_LABELS = {
  "-4": "Dingstede Hof · 1500s–1800s",
  "-3": "19th-century heir",
  "-2": "Johann Gerhard’s household",
  "-1": "1907 generation",
  "0": "Nebraska children of G. H.",
  "1": "Gerald’s sons",
  "2": "Steven’s generation",
  "3": "Morgan, Jacob, and the triplets"
};

const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");
const panel = document.getElementById("panel");
const modal = document.getElementById("modal");
const searchBox = document.getElementById("search");
const genFilter = document.getElementById("genFilter");

let selected = "steven";
let hoverId = null;
let view = { x: 0, y: 0, scale: 1 };
let dragging = false;
let moved = false;
let last = { x: 0, y: 0 };
const nodes = {};

function layout() {
  const cols = {};
  Object.values(PEOPLE).forEach((p) => {
    const g = String(p.generation);
    if (!cols[g]) cols[g] = [];
    cols[g].push(p);
  });
  const order = {
    hof: 0, gerd1815: 0,
    johann1853: 0, anna1855: 1,
    heinrich1878: 0, gerhard1884: 1, adeline: 2, diphtheria: 3, annasophie1889: 4, johann1893: 5, herman_oehlerts: 6, mary_spiecker: 7,
    gerald: 0, delora: 1, agnes: 2, melba: 3, lester: 4, kenny: 5, wilma: 6, sylvester_oehlerts: 7, eleanor_oehlerts: 8,
    ronald: 0, dale: 1, sandra: 2, larry: 3, keith: 4, john_oehlerts: 5, monfore_sister: 6,
    randy: 0, rusty: 1, tiffany: 2, steven: 3, lori: 4, jonnie: 5, jasey: 6, brian: 7, allison: 8,
    morgan: 0, jacob: 1, julia: 2, christian: 3, annalise: 4
  };
  Object.keys(cols).forEach((g) => {
    cols[g].sort((a, b) => (order[a.id] ?? 50) - (order[b.id] ?? 50));
  });
  const gens = Object.keys(cols).map(Number).sort((a, b) => a - b);
  const cardW = 214;
  const cardH = 66;
  const colW = 232;
  const rowH = 128;
  const maxCount = Math.max(...gens.map((g) => cols[String(g)].length));
  const treeW = maxCount * colW;
  gens.forEach((g, i) => {
    const list = cols[String(g)];
    const rowW = list.length * colW;
    const startX = 80 + (treeW - rowW) / 2;
    list.forEach((p, j) => {
      nodes[p.id] = { id: p.id, x: startX + j * colW, y: 50 + i * rowH, w: cardW, h: cardH };
    });
  });
}

function fitToSteven() {
  const n = nodes.steven;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  view.scale = Math.min(1.05, Math.max(0.42, Math.min(w / 980, h / 720)));
  view.x = w * 0.5 - (n.x + n.w / 2) * view.scale;
  view.y = h * 0.42 - (n.y + n.h / 2) * view.scale;
}

function worldFromEvent(e) {
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left - view.x) / view.scale,
    y: (e.clientY - r.top - view.y) / view.scale
  };
}

function hit(pt) {
  return Object.values(nodes).find(
    (n) => pt.x >= n.x && pt.x <= n.x + n.w && pt.y >= n.y && pt.y <= n.y + n.h
  );
}

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}

function draw() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(view.x, view.y);
  ctx.scale(view.scale, view.scale);

  const q = searchBox.value.trim().toLowerCase();
  const gf = genFilter.value;

  const rowYs = {};
  Object.values(nodes).forEach((n) => {
    const g = String(PEOPLE[n.id].generation);
    if (rowYs[g] == null) rowYs[g] = n.y;
  });
  Object.keys(rowYs).forEach((g) => {
    ctx.fillStyle = "rgba(232, 215, 160, 0.55)";
    ctx.font = "600 12px 'Source Serif 4', Georgia, serif";
    const label = GENERATION_LABELS[g] || g;
    ctx.fillText(label, 16, rowYs[g] + 18);
  });

  LINKS.forEach((l) => {
    const a = nodes[l.from];
    const b = nodes[l.to];
    if (!a || !b) return;
    ctx.beginPath();
    ctx.strokeStyle = l.type === "spouse" ? "#c4a35a" : "#8a7348";
    ctx.lineWidth = l.type === "spouse" ? 2.2 : 1.5;
    ctx.setLineDash(l.dashed ? [6, 5] : []);
    if (l.type === "spouse") {
      const left = a.x < b.x ? a : b;
      const right = a.x < b.x ? b : a;
      const y = left.y + left.h / 2;
      ctx.moveTo(left.x + left.w, y);
      ctx.lineTo(right.x, y);
    } else {
      const ax = a.x + a.w / 2;
      const ay = a.y + a.h;
      const bx = b.x + b.w / 2;
      const by = b.y;
      const my = (ay + by) / 2;
      ctx.moveTo(ax, ay);
      ctx.bezierCurveTo(ax, my, bx, my, bx, by);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  });

  Object.values(nodes).forEach((n) => {
    const p = PEOPLE[n.id];
    const matchGen = !gf || String(p.generation) === gf;
    const matchQ = !q || p.name.toLowerCase().includes(q) || (p.role || "").toLowerCase().includes(q);
    const dim = !matchGen || !matchQ;
    const isSel = n.id === selected;
    const isHov = n.id === hoverId;
    ctx.fillStyle = isSel ? "#fff1cf" : isHov ? "#fff8ea" : "#f4ead4";
    ctx.globalAlpha = dim ? 0.28 : 1;
    ctx.strokeStyle = isSel ? "#2f6f5e" : n.id === "steven" ? "#6b3e2e" : "#c4a35a";
    ctx.lineWidth = isSel ? 3 : n.id === "steven" ? 2 : 1.4;
    roundRect(ctx, n.x, n.y, n.w, n.h, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#2a2118";
    ctx.font = "600 13px 'Source Serif 4', Georgia, serif";
    ctx.fillText(p.name, n.x + 10, n.y + 22, n.w - 20);
    ctx.font = "italic 11px 'Source Serif 4', Georgia, serif";
    ctx.fillStyle = "#5c4e3d";
    ctx.fillText(p.dates, n.x + 10, n.y + 40, n.w - 20);
    ctx.font = "10.5px 'Source Serif 4', Georgia, serif";
    ctx.fillText(GENERATION_LABELS[String(p.generation)] || "", n.x + 10, n.y + 56, n.w - 20);
    ctx.globalAlpha = 1;
  });
  ctx.restore();
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function renderPanel(id) {
  const p = PEOPLE[id];
  if (!p) return;
  const facts = (p.facts || []).map((f) => `<li>${esc(f)}</li>`).join("");
  const src = (p.sources || []).map((s) => `<li>${esc(s)}</li>`).join("");
  const pics = (p.photos || [])
    .map((src) => `<img src="${esc(src)}" alt="${esc(p.name)}" />`)
    .join("");
  panel.innerHTML = `
    <p class="kicker">${esc(GENERATION_LABELS[String(p.generation)] || "")}</p>
    <h2 id="personName">${esc(p.name)}</h2>
    <p class="dates">${esc(p.dates)}</p>
    <div class="role">${esc(p.role)}</div>
    <p class="bio">${esc(p.bio)}</p>
    ${pics ? `<div class="thumbs">${pics}</div>` : ""}
    <ul class="facts">${facts}</ul>
    <div class="sources"><strong>Sources</strong><ul>${src}</ul></div>
    <div class="note">Direct line from the Dingstede Hofbuch and the 7 July 1997 American descendant chart. Living people’s private details are omitted. Dashed spouse line marks a marriage the 1997 chart records as later divorced.</div>
    <footer class="panel-foot">Schnier Family Tree · Dingstede → Bancroft → Texas · family papers + public records</footer>
  `;
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}
function select(id, open = true) {
  selected = id;
  renderPanel(id);
  draw();
  if (open) openModal();
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

canvas.addEventListener("mousedown", (e) => {
  dragging = true;
  moved = false;
  last = { x: e.clientX, y: e.clientY };
});
window.addEventListener("mouseup", () => { dragging = false; });
window.addEventListener("mousemove", (e) => {
  if (dragging) {
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
    view.x += dx;
    view.y += dy;
    last = { x: e.clientX, y: e.clientY };
    draw();
  } else {
    const n = hit(worldFromEvent(e));
    const next = n ? n.id : null;
    if (next !== hoverId) {
      hoverId = next;
      draw();
    }
  }
});
canvas.addEventListener("click", (e) => {
  if (moved) return;
  const n = hit(worldFromEvent(e));
  if (n) select(n.id);
});
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  const pt = worldFromEvent(e);
  const factor = e.deltaY < 0 ? 1.08 : 0.92;
  const next = Math.min(2.2, Math.max(0.4, view.scale * factor));
  view.x = e.clientX - canvas.getBoundingClientRect().left - pt.x * next;
  view.y = e.clientY - canvas.getBoundingClientRect().top - pt.y * next;
  view.scale = next;
  draw();
}, { passive: false });

searchBox.addEventListener("input", draw);
genFilter.addEventListener("change", draw);
document.getElementById("resetView").addEventListener("click", () => { fitToSteven(); draw(); });
document.getElementById("focusSteven").addEventListener("click", () => {
  select("steven");
  fitToSteven();
  draw();
});

function touchPoint(t) {
  return { clientX: t.clientX, clientY: t.clientY };
}
function pinchDistance(a, b) {
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy);
}
let pinchStart = null;

canvas.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    dragging = true;
    moved = false;
    last = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    pinchStart = null;
  } else if (e.touches.length === 2) {
    dragging = false;
    pinchStart = {
      dist: pinchDistance(e.touches[0], e.touches[1]),
      scale: view.scale,
      midX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      midY: (e.touches[0].clientY + e.touches[1].clientY) / 2
    };
  }
}, { passive: true });

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (e.touches.length === 2 && pinchStart) {
    const dist = pinchDistance(e.touches[0], e.touches[1]);
    const next = Math.min(2.2, Math.max(0.4, pinchStart.scale * (dist / pinchStart.dist)));
    const r = canvas.getBoundingClientRect();
    const mx = pinchStart.midX - r.left;
    const my = pinchStart.midY - r.top;
    const wx = (mx - view.x) / view.scale;
    const wy = (my - view.y) / view.scale;
    view.scale = next;
    view.x = mx - wx * next;
    view.y = my - wy * next;
    draw();
    return;
  }
  if (dragging && e.touches.length === 1) {
    const t = e.touches[0];
    const dx = t.clientX - last.x;
    const dy = t.clientY - last.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
    view.x += dx;
    view.y += dy;
    last = { x: t.clientX, y: t.clientY };
    draw();
  }
}, { passive: false });

canvas.addEventListener("touchend", (e) => {
  if (e.touches.length === 0) {
    if (dragging && !moved && last) {
      const fake = { clientX: last.x, clientY: last.y };
      const n = hit(worldFromEvent(fake));
      if (n) select(n.id);
    }
    dragging = false;
    pinchStart = null;
  }
});

function formatCount(n) {
  return Number(n).toLocaleString("en-US");
}

function setMeta(visits) {
  const el = document.getElementById("appMeta");
  if (!el) return;
  const visitText = visits == null ? "visits —" : (visits === 1 ? "1 visit" : `${formatCount(visits)} visits`);
  el.textContent = `v${APP_VERSION} · ${visitText}`;
}

async function trackVisits() {
  setMeta(null);
  const key = "schnier-tree-visits";
  const endpoints = [
    "https://abacus.jasoncameron.dev/hit/schnier-family-tree/visits",
    "https://api.counterapi.dev/v2/steveschnier/family-tree/up"
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) continue;
      const data = await res.json();
      const n = data.value ?? data.count ?? data.hits ?? data;
      if (typeof n === "number" && n >= 0) {
        localStorage.setItem(key, String(n));
        setMeta(n);
        return;
      }
    } catch (err) {
      /* try next */
    }
  }
  const local = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(local));
  setMeta(local);
}

layout();
select("steven", false);
setMeta(null);
trackVisits();
window.addEventListener("resize", resize);
window.addEventListener("orientationchange", () => setTimeout(resize, 250));
requestAnimationFrame(() => {
  resize();
  fitToSteven();
  draw();
});

