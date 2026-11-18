// AI Datacenter Dashboard data. Every figure carries source/url/asOf. null = TBD (not invented).
window.AIDC = {
updated: "2026-11-18",
updated_sgt: "18 Nov 2026, 8:24 AM",
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
  kpis:[["DCPI 2Q26","$14B","+27% Y/Y","delloroDCPIq"],["GE Vernova DC electrification orders","> $6B YTD","through 3Q26","gev"],["Eaton electrical backlog","+43% Y/Y","Q2 2026 figure; Q3 results were reported 3 Nov 2026","etn"]],
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
whatsNewWeekOf: "2026-11-12",
whatsNewUpdated: "2026-11-18 8:24 AM SGT",
whatsNewEmpty:"No material CapEx/TAM changes since Q3 calls (29–30 Oct 2026).",

comingUp: [
 {
  "date": "2026-11-15",
  "time": "Program 15–20 Nov; exhibits 17–19 Nov",
  "event": "SC26 supercomputing conference",
  "status": "Confirmed",
  "note": "Official dates page. City was not on that page, so none is stated here.",
  "src": "SC26 dates page",
  "url": "https://sc26.supercomputing.org/all-dates-deadlines/"
 },
 {
  "date": "2026-11-23",
  "time": "4:00 p.m. CT / 5:00 p.m. ET (~06:00 24 Nov SGT)",
  "event": "HPE Q4 FY26 earnings call",
  "status": "Confirmed",
  "note": "Quarter ending 31 Oct 2026. HPE newsroom release dated 2 Nov 2026. The release does not say whether results are posted before the call.",
  "src": "HPE newsroom",
  "url": "https://www.hpe.com/us/en/newsroom/press-release/2026/11/hpe-to-present-live-audio-webcast-of-fiscal-2026-fourth-quarter-earnings-conference-call.html"
 },
 {
  "date": "2026-11-24",
  "time": "3:30 p.m. CST / 4:30 p.m. ET (~05:30 25 Nov SGT)",
  "event": "Dell Technologies Q3 FY27 results",
  "status": "Confirmed",
  "note": "Dell’s IR events page lists the results at this time. It does not, on that listing, say whether the release is before or after the close.",
  "src": "Dell IR events",
  "url": "https://investors.delltechnologies.com/news-events/events"
 },
 {
  "date": "2026-11-30",
  "time": "30 Nov–4 Dec, Las Vegas",
  "event": "AWS re:Invent 2026",
  "status": "Confirmed",
  "note": "AWS events page. Specific chip or Trainium announcements are not listed there.",
  "src": "AWS events page",
  "url": "https://aws.amazon.com/events/reinvent/"
 },
 {
  "date": "2026-12-01",
  "time": "Call 1:30 p.m. PT / 4:30 p.m. ET (~05:30 2 Dec SGT)",
  "event": "Marvell Technology Q3 FY27 earnings",
  "status": "Confirmed",
  "note": "Custom AI silicon/optics. IR release dated 6 Nov 2026 says call follows the results release.",
  "src": "Marvell IR",
  "url": "https://investor.marvell.com/news-events/press-releases/detail/1041/marvell-technology-inc-announces-conference-call-to-review-third-quarter-of-fiscal-year-2027-financial-results"
 },
 {
  "date": "2026-12-01",
  "time": "Results after the US close; call 2:00 p.m. PT / 5:00 p.m. ET (~06:00 2 Dec SGT)",
  "event": "Credo Q2 FY27 earnings call",
  "status": "Confirmed",
  "note": "Quarter ended 31 Oct 2026. Credo IR release dated 11 Nov 2026. Results go out the same day after the close; the call starts at 2:00 p.m. PT.",
  "src": "Credo IR",
  "url": "https://investors.credosemi.com/news-events/news/news-details/2026/Credo-Schedules-Second-Quarter-Fiscal-Year-2027-Financial-Results-Conference-Call/default.aspx"
 },
 {
  "date": "2026-12-09",
  "time": "After the US close; call 2:00 p.m. PT / 5:00 p.m. ET (~06:00 10 Dec SGT)",
  "event": "Broadcom Q4 and FY26 results",
  "status": "Confirmed",
  "note": "Broadcom news release dated 9 Nov 2026. Fiscal fourth quarter and full-year results and business outlook.",
  "src": "Broadcom news release",
  "url": "https://www.broadcom.com/company/news/financial-releases/64841"
 }
],
// Array shape {date, headline, detail?, url?, layer?, src?} — aggregated by master dashboard. Optional published_at / published_clock are real publication clocks only. The array is the rolling window as of the SGT stamp (12–18 Nov 2026). url stays null only when a link is not verified.
whatsNewThisWeek: [
 {
  "date": "2026-11-17",
  "published_at": "2026-11-17T16:20:00-05:00",
  "layer": "semis",
  "headline": "NVIDIA Q3 FY27: revenue $115.8B (+103% y/y); Data Center $107.6B; Vera Rubin NVL72 has shipped; Q4 outlook $130.0B ±3%",
  "detail": "NVIDIA newsroom, also on GlobeNewswire at 17 Nov 2026, 4:20 p.m. ET. Quarter ended 25 Oct 2026. Revenue was $115.8 billion, up 20% from the previous quarter and up 103% from a year ago. Data Center revenue was $107.6 billion, up 21% sequentially and up 110% from a year ago. SEC CFO commentary splits that Data Center total into Hyperscale $60.1 billion (up 23% q/q and 71% y/y) and AI Clouds, Industrial, & Enterprise $47.5 billion (up 18% q/q and 195% y/y); those two lines add up to the $107.6 billion and are not extra. The release says Vera Rubin NVL72 has shipped, and that NVIDIA ramped production and began shipping it, calling that the fastest product ramp in the company’s history. Q4 FY27 outlook, which includes an additional week: revenue is expected to be $130.0 billion, plus or minus 3%. NVIDIA is not assuming any Data Center compute revenue from China. GAAP and non-GAAP gross margins are expected to be 71.0% to 72.0%. CFO commentary says shipments of Data Center Hopper products to China during the quarter were $2.4 billion, and that supply commitments increased from $279 billion last quarter to $390 billion, primarily multi-year memory procurement. The same commentary describes credit-support guarantees of up to $105 billion for approximately 4.25 GW across nine buildings at SB Energy’s PORTS-Pike campus in Ohio, under 20-year leases to OpenAI, taking effect building by building when each building is completed and ready for service, with the first expected in fiscal 2029. The release also says NVIDIA announced an agreement to acquire Hugging Face; no price is stated. CFO commentary: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/q3fy27cfocommentary.htm",
  "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027",
  "src": "NVIDIA newsroom and GlobeNewswire, 2026-11-17 4:20 p.m. ET; SEC CFO commentary"
 },
 {
  "date": "2026-11-17",
  "layer": "semis",
  "headline": "Microsoft: Azure Cobalt 200 VMs are generally available; Maia 300 is not a new announcement",
  "detail": "Microsoft Azure blog, 17 Nov 2026 (Rani Borkar and Arun Kishan): general availability of Azure Cobalt 200 VMs, announced that day at Ignite 2026. Microsoft says they deliver up to 50% better performance than Cobalt 100, are available in 14 regions, and will expand to 23 regions by the end of 2026. The blog says they will represent a significant share of new Azure Compute capacity beginning in 2027. The SoC is on TSMC’s 3nm process with 132 Arm Neoverse V3 cores. Microsoft’s own benchmarks versus Cobalt 100 include up to 1.5 times for AI agent tool execution. Satya Nadella’s Ignite remarks the same day refer to Maia 300 and “40 percent more tokens per watt” versus leading GPU-based systems (https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/). That chip is not new. Microsoft’s 12 Oct 2026 blog already announced Maia 300, including 40% more tokens per megawatt versus leading GPU-based systems, with production deployments beginning in 2027 (https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/).",
  "url": "https://azure.microsoft.com/en-us/blog/azure-cobalt-200-vms-now-available-proven-on-real-workloads-and-built-for-the-agentic-era/",
  "src": "Microsoft Azure blog, 2026-11-17; Maia 300 first announced on the Microsoft blog, 2026-10-12"
 },
 {
  "date": "2026-11-17",
  "published_at": "2026-11-17T17:39:00-05:00",
  "layer": "power",
  "headline": "Politico: TCEQ issued an air permit Monday for SpaceX’s Rio Grande Valley data center and gas plant",
  "detail": "Politico, 17 Nov 2026, 5:39 p.m. ET. Politico reports that Texas environmental regulators issued an air pollution permit on Monday, 16 Nov 2026, for SpaceX’s planned data center and gas-fired power plant in the Rio Grande Valley, and that the agency said it has resumed permitting of supercomputing facilities after Gov. Greg Abbott’s September pause. Politico says a copy of the permit, obtained by FracTracker Alliance through a public records request and shared with Politico, approves 35 natural-gas turbines producing 750 megawatts at a 444-acre site. Those equipment figures are Politico’s account of that copy; the TCEQ permit record was not opened for this item. Politico describes the project as the $24 billion plan. That dollar figure is not stated here as a term of the permit. The story’s mention of the incoming governor is not treated as a cancellation or delay of the project.",
  "url": "https://www.politico.com/news/2026/11/17/texas-issues-air-permit-for-massive-spacex-data-center-01170758",
  "src": "Politico, 2026-11-17 5:39 p.m. ET"
 },
 {
  "date": "2026-11-17",
  "published_at": "2026-11-17T16:24:00-06:00",
  "layer": "power",
  "headline": "Texas Tribune: TCEQ says it has resumed normal environmental-permit review for data centers",
  "detail": "Texas Tribune, 17 Nov 2026, 4:24 p.m. Central. TCEQ spokesperson Laura Lopez, in a written statement: “The agency has resumed its normal permit review process and will evaluate applications under all applicable state and federal laws and regulations.” The Tribune says TCEQ received notice on Friday from Gov. Greg Abbott’s office that ERCOT had finished gathering information on potential community impacts from data centers. This is a resumption of review, not an approval of any named project, and it is not enacted legislation. The election result is not used here as a site cancellation, delay, or approval. Public Citizen’s Kathryn Guerra said agency leadership “has begun unilaterally issuing data center permits”; that is the group’s statement, not the TCEQ quote.",
  "url": "https://www.texastribune.org/2026/11/17/tceq-environmental-data-center-permits-resume/",
  "src": "The Texas Tribune, 2026-11-17 4:24 p.m. Central"
 },
 {
  "date": "2026-11-17",
  "layer": "cool",
  "headline": "Ecolab launches an open liquid-cooling ecosystem at SC26 with Siemens, Alfa Laval and Dassault",
  "detail": "Ecolab investor release, 17 Nov 2026 (Business Wire): at SC26 the company launched an open AI-infrastructure ecosystem. Partners named in the release are Siemens, for power distribution and intelligent infrastructure; Alfa Laval, for heat exchangers, pumps and valves, tied to the CoolIT CHx 3000 CDU initiative; and Dassault Systèmes, for a virtual-twin cooling-loop model linking the technology cooling system and the facility water system. A separate Ecolab release dated 16 Nov 2026 describes the CoolIT CHx 3000 as a 3-megawatt coolant distribution unit with Ecolab 3D TRASAR, and says Global High-Tech annualized sales, including Ovivo and CoolIT, are approaching $1.5 billion in 2026, with a company target of $4 billion in annual High-Tech sales by 2030 and operating-income margins of 25% (https://www.ecolab.com/en-us/media-center/news/ecolab-unveils-first-of-its-kind-integrated-cooling-platform-to-unlock-the-next-generation-of-ai). The $4 billion figure is a company target, not a result.",
  "url": "https://investor.ecolab.com/news/news-details/2026/Ecolab-Launches-Premier-Liquid-Cooling-Ecosystem-to-Shape-the-Industrys-Most-Efficient-AI-Infrastructure/default.aspx",
  "src": "Ecolab, 2026-11-17; CoolIT CHx 3000 specification in the Ecolab release dated 2026-11-16"
 },
 {
  "date": "2026-11-17",
  "layer": "memory",
  "headline": "TrendForce: Samsung is reportedly developing custom HBM4E for Meta on a 2nm base die",
  "detail": "TrendForce, 17 Nov 2026, citing The Bell and industry sources. Reported, not Samsung or Meta guidance. The report says the product would be custom HBM for Meta’s in-house AI chips, based on seventh-generation HBM4E, with Meta-specific functions in the base die, which Samsung reportedly plans to manufacture on its own foundry’s 2nm process. TrendForce also says Samsung is reportedly developing custom base dies on both 2nm and 4nm. No Samsung or Meta statement is quoted. Digitimes carried the same report the same day (https://www.digitimes.com/news/a20261117PD225/samsung-hbm-meta-2nm-nvidia.html).",
  "url": "https://www.trendforce.com/news/2026/11/17/news-samsung-reportedly-developing-custom-hbm4e-for-meta-plans-2nm-base-die-production/",
  "src": "TrendForce, 2026-11-17 (reported, citing The Bell; not company guidance)"
 },
 {
  "date": "2026-11-17",
  "layer": "capex",
  "headline": "Giga Energy: 10-year, $1B lease with an unnamed AI cloud for a 60 MW Hunt County campus",
  "detail": "Giga Energy, 17 Nov 2026. The company says it signed a 10-year, $1 billion lease with an undisclosed U.S.-based AI cloud provider for Project Clay, a 60 MW GigaBase campus in Hunt County, Texas, on about 30 acres. Giga says it broke ground in July and that the campus will be ready for service in spring 2027. The release says IT cooling is a closed loop that does not use municipal or groundwater, and that the build is expected to create about 300 construction jobs and 24 permanent full-time roles. The customer is not named. Ready-for-service timing is the company’s statement.",
  "url": "https://www.gigaenergy.com/news/giga-news-hunt-county-deal",
  "src": "Giga Energy, 2026-11-17"
 },
 {
  "date": "2026-11-16",
  "published_at": "2026-11-16T15:33:00-05:00",
  "layer": "power",
  "headline": "NYT: a permitting bill under debate would charge data centers more for grid access; it is not enacted",
  "detail": "New York Times via The Philadelphia Inquirer, published 16 Nov 2026, 3:33 p.m. ET. Congress is debating a permitting bill. It is not enacted law, and this item does not treat any project as cancelled or delayed. The article says the bill would speed federal environmental reviews of energy projects, including transmission lines and gas pipelines, and that a provision would direct FERC to issue rules within 90 days charging data centers both for grid upgrades needed to serve them and for use of the existing network. Sen. Sheldon Whitehouse, a co-author, is quoted: “The day of data center freeloading ends when this bill passes.” A Grid Strategies report cited by the Times estimates the federal grid rules alone could force data centers to pay an extra $35 billion over the next 10 years; that figure is the consultant’s estimate, not statutory text.",
  "url": "https://www.inquirer.com/news/nation-world/congress-bill-energy-permits-data-centers-pay-costs-ai-20261116.html",
  "src": "New York Times via The Philadelphia Inquirer, 2026-11-16 3:33 p.m. ET"
 },
 {
  "date": "2026-11-16",
  "published_at": "2026-11-16T13:05:00-06:00",
  "layer": "semis",
  "headline": "AMD: HPE-built Lux at Oak Ridge, with EPYC and Instinct MI355X, is open to users",
  "detail": "AMD newsroom, published 16 Nov 2026, 1:05 p.m. CST. Lux SI + HPC is open to scientific users at Oak Ridge National Laboratory. AMD says it was built by HPE and brings together EPYC processors, Instinct MI355X GPUs, Pensando networking and ROCm. On TOP500, AMD says Lux debuts at No. 14 with 220.79 petaflops of measured HPL, that AMD powers four of the 10 fastest and four of the 10 most energy-efficient systems, and that AMD technology is in 202 TOP500 systems. Those rankings are AMD’s claims.",
  "url": "https://newsroom.amd.com/news/sc26-amd-expands-frontier-scientific-computing/",
  "src": "AMD newsroom, 2026-11-16 1:05 p.m. CST"
 },
 {
  "date": "2026-11-16",
  "published_at": "2026-11-16T16:00:01+00:00",
  "layer": "semis",
  "headline": "NVIDIA announces Rubin HPC at SC26: more than 50,000 CUDA cores, sparse-data acceleration, NVLink 7",
  "detail": "NVIDIA blog, datePublished 16 Nov 2026, 16:00:01 UTC (Dan Ernst). Announced at SC26 as a GPU in the Vera Rubin platform for simulation and data processing. The blog says more than 50,000 CUDA cores on a single GPU, a sparse data acceleration capability, and seventh-generation NVLink. “Rubin HPC is expected to be available in 2028.”",
  "url": "https://blogs.nvidia.com/blog/rubin-hpc/",
  "src": "NVIDIA blog, 2026-11-16 16:00:01 UTC"
 },
 {
  "date": "2026-11-16",
  "layer": "capex",
  "headline": "TensorWave–OpenAI: six-year agreement for more than 450 MW of AMD-powered AI infrastructure",
  "detail": "Business Wire, 16 Nov 2026. The release headline is more than 450 MW. The release states TensorWave will provide OpenAI with 457 megawatts of IT capacity across multiple U.S. data center sites, on AMD Instinct MI455X GPUs, purpose-built for AMD Helios rack-scale systems and operated as dedicated single-tenant capacity. Capacity is expected to begin coming online in the first half of 2027, with the full deployment expected by early 2028. The Next Web, published 16 Nov 2026, 4:41 p.m. UTC, reports the same 457 MW, six-year term, MI455X, Helios, first-half-2027 start and early-2028 completion, and says no contract value or site names were disclosed (https://thenextweb.com/news/tensorwave-openai-457mw-amd-helios).",
  "url": "https://www.businesswire.com/news/home/20261116130015/en/TensorWave-Announces-Agreement-with-OpenAI-to-Deliver-More-Than-450MW-of-AMD-Powered-AI-Infrastructure",
  "src": "Business Wire, 2026-11-16; The Next Web, 2026-11-16 4:41 p.m. UTC"
 },
 {
  "date": "2026-11-16",
  "layer": "capex",
  "headline": "BXDC signs a definitive agreement to buy 75% of two AWS joint ventures for about $5 billion",
  "detail": "Blackstone press release, 16 Nov 2026. Blackstone Digital Infrastructure Trust (NYSE: BXDC) signed a definitive agreement to acquire a 75% majority interest in two joint ventures with AWS, in a transaction valued at approximately $5 billion at an initial capitalization rate of 7.0%. The joint ventures will own 13 newly constructed powered shells across two AWS data center campuses; AWS retains 25%. AWS will lease back 100% of the portfolio on a triple-net basis, with an initial term of 12 years and a fully extended term of 32 years. Closing is expected in the fourth quarter of 2026, subject to closing conditions.",
  "url": "https://www.blackstone.com/news/press/blackstone-digital-infrastructure-trust-announces-5-billion-acquisition-of-stabilized-data-center-portfolio/",
  "src": "Blackstone press release, 2026-11-16"
 },
 {
  "date": "2026-11-16",
  "layer": "semis",
  "headline": "BIS releases an interim final rule on remote access to advanced AI chips; Federal Register publication is scheduled for 19 Nov",
  "detail": "BIS press release, 16 Nov 2026: the Bureau released an interim final rule on remote access to advanced super intelligence chips and servers. It is an interim final rule, not a proposed rule, and it is not yet effective. The rule text on BIS’s site still sets the effective date as the date of Federal Register publication. Federal Register public inspection (document 2026-23529) lists it as filed 16 Nov 2026, at 4:15 p.m. on that page, which does not print a time zone, and scheduled for publication on 19 Nov 2026; the inspection page says the document is unpublished. The rule text requires a license to export, reexport, or transfer advanced semiconductors to Indonesia, Malaysia, Singapore, Thailand, or Brazil, with an exception for semiconductors destined to companies headquartered in, or whose ultimate parent is headquartered in, the United States if reporting requirements are met. It also requires a license for exports, reexports, or transfers to overseas data centers that remotely supply significant volumes of compute to companies headquartered in Country Group D:5 or Macau; data centers already providing that compute must obtain a license within 90 days of the effective date. The license requirement does not apply to commercial recommender systems. The rule also formally rescinds the regulations implementing the AI Diffusion Rule. Rule PDF: https://www.bis.gov/media/documents/rin-0694-ak50.pdf. Public inspection: https://www.federalregister.gov/public-inspection/2026-23529/addressing-remote-access-to-advanced-semiconductors.",
  "url": "https://www.bis.gov/press-release/bis-issues-rule-addressing-remote-access-american-super-intelligence-technology",
  "src": "BIS press release, 2026-11-16; BIS rule text RIN 0694-AK50; Federal Register public inspection 2026-23529"
 },
 {
  "date": "2026-11-16",
  "layer": "capex",
  "headline": "DCD: Core Scientific files a $1.3B core-and-shell at its Hunt County campus near Dallas; AMD is set to lease 110 MW",
  "detail": "Data Center Dynamics, 16 Nov 2026, citing a Texas Department of Licensing and Regulation filing by Telios Quinlan One, LLC for the Core Scientific – Hunt project at 4852 County Road 3507, Quinlan, Hunt County, about 53 miles northeast of Dallas. DCD describes a 341,325 sq ft core-and-shell building and says construction on the $1.3 billion project is set to run from November 2026 until September 2028. The 285 MW figure is the company’s March statement as reported by DCD: the campus could support up to 285 MW of leasable capacity (430 MW gross) across multiple buildings. DCD says AMD is set to lease 110 MW in Hunt County as part of a wider leasing agreement. Core Scientific’s 28 Jul 2026 8-K states AMD lease agreements for an aggregate of 377 MW of critical IT capacity at Pecos, TX, Muskogee, OK, and Hunt County, TX, for 15-year terms; that 8-K does not state the 110 MW site split (https://investors.corescientific.com/sec-filings/all-sec-filings/content/0001839341-26-000012/0001839341-26-000012.pdf).",
  "url": "https://www.datacenterdynamics.com/en/news/core-scientific-files-for-285mw-data-center-outside-dallas-texas/",
  "src": "Data Center Dynamics, 2026-11-16; Core Scientific 8-K, 2026-07-28"
 },
 {
  "date": "2026-11-16",
  "layer": "memory",
  "headline": "ETNews: suppliers say SK hynix is discussing HBM4 back-end equipment orders, with installation aimed at the first half of next year",
  "detail": "ETNews, 16 Nov 2026 (Kwon Dong-joon). Industry-sourced report, not company guidance. The article says that, according to multiple semiconductor equipment industry officials on 15 Nov, SK hynix is discussing purchase orders for HBM4 manufacturing equipment, mainly with back-end suppliers for bonding, cutting and inspection. A supplier is quoted saying the company is accelerating its schedule with the goal of bringing in and installing equipment in the first half of next year. The article is dated 16 Nov 2026, so that phrase points at the first half of 2027; SK hynix is not quoted setting that date. An SK hynix official said: “We have continued placing equipment orders in line with our plans. We intend to respond to market expansion without disruption.” The page says the article was translated using AI and published after review by the reporter. Cheongju P&T6 is described as the most likely site, which is the article’s assessment.",
  "url": "https://en.etnews.com/20261116200004",
  "src": "ETNews, 2026-11-16 (industry-sourced; not company guidance)"
 },
 {
  "date": "2026-11-15",
  "published_at": "2026-11-15T04:50:00+09:00",
  "layer": "capex",
  "headline": "Nikkei: Digital Realty CEO says the company will spend $10 billion on Japan data centers over the next decade",
  "detail": "Nikkei Asia, 15 Nov 2026, 04:50 JST: CEO Andy Power said Digital Realty will spend $10 billion in Japan, its top investment destination in Asia, over the next decade, on continued demand for computing power. The headline describes the figure as $10 billion more, and the subhead says the company is to nearly quadruple capacity in that market. Interview report, not an SEC filing or a formal capex guide. No separate MW schedule was in the portion of the article reviewed.",
  "url": "https://asia.nikkei.com/business/technology/artificial-intelligence/digital-realty-trust-to-spend-10bn-more-on-japan-data-centers-ceo",
  "src": "Nikkei Asia, 2026-11-15 04:50 JST"
 },
 {
  "date": "2026-11-14",
  "layer": "capex",
  "headline": "AirTrunk proposes two Andhra Pradesh campuses of as much as 1.8 GW, about ₹1.03 lakh crore ($11 billion)",
  "detail": "Bloomberg, via The Hindu BusinessLine updated 14 Nov 2026, 4:42 p.m.: an emailed AirTrunk statement says a detailed project report covers two campuses with combined capacity of as much as 1.8 GW and about ₹1.03 lakh crore ($11 billion); the proposal remains under state consideration; AirTrunk said the campuses would use low-water, air-cooled technology and industrial rather than municipal water. DCD, 14 Nov 2026, quotes an AirTrunk LinkedIn post on an MoU with Chief Minister Nara Chandrababu Naidu for two proposed Anakapalli campuses, 400 MW at Rambilli and 1.4 GW at Tootipala, and says full details were not shared (https://www.datacenterdynamics.com/en/news/airtrunk-signs-mou-for-18gw-of-data-center-capacity-in-andhra-pradesh-india/). A 13 Nov Deccan Chronicle account of the CII summit lists an AirTrunk India–JCK Infra agreement at 1,400 MW and ₹1,03,018 crore; that listing is not the same figure as the company’s 1.8 GW statement (https://www.deccanchronicle.com/southern-states/andhra-pradesh/cm-holds-investor-talks-as-ap-secures-141-lakh-crore-commitments-2004252). Proposal only: not an approval and not a construction start.",
  "url": "https://www.thehindubusinessline.com/info-tech/andhra-pradeshs-data-centre-push-blackstone-backed-airtrunk-plans-1-lakh-crore-investment/article71701375.ece",
  "src": "Bloomberg via The Hindu BusinessLine, updated 2026-11-14 4:42 p.m.; DCD, 2026-11-14"
 },
 {
  "date": "2026-11-14",
  "layer": "memory",
  "headline": "Court docket: Judge Noël Wise denied a motion to dismiss the DRAM antitrust suit against Samsung, SK hynix and Micron",
  "detail": "CourtListener docket for Garciaguirre v. Samsung Electronics Co., Ltd., No. 5:26-cv-06345 (N.D. Cal.): the 14 Nov 2026 entry is an order denying the defendants’ motion to dismiss, signed by Judge Noël Wise. A 13 Nov minute entry says the motion was argued and taken under submission. The docket text does not decide liability. TechPowerUp, 14 Nov 2026, reports that the complaint alleges the three companies restricted conventional DRAM supply and shifted capacity toward HBM, and that the ruling is pleading-stage only (https://www.techpowerup.com/354863/samsung-sk-hynix-and-micron-fail-to-get-dram-antitrust-suit-dismissed). Price-surge percentages in other headlines are not used here.",
  "url": "https://www.courtlistener.com/docket/73532135/garciaguirre-v-samsung-electronics-co-ltd/",
  "src": "CourtListener docket, order filed 2026-11-14; TechPowerUp, 2026-11-14"
 },
 {
  "date": "2026-11-13",
  "published_at": "2026-11-13T13:32:00-04:00",
  "layer": "capex",
  "headline": "IBJ: Amazon held a 12 Nov ceremonial groundbreaking for a planned $7B campus in Wheatfield, Indiana",
  "detail": "Inside INdiana Business / Indianapolis Business Journal, 13 Nov 2026, 1:32 p.m. EDT. A ceremonial groundbreaking was held on 12 Nov 2026 for a planned $7 billion data center campus in Wheatfield, Jasper County. IBJ attributes Roger Wehner’s remarks, and a Gov. Mike Braun quote naming “Amazon’s $7 billion investment in Jasper County,” to an Amazon news release. Wehner’s quoted remarks say Amazon is beginning construction. The company said more than 350 workers are already onsite. IBJ says Jasper County Commissioners approved development agreements in June for the 304-acre site, and that those agreements commit Amazon to $98 million upfront and $23 million a year for the next decade, plus $25 million to expand water access in Wheatfield Township. The Amazon release was not found on Amazon’s newsroom, so this item follows IBJ’s account of it. The $7 billion figure is the one IBJ attributes to Amazon; it is not a new company capex guide.",
  "url": "https://www.insideindianabusiness.com/articles/amazon-breaks-ground-on-7b-wheatfield-data-center-campus",
  "src": "Inside INdiana Business / Indianapolis Business Journal, 2026-11-13 1:32 p.m. EDT"
 },
 {
  "date": "2026-11-13",
  "published_clock": "2026-11-13T16:50:00",
  "layer": "semis",
  "headline": "Xintec filing: seven-year advanced-packaging outsourcing deal with TSMC through 31 Dec 2033",
  "detail": "Xintec (3374) material information, reproduced by USTV from the Taiwan exchange feed, timestamped 2026/11/13 16:50 (zone not printed). Counterparty is TSMC. The contract dates are ROC 115/11/13–122/12/31, which is 13 Nov 2026 through 31 Dec 2033. The filing says the parties will cooperate on back-end advanced packaging, that Xintec will build and run a line inside TSMC’s Central Taiwan Science Park plant and become a supplier of the oS module, that first-phase volume production is planned for ROC 118 (2029), and that the board approved NT$15 billion of convertible bonds for the initial build. The filing text uses “oS module” and does not print the word CoWoS. Taiwan News, 13 Nov 2026, 21:03 (zone not printed), identifies the line as the on-substrate portion of CoWoS (https://www.taiwannews.com.tw/news/6476137).",
  "url": "https://news.ustv.com.tw/companynews/271677",
  "src": "Xintec MOPS filing via USTV, 2026-11-13 16:50 (zone not printed); Taiwan News, 2026-11-13 21:03"
 },
 {
  "date": "2026-11-13",
  "published_at": "2026-11-13T08:31:00+00:00",
  "layer": "semis",
  "headline": "Reuters review finds more than $3B of Chinese AI computing projects built around restricted Nvidia processors",
  "detail": "Reuters exclusive, 13 Nov 2026 08:31 UTC: records span planned investments, awarded contracts and active facilities; Nvidia has said US export controls effectively shut it out of China’s AI data-centre market. Reuters’ figure, not verified independently.",
  "url": "https://www.reuters.com/5f374b32b07b/world/china/huang-exit-us-scrutiny-imperil-3-billion-chinese-ai-projects-reliant-nvidia-2026-11-13/",
  "src": "Reuters, 2026-11-13 08:31 UTC"
 },
 {
  "date": "2026-11-13",
  "layer": "power",
  "headline": "Massachusetts campaign launches a proposed 2028 ballot petition to restrict data centers as Kraft Group pursues a $16B Sutton campus",
  "detail": "WBUR/State House News Service, 13 Nov 2026: the Committee to Restrict Data Centers (Petition 26-08) would require, among other things, two-thirds host-community approval and 100% renewable supply commitments; it is a proposed petition, not a vote result or enacted law; no site status change is implied.",
  "url": "https://www.wbur.org/news/2026/11/13/data-center-restriction-ballot-question-sutton-kraft-ai",
  "src": "WBUR / State House News Service, 2026-11-13"
 },
 {
  "date": "2026-11-12",
  "layer": "semis",
  "headline": "NVIDIA CEO transition: Jensen Huang resigns; CFO Colette Kress named interim CEO; Harvey Jones becomes first Board chair",
  "detail": "NVIDIA newsroom release dated 12 Nov 2026; Form 8-K says the Board accepted the resignation on 11 Nov 2026, effective immediately; Kress remains CFO while a permanent CEO search (internal and external candidates) runs. The release says Q3 FY27 results remain scheduled for Tue 17 Nov ~1:20 p.m. PT, call 2:00 p.m. PT, and that the Board expects operations, customer commitments and product roadmap to continue without interruption.",
  "url": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition",
  "src": "NVIDIA newsroom, 2026-11-12; Form 8-K (SEC) dated 2026-11-12"
 },
 {
  "date": "2026-11-12",
  "layer": "power",
  "headline": "Fermi: non-binding LOI with an unnamed investment-grade hyperscaler for ~600 MW of powered land at Project Matador, with a $200M prepayment agreement; TensorWave lease terminated",
  "detail": "Fermi Q3 release 12 Nov 2026 and 10-Q note: LOI and the $200M prepayment agreement plus a $15M early construction and site-development agreement were entered 10 Nov 2026; a $90M structural steel/building materials purchase agreement is still being finalized; no definitive lease yet. The TensorWave lease terminated 10 Nov 2026 under its terms after the closing date passed; the associated AMD credit support agreement is also terminated.",
  "url": "https://www.datacenterdynamics.com/en/news/fermi-does-600mw-power-deal-with-hyperscaler-but-tensorwave-lease-is-officially-dead/",
  "src": "Fermi Q3 release & 10-Q (SEC), 2026-11-12; via DCD"
 },
 {
  "date": "2026-11-12",
  "layer": "networking",
  "headline": "Cisco Q1 FY27: record revenue $18.5B (+24% y/y), networking product revenue +43%; FY27 revenue guide $74.8–75.8B",
  "detail": "Quarter ended 24 Oct 2026 (Cisco newsroom, 12 Nov 2026). The release raises expected FY27 AI-infrastructure revenue from hyperscalers to $9B, more than double FY26. Reuters via CNA reports the prior hyperscaler expectation was $7.5B and the prior FY27 revenue guide was $72.2–73.4B; the Cisco release states the new figures and the more-than-double comparison, and does not restate those two prior figures. CNA: https://www.channelnewsasia.com/business/cisco-lifts-annual-revenue-forecast-strong-ai-networking-demand-6547511",
  "url": "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m11/cisco-reports-first-quarter-earnings.html",
  "src": "Cisco newsroom, 2026-11-12; prior guide Reuters via CNA"
 },
 {
  "date": "2026-11-12",
  "published_at": "2026-11-12T08:00:00-06:00",
  "layer": "semis",
  "headline": "AMD Instinct MI400 update: MI430X with 432 GB HBM4; MI455X measured at 21,333 tokens/s/GPU; new MI450X at 288 GB HBM4",
  "detail": "AMD newsroom, published 12 Nov 2026, 8:00 a.m. CST. MI430X is described with native FP64, 432 GB of HBM4 and up to 23.3 TB/s of memory bandwidth. AMD testing puts MI455X on Helios at 21,333 tokens per second per GPU on DeepSeek-R1 in an MLPerf Inference Offline configuration, which AMD says is up to 30% higher throughput than NVIDIA Vera Rubin’s latest published MLPerf offline result. MI450X has 288 GB of HBM4 and, AMD says, the same core compute, memory bandwidth, and scale-up and scale-out connectivity as MI455X. An editor’s note says the MI430X information was added after the original post. The throughput comparison is AMD’s measurement, not an independent re-test.",
  "url": "https://newsroom.amd.com/news/amd-advances-instinct-mi400-series-ai-scientific-computing/",
  "src": "AMD newsroom, 2026-11-12 8:00 a.m. CST"
 },
 {
  "date": "2026-11-12",
  "published_at": "2026-11-12T16:01:00-05:00",
  "layer": "semis",
  "headline": "Applied Materials Q4 FY26: record revenue $10.41B (+53% y/y); Q1 FY27 guide $11.1B ±$0.5B",
  "detail": "Fiscal quarter ended 25 Oct 2026 (company release, 12 Nov 2026, 4:01 p.m. EST). The release gives the Q1 FY27 revenue guide as $11.1B ±$0.5B. On the call, CFO Brice Hill said the quarter posted record revenue in both DRAM and advanced packaging (Investing.com transcript). That DRAM and packaging line is call commentary, not a figure printed in the release.",
  "url": "https://www.appliedmaterials.com/us/en/newsroom/press-releases/111226-applied-materials-announces-fourth-qtr-fiscal-year-end-2026-results.html",
  "src": "Applied Materials, 2026-11-12 4:01 p.m. EST; DRAM/packaging from the call via Investing.com transcript"
 },
 {
  "date": "2026-11-12",
  "layer": "capex",
  "headline": "Nebius Q3: revenue $980.8M (+571% y/y); 2026 capex guide about $27B, above the prior $20–25B range",
  "detail": "Shareholder letter dated 12 Nov 2026, linked from the newsroom post (PDF: https://assets.nebius.com/assets/721c566e-9ba5-4935-ad24-b1209116a4cc/Nebius-SHL-2026-Q3.pdf). 2026 revenue is now the low end of the $3.0–3.4B range because some third-party capacity expected this year is scheduled for the first half of 2027. Initial 2027 outlook: revenue $12–13B and capex $40–45B, sized for more than 1 GW of new capacity. Prepayments and asset-backed financing of existing investment-grade contracts are expected to fund 75–85% of that 2027 capex. The letter’s 2026 revenue range is $3.0–3.4B. Reuters, 12 Nov 2026 (https://www.reuters.com/5f374b32b07b/technology/nebius-beats-quarterly-revenue-estimates-strong-ai-demand-2026-11-12/): 2027 capex expected $40–45B, with roughly 75–85% of 2027 investment covered by customer prepayments and asset-backed financing; some third-party capacity expected in 2026 pushed to 1H 2027 (contracts remain in place); shares fell 16% on 12 Nov.",
  "url": "https://nebius.com/newsroom/nebius-reports-third-quarter-2026-financial-results",
  "src": "Nebius shareholder letter, 2026-11-12"
 },
 {
  "date": "2026-11-12",
  "published_clock": "2026-11-12T11:15:00",
  "layer": "capex",
  "headline": "SpaceX says it plans more than $74B for two supercomputing campuses, expanding the 9 Nov Starbase filing",
  "detail": "Reuters via Investing.com, published 12 Nov 2026, 11:15 a.m. (zone not printed): more than $24B at Starbase, Texas, where the facility would generate its own electricity, and roughly $50B in Cochise County, Arizona. The Arizona campus needs county approval, a public hearing is set for December, and SpaceX said it would use dry cooling with no planned industrial groundwater use. This expands on the 9 Nov hearing-notice item for the Starbase gas-fired plant and super-compute facility. It is a company statement reported by Reuters, not a permit approval.",
  "url": "https://www.investing.com/news/stock-market-news/spacex-to-invest-over-74-billion-in-supercompute-facilities-in-texas-arizona-5022690",
  "src": "Reuters via Investing.com, 2026-11-12 11:15 a.m. (zone not printed)"
 },
 {
  "date": "2026-11-12",
  "published_at": "2026-11-12T07:29:48+00:00",
  "layer": "power",
  "headline": "ABC News: Quantum DC pauses a planned 1,200 MW AI data centre at Tungkillo, South Australia",
  "detail": "ABC News, page datePublished 12 Nov 2026, 07:29:48Z (displayed as 6:29 p.m.): Quantum DC will pause plans for a 1,200 MW AI data centre at Tungkillo in the Adelaide Hills after community opposition. The South Australian government is preparing legislation to regulate data centres; that legislation is not enacted. This item does not adopt other site outcomes mentioned in the story.",
  "url": "https://www.abc.net.au/news/2026-11-12/data-centre-industry-butts-up-against-community-challenges/107379250",
  "src": "ABC News, 2026-11-12"
 },
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
window.comingUp=window.AIDC.comingUp;
