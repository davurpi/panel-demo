# Synkiria Physical AI: Unitree hardware, state of the art, R&D definitions and Spanish funding/finance rules (research notes, 18 Oct 2026)

Labelling used in these notes:
- **[VERIFIED-WEB]**: fetched or seen in a search result during this session (Oct 2026).
- **[KNOWN-SOURCE]**: a primary source I know from before this session (canonical URL given) that I did not re-fetch here. The report writer should spot-check these before relying on them.
- **[ESTIMATE]**: my own calculation or assumption.

---

## 1. Unitree models, prices, EDU features, hands, EU purchase logistics

### Takeaway
The only official Unitree list price is for the **G1 base, at US$13,500** (tax and shipping excluded). That model has **no secondary development**, so it is not usable for Synkiria's project. Every programmable "EDU" variant is sold "contact sales" through distributors. The verified EU retail anchors are **G1 EDU Ultimate A (U3, Dex3-1 hands plus Jetson Orin NX) at €54,450 (RobotShop EU)** and **R1 EDU Pro D (U6) at €33,880 incl. tax (RobotShop EU)**. A realistic budget line for a G1 EDU with dexterous hands, delivered in Spain, is roughly **€45,000–€75,000 + VAT** [ESTIMATE].

### Cited Findings

**G1 (official unitree.com)**
- G1 base is listed at "US $13.5K (tax and shipping excluded)". G1 EDU is "contact sales". G1 base has 23 DOF; G1 EDU has 23–43 DOF. G1 EDU options: Dex3-1 three-fingered hand (7 DOF per hand), 2 extra wrist DOF, 2 extra waist DOF, and a "high computing power module" ("such as Orin, etc."). Both versions use a 9,000 mAh quick-release battery, about 2 h of runtime. Secondary development: **EDU only**. Warranty: **8 months (G1) vs 18 months (G1 EDU)** [VERIFIED-WEB] — [Unitree G1 official page](https://www.unitree.com/g1)
- G1 EDU Ultimate A (U3), which includes Dex3-1 hands and an NVIDIA Jetson Orin NX (100 TOPS), is listed at **US$65,900 (RobotShop US)**, **CA$94,142.86 (RobotShop CA)** and **€54,450 (RobotShop EU)**. I could not open the EU page directly (HTTP 403), so I could not confirm whether VAT is included [VERIFIED-WEB, search snippet] — [RobotShop EU G1 EDU U3](https://eu.robotshop.com/products/unitree-g1-edu-ultimate-u3-humanoid-robot-eu); [RobotShop US](https://www.robotshop.com/products/unitree-g1-edu-ultimate-u3-humanoid-robot-us)
- US resellers list G1 EDU configurations from **US$43,900 (EDU Standard) to US$73,900 (Ultimate D)**. Maverick Drone states that the manufacturer does not allow it to publish prices and quotes on request — [Maverick Drone G1 EDU](https://www.maverickdrone.com/es/products/g1-edu)
- One aggregator gives a G1 range of **US$17,990–$83,900** across Basic, entertainment and EDU builds (re-verified 5 Oct 2026, dealer checkout prices, affiliate links). The same aggregator says G1 EDU has full SDK plus ROS 2, Jetson Orin compute of 40–100 TOPS, and supports LeRobot and Isaac GR00T. It gives a US lead time of about 2–4 weeks for G1 — [botinfo.ai R1 vs G1](https://botinfo.ai/articles/unitree-r1-vs-g1)
- An MIT wiki records a **G1 EDU quote of about US$60,000 (Jan 2025)** — [MIT wiki](https://wikis.mit.edu/confluence/x/JZF-F)
- Spain: Xataka reported the G1 (base) on sale in Spain for **about €24,900, with 8–10 weeks' delivery**. An earlier headline said about €22,000 — [Xataka Android](https://www.xatakandroid.com/mercado/unitree-g1-asi-pionero-robot-humanoide-que-puedes-comprar-para-tu-casa-22-000-euros)

**Dexterous hands and accessories**
- Dex3-1 (for G1) is listed at **€7,973 (Funduinoshop, Germany; sold out)** [VERIFIED-WEB, search snippet] — [Funduinoshop](https://funduinoshop.com/en/detail/index/sArticle/5559)
- Dex3-1 with RGB camera for G1-D (left, single hand) is listed at **CA$10,971.43** — [RobotShop CA](https://ca.robotshop.com/products/unitree-dex3-1-three-finger-robotic-hand-w-rgb-camera-g1-d-robot-left). Dex3-1 Tactile Hand for H2 (left) is listed at US$7,787.50 — [RobotShop](https://www.robotshop.com/products/unitree-dex3-1-tactile-hand-for-unitree-h2-left)
- Robostore says Dex3 hands are compatible only with G1 EDU (U1) and higher tiers. It also offers "Inspire 5-finger" configurations, but I found no price — [Robostore Dex3-1](https://robostore.com/products/unitree-dex3-1-dexterous-hands); [Robostore G1 EDU Ultimate E (U7)](https://robostore.com/products/unitree-g1-edu-ultimate-e-robotic-humanoid-u7)

**R1**
- R1 base: **€9,996 incl. VAT plus shipping (Funduinoshop DE, page dated 31 Mar 2026)**. China price: 29,900 CNY (about €3,700). R1 is also sold globally via AliExpress "Marcas+" — [Funduinoshop R1](https://funduinoshop.com/en/robotics/unitree/r1-humanoider-roboter/unitree-r1); [iProfesional](https://www.iprofesional.com/tecnologia/452400-revolucion-robotica-un-humanoide-a-precio-accesible-llega-al-mercado-global-a-traves-de-aliexpress)
- R1 EDU Pro D (U6): **€33,880 incl. tax (RobotShop EU)**. Deliveries are phased from Q2 2026. EU SKUs exist for EDU tiers U1–U6. Warranty: 8 months (basic) vs 12 months (EDU) — [RobotShop EU R1 U6](https://eu.robotshop.com/nl/products/unitree-r1-edu-pro-d-u6-humanoid-robot-eu); [RobotShop R1 pre-order blog](https://community.robotshop.com/blog/show/pre-order-the-new-unitree-r1-humanoid-robot-at-robotshop)
- US dealer prices for R1: Basic **US$8,990 (no SDK)**, EDU Standard **US$15,950**, EDU Pro **US$32,900**. US lead time is about 4–6 weeks — [botinfo.ai](https://botinfo.ai/articles/unitree-r1-vs-g1). A separate report says Unitree's own store listed R1 EDU at US$10,500 plus US$300–1,200 shipping. The prices **conflict** across channels — [botinfo R1](https://botinfo.ai/articles/unitree-r1-humanoid-robot)
- Headline R1 price at launch: from US$5,900 — [Mobile World Live](https://www.mobileworldlive.com/spanish/estan-a-punto-los-robots-humanoides-para-el-mundo-real/)

**H2 / Go2**
- H2 EDU: **US$68,900 incl. US tariffs (RobotShop US)**. The H2 family ranges from US$40,900 to $68,900. I found no EUR price — [RobotShop H2 EDU](https://www.robotshop.com/products/unitree-h2-edu-humanoid-robot); [GlobalDroneHQ price guide](https://globaldronehq.com/blogs/guides/unitree-robot-price-guide-2026)
- Go2 EDU: **£8,400 (iRed UK)**; from US$11,190 (GlobalDroneHQ, Aug 2026). Botland EU shows about €12,195.50, but the listing is ambiguous — [iRed](https://store.ired.co.uk/products/unitree-go2-edu-quadruped-robot); [Botland](https://botland.store/brand/547-unitree)

**Development stack**
- unitree_sdk2 is "used to develop Go2, B2, H1, G1, H2, R1, A2 robots in real environments". Unitree's unitree_ros2 package officially targets Go2/B2. G1 ROS 2 bridges are community projects (e.g., G1Pilot) — [Unitree GitHub](https://github.com/unitreerobotics); [G1Pilot](https://github.com/hucebot/g1pilot); [Unitree open source](https://www.unitree.com/mobile/opensource)
- **LeRobot (Hugging Face) officially supports the Unitree G1** (29 and 23 DoF), covering teleoperation and loco-manipulation policy training via `unitree_sdk2py` — [LeRobot docs: Unitree G1](https://huggingface.co/docs/lerobot/en/unitree_g1)
- Unitree xr_teleoperate supports Apple Vision Pro, PICO 4 Ultra Enterprise and Meta Quest 3 teleoperation for G1 and H1_2. This is the usual way to collect demonstration data — [Unitree GitHub](https://github.com/unitreerobotics)
- NVIDIA documents a GR00T end-to-end workflow including real-robot teleoperation — [NVIDIA GR00T real-teleop docs](https://docs.nvidia.com/learning/physical-ai/gr00t-e2e-workflow/latest/real-robot-workflow/real-teleop.html)

### Inferences
- **For Synkiria, the minimum viable platform is G1 EDU (U1 or higher) with Dex3-1 hands and Jetson Orin.** The G1 base and R1 base cannot run custom code (no SDK). R1 EDU is the cheaper humanoid fallback (about €16k–34k), but it has fewer manipulation options and is not listed as LeRobot/GR00T-supported. Go2 EDU has no arms, so it only fits a "mobile reception and demo" scope.
- [ESTIMATE] Indicative budget: G1 EDU U3-class €54,450 (check whether VAT is included). Add a spare battery (no verified price; I'd guess €1,000–2,000), shipping and insurance (€500–1,500), and on-site training or commissioning if the distributor offers it. **€60,000–€70,000 before VAT is a prudent hardware line.** Importing directly from China adds customs (generally 0% duty for robots under HS 8479.50, but this is unverified here), 21% import VAT, and CE/DoC responsibility as importer. Buying from an EU distributor shifts CE and importer duties to the distributor.
- Warranty is short (12–18 months EDU). Budget for repairs or spares in year 2.

### Gaps
- No official Unitree EUR price list, and no Spanish authorized distributor with public EDU prices was found. **Request at least three written quotes** (this is needed anyway under art. 31.3 LGS).
- Exact prices for spare G1 batteries, Inspire RH56 hands and Dex5 were not found. I did not verify whether RobotShop EU's €54,450 includes VAT.
- I did not verify CE marking or a Declaration of Conformity for G1/R1. Ask the distributor for the EU DoC under the Machinery Directive / Regulation (EU) 2023/1230 (applies from Jan 2027), RED and EMC.

---

## 2. State of the art (2025–2026) and the split between integration, innovation and R&D

### Takeaway
Voice chat via an LLM on a humanoid, object detection and teleoperation are **existing, integrable technology**. Open VLA models (GR00T N1.x, π0/π0.5, OpenVLA, LeRobot policies) exist, but they are research-grade. **Getting reliable, safe, low-latency manipulation that is grounded in and transactionally consistent with ERP (Odoo) state** in an unstructured reception or office setting is still an open problem. That is the defensible R&D core.

### Cited Findings
- NVIDIA **GR00T N1.6** is an open model with a Cosmos-Reason-2B VLM backbone and a 32-layer diffusion-transformer action head. It is pre-trained on more than 10,000 hours of robot data, including humanoids. NVIDIA announced a sim-to-real workflow on 8 Jan 2026 — [humanoid.guide GR00T N1.6](https://humanoid.guide/product/nvidia-gr00t-n1-6/); [NVIDIA build GR00T](https://build.nvidia.com/station/gr00t)
- GR00T N1 (Mar 2025) is an open foundation model for generalist humanoids with a dual-system (VLM plus diffusion action) design [KNOWN-SOURCE] — [arXiv 2503.14734](https://arxiv.org/abs/2503.14734)
- Figure **Helix** is Figure AI's in-house VLA ("System 2" VLM plus "System 1" fast visuomotor policy) on Figure 03 [KNOWN-SOURCE for architecture] — [Figure Helix](https://www.figure.ai/news/helix); [youngju.dev 2026 robotics map](https://www.youngju.dev/transcribe/2026-07-09-robotics-companies-2026.en)
- Physical Intelligence **π0 / π0.5** are generalist VLA "brains" transplantable across robots, using flow/diffusion-based action generation. Openpi weights are published [KNOWN-SOURCE] — [π0 arXiv 2410.24164](https://arxiv.org/abs/2410.24164); [openpi GitHub](https://github.com/Physical-Intelligence/openpi)
- Google DeepMind **Gemini Robotics** is a two-tier system: a VLA plus the embodied-reasoning VLM Gemini Robotics-ER — [ai-souken VLA overview](https://www.ai-souken.com/article/what-is-vla-model)
- **OpenVLA** is a 7B open-source VLA trained on Open X-Embodiment [KNOWN-SOURCE] — [arXiv 2406.09246](https://arxiv.org/abs/2406.09246)
- **LeRobot** supports imitation-learning policies (ACT, Diffusion Policy, etc.) and Unitree G1 teleoperation and training — [LeRobot G1 docs](https://huggingface.co/docs/lerobot/en/unitree_g1)
- **Pepper** (SoftBank) was marketed for receptionist and clerk tasks. Production stopped in 2020 after only about 27,000 units were made, because of weak demand. This is a cautionary precedent for the "receptionist robot" market — [Reuters via nippon.com](https://www.nippon.com/en/news/reu20210628KCN2E419Y/); [Bloomberg](https://www.bloomberg.com/news/articles/2021-06-29/softbank-mothballs-once-hyped-1-800-pepper-humanoid-robot)
- Other conversational or social robot products include Furhat (social robot head), Engineered Arts Ameca (expressive humanoid with LLM conversation), and Unitree's own demos [KNOWN-SOURCE; no 2026 prices found] — [Furhat](https://www.furhatrobotics.com/); [Engineered Arts Ameca](https://engineeredarts.com/robot/ameca/)
- I found no published product or paper integrating a humanoid with an ERP (Odoo/SAP) in a closed transactional loop (search returned none) — see Gaps.

### Classification for Synkiria (inferences)
**(a) Integration of existing technology (not R&D)**
- Claude API voice loop (STT → LLM → TTS), face and person detection, and off-the-shelf object detection (YOLO-class).
- Odoo XML-RPC/JSON-RPC calls (create lead, check stock, book visit).
- Unitree SDK2 high-level locomotion and gestures. Teleoperation with xr_teleoperate.

**(b) Technological innovation (new for the company and the Spanish SME market; fits IS art. 35.2 / Oslo)**
- A humanoid receptionist and demo agent in Spanish and Catalan connected live to Odoo CRM, Inventory and Calendar, offered as a commercial service by an Odoo partner.

**(c) Genuine R&D with technological uncertainty (fits Frascati / IS art. 35.1 "desarrollo")**
1. **Task-grounded manipulation coordinated with ERP transactions.** Can a VLA/imitation policy fine-tuned on few demonstrations (≤200 per task) pick, deliver or hand over items identified in Odoo (by product/lot) with ≥80% success, and keep robot state and ERP state consistent (no "stock moved in Odoo but not physically", or vice versa)? Requires designing a transaction protocol: plan → act → perceive-verify → commit/rollback.
2. **Language-to-action grounding and safety.** An LLM planner must map free speech onto a constrained skill library and Odoo actions. The open questions are how to prevent hallucinated or unsafe actions, and how to keep humans safe near the robot (speed and separation monitoring with on-board sensors).
3. **Latency on edge hardware.** Splitting cloud LLM, on-board Jetson Orin vision and policies so that conversational turns stay under about 1.5 s and the control loop stays at 30+ Hz, while degrading gracefully if the network drops.
4. **Robustness in an uncontrolled environment.** Lighting changes, noise for ASR, multiple speakers, and unknown objects.

**Measurable KPIs (proposed targets, [ESTIMATE])**
- Manipulation task success rate on N ≥ 50 trials per task: ≥80% (baseline: off-the-shelf policy, zero-shot).
- ERP–physical consistency: 100% of committed Odoo transactions verified by perception; 0 orphan transactions.
- Voice end-to-end response latency (end of user speech → start of robot speech): p50 ≤ 1.5 s, p95 ≤ 3 s.
- Intent recognition and slot accuracy (Spanish and Catalan) on a test set of ≥300 utterances: ≥90%; correct Odoo action selection ≥95%.
- Object recognition (top-1) on the company catalogue: ≥95%; mAP@0.5 ≥0.85.
- Safety: 0 contacts above threshold; emergency-stop response time; hallucinated action rate <1% (actions blocked by the validator).
- Autonomy: unattended operating hours per battery (about 2 h nominal) and interventions per hour.

### Gaps
- I found no source on robots integrated with an ERP (positive or negative). This supports the novelty claim but is not proof. A patent and literature search (e.g., Espacenet, Google Scholar) is recommended.
- I did not re-verify 2026 prices for Furhat or Ameca, or independent benchmarks comparing VLAs on humanoids.

---

## 3. Legal definitions: Frascati vs Oslo; IS art. 35

### Takeaway
Frascati says R&D must be novel, creative, uncertain, systematic and transferable/reproducible. Oslo innovation only requires a new or significantly improved product or process that has been implemented or brought to market. Spanish IS art. 35.1 (I+D) and 35.2 (IT) mirror this split.

### Cited Findings
- Frascati Manual 2015: an R&D activity must satisfy five core criteria: **novel, creative, uncertain, systematic, transferable and/or reproducible** [KNOWN-SOURCE] — [OECD Frascati Manual 2015](https://www.oecd.org/en/publications/frascati-manual-2015_9789264239012-en.html)
- Oslo Manual 2018: an innovation is "a new or improved product or process (or combination thereof) that differs significantly from the unit's previous products or processes and that has been made available to potential users (product) or brought into use by the unit (process)" [KNOWN-SOURCE] — [OECD Oslo Manual 2018](https://www.oecd.org/en/publications/oslo-manual-2018_9789264304604-en.html)
- Ley 27/2014 art. 35.1.a: "Se considerará investigación a la indagación original planificada que persiga descubrir nuevos conocimientos…"; "desarrollo [es] la aplicación de los resultados de la investigación o de cualquier otro tipo de conocimiento científico" for new or substantially improved materials, products or processes. Art. 35.2.a: "Se considerará innovación tecnológica la actividad cuyo resultado sea un avance tecnológico en la obtención de nuevos productos o procesos de producción o mejoras sustanciales de los ya existentes" [VERIFIED-WEB] — [BOE Ley 27/2014, art. 35](https://www.boe.es/buscar/act.php?id=BOE-A-2014-12328#a35)
- Tax credits (art. 35): I+D 25% (42% on the amount above the 2-year average) plus 17% on qualified researchers' personnel costs; innovación tecnológica 15% [KNOWN-SOURCE; same BOE link]. Software development counts as I+D only if it is a significant scientific or technological advance [KNOWN-SOURCE, art. 35.1.a last paragraph].

### Inferences
- Section 2(c) items fit "desarrollo" (and "investigación industrial" under GBER). Section 2(a)–(b) are at most "innovación tecnológica". To claim tax credits with legal certainty, get an Informe Motivado (Ministerio de Ciencia) or an ENAC-accredited certification.

### Gaps
- I did not re-fetch the full Frascati or Oslo texts this session. Quotes above come from prior knowledge of the official definitions.

---

## 4. Acquisition and finance mechanics in Spain

### Takeaway
VAT is **not eligible** if recoverable (Synkiria can deduct it, so budget **net of VAT**). The robot is amortizable at up to 12% (maquinaria) or 25% (equipos para procesos de información / útiles), and freely amortizable if dedicated to I+D. Subsidized equipment must be kept **2 years** (non-registrable assets), and purchases must have **three quotes** above the contrato menor threshold (**€15,000 for supplies and services**).

### Cited Findings
- **Art. 31.8 LGS**: "En ningún caso se consideran gastos subvencionables los impuestos indirectos cuando sean susceptibles de recuperación o compensación ni los impuestos personales sobre la renta" [VERIFIED-WEB] — [BOE Ley 38/2003](https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977#a31)
- **Art. 31.3 LGS**: when the eligible expense exceeds the amounts of the *contrato menor* under public procurement law, the beneficiary must obtain **at least three offers from different suppliers** before contracting, unless there aren't enough suppliers on the market. The text refers to the contract-law amounts, not a fixed figure [VERIFIED-WEB, same link]. The current contrato menor thresholds (LCSP Ley 9/2017 art. 118) are **< €15,000 for supplies and services and < €40,000 for works** [KNOWN-SOURCE] — [BOE LCSP art. 118](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#a118)
- **Art. 31.4 LGS**: the asset must be used for the subsidized purpose for at least **5 years for assets registrable in a public registry and 2 years for other assets** [VERIFIED-WEB]
- **Art. 19.3 LGS**: the subsidy amount, alone or combined with other aid, may never exceed the cost of the subsidized activity [VERIFIED-WEB]
- The consolidated Ley 38/2003 text was last updated **03/10/2026**. One amendment (art. 2.4) takes effect on 23/10/2026 [VERIFIED-WEB]
- **Ley 27/2014 art. 12.1.a** official table: Maquinaria **12% / 18 years**; Útiles y herramientas **25% / 8 years**; Equipos para procesos de información **25% / 8 years**; Sistemas y programas informáticos **33% / 6 years** [VERIFIED-WEB] — [BOE Ley 27/2014 art. 12](https://www.boe.es/buscar/act.php?id=BOE-A-2014-12328#a12)
- **Art. 12.3.b**: *libertad de amortización* for "elementos del inmovilizado material e intangible, excluidos los edificios, afectos a las actividades de investigación y desarrollo". Buildings used for R&D: linear over 10 years [VERIFIED-WEB]
- **De minimis**: Reglamento (UE) 2023/2831 sets a ceiling of **€300,000 per single undertaking over any 3-year rolling period** [KNOWN-SOURCE] — [EUR-Lex 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj)
- **GBER art. 25**: base intensities are **industrial research 50%** and **experimental development 25%**, with an SME bonus of **+20 pp for small enterprises** (+10 medium) and up to **+15 pp** for effective collaboration or wide dissemination, **capped at 80%** [Spanish application confirmed by CNMC/MINCOTUR] — [CNMC notification](https://cnmc.es/sites/default/files/2079920_2.pdf); [MINCOTUR nota intensidades](https://www.mintur.gob.es/PortalAyudas/PERTE-AGRO/Documents/Nota_Informativa_sobre_Incrementos_IntensidadMaxima.pdf); [EUR-Lex GBER consolidated](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02014R0651-20230701) [KNOWN-SOURCE for the URL]
- Small enterprise means fewer than 50 staff and turnover or balance sheet ≤ €10M. Synkiria qualifies — [DOE Extremadura citing GBER Annex I](https://doe.juntaex.es/pdfs/doe/2017/1410o/17040121.pdf)
- **GBER art. 28** (innovation aid for SMEs): covers patents and intangible assets, secondment of highly qualified personnel, and innovation advisory and support services, generally **up to 50%** (up to 100% for advisory and support services within a ceiling of €200,000 per 3 years) [KNOWN-SOURCE, verify against EUR-Lex]
- **GBER art. 6 (incentive effect)**: the written aid application must be submitted **before work on the project starts**. Ordering the robot before applying can taint the incentive effect [KNOWN-SOURCE] — [EUR-Lex GBER](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02014R0651-20230701)
- **Renting and leasing**: I found **no Spanish provider renting Unitree humanoids**. Searches returned only sale offers — [Xataka Home](https://www.xatakahome.com/domotica/este-robot-humanoide-chino-para-casa-se-ha-comido-a-sus-rivales-se-puede-comprar-espana)

### Inferences
- [ESTIMATE] Leasing (*arrendamiento financiero*) through a bank is possible for a €50k–70k asset. Grant calls usually accept only the instalments paid within the execution period, or require purchase option conditions. Renting fees are usually eligible only for the period of use. **Check each convocatoria's "bases reguladoras".** Most R&D calls (CDTI PID, ACCIÓ Nuclis, etc.) treat equipment as eligible only as depreciation during the project, unless the call states otherwise. With free amortization for I+D, the full cost could be imputed, if the call allows it.
- If Synkiria can deduct VAT (normal for an S.L. with taxable activity), **all budgets should be net of VAT**. The 21% VAT is a cash-flow cost only.
- The three-quote rule applies to the robot (≫ €15,000), and possibly to external development or consultancy contracts ≥ €15,000. If choosing a supplier other than the cheapest, justify the choice in writing.
- Combining de minimis and GBER aid on the same costs must respect each aid's cumulation limits (GBER art. 8) and LGS art. 19.3.

### Gaps
- I did not verify the exact current text of GBER art. 28 or whether the 2023 amendment changed the art. 25 bonuses. Confirm on EUR-Lex.
- I did not search for Spanish banks' leasing conditions for robots, or for robotics-as-a-service providers in Spain beyond Unitree.

---

## 5. Developer cost and comparable budgets

### Takeaway
Spanish software developer gross salaries are about **€32,000–47,000/year**. With about 31–33% employer social security and about 1,720–1,780 productive hours, the **fully loaded cost is about €25–40/hour**. A senior AI or robotics profile is about €40–55/hour [ESTIMATE].

### Cited Findings
- Glassdoor: Java software engineer in Spain averages **€47,400/year (about €23/h gross)**, with a range of €39k–51k (59 salaries, to Jul 2026) — [Glassdoor](https://www.glassdoor.com.mx/Sueldos/spagna-java-software-engineer-sueldo-SRCH_IL.0,6_IN219_KO7,29_P2.htm)
- NettoCalc: median developer **€44,000 gross**; junior €32,000; 3–7 years' experience about €44,000 — [NettoCalc](https://nettocalc.com/es/desarrollador-software)
- Indeed (Oct 2026): developer average about **€32,400**; Barcelona €34,528 — [Indeed](https://es.indeed.com/career/developer/salaries)
- Lemon.io 2026: Spain is 15–30% cheaper than DACH and Nordic countries; architecture or system-design responsibility adds 30–50% — [Lemon.io](https://lemon.io/?p=75275)

### Inferences
- [ESTIMATE] Worked example: €44,000 × 1.32 (employer SS, including MEI and accident insurance) ≈ €58,000 ÷ 1,720 h ≈ **€34/h**. For 2 developers at 50% for 18 months (about 2,600 h): about **€88,000**.
- [ESTIMATE] An indicative project envelope for an SME humanoid pilot is about **€150k–250k** total: hardware €60k–75k, internal personnel €80k–130k, external services (university or technology-centre subcontract, safety and CE advisory, data collection) €15k–40k, cloud and LLM API €3k–8k, plus other costs (insurance, spares, dissemination). With art. 25 experimental development at 45% (25 + 20 for small enterprise), aid would be about €70k–110k.

### Gaps
- I found no public benchmark budgets for comparable Spanish SME humanoid pilots. The total envelope above is my own estimate.
- Many calls set their own hourly-cost formula (e.g., (gross + SS) / 1,720 h) or cap hourly rates. Apply the specific call's rule.
