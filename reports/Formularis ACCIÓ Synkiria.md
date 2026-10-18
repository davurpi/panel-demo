# Textos per als formularis d'ACCIÓ — Synkiria Physical AI

Esborranys per copiar i enganxar. Revisa'ls abans d'enviar. Els camps entre **[claudàtors]** són dades que no he pogut confirmar i has d'omplir tu: NIF, persona de contacte, etc.

Ordre recomanat d'enviament: **3 → 2 → 1** (primer l'assessorament d'innovació, que t'assigna un tècnic; després DIH4CAT; i la idea europea quan tinguis el tècnic de referència).

> **Nota sobre el cost.** El preu oficial a la botiga d'Unitree (consultat el 18-10-2026) és **R1 EDU = 10.500 USD** sense impostos, més un enviament de 300 a 1.200 USD i els aranzels i l'IVA d'importació. Això abaixa el cost del robot respecte dels 28.000 € de l'informe. Per això el cost estimat proposat és d'**uns 60.000 €** en lloc de 71.480 €. Si es confirma que el R1 EDU no admet mans diestres i cal anar a un G1 EDU, el cost puja a uns 100.000–190.000 €.

---

## 1. Sol·licitud d'orientació i assessorament a la innovació (ACCIÓ)

Formulari: https://formularis.accio.gencat.cat/web/formularis/inscripcions/-/inscripcio/2022/05/19/Zr75HP1_fyA9nz_z85jUAA/sollicita-orientacio-i-assessorament-a-la-innovacio/

**Dades de l'empresa**
- Empresa: Synkiria, S.L.
- NIF: **[NIF]**
- CNAE: **[el CNAE de l'empresa; probablement 6201 Activitats de programació informàtica]**
- Antiguitat: 2 anys o més (constituïda el 05/02/2020, inscrita al RM de Tarragona el 10/02/2020)
- Codi postal / Població / Província: 43700 / El Vendrell / Tarragona
- Sector: Tecnologies de la informació / Programari
- Web: https://synkiria.com

**Acrònim o títol:** SPAI — Synkiria Physical AI: agents robòtics intel·ligents integrats amb l'ERP

**Resum del projecte** (màx. 3.000 caràcters)

> Synkiria és una empresa del Vendrell especialitzada en implantació d'Odoo, automatització de processos i integració d'intel·ligència artificial per a pimes. Volem desenvolupar i validar una prova de concepte d'agent robòtic humanoide connectat en temps real a l'ERP de l'empresa: un robot (plataforma prevista: Unitree R1 EDU, amb SDK obert) que conversa per veu en català i castellà amb un model de llenguatge (Claude), reconeix persones i objectes per visió artificial i executa tasques físiques i digitals coordinades amb Odoo (CRM, inventari, calendari): rebre visites, consultar estoc o comandes, registrar una cita o un lead, i manipular objectes senzills del catàleg.
>
> La integració de veu, visió i API d'Odoo és tecnologia existent. El repte tecnològic que justifica el projecte és mantenir la coherència entre el món físic i l'ERP: quan el robot mou o lliura un objecte, la transacció a Odoo només s'ha de confirmar si la percepció verifica que l'acció física s'ha completat; si no, s'ha de revertir. Proposem un protocol "planificar → actuar → verificar → confirmar o revertir" i un validador que impedeixi que el model de llenguatge generi accions inexistents o insegures. A més, cal resoldre la latència entre núvol i ordinador de bord i la robustesa en un espai de recepció real (soroll, llum, objectes no vistos).
>
> No hem trobat cap producte ni publicació que integri un humanoide amb un ERP en bucle transaccional tancat; abans de sol·licitar ajuts farem una cerca formal d'estat de l'art i patents. La validació es farà al futur local comercial de Synkiria amb usuaris reals. Si funciona, l'objectiu és comercialitzar-ho com a servei per a pimes usuàries d'Odoo (recepció, showroom, demostracions i operacions senzilles).
>
> Busquem orientació sobre: (1) si el projecte encaixa a la propera convocatòria d'Ajuts a projectes d'exploració tecnològica (2027) o en una altra línia d'ACCIÓ; (2) com tractar el robot dins del pressupost (material de prototip, amortització o altres) sense trencar l'efecte incentivador; (3) contacte amb centres TECNIO o Eurecat per a la part de manipulació i seguretat; (4) vies europees (convocatòries en cascada de robòtica) i el cupó de programes europeus d'R+D+I.

**Tecnologia principal:** Robòtica (o, si no surt, Intel·ligència artificial)

**Objectius del projecte** (màx. 1.200 caràcters)

> O1. Manipulació d'objectes del catàleg coordinada amb Odoo: ≥80 % d'èxit en ≥50 assajos per tasca, entrenada amb ≤200 demostracions.
> O2. Coherència ERP–món físic: 100 % de les transaccions confirmades verificades per percepció i 0 transaccions òrfenes.
> O3. Conversa en temps útil: latència fi de parla–inici de resposta p50 ≤1,5 s i p95 ≤3 s.
> O4. Comprensió en català i castellà: ≥90 % de precisió d'intenció en ≥300 enunciats i ≥95 % d'accions Odoo correctes.
> O5. Seguretat: 0 contactes per sobre del llindar i <1 % d'accions al·lucinades no bloquejades pel validador.
> O6. Validació amb usuaris reals al local de Synkiria i informe de viabilitat comercial.
> (Metes inicials que s'ajustaran després del primer mes de proves.)

**Detall del projecte** (màx. 4.000 caràcters)

> Durada prevista: 10 mesos.
>
> PT1 (mesos 1–2) Especificació, anàlisi de riscos i seguretat, cerca d'estat de l'art i patents, pla de validació. Entregable: requisits i pla de proves.
> PT2 (mesos 2–3) Posada en marxa del robot, SDK2/ROS2, teleoperació i captura de demostracions. Entregable: banc de proves i conjunt de dades v1.
> PT3 (mesos 2–5) Bucle de veu amb Claude, validador d'accions i connector Odoo (CRM, Inventari, Calendari). Entregable: agent conversacional amb API d'habilitats.
> PT4 (mesos 3–7) Percepció del catàleg i protocol transaccional planificar–actuar–verificar–confirmar/revertir. Entregable: protocol i mòdul de verificació. (Nucli d'R+D.)
> PT5 (mesos 4–8) Ajust fi d'una política de manipulació amb poques demostracions (LeRobot / ACT / Diffusion o un model VLA obert). Entregable: política entrenada i informe d'assajos. (Nucli d'R+D.)
> PT6 (mesos 8–10) Validació al local comercial amb usuaris reals i mesura dels KPI. Entregable: informe de validació.
> PT7 (mesos 9–10) Model de negoci, propietat intel·lectual i difusió. Entregable: pla de comercialització.
>
> Recursos propis: 1 persona tècnica de Synkiria al 50 % durant 10 mesos (≈720 h), més direcció del projecte.
> Equipament: robot humanoide amb SDK obert (Unitree R1 EDU o equivalent). No l'hem comprat: volem saber com tractar-lo abans de fer la comanda.
> Serveis externs: suport d'un centre tecnològic o universitat per a manipulació, seguretat i marcatge CE (a identificar; no tenim cap col·laboració signada), servei de núvol i API de models de llenguatge, i auditoria.
> Col·laboracions que necessitem: un centre TECNIO o Eurecat (robòtica cognitiva i manipulació) i, si escau, socis per a una proposta europea.

**Termini d'execució:** Menys d'1 any

**Cost estimat:** 60000

---

## 2. DIH4CAT — Descriu la teva necessitat

Formulari: https://formularis.accio.gencat.cat/web/formularis/inscripcions/-/inscripcio/2022/09/14/tPGrVEMvkj89nz_z85jUAA/dih4cat-descriu-la-teva-necessitat/

**Dades de l'empresa**
- Raó social: Synkiria, S.L. · NIF: **[NIF]**
- Perfil: Empresa privada (pime)
- CP / Població / Província: 43700 / El Vendrell / Tarragona
- Sector: TIC / Programari
- Correu i web de l'empresa: **[correu corporatiu]** · https://synkiria.com
- Volum de negoci: l'opció que inclogui **290.000 €** (menys de 2 M€)
- Nombre de treballadors: 3 (tria el tram de menys de 10; és microempresa)
- Ets proveïdor de solució tecnològica digital? **Sí**
- Situació respecte a la Indústria 4.0: l'opció equivalent a "proveïdor / integrador"
- A qui vols dirigir la consulta: **Eurecat** (o "Oficina tècnica" si Eurecat no hi surt)

**Descriu la teva necessitat** (màx. 3.000 caràcters)

> Som Synkiria, una pime del Vendrell que implanta Odoo i solucions d'automatització i IA per a pimes. Estem preparant una prova de concepte d'agent robòtic humanoide connectat a l'ERP: un robot amb SDK obert (previsiblement Unitree R1 EDU) que conversa per veu en català i castellà amb un model de llenguatge (Claude), reconeix objectes per visió i executa tasques coordinades amb Odoo (recepció, consulta d'estoc i comandes, registre de cites o leads, i manipulació d'objectes senzills). El repte principal és que les accions físiques i les transaccions de l'ERP siguin coherents: verificar per percepció que una acció s'ha fet abans de confirmar-la a Odoo, i impedir accions inventades o insegures del model de llenguatge.
>
> Encara no hem comprat el robot. Demanem els serveis de DIH4CAT següents:
>
> 1. Test Before Invest: poder provar o avaluar un humanoide (o plataforma equivalent) als laboratoris de robòtica d'Eurecat abans de comprar-lo, per decidir entre models (R1 EDU, G1 EDU) segons la capacitat de manipulació (mans diestres o pinces), la potència de càlcul a bord i l'SDK.
> 2. Assessorament sobre el Reglament europeu d'IA i la seguretat: com classificar un robot amb LLM que interactua amb el públic, quines obligacions de transparència i seguretat té, i què implica el marcatge CE si el comercialitzem.
> 3. Suport tècnic en manipulació apresa amb poques demostracions (LeRobot, ACT, Diffusion o models VLA oberts) i en verificació per visió.
> 4. Orientació sobre finançament: encaix en la propera convocatòria d'exploració tecnològica d'ACCIÓ, en convocatòries europees en cascada de robòtica i possibles socis per a consorcis.
> 5. Si escau, accés a capacitat de càlcul de la BSC AI Factory per entrenar els models de percepció i manipulació.
>
> Us agrairíem que ens indiquéssiu també si aquests serveis són gratuïts per a l'empresa i si computen com a ajut de minimis.

---

## 3. Horizon Europe — Presenta la teva idea de projecte (ACCIÓ R+D+I europea)

Formulari: https://formularis.accio.gencat.cat/web/formularis/inscripcions/-/inscripcio/2023/01/13/83w_syMD_VY9nz_z85jUAA/horizon-europe-presenta-la-teva-idea-de-projecte/

> Aquest formulari demana estructura de consorci i topic. No en tenim de confirmats, i ho diem obertament: el que demanem és ajuda per trobar-los.

- Empresa: Synkiria, S.L. · NIF: **[NIF]** · El Vendrell (Tarragona) · Sector TIC / Programari
- Temàtica d'Horizon Europe: **Clúster 4 — Digital, Indústria i Espai** (o "Altres / Convocatòries en cascada" si hi és)
- Topic: **"A determinar amb ACCIÓ. Interessa: robòtica i IA del Clúster 4, Digital Europe, i convocatòries en cascada (FSTP) d'interacció persona-robot."** No posis cap codi que no hàgim verificat.
- Títol: Synkiria Physical AI — Agents robòtics humanoides coherents amb l'ERP per a pimes
- Acrònim: SPAI

**Objectius del projecte** (màx. 1.200 caràcters)

> Desenvolupar i validar en entorn real un agent robòtic humanoide per a pimes que combina un model de llenguatge, visió artificial i manipulació, connectat en bucle tancat a l'ERP (Odoo). Objectius: (1) un protocol planificar–actuar–verificar–confirmar/revertir que garanteixi la coherència entre accions físiques i transaccions de l'ERP (100 % de transaccions verificades, 0 òrfenes); (2) un validador que impedeixi accions al·lucinades o insegures del model de llenguatge (<1 % no bloquejades); (3) manipulació apresa amb poques demostracions (≥80 % d'èxit amb ≤200 demostracions); (4) interacció multilingüe amb latència útil (p95 ≤3 s); (5) pilot en un entorn comercial real i model de negoci com a servei per a pimes europees usuàries d'ERP de codi obert.

**Resum executiu**

> Les pimes no tenen cap manera de fer que un agent físic atengui clients i operi sobre l'estoc mantenint coherents el món físic i l'ERP. Synkiria, integradora d'Odoo i IA, vol combinar humanoides comercials amb SDK obert, models de llenguatge i models de manipulació oberts per crear agents que executin tasques físiques i digitals verificades. La innovació és el bucle transaccional entre robot i ERP i la capa de seguretat sobre el model de llenguatge, no el robot ni el model en si. Ho validarem al local comercial de Synkiria i ho comercialitzarem com a servei.

**Estructura del consorci**

> Encara no hi ha consorci. Synkiria aportaria el desenvolupament de programari, la integració amb l'ERP i el pilot en un entorn comercial real. Busquem: (a) un centre tecnològic o universitat amb experiència en manipulació robòtica i seguretat; (b) usuaris finals (pimes de retail, showroom o logística lleugera) d'altres països; (c) si escau, un coordinador amb experiència en projectes europeus. Estem oberts a participar com a soci en propostes d'altres.

**Estructura del projecte**

> Proposta orientativa de 18–24 mesos: WP1 Requisits, seguretat i ètica; WP2 Plataforma robòtica i dades de demostració; WP3 Agent de llenguatge, validador d'accions i connector ERP; WP4 Protocol transaccional i verificació per percepció; WP5 Aprenentatge de manipulació; WP6 Pilots amb usuaris finals; WP7 Explotació, difusió i gestió. Pressupost de Synkiria a definir; per al cupó d'ACCIÓ, la nostra part hauria de ser d'almenys 50.000 €.

**Altra informació rellevant:** adjunta un PDF d'una pàgina amb la presentació de Synkiria. Si vols, el preparo amb la plantilla SK01.

---

## Seguiment

- **Després d'enviar:** truca a la delegació d'ACCIÓ a Tarragona (977 251 717) i digues que has enviat les sol·licituds.
- **Correu a rdi.accio@gencat.cat preguntant:**
  - si una proposta de convocatòria en cascada en consorci compta per al cupó de programes europeus (termini: 16-11-2026 a les 14:00);
  - si hi ha pressupost, perquè ja se supera el volum de sol·licituds.
- **No compris el robot** fins que ACCIÓ et confirmi com tractar-lo.
