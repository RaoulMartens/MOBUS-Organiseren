const lenses = ["All", "UX Design", "Technology", "User", "Business"];
const stages = ["Observe", "Reflect", "Make"];
const processStates = [
  { id: "planned", label: "Gepland" },
  { id: "adjustment", label: "Bijsturing" },
];

const flagColors = ["#9d4edd", "#ff70a6", "#06d6a0", "#339af0"];

const activityConnections = {
  strategy: [
    { from: { id: "strategy-act-6", stage: "Reflect" }, to: { id: "strategy-act-4", stage: "Observe" } },
    { from: { id: "strategy-act-4", stage: "Observe" }, to: { id: "strategy-act-7", stage: "Observe" } },
    { from: { id: "strategy-act-4", stage: "Observe" }, to: { id: "strategy-act-5", stage: "Make" } }
  ],
  concept: [
    { from: { id: "concept-act-1", stage: "Reflect" }, to: { id: "concept-act-2", stage: "Make" } },
    { from: { id: "concept-act-2", stage: "Make" }, to: { id: "concept-act-4", stage: "Make" } },
    { from: { id: "concept-act-4", stage: "Make" }, to: { id: "concept-act-3", stage: "Reflect" } },
    { from: { id: "concept-act-3", stage: "Reflect" }, to: { id: "concept-act-5", stage: "Reflect" } }
  ],
  structure: [
    { from: { id: "structure-act-1", stage: "Make" }, to: { id: "structure-act-2", stage: "Reflect" } },
    { from: { id: "structure-act-2", stage: "Reflect" }, to: { id: "structure-act-3", stage: "Make" } },
    { from: { id: "structure-act-3", stage: "Make" }, to: { id: "structure-act-6", stage: "Observe" } },
    { from: { id: "structure-act-4", stage: "Make" }, to: { id: "structure-act-5", stage: "Reflect" } },
    { from: { id: "structure-act-5", stage: "Reflect" }, to: { id: "structure-act-6", stage: "Observe" } },
    { from: { id: "structure-act-6", stage: "Observe" }, to: { id: "structure-act-7", stage: "Reflect" } }
  ],
  detail: [
    { from: { id: "detail-act-1", stage: "Make" }, to: { id: "detail-act-3", stage: "Observe" } },
    { from: { id: "detail-act-3", stage: "Observe" }, to: { id: "detail-act-2", stage: "Make" } },
    { from: { id: "detail-act-4", stage: "Reflect" }, to: { id: "detail-act-2", stage: "Make" } },
    { from: { id: "detail-act-2", stage: "Make" }, to: { id: "detail-act-6", stage: "Observe" } },
    { from: { id: "detail-act-6", stage: "Observe" }, to: { id: "detail-act-7", stage: "Reflect" } },
    { from: { id: "detail-act-7", stage: "Reflect" }, to: { id: "detail-act-5", stage: "Make" } },
    { from: { id: "detail-act-5", stage: "Make" }, to: { id: "detail-act-8", stage: "Make" } }
  ]
}

const seedPhases = [
  {
    id: "strategy",
    title: "Strategy",
    subtitle: "Richting kiezen en aannames expliciet maken.",
    period: "23 feb ➔ 23 mrt 2026",
    status: "Voltooid",
    focusLabel: "Strategische focus",
    focusText: "In deze fase organiseerden we het proces rond de vraag wat MOBUS moet betekenen voor gebruikers, organisatie, technologie en ervaring.",
    playback: {
      title: "Product definition toetsen en conceptthema’s kiezen",
      goal: "Product definition toetsen en conceptthema’s kiezen",
      evidence: "De product definition werd aangescherpt: MOBUS moet gebruikers niet fysiek verplaatsen, maar mentaal in beweging brengen.",
      decision: "Van mobiliteitspronkstuk ➔ mentale mobiliteit. Thema's: sociale inspiratie, zintuiglijke prikkels en flexibele ruimte.",
      steering: "Focus naar gastvrijheid, echte ontmoeting, creativiteit en scenario’s zoals brainstorms en onderzoeksgesprekken.",
      fullEvidence: "De product definition werd aangescherpt: MOBUS moet gebruikers niet fysiek verplaatsen, maar mentaal in beweging brengen. De richting “mobiliteitspronkstuk” bleek te vaag en moeilijk concreet te maken.",
      fullDecision: "Besluit: MOBUS wordt niet georganiseerd als mobiliteitspronkstuk, maar als interactieve creatieve ruimte voor mentale beweging. De Concept-fase wordt georganiseerd rond drie thema’s: sociale inspiratie, zintuiglijke prikkels en flexibele/modulaire ruimte.",
      fullSteering: "Vervolg/Bijsturing: Focus verschuift naar gastvrijheid, echte ontmoeting, creativiteit en scenario’s zoals brainstorms, innovatiesessies en onderzoeksgesprekken."
    },
    hills: [
      {
        id: "strategy-hill-1",
        title: "Hill 1: Nieuw perspectief",
        focus: "Who: Gebruikers die vastzitten in een standaard denkpatroon. What: Ervaren een creatieve MOBUS-ruimte die hen uit hun routine haalt. Wow: Zodat ze nieuwe perspectieven ontdekken.",
        activities: [
          {
            id: "strategy-act-1",
            title: "Team Canvas invullen",
            lens: "Business",
            state: "planned",
            stages: ["Observe"],
            duration: 2,
            principle: "Diverse Empowered Teams",
            goal: "Teamrollen organiseren rond MOBUS als creatieve ruimte.",
            why: "MOBUS vraagt om samenwerking tussen ruimte, interactie, onderzoek, technologie en creativiteit. Daarom moest eerst duidelijk worden hoe het team samenwerkt, wie welke rol pakt en hoe beslissingen worden genomen.",
            withWhom: "Intern team + Tugba als team captain/docent.",
            how: "We hebben het Team Canvas ingevuld om rollen, afspraken, risico’s, waarden en samenwerking expliciet te maken.",
            insight: "Kernresultaat: Rollen, afspraken en gezamenlijke purpose: structuurgerichte professionals fysiek en mentaal in beweging brengen. Resultaat: De gezamenlijke purpose werd: 'Wij willen structuurgerichte professionals fysiek en mentaal in beweging brengen, zodat zij hun dagelijkse automatische piloot kunnen uitschakelen en tot fundamenteel nieuwe perspectieven komen.'",
            steering: "Consequentie voor proces: Deze purpose werd de eerste richtinggevende basis voor de Strategy-fase. Hierdoor konden latere activiteiten worden gekoppeld aan mentale beweging in plaats van alleen aan de bus als fysieke ruimte.",
            evidence: "Team Canvas, teamrollen, afspraken, risico’s en eerste purpose.",
          },
          {
            id: "strategy-act-2",
            title: "Product Thinking toepassen",
            lens: "UX Design + User",
            state: "planned",
            stages: ["Reflect"],
            duration: 4,
            principle: "Focus on User Outcomes",
            goal: "MOBUS richten op mentale beweging, niet op de bus als object.",
            why: "Bij MOBUS was de verleiding groot om te snel te denken in zichtbare oplossingen zoals schermen, AI, flexibele stoelen, interactieve technologie of de bus als innovatief object. Product Thinking hielp ons om eerst te bepalen wat MOBUS als product moet betekenen voor gebruiker, organisatie, techniek en ervaring.",
            withWhom: "Volledige MOBUS-projectteam.",
            how: "We analyseerden de MOBUS-case via drie stappen: 1. Business, Users & Understanding the Job (HAN, innovatie, mobiliteit, studenten, onderzoekers). 2. Product Thinking en Core UX (kernervaring aanwakkeren van creativiteit inplaats van showcasen). 3. Problem-Solution-Fit en Product Definition (van passieve werkhouding naar levende interactieve omgeving).",
            insight: "Kernresultaat: MOBUS werd gedefinieerd als interactieve creatieve ruimte voor mentale beweging, niet als technologische showcase. Before: MOBUS als zichtbare showcase voor mobiliteit, innovatie en energietransitie. After: MOBUS als interactieve creatieve ruimte die gebruikers fysiek en mentaal in beweging brengt.",
            steering: "Consequentie voor proces: De vervolgactiviteiten gingen minder over uitstraling en positionering, en meer over gebruikersbehoeften, mentale modellen, creatief gedrag, ruimtebeleving en core user experience.",
            evidence: "User Centered Design Canvas, product definition, overzicht van uitdagingen, gebruikersmotivaties, angsten en eerste core UX-formulering.",
          },
          {
            id: "strategy-act-3",
            title: "Literatuurstudie creativiteit & ruimte",
            lens: "UX Design + User",
            state: "planned",
            stages: ["Observe"],
            duration: 5,
            principle: "Restless Reinvention",
            goal: "Ruimtekennis vertalen naar ontwerpprincipes voor mentale beweging.",
            why: "MOBUS moet gebruikers niet alleen een andere ruimte aanbieden, maar hen fysiek en mentaal uit vaste patronen halen. Daarom moest ik begrijpen hoe creativiteit wordt gestimuleerd en welke rol ruimte, prikkels en veiligheid daarin spelen.",
            withWhom: "Individueel uitgevoerd, daarna ingebracht in het team tijdens reflectiemomenten.",
            how: "Ik verdiepte mij in literatuur rond creativiteit, ruimte, cognitie en gedrag. Binnen het team was dit mijn individuele expertisegebied. Ik keek onder andere naar het Behavior Model van Fogg, waarin gedrag ontstaat door motivatie, vermogen en een prompt.",
            insight: "Kernresultaat: Creativiteit ontstaat niet vanzelf door een andere ruimte; MOBUS moet actief voorwaarden creëren voor veiligheid, prikkels, beweging en speelsheid. Fogg-analyse leverde inzichten over de invloed van sfeer en ruimtelijke inrichting.",
            steering: "Consequentie voor proces: Deze inzichten werden input voor latere concepten en prototypes. Ontwerpkeuzes over licht, geluid, opstelling, natuurlijke elementen en verrassende triggers konden daardoor beter worden onderbouwd.",
            evidence: "Literatuurstudie_Ruimte_Cognitie_v1.pdf",
          },
          {
            id: "strategy-act-6",
            title: "Creatieve associatiesessie bij Connectr",
            lens: "Business",
            state: "adjustment",
            stages: ["Reflect"],
            duration: 2,
            principle: "Restless Reinvention",
            goal: "Business-taal ophalen rond anders denken, prikkels en autonomie.",
            why: "Tijdens Connectr waren vooral stakeholders aanwezig vanuit de businesskant van de case. Omdat MOBUS ook organisatorisch begrepen en gedragen moet worden, hebben we deze groep actief betrokken in ons vooronderzoek.",
            withWhom: "Business-stakeholders rond MOBUS, waaronder aanwezigen vanuit HAN en het College van Bestuur.",
            how: "Oorspronkelijk hadden we ruim 15 minuten om onze richting toe te lichten en input op te halen. Tijdens de workshop werd dit ingekort naar 5 minuten. Daarom kozen we voor een snelle associatie-oefening rond drie begrippen: anders denken, prikkels en autonoom.",
            insight: "Resultaat: Bij 'anders denken' kwamen woorden als inspiratie en onbekende omgeving terug. Bij 'prikkels' zagen we zowel positieve (licht, geluid) als negatieve (onrust, afleiding) associaties. Bij 'autonoom' kwamen zelfstandigheid en AI terug, maar ook spanning rond niet zelf beslissen. Before: Onze richting toelichten en daarna input ophalen. After: Direct een korte associatie-oefening inzetten.",
            steering: "Door de onverwachte tijdsdruk zou een presentatie vooral zenden worden, terwijl we juist input nodig hadden van de aanwezige business-stakeholders. Daarom hebben we de activiteit aangepast naar een korte associatie-oefening rond anders denken, prikkels en autonomie. Zo konden we ondanks de beperkte tijd toch bruikbare input ophalen.",
            shortSteeringTitle: "Presenteren\\\\nwerd input ophalen",
            shortSteeringMeta: "Niveau: activiteit\\\\nAanleiding: tijdsdruk",
            evidence: "Gedigitaliseerde associaties rond anders denken, prikkels en autonoom.",
          }
        ],
      },
      {
        id: "strategy-hill-2",
        title: "Hill 2: Rustige HAN-ruimte",
        focus: "Who: Het bestuur en HAN-stakeholders. What: Krijgen een rustige ruimte voor overleg en activiteiten. Wow: Zodat MOBUS aansluit bij de visie en werkomgeving van de HAN.",
        activities: [
          {
            id: "strategy-act-4",
            title: "Interviews",
            lens: "Business",
            state: "planned",
            stages: ["Observe"],
            duration: 5,
            principle: "Diverse Empowered Teams",
            goal: "Achterhalen hoe MOBUS waarde en draagvlak krijgt binnen HAN.",
            why: "MOBUS moet niet alleen waardevol zijn voor gebruikers, maar ook passen binnen HAN. Daarom moesten we zicht krijgen op draagvlak, eigenaarschap, regelgeving, onderhoud en praktische inzetbaarheid.",
            withWhom: "Diverse HAN-stakeholders vanuit organisatie, duurzaamheid, mobiliteit, onderzoek en facilitaire context.",
            how: "We gebruikten semigestructureerde interviews om hun rol, ervaring en blik op MOBUS te begrijpen. We vroegen naar hun visie op de bus, organisatorische voorwaarden, beperkingen en wanneer MOBUS volgens hen waardevol zou zijn.",
            insight: "Kernresultaat: Stakeholders zagen MOBUS niet eenduidig: deels als duurzaam/innovatief pronkstuk, deels als inspirerende werk- en vergaderruimte. Evaluatie maakte deze spanning rond de bus helder.",
            steering: "Consequentie: Deze spanning werd meegenomen naar de reflectie: ontwerpen we MOBUS als showcase van innovatie, of als ruimte die creativiteit en nieuwe perspectieven activeert?",
            evidence: "Interviewnotities, stakeholderinzichten, businessperspectieven en input voor empathy maps.",
          },
          {
            id: "strategy-act-7",
            title: "Co-creatiesessie voorbereiden",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 3,
            principle: "Diverse Empowered Teams",
            goal: "Met een 3D-MOBUS onze probleemstelling ruimtelijk toetsen.",
            why: "De overgang van Strategy naar Concept vraagt om concrete validatiemethodes. Deze co-creatiesessie met 3D-modellen stelt ons in staat om de aannames over ruimtelijke herkenbaarheid en interactie direct te toetsen.",
            withWhom: "Opdrachtgever, teamleden en geselecteerde co-creatie deelnemers.",
            how: "Voorbereiden van een workshopstructuur waarin een fysiek 3D-model van de bus wordt gebruikt om indelingen en scenario's na te bootsen.",
            insight: "Kernresultaat: De methode werd ontworpen om onze probleemstelling te kunnen bevestigen óf ontkrachten. Het legde de basis voor de Concept-fase.",
            steering: "Consequentie: Direct doorstromen naar de Concept-fase met de 3D-werkplaten als leidraad.",
            evidence: "Draaiboek co-creatiesessie and 3D-model werkplaten.",
          },
        ],
      },
      {
        id: "strategy-hill-3",
        title: "Hill 3: Modulaire creatieve werkplek",
        focus: "Who: Studenten die een creatieve sessie uitvoeren. What: Gebruiken een modulaire werkplek die interactie uitlokt. Wow: Zodat creativiteit makkelijker op gang komt.",
        activities: [
          {
            id: "strategy-act-5",
            title: "Empathy maps maken",
            lens: "User + Business",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Focus on User Outcomes",
            goal: "Stakeholderinzichten vertalen naar behoeften en spanningen rond MOBUS.",
            why: "MOBUS raakt meerdere belangen: creativiteit, mobiliteit, duurzaamheid, vergaderen, innovatie, regelgeving, eigenaarschap en uitstraling. De empathy maps hielpen om deze belangen zichtbaar naast elkaar te zetten.",
            withWhom: "Intern team, op basis van interviews met stakeholders zoals logistieke medewerkers, onderzoekers, programmaleiders en HAN-medewerkers.",
            how: "We ordenden uitspraken en observaties in empathy maps. We keken naar wat stakeholders zeggen, denken, voelen, doen, zien en horen. Ook benoemden we pains en gains.",
            insight: "Kernresultaat: De maps maakten zichtbaar dat MOBUS tegelijk inspirerend, bruikbaar, gedragen en niet te technisch of vaag moet worden. Resultaat: Terugkerende thema’s waren inspiratie, vergaderruimte, eigenaarschap, regelgeving, adoptie en voorkomen dat MOBUS stagneert.",
            steering: "Consequentie: De empathy maps bevestigden dat MOBUS niet alleen aantrekkelijk moet zijn, maar ook een duidelijke eigenaar, context en gebruikswaarde nodig heeft.",
            evidence: "Meerdere empathy maps voor verschillende stakeholderperspectieven.",
          },
        ],
      },
    ],
  },
  {
    id: "concept",
    title: "Concept",
    subtitle: "Ideeën verkennen, vergelijken en onderbouwen.",
    period: "23 mrt ➔ 13 apr 2026",
    status: "Voltooid",
    focusLabel: "Conceptuele focus",
    focusText: "In deze fase vertaalden we de strategische richting naar meerdere conceptmogelijkheden voor MOBUS, zodat we konden onderzoeken welke ervaring mentale beweging het sterkst oproept.",
    playback: {
      title: "Conceptrichting kiezen voor uitwerking in Structure",
      goal: "Eén maakbare conceptrichting kiezen voor de Structure-fase.",
      evidence: "De Ademendr Wagon was interessant, maar te individueel voor een MOBUS-ervaring waarin samenwerking centraal staat. De Denk-Doe Bus sluit beter aan op fysieke input, digitale verwerking en subtiele ondersteuning vanuit de bus.",
      decision: "De Denk-Doe Bus wordt geselecteerd als de richting voor verdere uitwerking. De Ademende Wagon valt af wegens te individueel karakter.",
      steering: "Twee concepten worden samengevoegd tot één maakbare richting. De Denk-Doe Bus wordt in de Structure-fase verder in detail uitgewerkt.",
      fullEvidence: "Evaluatie: De Ademendr Wagon was interessant, maar te individueel voor een MOBUS-ervaring waarin samenwerking centraal staat. De Denk-Doe Bus sluit beter aan op fysieke input, digitale verwerking en subtiele ondersteuning vanuit de bus.",
      fullDecision: "Besluit: De Denk-Doe Bus wordt geselecteerd als de maakbare conceptrichting. De Ademende Wagon valt af omdat het te individueel is en samenwerking onvoldoende ondersteunt.",
      fullSteering: "Bijsturing: Twee concepten → één maakbare richting voor Structure. De Denk-Doe Bus wordt in de Structure-fase verder in detail uitgewerkt.",
    },
    hills: [
      {
        id: "concept-hill-1",
        title: "Hill 1: Uit vaste denkpatronen komen",
        focus: "Who: Vastgeroeste werkers. What: Worden intuïtief uit hun vaste denkpatroon gehaald. Wow: Zodat ze direct nieuwe perspectieven genereren.",
        activities: [
          {
            id: "concept-act-1",
            title: "Conceptkader scherpstellen",
            lens: "User",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Focus on User Outcomes",
            goal: "De Hill vertalen naar een concreet conceptdoel voor mentale beweging.",
            why: "De Strategy-fase had duidelijk gemaakt dat MOBUS draait om mentale mobiliteit. In Concept moest ik voorkomen dat ik te snel losse ideeën of features ging bedenken. Daarom stelde ik eerst een kader op: elk concept moest aantonen hoe MOBUS gebruikers intuïtief uit routine haalt en nieuwe perspectieven laat genereren.",
            withWhom: "Individueel",
            how: "Ik vertaalde de Hill naar een conceptingdoel. Daarbij bleef het einddoel hetzelfde, maar mochten key insight, context en relevante theorie per conceptalternatief verschillen.",
            insight: "Kernresultaat: Alle conceptalternatieven kregen hetzelfde doel: structuurgerichte gebruikers helpen om vaste denkpatronen te doorbreken. Conceptingdoel: Het mentaal in beweging brengen van structuurgerichte studenten en professionals, zodat zij vaste denkpatronen doorbreken en tot creatieve innovatie en nieuwe perspectieven komen. Key insight: Structuurgerichte professionals willen wel nieuwe perspectieven ontwikkelen, maar ervaren een mentale blokkade door angst voor sociale afwijzing wanneer ze plotseling speels of afwijkend moeten doen.",
            steering: "Consequentie voor proces: Dit kader voorkwam dat de Concept-fase een losse brainstorm werd. Elk alternatief moest te herleiden zijn naar mentale beweging, sociale veiligheid en het doorbreken van routine.",
            evidence: "Conceptkader, Hill-koppeling (Alle Hills), key insight en uitgangspunt voor verbredende conceptstudie.",
          },
          {
            id: "concept-act-2",
            title: "Verbredende conceptstudie",
            lens: "UX Design + User",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Restless Reinvention",
            goal: "Meerdere MOBUS-richtingen genereren zonder direct één oplossing vast te zetten.",
            why: "MOBUS moet vaste denkpatronen doorbreken. Daarom moest ook mijn conceptproces zelf niet te veilig of voorspelbaar worden. Ik gebruikte divergerende vragen om de grenzen van de concepten op te rekken.",
            withWhom: "Individueel",
            how: "Ik gebruikte divergent modifiers om conceptalternatieven te verbreden: Wat als de ruimte de blueprint saboteert? Wat als de ruimte actief tegenwerkt zodra mensen in routine vervallen? Wat als Seductive Interaction tot het uiterste wordt gepusht? Wat als er geen natuurlijk licht naar binnen valt? Wat als de MOBUS voor één persoon een cocon wordt die autonoom om je heen vormt?",
            insight: "Kernresultaat: Concepten werden bewust breed verkend via extremen, sabotage en metaforen. Resultaat: De conceptstudie leverde richtingen op zoals speelse blokkade, cognitive coupe, controlled chaos, activation through environment, perspective shift, de mentale schakelaar, de springveer, spijolen maar dan anders en de mo-bubbel-bus.",
            steering: "Consequentie voor proces: De divergentie maakte zichtbaar welke concepten vooral inspirerend waren en welke concepten ook logisch, toetsbaar en prototypbaar konden worden.",
            evidence: "Brede set conceptalternatieven, conceptposters en eerste experience directions.",
          },
          {
            id: "concept-act-3",
            title: "Design Panel met SQUACK",
            lens: "UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 3,
            principle: "Diverse Empowered Teams",
            goal: "Conceptposters toetsen op begrijpelijkheid, structuur en ontwerplogica.",
            why: "De concepten waren gebaseerd op mentale beweging, metaforen en theorie. Daardoor bestond het risico dat ze voor buitenstaanders te abstract of moeilijk te volgen waren. Voor ik ze aan externe stakeholders presenteerde, wilde ik eerst toetsen of ontwerpers the conceptlogica konden begrijpen.",
            withWhom: "Medestudenten Product Design/CMD met ervaring vanuit onder andere Jumbo en Erfgoed Gelderland (belanghebbenden die met een kritische ontwerpersbril kijken naar bruikbaarheid, communicatie en ontwerplogica).",
            how: "Ik organiseerde een Design Panel waarin peers via de SQUACK-methode feedback gaven op mijn conceptposters. Het legde de basis voor een scherper resultaat.",
            insight: "Kernresultaat: Peers hielpen om concepten scherper te maken voordat externe stakeholders ze zagen. Resultaat: De feedback hielp om te zien welke concepten begrijpelijk waren, welke toelichting nodig hadden en welke richtingen sterker of zwakker overkwamen.",
            steering: "Consequentie voor proces: De concepten werden aangescherpt voordat ik ze aan bredere stakeholders voorlegde. Hierdoor werd de volgende playback gerichter en minder afhankelijk van mijn eigen uitleg.",
            evidence: "Feedback op conceptposters, verbeterpunten voor communicatie, structuur en conceptuitleg.",
          },
          {
            id: "concept-act-4",
            title: "Conceptposters maken",
            lens: "UX Design + User",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Restless Reinvention",
            goal: "Abstracte conceptrichtingen tastbaar maken voor feedback.",
            why: "MOBUS is een ruimtelijke en ervaringsgerichte case. Alleen tekst of losse ideeën waren niet genoeg om feedback op te halen. De concepten moesten zichtbaar en bespreekbaar worden.",
            withWhom: "Individueel",
            how: "Ik werkte verschillende conceptrichtingen uit als conceptposters. Per alternatief kon de context, key insight en relevante theorie verschillen, terwijl het overkoepelende doel gelijk bleef: mentale beweging activeren. Voorbeelden van conceptrichtingen: Speelse blokkade, Bouw eerst, praat later, Cognitive coupe, Controlled chaos, Activation through environment, Perspective shift, De mentale schakelaar, De springveer, Sjoelen maar dan anders, Mo-bubbel-bus.",
            insight: "Kernresultaat: Losse ideeën werden bespreekbare conceptalternatieven.",
            steering: "Consequentie voor proces: De posters maakten het mogelijk om niet alleen over ideeën te praten, maar concepten actief te vergelijken, bevragen en filteren.",
            evidence: "Conceptposters, conceptnamen, conceptuitleg en eerste visuele richtingen.",
          }
        ],
      },
      {
        id: "concept-hill-2",
        title: "Hill 2: Ruimte die meebeweegt",
        focus: "Who: Creatieve teams. What: Passen de ruimte frictieloos aan hun actuele doel aan. Wow: Zodat de omgeving hun werk altijd optimaal ondersteunt.",
        activities: [
          {
            id: "concept-act-5",
            title: "Playback met conceptposters",
            lens: "Business + Technology + User",
            state: "adjustment",
            stages: ["Reflect"],
            duration: 3,
            principle: "Focus on User Outcomes",
            goal: "Concepten filteren richting een haalbare keuze voor fysiek prototypen.",
            why: "Waar eerdere sessies vooral gingen over dromen, gebruikerswaarde en gewenste ervaring, had ik hier de praktische realiteit nodig. MOBUS moet uiteindelijk fysiek geprototypeerd kunnen worden. Daarom waren perspectieven vanuit projectmanagement, technologie, duurzaam materiaalgebruik, prototyping en digital storytelling belangrijk.",
            withWhom: "Toin Peters, Ruben Wiltink, Iwan van Bochove, Tugba Gökdemir Ozdes, medestudenten Automotive & Embedded Systems en betrokken technische studenten.",
            how: "Eerst lichtte ik de concepten kort toe. Daarna werden op post-its opmerkingen geschreven en vragen gesteld. Vervolgens ging ik gericht in gesprek met de deelnemers over de concepten.",
            insight: "Resultaat: De sessie maakte duidelijk dat de concepten inhoudelijk en technisch nog te abstract waren. Ook merkte ik dat ik te veel presenteerde en dat feedback via post-its niet voor iedereen goed werkte. Belangrijkste feedback: Activatie via prikkels werkt, maar moet goed gedoseerd worden. Er zijn sterke concepten, maar niet alles is even concreet of uitvoerbaar. MOBUS moet niet te veel ideeën tegelijk dragen. Maak het technisch en praktisch beter voorstelbaar. Denk scherper na over wat er fysiek gebouwd of getest kan worden.",
            steering: "Mijn eigen bijsturing: Ik besloot de concepten niet verder als brede posterreeks te blijven presenteren, maar terug te brengen naar minder richtingen die technisch, inhoudelijk en ruimtelijk beter toetsbaar zijn. Before: Een brede set conceptposters met veel verschillende richtingen. After: Terugbrengen naar twee concrete concepten en doorpakken naar een gerichte 1-op-1 met de projectmanager. Consequentie: De Concept-fase verschoof van breed verkennen naar gericht selecteren.",
            shortSteeringTitle: "Conceptset naar\\\\ntwee concrete richtingen",
            shortSteeringMeta: "Niveau: activiteit\\\\nAanleiding: complexiteit & haalbaarheid",
            evidence: "Twee geselecteerde conceptrichtingen en feedbacknotities.",
          },
        ],
      },
      {
        id: "concept-hill-3",
        title: "Hill 3: Autonomie zonder controleverlies",
        focus: "Who: Samenwerkers. What: Krijgen een ordeelvrije en veilige context. Wow: Zodat ze zonder aarzeling durven experimenteren en creëren.",
        activities: [],
      },
    ],
  },
  {
    id: "structure",
    title: "Structure",
    subtitle: "Ordening, flow en systeemopbouw concreet maken.",
    period: "13 apr ➔ 27 apr 2026",
    status: "Voltooid",
    focusLabel: "Structuurfocus",
    focusText: "In deze fase vertaalden we het gekozen concept naar een concreet systeem: flows, tokens, schermrollen en de logica achter MOBUS als interactieve ruimte.",
    playback: {
      title: "Evalueren of fysieke tokens geschikt waren als hoofdinteractie",
      goal: "Met stakeholders evalueren of fysieke tokens geschikt waren als hoofdinteractie voor MOBUS, voordat we deze richting verder zouden uitwerken in Detail.",
      evidence: "Fysieke tokens maken ideeën tastbaar, maar beperken de hoeveelheid informatie en schaalbaarheid.",
      decision: "De hoofdinteractie wordt digitaal uitgewerkt, zodat functies zoals bewerken, clusteren, archiveren en AI-suggesties goed getest kunnen worden.",
      steering: "Fysieke tokens → digitale tokens.",
      fullEvidence: "Evaluatie: Fysieke tokens maken ideeën tastbaar, maar beperken de hoeveelheid informatie en schaalbaarheid.",
      fullDecision: "Besluit: De hoofdinteractie wordt digitaal uitgewerkt, zodat functies zoals bewerken, clusteren, archiveren en AI-suggesties goed getest kunnen worden.",
      fullSteering: "Bijsturing: Fysieke tokens → digitale tokens.",
    },
    hills: [
      {
        id: "structure-hill-1",
        title: "Rust door fysieke ordening",
        focus: "Who: De gebruikers. What: Schuiven en stapelen fysieke tokens om ideeën visueel te groeperen. Wow: Zodat chaos verandert in een helder gezamenlijk overzicht.",
        activities: [
          {
            id: "structure-act-1",
            title: "Content inventory maken",
            lens: "UX Design + Technology",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: null,
            goal: "Vastleggen wat fysiek, digitaal en achter de schermen nodig is om rust te creëren met tokens.",
            why: "MOBUS bestaat uit meerdere lagen: fysieke tokens, tafelinteractie, wandfeedback en systeemlogica. Zonder content inventory bleef onduidelijk welke informatie waar hoort en wat achter de schermen nodig is.",
            withWhom: "Intern team",
            how: "We beschreven wat de gebruiker fysiek doet, welke digitale feedback zichtbaar moet zijn en welke systeemstappen nodig zijn om ideeën te ordenen, clusteren en terug te koppelen.",
            insight: "Kernresultaat: De losse onderdelen van token, tafel, wand en systeem werden concreet gemaakt. Beide Hills passen bij de content inventory.",
            steering: "Consequentie voor proces: Deze inventory vormde de basis voor de user flow en de low-fi prototypetest.",
            evidence: "Inventory van fysieke elementen, digitale content, systeemacties en feedbackmomenten.",
          },
          {
            id: "structure-act-2",
            title: "Ontologie en taxonomie afstemmen",
            lens: "Technology + UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Diverse Empowered Teams",
            goal: "Individuele inventories samenbrengen tot één gedeelde structuur voor MOBUS.",
            why: "MOBUS moet ideeën herkennen, ordenen en terugkoppelen. Daarvoor moest duidelijk worden welke typen input, clusters, patronen en systeemreacties bestaan.",
            withWhom: "Intern team",
            how: "We brachten de individuele inventories samen en stemden af welke termen, categorieën en relaties belangrijk zijn voor de MOBUS-interactie.",
            insight: "Kernresultaat: De systeemtaal werd afgestemd voordat de user flow werd uitgewerkt. Beide Hills passen bij deze activiteit.",
            steering: "Consequentie voor proces: De user flow kon daarna niet alleen vanuit schermen worden ontworpen, maar vanuit de logica van ideeën, clusters en systeemreacties.",
            evidence: "Gedeelde taxonomie en ontologie als basis voor de user flow.",
          },
          {
            id: "structure-act-3",
            title: "User flow uitwerken",
            lens: "User + UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Focus on User Outcomes",
            goal: "De interacties bepalen waarmee we testen of tokens chaos omzetten in overzicht.",
            why: "De MOBUS-ervaring bestaat uit fysieke en digitale stappen. De user flow was nodig om te bepalen wat de gebruiker doet, wanneer het systeem reageert en hoe het gezamenlijke resultaat ontstaat.",
            withWhom: "Intern team",
            how: "We tekenden de flow uit vanaf het moment dat gebruikers de MOBUS binnenkomen tot het moment waarop zij ideeën clusteren, het systeem patronen toont en de groep een keuze maakt.",
            insight: "Kernresultaat: De kerninteractie werd vertaald naar een testbare flow van input, schuiven, clusteren en beslissen. Kan ook geplaatst worden als artifact.",
            steering: "Consequentie voor proces: De flow maakte duidelijk welke interacties in de low-fi prototypetest moesten worden getest.",
            evidence: "User flow met gebruikersacties, systeemkeuzes, alternatieve flow en observatiepunten.",
          },
          {
            id: "structure-act-6",
            title: "Low-fi tokentest",
            lens: "User",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Focus on User Outcomes",
            goal: "Testen of schuiven en stapelen van tokens rust en overzicht creëert.",
            why: "De eerste Hill draait om fysieke ordening. Daarom moest ik testen of tokens daadwerkelijk helpen om chaos in een brainstorm om te zetten naar een helder gezamenlijk resultaat.",
            withWhom: "Jessey (testleider), Raoul (Wizard of Oz / AI op scherm), Stijn (ondersteuning Wizard of Oz), Luca (observator en notulist), en HAN studenten",
            how: "We voerden een low-fi test uit met studenten van de HAN. De deelnemers kregen een herkenbare opdracht: als ontwerpers voor een Coca-Cola-campagne moesten zij individuele inzichten clusteren in richtlijnen en patronen. De tokens stonden voor ideeën en konden worden geschoven, gegroepeerd en gestapeld.",
            insight: "Kernresultaat: De kerninteractie werd getest op begrijpelijkheid, rust en samenwerking.",
            steering: "Consequentie voor proces: De test liet zien welke onderdelen van de fysieke tokeninteractie frictieloos werkten en welke onderdelen onduidelijkheid of risico op informatieverlies veroorzaakten.",
            evidence: "Observaties, testnotities, reacties van deelnemers en input voor affinity analyse.",
          },
        ],
      },
      {
        id: "structure-hill-2",
        title: "Autonome prikkel",
        focus: "Who: De gebruikers. What: Ervaren dat MOBUS patronen analyseert en ideeën, combinaties of tegenstellingen projecteert. Wow: Zodat ze worden verrast en op nieuwe perspectieven komen.",
        activities: [
          {
            id: "structure-act-4",
            title: "Beslisboom en wandbubbels ontwerpen",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Restless Reinvention",
            goal: "Bepalen wanneer MOBUS ingrijpt en hoe autonome input zichtbaar wordt.",
            why: "MOBUS mag niet zomaar willekeurig ideeën projecteren. De autonome input moet op het juiste moment komen, zodat het gebruikers helpt in plaats van stoort.",
            withWhom: "Intern team",
            how: "We ontwierpen een beslisboom voor wanneer MOBUS ingrijpt en maakten visuele richtingen voor wandbubbels. Daarmee onderzochten we hoe ideeën, tegenstellingen of combinaties op de wand kunnen verschijnen.",
            insight: "Kernresultaat: De AI-prikkel werd vertaald naar systeemmomenten en visuele wandfeedback.",
            steering: "Consequentie voor proces: Deze visualisatie vormde de basis voor de provocative sessie en Wizard of Oz-test.",
            evidence: "Beslisboom, conceptvisualisatie en eerste look & feel van wandbubbels.",
          },
          {
            id: "structure-act-5",
            title: "Technische expert review",
            lens: "Technology + UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 2,
            principle: "Diverse Empowered Teams",
            goal: "Bepalen hoe de interacties haalbaar getest kunnen worden met Wizard of Oz.",
            why: "De autonome werking van MOBUS is technisch complex. Voor Structure was het nog niet nodig om alles echt te bouwen, maar wel om realistisch te testen hoe gebruikers reageren.",
            withWhom: "Ruben als expert prototyping / digital storytelling",
            how: "Met Ruben bepaalden we hoe we de interacties kunnen simuleren via Wizard of Oz. Daarbij speelt het systeem alsof het autonoom reageert, terwijl het achter de schermen wordt aangestuurd.",
            insight: "Kernresultaat: De test werd technisch haalbaar gemaakt zonder het systeem al volledig te bouwen. Beide Hills passen bij deze review.",
            steering: "Consequentie voor proces: We konden de ervaring testen.",
            evidence: "Technische testopzet voor Wizard of Oz, rolverdeling en haalbare prototype-aanpak.",
          },
          {
            id: "structure-act-7",
            title: "Bijsturing: Van fysiek naar digitaal",
            lens: "UX Design + Technology",
            state: "adjustment",
            stages: ["Reflect"],
            duration: 3,
            principle: "Restless Reinvention",
            goal: "De interactie heroverwegen na evaluatie met stakeholders.",
            why: "Om te bepalen hoe we omgaan met schaalbaarheid en informatieverlies op tafel.",
            withWhom: "Opdrachtgever + Ontwerpteam",
            how: "We evalueerden de resultaten en besloten de fysieke tokens digitaal te gaan ondersteunen/uitwerken.",
            insight: "Kernresultaat: Keuze voor digitale uitwerking van de tokens interactie.",
            steering: "Bijsturing: Fysieke tokens ➔ digitale tokens.",
            evidence: "Testresultaten evaluatie en bijgestuurde interactie-opzet.",
          }
        ],
      },
    ],
  },
  {
    id: "detail",
    title: "Detail",
    subtitle: "Afwerking, bewijsvoering en overdraagbaarheid aanscherpen.",
    period: "4 mei ➔ 18 jun 2026",
    status: "Afronding",
    focusLabel: "Detailfocus",
    focusText: "In deze fase werkten we de MOBUS-flow uit tot een duidelijk prototype met micro-interacties, system states en schermrollen voor telefoon, tafel en wand.",
    playback: {
      title: "Prototypeflow toetsen voor eindpresentatie",
      goal: "Bepalen of de uitgewerkte MOBUS-flow duidelijk, rustig en presenteerbaar genoeg is.",
      labelEvidence: "Te toetsen",
      labelDecision: "Focus",
      evidence: "Snappen gebruikers de rollen van telefoon, tafel en wand?",
      decision: "Microcopy · system states · AI-nudge · schermrollen.",
      steering: null,
      fullEvidence: "Te toetsen: Snappen gebruikers de rollen van telefoon, tafel en wand?",
      fullDecision: "Focus: Microcopy · system states · AI-nudge · schermrollen.",
      fullSteering: null,
      fullConsequence: null,
    },
    hills: [
      {
        id: "detail-hill-1",
        title: "Hill 1: Vloeiende fysieke-digitale reactie",
        focus: "Who: De gebruikers. What: Zien hun fysieke tokenhandelingen direct terug in tafel, telefoon en wand. Wow: Zodat MOBUS voelt als één levend systeem in plaats van losse schermen.",
        activities: [
          {
            id: "detail-act-1",
            title: "Content mapping uitvoeren",
            lens: "Technology",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Focus on User Outcomes",
            goal: "User flow spiegelen aan backendcontent om technische frictie zichtbaar te maken.",
            why: "MOBUS bestaat uit een fysieke tafel, telefooninput, wandoutput en een achterliggend systeem dat ideeën moet herkennen, clusteren en teruggeven. Daarom moest ik toetsen of de bedachte choreografie technisch ondersteund kon worden door de ontologie, taxonomie en interface states.",
            withWhom: "Intern team + UX/UI designer + Backend developer",
            how: "Ik spiegelde de visuele user flow aan de backend content inventory. Per stap keek ik naar input, verwerking en output. Daarbij verbond ik gebruikersacties aan systeemonderdelen zoals Input Events, Token Data, Taxonomy, Ontology, Cluster Data, AI Suggestions, Interface States, Wall Output en Archive.",
            insight: "De flow bleek haalbaar, maar kwetsbaar door verwerkingstijd, metadata en visuele drukte. Before: De flow was vooral ontworpen vanuit de ideale gebruikerservaring. After: De flow werd aangescherpt vanuit technische randvoorwaarden en systeemstates.",
            steering: "Ik moest niet alleen schermen ontwerpen, maar ook loading states, partial states, empty states, tokenstatussen en regels voor archiveren/verplaatsen van content.",
            evidence: "Content mapping-matrix met user flow-stappen, input, verwerking, output en te testen knelpunten."
          },
          {
            id: "detail-act-3",
            title: "Taxonomie en metadata toetsen",
            lens: "Technology",
            state: "planned",
            stages: ["Observe"],
            duration: 3,
            principle: "Focus on User Outcomes",
            goal: "Controleren of ruwe input betrouwbaar naar tokens en clusters wordt vertaald.",
            why: "MOBUS kan alleen zinvolle clusters of AI-prikkels geven als ideeën goed geclassificeerd worden. Als metadata ontbreekt, toont een token weinig betekenis en worden verbanden onbetrouwbaar.",
            withWhom: "Intern team + Backend developer",
            how: "Ik keek in de content mapping naar de relatie tussen Input Events, Taxonomy, Token Data, Ontology, Cluster Data en AI Suggestions. Daarbij onderzocht ik waar classificatie of metadata kon ontbreken.",
            insight: "Datakwaliteit werd randvoorwaarde voor betekenisvolle AI-suggesties. De taxonomie en inspiratie-database moeten verrijkt worden voordat AI-suggesties betrouwbaar genoeg zijn.",
            steering: "In het prototype moest ik extra duidelijk maken welke input gebruikers geven en hoe die input als betekenisvolle token terugkomt.",
            evidence: "Technische knelpunten rond taxonomie, metadata en inspiratie-database."
          },
          {
            id: "detail-act-5",
            title: "Prototype detailleren",
            lens: "UX Design + Technology",
            state: "planned",
            stages: ["Make"],
            duration: 4,
            principle: "Restless Reinvention",
            goal: "Telefoon, tafel en wand samenbrengen tot één vloeiende MOBUS-flow.",
            why: "De MOBUS-ervaring bestaat niet uit één scherm, maar uit een ecosysteem. Gebruikers voeren ideeën in via hun telefoon, manipuleren tokens op tafel en ontvangen overzicht of AI-input via de wand.",
            withWhom: "Intern team + UX/UI + Technical team",
            how: "Ik werkte de belangrijkste flow uit: sessie start, telefoon koppelen, idee toevoegen, token verplaatsen, cluster vormen, AI-nudge tonen, wandoutput updaten, idee schalen, sessie opslaan en sessieoverzicht tonen.",
            insight: "De interactie werd uitgewerkt van idee-invoer tot clusters, AI-nudges en sessie-output.",
            steering: "De usability test kon zich richten op de vraag of gebruikers de interactie begrepen zonder constante uitleg.",
            evidence: "Gedetailleerd prototype met telefoonflow, tafelflow, wandfeedback, AI-nudges en sessie-output."
          },
          {
            id: "detail-act-8",
            title: "Opleverpakket samenstellen",
            lens: "UX Design + Technology + Business",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Diverse Empowered Teams",
            goal: "De complete documentatie en het prototype overdraagbaar opleveren.",
            why: "Om de overdracht naar ontwikkelaars en stakeholders frictieloos te laten verlopen.",
            withWhom: "Ontwerpteam + Opdrachtgever",
            how: "Bundelen van specificaties, code, assets en user flow in een opleverpakket.",
            insight: "Kernresultaat: Volledig overdraagbaar opleverpakket gereed.",
            steering: "Consequentie: Eindoplevering en afsluiting van het project.",
            evidence: "Opleverpakket_MOBUS_v1.zip"
          }
        ]
      },
      {
        id: "detail-hill-2",
        title: "Hill 2: Rust door duidelijke system states",
        focus: "Who: De gebruikers. What: Krijgen bij elke input subtiele feedback, status en bevestiging. Wow: Zodat ze minder hoeven te gokken en cognitieve belasting laag blijft.",
        activities: [
          {
            id: "detail-act-2",
            title: "System states ontwerpen",
            lens: "UX Design",
            state: "planned",
            stages: ["Make"],
            duration: 3,
            principle: "Restless Reinvention",
            goal: "Verwerkingstijd maskeren zonder de flow van gebruikers te breken.",
            why: "De backend heeft tijd nodig om relaties te berekenen via de ontologie en AI-suggesties te genereren. Als gebruikers niets zien gebeuren, voelt MOBUS traag of kapot. Daarom moest de interface tussentoestanden tonen.",
            withWhom: "UX/UI + Technical team",
            how: "Ik ontwierp loading states en partial states binnen de interface states. Hierdoor kan de tafel of wand alvast laten zien dat MOBUS verbanden zoekt, voordat de definitieve AI-suggestie verschijnt.",
            insight: "AI-vertraging werd vertaald naar loading states and partial states.",
            steering: "De ervaring werd niet alleen technisch haalbaarder, maar ook rustiger en betrouwbaarder voor de gebruiker.",
            evidence: "Ontwerpregels voor loading states, partial states en AI-feedbackmomenten."
          },
          {
            id: "detail-act-4",
            title: "UX-regels voor visuele rust",
            lens: "UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 3,
            principle: "Focus on User Outcomes",
            goal: "Voorkomen dat tokens, lijnen en AI-acties de tafel te druk maken.",
            why: "MOBUS moet rust brengen in een chaotische brainstorm. Als de tafel te veel informatie toont, veroorzaakt het prototype juist cognitieve overbelasting.",
            withWhom: "Intern team + UX/UI designer",
            how: "Ik stelde ontwerpregels op voor tokenstatussen, archiveren, wall output, empty state en informatielagen. De token moet vooral herkenbaar object blijven; extra details verschijnen via previews, pop-ups, telefoon of wand.",
            insight: "De tafel werd interactielaag; details en overzicht verschoven naar wand en telefoon.",
            steering: "De prototypefocus verschoof van “meer informatie tonen” naar “informatie op het juiste moment en op de juiste plek tonen.”",
            evidence: "UX-regels voor tokenstatussen, archiveren, empty state, wandoutput and informatielagen."
          },
          {
            id: "detail-act-6",
            title: "Usability test uitvoeren",
            lens: "User + UX Design",
            state: "planned",
            stages: ["Observe"],
            duration: 4,
            principle: "Focus on User Outcomes",
            goal: "Testen of gebruikers de MOBUS-flow begrijpen zonder te veel uitleg.",
            why: "Detail vraagt om toetsing van functionaliteit, interactie en gebruikervaring. Daarom moest ik testen of de uitgewerkte micro-interacties, tokenlogica and AI-nudges voor gebruikers logisch genoeg waren.",
            withWhom: "Doelgroepgebruikers + UX/UI team",
            how: "Gebruikers doorliepen de MOBUS-flow met telefoon, tokens, tafel en AI-acties. Ik observeerde waar zij vastliepen, welke functies uitleg nodig hadden en waar de overgang tussen app, token en tafel onduidelijk werd.",
            insight: "Gebruikers snapten de richting, maar misten uitleg, zichtbaarheid en samenhang tussen app, token en tafel. Beide Hills passen bij deze usability test.",
            steering: "De Detail-fase moest zich richten op microcopy, tooltips, tokenstatussen, visuele feedback, uitleg van AI-acties en een duidelijkere taakverdeling tussen telefoon, tafel en wand.",
            evidence: "Usability testdata, observaties en verbeterpunten."
          },
          {
            id: "detail-act-7",
            title: "Testinzichten verwerken",
            lens: "UX Design",
            state: "planned",
            stages: ["Reflect"],
            duration: 3,
            principle: "Restless Reinvention",
            goal: "Usabilityproblemen vertalen naar concrete prototypeverbeteringen.",
            why: "De test liet zien dat het concept waardevol was, maar dat gebruikers nog te veel moesten raden. Omdat MOBUS juist rust moet brengen, moesten onduidelijke interacties worden opgelost.",
            withWhom: "User + UX/UI team",
            how: "Ik zette per verbeterpunt op een rij wat er misging en welke concrete verbetering nodig was. Daarna koppelde ik deze verbeteringen aan onderdelen van het prototype.",
            insight: "De interface werd aangescherpt met microcopy, tooltips, previews en duidelijkere systeemfeedback. Voorbeelden van verbeteringen:\\\\n- Placeholdertekst toevoegen bij titel en beschrijving.\\\\n- Beschrijvingen tonen als previews, pop-ups of uitklapbare kaarten.\\\\n- Tokens laten functioneren als herkenbaar object in plaats van informatiekaart.\\\\n- Tooltips en korte labels toevoegen bij functies.\\\\n- Verwijderen visueel herkenbaar maken.\\\\n- Systeemacties en gebruikersacties visueel onderscheiden.\\\\n- AI-nudge gerichter inzetten bij vastlopen of onduidelijke clusters.\\\\n- Een aparte inspiratie-/strategieënlaag toevoegen.\\\\n- Telefoon een vaste plek geven in de flow.\\\\n- App, token en tafel sterker met elkaar verbinden.",
            steering: "De verbeteringen vormen input voor de laatste detailiteratie van het prototype.",
            evidence: "Verbeterpuntenmatrix met probleem, oorzaak en concrete verbetering."
          }
        ]
      },
      {
        id: "detail-hill-3",
        title: "Hill 3: Precieze AI-prikkel",
        focus: "Who: De gebruikers. What: Ontvangen pas bij stagnatie een gerichte AI-nudge of tegenstelling. Wow: Zodat ze uit hun denkpatroon komen zonder dat AI de regie overneemt.",
        activities: []
      }
    ]
  }
]

const storageKey = "bc73-process-map-v24";
let state = {
  activePhase: "strategy",
  activeLens: "All",
  visibleStates: ["planned"],
  phases: loadPhases(),
};

// Position mapping for each activity card to place them around the loop
const activityPositions = {
  // Strategy phase — positions locked to match approved layout (screenshot 2026-06-01)
  "strategy-act-1": {
    "Observe": { top: "7%", left: "8%", tilt: "-1.5deg" }
  },
  "strategy-act-2": {
    "Reflect": { top: "10%", left: "45%", tilt: "2deg" }
  },
  "strategy-act-3": {
    "Observe": { top: "52%", left: "8%", tilt: "-2deg" }
  },
  "strategy-act-4": {
    "Observe": { top: "70%", left: "10%", tilt: "1deg" }
  },
  "strategy-act-5": {
    "Make": { top: "45%", left: "76%", tilt: "-1.2deg" }
  },
  "strategy-act-6": {
    "Reflect": { top: "60%", left: "42%", tilt: "1.8deg" }
  },
  "strategy-act-7": {
    "Observe": { top: "85%", left: "8%", tilt: "-2deg" }
  },
  // Concept phase
  "concept-act-1": {
    "Reflect": { top: "24%", left: "42%", tilt: "-1.5deg" }
  },
  "concept-act-2": {
    "Make": { top: "30%", left: "76%", tilt: "2deg" }
  },
  "concept-act-3": {
    "Reflect": { top: "46%", left: "45%", tilt: "1.2deg" }
  },
  "concept-act-4": {
    "Make": { top: "60%", left: "78%", tilt: "-1.5deg" }
  },
  "concept-act-5": {
    "Reflect": { top: "68%", left: "42%", tilt: "-2deg" }
  },
  // Structure phase — positions locked to match approved layout (screenshot 2026-06-01)
  "structure-act-1": {
    "Make": { top: "20%", left: "76%", tilt: "-2deg" }
  },
  "structure-act-2": {
    "Reflect": { top: "28%", left: "42%", tilt: "1.5deg" }
  },
  "structure-act-3": {
    "Make": { top: "35%", left: "70%", tilt: "-2deg" }
  },
  "structure-act-4": {
    "Make": { top: "57%", left: "70%", tilt: "1.5deg" }
  },
  "structure-act-5": {
    "Reflect": { top: "55%", left: "43%", tilt: "-1.5deg" }
  },
  "structure-act-6": {
    "Observe": { top: "57%", left: "14%", tilt: "2deg" }
  },
  "structure-act-7": {
    "Reflect": { top: "68%", left: "45%", tilt: "-2deg" }
  },
  // Detail phase
  "detail-act-1": {
    "Make": { top: "20%", left: "76%", tilt: "2deg" }
  },
  "detail-act-2": {
    "Make": { top: "30%", left: "76%", tilt: "-2deg" }
  },
  "detail-act-3": {
    "Observe": { top: "50%", left: "12%", tilt: "-1deg" }
  },
  "detail-act-4": {
    "Reflect": { top: "25%", left: "42%", tilt: "1.5deg" }
  },
  "detail-act-5": {
    "Make": { top: "65%", left: "78%", tilt: "2deg" }
  },
  "detail-act-6": {
    "Observe": { top: "78%", left: "7%", tilt: "1deg" }
  },
  "detail-act-7": {
    "Reflect": { top: "60%", left: "45%", tilt: "-1.8deg" }
  },
  "detail-act-8": {
    "Make": { top: "80%", left: "76%", tilt: "-1.5deg" }
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

let rafPending = false;

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
    if (canvasContent) canvasContent.classList.add("panning");
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  // Touch pan
  boardCanvas.addEventListener("touchstart", (e) => {
    if (window.innerWidth <= 1024) return;
    if (e.touches.length !== 1) return;
    if (e.target.closest("button, a, input, select, textarea, .activity-card")) return;
    
    isTouching = true;
    if (canvasContent) canvasContent.classList.add("panning");
    touchStartX = e.touches[0].clientX - panX;
    touchStartY = e.touches[0].clientY - panY;
  }, { passive: true });

  boardCanvas.addEventListener("touchmove", (e) => {
    if (!isTouching || e.touches.length !== 1) return;
    panX = e.touches[0].clientX - touchStartX;
    panY = e.touches[0].clientY - touchStartY;
    
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        applyTransform();
        rafPending = false;
      });
    }
  }, { passive: true });

  boardCanvas.addEventListener("touchend", () => {
    isTouching = false;
    if (canvasContent) canvasContent.classList.remove("panning");
  });
}

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  
  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(() => {
      applyTransform();
      rafPending = false;
    });
  }
});

window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    if (boardCanvas) {
      boardCanvas.classList.remove("grabbing");
    }
    if (canvasContent) {
      canvasContent.classList.remove("panning");
    }
  }
});

window.addEventListener("resize", () => {
  resetToDefault();
  drawConnections();
});

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
  const canvasWidth = 2200;
  const canvasHeight = 1600;
  
  // Calculate zoom to fit canvas in viewport with some padding (50px)
  const padding = 50;
  const zoomX = (rect.width - padding * 2) / canvasWidth;
  const zoomY = (rect.height - padding * 2) / canvasHeight;
  
  // Choose the smaller zoom factor to ensure both width and height fit
  zoom = Math.min(zoomX, zoomY);
  // Clamp zoom to sensible bounds
  zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
  
  // Center the canvas content in the viewport
  panX = (rect.width - canvasWidth * zoom) / 2;
  panY = (rect.height - canvasHeight * zoom) / 2;
  
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
      const seedP = seedPhases.find(p => p.id === phase.id);
      if (seedP) {
        phase.period = seedP.period;
        phase.status = seedP.status;
        phase.focusLabel = seedP.focusLabel;
        phase.focusText = seedP.focusText;
      }
      if (phase.playback) {
        const seedPlayback = seedP?.playback;
        if (seedPlayback) {
          phase.playback.title        = seedPlayback.title;
          phase.playback.goal         = seedPlayback.goal;
          phase.playback.evidence     = seedPlayback.evidence;
          phase.playback.decision     = seedPlayback.decision;
          phase.playback.steering     = seedPlayback.steering;
          phase.playback.fullEvidence = seedPlayback.fullEvidence;
          phase.playback.fullDecision = seedPlayback.fullDecision;
          phase.playback.fullSteering = seedPlayback.fullSteering;
          phase.playback.fullConsequence = seedPlayback.fullConsequence ?? null;
        }
      }
      if (phase.hills) {
        phase.hills.forEach((hill) => {
          // Sync case-specific Hill titles and focus descriptions
          const seedPhase = seedPhases.find(p => p.id === phase.id);
          const seedHill = seedPhase ? seedPhase.hills.find(h => h.id === hill.id) : null;
          if (seedHill) {
            hill.title = seedHill.title;
            hill.focus = seedHill.focus;
          }

          if (hill.activities) {
            hill.activities = hill.activities.filter(activity => {
              return seedPhases.some(sp => 
                sp.hills.some(sh => 
                  sh.activities.some(sa => sa.id === activity.id)
                )
              );
            });
            hill.activities.forEach((activity) => {
              if (activity.state === "actual") {
                activity.state = "planned";
              }
              
              // Find matching seed activity to copy new fields
              let seedAct = null;
              if (seedHill) {
                seedAct = seedHill.activities.find(a => a.id === activity.id);
              }
              if (!seedAct) {
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
                activity.steering = seedAct.steering; // sync steering
                activity.shortSteering = seedAct.shortSteering; // sync shortSteering
                activity.shortSteeringTitle = seedAct.shortSteeringTitle; // sync shortSteeringTitle
                activity.shortSteeringMeta = seedAct.shortSteeringMeta; // sync shortSteeringMeta
                
                // Sync new schema/fields from seed phases
                activity.lens = seedAct.lens;
                activity.stages = seedAct.stages;
                activity.state = seedAct.state;
                activity.principle = seedAct.principle;
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
    console.error("Error in loadPhases:", e);
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
  renderAnchorCard();
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
    
    // Remove "Hill X: " prefix from title
    card.querySelector("h2").textContent = hill.title.replace(/^Hill \d+:\s*/i, "");
    
    // Bold "Who:", "What:", "Wow:" in focus description
    const formattedFocus = hill.focus
      .replace(/Who:/gi, "<strong>Who:</strong>")
      .replace(/What:/gi, "<strong>What:</strong>")
      .replace(/Wow:/gi, "<strong>Wow:</strong>");
    card.querySelector("p").innerHTML = formattedFocus;
    
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

function getPrincipleIconSvg(principle) {
  if (!principle) return "";
  const lower = principle.toLowerCase();
  
  // Restless Reinvention (uses path from loop.svg, thickened with stroke)
  if (lower.includes("reinvention") || lower.includes("reinvent")) {
    return `<svg class="icon-svg" viewBox="0 0 32 32"><path d="M23.625,22.5875a6.1287,6.1287,0,0,1-4.5-1.9l-3.1-3.2-3.1,3.2a6.4582,6.4582,0,0,1-9.1,0,7.028,7.028,0,0,1-1.8-4.7,6.6547,6.6547,0,0,1,1.9-4.7,6.3375,6.3375,0,0,1,9,0l3.1,3.2,3.1-3.2a6.3375,6.3375,0,0,1,9,0,6.8282,6.8282,0,0,1,0,9.4A6.5418,6.5418,0,0,1,23.625,22.5875Zm-6.2-6.6,3.1,3.3a4.4061,4.4061,0,0,0,6.2,0,4.9077,4.9077,0,0,0,0-6.6,4.4061,4.4061,0,0,0-6.2,0Zm-9-4.6a4.1582,4.1582,0,0,0-3.1,1.3,4.8385,4.8385,0,0,0,0,6.6,4.4061,4.4061,0,0,0,6.2,0l3.1-3.3-3.1-3.3A4.7706,4.7706,0,0,0,8.425,11.3875Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
  }
  
  // Diverse Empowered Teams (custom three dots matching uploaded image)
  if (lower.includes("diverse") || lower.includes("empowered") || lower.includes("team")) {
    return `<svg class="icon-svg" viewBox="0 0 32 32"><circle cx="10" cy="22" r="5" fill="currentColor" /><circle cx="22" cy="22" r="5" fill="currentColor" /><circle cx="22" cy="10" r="5" fill="currentColor" /></svg>`;
  }
  
  // Focus on User Outcomes (solid circle)
  if (lower.includes("user outcome") || lower.includes("outcome")) {
    return `<svg class="icon-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="currentColor" /></svg>`;
  }
  
  // Default / Other
  return `<svg class="icon-svg" viewBox="0 0 32 32"><path d="M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z" fill="currentColor" /></svg>`;
}

function getFirstSentence(text) {
  if (!text) return "";
  // Strip leading "Kernresultaat:", "Kernbijsturing:", "Resultaat:", "Consequentie:" etc.
  let cleaned = text.replace(/^(Kernresultaat|Kernbijsturing|Resultaat|Consequentie voor proces|Consequentie|Evaluatie)\s*:\s*/i, "");
  // Find first period followed by whitespace or end of string
  const match = cleaned.match(/^([^.!?]+[.!?])(?=\s|$)/);
  if (match) {
    return match[1].trim();
  }
  return cleaned.trim();
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
      
      const showAdjustment = activity.state === "adjustment" && state.visibleStates.includes("adjustment");
      if (activity.state === "adjustment") {
        if (showAdjustment) {
          card.classList.add("adjustment-card");
        } else {
          card.classList.remove("adjustment-card");
        }
      }
      
      // 1. Goal (Doel) is main text at the top
      card.querySelector(".activity-goal-text").textContent = getFirstSentence(activity.goal);
      
      // 2. Method (Titel) is small subtitle below it
      card.querySelector(".activity-method-text").textContent = activity.title;
      
      // 3. Perspectief (badge, UX Design -> UX/UI)
      // Render multiple lens badges if present (e.g. UX Design + User)
      const lensBadgeContainer = card.querySelector(".activity-meta-badges");
      if (lensBadgeContainer) {
        lensBadgeContainer.innerHTML = "";
        const lensesList = activity.lens.split(/[+,]/).map(s => s.trim());
        lensesList.forEach(lens => {
          let lensText = lens;
          if (lensText === "UX Design") {
            lensText = "UX/UI";
          }
          const badge = document.createElement("span");
          badge.className = `tag tag-lens lens-${lensClass(lens)}`;
          badge.textContent = lensText;
          lensBadgeContainer.appendChild(badge);
        });
      }
      
      // 4. Hill (badge with ▲ prefix, stripped from 'Hill X:')
      const cleanHillTitle = "▲ " + hill.title.replace(/^Hill \d+:\s*/i, "");
      const hillTag = card.querySelector(".tag-hill");
      hillTag.textContent = cleanHillTitle;
      
      const hillIndex = activePhase().hills.findIndex(h => h.id === hill.id);
      const hillColor = flagColors[hillIndex % flagColors.length];
      hillTag.style.borderColor = "var(--ink)";
      hillTag.style.backgroundColor = hillColor;
      
      // Determine contrast color: white for purple (#9d4edd) and blue (#339af0)
      const textColor = (hillColor === "#9d4edd" || hillColor === "#339af0") ? "#ffffff" : "var(--ink)";
      hillTag.style.color = textColor;
      
      // 5. Principe (badge with SVG icon)
      const principleTag = card.querySelector(".tag-principle");
      principleTag.innerHTML = getPrincipleIconSvg(activity.principle) + "<span>" + activity.principle + "</span>";
      
      // 6. Bijsturing highlight strip (if state is adjustment and adjustment is active)
      const steeringSection = card.querySelector(".activity-result-section.type-bijsturing");
      if (showAdjustment && (activity.steering || activity.shortSteering || activity.shortSteeringTitle)) {
        steeringSection.style.display = "block";
        const titleEl = steeringSection.querySelector(".activity-result-title");
        const metaEl = steeringSection.querySelector(".activity-result-meta");
        
        if (activity.shortSteeringTitle) {
          titleEl.textContent = activity.shortSteeringTitle;
          if (activity.shortSteeringMeta) {
            const htmlLines = activity.shortSteeringMeta.split('\n').map(line => {
              const colonIndex = line.indexOf(':');
              if (colonIndex !== -1) {
                const label = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                return `<div class="meta-row"><span class="meta-label">${label}</span><span class="meta-value">${value}</span></div>`;
              }
              return `<div class="meta-row-fallback">${line}</div>`;
            });
            metaEl.innerHTML = htmlLines.join('');
            metaEl.style.display = "block";
          } else {
            metaEl.innerHTML = "";
            metaEl.style.display = "none";
          }
        } else {
          titleEl.textContent = activity.shortSteering || getFirstSentence(activity.steering);
          metaEl.style.display = "none";
        }
      } else {
        steeringSection.style.display = "none";
      }

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
  
  // Lens flags (supporting multiple lenses)
  const lensContainer = modal.querySelector("#modalLensIndicators");
  if (lensContainer) {
    lensContainer.innerHTML = "";
    const lensesList = activity.lens.split(/[+,]/).map(s => s.trim());
    lensesList.forEach(lens => {
      const flag = document.createElement("div");
      flag.className = "lens-flag";
      flag.style.setProperty("--flag-color", getLensColorVar(lens));
      flag.title = lens;
      lensContainer.appendChild(flag);
    });
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
  
  const steeringHeading = modal.querySelector("#modalSectionSteering h2");
  if (activity.state === "adjustment") {
    if (steeringHeading) steeringHeading.textContent = "Waarom bijgestuurd?";
  } else {
    if (steeringHeading) steeringHeading.textContent = "Ontwerpbesluit / Vervolgstap";
  }
  
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

// Playback Modal functions & close bindings
function openPlaybackModal() {
  const modal = document.querySelector("#playbackModal");
  if (!modal) return;
  
  const phase = activePhase();
  modal.querySelector("#playbackModalTitle").textContent = phase.playback.title || `${phase.title} playback`;
  
  modal.querySelector("#playbackModalSectionEvidence p").textContent = phase.playback.fullEvidence || phase.playback.evidence || "Geen details.";
  modal.querySelector("#playbackModalSectionDecision p").textContent = phase.playback.fullDecision || phase.playback.decision || "Geen details.";
  modal.querySelector("#playbackModalSectionSteering p").textContent = phase.playback.fullSteering || phase.playback.steering || "Geen details.";
  
  const consequenceSec = modal.querySelector("#playbackModalSectionConsequence");
  if (phase.playback.fullConsequence) {
    consequenceSec.style.display = "block";
    consequenceSec.querySelector("p").textContent = phase.playback.fullConsequence;
  } else {
    consequenceSec.style.display = "none";
  }
  
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closePlaybackModal() {
  const modal = document.querySelector("#playbackModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

const playbackModalCloseBtn = document.querySelector("#playbackModalCloseBtn");
const playbackModal = document.querySelector("#playbackModal");

if (playbackModalCloseBtn) {
  playbackModalCloseBtn.addEventListener("click", closePlaybackModal);
}
if (playbackModal) {
  playbackModal.addEventListener("click", (e) => {
    if (e.target === playbackModal) {
      closePlaybackModal();
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeActivityModal();
    closePlaybackModal();
  }
});


function renderAnchorCard() {
  const phase = activePhase();
  const card = document.querySelector("#strategyAnchorCard");
  if (!card) return;
  const eyebrow = card.querySelector(".anchor-eyebrow");
  const desc = card.querySelector(".anchor-desc");
  if (eyebrow) eyebrow.textContent = phase.focusLabel || `${phase.title} focus`;
  if (desc) desc.textContent = phase.focusText || phase.subtitle || "";
}

function renderPlayback() {
  if (!playbackCardContainer) return;
  const phase = activePhase();
  playbackCardContainer.innerHTML = "";
  
  const card = playbackTemplate.content.firstElementChild.cloneNode(true);
  
  if (phase.playback.goal) {
    card.querySelector("h2").textContent = phase.playback.goal;
  } else {
    card.querySelector("h2").textContent = phase.playback.title || `${phase.title} playback`;
  }
  
  // Apply custom section labels if defined, otherwise use defaults
  const labelEvidence = phase.playback.labelEvidence || "Evaluatie";
  const labelDecision = phase.playback.labelDecision || "Besluit";
  card.querySelector('[data-field="evidence"]').closest(".playback-item").querySelector("strong").textContent = labelEvidence;
  card.querySelector('[data-field="decision"]').closest(".playback-item").querySelector("strong").textContent = labelDecision;
  
  card.querySelector('[data-field="evidence"]').textContent = phase.playback.evidence || "";
  card.querySelector('[data-field="decision"]').textContent = phase.playback.decision || "";
  
  // Hide Bijsturing section when steering is null/empty
  const bijsturingItem = card.querySelector(".playback-item-bijsturing");
  if (bijsturingItem) {
    if (phase.playback.steering) {
      bijsturingItem.style.display = "";
      card.querySelector('[data-field="steering"]').textContent = phase.playback.steering;
    } else {
      bijsturingItem.style.display = "none";
    }
  }
  
  card.addEventListener("click", openPlaybackModal);
  
  playbackCardContainer.append(card);
}

function renderTimeBudget() {
  const timePeriodLabel = document.querySelector("#timePeriodLabel");
  const timePeriodValue = document.querySelector("#timePeriodValue");
  const timeStatusLabel = document.querySelector("#timeStatusLabel");
  const plannedDaysValue = document.querySelector("#plannedDaysValue");
  const timeProgressFill = document.querySelector("#timeProgressFill");
  if (!plannedDaysValue) return;

  const phase = activePhase();

  if (phase.period && phase.status) {
    if (timePeriodLabel) timePeriodLabel.textContent = "Periode:";
    if (timePeriodValue) timePeriodValue.innerHTML = phase.period;
    if (timeStatusLabel) timeStatusLabel.textContent = "Status:";
    plannedDaysValue.textContent = phase.status;
    if (phase.status === "Voltooid") {
      plannedDaysValue.style.color = "var(--planned)";
    } else {
      plannedDaysValue.style.color = "var(--adjustment)";
    }
    plannedDaysValue.style.fontWeight = "bold";
    if (timeProgressFill) timeProgressFill.style.width = "100%";
  } else {
    if (timePeriodLabel) timePeriodLabel.textContent = "Duur:";
    if (timePeriodValue) timePeriodValue.textContent = "3 weken (15 dagen)";
    if (timeStatusLabel) timeStatusLabel.textContent = "Gepland:";
    plannedDaysValue.style.color = "";
    plannedDaysValue.style.fontWeight = "";
    
    let totalDays = 0;
    phase.hills.forEach((hill) => {
      const activeActs = filteredActivities(hill.activities);
      activeActs.forEach((act) => {
        totalDays += act.duration || 0;
      });
    });

    plannedDaysValue.textContent = `${totalDays} ${totalDays === 1 ? 'dag' : 'dagen'}`;
    if (timeProgressFill) {
      const percentage = Math.min((totalDays / 15) * 100, 100);
      timeProgressFill.style.width = `${percentage}%`;
    }
  }
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
    const matchesLens = state.activeLens === "All" || 
                        activity.lens.split(/[+,]/).map(s => s.trim()).includes(state.activeLens);
    const matchesState = state.visibleStates.includes(activity.state) || 
                         (activity.state === "adjustment" && state.visibleStates.includes("planned"));
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
  const paths = svg.querySelectorAll("path.connection-line, path.connection-line-bg");
  paths.forEach(p => p.remove());
  
  // Clear connected class on cards
  document.querySelectorAll(".activity-card").forEach(c => c.classList.remove("connected"));
  
  // Do not draw lines on mobile stacked layout
  if (window.innerWidth <= 1024) return;
  
  const currentPhaseId = state.activePhase;
  const connections = activityConnections[currentPhaseId] || [];
  const parentRect = canvasContent.getBoundingClientRect();
  
  // Pre-calculate all connection contact points per card side to avoid overlapping arrowheads/lines
  const sideMap = {};
  function addContact(key, conn) {
    if (!sideMap[key]) {
      sideMap[key] = [];
    }
    if (!sideMap[key].includes(conn)) {
      sideMap[key].push(conn);
    }
  }
  
  connections.forEach((conn) => {
    const fromId = `card-${conn.from.id}-${conn.from.stage}`;
    const toId = `card-${conn.to.id}-${conn.to.stage}`;
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (!fromEl || !toEl) return;
    
    if (fromEl.style.display === "none" || toEl.style.display === "none" || 
        fromEl.getBoundingClientRect().width === 0 || toEl.getBoundingClientRect().width === 0) {
      return;
    }
    
    const rectFrom = fromEl.getBoundingClientRect();
    const rectTo = toEl.getBoundingClientRect();
    const fromCenterX = rectFrom.left + rectFrom.width / 2;
    const toCenterX = rectTo.left + rectTo.width / 2;
    
    const isForward = toCenterX >= fromCenterX;
    const sourceSide = isForward ? "right" : "left";
    const targetSide = isForward ? "left" : "right";
    
    addContact(`${fromId}-${sourceSide}`, conn);
    addContact(`${toId}-${targetSide}`, conn);
  });

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
    
    // Determine direction based on card centers
    const fromCenterX = rectFrom.left + rectFrom.width / 2;
    const toCenterX = rectTo.left + rectTo.width / 2;
    
    const isForward = toCenterX >= fromCenterX;
    const sourceSide = isForward ? "right" : "left";
    const targetSide = isForward ? "left" : "right";
    
    const sourceKey = `${fromId}-${sourceSide}`;
    const sourceConns = sideMap[sourceKey] || [];
    const sourceIndex = sourceConns.indexOf(conn);
    const totalSourceConns = sourceConns.length;
    
    const targetKey = `${toId}-${targetSide}`;
    const targetConns = sideMap[targetKey] || [];
    const targetIndex = targetConns.indexOf(conn);
    const totalTargetConns = targetConns.length;
    
    let fromX, fromY, toX, toY;
    let cp1x, cp1y, cp2x, cp2y;
    
    if (isForward) {
      // Forward connection (left to right): connect right side of source to left side of target
      fromX = (rectFrom.left - parentRect.left + rectFrom.width) / zoom;
      
      if (totalSourceConns <= 1) {
        fromY = (rectFrom.top - parentRect.top + rectFrom.height / 2) / zoom;
      } else {
        const step = rectFrom.height / (totalSourceConns + 1);
        fromY = (rectFrom.top - parentRect.top + step * (sourceIndex + 1)) / zoom;
      }
      
      toX = (rectTo.left - parentRect.left) / zoom;
      
      if (totalTargetConns <= 1) {
        toY = (rectTo.top - parentRect.top + rectTo.height / 2) / zoom;
      } else {
        const step = rectTo.height / (totalTargetConns + 1);
        toY = (rectTo.top - parentRect.top + step * (targetIndex + 1)) / zoom;
      }
      
      const dx = toX - fromX;
      const absDx = Math.abs(dx);
      const controlOffset = Math.max(30, Math.min(120, absDx * 0.4));
      cp1x = fromX + controlOffset;
      cp1y = fromY;
      cp2x = toX - controlOffset;
      cp2y = toY;
    } else {
      // Backward connection (right to left): connect left side of source to right side of target
      fromX = (rectFrom.left - parentRect.left) / zoom;
      
      if (totalSourceConns <= 1) {
        fromY = (rectFrom.top - parentRect.top + rectFrom.height / 2) / zoom;
      } else {
        const step = rectFrom.height / (totalSourceConns + 1);
        fromY = (rectFrom.top - parentRect.top + step * (sourceIndex + 1)) / zoom;
      }
      
      toX = (rectTo.left - parentRect.left + rectTo.width) / zoom;
      
      if (totalTargetConns <= 1) {
        toY = (rectTo.top - parentRect.top + rectTo.height / 2) / zoom;
      } else {
        const step = rectTo.height / (totalTargetConns + 1);
        toY = (rectTo.top - parentRect.top + step * (targetIndex + 1)) / zoom;
      }
      
      const dx = fromX - toX;
      const absDx = Math.abs(dx);
      const controlOffset = Math.max(30, Math.min(120, absDx * 0.4));
      cp1x = fromX - controlOffset;
      cp1y = fromY;
      cp2x = toX + controlOffset;
      cp2y = toY;
    }
    
    // Add visual connected class to trigger node boxes opacity
    fromEl.classList.add("connected");
    toEl.classList.add("connected");
    
    const d = `M ${fromX} ${fromY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toX} ${toY}`;
    
    // Create background path (mask/halo matching phase background)
    const pathBg = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathBg.classList.add("connection-line-bg");
    pathBg.setAttribute("d", d);
    pathBg.setAttribute("fill", "none");
    pathBg.setAttribute("stroke", "var(--phase-bg, var(--phase-strategy))");
    pathBg.setAttribute("stroke-width", "8");
    pathBg.setAttribute("filter", "url(#sketchy-filter)");
    svg.appendChild(pathBg);
    
    // Create foreground path (dashed line)
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("connection-line");
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

// Connections redrawn via unified resize listener
