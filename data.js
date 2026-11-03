// AI Datacenter Dashboard data. Every figure carries source/url/asOf. null = TBD (not invented).
window.AIDC = {
updated: "2026-11-03",
sources: {
 cnbcCapex:{t:"CNBC — Microsoft, Google hold capex forecasts",u:"https://www.cnbc.com/2026/10/29/microsoft-google-ai-capex-estimates.html",d:"2026-10-29"},
 luminix:{t:"Luminix — Hyperscaler Capex Q3 2026 (compiles company guidance)",u:"https://www.useluminix.com/reports/industry-analysis/hyperscaler-capex-q3-2026/source/4",d:"2026-10-30"},
 cnbcAmzn:{t:"CNBC — Amazon Q3 2026: holds 2026 capex at $220B",u:"https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html",d:"2026-10-29"},
 orclReuters:{t:"Reuters — Oracle FQ1 FY27; capex target $90–95B",u:"https://www.reuters.com/technology/oracles-quarterly-revenue-beats-estimates-ai-boom-drives-cloud-demand-2026-09-10/",d:"2026-09-10"},
 orclID:{t:"Oracle Investor Day 2026 press release",u:"https://investor.oracle.com/investor-news/news-details/2026/Oracle-Investor-Day-2026-Accelerating-Value-Creation/default.aspx",d:"2026"},
 delloroCapex:{t:"Dell'Oro — DC capex surpasses $3T by 2030 (July 2026 forecast)",u:"https://www.delloro.com/news/ai-buildout-maintains-momentum-as-data-center-capex-surpasses-3-trillion-by-2030/",d:"2026-08-18"},
 delloroCapexJan:{t:"Dell'Oro — DC capex to $1.7T by 2030 (Jan 2026 forecast)",u:"https://www.delloro.com/news/ai-boom-drives-data-center-capex-to-1-7-trillion-by-2030/",d:"2026-02-11"},
 mck:{t:"McKinsey — The cost of compute: a $7 trillion race",u:"https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-cost-of-compute-a-7-trillion-dollar-race-to-scale-data-centers",d:"2025"},
 nvdaQ3:{t:"NVIDIA Q3 FY26 call (Kress): $3–4T annual AI infra by end of decade",u:"https://mlq.ai/earnings/highlight/NVDA-record-data-center-revenue-driven-by-str-00354c/",d:"2025-11-19"},
 nvdaGS:{t:"Huang reaffirms $3–4T at Goldman Communacopia",u:"https://cryptobriefing.com/nvidia-jensen-huang-ai-spending-forecast-2030/",d:"2026-09-10"},
 amdQ2:{t:"AMD Q2 2026 call — DC AI accelerator TAM ~$1.4T by 2030",u:"https://www.fool.com/earnings/call-transcripts/2026/08/11/amd-amd-q2-2026-earnings-call-transcript/",d:"2026-08-11"},
 amdDeck:{t:"AMD 2026 presentation (TAM slide)",u:"https://newsroom.amd.com/documents/2026/07/8b0162af-b535-4d1e-851e-6841a17c7a57.pdf",d:"2026-07"},
 spcxQ3:{t:"Yahoo Finance — SpaceX (SPCX) guides Q4-26 capex $35–40B; 9M capex $48.1B",u:"https://finance.yahoo.com/technology/ai/articles/spacex-guides-35-40-billion-143059230.html",d:"2026-10"},
 trendMem:{t:"TrendForce — Memory market $889.3B 2026 (DRAM $618.7B, NAND $270.6B), >$1.28T 2027",u:"https://www.trendforce.com/presscenter/news/20260529-13068.html",d:"2026-05-29"},
 trendSrvDram:{t:"TrendForce — 2Q26 server DRAM revenue $75.58B (+53% QoQ)",u:"https://www.trendforce.com/research/download/RP260907MR",d:"2026-09-07"},
 muFQ1:{t:"Micron FQ1 FY26 prepared remarks — HBM TAM ~$100B in 2028",u:"https://static.seekingalpha.com/uploads/sa_presentations/784/119784/original.pdf",d:"2025-12-17"},
 avgo:{t:"Broadcom AI outlook (>$100B AI chip revenue visibility 2027)",u:"https://finance.yahoo.com/technology/ai/articles/broadcom-ai-forecast-suggests-hyperscalers-211102090.html",d:"2026"},
 anet:{t:"Arista Q2 2026 — AI networking ≥$3.6B 2026 target",u:"https://www.tipranks.com/news/company-announcements/arista-networks-ai-fueled-earnings-call-signals-upbeat-path",d:"2026-08"},
 delloroSwitch:{t:"Dell'Oro — AI back-end switch sales approach $1T over 5 years",u:"https://www.delloro.com/news/ai-back-end-switch-sales-to-approach-1-trillion-over-the-next-five-years/",d:"2026"},
 delloroDCPI:{t:"Dell'Oro — DC physical infrastructure to $120B by 2030",u:"https://www.delloro.com/news/data-center-physical-infrastructure-market-forecast-to-reach-120-billion-by-2030/",d:"2026"},
 delloroDCPIq:{t:"Dell'Oro — DCPI +27% Y/Y to $14B in 2Q26",u:"https://www.delloro.com/news/data-center-physical-infrastructure-market-grows-27-percent-y-y-to-14-billion-in-2q-2026/",d:"2026"},
 delloroLC:{t:"Dell'Oro — Liquid cooling ~$7B by 2029",u:"https://www.delloro.com/news/data-center-liquid-cooling-market-to-approach-7-billion-by-2029-as-ai-deployments-accelerate/",d:"2026-01-08"},
 vrt:{t:"Vertiv Q3 2026 results; FY26 guide raised",u:"https://investors.vertiv.com/news/news-details/2026/Vertiv-Reports-Strong-Third-Quarter-2026-with-Net-Sales-Growth-of-61-Organic-Orders-Growth-over-100-and-Diluted-EPS-Growth-of-91-Adjusted-Diluted-EPS-Growth-of-78-Raises-Full-Year-2026-Guidance-Across-All-Key-Metrics/default.aspx",d:"2026-10-28"},
 gev:{t:"GE Vernova 3Q 2026 call transcript",u:"https://www.gevernova.com/sites/default/files/gev_webcast_transcript_10282026.pdf",d:"2026-10-28"},
 etn:{t:"Eaton Q2 2026 call",u:"https://www.fool.com/earnings/call-transcripts/2026/08/07/eaton-etn-q2-2026-earnings-call-transcript/",d:"2026-08-07"},
 dell:{t:"Reuters — Dell expects AI server revenue to double in FY27",u:"https://www.reuters.com/business/dell-forecasts-fiscal-2027-revenue-above-estimates-rising-ai-server-demand-2026-02-26/",d:"2026-02-26"},
 glw:{t:"Corning Q3 2026 results",u:"https://investor.corning.com/news-and-events/news/news-details/2026/Corning-Delivers-Outstanding-Third-Quarter-Results1/default.aspx",d:"2026-10"},
 delloroSemi:{t:"Dell'Oro — DC IT semiconductors & components (DC IT market >$1T in 2026)",u:"https://www.delloro.com/market-research/data-center-infrastructure/data-center-it-semiconductors-and-components/",d:"2026"},
 delloroSwitchAnnual:{t:"Dell'Oro — AI back-end switch market to surpass $100B (annual) by 2030 (Jan-26 forecast)",u:"https://www.delloro.com/news/ai-back-end-switch-market-will-push-past-100-billion-by-2030/",d:"2026-02-04"},
 nvdaQ2:{t:"NVIDIA Q2 FY27 CFO commentary (SEC) — revenue $96.2B, DC $89.0B",u:"https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm",d:"2026-08"},
 avgoQ3:{t:"Broadcom Q3 FY26 call — FY26 AI rev $58B; ~$115B FY27; $230B FY28",u:"https://www.fool.com/earnings/call-transcripts/2026/09/09/broadcom-avgo-q3-2026-earnings-call-transcript/",d:"2026-09-02"},
 anetQ2:{t:"Arista Q2 2026 call — FY26 rev ~$12.6B; AI fabrics ≥$3.5B",u:"https://www.investing.com/news/transcripts/earnings-call-transcript-arista-networks-tops-q2-2026-estimates-shares-jump-12-93CH-4835990",d:"2026-08-04"},
 dellQ2:{t:"Dell Q2 FY27 results — FY27 AI server rev guide $74B (from $60B)",u:"https://investors.delltechnologies.com/news-events/press-releases/detail/1653/dell-technologies-delivers-second-quarter-fiscal-2027-financial-results",d:"2026-09-01"},
 lc:{t:"LightCounting April 2026 forecast (paywalled TOC only)",u:"https://www.lightcounting.com/document/april-2026-market-forecast/379/toc",d:"2026-04"}
},
// Hyperscaler capex — company guidance ($B). Bases differ; see notes.
capex: [
 {co:"Amazon",tk:"AMZN",y2026:220,lo:220,hi:220,basis:"Cash capex",note:"Held at ~$220B on Q3 call; Jassy: 2027 'meaningfully more'. Q3 capex $77.3B.",src:"cnbcAmzn"},
 {co:"Alphabet",tk:"GOOGL",y2026:200,lo:195,hi:205,basis:"Cash PP&E",note:"Held $195–205B; 2027 to 'increase significantly' (number on Q4 call).",src:"cnbcCapex"},
 {co:"Microsoft",tk:"MSFT",y2026:170,lo:170,hi:170,basis:"Calendar, incl. finance leases",note:"Cut to ~$170B from ~$175B; third-party GPU capacity slipped to 1H27.",src:"cnbcCapex"},
 {co:"Meta",tk:"META",y2026:140,lo:135,hi:145,basis:"Incl. finance-lease principal",note:"Floor raised: $135–145B (was $130–145B).",src:"luminix"},
 {co:"Oracle",tk:"ORCL",y2026:92.5,lo:90,hi:95,basis:"Fiscal FY27 (Jun-27 YE)",note:"FY27 capex $90–95B maintained on FQ1 call (10 Sep); net cash capex capped ~$70B; FQ1 gross capex $28.5B.",src:"orclReuters"},
 {co:"SpaceX",tk:"SPCX",y2026:85.5,lo:83,hi:88,basis:"Total co. capex (incl. Starlink/Starship); implied",note:"Not a FY guide: 9M-26 actual $48.1B + Q4 guide $35–40B = ~$83–88B. Super Intelligence (xAI) seg. $16.4B of Q3 $19.6B.",src:"spcxQ3"}
],
// Overall TAM anchors (annual, $B unless noted)
tam: [
 {label:"NVIDIA: annual AI infra by 2030",lo:3000,hi:4000,year:2030,kind:"Mgmt",src:"nvdaGS"},
 {label:"Dell'Oro: global DC capex 2030 (Jul-26)",lo:3000,hi:3000,year:2030,kind:"Analyst",src:"delloroCapex",note:"'surpass $3T'"},
 {label:"Dell'Oro: global DC capex 2030 (Jan-26)",lo:1700,hi:1700,year:2030,kind:"Analyst",src:"delloroCapexJan"},
 {label:"AMD: total AI compute TAM 2030",lo:2000,hi:2000,year:2030,kind:"Mgmt",src:"amdQ2",note:"'approaching $2T'"},
 {label:"AMD: DC AI accelerator TAM 2030",lo:1400,hi:1400,year:2030,kind:"Mgmt",src:"amdQ2"},
 {label:"Big-4 + ORCL + SPCX 2026 capex",lo:893,hi:923,year:2026,kind:"Mgmt",src:"luminix",note:"Sum of guides above; mixed bases; SPCX implied"}
],
mckinsey:{total:5200,period:"cumulative 2025–2030, AI DCs (base case)",split:[["Compute & hardware ('technology developers')",3100],["Power, cooling, electrical ('energizers')",1300],["Construction / land ('builders')",800]],scen:[["Constrained",3700],["Base",5200],["Accelerated",7900]],src:"mck"},
layers: [
 {id:"semis",n:1,name:"Semiconductors",sub:"GPU · ASIC · CPU",icon:"◼︎",color:"#0071e3",
  tam:{v:"~$1.4T",what:"Annual: DC AI accelerator TAM in 2030 (AMD mgmt, >45% CAGR from ~$200B in 2025)",src:"amdQ2"},
  kpis:[["Server CPU TAM 2030","~$220B","AMD mgmt","amdQ2"],["NVIDIA FQ2'27 revenue","$96.2B","DC $89.0B (+117% Y/Y)","nvdaQ2"],["Broadcom AI rev FY26 / FY27","$58B / ~$115B","mgmt; FY28 $230B","avgoQ3"]],
  segs:[["Merchant GPU","Training + inference accelerators; NVLink rack-scale (GB300, Rubin)"],["Custom ASIC","XPUs designed with Broadcom / Marvell for hyperscalers"],["CPU","x86 EPYC/Xeon and Arm (Grace, Graviton, Axion, Cobalt)"]],
  cos:[["NVDA","NVIDIA","GPU, Grace CPU, NVLink"],["AMD","AMD","Instinct MI450 / Helios, EPYC"],["AVGO","Broadcom","Custom XPUs; AI rev $58B FY26 → ~$115B FY27 guide"],["GOOGL","Google TPU","In-house accelerator"],["AMZN","AWS Trainium / Inferentia","In-house"],["MSFT","Microsoft Maia / Cobalt","In-house"],["MRVL","Marvell","Custom ASICs"],["INTC","Intel","Xeon, Gaudi"],["TSM","TSMC","Foundry + CoWoS packaging"]]},
 {id:"memory",n:2,name:"Memory",sub:"HBM · DDR5 · CXL · NAND",icon:"▤",color:"#8944ab",
  tam:{v:"~$889B",what:"Annual: total memory market in 2026 (all end-markets, not DC-only): DRAM $618.7B + NAND $270.6B; >$1.28T in 2027 — TrendForce. HBM-only: ~$100B CY2028 (Micron)",src:"trendMem"},
  kpis:[["HBM TAM CY2028","~$100B","Micron mgmt","muFQ1"],["HBM TAM 2025","~$35B","Micron","muFQ1"],["DRAM market 2026","$618.7B","TrendForce (all DRAM)","trendMem"],["Server DRAM rev 2Q26","$75.58B","TrendForce","trendSrvDram"],["HBM CAGR '25–'28","~40%","Micron","muFQ1"],["DC-only memory TAM","TBD","No cited DC-only total found",null]],
  segs:[["HBM","Stacked DRAM co-packaged with GPUs/ASICs; HBM3E → HBM4"],["DDR5 / MRDIMM","Server main memory; content per server rising"],["CXL","Memory expansion / pooling"],["DC NAND / SSD","High-capacity QLC for AI data lakes"]],
  cos:[["MU","Micron","HBM, DDR5, DC SSD"],["000660.KS","SK hynix","HBM leader"],["005930.KS","Samsung","HBM, DDR5, NAND"],["SNDK","SanDisk","NAND"],["Kioxia","Kioxia","NAND"]]},
 {id:"net",n:3,name:"Networking",sub:"Ethernet · InfiniBand · Optics",icon:"⇄",color:"#1d8a3a",
  tam:{v:"> $100B",what:"Annual: AI back-end DC switch spending in 2030 — Dell'Oro Jan-26 forecast (a floor: Dell'Oro raised forecasts in Jul-26 but published only the cumulative ~$1T 2026–30). Switches only; optics/NICs excluded",src:"delloroSwitchAnnual"},
  kpis:[["Arista AI fabrics 2026","≥ $3.5B","mgmt target (FY rev ~$12.6B)","anetQ2"],["Arista scale-across TAM 2030","$15–20B","mgmt, annual","anetQ2"],["NVIDIA networking FQ2'27","record, +18% Q/Q","Spectrum-X 2.6× Y/Y","nvdaQ2"],["AI back-end switch 2026–30","~$1T","Dell'Oro, CUMULATIVE (not TAM)","delloroSwitch"],["Optical transceiver TAM","TBD","LightCounting paywalled","lc"]],
  segs:[["Scale-up","NVLink, UALink, Broadcom SUE"],["Scale-out back-end","Spectrum-X / InfiniBand / Tomahawk Ethernet"],["Front-end & DCI","Data center Ethernet, scale-across"],["Optics","800G → 1.6T transceivers, CPO, lasers, DSPs"]],
  cos:[["AVGO","Broadcom","Tomahawk / Jericho switch silicon"],["NVDA","NVIDIA Networking","InfiniBand, Spectrum-X, NVLink"],["ANET","Arista","AI Ethernet switches"],["CSCO","Cisco","Silicon One, switches"],["MRVL","Marvell","Optical DSPs, custom"],["COHR","Coherent","Transceivers, lasers"],["LITE","Lumentum","Lasers, optics"],["CRDO","Credo","AECs, SerDes"]]},
 {id:"power",n:4,name:"Power",sub:"Grid · Substation · UPS · PDU",icon:"ϟ",color:"#b25000",
  tam:{v:"$120B",what:"Annual: global DC physical infrastructure (power + thermal), annual by 2030, 22% CAGR — Dell'Oro",src:"delloroDCPI"},
  kpis:[["DCPI 2Q26","$14B","+27% Y/Y","delloroDCPIq"],["GE Vernova DC electrification orders","> $6B YTD","through 3Q26","gev"],["Eaton electrical backlog","+43% Y/Y","Q2 2026 (Q3 due 3 Nov)","etn"]],
  segs:[["Grid & generation","Interconnects, turbines, transformers"],["Medium voltage","Substations, switchgear"],["Critical power","UPS, batteries, generators"],["Rack power","Busway, PDUs, 800V DC architectures"]],
  cos:[["GEV","GE Vernova","Gas turbines, grid, electrification"],["ETN","Eaton","UPS, switchgear, PDUs"],["SU.PA","Schneider Electric","Electrical + cooling"],["VRT","Vertiv","UPS, power trains"],["ABBN.SW","ABB","Electrification"],["SIE.DE","Siemens","MV switchgear"],["CAT","Caterpillar","Gensets / turbines"]]},
 {id:"cool",n:5,name:"Cooling",sub:"Air · DLC · Immersion · CDU",icon:"❄︎",color:"#0a84a8",
  tam:{v:"~$7B",what:"Annual: global DC liquid-cooling manufacturer revenue by 2029 (≈$3B in 2025) — Dell'Oro. Liquid cooling only; total thermal mgmt is inside Power & Thermal DCPI ($120B 2030); no cited global cooling-only $ total found",src:"delloroLC"},
  kpis:[["Vertiv FY26 sales guide","$14.45–14.85B","+37–39% organic","vrt"],["Vertiv Q3 organic orders","> +100%","Y/Y","vrt"],["GPU TDP by 2029","> 4,000 W","Dell'Oro","delloroLC"]],
  segs:[["Air / rear-door","Legacy and hybrid racks"],["Direct-to-chip (single-phase)","Dominant architecture through decade"],["Two-phase / immersion","Selective adoption"],["CDUs & chillers","Heat rejection, fluid networks"]],
  cos:[["VRT","Vertiv (Liebert, CoolTera)","Leader in liquid cooling"],["CoolIT","CoolIT Systems","Cold plates, CDUs (private)"],["NVT","nVent","Liquid cooling, enclosures"],["Boyd","Boyd","Thermal (private)"],["AAON","Aaon","Hyperscale cooling"],["SU.PA","Schneider (Motivair)","CDUs"],["TT","Trane","Chillers"],["JCI","Johnson Controls","Chillers"]]},
 {id:"wire",n:6,name:"Wiring & Interconnect",sub:"Fiber · Copper · Connectors",icon:"〰",color:"#6e6e73",
  tam:{v:"TBD",what:"No cited annual global TAM found gathered yet. Corning targets a $10B photonics business by 2030.",src:"glw"},
  kpis:[["Corning Enterprise Networks","+84% Y/Y","Q3 2026","glw"],["Corning photonics target","$10B by 2030","mgmt","glw"],["AEC / copper TAM","TBD","—",null]],
  segs:[["Fiber & cabling","High-fiber-count trunks, MPO"],["Copper / AEC","In-rack NVLink copper spines, active electrical cables"],["Connectors","High-speed backplane / cable connectors"]],
  cos:[["GLW","Corning","Fiber, connectivity"],["APH","Amphenol","Connectors, copper cable"],["CRDO","Credo","Active electrical cables"],["TEL","TE Connectivity","Connectors"],["COHR","Coherent","Optical interconnect"]]},
 {id:"racks",n:7,name:"Racks · Servers · ODMs",sub:"OEM · ODM · rack-scale",icon:"▦",color:"#d70015",
  tam:{v:"> $1T",what:"Annual: data center IT market on track to exceed $1T in 2026 (servers & storage majority) — Dell'Oro",src:"delloroSemi"},
  kpis:[["Dell AI server rev FY27","$74B","guide raised from $60B, ~3× Y/Y","dellQ2"],["Super Micro / HPE AI guide","TBD","not yet gathered",null],["ODM AI rack share","TBD","—",null]],
  segs:[["OEM","Dell, HPE, Super Micro, Lenovo"],["ODM direct","Foxconn, Quanta, Wiwynn build for hyperscalers"],["Rack-scale systems","NVL72 / Helios integration & test"]],
  cos:[["DELL","Dell","AI servers; $74B FY27 guide, $95B backlog"],["SMCI","Super Micro","AI servers, DLC racks"],["HPE","HPE","AI systems"],["2317.TW","Foxconn (Hon Hai)","ODM, GB racks"],["2382.TW","Quanta","ODM"],["6669.TW","Wiwynn","ODM"]]},
 {id:"capex",n:8,name:"Hyperscaler CapEx",sub:"MSFT · GOOGL · AMZN · META · ORCL · SPCX",icon:"$",color:"#0066cc",
  tam:{v:"~$893–923B",what:"Annual: sum of 2026 capex guides: AMZN, GOOGL, MSFT, META (calendar) + ORCL FY27 + SpaceX implied CY26 ($83–88B) — mixed bases",src:"luminix"},
  kpis:[["Big-4 2026 guide","$720–740B","mixed bases","luminix"],["Oracle FY27","$90–95B","target","orclReuters"],["Amazon 2027","> $220B","'meaningfully more'","cnbcAmzn"]],
  segs:[["Compute","Servers & accelerators — largest share"],["Facilities","Shells, power, cooling (incl. leases)"],["MW buildout","GW-scale campuses; MW totals TBD per company"]],
  cos:[["AMZN","Amazon / AWS","~$220B 2026"],["GOOGL","Alphabet","$195–205B"],["MSFT","Microsoft","~$170B CY26"],["META","Meta","$135–145B"],["ORCL","Oracle","$90–95B FY27"],["SPCX","SpaceX (incl. xAI)","~$83–88B CY26 implied"]]}
],
whatsNewWeekOf:"2026-11-02",
whatsNewUpdated:"2026-11-02 morning scan (SGT)",
whatsNewEmpty:"No material CapEx/TAM changes since Q3 calls (29–30 Oct 2026).",
// Array shape {date, headline, detail?, url?, layer?, src?} — aggregated by master dashboard. url=null where article link not yet verified (never invented).
whatsNewThisWeek:[
 {date:"2026-11-03",layer:"capex",headline:"CapEx: no new company guidance since Q3 calls (29–30 Oct)",detail:"Amazon still budgeting ~$220B 2026 capex; Microsoft held at ~$170B (CNBC). AMD, Arista, Eaton and Supermicro report 3 Nov ET; Arm, Qualcomm, Coherent 4 Nov ET.",url:"https://www.businessbagel.com/big-techs-ai-sales-are-booming-but-the-building-bill-is-now-bigger-than-the-cash-coming-in/",src:"Business Bagel, 2026-11-02; CNBC, 2026-10-29; SharpeIQ calendar, 2026-11"},
 {date:"2026-11-02",layer:"capex",headline:"US data-center construction hits record $96B annual rate in September",detail:"Census Bureau: +8.6% m/m, +90% y/y (seasonally adjusted annual rate). Buildings only; excludes servers, network and most electrical gear.",url:"https://wolfstreet.com/2026/11/02/no-inflection-point-yet-near-exponential-data-center-boom-sends-shockwaves-to-industrial-economy-construction-hit-by-2nd-wave-of-inflation/",src:"US Census Bureau via Wolf Street, 2026-11-02"},
 {date:"2026-11-02",layer:"capex",headline:"S&P cuts Meta credit outlook to negative",detail:"Cites negative cash flow and uncertainty around capex plans (action late Fri 30 Oct). OpenAI reportedly cut its funding-round target to $20B from $30B (FT).",url:"https://fortune.com/2026/11/02/ai-boom-supply-crunch-capital-debt-bonds-capex-spending/",src:"Fortune, 2026-11-02"},
 {date:"2026-11-02",layer:"capex",headline:"AI data-center debt gets pricier: QTS paper shopped at 2.2–2.5 pts over Treasuries",detail:"Same Blackstone-backed issuer weighed ~1.7 pts six months ago.",url:"https://www.semafor.com/article/11/02/2026/blackstone-backed-data-center-operator-tests-ai-debt-fears",src:"Semafor, 2026-11-02"},
 {date:"2026-11-02",layer:"power",headline:"41 local data-center ballot measures go to voters on 3 Nov",detail:"All six DC measures decided earlier in 2026 went against development (Axios/Ballotpedia).",url:"https://fortune.com/2026/11/02/midterms-2026-bofa-ai-correction-risk-global-economy-goldman-tariffs-jobs/",src:"Fortune, 2026-11-02"}
]
};
// ===== Product catalog: Level -1 layer → -2 family → -3 product (qualitative; no invented $ figures) =====
window.AIDC.catalog={
semis:[
 {id:"gpu",name:"Merchant GPUs",pic:"gpu",blurb:"General-purpose AI accelerators sold to everyone — the workhorse of training and inference.",items:[
  {id:"nv-bw",name:"NVIDIA Blackwell / Blackwell Ultra (B200, B300)",company:"NVIDIA",pic:"gpu",blurb:"Dual-die GPU with HBM3E, FP4 Transformer Engine.",use:"Frontier-model training and high-throughput inference; ships in HGX 8-GPU boards and GB200/GB300 NVL72 racks.",detail:["Two reticle-size dies joined by a high-bandwidth die-to-die link, packaged on TSMC CoWoS-L","Stacks of HBM3E around the dies","5th-gen NVLink for 72-GPU single-domain racks","Liquid cooling standard at rack scale"]},
  {id:"nv-rubin",name:"NVIDIA Rubin / Vera Rubin NVL144",company:"NVIDIA",pic:"gpu",blurb:"Next-generation GPU paired with Vera Arm CPU, moving to HBM4.",use:"2026+ rack-scale AI factories.",detail:["HBM4 memory","Paired with Vera CPU (custom Arm cores)","NVLink 6 / rack-scale design","Annual cadence roadmap"]},
  {id:"amd-mi",name:"AMD Instinct MI350 / MI450 (Helios)",company:"AMD",pic:"gpu",blurb:"Chiplet GPU with large HBM capacity; Helios is AMD's rack-scale system.",use:"Inference with large models in memory; training at OpenAI, Meta, Oracle and others.",detail:["3D chiplet design (compute dies on I/O die)","Large HBM capacity per GPU","ROCm open software stack","Helios rack pairs MI450 with EPYC CPUs and Pensando NICs"]},
  {id:"intel-gaudi",name:"Intel Gaudi 3",company:"Intel",pic:"gpu",blurb:"AI accelerator with integrated Ethernet networking.",use:"Cost-focused enterprise training/inference.",detail:["On-die RoCE Ethernet ports for scale-out","HBM2E memory","Shipped via Dell, Supermicro, HPE"]}]},
 {id:"asic",name:"Custom ASICs / XPUs",pic:"asic",blurb:"Chips designed by hyperscalers (often with Broadcom or Marvell) for their own workloads.",items:[
  {id:"tpu",name:"Google TPU (Trillium v6e, Ironwood v7)",company:"Google · Broadcom",pic:"asic",blurb:"Tensor Processing Unit — systolic-array matrix engine.",use:"Trains and serves Gemini; rented on Google Cloud (incl. to Anthropic).",detail:["Systolic matrix-multiply units","Pods of thousands of chips on optical circuit switches","Ironwood is inference-focused with large HBM","Co-designed with Broadcom"]},
  {id:"trn",name:"AWS Trainium 2 / 3 & Inferentia 2",company:"Amazon · Annapurna Labs",pic:"asic",blurb:"AWS in-house training and inference chips.",use:"Powers Trn2 UltraServers and Project Rainier for Anthropic; lower cost per token on AWS.",detail:["NeuronLink chip-to-chip interconnect","HBM memory","Neuron SDK","Inferentia targets low-cost inference"]},
  {id:"maia",name:"Microsoft Maia 100 / 200",company:"Microsoft",pic:"asic",blurb:"Azure's custom AI accelerator.",use:"Azure OpenAI / Copilot inference.",detail:["TSMC advanced node with CoWoS","Liquid-cooled 'sidekick' rack design","Ethernet-based scale-out"]},
  {id:"mtia",name:"Meta MTIA",company:"Meta · Broadcom",pic:"asic",blurb:"Meta Training & Inference Accelerator.",use:"Ranking/recommendation and gen-AI inference at Meta.",detail:["Optimised for recommendation models","Co-designed with Broadcom"]},
  {id:"avgo",name:"Broadcom / Marvell custom XPU platforms",company:"Broadcom · Marvell",pic:"asic",blurb:"Design + IP + packaging service that turns a hyperscaler's architecture into silicon.",use:"Behind TPU, MTIA, OpenAI's chip and other XPUs.",detail:["SerDes, HBM PHY and 3.5D packaging IP","Broadcom: multiple XPU customers","Marvell: Trainium and Microsoft programs"]}]},
 {id:"cpu",name:"Server CPUs",pic:"cpu",blurb:"Host processors that feed accelerators and run general cloud workloads.",items:[
  {id:"epyc",name:"AMD EPYC (Turin, Venice)",company:"AMD",pic:"cpu",blurb:"x86 many-core server CPU.",use:"AI head nodes and general cloud compute.",detail:["Chiplet design, high core counts","Gaining share in cloud"]},
  {id:"xeon",name:"Intel Xeon 6 (Granite Rapids, Clearwater Forest)",company:"Intel",pic:"cpu",blurb:"x86 server CPU with P-core and E-core variants.",use:"Host CPU in many HGX systems.",detail:["P-core (performance) and E-core (density) lines","AMX matrix extensions"]},
  {id:"grace",name:"NVIDIA Grace / Vera",company:"NVIDIA",pic:"cpu",blurb:"Arm CPU coupled to GPUs over NVLink-C2C.",use:"Grace-Blackwell superchips (GB200/GB300).",detail:["Coherent CPU-GPU memory","LPDDR5X memory"]},
  {id:"armcloud",name:"Graviton · Axion · Cobalt",company:"AWS · Google · Microsoft",pic:"cpu",blurb:"Hyperscaler in-house Arm CPUs.",use:"Cheaper general compute; frees power budget for AI.",detail:["Arm Neoverse cores","Built on TSMC"]}]},
 {id:"fab",name:"Foundry & Packaging",pic:"wafer",blurb:"Where every AI chip is made — the CoWoS bottleneck.",items:[
  {id:"tsmc",name:"TSMC N3 / N2 + CoWoS",company:"TSMC",pic:"wafer",blurb:"Leading-edge wafers plus 2.5D packaging that joins logic and HBM.",use:"Makes nearly all leading AI accelerators.",detail:["CoWoS-S / -L interposers","SoIC 3D stacking","Capacity is a key supply constraint"]}]}],
memory:[
 {id:"hbm",name:"HBM (High-Bandwidth Memory)",pic:"hbm",blurb:"DRAM dies stacked vertically with TSVs and placed right next to the GPU.",items:[
  {id:"hbm3e",name:"HBM3E 8-high / 12-high",company:"SK hynix · Micron · Samsung",pic:"hbm",blurb:"Current-generation stack used on Blackwell, MI350, TPU, Trainium.",use:"Holds model weights & KV-cache at extreme bandwidth — the GPU's 'fuel line'.",detail:["8 or 12 DRAM dies stacked on a base logic die","Through-silicon vias (TSVs) connect the layers","1024-bit wide interface per stack","Micron highlights its power efficiency; SK hynix is volume leader"]},
  {id:"hbm4",name:"HBM4 / HBM4E",company:"SK hynix · Micron · Samsung",pic:"hbm",blurb:"Next generation: 2048-bit interface, logic base die (can be foundry-made, customizable).",use:"Rubin, MI450 and next-gen XPUs from 2026.",detail:["Doubles interface width vs HBM3E","Base die on logic process enables custom HBM","Taller stacks (12–16 high)"]}]},
 {id:"dram",name:"Server DRAM (DDR5 / MRDIMM / LPDDR5X)",pic:"dimm",blurb:"Main system memory for CPUs in AI and cloud servers.",items:[
  {id:"ddr5",name:"DDR5 RDIMM",company:"Samsung · SK hynix · Micron",pic:"dimm",blurb:"Registered DDR5 module — standard server memory.",use:"Host memory in every AI server; data preprocessing.",detail:["On-module PMIC & RCD","High-capacity 64–256GB modules"]},
  {id:"mrdimm",name:"MRDIMM",company:"Micron · SK hynix · Samsung",pic:"dimm",blurb:"Multiplexed-rank DIMM — more bandwidth per channel.",use:"Bandwidth-hungry CPU nodes (Xeon 6).",detail:["Two ranks multiplexed per channel","Drop-in DDR5 form factor"]},
  {id:"socamm",name:"LPDDR5X / SOCAMM",company:"Micron · Samsung · SK hynix",pic:"dimm",blurb:"Low-power mobile DRAM repackaged as a server module.",use:"Grace / Vera CPU memory in GB300-class systems.",detail:["Lower power per bit than DDR5","SOCAMM is serviceable/replaceable"]}]},
 {id:"cxl",name:"CXL Memory Expansion",pic:"cxl",blurb:"Adds pooled memory over PCIe-based CXL links.",items:[
  {id:"cxlmod",name:"CXL memory modules (CZ120, CMM-D, etc.)",company:"Micron · Samsung · SK hynix",pic:"cxl",blurb:"E3.S modules with DRAM behind a CXL controller.",use:"Extra capacity for in-memory databases, KV-cache, vector search.",detail:["CXL 2.0/3.x, PCIe physical layer","Memory pooling & tiering","Controllers from Astera Labs, Marvell, Montage"]}]},
 {id:"nand",name:"Data-center NAND / SSD",pic:"ssd",blurb:"Flash storage for datasets, checkpoints and inference caches.",items:[
  {id:"qlc",name:"High-capacity QLC SSDs",company:"Solidigm (SK hynix) · Samsung · Micron · SanDisk · Kioxia",pic:"ssd",blurb:"Very high-capacity drives replacing HDDs in AI data lakes.",use:"Training data lakes, checkpoints, RAG corpora.",detail:["QLC = 4 bits per cell","E3.L / U.2 form factors","Higher density per rack than HDD"]},
  {id:"tlc",name:"Performance TLC NVMe SSDs (PCIe Gen5/Gen6)",company:"Micron · Samsung · Kioxia · SanDisk",pic:"ssd",blurb:"Low-latency flash attached directly to GPU servers.",use:"Feeding GPUs, KV-cache offload, GPUDirect Storage.",detail:["PCIe Gen5 now, Gen6 next","E1.S / E3.S form factors"]}]}],
net:[
 {id:"sw",name:"Switches",pic:"switch",blurb:"Scale-out and scale-up fabrics linking GPUs.",items:[
  {id:"tomahawk",name:"Broadcom Tomahawk / Jericho",company:"Broadcom",pic:"switch",blurb:"Ethernet switch silicon.",use:"AI back-end Ethernet fabrics at hyperscalers.",detail:["Merchant silicon used by Arista, Celestica, white-box"]},
  {id:"spectrum",name:"NVIDIA Spectrum-X / Quantum InfiniBand / NVLink Switch",company:"NVIDIA",pic:"switch",blurb:"NVIDIA's full networking stack.",use:"Scale-up (NVLink) and scale-out (IB/Ethernet).",detail:["NVLink switch trays in NVL72","ConnectX / BlueField NICs"]},
  {id:"anet",name:"Arista 7800 / 7060 systems",company:"Arista · Cisco",pic:"switch",blurb:"Ethernet switch systems.",use:"Spine/leaf for AI clusters.",detail:["EOS software"]}]},
 {id:"opt",name:"Optics & Transceivers",pic:"optic",blurb:"Convert electrical signals to light over fiber.",items:[
  {id:"800g",name:"800G / 1.6T pluggable transceivers",company:"Coherent · Lumentum · Innolight · Eoptolink",pic:"optic",blurb:"OSFP modules with lasers and DSPs.",use:"GPU-to-switch and switch-to-switch links.",detail:["DSPs from Marvell, Broadcom","EML / silicon photonics lasers"]},
  {id:"cpo",name:"Co-packaged optics",company:"NVIDIA · Broadcom",pic:"optic",blurb:"Optics placed on the switch package to cut power.",use:"Next-gen switches.",detail:["Removes pluggable DSP power"]}]}],
power:[
 {id:"grid",name:"Grid & Generation",pic:"turbine",blurb:"Bringing hundreds of MW to a campus.",items:[
  {id:"gt",name:"Gas turbines & grid equipment",company:"GE Vernova · Siemens Energy",pic:"turbine",blurb:"On-site and grid generation, transformers.",use:"Power for GW campuses.",detail:["Long lead times for turbines and transformers"]}]},
 {id:"dist",name:"Distribution & Backup",pic:"ups",blurb:"Switchgear, UPS, PDUs and busways inside the hall.",items:[
  {id:"ups",name:"UPS, switchgear, PDUs, busway",company:"Eaton · Schneider · Vertiv · ABB",pic:"ups",blurb:"Conditions and backs up power to racks.",use:"Ride-through and distribution to 100kW+ racks.",detail:["Shift toward 800V DC architectures"]}]}],
cool:[
 {id:"dlc",name:"Liquid Cooling",pic:"cdu",blurb:"Coolant to cold plates on chips.",items:[
  {id:"cdu",name:"CDUs & cold plates",company:"Vertiv · CoolIT · nVent · Boyd",pic:"cdu",blurb:"Coolant distribution units pump liquid to cold plates.",use:"Required for GB200/GB300-class racks.",detail:["Liquid-to-liquid or liquid-to-air CDUs"]},
  {id:"imm",name:"Immersion tanks",company:"GRC · Submer · LiquidStack",pic:"cdu",blurb:"Servers submerged in dielectric fluid.",use:"Niche very-high-density deployments.",detail:["Single- or two-phase"]}]},
 {id:"air",name:"Air & Heat Rejection",pic:"chiller",blurb:"Chillers, CRAHs, rear-door heat exchangers.",items:[
  {id:"chl",name:"Chillers / CRAH / rear-door HX",company:"Vertiv · Trane · Johnson Controls · Carrier",pic:"chiller",blurb:"Rejects heat outside the building.",use:"All facilities; hybrid with liquid.",detail:["Higher water temps enable free cooling"]}]}],
wire:[
 {id:"cab",name:"Cables & Connectors",pic:"cable",blurb:"Copper and fiber that link everything.",items:[
  {id:"dac",name:"Copper DAC / AEC & backplanes",company:"Amphenol · Credo · TE Connectivity",pic:"cable",blurb:"Short-reach copper inside racks.",use:"NVLink spine cartridges, server-to-ToR.",detail:["AECs add retimers for reach"]},
  {id:"fiber",name:"Fiber & structured cabling",company:"Corning · CommScope",pic:"cable",blurb:"High-fiber-count cabling across halls.",use:"Scale-out networks.",detail:["AI clusters need many times more fiber"]}]}],
racks:[
 {id:"sys",name:"Rack-scale systems",pic:"rack",blurb:"Servers built and integrated into full racks.",items:[
  {id:"oem",name:"OEM AI servers",company:"Dell · Super Micro · HPE · Lenovo",pic:"rack",blurb:"Branded AI servers with support.",use:"Enterprise, neoclouds, sovereign AI.",detail:["Integrate GPUs, networking, liquid cooling"]},
  {id:"odm",name:"ODM rack integration",company:"Foxconn · Quanta · Wiwynn · Wistron",pic:"rack",blurb:"Build-to-print racks for hyperscalers.",use:"Bulk of GB200/GB300 rack output.",detail:["L10–L11 rack integration"]}]}],
capex:[
 {id:"hyp",name:"Hyperscaler builders",pic:"campus",blurb:"Who pays for it all — see Level -1 for cited 2026 guidance.",items:[
  {id:"big4",name:"AWS · Google · Microsoft · Meta · Oracle campuses",company:"Hyperscalers",pic:"campus",blurb:"GW-scale campuses and leases.",use:"Demand driver for every layer above.",detail:["MW buildout per company: TBD (not yet sourced)"]},
  {id:"spcx",name:"SpaceX / xAI Colossus campuses (Memphis TN, Mississippi)",company:"SpaceX (SPCX)",pic:"campus",blurb:"Colossus I & II AI compute campuses; 4th Memphis-area site in development.",use:"Grok training and GPU cloud rented to Anthropic, Google and others.",detail:["Nameplate compute 1.7 GW at 30-Sep-26 (co. Q3 results)","Q3-26 capex $19.6B, of which Super Intelligence $16.4B; Q4 guide $35–40B","Mgmt target >2 GW by end-2026"]}]}]
};
window.whatsNewThisWeek=window.AIDC.whatsNewThisWeek;
