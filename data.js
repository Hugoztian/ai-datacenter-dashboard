// AI Datacenter Dashboard data. Every figure carries source/url/asOf. null = TBD (not invented).
window.AIDC = {
updated: "2026-11-27",
updated_sgt: "27 Nov 2026, 8:26 AM",
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
whatsNewWeekOf: "2026-11-21",
whatsNewUpdated: "2026-11-27 8:26 AM SGT",
whatsNewEmpty:"No material CapEx/TAM changes since Q3 calls (29–30 Oct 2026).",

comingUp: [
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
  "date": "2026-11-30",
  "event": "House reportedly to consider the Senate-passed permitting bill after members return",
  "status": "Reported",
  "note": "Bloomberg Government, 24 Nov 2026, 11:26 p.m. UTC, citing aides familiar with the plan, says the House will consider H.R. 2347 next week and that the House and Senate plan to return to Washington on 30 Nov. Not a House calendar entry opened for this item. Congress.gov’s latest action is still Senate passage on 19 Nov, 62–33. Not law.",
  "src": "Bloomberg Government, 2026-11-24 (reported)",
  "url": "https://news.bgov.com/bloomberg-government-news/house-plans-to-take-up-bipartisan-permitting-bill-vote-next-week"
 },
 {
  "date": "2026-12-01",
  "event": "House committees’ transcribed interview of Huang (reported)",
  "status": "Reported",
  "note": "CNBC, 24 Nov 2026, updated 12:51 p.m. EST, says the chairs of Foreign Affairs, the Select Committee on the CCP, and the Select Committee on Intelligence said Huang has confirmed he will appear for a transcribed interview that day, behind closed doors. No committee notice was opened, and no start time is taken from CNBC. This is not a public hearing and not a finding.",
  "src": "CNBC, 2026-11-24, updated 12:51 p.m. EST (reported)",
  "url": "https://www.cnbc.com/2026/11/24/jensen-huang-nvidia-congress-gtc.html"
 },
 {
  "date": "2026-12-03",
  "time": "10:00 a.m. EST (~11:00 p.m. 3 Dec SGT)",
  "event": "Senate Banking hearing on export controls; chair’s notice lists Huang as the witness (reported)",
  "status": "Reported",
  "note": "The Hill, 23 Nov 2026, 2:53 p.m. ET, says a notice from Chair Tim Scott sets a hearing titled “Protecting America’s AI Advantage: Oversight of U.S. Export Controls” for 10:00 a.m. EST, with Huang the only witness. Politico, 23 Nov 2026, 12:24 p.m. ET, describes the same notice and says a spokesperson for Huang declined to comment and that it was unclear then whether his plans had changed. CNBC, 24 Nov 2026, updated 12:51 p.m. EST, says Scott said Huang will publicly testify as the sole witness. The committee hearing page was not opened. Not a company IR date.",
  "src": "The Hill, 2026-11-23 2:53 p.m. ET; Politico, 2026-11-23 12:24 p.m. ET; CNBC, 2026-11-24, updated 12:51 p.m. EST (reported)",
  "url": "https://thehill.com/homenews/senate/6238064-nvidia-ceo-ai-hearing-december/"
 },
 {
  "date": "2026-12-03",
  "time": "5:30–7:00 p.m. local time",
  "event": "Arizona attorney general’s town hall on the proposed SpaceX Cochise campus",
  "status": "Confirmed",
  "note": "Arizona Attorney General’s Office, press release 19 Nov 2026, and the office’s events page. Attorney General Kris Mayes will host the town hall at the Cochise Elementary School gymnasium, 5025 North Bowie Avenue, Cochise. It is a public meeting of her office. It is not the county permit vote. The 9 Dec Planning and Zoning date is a separate item. The release says the campus could consume up to 6 gigawatts, “nearly 20 percent of Arizona’s current power-generating capacity.” That comparison is the office’s.",
  "src": "Arizona Attorney General’s Office, 2026-11-19",
  "url": "https://www.azag.gov/press-release/attorney-general-mayes-urges-cochise-county-delay-vote-proposed-spacex-data-center"
 },
 {
  "date": "2026-12-02",
  "time": "2–3 Dec, Fira Barcelona Gran Via",
  "event": "HPE Discover Barcelona 2026",
  "status": "Confirmed",
  "note": "HPE’s event page. Antonio Neri’s keynote is listed for Wednesday 2 Dec 2026, 9:30–10:30 CET. This is a conference date, not an earnings release, and the page does not give a new capex figure.",
  "src": "HPE Discover Barcelona",
  "url": "https://www.hpe.com/us/en/discover/barcelona.html"
 },
 {
  "date": "2026-12-08",
  "event": "Requested deadline for answers to the House Democratic ranking members’ letter on Huang",
  "status": "Requested",
  "note": "The letter dated 24 Nov 2026 asks for responses “as soon as possible, and no later than December 8.” It is a request from the ranking members of Energy and Commerce, Foreign Affairs, Judiciary, and Oversight. It is not a subpoena and not a docketed order. No clock is printed.",
  "src": "House Democratic ranking members’ letter, 2026-11-24",
  "url": "https://democrats-energycommerce.house.gov/sites/evo-subsites/democrats-energycommerce.house.gov/files/evo-media-document/2026.11.24-multi-committee-letter-to-president-trump-re-jensen-huang.pdf"
 },
 {
  "date": "2026-12-09",
  "time": "After the US close; call 2:00 p.m. PT / 5:00 p.m. ET (~06:00 10 Dec SGT)",
  "event": "Broadcom Q4 and FY26 results",
  "status": "Confirmed",
  "note": "Broadcom news release dated 9 Nov 2026. Fiscal fourth quarter and full-year results and business outlook.",
  "src": "Broadcom news release",
  "url": "https://www.broadcom.com/company/news/financial-releases/64841"
 },
 {
  "date": "2026-12-09",
  "event": "Starbase city commission to consider a SpaceX tax abatement (reported)",
  "status": "Reported",
  "note": "Fortune, 22 Nov 2026, 6:25 a.m. ET, says Starbase’s city commission is scheduled to consider a tax abatement that day. The city agenda was not opened. Not a confirmed hearing notice from the city.",
  "src": "Fortune, 2026-11-22",
  "url": "https://www.fortune.com/2026/11/22/spacex-74-billion-ai-data-centers-texas-arizona-who-pays/"
 },
 {
  "date": "2026-12-09",
  "event": "Cochise County Planning and Zoning vote on the SpaceX campus (reported)",
  "status": "Reported",
  "note": "Arizona Attorney General Kris Mayes, press release 19 Nov 2026, says a letter sent that day asked the Cochise County Planning and Zoning Commission to delay its scheduled 9 Dec 2026 vote on the SpaceX special-use permit. Fortune, 22 Nov 2026, 6:25 a.m. ET, reported the request. The commission agenda was not opened. The release does not say the vote was taken off the calendar. AZ Big Media, 25 Nov 2026, 9:45 a.m. MST, still describes the 9 Dec public meeting as scheduled. Not a confirmed hearing notice from the county.",
  "src": "Fortune, 2026-11-22",
  "url": "https://www.fortune.com/2026/11/22/spacex-74-billion-ai-data-centers-texas-arizona-who-pays/"
 },
 {
  "date": "2026-12-10",
  "time": "Before the US open; webcast 8:30 a.m. ET (~9:30 p.m. 10 Dec SGT)",
  "event": "Ciena fiscal Q4 and year-end 2026 results",
  "status": "Confirmed",
  "note": "Ciena IR release dated 12 Nov 2026. Results are expected on Thursday 10 Dec 2026, before the U.S. market opens. The live audio webcast begins at 8:30 a.m. Eastern.",
  "src": "Ciena IR, 2026-11-12",
  "url": "https://investor.ciena.com/news/news-details/2026/Ciena-Announces-Reporting-Date-and-Web-Broadcast-for-Fiscal-Fourth-Quarter-and-Year-End-2026-Results/default.aspx"
 },
 {
  "date": "2026-12-17",
  "time": "Call 2:30 p.m. Mountain time (~05:30 18 Dec SGT)",
  "event": "Micron fiscal Q1 2027 earnings call",
  "status": "Confirmed",
  "note": "Micron IR release dated 19 Nov 2026. The release announces the call. It does not say whether the results go out before the call.",
  "src": "Micron IR, 2026-11-19",
  "url": "https://investors.micron.com/news/press-release/2026/Micron-Technology-to-Report-Fiscal-First-Quarter-Results-on-December-17-2026/default.aspx"
 }
],
// Array shape {date, headline, detail?, url?, layer?, src?} — aggregated by master dashboard. Optional published_at / published_clock are real publication clocks only. The array is the rolling window as of the SGT stamp (21–27 Nov 2026). url stays null only when a link is not verified.
whatsNewThisWeek: [
 {
  "date": "2026-11-26",
  "published_at": "2026-11-26T08:22:43Z",
  "layer": "semis",
  "headline": "SemiAnalysis: Trainium and TPU are on InferenceX/AgentX, at 1.2x to 2.5x NVIDIA’s performance per dollar (third-party benchmark)",
  "detail": "SemiAnalysis, post dated 26 Nov 2026, 08:22:43 UTC. Third-party benchmark, not an AWS or Google result release, and not company guidance. The post says both Trainium and TPU are now on InferenceX/AgentX, and that “Trainium & TPU deliver anywhere from 1.2x to 2.5x the performance per dollar of NVIDIA GPUs.” A separate SemiAnalysis post, 25 Nov 2026, 18:31:43 UTC, says Amazon’s first Trainium3 UltraServer submission to the agentic benchmark “demonstrated 2.28x better perf per dollar than even GB300 NVL72, B300, and MI355.” SemiAnalysis repeated the 2.28x comparison with the GB300 NVL72 on 26 Nov 2026, 20:50:15 UTC, and linked a results page. That results page was not opened, so no figure that appears only there is used. OfficeChai, 26 Nov 2026, no clock printed, reports the same 1.2x to 2.5x range and the 2.28x, and says SemiAnalysis labeled the Trainium3 numbers an “official preview” that may change as validation continues. OfficeChai also prints hourly ownership costs it attributes to SemiAnalysis, at hyperscaler volume: GB300 $2.31, B300 $2.26, GB200 $1.86, MI355X $1.50, and Trainium3 $1.05 per chip per hour. Those dollar rates are not in the posts opened here. OfficeChai says they are estimates of what a hyperscaler pays to own the chip, not rental prices. The 1.2x to 2.5x and the 2.28x are SemiAnalysis’s. They are not a finding that NVIDIA lost a customer. Mirror of the posts: https://x.latent.space/SemiAnalysis_. OfficeChai: https://officechai.com/ai/7-months-after-jensen-huang-said-tpu-and-trainium-would-never-show-up-on-inferencemax-both-are-beating-nvidia-on-it/",
  "url": "https://x.latent.space/SemiAnalysis_",
  "src": "SemiAnalysis, 2026-11-26 08:22:43 UTC, and 2026-11-25 18:31:43 UTC (third-party benchmark); OfficeChai, 2026-11-26 (no clock; cost rates not in the posts opened here)"
 },
 {
  "date": "2026-11-26",
  "layer": "memory",
  "headline": "TrendForce and Data Phoenix: Huawei is scheduled to present a custom HBM design, 64 channels and a 4,096-bit interface, at ISSCC on 16 Feb 2027 (reported)",
  "detail": "Reported. The IEEE program was not opened. TrendForce, 26 Nov 2026, no clock printed, citing STAR Market Daily citing the preliminary ISSCC 2027 agenda, says Huawei will present a custom HBM design with 64 channels, a 4096-bit interface, twice the 2048-bit width of the HBM4 standard, and five-layer wafer-to-wafer hybrid bonding, and that the design integrates memory controllers with stacked memory. Data Phoenix, 26 Nov 2026, no clock printed, citing the ISSCC draft program, says the talk is on 16 Feb 2027 in San Francisco, lists 64 channels and a data interface labeled “4096-DQ,” memory controllers, and a five-layer stack joined by wafer-on-wafer hybrid bonding. Data Phoenix says that program entry gives no per-line transfer rate and no measured bandwidth, and that it puts paper 22.6 in the “SRAM, HBM and DRAM” session at 4 p.m. Pacific time, at the San Francisco Marriott Marquis. TrendForce, citing EE Times China, says the conference runs 14 to 18 Feb 2027 in San Francisco and that all four Huawei presentations are on 16 Feb. Those dates are the two reports’ account of the agenda. TrendForce also relays STAR Market Daily figures for the Ascend 950PR and 950DT. Those capacities and bandwidths are not in Data Phoenix’s account of the program entry, so they are not used. This is a conference listing, not a shipment. Data Phoenix: https://dataphoenix.info/news/huawei-isscc-2027-custom-hbm-preview",
  "url": "https://www.trendforce.com/news/2026/11/26/news-huawei-reportedly-set-to-unveil-custom-hbm-architecture-with-twice-hbm4s-interface-width-and-hybrid-bonding/",
  "src": "TrendForce, 2026-11-26 (no clock), citing STAR Market Daily; Data Phoenix, 2026-11-26 (no clock). Reported. The IEEE program was not opened."
 },
 {
  "date": "2026-11-25",
  "published_at": "2026-11-25T18:10:00-05:00",
  "layer": "semis",
  "headline": "CBS News: RiCloud AI of San Jose and Aivres, formerly called Inspur, are California Nvidia partners owned by Chinese entities (reported; not a finding of wrongdoing)",
  "detail": "CBS News, Josh Boswell, 25 Nov 2026, 6:10 p.m. EST. Reported investigation. It is not a finding that Nvidia, RiCloud, or Aivres violated export controls. CBS says Nvidia is selling its most advanced chips to at least two U.S.-based companies that are controlled by Chinese-owned firms. RiCloud AI, a data-center company in San Jose, appears on Nvidia’s list of preferred partners. CBS says the parent is Yuxing InfoTech Investment Holdings Limited, headquartered in Shenzhen and listed in Hong Kong, and that the U.S. government has not accused RiCloud and Yuxing of any wrongdoing. CBS says that by December 2025, about 10 weeks after it was incorporated, RiCloud had partner status and has since become a preferred cloud partner, and that Nvidia has not responded to questions about the background checks. CBS says RiCloud this year signed a $120 million deal to lease 300 Nvidia B300 servers to Agencia Comercial Spirits, a company in Taiwan. Aivres is listed as an elite compute partner. CBS says Aivres used to be called Inspur, the same name as its Chinese parent, and that when Inspur group firms in China were added to a U.S. blacklist in March 2023 the California company changed its name. CBS says Aivres itself is not on the blacklist and did not respond. A New York Times analysis of trade records, which CBS says was published two months ago, is earlier than this window. CBS says that analysis found at least $5.6 billion of advanced-technology exports by Aivres to Southeast Asia between April 2024 and February 2026, of which some $3 billion were computers containing Blackwell chips. Those figures are CBS’s account of the Times. The Times analysis was not opened. CBS also says a California businessman, Greg Lui, was indicted this year for allegedly smuggling export-controlled chips to China via Malaysia and Singapore in 2023 and 2024, has pleaded not guilty, and that records CBS reviewed link him to 2CRSi, an Nvidia elite partner. CBS says the indictment does not accuse Nvidia of knowing of the arrangement, and that 2CRSi told shareholders it received a grand jury subpoena about a customer it had itself reported and has not been accused of wrongdoing. Those case details are CBS’s account. They are not a new charge dated 25 Nov.",
  "url": "https://www.cbsnews.com/news/nvidia-china-ai-chips-computing-sales/",
  "src": "CBS News, 2026-11-25 6:10 p.m. EST (reported; not a finding of wrongdoing)"
 },
 {
  "date": "2026-11-25",
  "layer": "capex",
  "headline": "Reuters: CoreWeave’s five-year CDS at a record 1,314 basis points, a 68% five-year default probability in S&P’s figures; Tuesday’s bonds traded at discounts (reported market data)",
  "detail": "Reported market prices. Not a missed payment, not a CoreWeave default, and not company guidance. The Edge Malaysia’s republication of Reuters carries a Singapore dateline of 25 Nov. The page header reads Friday 27 Nov 2026, the day this page was opened, so that header is not used as a publication clock. No clock is printed on the story. Reuters says that overnight, five-year credit-default-swap spreads at Oracle, Alphabet, SpaceX and CoreWeave hit record levels, according to S&P Global Market Intelligence, pushing CoreWeave’s default probability in the next five years to 68%. Reuters says CoreWeave’s 1,314 basis-point spread puts it in distressed territory. Reuters says Oracle’s record spread is 356 basis points, which it describes as a cost of US$3.56 to insure US$100 of Oracle debt. Reuters says SoftBank’s five-year spread leapt to 501 basis points on Wednesday, the widest since October 2022, according to Markit. Reuters does not print basis-point levels for Alphabet or SpaceX. An Investing.com copy of a Reuters story, published 25 Nov 2026 at 12:02 a.m. and updated at 12:06 a.m., zone not printed, states the 68% probability and the record for those four names, and states SoftBank at 501 basis points. That copy does not print 1,314 or 356. The basis-point lines used here are the Edge Malaysia text. Separately, Investing.com, published 24 Nov 2026 at 2:23 p.m., zone not printed, citing Trace data recorded at 2:20 p.m. New York time, says CoreWeave’s 9% bond due 2031 dropped as much as 3.69 points to 76.4 cents on the dollar, the lowest since the July 2025 issue; the 9.625% note due 2032 fell as many as 4.6 points to 74.9 cents, the lowest since the June 2026 launch; the 9.75% note due 2031 sank 3.75 points to 76.3 cents, a low since the April issue; and the 9.25% bond due 2030 slid 3 points to 80.9 cents, the lowest since the May 2025 issue. Those are Tuesday’s prints as that article reports Trace. They are not Wednesday’s closes. A Bloomberg article was not opened. Edge Malaysia: https://theedgemalaysia.com/node/827208. Investing.com CDS copy: https://www.investing.com/news/stock-market-news/ai-credit-default-swap-spreads-widen-on-unease-over-cash-flow-5049729. Trace prices: https://www.investing.com/news/stock-market-news/coreweave-bonds-hit-record-lows-as-ai-trade-concerns-return-5048907",
  "url": "https://theedgemalaysia.com/node/827208",
  "src": "Reuters via The Edge Malaysia, Singapore dateline 2026-11-25 (no story clock; reported market data, S&P Global Market Intelligence and Markit); Investing.com on Trace, published 2026-11-24 2:23 p.m. (zone not printed)"
 },
 {
  "date": "2026-11-25",
  "layer": "semis",
  "headline": "Washington Post: Shenzhen vendors offer export-controlled Nvidia chips; the prices that loaded are The Next Web’s account of the Post (reported)",
  "detail": "The Washington Post, Joshua Yang, URL dated 25 Nov 2026, dateline Shenzhen. Reported. The page that loaded says sellers at the Huaqiangbei electronics market hawk cutting-edge Nvidia chips supposedly barred from China by the U.S. Commerce Department. The price paragraphs did not load on that page, so no dollar figure is taken from the Post text itself. The Next Web, 25 Nov 2026, 3:46 p.m. GMT, and labeled 3:46 p.m. UTC on the same page, reports the Post: vendors quoted $3 million to $3.4 million for a server with eight B300s; one vendor said the same server cost $2 million two months ago; Kyle Chan, a fellow at the Brookings Institution, told the Post an equivalent server sells for about $500,000 to $600,000 in the United States; and the Post could not verify the chips on offer. Those dollar figures are The Next Web’s account of the Post. They are vendor quotes, not a Nvidia price list. The Post’s statement that it could not verify the chips, as The Next Web reports it, is part of the item. This is not a finding that a named shipment cleared customs. The Next Web: https://thenextweb.com/news/asia-data-centres-b300-prices-us-buyers-chip-rules",
  "url": "https://www.washingtonpost.com/world/2026/11/25/top-nvidia-chips-are-still-offer-china-despite-us-ban/",
  "src": "The Washington Post, URL dated 2026-11-25 (price paragraphs did not load); The Next Web, 2026-11-25 3:46 p.m. GMT (account of the Post)"
 },
 {
  "date": "2026-11-25",
  "published_at": "2026-11-25T15:08:00-05:00",
  "layer": "semis",
  "headline": "No public Nvidia response and no Treasury press release found on the 25 Nov date Bessent named for answers on China chip sales (reported)",
  "detail": "This is the date already recorded in the 22 Nov Politico item. It is not a new order, and it is not a finding that chips were diverted. Politico, 22 Nov 2026, 12:43 p.m. EST, says Treasury Secretary Scott Bessent said on CBS’s Face the Nation that the department had not yet received Nvidia’s answers, and that last week he said Nvidia must indicate by 25 Nov whether it used shell companies to bypass federal regulations in order to sell its most powerful chips to China. CBS News, 22 Nov 2026, 1:48 p.m. EST, reports the same interview: Bessent said that in a Fox News interview the prior week he needed answers within 10 days, and that on Sunday those answers had not yet been received. Reuters, 22 Nov 2026, 5:48 p.m. UTC, reports the same CBS interview and does not print the 25 Nov date. TECHi, 25 Nov 2026, 3:08 p.m. EST, reports that Nvidia had not published a response by mid-afternoon, that the newsroom showed no release after the 23 Nov reinstatement, that no new 8-K was on file as of 2:30 p.m. Eastern, and that Treasury’s press-release page then showed no Nvidia statement, its newest releases dated 23 Nov. This feed’s own check, 26 Nov 2026, 8:34 a.m. SGT — 7:34 p.m. EST on 25 Nov in the United States, so the US calendar date 25 Nov had not ended. NVIDIA’s newsroom list still showed the 23 Nov reinstatement as the newest release about the board. A separate 23 Nov consumer post on that list is not a response to Treasury. The EDGAR company feed, timestamped 25 Nov 2026, 7:27 p.m. EST, lists the newest NVIDIA filings as a Form 4 and the 8-K accession 0001045810-26-000090, both filed 23 Nov. No later 8-K was in that list. Treasury’s press-release index, opened on this check, shows newest items dated 23 Nov, on Iran, and none of the releases on that page is an Nvidia statement. A search did not find a Reuters or Politico story dated 25 or 26 Nov reporting that the answers had been delivered. Whether any answer was given in private is not known. This is not a finding that a docketed deadline was missed. CBS: https://www.cbsnews.com/news/bessent-nvidia-china-ai-chips-alice-huang-canard/. Reuters: https://www.reuters.com/5f374b32b07b/world/china/us-seeks-answers-nvidias-sale-chips-china-bessent-says-2026-11-22/. TECHi: https://www.techi.com/bessent-nvidia-board-10-day-deadline-ends-no-public-answer-huang/",
  "url": "https://www.politico.com/news/2026/11/22/treasury-department-waiting-answers-nvidia-01179718",
  "src": "Politico, 2026-11-22 12:43 p.m. EST; CBS News, 2026-11-22 1:48 p.m. EST; Reuters, 2026-11-22 5:48 p.m. UTC; TECHi, 2026-11-25 3:08 p.m. EST; NVIDIA newsroom, EDGAR company feed timestamped 2026-11-25 7:27 p.m. EST, and Treasury press-release index, checked 26 Nov 2026, 8:34 a.m. SGT"
 },
 {
  "date": "2026-11-25",
  "published_at": "2026-11-25T11:00:00-06:00",
  "layer": "capex",
  "headline": "Daily Herald: Rolling Meadows council approved Digital Realty’s data-center redevelopment 4–2 on the night of 24 Nov",
  "detail": "Daily Herald, published 25 Nov 2026, 11:00 a.m. CST, updated 3:12 p.m. CST. The paper says Rolling Meadows city council members on Tuesday night, 24 Nov, granted zoning relief and signed an incentive agreement for Digital Realty’s redevelopment of the Atrium Corporate Centre at 3800 Golf Road. The incentive agreement passed 4–2. Kevin O’Brien and Jenifer Vinezeano voted no. O’Brien was the only vote against the remaining zoning items, including plats and a special-use permit for utilities. The paper says the project is a $466.9 million redevelopment of the 40-acre site: demolition of a three-story, 485,000-square-foot office building and construction of two two-story data-center buildings totaling 975,000 square feet, plus a two-story ComEd substation. It says construction is set to begin by February 2029 and to be complete by June 2031. Those dates are the paper’s account of the agreement. It says the developer would pay the city at least $49 million, or as much as $52 million with inflation adjustments, between now and 2041, and that property taxes over that period would generate $159 million, including $95 million for Palatine Township Elementary School District 15 and Northwest Suburban High School District 214, and $2.5 million toward District 214’s $295 million school-bond program. It says city electricity taxes would be $35 million over the first decade, that the vacant office generates $2 million in property taxes, and that estimates show $12.7 million in the first year the data centers are running. The Class 6B endorsement, as the paper describes it, would assess the property at 10% of market value for 10 years, then 15% in year 11 and 20% in year 12, against a normal industrial assessment of 25%. The city’s FAQ, which says it was updated twice on 23 Nov and that the council would consider the project on 24 Nov, says the buildings are designed for about 156 megawatts of computing equipment and a ComEd substation of about 240 megawatts on a separate 4.6-acre lot, with closed-loop cooling and no cooling towers. The 156 MW and the 240 MW are the city’s description of the proposal. They are not in the Daily Herald article. They are planned capacity, not operating load. Data Center Dynamics, 25 Nov 2026, no clock printed, says Digital Realty acquired 3800 Golf Road in September for $81.5 million and, citing city documents, aims to develop 156 MW of IT capacity. DCD says the council was due to meet that week. It does not report the vote. The $81.5 million is DCD’s figure. The deed and the 28-page agreement were not opened. This is an approval of zoning and an incentive, not a statement that the halls are built. City FAQ: https://www.cityrm.org/1085/Data-Center-FAQ. DCD: https://www.datacenterdynamics.com/en/news/digital-realty-buys-vacant-office-outside-chicago-plans-156mw-data-center-campus/",
  "url": "https://www.dailyherald.com/2026/11/25/rolling-meadows-data-center-gets-tax-break-at-raucous-council-meeting/",
  "src": "Daily Herald, published 2026-11-25 11:00 a.m. CST, updated 3:12 p.m. CST; Rolling Meadows FAQ, updated 2026-11-23; Data Center Dynamics, 2026-11-25 (no clock; does not report the vote)"
 },
 {
  "date": "2026-11-25",
  "published_at": "2026-11-25T09:45:47-07:00",
  "layer": "capex",
  "headline": "SpaceX’s Cochise page claims a 10–40% cut in cooperative bills and a 24 GWh battery; the $50 billion and $3.6 billion are the campus already in the 22 Nov Fortune item (company claims)",
  "detail": "These are company claims, not a new spending guide and not an approval. The campus is the Arizona half of the plan already in the 22 Nov Fortune item: Fortune says SpaceX announced on 12 Nov a plan to spend more than $74 billion on two sites, roughly $50 billion in southeastern Arizona and more than $24 billion at Starbase, and Fortune says the Arizona permit application lists $3.6 billion in planned grid upgrades. SpaceX’s own Cochise County page, which prints no clock, says the company plans to invest $50 billion and, in the FAQ, “We have committed to invest $50 billion.” It says the site is up to six gigawatts, with up to 24 gigawatt-hours of battery storage, nine supercompute buildings of about 493,000 square feet each, dry cooling with no evaporative spray, and no industrial water consumption. It says total water use at full build-out, for the uses it lists, is up to 10 acre-feet a year, about what 20 to 30 Arizona homes use. It says there is no on-site power plant, and standby generation is about 10 megawatts of pipeline-gas generators per building for critical loads, with no bulk fuel stored on site. On bills, the page says a projected decrease of 10–40% in electricity bills for all Sulphur Springs Valley Electric Cooperative members for the life of the project, that $3.6 billion of grid upgrades would be transferred to Arizona Electric Power Cooperative members at zero cost, and that at full build-out SpaceX will provide up to $260 million a year to SSVEC members and up to $200 million a year to AEPCO members. The FAQ on the same page separately says up to $190 million annually for SSVEC capital improvements and benefits and up to $53 million a year to the SSVEC Foundation, plus the $200 million to AEPCO. Those lines are both printed. They are not added together here. The FAQ also says a $250 million one-time potential county sales-tax benefit and an anticipated $34 million to $103 million in new annual property-tax revenue. AZ Big Media, 25 Nov 2026, 9:45 a.m. MST, describes the same proposal: nine buildings of about 493,000 square feet, about six gigawatts, a 24-gigawatt-hour battery, about $3.6 billion of transmission and substation improvements, construction employment peaking at about 5,500 and about 1,000 permanent jobs, and the same tax ranges. AZ Big Media says the application estimates about seven to 10 acre-feet of water a year. That range is AZ Big Media’s account of the application. The company page’s “up to 10 acre-feet” is not restated as the same interval. AZ Big Media says those water figures have not been independently verified by the county, that no energy-services agreement has been completed according to SSVEC’s published project information, and that a final agreement would require Arizona Corporation Commission approval. The SSVEC page was not opened. AZ Big Media says the Planning and Zoning Commission is scheduled to consider the permit on 9 Dec 2026 and that the project has not been approved. TeslaNorth, 25 Nov 2026, no clock beyond the date line, says SpaceX is asking the county to keep that hearing and quotes “residential rates for SSVEC customers may decrease by up to 40%” and “We’re asking the Commission to keep it and let residents be heard.” Those two sentences were not on the campus page that loaded. The 10–40% projection on the company page is the figure used here. No project is treated as cancelled or delayed. The 9 Dec vote remains the reported county date already in Coming up. Company page: https://www.spacex.com/sites/cochise-county. TeslaNorth: https://teslanorth.com/2026/11/25/spacex-arizona-ai-data-center-power-bills/",
  "url": "https://azbigmedia.com/business/spacex-proposes-50-billion-arizona-ai-computing-campus/",
  "src": "SpaceX Cochise County page (no clock printed; company claims); AZ Big Media, 2026-11-25 9:45 a.m. MST; TeslaNorth, 2026-11-25 (hearing sentences not on the campus page that loaded)"
 },
 {
  "date": "2026-11-25",
  "layer": "capex",
  "headline": "Reuters: Bharti Airtel signed a pact to invest about ₹1,200 crore ($129.7 million) in three Assam data centres, completion expected by 2028",
  "detail": "Reuters, via The Hindu BusinessLine, published 25 Nov 2026, updated 9:20 p.m. The zone is not printed, so no publication clock is used. Reuters says Bharti Airtel said in a statement on Wednesday that it signed a pact with the government of Assam to invest around ₹1,200 crore ($129.7 million) for three data centres. The dollar figure is Reuters’ conversion. The Airtel statement was not opened. These are plans, not operating capacity. Reuters says the firm plans to invest about ₹700 crore for a data centre in Guwahati and another ₹500 crore across projects in Jorhat and Silchar. It says the Jorhat and Silchar centres will have a combined capacity of 25 MW and are expected to create around 164 direct jobs, and that similar details for Guwahati were not disclosed. It says the three centres are expected to be completed by 2028. That is an expectation, not a recorded commissioning. In the first phase, Reuters says Silchar will have 15 MW with a ₹255 crore investment and Jorhat will have 10 MW with an investment of 2 billion rupees. The ₹500 crore line and those phase-one rupee lines are both in the Reuters copy. They are not restated as one sum. Reuters’ background, earlier than this pact, is that the data-centre business runs through Nxtra, which is aiming for 1 GW of AI-ready capacity, and that Airtel had earlier announced a $1 billion investment in Nxtra by Alpha Wave Global, Carlyle and Anchorage Capital. Those sentences are not a new 25 Nov guide.",
  "url": "https://www.thehindubusinessline.com/info-tech/bharti-airtel-to-invest-1200-crore-in-three-data-centres-in-assam/article71743545.ece",
  "src": "Reuters via The Hindu BusinessLine, published 2026-11-25, updated 9:20 p.m. (zone not printed); company statement as Reuters reports it"
 },
 {
  "date": "2026-11-25",
  "layer": "memory",
  "headline": "TrendForce: Samsung’s HBM base-die wafer demand is seen doubling to about 30,000 4nm-equivalent wafers a month in 2027 (reported forecast)",
  "detail": "TrendForce, 25 Nov 2026. No clock is printed. Reported, industry sources, not a Samsung release. The 2027 volumes are a forecast. TrendForce says Samsung’s memory division’s wafer requirements for HBM base dies are projected to double in 2027, and that demand is expected to reach roughly 30,000 4nm-equivalent wafers per month next year. In an article dated 25 Nov 2026, “next year” is 2027, which is also the year in the headline. TrendForce says Samsung is looking to expand foundry capacity for base-die production at Giheung, Pyeongtaek and the upcoming Taylor P2 fab in the United States. It says, citing industry sources, that Samsung plans to convert its Giheung R&D line into a 4nm base-die line, to dedicate part of the Pyeongtaek P5 fab to base-die manufacturing, and that Taylor P2 is tentatively earmarked for HBM5 base-die production. Those site plans are what the sources told TrendForce. They are not a Samsung capex guide. TrendForce says Seoul Economic Daily previously reported that 4nm base-die production is confined to select foundry lines at Hwaseong and Pyeongtaek, where HBM4 core dies are made. Separately, TrendForce says Hankyung reports Samsung is targeting a doubling of HBM4 and HBM4E output in 2027, with monthly HBM wafer input rising nearly 40%, from 180,000 to 250,000 wafers, and the HBM4 series accounting for 80% of HBM shipments, up from 40% this year. That is TrendForce’s account of Hankyung, not a figure checked against Hankyung or against Samsung. TrendForce also says The Bell reports a custom HBM4E product for Meta, with the base die planned on Samsung’s 2nm process, and that eFocus reports Samsung is validating its own 2nm process as a fallback for Nvidia custom HBM if TSMC capacity is exceeded. Those sentences are TrendForce’s account of those papers. They are not Samsung confirmations.",
  "url": "https://www.trendforce.com/news/2026/11/25/breaking-samsung-grapples-with-hbm-base-die-crunch-as-internal-wafer-demand-seen-doubling-to-30k-per-month-in-2027/",
  "src": "TrendForce, 2026-11-25 (no clock; reported forecast, not Samsung guidance)"
 },
 {
  "date": "2026-11-25",
  "layer": "power",
  "headline": "MIT Technology Review: US data-center developers have announced more than 100 behind-the-meter gas plants, over 115 GW planned (Cleanview, as reported)",
  "detail": "MIT Technology Review, 25 Nov 2026, Casey Crownhart. No clock is printed. The same writer’s 24 Nov 2026 feature is where the Cleanview and BloombergNEF figures below are set out. The 25 Nov essay points back to that feature and repeats the planned-capacity total. These are announced projects, not plants in service, and the feature says it is possible that not all of them will be built. The feature says that as of October 2026, data from Cleanview, a market-intelligence company, show data-center developers have announced plans for more than 100 behind-the-meter gas plants in the United States, with combined planned capacity of over 115 gigawatts. It says the vast majority of those announcements have come since the beginning of 2025. The comparison with “more than double the peak power demand of California” is the feature’s. Cleanview’s own tracker was not opened. The feature says just 4.9 gigawatts of behind-the-meter gas projects tied to data centers are operating and 15.8 gigawatts are under construction, according to Cleanview’s data. It says BloombergNEF is tracking 181 gigawatts of announced on-site natural-gas plants at data centers globally, with 90% of that capacity designated for the United States. It says a BloombergNEF report finds that if all planned behind-the-meter gas plants for data centers in the United States go ahead, they could emit 345 million metric tons of carbon dioxide equivalent a year by 2035, which is 152 million metric tons more than if those data centers drew power from the US grid. The feature says that difference is greater than the total annual emissions of the Netherlands. Those tonnage figures are the feature’s account of BloombergNEF. The BloombergNEF report was not opened. The 25 Nov essay, citing an August announcement that is before this window, says PJM accepted proposals for 715 projects with a capacity of over 200 gigawatts, and that nearly half of that capacity was natural-gas plants. “Nearly half” is the essay’s wording. It says an analysis by Kevin Kircher of Purdue finds that if all the projects in the queue were built, the fossil-fuel share on PJM’s grid would rise from 61% to 67%. That is an analysis of a queue, not a metered result. The essay says plans for the Meta data center in Louisiana have expanded and the local utility went from three planned natural-gas plants to 10. That is the essay’s account. The utility filing was not opened. It says Meta’s emissions are up 45% over last year’s, according to the company’s 2026 sustainability report, against 18% for Google, 16% for Amazon and 25% for Microsoft, and that Meta is “reevaluating” its 2030 net-zero goal, with no details on how or when. The report was not opened. Those percentages are the essay’s account of it. Feature: https://www.technologyreview.com/2026/11/24/1149622/data-centers-natural-gas/",
  "url": "https://www.technologyreview.com/2026/11/25/1149836/data-centers-gas-power-plants",
  "src": "MIT Technology Review, 2026-11-25 (no clock), citing its 2026-11-24 feature; Cleanview and BloombergNEF figures as MIT Technology Review reports them; PJM queue is an August announcement"
 },
 {
  "date": "2026-11-24",
  "published_at": "2026-11-24T08:00:00-05:00",
  "layer": "capex",
  "headline": "Polaris Forge 2: first 25 MW hall in Harwood ready for service; base-build commissioning of the first 75 MW complete",
  "detail": "Applied Digital, Dallas, 24 Nov 2026, 8:00 a.m. EST, on GlobeNewswire. This is a commissioning milestone at Polaris Forge 2. It is not the 23 Nov lease, and the customer is not named. The company says it has completed base-build commissioning for the first 75 MW of its initial 150 MW data-center building at Polaris Forge 2 in Harwood, North Dakota. Within that phase, it says it has completed the integrated fit-out of the first 25 MW data hall and achieved Ready for Service on schedule. It says the base-build infrastructure for the full 75 MW phase has been tested and commissioned, and that the remaining 50 MW can now advance through fit-out and customer delivery. That remaining 50 MW is not described as ready for service. The company says this is the first Ready for Service achievement at its second AI Factory campus, following delivery of 250 MW of operational critical IT load at Polaris Forge 1 in Ellendale. That Ellendale figure is the company’s comparison. It is not a new Ellendale delivery in this release. The company says the Harwood building is fully leased as part of the customer’s 200 MW long-term lease at Polaris Forge 2, and that the building contributes to a portfolio of more than $41 billion in contracted base-term lease revenue. That portfolio total is the same wording as in the 23 Nov lease release. This release does not say the 23 Nov lease is this building. It says each 150 MW building is commissioned in two 75 MW phases, with three 25 MW data halls tested and commissioned together in each phase. Data Center Dynamics, 25 Nov 2026, no clock printed, reports the same 24 Nov milestone. DCD: https://www.datacenterdynamics.com/en/news/applied-digital-brings-online-25mw-data-hall-at-polaris-forge-2-data-center-in-north-dakota/",
  "url": "https://ir.applieddigital.com/news-events/press-releases/detail/166/applied-digital-achieves-initial-25-mw-ready-for-service-in",
  "src": "Applied Digital, 2026-11-24 8:00 a.m. EST; Data Center Dynamics, 2026-11-25 (no clock)"
 },
 {
  "date": "2026-11-24",
  "layer": "capex",
  "headline": "XTX Markets opens its first Kajaani data centre, 22.5 MW of IT capacity; power for a third building remains uncertain on the company’s account",
  "detail": "XTX Markets, London and Kajaani, 24 Nov 2026. No clock is printed. The company says it opened the first data centre on its Kajaani campus. The first facility provides 22.5 MW of IT power capacity and has 15,000 square metres of floor space, on a 193-hectare site. The second data centre is scheduled to become operational in 2027. That is a schedule, not a recorded opening. The company says it has hired more than 30 full-time employees in Kajaani and that the site can accommodate 50 permanent employees. It says this is the first time its compute is housed in its own data-centre infrastructure. Chief operating officer Mike Irwin says the firm has already invested over €400 million in construction, overwhelmingly with Finnish companies, and has ambitions to invest billions more. The billions are an ambition, not a contracted sum. He says those ambitions are being put at risk by expropriation permitting for grid development, and that without meaningful government engagement “future investment decisions will inevitably be called into question.” That is the company’s statement. It is not a finding that the opened hall, or the second building, has been cancelled or delayed. The company says electricity supply and grid connections have been secured for the first two facilities, and that permitting delays mean power availability remains uncertain for the third facility, already under construction and due for completion in mid-2028, and for further facilities planned annually after that. The third building’s completion date is the company’s “due for completion.” The power for it is the company’s “uncertain,” not a utility order opened for this item. The company says the data centre operates without consuming water for cooling. It says new philanthropic commitments total more than €1.6 million. On the move from leased space, it says that in one six-week period the team moved 417 petabytes of storage capacity, 385 servers containing 17,000 drives, with a combined weight of 26 tonnes, from a leased centre five kilometres away. Data Center Dynamics, 25 Nov 2026, no clock printed, reports the same opening. Dollar conversions in that article are not used. DCD: https://www.datacenterdynamics.com/en/news/quant-trading-firm-xtx-markets-launches-225mw-data-center-in-kajaani-finland/",
  "url": "https://www.xtxmarkets.com/news/2026-xtx-markets-opens-first-data-centre/",
  "src": "XTX Markets, 2026-11-24 (no clock printed); Data Center Dynamics, 2026-11-25 (no clock)"
 },
 {
  "date": "2026-11-24",
  "published_clock": "2026-11-24T15:24:17",
  "layer": "memory",
  "headline": "Korea Herald: Huang’s return eases HBM worries; the new figures are an industry estimate and TrendForce forecasts",
  "detail": "The Korea Herald, published 24 Nov 2026, 15:24:17, updated 16:51:11. The zone is not printed. The reinstatement itself is the 23 Nov NVIDIA release already in this feed. This item is only what the Herald adds. An unnamed industry source says existing partnerships are expected to remain stable, with some uncertainties remaining. That is the source’s view, not a Samsung or SK hynix statement. Sales to Nvidia in the first nine months of this year are estimated at nearly 35 trillion won ($26.06 billion), or 14.8 percent of SK hynix’s total revenue, according to industry sources. The dollar figure is the Herald’s conversion. It is not an SK hynix release. The Herald says TrendForce expects average HBM selling prices to more than double next year, rising 122 percent to $3.70 per gigabit. That is a forecast, and the TrendForce note was not opened. The Herald says TrendForce projects Nvidia will remain the largest source of global HBM demand in 2027, with its share falling from 55 percent this year to 42 percent, and Google’s share rising from 22 percent to 31 percent. Those shares are TrendForce forecasts as the Herald reports them. The Herald says SK hynix has signed long-term supply agreements with 14 major customers, including cloud providers, covering more than half of its projected production capacity for 2027 and 2028. The SK hynix release was not opened. The Herald says Samsung said on last month’s earnings call that planned HBM output for 2027 was already sold out, and that SK hynix said its DRAM and HBM supplies were effectively booked through 2029, counting signed contracts and demand under negotiation. Those are the Herald’s account of earlier remarks, not a new 24 Nov guide. Samsung’s deals with 10 major customers and talks with 10 more are the October briefing already in the 21 Nov Economy Tribune item. They are not a new count. The Herald also says Nvidia disclosed last week that supply and production-capacity commitments rose to $390 billion from $279 billion, with multiyear memory procurement accounting for most of the increase. That disclosure is last week’s, before this window. The CFO commentary was not reopened for this item, and those dollar figures are not restated here.",
  "url": "https://www.koreaherald.com/article/10947677",
  "src": "The Korea Herald, published 2026-11-24 15:24:17, updated 16:51:11 (zone not printed); industry estimate and TrendForce forecasts as the Herald reports them, not company guidance"
 },
 {
  "date": "2026-11-24",
  "published_at": "2026-11-24T16:05:00-05:00",
  "layer": "racks",
  "headline": "Dell Q3 FY27: revenue $54.9 billion, up 103%; AI-optimized server revenue $22.0 billion; FY27 AI-server outlook raised to $78.0 billion",
  "detail": "Dell IR, Round Rock, 24 Nov 2026, 4:05 p.m. EST. Quarter figures below are results. The fourth-quarter and full-year lines are guidance, not results. The release says third-quarter revenue was a record $54.9 billion, up 103% year over year. The results table states net revenue of 54,937 million against 27,005 million a year earlier, and marks that change up 103%. The prose figure is the rounding of that table. The same summary says diluted EPS was a record $8.82, up 287%, and non-GAAP diluted EPS was a record $9.45, up 265%. The table states diluted EPS of 8.82 against 2.28, up 287%. Cash flow from operations was a record $4.5 billion for the quarter; the table states 4,459 million. The release says year-to-date cash flow from operations was a record $10.8 billion; the nine-month column states 10,765 million. Infrastructure Solutions Group revenue was a record $42.0 billion, up 198%. Within that, AI-optimized server revenue was a record $22.0 billion, up 291%; traditional servers and networking were a record $15.0 billion, up 235%; storage was a record $4.9 billion, up 24%. ISG operating income was a record $7.1 billion, up 308%. Jeff Clarke, vice chairman and chief operating officer, says the company ended the quarter with a record $132.3 billion AI backlog after booking $60.2 billion of orders, “each rigorously vetted for customer quality and access to capital, land and power,” and that more than 7,500 customers are deploying Dell AI Factories. Those order, backlog, and customer figures are the company’s. The guidance table lists full-year FY27 revenue of $202.0 billion, up 78%, against a previous $192.0 billion, and AI-optimized server revenue of $78.0 billion, up 216%, against a previous $74.0 billion. It lists GAAP diluted EPS of $28.24, up 225%, against a previous $24.37, and non-GAAP diluted EPS of $29.68, up 188%, against a previous $25.50. The same table lists fourth-quarter revenue of $56.3 billion with 69 in the year-on-year column, GAAP diluted EPS of $7.90 with 134, and non-GAAP diluted EPS of $8.40 with 116. The prepared remarks state the fourth-quarter revenue midpoint as $56.25 billion, up 69% year over year, with AI-server revenue up sequentially to roughly $23.5 billion, and non-GAAP diluted EPS of $8.40 at the midpoint, up roughly 115%. The remarks also say the fourth-quarter guide implies full-year revenue of $202 billion, up nearly 80%, and non-GAAP diluted EPS of $29.68, up nearly 190% at the midpoint, “despite the mix pressure of $78 billion in AI server revenue.” The $56.3 billion in the table and the $56.25 billion midpoint in the remarks are both printed. They are not restated here as one number. Prepared remarks: https://investors.delltechnologies.com/_assets/_270719a6457975cf4cdc96deae78c939/delltechnologies/db/3595/34778/prepared_remarks/Q3_FY27_Prepared_Remarks.pdf",
  "url": "https://investors.delltechnologies.com/news-events/press-releases/detail/1665/dell-technologies-delivers-third-quarter-fiscal-2027-financial-results",
  "src": "Dell IR, 2026-11-24 4:05 p.m. EST; Q3 FY27 prepared remarks"
 },
 {
  "date": "2026-11-24",
  "published_at": "2026-11-24T16:00:00-05:00",
  "layer": "memory",
  "headline": "SanDisk closed down 11.13% on 24 Nov; Motley Fool ties the session to an Evercore target cut and AI-memory pricing worries (reported)",
  "detail": "StockAnalysis, citing S&P Global Market Intelligence, last updated 24 Nov 2026, shows the 24 Nov close at $77.95, down 11.13%, after a 23 Nov close of $87.71. Yahoo Finance’s history page shows the same close, $77.95, down $9.76, or 11.13%, at 4:00:00 p.m. EST. Those are closing prints. They are not SanDisk guidance, and they are not a finding that NAND demand fell. The Motley Fool, 24 Nov 2026, 12:45 p.m. EST, written while the shares were still trading, says the catalyst was Evercore ISI analyst Amit Daryanani maintaining an outperform rating and cutting his price target to $175 from $200. The Fool says the note pointed to the correction in AI-infrastructure stocks and to investors focusing on “pricing dynamics and potential downside risks.” The Fool also says investors are concerned that producers ramping supply for AI demand will create more supply than demand. The Evercore note was not opened. The $175 and $200 targets are the Fool’s account of a Wall Street forecast. The Fool’s page later shows the same close, $77.95, down $9.76, or 11.13%, as of 4:00 p.m. ET. No SanDisk statement on 24 Nov demand was opened. Yahoo history: https://finance.yahoo.com/quote/SNDK/history/",
  "url": "https://stockanalysis.com/stocks/sndk/history/",
  "src": "StockAnalysis (S&P Global Market Intelligence), last updated 2026-11-24; Yahoo Finance close, 2026-11-24 4:00:00 p.m. EST; The Motley Fool, 2026-11-24 12:45 p.m. EST (Evercore note not opened)"
 },
 {
  "date": "2026-11-24",
  "layer": "semis",
  "headline": "House Democratic ranking members write Trump on Huang’s reinstatement and ask for answers by 8 Dec",
  "detail": "Democrats on the House Energy and Commerce Committee, press release, 24 Nov 2026. No clock is printed. The letter is from Ranking Members Frank Pallone Jr., Gregory Meeks, Jamie Raskin, and Robert Garcia. The release says they wrote “today.” The letter itself is dated 24 Nov 2026. It asks for responses “as soon as possible, and no later than December 8.” That date is a request in the letter. It is not a subpoena, not a statute, and not a finding. The letter says the board “reinstated Jensen Huang as its CEO, apparently after you participated in NVIDIA’s board meeting to advocate for his return,” and footnote 10 cites a Semafor article of 23 Nov that was not opened. NVIDIA’s own 23 Nov release says the board received input from senior levels of the United States government. It does not say the president attended a board meeting. The letter dates the reinstatement to 23 Nov. The 8-K dates the board vote to 22 Nov and the press release to 23 Nov. Question 6 asks for communications between the president, the vice president, White House officials, or senior administration officials and the NVIDIA board between the resignation on 12 Nov 2026 and the reinstatement on 23 Nov 2026. The release’s account of what the president knew, and of his council of science advisers, is the committees’ description of reports. Press release: https://democrats-energycommerce.house.gov/media/press-releases/house-democrats-demand-answers-trump-nvidia",
  "url": "https://democrats-energycommerce.house.gov/sites/evo-subsites/democrats-energycommerce.house.gov/files/evo-media-document/2026.11.24-multi-committee-letter-to-president-trump-re-jensen-huang.pdf",
  "src": "House Democratic ranking members’ letter and Energy and Commerce Democratic press release, 2026-11-24 (no clock printed)"
 },
 {
  "date": "2026-11-23",
  "layer": "semis",
  "headline": "NVIDIA: board reinstated Jensen Huang as president, CEO, and director; the 8-K dates the vote to 22 Nov and the release to 23 Nov",
  "detail": "NVIDIA newsroom, 23 Nov 2026. No clock is printed. The 8-K, filed 23 Nov 2026, says that on 22 Nov 2026 the board reinstated Jen-Hsun Huang as president, chief executive officer, and a member of the board, effective immediately, and that Colette M. Kress continues as executive vice president and chief financial officer. Exhibit 99.1 is the press release dated 23 Nov 2026. The release says the board voted unanimously after discussions with Huang, that it was satisfied with his candor and ability to lead, and that it received input from senior levels of the United States government and is confident the reinstatement poses no national security risk. It thanks Kress for her service as interim CEO and for continuing as chief financial officer. Harvey C. Jones remains chair. The release says an independent-director committee’s investigation of reported foreign-intelligence targeting will proceed to conclusion, that Huang supports it, that a separate National Security and Export Control Committee of independent directors has been formed, and that the company is starting a search for a chief compliance officer. It says NVIDIA will continue to cooperate with ongoing government investigations and inquiries. It does not name the SEC, and it does not say any inquiry has closed. It does not name the president. There is no separate Kress-interim item still inside this window; the 22 Nov Zaobao sentence that used her interim title is updated in that item and is not deleted. StockAnalysis, citing S&P Global Market Intelligence, last updated 24 Nov 2026, shows the 23 Nov close at $165.05, up 31.48% from the 20 Nov close of $125.53, and the 24 Nov close at $152.32, down 7.72%. The 31.48% is the close-to-close change. A round “30%” is not these closes. Investing.com’s 23 Nov close recap, published 4:30 p.m. with no zone printed, says NVDA rose 31.48%, or 39.52 points, to 165.05. Reuters, 23 Nov 2026, 1:59 p.m. UTC, says the shares closed up 31.5% and that the move added nearly $1 trillion in market value. Those market-value words are Reuters’. The same story says the reinstatement came under pressure from President Trump and quotes him telling CNBC, “I believe my intervention was very important to get Jensen Huang back.” That is Reuters’ account, not the company’s release. These prices are not an operating result. 8-K: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm. Close series: https://stockanalysis.com/stocks/nvda/history/. Investing.com recap: https://www.investing.com/news/stock-market-news/us-stocks-higher-at-close-of-trade-dow-jones-industrial-average-up-301-5046476. Reuters: https://www.reuters.com/3fec1b0a85a0/technology/nvidia-reinstates-jensen-huang-ceo-2026-11-23/",
  "url": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director",
  "src": "NVIDIA newsroom, 2026-11-23 (no clock printed); NVIDIA 8-K filed 2026-11-23, event date 2026-11-22; StockAnalysis (S&P Global), last updated 2026-11-24; Investing.com close recap, 2026-11-23 4:30 p.m. (zone not printed); Reuters, 2026-11-23 1:59 p.m. UTC"
 },
 {
  "date": "2026-11-23",
  "layer": "racks",
  "headline": "HPE Q4 FY26: revenue $14,547 million, up 50.3% year on year; FY27 revenue outlook raised to $59.4–63.1 billion",
  "detail": "HPE newsroom, Houston, 23 Nov 2026. No clock is printed on the release. Quarter ended 31 Oct 2026. The release prose says revenue was $14.5 billion, up 50% from the prior-year period. The financial table in the same release, filed as exhibit 99.1 to the 8-K of 23 Nov 2026, states net revenue of $14,547 million, against $9,679 million a year earlier, and marks that change up 50.3%. The prose figure is the rounding of that table. Cloud & AI revenue in the table was $11,257 million, up 68.6% from $6,676 million; the prose rounds this to $11.3 billion. Within Cloud & AI, server revenue was $8,790 million, up 94.7% from $4,514 million (prose: $8.8 billion); storage was $1,480 million, up 33.8% (prose: $1.5 billion); Financial Services was $900 million, up 1.2% (prose: $0.9 billion). Networking revenue was $3,056 million, up 12.3% from $2,722 million (prose: $3.1 billion), with an operating margin of 22.1% against 23.4% a year earlier. Within Networking, data-center networking was $397 million, up 12.1%, and campus and branch was $1,498 million, up 16.7%. Cloud & AI’s operating margin was 18.4%, against 9.3% a year earlier. GAAP diluted EPS was $1.26 and non-GAAP diluted EPS was $1.43. Quarterly free cash flow was $1.9 billion, which the release says was flat from the prior-year period. Those quarterly lines are results. The fiscal 2027 lines are a raised outlook, not results. HPE says it is raising the FY27 revenue-growth outlook to 27% to 35%, representing $59.4 billion to $63.1 billion of revenue. It estimates GAAP diluted net EPS of $3.68 to $3.98 and is raising non-GAAP diluted net EPS to $5.05 to $5.35. It is also raising free-cash-flow guidance and now expects free cash flow of at least $5.5 billion. The release says that free-cash-flow guidance is non-GAAP and that HPE cannot reconcile it to the comparable GAAP measure without unreasonable effort. Exhibit: https://www.sec.gov/Archives/edgar/data/1645590/000164559026000097/ex-991x11232026x8k.htm",
  "url": "https://www.hpe.com/us/en/newsroom/press-release/2026/11/hpe-reports-fiscal-2026-fourth-quarter-results.html",
  "src": "HPE newsroom, 2026-11-23 (no clock printed); exhibit 99.1 to the HPE 8-K filed 2026-11-23"
 },
 {
  "date": "2026-11-23",
  "published_at": "2026-11-23T08:00:00-05:00",
  "layer": "capex",
  "headline": "Applied Digital: new 18-year, 150 MW lease with an unnamed investment-grade hyperscaler, about $5.4 billion over the base term",
  "detail": "Applied Digital, Dallas, 23 Nov 2026, 8:00 a.m. EST, on GlobeNewswire. The company says it entered an 18-year lease with a tier-one investment-grade hyperscaler for 150 MW of critical IT capacity. The customer is not named. The lease provides for approximately $5.4 billion of base-term contracted revenue, or approximately $12.7 billion if all renewal options are exercised over a 33-year total term. With this lease, the company says total contracted base-term lease revenue exceeds $41 billion, or approximately $100 billion if all renewal options are exercised. The renewal totals are not contracted revenue until those options are exercised. The release says the lease has improved commercial terms, including higher pricing, and it does not print a price per megawatt. Delivery of the capacity is “currently anticipated to begin in the first half of calendar 2028,” subject to development milestones, utility arrangements, and regulatory approvals. That is the company’s expectation, not a recorded delivery. The release does not name the campus this 150 MW sits on. It says that with this lease the portfolio is over 1.6 GW of total contracted critical IT load and 2.2 GW of grid-connected peak load, and that approximately 75% of total contracted base-term lease revenue is now attributable to investment-grade customers. The financing sentences are plans. The CFO says the company plans to finance this build with equity already funded and through a $5 billion programmatic equity partnership with Macquarie Asset Management, followed by project financing, and expects to finish the remaining project finance for Delta Forge 1 and Polaris Forge 3 in the first calendar quarter of 2027 and for Delta Forge 2 in the second. The release does not say this lease is at one of those named campuses.",
  "url": "https://ir.applieddigital.com/news-events/press-releases/detail/165/applied-digital-secures-new-150-mw-18-year-lease-with",
  "src": "Applied Digital, 2026-11-23 8:00 a.m. EST"
 },
 {
  "date": "2026-11-23",
  "published_clock": "2026-11-23T19:53:00",
  "layer": "memory",
  "headline": "Chosunbiz: Goldman Sachs cuts Samsung’s target to 350,000 won and SK hynix’s to 2 million won, and keeps Buy (Wall Street forecast)",
  "detail": "Chosunbiz English, entered 23 Nov 2026, 19:53. The zone is not printed. This is a Goldman Sachs forecast, as Chosunbiz reports a note it says was published on the 22nd, local time. It is not Samsung or SK hynix guidance, and the Goldman note itself was not opened. Goldman cut its Samsung Electronics target by 30%, from 500,000 won to 350,000 won, and its SK hynix target by 43%, from 3.5 million won to 2 million won. It lowered its 2028 operating-profit forecasts for the two companies by 26% and 23%, respectively, and kept a Buy rating on both, which Chosunbiz says was because Goldman called the recent share-price declines excessive. Chosunbiz says Goldman expects the chip shortage to last through next year and to ease substantially in 2028, when memory prices begin to fall. It forecast the DRAM supply shortfall narrowing from 5.1% next year to 1.2% in 2028. It expects conventional DRAM prices to fall by 20% and 19%, respectively, in 2028 from the prior year. The article does not name the two series those percentages belong to, so they are not assigned here. It forecast NAND prices down by about 20%. On high-bandwidth memory, Chosunbiz says Goldman forecast the market at $60 billion this year, $200 billion next year, and $237 billion in 2028. In an article entered on 23 Nov 2026, those years are 2026, 2027, and 2028. Chosunbiz says Goldman still cut the 2028 profit forecasts because HBM growth alone was unlikely to offset falling conventional-memory prices. An earlier Morgan Stanley target cut mentioned in the same article is dated the 9th and is outside this window.",
  "url": "https://biz.chosun.com/en/en-finance/2026/11/23/RXXK5VX6ZFAZNF5XXNVNGKYQUA/",
  "src": "Chosunbiz, entered 2026-11-23 19:53 (zone not printed), reporting a Goldman Sachs forecast dated to the 22nd, local time (Wall Street forecast; the note was not opened)"
 },
 {
  "date": "2026-11-23",
  "published_at": "2026-11-23T10:20:00-05:00",
  "layer": "memory",
  "headline": "Yahoo Finance: Micron up 20% intraday; the page says Citi estimates a full halt to Nvidia-linked financing would cut DRAM demand about 12% (reported)",
  "detail": "Yahoo Finance, 23 Nov 2026, 10:20 a.m. EST. The page is a TIKR article. It says Micron jumped 20% that morning after Citi estimated that a complete halt to Nvidia-linked financing would cut DRAM demand only about 12%, and NAND demand about 7%. The 20% is the article’s account of an intraday move. It is not a closing print, and no exchange release was opened for this item. The 12% and the 7% are the article’s account of a Citi estimate. The Citi note was not opened. Other claims on the same page, including a report that Nvidia’s board reinstated its chief executive and a percentage move in Nvidia shares, were not used in this item. The reinstatement and the closing prices are in the NVIDIA item. Investing.com’s 23 Nov 2026 close recap, published 4:30 p.m. with no zone printed, says Micron gained 19.04% to close at 707.70. That is a closing print in the recap. It is separate from the 20% intraday figure above, and it is not a Micron result.",
  "url": "https://finance.yahoo.com/markets/stocks/articles/micron-soars-20-citi-says-152000640.html",
  "src": "Yahoo Finance (TIKR), 2026-11-23 10:20 a.m. EST (reported; Citi estimate as relayed, not a Citi note)"
 },
 {
  "date": "2026-11-23",
  "published_clock": "2026-11-23T06:40:00",
  "layer": "racks",
  "headline": "Yonhap, citing the FT: Dell, HPE, Lenovo and Supermicro are seeking higher AI-server prices after signing (reported)",
  "detail": "Yonhap, 23 Nov 2026, 06:40, Seoul dateline. The zone is not printed, so no zoned publication clock is used. The page is in Korean. This is Yonhap’s account of a Financial Times report, which Yonhap says cited people familiar with the matter. It is not a Dell, HPE, Lenovo, or Supermicro price list, and those companies are not quoted. Yonhap says that when delivery comes due, those suppliers ask for a price considerably higher than the amount agreed in the contract. It names Jane Street, Optiver, and Hudson River Trading as trading firms hit while building their own data centers. One source, in Yonhap’s rendering, says increases of 25%, 30%, and 45% are disconcerting. Another says it is now standard to sign a contract that carries an indicative price which can be arbitrarily higher at delivery, and that the speaker’s side has never refused. A further source says GPU-server prices rose at least 20–30%, and that prices of CPU nodes with a large memory share jumped to three times or more. Yonhap says the FT treats suppliers passing on the memory-cost surge as the main cause. JPMorgan research, as Yonhap relays it, estimates that DRAM prices will rise more than 400% from the start of 2024 through the end of this year. That is an estimate of a path through year-end, not a completed print. On one dispute, Yonhap says XTX Markets, a British trading firm building a data center in Finland, sued Dell in an Irish court in June. Court papers, as Yonhap describes them, fixed the server price at $549 million, after which Dell said at least another $62 million to $70 million would be required. Yonhap says the XTX filing claims Dell’s management said other firms facing increases looked at other suppliers and then returned and agreed to a price adjustment. The Financial Times page itself was not opened.",
  "url": "https://en.yna.co.kr/view/AKR20261123007000009",
  "src": "Yonhap, 2026-11-23 06:40 (Seoul dateline; zone not printed), citing the Financial Times (reported)"
 },
 {
  "date": "2026-11-22",
  "published_at": "2026-11-22T12:43:00-05:00",
  "layer": "semis",
  "headline": "Bessent: Treasury still has no Nvidia answers on China chip sales; Politico says a 25 Nov deadline was set last week (reported)",
  "detail": "Politico, 22 Nov 2026, 12:43 p.m. EST. Treasury Secretary Scott Bessent, on CBS’s Face the Nation, said the department has not yet received Nvidia’s answers on whether it knowingly routed restricted artificial-intelligence chips to China. Bessent: “We have been in touch with the temporary management, with their lead directors, and we need answers.” Politico says that last week Bessent said Nvidia must indicate by 25 Nov whether it used shell companies to bypass federal regulations in order to sell its most powerful chips to China. That date is Politico’s account of last week’s statement. This article does not quote a new written Treasury order. Bessent on Sunday: “It behooves Nvidia to move quickly on this because we want to know what the culture was: Was there a promiscuous attitude toward this, and if it happened, where were the faults?” and “Was it at the lower levels? Was it at the middle levels? Did it go all the way to the top?” Reuters, dateline 22 Nov, on Investing.com with a 12:52 p.m. timestamp and no zone printed, reports the same interview, the same compliance questions, and Bessent’s line that the board is working to determine what happened. Reuters’ copy does not print the 25 Nov date. Nvidia is not quoted in either story. This is not a finding that shell companies were used. Follow-up on this check, 25 Nov 2026, 8:25 a.m. SGT: no Treasury release and no Nvidia statement was found saying the 25 Nov answers had been delivered or that the date had moved. NVIDIA’s 23 Nov release, after this interview, says Huang was reinstated and that Kress continues as executive vice president and chief financial officer. Bessent’s “temporary management” line described the management in place on 22 Nov. Reuters copy: https://www.investing.com/news/stock-market-news/us-seeks-answers-on-nvidias-sale-of-chips-to-china-bessent-says-5044083",
  "url": "https://www.politico.com/news/2026/11/22/treasury-department-waiting-answers-nvidia-01179718",
  "src": "Politico, 2026-11-22 12:43 p.m. EST; Reuters via Investing.com, 2026-11-22 12:52 p.m. (zone not printed)"
 },
 {
  "date": "2026-11-22",
  "published_at": "2026-11-22T11:34:00-05:00",
  "layer": "power",
  "headline": "Fortune, citing Howden: US data-center power demand up 19% a year since 2000, grid capacity 2%",
  "detail": "Fortune, 22 Nov 2026, 11:34 a.m. ET. The growth rates are Howden’s, not a Fortune measurement and not company guidance. Fortune says that since 2000, power to data centers has risen an average of 19% a year while U.S. grid capacity has expanded 2% annually, “according to an analysis by insurance broker Howden.” Howden’s own release, dated 11 Nov 2026, which is before this window, states the same comparison: US data-centre power demand has risen by 19% per year since 2000, and the US electricity grid has expanded capacity by 2% per year. Howden says that is its analysis of EIA data and 451 Research by S&P Global. The same release says data centres’ share of total US grid capacity grew from 0.1% in 2000 to 5% in 2025, and that holding that 5% share through 2030 at current growth rates would require sourcing up to 58% of their power, 110 gigawatts, from behind-the-meter sources by 2030, which Howden says is unlikely to be achievable. Fortune repeats the 5% share for 2025, the “up to 58%,” and “roughly 110 gigawatts,” and says Howden considers that level unlikely. Those figures are Howden’s. Other spending and price studies cited in the Fortune article are not restated here. Howden release: https://www.howdengroupholdings.com/news/us-data-centre-power-demand-rising-10x-faster-than-grid-capacity-accelerating-a-switch-to-alternatives",
  "url": "https://fortune.com/2026/11/22/ai-data-centers-power-grid-capacity/",
  "src": "Fortune, 2026-11-22 11:34 a.m. ET, citing Howden’s 11 Nov 2026 release (Howden analysis of EIA and 451 Research)"
 },
 {
  "date": "2026-11-22",
  "published_at": "2026-11-22T06:25:00-05:00",
  "layer": "capex",
  "headline": "Fortune: SpaceX’s Texas and Arizona AI campuses face who-pays votes; the more-than-$74 billion plan is a 12 Nov announcement",
  "detail": "Fortune, 22 Nov 2026, 6:25 a.m. ET. The spending figure is not a new guide issued on 22 Nov. Fortune says the Cochise County campus is the larger half of a plan SpaceX announced on 12 Nov to spend more than $74 billion on two AI supercomputing sites, roughly $50 billion in southeastern Arizona and more than $24 billion at Starbase, Texas, as Reuters reported. That 12 Nov Reuters article was not opened. Fortune says the Arizona project would draw 6,000 megawatts at full build-out. That load is Fortune’s statement. Fortune’s comparison with an Arizona Public Service peak is attributed to KJZZ and was not rechecked. On Texas, Fortune says The Texas Tribune reported a gas-fired plant and super-compute facility on 444.45 acres, and that SpaceX says the plant will not draw from the public grid because it generates its own electricity. The 16 Nov air permit for 35 turbines and 750 megawatts is the permit already recorded in the 17 Nov Politico item; Fortune cites it via Newsweek citing Politico and it is not a new permit. Actions Fortune places inside this window: on 17 Nov, Cameron County commissioners voted 3–2 against moving ahead with talks on a 10-year, 100% property-tax abatement; Starbase’s city commission is scheduled to consider a tax abatement on 9 Dec. On 19 Nov, Attorney General Kris Mayes asked the Cochise County Planning and Zoning Commission to postpone its 9 Dec vote. Fortune quotes her: “The people of Cochise County deserve answers before county officials approve a project of this magnitude.” The county agendas and the letter were not opened. Fortune says the Arizona permit application lists $3.6 billion in planned grid upgrades. That is Fortune’s description of the application. No project is treated as cancelled or delayed. A separate remark in the article about the incoming Texas governor is not used here as a freeze.",
  "url": "https://www.fortune.com/2026/11/22/spacex-74-billion-ai-data-centers-texas-arizona-who-pays/",
  "src": "Fortune, 2026-11-22 6:25 a.m. ET (the more-than-$74 billion figure is Fortune’s citation of a 12 Nov Reuters report, which was not opened)"
 },
 {
  "date": "2026-11-22",
  "layer": "power",
  "headline": "The Nation: Thai Cabinet backs a draft decree for direct EGAT sales to data centres of at least 200 MW; not enacted",
  "detail": "The Nation, 22 Nov 2026. No clock is printed. The Nation says the Cabinet has approved a draft royal decree that would allow data centres requiring at least 200 megawatts per project to buy power directly from the Electricity Generating Authority of Thailand. It attributes that to a Government House source and says the Cabinet recently endorsed an Energy Ministry proposal to amend Section 3 of the 1989 Royal Decree on Electricity Users. The cabinet meeting date is not stated. The Nation’s own line is “If enacted.” This is a draft. It is not a statute in force, and it is not a power-purchase agreement with a named data centre. The 200 MW figure is the threshold in that account of the draft.",
  "url": "https://www.nationthailand.com/business/economy/40073777",
  "src": "The Nation, 2026-11-22 (draft decree; cabinet date not stated; not enacted)"
 },
 {
  "date": "2026-11-21",
  "published_at": "2026-11-21T05:04:00+09:00",
  "layer": "semis",
  "headline": "Nikkei: at least two Nvidia server partners have suspended Southeast Asia shipments (reported)",
  "detail": "Nikkei Asia, 21 Nov 2026, 05:04 JST. Reported. The portion of the article that loaded says at least two of Nvidia’s server partners have suspended shipments to clients in Southeast Asia amid the latest U.S. export controls, and that Nikkei “has learned” this. It does not name the partners. Lianhe Zaobao’s English page, 22 Nov 2026, 20:03, zone not printed, is labeled an AI translation and cites Nikkei for further detail: an unnamed server manufacturer suspended all shipments from Friday, 20 Nov; another put deliveries on hold on advice from its legal department while it checks compliance; and one is also temporarily declining orders from new customers in the region. Zaobao quotes an unnamed executive on the risk of holding expensive GPU boards as inventory. Zaobao also says several suppliers said near-term projects were proceeding as usual, with demand and orders for the next two years largely unchanged, and that specifications and capacity planning face greater uncertainty from the second half of 2028. Those sentences are Zaobao’s translation of the Nikkei report, not a second survey and not Nvidia guidance. Zaobao says interim chief executive Colette Kress stressed that partnerships with customers and suppliers remained unaffected. That was her title in Zaobao’s 22 Nov account. The sentence is kept. NVIDIA’s newsroom post of 23 Nov 2026 says that after the board reinstated Jensen Huang, Kress continues as executive vice president and chief financial officer, and the board thanked her for her service as interim CEO. The 23 Nov release does not call her interim CEO. The underlying rule is the 19 Nov Federal Register item. Zaobao’s retelling names Singapore, Malaysia, Thailand, and Indonesia and does not mention Brazil, which is in the rule text already recorded. Zaobao: https://www.zaobao.com.sg/en/news/world/nvidia-suppliers-halt-shipments-southeast-asia-us-tightens-chip-controls",
  "url": "https://asia.nikkei.com/business/technology/artificial-intelligence/nvidia-server-suppliers-halt-southeast-asia-shipments-over-us-curbs",
  "src": "Nikkei Asia, 2026-11-21 05:04 JST (reported); Lianhe Zaobao English, 2026-11-22 20:03 (zone not printed; AI translation citing Nikkei)"
 },
 {
  "date": "2026-11-21",
  "published_clock": "2026-11-21T12:54:00",
  "layer": "memory",
  "headline": "Economy Tribune: most of Samsung’s 2027–2029 memory capacity is already under contract; some customers want 2031 (reported)",
  "detail": "Economy Tribune, entered 21 Nov 2026, 12:54, updated 13:08. The zone is not printed. Reported, one person familiar with the matter, not a Samsung release. The paper says most of Samsung Electronics’ memory production capacity for 2027 through 2029 is already secured by contract, and that some customers are asking for volume beyond existing contracts and are pushing to extend agreements through 2031. The headline’s “사실상 완판” is the paper’s “effectively sold out.” The body says most of that capacity, not a Samsung percentage of the whole fleet. Citing industry sources, the paper says major memory makers currently meet only about 60–70% of demand, that 2027 commodity-DRAM wafer capacity is effectively sold out, and that DRAM bit-supply growth is expected to be limited to at most 20–25% a year. Those are the article’s industry estimates, not Samsung guidance. The paper also recalls Samsung’s 29 Oct third-quarter briefing: long-term agreements with 10 major customers, talks with 10 more, a goal of putting 60–70% of memory capacity under such agreements by 2030, and price floors on the agreements already signed. That briefing is earlier than this window. It is not a new 21 Nov guide. Wccftech’s 21 Nov article is a rewrite of this report: https://wccftech.com/samsungs-memory-production-reportedly-almost-fully-booked-through-2029-as-customers-seek-supply-deals-until-2031/",
  "url": "https://www.economytribune.co.kr/news/articleView.html?idxno=3904497",
  "src": "Economy Tribune, entered 2026-11-21 12:54 (zone not printed; reported, not Samsung guidance)"
 }
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
