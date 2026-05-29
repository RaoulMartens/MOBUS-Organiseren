const lenses = ["All", "UX Design", "Technology", "User", "Business"];
const stages = ["Observe", "Reflect", "Make"];
const processStates = [
  { id: "planned", label: "Gepland" },
  { id: "adjustment", label: "Bijsturing" },
];

const flagColors = ["#9d4edd", "#ff70a6", "#06d6a0", "#339af0"];

const activityConnections = {
  strategy: [
    { from: { id: "strategy-act-1", stage: "Observe" }, to: { id: "strategy-act-3", stage: "Reflect" } },
    { from: { id: "strategy-act-2", stage: "Observe" }, to: { id: "strategy-act-3", stage: "Reflect" } },
    { from: { id: "strategy-act-3", stage: "Reflect" }, to: { id: "strategy-act-4", stage: "Make" } }
  ],
  concept: [
    { from: { id: "concept-act-1", stage: "Observe" }, to: { id: "concept-act-2", stage: "Reflect" } },
    { from: { id: "concept-act-2", stage: "Reflect" }, to: { id: "concept-act-3", stage: "Make" } },
    { from: { id: "concept-act-4", stage: "Observe" }, to: { id: "concept-act-5", stage: "Reflect" } },
    { from: { id: "concept-act-5", stage: "Reflect" }, to: { id: "concept-act-6", stage: "Make" } }
  ],
  structure: [
    { from: { id: "structure-act-1", stage: "Observe" }, to: { id: "structure-act-4", stage: "Reflect" } },
    { from: { id: "structure-act-2", stage: "Observe" }, to: { id: "structure-act-4", stage: "Reflect" } },
    { from: { id: "structure-act-3", stage: "Observe" }, to: { id: "structure-act-5", stage: "Reflect" } },
    { from: { id: "structure-act-4", stage: "Reflect" }, to: { id: "structure-act-7", stage: "Make" } },
    { from: { id: "structure-act-5", stage: "Reflect" }, to: { id: "structure-act-7", stage: "Make" } },
    { from: { id: "structure-act-6", stage: "Reflect" }, to: { id: "structure-act-7", stage: "Make" } }
  ],
  detail: [
    { from: { id: "detail-act-1", stage: "Observe" }, to: { id: "detail-act-4", stage: "Make" } },
    { from: { id: "detail-act-2", stage: "Observe" }, to: { id: "detail-act-5", stage: "Make" } },
    { from: { id: "detail-act-3", stage: "Observe" }, to: { id: "detail-act-6", stage: "Make" } }
  ]
};

const seedPhases = [
  {
    id: "strategy",
    title: "Strategy",
    subtitle: "Richting kiezen en aannames expliciet maken.",
    playback: {
      title: "Playback zero",
      evidence: "Probleem: Statische ruimtes activeren niet.",
      decision: "Doel: Passieve houdingen doorbreken via onze Hills.",
      steering: "Vervolg: Concepten visualiseren en direct testen op werking.",
    },
    hills: [
      {
        id: "strategy-hill-1",
        title: "Hill 1: Denkpatronen Doorbreken",
        focus: "Who: Vastgeroeste werkers. What: Worden intuïtief uit hun vaste denkpatroon gehaald. Wow: Zodat ze direct nieuwe perspectieven genereren.",
        activities: [
          {
            id: "strategy-act-1",
            title: "Literatuuronderzoek",
            lens: "UX Design",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Fundeer ontwerp op wetenschap.",
            goal: "Bestaande kennis over de invloed van ruimte op cognitie vertalen naar concrete ontwerpprincipes.",
            why: "Om te begrijpen hoe fysieke frictie en ruimtelijke indeling de cognitieve flexibiliteit van werknemers beïnvloeden.",
            withWhom: "Omgevingspsycholoog en UX researchers.",
            how: "Academisch literatuuronderzoek naar omgevingscognitie en 'embodied cognition'.",
            insight: "Ruimtelijke variatie en frictieloze aanpasbaarheid verminderen cognitieve belasting.",
            steering: "Ontwerprichtlijnen opstellen voor flexibele en uitnodigende fysieke elementen.",
            evidence: "Literatuurstudie_Ruimte_Cognitie_v1.pdf",
          },
          {
            id: "strategy-act-4",
            title: "Product definition",
            lens: "Business",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Positioneer scherp.",
            goal: "Vaststellen van de kernwaarde en positionering van de MOBUS.",
            why: "Zonder duidelijke kernwaarde is het onmogelijk om te bepalen of het eindproduct daadwerkelijk bijdraagt aan het doorbreken van de passieve houding.",
            withWhom: "Product owner, hoofdontwerper en strategisch adviseur.",
            how: "Waarde-propositie canvas invullen en positioneringsmatrix opstellen.",
            insight: "De MOBUS moet niet als meubel gepositioneerd worden, maar als een actieve facilitator van gedragsverandering.",
            steering: "De waardepropositie 'Gedragsactivator door ruimtefrictie' hanteren voor de conceptfase.",
            evidence: "Product_Definition_Positionering_MOBUS.pdf",
          },
        ],
      },
      {
        id: "strategy-hill-2",
        title: "Hill 2: Frictieloze Werkruimte",
        focus: "Who: Creatieve teams. What: Passen de ruimte frictieloos aan hun actuele doel aan. Wow: Zodat de omgeving hun werk altijd optimaal ondersteunt.",
        activities: [
          {
            id: "strategy-act-2",
            title: "Co-creatie & Interviews",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 5,
            principle: "Valideer behoeften direct.",
            goal: "Valideren of de probleemstelling aansluit bij de fysieke behoeften van de stakeholders.",
            why: "We moeten controleren of de veronderstelde behoefte aan een flexibele ruimte overeenkomt met de dagelijkse praktijk en frustraties van teams.",
            withWhom: "12 vertegenwoordigers van creatieve teams en facilitators.",
            how: "Semi-gestructureerde interviews en een korte co-creatie sessie over de ideale workspace.",
            insight: "Teams ervaren vooral frictie bij het handmatig moeten verslepen van zware whiteboards en tafels, wat de creatieve flow onderbreekt.",
            steering: "Focus op frictieloze, lichte of verrijdbare scheidingswanden en flexibel meubilair.",
            evidence: "Stakeholder_Interviews_Fysieke_Behoeften.pdf",
          },
        ],
      },
      {
        id: "strategy-hill-3",
        title: "Hill 3: Veilige Experimenteercultuur",
        focus: "Who: Samenwerkers. What: Krijgen een ordeelvrije en veilige context. Wow: Zodat ze zonder aarzeling durven experimenteren en creëren.",
        activities: [
          {
            id: "strategy-act-3",
            title: "Associatie sessie",
            lens: "Business",
            state: "planned",
            stages: ["Reflect"],
            duration: 3,
            principle: "Breng stakeholders op één lijn.",
            goal: "Het mentale model van de business-stakeholders rondom de casus begrijpen.",
            why: "Om de impliciete aannames en angsten van de business-stakeholders over een 'ordeelvrije en veilige' context boven tafel te krijgen.",
            withWhom: "Management, projectleiders en HR-adviseurs.",
            how: "Associatie- en word-mapping workshop rondom het thema 'veilig experimenteren'.",
            insight: "Stakeholders zijn bang voor controleverlies, maar zien in dat innovatie stagneert zonder veilige experimenteerruimte.",
            steering: "Richtlijnen voor de veilige zone definiëren waarin fouten maken expliciet is toegestaan.",
            evidence: "Associatiesessie_Resultaten_Mentaal_Model.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "concept",
    title: "Concept",
    subtitle: "Ideeën verkennen, vergelijken en onderbouwen.",
    playback: {
      title: "Playback zero",
      evidence: "Keuze: De Denk-Doe Bus is de winnaar (focus op samenwerken en fysieke interactie).",
      decision: "Focus: Randzaken gaan weg; we werken alleen de tokens en de AI-reactie uit.",
      steering: "Actie: Het concept is goedgekeurd, we gaan nu direct bouwen.",
    },
    hills: [
      {
        id: "concept-hill-1",
        title: "Hill 1: Denkpatronen Doorbreken",
        focus: "Who: Vastgeroeste werkers. What: Worden intuïtief uit hun vaste denkpatroon gehaald. Wow: Zodat ze direct nieuwe perspectieven genereren.",
        activities: [
          {
            id: "concept-act-1",
            title: "Provocative prototyping sessie",
            lens: "User",
            state: "adjustment",
            stages: ["Observe"],
            duration: 4,
            principle: "Lok een reactie uit.",
            goal: "Een reactie uitlokken en het onuitgesproken probleem (de latente fricties) blootleggen: waar loopt de gebruiker tegenaan?",
            why: "Door een provocatief prototype te presenteren dwingen we gebruikers hun impliciete aannames en frustraties te verwoorden, iets wat klassieke interviews niet bereiken.",
            withWhom: "8 vastgeroeste werkers uit operationele afdelingen.",
            how: "Provocatief prototype sessie waarbij deelnemers reageren op extreme designkeuzes en grenzen aangeven.",
            insight: "Gebruikers reageerden sterk op het verlies van controle over hun fysieke werkplek. De latente frictie zit in de overgang, niet in de eindsituatie.",
            steering: "De transitie-ervaring (van vast naar flex) centraal stellen in het concept.",
            evidence: "Provocative_Prototype_Reacties_v1.pdf",
          },
          {
            id: "concept-act-4",
            title: "Usability test",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Valideer vóór je bouwt.",
            goal: "De functionele en technische werking van onze aannames te valideren: snappen gebruikers hoe de bedachte interactie werkt en kunnen ze de taken foutloos afronden?",
            why: "Aannames over interactiebegrip moeten vroeg getoetst worden om dure iteraties in de bouwfase te voorkomen.",
            withWhom: "6 representatieve gebruikers uit de doelgroep.",
            how: "Gestructureerde usability test op papieren of klikbaar prototype met hardop-denk-protocol.",
            insight: "Gebruikers snapten de kerninteractie na één instructie. De grootste fout zat in de token-terugplaatsing, niet in het initieel plaatsen.",
            steering: "Token-terugplaatsing vereenvoudigen en visueler feedback geven bij correcte afronding.",
            evidence: "Usability_Test_Resultaten_Concept_v1.pdf",
          },
        ],
      },
      {
        id: "concept-hill-2",
        title: "Hill 2: Frictieloze Werkruimte",
        focus: "Who: Creatieve teams. What: Passen de ruimte frictieloos aan hun actuele doel aan. Wow: Zodat de omgeving hun werk altijd optimaal ondersteunt.",
        activities: [
          {
            id: "concept-act-2",
            title: "Content mapping",
            lens: "UX Design",
            state: "adjustment",
            stages: ["Reflect"],
            duration: 3,
            principle: "Orden de chaos.",
            goal: "De chaos in de Problem Space ordenen om te bepalen of onze oplossing echt de investering waard is.",
            why: "Na de observatiefase hebben we veel losse inzichten; content mapping helpt om structuur aan te brengen en de échte kernproblemen te isoleren.",
            withWhom: "Hele MOBUS-projectteam.",
            how: "Content mapping sessie waarbij alle inzichten op een muur geclusterd worden op thema, frequentie en impact.",
            insight: "Drie dominante thema's: transitiepijn (veranderen), controleverlies (aanpassen) en sociale onzekerheid (beoordeling door anderen).",
            steering: "Het concept moet alle drie adresseren, met nadruk op sociale onzekerheid als grootste drempel.",
            evidence: "Content_Map_ProblemSpace_MOBUS.pdf",
          },
          {
            id: "concept-act-5",
            title: "Ontwerpdialoog",
            lens: "UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Haal experts erbij.",
            goal: "Goedkeuring krijgen van de experts op onze aannames en functies.",
            why: "Expertvalidatie voor de Make-fase voorkomt dat we een richting inslaan die technisch of didactisch niet haalbaar is.",
            withWhom: "Externe UX-expert, domeindeskundige en HAN begeleider.",
            how: "Ontwerpdialoog: gestructureerde presentatie van aannames en functies, gevolgd door kritische feedbackronde.",
            insight: "Experts bevestigden de kernfunctie maar wezen op het risico van te complexe tokeninteractie voor nieuwe gebruikers.",
            steering: "Interactielogica vereenvoudigen tot maximaal drie stappen per taak.",
            evidence: "Ontwerpdialoog_Expertfeedback_v1.pdf",
          },
        ],
      },
      {
        id: "concept-hill-3",
        title: "Hill 3: Veilige Experimenteercultuur",
        focus: "Who: Samenwerkers. What: Krijgen een ordeelvrije en veilige context. Wow: Zodat ze zonder aarzeling durven experimenteren en creëren.",
        activities: [
          {
            id: "concept-act-3",
            title: "Conceptstudies",
            lens: "UX Design",
            state: "adjustment",
            stages: ["Make"],
            duration: 5,
            principle: "Maak het zichtbaar.",
            goal: "Met schetsen laten zien hoe de gebruiker van een 'vastgeroeste' staat naar een 'creatieve flow' gaat.",
            why: "Abstracte inzichten moeten concreet worden. Schetsen dwingen het team keuzes te maken en maken het concept bespreekbaar voor stakeholders.",
            withWhom: "UX designers en conceptdesigners van het HAN DesignLab.",
            how: "Parallelle conceptstudies: elk teamlid schetst een eigen interpretatie van de transitiereis; daarna gemeenschappelijke evaluatie.",
            insight: "De 'Denk-Doe Bus' scoorde het hoogst: een mobiele, fysiek aanpasbare ruimte die de transitie zelf als creatief moment framed.",
            steering: "De Denk-Doe Bus doorontwikkelen als winnend concept richting de Structure-fase.",
            evidence: "Conceptschetsen_DenkDoe_Bus_Overzicht.pdf",
          },
          {
            id: "concept-act-6",
            title: "Conceptstudies",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 5,
            principle: "Stuur op de Hills.",
            goal: "De technologische en visuele oplossingsrichting zo snel mogelijk tastbaar maken, volledig gestuurd door de opgestelde Hills.",
            why: "De Hills zijn de toetssteen; elk concept dat niet direct inspeelt op de drie Hills is geen kandidaat.",
            withWhom: "Volledig MOBUS-projectteam.",
            how: "Hill-gestuurde conceptstudies: per Hill één schetsronde, daarna crossteam evaluatie op Hill-fit.",
            insight: "De Hills fungeerden als krachtige filter: drie van de vijf concepten vielen direct af omdat ze niet alle drie Hills raakten.",
            steering: "Alleen concepten die alle drie Hills adresseren gaan door naar de Structure-fase.",
            evidence: "Conceptstudies_Hill_Gestuurd_Overzicht.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "structure",
    title: "Structure",
    subtitle: "Ordening, flow en systeemopbouw concreet maken.",
    playback: {
      title: "Delivery playback",
      evidence: "Doel: Testresultaten evalueren met stakeholders en concept goedkeuren.",
      decision: "Keuze: Fundamenten definitief vastgesteld; Hills voor de Detail-fase bepaald.",
      steering: "Actie: Gezamenlijk de Hills voor de aankomende Detailfase vaststellen.",
    },
    hills: [
      {
        id: "structure-hill-1",
        title: "Hill 1: Tokens & Rust",
        focus: "Who: Gebruikers. What: Schuiven en stapelen fysieke tokens om patronen te groeperen. Wow: Van chaotische brainstorm naar helder gezamenlijk resultaat.",
        activities: [
          {
            id: "structure-act-1",
            title: "Prototyping sessie",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Test fysieke frictie.",
            goal: "Valideren of het fysiek schuiven van de tokens frictieloos verloopt en of dit daadwerkelijk de gewenste rust (de 'Wow') terugbrengt bij de gebruiker.",
            why: "Alleen door te testen of de fysieke handeling zelf — het schuiven en stapelen — rústig aanvoelt, weten we of onze kernbelofte (de 'Wow') haalbaar is.",
            withWhom: "8 deelnemers uit de doelgroep in een gesimuleerde brainstormomgeving.",
            how: "Hands-on prototyping sessie met fysieke tokensets; deelnemers voeren een brainstormtaak uit en rapporteren hun rustervaring.",
            insight: "De fysieke handeling van schuiven en groeperen werd als calmerend ervaren. Gebruikers rapporteerden aanzienlijk minder 'ruis in het hoofd' na de sessie.",
            steering: "Token-afmeting en -gewicht optimaliseren voor nog soepeler schuifbeweging.",
            evidence: "Prototyping_Sessie_Tokens_Rust_v1.pdf",
          },
          {
            id: "structure-act-3",
            title: "Content inventory",
            lens: "UX Design",
            state: "planned",
            stages: ["Observe"],
            duration: 3,
            principle: "Inventariseer vóór je ontwerpt.",
            goal: "Precies opschrijven wat er fysiek, digitaal en achter de schermen nodig is om rust te creëren door te schuiven.",
            why: "Zonder een volledige inventory van alle benodigde componenten (fysiek, digitaal, backend) loop je het risico cruciale elementen te vergeten in het systeemontwerp.",
            withWhom: "Volledig MOBUS-ontwerpteam.",
            how: "Systematische content inventory sessie: alle componenten inventariseren en categoriseren naar fysiek, digitaal en systeem.",
            insight: "Er bleken 14 unieke fysieke elementen, 8 digitale interfaces en 3 backend-processen nodig — meer dan initieel ingeschat.",
            steering: "Systeemarchitectuur aanpassen op de geïnventariseerde werkelijke complexiteit.",
            evidence: "Content_Inventory_MOBUS_Structuur_v1.xlsx",
          },
          {
            id: "structure-act-4",
            title: "Evaluatiemoment",
            lens: "Business",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Stem af op één gedeeld model.",
            goal: "We brengen onze individuele inventory samen om de ontologie en taxonomie van de MOBUS op elkaar af te stemmen. Dit vormt de basis voor de User flow.",
            why: "Zonder gedeeld begrip van dezelfde terminologie en structuur ontstaan er inconsistenties in de user flow en het systeemontwerp.",
            withWhom: "Volledig MOBUS-ontwerpteam.",
            how: "Gezamenlijke evaluatiesessie: individuele inventories naast elkaar leggen, inconsistenties benoemen en gezamenlijk één gedeelde ontologie vaststellen.",
            insight: "Drie kernterminologie-conflicten gevonden: 'token', 'bel' en 'cluster' werden door teamleden verschillend geïnterpreteerd.",
            steering: "Gezamenlijk glossarium opstellen als verplichte referentie voor alle verdere ontwerpdocumenten.",
            evidence: "Evaluatiemoment_Ontologie_Taxonomie_MOBUS.pdf",
          },
          {
            id: "structure-act-7",
            title: "User flow",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 5,
            principle: "Maak interactie concreet.",
            goal: "De interacties bepalen voor het prototype, zodat we kunnen testen of de onrust hiermee verdwijnt.",
            why: "De user flow vertaalt de abstracte Hill-belofte in concrete, testbare interactiestappen voor het Wizard of Oz prototype.",
            withWhom: "UX designer en interaction designer.",
            how: "User flow sessie: van trigger tot uitkomst alle stappen uitschrijven en visualiseren in een flowdiagram.",
            insight: "De kritieke flow is vijf stappen: zien → pakken → schuiven → clusteren → loslaten. Elke stap extra verhoogt de onrust.",
            steering: "De volledige interactie beperken tot maximaal vijf handelingen; elke stap daarboven wordt geëlimineerd.",
            evidence: "User_Flow_MOBUS_Prototype_v1.pdf",
          },
        ],
      },
      {
        id: "structure-hill-2",
        title: "Hill 2: Autonoom Systeem & Verrassing",
        focus: "Who: Gebruikers. What: Zien hoe het systeem tokens analyseert en ideeën projecteert. Wow: Ze worden verrast met combinaties die ze zelf niet zagen.",
        activities: [
          {
            id: "structure-act-2",
            title: "Provocative sessie",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 3,
            principle: "Test de verrassing.",
            goal: "Testen hoe de gebruikers reageren wanneer er plotseling een idee of tegendraadse stelling op de muur verschijnt tijdens hun proces.",
            why: "De 'Wow' van Hill 2 staat of valt met de kwaliteit van de verrassing. Te voorspelbaar = geen waarde; te chaotisch = frustratie.",
            withWhom: "8 deelnemers in een actieve brainstormsessie.",
            how: "Provocative sessie: op onverwachte momenten verschijnen tegendraadse stellingen op de projectiewand terwijl deelnemers werken.",
            insight: "Deelnemers reageerden positief op verrassingen mits ze relevant waren voor de huidige tokencluster. Irrelevante inbreng brak de flow.",
            steering: "Het systeem moet de tokencontext analyseren vóór het projecteert; 'context-aware' inbreng als ontwerpregel opnemen.",
            evidence: "Provocative_Sessie_Verrassing_Resultaten.pdf",
          },
          {
            id: "structure-act-5",
            title: "Co-reflection",
            lens: "User",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Toets bij stakeholders.",
            goal: "Toetsen of 'mensen krijgen nieuwe ideeën door autonome inbreng' waar is gebleken, door de testresultaten te evalueren met belanghebbenden.",
            why: "Stakeholders moeten de testresultaten zelf interpreteren om draagvlak te creëren voor de autonome AI-inbreng in het eindconcept.",
            withWhom: "Opdrachtgever, projectleider en twee testdeelnemers.",
            how: "Co-reflection sessie: testresultaten presenteren en stakeholders zelf conclusies laten trekken via gestructureerde reflectievragen.",
            insight: "Alle stakeholders erkenden dat de autonome inbreng aantoonbaar nieuwe ideeën genereerde. Weerstand zat bij 'te veel AI, te weinig mens'.",
            steering: "Mens-AI verhouding explicieter communiceren in het UI: de gebruiker houdt altijd de regie.",
            evidence: "Co_Reflection_Stakeholder_Resultaten.pdf",
          },
          {
            id: "structure-act-6",
            title: "Expert review",
            lens: "Technology",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Valideer technische haalbaarheid.",
            goal: "Met Ruben bepalen hoe we de interacties technisch kunnen bouwen voor een Wizard of Oz prototype test.",
            why: "Voor de Make-fase moeten we weten wat technisch haalbaar is binnen de tijdlimiet, zodat we geen onhaalbare user flows ontwerpen.",
            withWhom: "Ruben (tech lead) en UX designer.",
            how: "Expert review sessie: elke geplande interactie langs technische haalbaarheidscheck lopen en alternatieven benoemen waar nodig.",
            insight: "Token-tracking via RFID is haalbaar; real-time AI-projectie vereist een Wizard of Oz aanpak voor de eerste testfase.",
            steering: "Wizard of Oz prototype bouwen waarbij een facilitator handmatig de AI-reacties triggert tijdens de test.",
            evidence: "Expert_Review_Tech_Haalbaarheid_MOBUS.pdf",
          },
          {
            id: "structure-act-8",
            title: "Affinity analyse",
            lens: "UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 3,
            principle: "Zet data om in inzicht.",
            goal: "Testdata omzetten in scherpe inzichten voor de volgende ontwerpfase.",
            why: "Ruwe testdata zijn pas waardevol als ze geclusterd en geinterpreteerd zijn; de affinity analyse maakt patronen zichtbaar die individueel onzichtbaar blijven.",
            withWhom: "UX-researchteam.",
            how: "Affinity diagram sessie: alle testobservaties op sticky notes, clusteren op thema en betekenis extraheren.",
            insight: "Drie sterke patronen: gebruikers willen controle behouden, verrassing werkt beter als opt-in, en de fysieke handeling is therapeutisch.",
            steering: "Opt-in autonomie als ontwerpprincipe: gebruiker activeert het systeem, niet andersom.",
            evidence: "Affinity_Analyse_MOBUS_Structure_v1.pdf",
          },
          {
            id: "structure-act-9",
            title: "Concept visualisatie",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Visualiseer de beslissing.",
            goal: "Een beslisboom ontwerpen: wannéér grijpt de MOBUS in? En het visueel uittekenen (Look & Feel prototype) van de wandbubbels.",
            why: "Zonder een expliciete beslisboom zijn de interventie-triggers van het systeem ondefinieerbaar en niet testbaar in het Wizard of Oz prototype.",
            withWhom: "UX designer en visual designer.",
            how: "Beslisboom uitwerken op whiteboard; parallel schetsen van de wandbubbel look & feel in drie visuele richtingen.",
            insight: "De beslisboom heeft drie triggers: stilstand > 30 sec, herhaling van tokenpatroon, en diversiteitsdaling in de cluster.",
            steering: "De drie triggers implementeren als de vaste interventielogica voor het Wizard of Oz prototype.",
            evidence: "Beslisboom_MOBUS_Interventielogica_v1.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "detail",
    title: "Detail",
    subtitle: "Afwerking, bewijsvoering en overdraagbaarheid aanscherpen.",
    playback: {
      title: "Delivery playback",
      evidence: "Laten zien hoe de gebruiker het eindproduct echt ervaart.",
      decision: "Bepalen wat er nog verbeterd moet worden.",
      steering: "Eindresultaat presenteren en overdragen aan stakeholders.",
    },
    hills: [
      {
        id: "detail-hill-1",
        title: "Hill 1: Levend Ecosysteem",
        focus: "Who: De gebruikers. What: Ervaren een vloeiende reactie tussen hun fysieke handelingen en de digitale interface van de bus. Wow: Zodat de ruimte voelt als één levend, meedenkend ecosysteem.",
        activities: [
          {
            id: "detail-act-1",
            title: "Experience test",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Observeer de beleving.",
            goal: "Via gebruikersobservatie en Thinking Aloud controleren welke transitie het best aanvoelt en of de fysieke actie en digitale projectie daadwerkelijk als één ecosysteem worden ervaren.",
            why: "Alleen door gebruikers hardop te laten denken terwijl ze interacteren, onthullen we of de fysiek-digitale koppeling als naadloos of als gefragmenteerd wordt ervaren.",
            withWhom: "8 gebruikers uit de doelgroep in de gesimuleerde MOBUS-omgeving.",
            how: "Thinking Aloud sessie met observatieprotocol; twee observatoren noteren afwijkingen in beleving.",
            insight: "De fysiek-digitale koppeling werd als ecosysteem ervaren één maal de projectiesnelheid onder 800ms bleef. Daarboven brak het gevoel.",
            steering: "Maximale toegestane latency vastleggen op 800ms als harde ontwerpeis voor de technische implementatie.",
            evidence: "Experience_Test_Resultaten_Ecosysteem_v1.pdf",
          },
          {
            id: "detail-act-4",
            title: "Ontwerpstudie",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 5,
            principle: "Ontwerp de overgang.",
            goal: "In detail ontwerpen hoe de fysieke beweging van tokens vloeiend en naadloos overloopt in de digitale projecties.",
            why: "De overgang tussen fysiek en digitaal is het kritieke moment van het ecosysteemgevoel; een grove overgang breekt de illusie direct.",
            withWhom: "Interaction designer en motion designer.",
            how: "Gedetailleerde ontwerpstudie: elke transition state uitwerken in animated mockups en testen op vloeiendheid.",
            insight: "Een ease-in-out curve van 400ms op de projectie gecombineerd met een subtiele glow op de token geeft het sterkste ecosysteemgevoel.",
            steering: "400ms ease-in-out + token-glow vastleggen als standaard transitiepatroon voor alle fysiek-digitale koppelingen.",
            evidence: "Ontwerpstudie_Transitie_Ecosysteem_v2.pdf",
          },
        ],
      },
      {
        id: "detail-hill-2",
        title: "Hill 2: Micro-interacties & Bevestiging",
        focus: "Who: De gebruikers. What: Ontvangen via subtiele micro-interacties en heldere system states direct bevestiging van elke input. Wow: Zodat de cognitieve belasting minimaal.",
        activities: [
          {
            id: "detail-act-2",
            title: "Content mapping",
            lens: "UX Design",
            state: "planned",
            stages: ["Observe"],
            duration: 3,
            principle: "Inventariseer de systeemsignalen.",
            goal: "Controleren of de database (de taxonomie en ontologie) de snelle interactieregels (de choreografie) daadwerkelijk aankan.",
            why: "Als de onderliggende datastructuur de interactiechoreografie niet bijhoudt, vertraagt het systeem precies op de kritieke momenten van bevestiging.",
            withWhom: "UX designer en backend developer.",
            how: "Content mapping sessie: alle system states en micro-interacties mappen op de onderliggende datastructuur en knelpunten identificeren.",
            insight: "Vier system states hadden geen directe database-equivalent; dit veroorzaakte een verborgen latency van gemiddeld 1.2 seconden.",
            steering: "Vier ontbrekende database-velden toevoegen en de choreografie opnieuw testen na de fix.",
            evidence: "Content_Mapping_Systeem_States_v1.pdf",
          },
          {
            id: "detail-act-5",
            title: "UI Stack",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Ontwerp elke feedback precies.",
            goal: "Door de triggers, regels en feedback van elke micro-interactie scherp te ontwerpen, garanderen we dat de gebruiker direct subtiele bevestiging krijgt.",
            why: "Zonder een volledige UI Stack blijven micro-interacties inconsistent geïmplementeerd, wat de cognitieve belasting verhoogt in plaats van verlaagt.",
            withWhom: "UI designer en frontend developer.",
            how: "UI Stack document uitwerken: per micro-interactie trigger, animatie, system state en feedback definiëren.",
            insight: "23 unieke micro-interacties geïdentificeerd; 7 hadden dubbele triggers die interfereerden en verwarring veroorzaakten.",
            steering: "Dubbele triggers elimineren en alle micro-interacties documenteren in een gedeeld UI Stack document als single source of truth.",
            evidence: "UI_Stack_MOBUS_Micro_Interacties_v1.pdf",
          },
        ],
      },
      {
        id: "detail-hill-3",
        title: "Hill 3: Prikkel op het Juiste Moment",
        focus: "Who: De gebruikers. What: Worden precies op het moment van stagnatie gewekt prikkel. Wow: Zodat ze zonder afleiding uit hun vaste denkpatroon worden gehaald.",
        activities: [
          {
            id: "detail-act-3",
            title: "Field trial",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 5,
            principle: "Test in de echte wereld.",
            goal: "Testen in de 'wilde' praktijk of de ruimtelijke prikkel op het juiste moment komt, zodat het de flow herstelt zonder opdringerig te zijn.",
            why: "Lab-omgevingen simuleren geen echte werkdruk en afleiding; alleen een field trial onthult of de prikkel-timing in de praktijk klopt.",
            withWhom: "12 deelnemers in hun eigen werkomgeving.",
            how: "Field trial over twee werkdagen; MOBUS actief in de werkruimte, observatoren noteren prikkel-momenten en gebruikersreacties.",
            insight: "De prikkel werkte optimaal bij een stagnatiemoment van 45-90 seconden. Onder 45s voelde het opdringerig; boven 90s was de gebruiker al afgehaakt.",
            steering: "Interventietiming instellen op 60 seconden na gedetecteerde stagnatie als gouden standaard.",
            evidence: "Field_Trial_MOBUS_Prikkel_Timing_v1.pdf",
          },
          {
            id: "detail-act-6",
            title: "Experience prototyping",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Maak de prikkel tastbaar.",
            goal: "Het tastbaar en testbaar maken van de onverwachte ruimtelijke AI-prikkel (zoals een licht-, geluid- of geursignaal).",
            why: "Abstracte prikkels als 'licht' of 'geur' moeten concreet uitgewerkt worden om te kunnen testen of ze de gewenste gedragsverandering activeren zonder te storen.",
            withWhom: "Experience designer en sensorisch expert.",
            how: "Experience prototyping sessie: drie prikkel-varianten (licht, geluid, combinatie) bouwen en testen op 8 gebruikers.",
            insight: "Zachte ambiante lichtpuls scoorde het hoogst: niet-intrusief, herkenbaar als signaal, en volledig passend in de werkflow.",
            steering: "Ambiante lichtpuls als primaire prikkel-modaliteit implementeren in het eindprototype.",
            evidence: "Experience_Prototyping_Prikkel_Resultaten_v1.pdf",
          },
        ],
      },
    ],
  },
];

const storageKey = "bc73-process-map-v8";
let state = {
  activePhase: "strategy",
  activeLens: "All",
  visibleStates: processStates.map((item) => item.id),
  phases: loadPhases(),
};

// Position mapping for each activity card to place them around the loop
const activityPositions = {
  // Strategy phase
  "strategy-act-1": {
    "Observe": { top: "25%", left: "10%", tilt: "-2deg" }
  },
  "strategy-act-2": {
    "Observe": { top: "60%", left: "6%", tilt: "1.5deg" }
  },
  "strategy-act-3": {
    "Reflect": { top: "34%", left: "45%", tilt: "1.2deg" }
  },
  "strategy-act-4": {
    "Make": { top: "25%", left: "76%", tilt: "-2deg" }
  },
  // Concept phase
  "concept-act-1": {
    "Observe": { top: "30%", left: "8%", tilt: "2deg" }
  },
  "concept-act-2": {
    "Reflect": { top: "34%", left: "45%", tilt: "-1.5deg" }
  },
  "concept-act-3": {
    "Make": { top: "28%", left: "76%", tilt: "1.5deg" }
  },
  "concept-act-4": {
    "Observe": { top: "60%", left: "6%", tilt: "-1.5deg" }
  },
  "concept-act-5": {
    "Reflect": { top: "60%", left: "45%", tilt: "2deg" }
  },
  "concept-act-6": {
    "Make": { top: "60%", left: "76%", tilt: "-2deg" }
  },
  // Structure phase
  "structure-act-1": {
    "Observe": { top: "25%", left: "8%", tilt: "-2deg" }
  },
  "structure-act-2": {
    "Observe": { top: "60%", left: "6%", tilt: "1.5deg" }
  },
  "structure-act-3": {
    "Observe": { top: "80%", left: "9%", tilt: "-1deg" }
  },
  "structure-act-4": {
    "Reflect": { top: "25%", left: "38%", tilt: "1.5deg" }
  },
  "structure-act-5": {
    "Reflect": { top: "45%", left: "45%", tilt: "-1.5deg" }
  },
  "structure-act-6": {
    "Reflect": { top: "62%", left: "38%", tilt: "2deg" }
  },
  "structure-act-7": {
    "Make": { top: "28%", left: "76%", tilt: "-2deg" }
  },
  "structure-act-8": {
    "Reflect": { top: "78%", left: "45%", tilt: "-0.8deg" }
  },
  "structure-act-9": {
    "Make": { top: "60%", left: "76%", tilt: "1.5deg" }
  },
  // Detail phase
  "detail-act-1": {
    "Observe": { top: "25%", left: "8%", tilt: "2deg" }
  },
  "detail-act-2": {
    "Observe": { top: "55%", left: "6%", tilt: "-1.5deg" }
  },
  "detail-act-3": {
    "Observe": { top: "78%", left: "9%", tilt: "1deg" }
  },
  "detail-act-4": {
    "Make": { top: "25%", left: "76%", tilt: "-2deg" }
  },
  "detail-act-5": {
    "Make": { top: "55%", left: "76%", tilt: "1.5deg" }
  },
  "detail-act-6": {
    "Make": { top: "78%", left: "76%", tilt: "-1deg" }
  }
};

// Target DOM Elements
const phaseTabs = document.querySelector("#phaseTabs");
const lensFilters = document.querySelector("#lensFilters");
const stateFilters = document.querySelector("#stateFilters");
const hillRail = document.querySelector("#hillRail");
const whiteboardActivities = document.querySelector("#whiteboardActivities");
const playbackCardContainer = document.querySelector("#playbackCardContainer");
const canvasPhaseTitle = document.querySelector("#canvasPhaseTitle");

const boardCanvas = document.querySelector("#boardCanvas");
const canvasContent = document.querySelector("#canvasContent");
const zoomLevelLabel = document.querySelector("#zoomLevel");
const zoomInBtn = document.querySelector("#zoomIn");
const zoomOutBtn = document.querySelector("#zoomOut");
const zoomResetBtn = document.querySelector("#zoomReset");

// Zoom constants and limits
const MIN_ZOOM = 0.55;
const MAX_ZOOM = 2.5;
const DEFAULT_ZOOM = 0.85;

// Zoom and Pan state variables
let zoom = DEFAULT_ZOOM;
let panX = 0;
let panY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;

let isTouching = false;
let touchStartX = 0;
let touchStartY = 0;

function applyTransform() {
  if (!canvasContent) return;
  if (window.innerWidth <= 1024) {
    canvasContent.style.transform = "";
    return;
  }
  canvasContent.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
  if (zoomLevelLabel) {
    zoomLevelLabel.textContent = `${Math.round(zoom * 100)}%`;
  }
}

// Wheel zoom
if (boardCanvas) {
  boardCanvas.addEventListener("wheel", (e) => {
    if (window.innerWidth <= 1024) return;
    e.preventDefault();
    
    const zoomIntensity = 0.08;
    const rect = boardCanvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const worldX = (mouseX - panX) / zoom;
    const worldY = (mouseY - panY) / zoom;
    
    let newZoom;
    if (e.deltaY < 0) {
      newZoom = zoom * (1 + zoomIntensity);
    } else {
      newZoom = zoom / (1 + zoomIntensity);
    }
    
    newZoom = Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM);
    
    panX = mouseX - worldX * newZoom;
    panY = mouseY - worldY * newZoom;
    zoom = newZoom;
    
    applyTransform();
  }, { passive: false });

  // Mouse pan
  boardCanvas.addEventListener("mousedown", (e) => {
    if (window.innerWidth <= 1024) return;
    if (e.button !== 0) return; // Left click only
    if (e.target.closest("button, a, input, select, textarea, .activity-card")) return;
    
    isDragging = true;
    boardCanvas.classList.add("grabbing");
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  // Touch pan
  boardCanvas.addEventListener("touchstart", (e) => {
    if (window.innerWidth <= 1024) return;
    if (e.touches.length !== 1) return;
    if (e.target.closest("button, a, input, select, textarea, .activity-card")) return;
    
    isTouching = true;
    touchStartX = e.touches[0].clientX - panX;
    touchStartY = e.touches[0].clientY - panY;
  }, { passive: true });

  boardCanvas.addEventListener("touchmove", (e) => {
    if (!isTouching || e.touches.length !== 1) return;
    panX = e.touches[0].clientX - touchStartX;
    panY = e.touches[0].clientY - touchStartY;
    applyTransform();
  }, { passive: true });

  boardCanvas.addEventListener("touchend", () => {
    isTouching = false;
  });
}

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  applyTransform();
});

window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    if (boardCanvas) {
      boardCanvas.classList.remove("grabbing");
    }
  }
});

window.addEventListener("resize", applyTransform);

function zoomAtCenter(factor) {
  if (window.innerWidth <= 1024 || !boardCanvas) return;
  const rect = boardCanvas.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const worldX = (centerX - panX) / zoom;
  const worldY = (centerY - panY) / zoom;
  
  let newZoom = zoom * factor;
  newZoom = Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM);
  
  panX = centerX - worldX * newZoom;
  panY = centerY - worldY * newZoom;
  zoom = newZoom;
  
  applyTransform();
}

function resetToDefault() {
  if (window.innerWidth <= 1024 || !boardCanvas) {
    zoom = 1;
    panX = 0;
    panY = 0;
    applyTransform();
    return;
  }
  const rect = boardCanvas.getBoundingClientRect();
  zoom = DEFAULT_ZOOM;
  panX = (rect.width * (1 - zoom)) / 2;
  panY = (rect.height * (1 - zoom)) / 2;
  applyTransform();
}

if (zoomInBtn) zoomInBtn.addEventListener("click", () => zoomAtCenter(1.2));
if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => zoomAtCenter(1 / 1.2));
if (zoomResetBtn) {
  zoomResetBtn.addEventListener("click", resetToDefault);
}

// Templates
const activityTemplate = document.querySelector("#activityTemplate");
const hillTemplate = document.querySelector("#hillTemplate");
const playbackTemplate = document.querySelector("#playbackTemplate");

const resetDemoBtn = document.querySelector("#resetDemo");
if (resetDemoBtn) resetDemoBtn.addEventListener("click", resetDemo);

resetToDefault();
render();

function loadPhases() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return structuredClone(seedPhases);
  try {
    const parsed = JSON.parse(stored);
    parsed.forEach((phase) => {
      if (phase.hills) {
        phase.hills.forEach((hill) => {
          // Sync case-specific Hill titles and focus descriptions
          const seedHill = seedPhases.find(p => p.id === phase.id)?.hills.find(h => h.id === hill.id);
          if (seedHill) {
            hill.title = seedHill.title;
            hill.focus = seedHill.focus;
          }

          if (hill.activities) {
            hill.activities.forEach((activity) => {
              if (activity.state === "actual") {
                activity.state = "planned";
              }
              
              // Find matching seed activity to copy new fields
              let seedAct = null;
              for (const sp of seedPhases) {
                for (const sh of sp.hills) {
                  const sa = sh.activities.find(a => a.id === activity.id);
                  if (sa) {
                    seedAct = sa;
                    break;
                  }
                }
                if (seedAct) break;
              }
              
              if (seedAct) {
                if (activity.duration === undefined) {
                  activity.duration = seedAct.duration;
                }
                activity.title = seedAct.title; // always sync case-specific method/title
                activity.why = activity.why || seedAct.why;
                activity.withWhom = activity.withWhom || seedAct.withWhom;
                activity.how = activity.how || seedAct.how;
                activity.insight = activity.insight || seedAct.insight;
                activity.goal = seedAct.goal; // always sync the simplified goal statement
              } else if (activity.duration === undefined) {
                activity.duration = 3;
              }
            });
          }
        });
      }
    });
    return parsed;
  } catch (e) {
    return structuredClone(seedPhases);
  }
}

function savePhases() {
  localStorage.setItem(storageKey, JSON.stringify(state.phases));
}

function activePhase() {
  return state.phases.find((phase) => phase.id === state.activePhase);
}

function render() {
  renderPhaseTabs();
  renderFilters();
  renderHeadings();
  renderHills();
  renderLoop();
  renderPlayback();
  renderTimeBudget();
  applyTransform();
}

function renderPhaseTabs() {
  phaseTabs.innerHTML = "";
  state.phases.forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `phase-tab${phase.id === state.activePhase ? " active" : ""}`;
    button.innerHTML = `<strong>${phase.title}</strong>`;
    button.addEventListener("click", () => {
      state.activePhase = phase.id;
      render();
    });
    phaseTabs.append(button);
  });
}

function renderFilters() {
  lensFilters.innerHTML = "";
  lenses.forEach((lens) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip chip-${lensClass(lens)}${lens === state.activeLens ? " active" : ""}`;
    button.textContent = lens;
    button.addEventListener("click", () => {
      state.activeLens = lens;
      render();
    });
    lensFilters.append(button);
  });

  stateFilters.innerHTML = "";
  processStates.forEach((processState) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `state-toggle${state.visibleStates.includes(processState.id) ? " active" : ""}`;
    button.textContent = processState.label;
    button.addEventListener("click", () => {
      toggleProcessState(processState.id);
      render();
    });
    stateFilters.append(button);
  });
}

function renderHeadings() {
  const phase = activePhase();
  document.body.dataset.phase = phase.id;
  if (canvasPhaseTitle) {
    canvasPhaseTitle.textContent = phase.title;
  }
}

function renderHills() {
  if (!hillRail) return;
  const phase = activePhase();
  hillRail.innerHTML = "";
  
  const tilts = ["-1.8deg", "1.2deg", "-0.8deg", "1.5deg"];
  
  phase.hills.forEach((hill, idx) => {
    const card = hillTemplate.content.firstElementChild.cloneNode(true);
    const flagColor = flagColors[idx % flagColors.length];
    
    card.style.setProperty("--flag-color", flagColor);
    card.style.setProperty("--tilt", tilts[idx % tilts.length]);
    
    card.querySelector("h2").textContent = hill.title;
    card.querySelector("p").textContent = hill.focus;
    
    const activeActs = filteredActivities(hill.activities);
    card.querySelector(".hill-meta span").textContent = `${activeActs.length} actief`;
    
    hillRail.append(card);
  });
}

function getLensColorVar(lens) {
  switch (lens) {
    case "UX Design": return "var(--ux)";
    case "Technology": return "var(--tech)";
    case "User": return "var(--user)";
    case "Business": return "var(--business)";
    default: return "#ffffff";
  }
}

function getPosition(activityId, stage, index) {
  // Check if we have custom saved positions in active phase state
  const phase = activePhase();
  let customPos = null;
  if (phase && phase.hills) {
    phase.hills.forEach((hill) => {
      if (hill.activities) {
        const act = hill.activities.find((a) => a.id === activityId);
        if (act && act.positions && act.positions[stage]) {
          customPos = act.positions[stage];
        }
      }
    });
  }
  if (customPos) return customPos;

  // Check if we have mapped coordinates
  if (activityPositions[activityId] && activityPositions[activityId][stage]) {
    return activityPositions[activityId][stage];
  }
  
  // Fallback layout math for dynamically added cards
  const tilts = ["-2.5deg", "1.8deg", "-1.2deg", "2deg"];
  const tilt = tilts[index % tilts.length];
  
  if (stage === "Observe") {
    const top = index === 0 ? "25%" : (index === 1 ? "60%" : `${80 + (index - 2) * 16}%`);
    const left = index % 2 === 0 ? "10%" : "6%";
    return { top, left, tilt };
  } else if (stage === "Reflect") {
    const lefts = ["38%", "54%", "45%"];
    const left = lefts[index % lefts.length];
    const top = index < 3 ? "34%" : `${50 + (index - 3) * 14}%`;
    return { top, left, tilt };
  } else if (stage === "Make") {
    const top = index === 0 ? "25%" : (index === 1 ? "60%" : `${80 + (index - 2) * 16}%`);
    const left = index % 2 === 0 ? "76%" : "80%";
    return { top, left, tilt };
  }
  
  return { top: "50%", left: "50%", tilt: "0deg" };
}

function bindCardDrag(card, activityId, stage) {
  let hasDragged = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // Click handler for mobile and desktop click/taps
  card.addEventListener("click", (e) => {
    if (e.target.closest("button, a, input, select, textarea")) return;
    if (hasDragged) {
      hasDragged = false;
      return;
    }
    openActivityModal(activityId, stage);
  });

  // Mouse drag
  card.addEventListener("mousedown", (e) => {
    if (window.innerWidth <= 1024) return;
    if (e.button !== 0) return; // Left click only
    if (e.target.closest("button, a, input, select, textarea")) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = card.getBoundingClientRect();
    const parentRect = canvasContent.getBoundingClientRect();
    
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    hasDragged = false;
    
    card.classList.add("dragging");
    
    function onMouseMove(moveEvent) {
      const dist = Math.hypot(moveEvent.clientX - dragStartX, moveEvent.clientY - dragStartY);
      if (dist > 5) {
        hasDragged = true;
      }
      
      const newLeftPx = (moveEvent.clientX - parentRect.left - offsetX * zoom) / zoom;
      const newTopPx = (moveEvent.clientY - parentRect.top - offsetY * zoom) / zoom;
      
      const leftPercent = (newLeftPx / (parentRect.width / zoom)) * 100;
      const topPercent = (newTopPx / (parentRect.height / zoom)) * 100;
      
      const boundedLeft = Math.max(0, Math.min(leftPercent, 95));
      const boundedTop = Math.max(0, Math.min(topPercent, 95));
      
      card.style.left = `${boundedLeft}%`;
      card.style.top = `${boundedTop}%`;
      drawConnections();
    }
    
    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      
      card.classList.remove("dragging");
      
      // Keep hasDragged flag slightly longer to prevent click event
      if (hasDragged) {
        setTimeout(() => { hasDragged = false; }, 50);
      }
      
      const finalLeft = card.style.left;
      const finalTop = card.style.top;
      
      const phase = activePhase();
      if (phase && phase.hills) {
        phase.hills.forEach((hill) => {
          if (hill.activities) {
            const act = hill.activities.find((a) => a.id === activityId);
            if (act) {
              if (!act.positions) act.positions = {};
              act.positions[stage] = { top: finalTop, left: finalLeft, tilt: card.style.getPropertyValue("--tilt") || "0deg" };
            }
          }
        });
      }
      
      savePhases();
    }
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // Touch drag
  card.addEventListener("touchstart", (e) => {
    if (window.innerWidth <= 1024) return;
    if (e.touches.length !== 1) return;
    if (e.target.closest("button, a, input, select, textarea")) return;
    
    e.stopPropagation();
    
    const rect = card.getBoundingClientRect();
    const parentRect = canvasContent.getBoundingClientRect();
    
    const offsetX = e.touches[0].clientX - rect.left;
    const offsetY = e.touches[0].clientY - rect.top;
    
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    hasDragged = false;
    
    card.classList.add("dragging");
    
    function onTouchMove(moveEvent) {
      if (moveEvent.touches.length !== 1) return;
      
      const dist = Math.hypot(moveEvent.touches[0].clientX - dragStartX, moveEvent.touches[0].clientY - dragStartY);
      if (dist > 5) {
        hasDragged = true;
      }
      
      const newLeftPx = (moveEvent.touches[0].clientX - parentRect.left - offsetX * zoom) / zoom;
      const newTopPx = (moveEvent.touches[0].clientY - parentRect.top - offsetY * zoom) / zoom;
      
      const leftPercent = (newLeftPx / (parentRect.width / zoom)) * 100;
      const topPercent = (newTopPx / (parentRect.height / zoom)) * 100;
      
      const boundedLeft = Math.max(0, Math.min(leftPercent, 95));
      const boundedTop = Math.max(0, Math.min(topPercent, 95));
      
      card.style.left = `${boundedLeft}%`;
      card.style.top = `${boundedTop}%`;
      drawConnections();
    }
    
    function onTouchEnd() {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      
      card.classList.remove("dragging");
      
      if (hasDragged) {
        setTimeout(() => { hasDragged = false; }, 50);
      }
      
      const finalLeft = card.style.left;
      const finalTop = card.style.top;
      
      const phase = activePhase();
      if (phase && phase.hills) {
        phase.hills.forEach((hill) => {
          if (hill.activities) {
            const act = hill.activities.find((a) => a.id === activityId);
            if (act) {
              if (!act.positions) act.positions = {};
              act.positions[stage] = { top: finalTop, left: finalLeft, tilt: card.style.getPropertyValue("--tilt") || "0deg" };
            }
          }
        });
      }
      
      savePhases();
    }
    
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
  }, { passive: true });
}

function renderLoop() {
  if (!whiteboardActivities) return;
  whiteboardActivities.innerHTML = "";
  
  let totalRendered = 0;
  
  stages.forEach((stage) => {
    const stageActs = activitiesForStage(stage);
    
    stageActs.forEach(({ activity, hill }, idx) => {
      const card = activityTemplate.content.firstElementChild.cloneNode(true);
      card.id = `card-${activity.id}-${stage}`;
      card.classList.add(`${activity.state}-card`);
      
      // Goal statement as the main title
      card.querySelector(".activity-goal").textContent = activity.goal;
      
      // Small tags: Lens/Perspective, Hill number, Method title
      const lensBadge = card.querySelector(".tag-lens");
      lensBadge.textContent = activity.lens;
      lensBadge.classList.add(`lens-${lensClass(activity.lens)}`);

      const hillIndex = activePhase().hills.findIndex(h => h.id === hill.id);
      const hillNum = hillIndex !== -1 ? hillIndex + 1 : 1;
      const hillColor = flagColors[hillIndex % flagColors.length];
      
      const hillTag = card.querySelector(".tag-hill");
      hillTag.innerHTML = `▲ Hill ${hillNum}`;
      hillTag.style.borderColor = hillColor;
      hillTag.style.color = hillColor;
      hillTag.style.backgroundColor = hillColor + "12";
      
      card.querySelector(".tag-method").textContent = activity.title;
      
      // Position the card absolutely
      const pos = getPosition(activity.id, stage, idx);
      card.style.top = pos.top;
      if (pos.left) card.style.left = pos.left;
      if (pos.right) card.style.right = pos.right;
      card.style.setProperty("--tilt", pos.tilt);
      
      bindCardDrag(card, activity.id, stage);
      whiteboardActivities.append(card);
      totalRendered++;
    });
  });

  // Render connection paths between cards
  drawConnections();
}

function openActivityModal(activityId, stage) {
  const phase = activePhase();
  let activity = null;
  let hill = null;
  let hillIndex = -1;
  
  if (phase && phase.hills) {
    for (let i = 0; i < phase.hills.length; i++) {
      const h = phase.hills[i];
      const act = h.activities.find(a => a.id === activityId);
      if (act) {
        activity = act;
        hill = h;
        hillIndex = i;
        break;
      }
    }
  }
  
  if (!activity || !hill) return;
  
  const modal = document.querySelector("#activityModal");
  if (!modal) return;
  
  // Lens flags
  const lensContainer = modal.querySelector("#modalLensIndicators");
  if (lensContainer) {
    lensContainer.innerHTML = "";
    const flag = document.createElement("div");
    flag.className = "lens-flag";
    flag.style.setProperty("--flag-color", getLensColorVar(activity.lens));
    flag.title = activity.lens;
    lensContainer.appendChild(flag);
  }
  
  // Meta badges
  const stageBadge = modal.querySelector("#modalStageBadge");
  if (stageBadge) {
    stageBadge.textContent = stage;
  }
  
  const hillBadge = modal.querySelector("#modalHillBadge");
  if (hillBadge) {
    const hillNum = hillIndex !== -1 ? hillIndex + 1 : 1;
    const hillColor = flagColors[hillIndex % flagColors.length];
    hillBadge.innerHTML = `▲ Hill ${hillNum}`;
    hillBadge.title = hill.title;
    hillBadge.style.backgroundColor = hillColor;
    hillBadge.style.borderColor = hillColor;
    hillBadge.style.color = "#ffffff";
  }
  
  // Title and Goal
  modal.querySelector("#modalTitle").textContent = activity.title;
  modal.querySelector("#modalGoal").textContent = activity.goal;
  
  // Section contents
  modal.querySelector("#modalSectionWhy p").textContent = activity.why || activity.relevance || "Geen details beschikbaar.";
  modal.querySelector("#modalSectionWithWhom p").textContent = activity.withWhom || "Niet gespecificeerd.";
  modal.querySelector("#modalSectionHow p").textContent = activity.how || "Niet gespecificeerd.";
  modal.querySelector("#modalSectionInsight p").textContent = activity.insight || "Niet gespecificeerd.";
  modal.querySelector("#modalSectionSteering p").textContent = activity.steering || "Geen bijsturing bekend.";
  
  // Evidence
  const evidenceSec = modal.querySelector("#modalSectionEvidence");
  const filenameSpan = modal.querySelector("#modalEvidenceFilename");
  if (activity.evidence && activity.evidence !== "Placeholder canvas, notities of bronverwijzing." && !activity.evidence.includes("Placeholder")) {
    evidenceSec.style.display = "block";
    filenameSpan.textContent = activity.evidence;
  } else {
    evidenceSec.style.display = "block";
    filenameSpan.textContent = "Geen bewijslast geüpload.";
  }
  
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeActivityModal() {
  const modal = document.querySelector("#activityModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

// Bind close events
const modalCloseBtn = document.querySelector("#modalCloseBtn");
const activityModal = document.querySelector("#activityModal");

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeActivityModal);
}
if (activityModal) {
  activityModal.addEventListener("click", (e) => {
    if (e.target === activityModal) {
      closeActivityModal();
    }
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeActivityModal();
  }
});


function renderPlayback() {
  if (!playbackCardContainer) return;
  const phase = activePhase();
  playbackCardContainer.innerHTML = "";
  
  const card = playbackTemplate.content.firstElementChild.cloneNode(true);
  card.querySelector("h2").textContent = phase.playback.title || `${phase.title} playback`;
  card.querySelector('[data-field="evidence"]').textContent = phase.playback.evidence;
  card.querySelector('[data-field="decision"]').textContent = phase.playback.decision;
  card.querySelector('[data-field="steering"]').textContent = phase.playback.steering;
  
  playbackCardContainer.append(card);
}

function renderTimeBudget() {
  const plannedDaysValue = document.querySelector("#plannedDaysValue");
  const timeProgressFill = document.querySelector("#timeProgressFill");
  if (!plannedDaysValue || !timeProgressFill) return;

  const phase = activePhase();
  let totalDays = 0;
  phase.hills.forEach((hill) => {
    const activeActs = filteredActivities(hill.activities);
    activeActs.forEach((act) => {
      totalDays += act.duration || 0;
    });
  });

  plannedDaysValue.textContent = `${totalDays} ${totalDays === 1 ? 'dag' : 'dagen'}`;
  const percentage = Math.min((totalDays / 15) * 100, 100);
  timeProgressFill.style.width = `${percentage}%`;
}

function resetDemo() {
  state.phases = structuredClone(seedPhases);
  savePhases();
  resetToDefault();
  render();
}

function toggleProcessState(processState) {
  if (state.visibleStates.includes(processState)) {
    state.visibleStates = state.visibleStates.filter((item) => item !== processState);
  } else {
    state.visibleStates = [...state.visibleStates, processState];
  }
}

function filteredActivities(activities) {
  return activities.filter((activity) => {
    const matchesLens = state.activeLens === "All" || activity.lens === state.activeLens;
    const matchesState = state.visibleStates.includes(activity.state);
    return matchesLens && matchesState;
  });
}

function activitiesForStage(stage) {
  return activePhase().hills.flatMap((hill) =>
    filteredActivities(hill.activities)
      .filter((activity) => activity.stages.includes(stage))
      .map((activity) => ({ activity, hill })),
  );
}

function stateLabel(processState) {
  return processStates.find((item) => item.id === processState)?.label ?? processState;
}

function lensClass(lens) {
  return lens.toLowerCase().replace(/\s+/g, "-");
}

function drawConnections() {
  const svg = document.querySelector("#canvasConnections");
  if (!svg) return;
  
  // Clear previous paths
  const paths = svg.querySelectorAll("path.connection-line");
  paths.forEach(p => p.remove());
  
  // Clear connected class on cards
  document.querySelectorAll(".activity-card").forEach(c => c.classList.remove("connected"));
  
  // Do not draw lines on mobile stacked layout
  if (window.innerWidth <= 1024) return;
  
  const currentPhaseId = state.activePhase;
  const connections = activityConnections[currentPhaseId] || [];
  const parentRect = canvasContent.getBoundingClientRect();
  
  connections.forEach((conn) => {
    const fromId = `card-${conn.from.id}-${conn.from.stage}`;
    const toId = `card-${conn.to.id}-${conn.to.stage}`;
    
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    
    if (!fromEl || !toEl) return;
    
    // Check if both elements are visible
    if (fromEl.style.display === "none" || toEl.style.display === "none" || 
        fromEl.getBoundingClientRect().width === 0 || toEl.getBoundingClientRect().width === 0) {
      return;
    }
    
    const rectFrom = fromEl.getBoundingClientRect();
    const rectTo = toEl.getBoundingClientRect();
    
    // Absolute positions relative to scaled parent canvasContent
    const fromX = (rectFrom.left - parentRect.left + rectFrom.width) / zoom;
    const fromY = (rectFrom.top - parentRect.top + rectFrom.height / 2) / zoom;
    
    const toX = (rectTo.left - parentRect.left) / zoom;
    const toY = (rectTo.top - parentRect.top + rectTo.height / 2) / zoom;
    
    // Add visual connected class to trigger node boxes opacity
    fromEl.classList.add("connected");
    toEl.classList.add("connected");
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("connection-line");
    
    // Beautiful Bezier S-curve
    const controlOffset = Math.max(80, Math.abs(toX - fromX) * 0.45);
    const cp1x = fromX + controlOffset;
    const cp1y = fromY;
    const cp2x = toX - controlOffset;
    const cp2y = toY;
    
    const d = `M ${fromX} ${fromY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toX} ${toY}`;
    
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "var(--ink)");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("marker-end", "url(#arrow)");
    path.setAttribute("filter", "url(#sketchy-filter)");
    path.setAttribute("stroke-dasharray", "8, 6");
    
    svg.appendChild(path);
  });
}

// Redraw connections when viewport changes
window.addEventListener("resize", drawConnections);
