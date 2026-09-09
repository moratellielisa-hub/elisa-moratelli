// Dati delle pagine servizio (/servizi/[slug]).
// Ogni servizio è una pagina indicizzabile a sé: una keyword, una pagina.

export interface Servizio {
  slug: string;
  icon: "FileText" | "Users" | "RefreshCw" | "UserMinus" | "ClipboardList" | "AlertCircle" | "BookOpen";
  title: string;
  tagline: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  include: string[];
  perChi: string[];
  faq: { domanda: string; risposta: string }[];
}

export const servizi: Servizio[] = [
  {
    slug: "elaborazione-cedolini-paga",
    icon: "FileText",
    title: "Elaborazione cedolini paga",
    tagline: "Precisi, puntuali, ogni mese.",
    short:
      "Gestione mensile di buste paga, contributi INPS, trattenute IRPEF, F24, ferie, malattie, maternità e infortuni.",
    metaTitle: "Elaborazione Buste Paga a Rovereto | Cedolini per Aziende e PMI",
    metaDescription:
      "Elaborazione mensile dei cedolini paga per aziende di Rovereto e Trentino: contributi INPS, trattenute IRPEF, F24, ferie, malattia, maternità. Consulente del Lavoro iscritta all'Albo.",
    h1: "Elaborazione buste paga per aziende e PMI",
    intro: [
      "Ogni mese la busta paga deve essere corretta al centesimo: retribuzione, contributi INPS, trattenute IRPEF, ferie e permessi maturati, malattie, straordinari, voci variabili. Un errore si ripete per dodici mesi e diventa un problema con i dipendenti e con gli enti.",
      "Mi occupo dell'elaborazione completa dei cedolini per aziende, PMI, artigiani e professionisti con dipendenti nella zona di Rovereto e in tutto il Trentino. Ricevi ogni mese buste paga, prospetto contabile e F24 già pronti, con scadenze rispettate e senza doverci pensare tu.",
    ],
    include: [
      "Elaborazione mensile dei cedolini paga secondo il CCNL applicato",
      "Calcolo di contributi INPS, premi INAIL e trattenute IRPEF",
      "Predisposizione dei modelli F24 per il versamento",
      "Gestione di ferie, permessi, ROL, malattia, maternità e infortuni",
      "Straordinari, premi, rimborsi spese, fringe benefit e voci variabili",
      "Flussi Uniemens mensili e denunce agli enti",
      "Prospetti di costo del personale per la contabilità",
      "Tredicesima, quattordicesima e conguagli di fine anno",
    ],
    perChi: [
      "Aziende e PMI con dipendenti in Trentino",
      "Artigiani e commercianti con uno o più collaboratori",
      "Studi professionali con personale di segreteria",
      "Imprese edili con operai (CCNL Edilizia e Cassa Edile)",
      "Attività stagionali del turismo e della ristorazione",
    ],
    faq: [
      {
        domanda: "Quanto costa l'elaborazione di una busta paga?",
        risposta:
          "Il costo dipende dal numero di dipendenti, dal CCNL applicato e dalla complessità della gestione (turni, straordinari, cantieri). Dopo un primo confronto ti propongo un preventivo chiaro con un canone mensile per cedolino, senza costi nascosti.",
      },
      {
        domanda: "Entro quando devo comunicare le presenze del mese?",
        risposta:
          "Concordiamo insieme una data fissa, in genere entro i primi giorni del mese successivo. Le presenze possono essere inviate via email, con un foglio condiviso o tramite il portale dello studio.",
      },
      {
        domanda: "Posso passare a te da un altro consulente a metà anno?",
        risposta:
          "Sì. Il passaggio si gestisce in qualunque momento: recupero i dati storici dal precedente studio (progressivi, ferie residue, TFR) e garantisco la continuità dei cedolini senza interruzioni.",
      },
    ],
  },
  {
    slug: "pratiche-hr",
    icon: "ClipboardList",
    title: "Assunzioni e pratiche HR",
    tagline: "Dalla prima assunzione alla gestione corrente.",
    short:
      "Comunicazioni obbligatorie, scelta del CCNL, inquadramento, lettera di assunzione, agevolazioni, documenti del personale.",
    metaTitle: "Assunzione Dipendenti a Rovereto | Pratiche HR e Comunicazioni Obbligatorie",
    metaDescription:
      "Assumere un dipendente in regola a Rovereto e in Trentino: comunicazione UNILAV, scelta del CCNL, inquadramento, lettera di assunzione e verifica delle agevolazioni. Consulente del Lavoro.",
    h1: "Assunzioni e pratiche HR gestite dall'inizio alla fine",
    intro: [
      "Assumere un dipendente significa scegliere il contratto giusto, inviare la comunicazione obbligatoria al Centro per l'Impiego entro il giorno prima dell'inizio, definire livello e inquadramento, redigere la lettera di assunzione e verificare se esistono agevolazioni contributive. Fatto bene, tutto questo richiede poche ore; fatto male, produce sanzioni e contenziosi.",
      "Ti affianco in ogni assunzione — a tempo indeterminato, determinato, apprendistato, part-time, stagionale — e in tutta la gestione amministrativa del personale che segue: variazioni, documenti, archivio, rapporti con gli enti.",
    ],
    include: [
      "Comunicazione obbligatoria di assunzione (UNILAV) al Centro per l'Impiego",
      "Scelta del CCNL e dell'inquadramento più adatti all'azienda",
      "Redazione della lettera di assunzione e dei patti accessori",
      "Verifica di agevolazioni ed esoneri contributivi disponibili",
      "Apertura delle posizioni INPS, INAIL e Cassa Edile per nuove aziende",
      "Contratti di apprendistato, tirocini e collaborazioni",
      "Gestione del libro unico del lavoro e dei documenti del personale",
      "Variazioni amministrative, comunicazioni e archivio digitale",
    ],
    perChi: [
      "Imprese che assumono il primo dipendente",
      "Aziende in crescita che assumono con regolarità",
      "Attività stagionali con assunzioni a termine ricorrenti",
      "Nuove aziende che devono aprire le posizioni INPS e INAIL",
    ],
    faq: [
      {
        domanda: "Quali documenti servono per assumere un dipendente?",
        risposta:
          "Servono i dati anagrafici e fiscali del lavoratore, il documento d'identità, il codice fiscale, il permesso di soggiorno per cittadini extra-UE, l'eventuale titolo di studio richiesto e le informazioni sul rapporto (mansione, orario, retribuzione). Al resto — comunicazioni, contratto, inquadramento — penso io.",
      },
      {
        domanda: "Quando va inviata la comunicazione di assunzione?",
        risposta:
          "Entro le ore 24 del giorno precedente l'inizio del rapporto di lavoro. Una comunicazione tardiva o mancante espone l'azienda alla maxi-sanzione per lavoro nero. Per questo è importante avvisarmi con qualche giorno di anticipo.",
      },
      {
        domanda: "Esistono agevolazioni per chi assume?",
        risposta:
          "Sì, e cambiano ogni anno: esoneri per giovani, donne, over 50, disoccupati di lunga durata, apprendistato. Prima di ogni assunzione verifico quali incentivi sono applicabili al caso concreto per ridurre il costo del lavoro.",
      },
    ],
  },
  {
    slug: "trasformazioni-contrattuali",
    icon: "RefreshCw",
    title: "Trasformazioni contrattuali",
    tagline: "Ogni cambiamento documentato e comunicato.",
    short:
      "Da tempo determinato a indeterminato, variazioni orarie, cambi di mansione e aggiornamenti amministrativi.",
    metaTitle: "Trasformazioni Contrattuali | Da Determinato a Indeterminato, Part-time, Mansioni",
    metaDescription:
      "Trasformazione del contratto di lavoro: da tempo determinato a indeterminato, da full-time a part-time, cambio mansione o livello. Gestione documenti e comunicazioni a Rovereto e Trentino.",
    h1: "Trasformazioni contrattuali senza errori",
    intro: [
      "Un contratto di lavoro cambia nel tempo: il tempo determinato si trasforma in indeterminato, l'orario passa da full-time a part-time o viceversa, un dipendente cresce di livello o cambia mansione. Ogni modifica richiede un accordo scritto, la comunicazione agli enti entro i termini e l'aggiornamento della busta paga.",
      "Gestisco tutte le trasformazioni contrattuali verificando anche le opportunità: la stabilizzazione di un contratto a termine, ad esempio, può dare accesso a sgravi contributivi che riducono il costo del dipendente.",
    ],
    include: [
      "Trasformazione da tempo determinato a tempo indeterminato",
      "Passaggio da full-time a part-time e viceversa, con accordo scritto",
      "Cambi di mansione, livello e qualifica secondo il CCNL",
      "Proroghe e rinnovi dei contratti a termine nei limiti di legge",
      "Trasformazione dell'apprendistato al termine del periodo formativo",
      "Comunicazioni obbligatorie (UNILAV) di variazione",
      "Verifica di sgravi e incentivi legati alla stabilizzazione",
    ],
    perChi: [
      "Aziende che vogliono stabilizzare un dipendente a termine",
      "Attività che devono rimodulare gli orari del personale",
      "Imprese che promuovono o riorganizzano i ruoli interni",
    ],
    faq: [
      {
        domanda: "Quante volte posso prorogare un contratto a tempo determinato?",
        risposta:
          "La normativa prevede limiti di durata complessiva e di numero di proroghe, oltre a causali obbligatorie superati i 12 mesi. Prima di ogni proroga verifico che l'azienda resti nei limiti: superarli trasforma automaticamente il contratto in indeterminato.",
      },
      {
        domanda: "Il passaggio a part-time va comunicato a qualcuno?",
        risposta:
          "Sì: serve un accordo scritto tra le parti, la comunicazione di variazione al Centro per l'Impiego e l'aggiornamento della posizione ai fini contributivi. Mi occupo dell'intera procedura.",
      },
    ],
  },
  {
    slug: "cessazioni-rapporto-di-lavoro",
    icon: "UserMinus",
    title: "Cessazioni del rapporto di lavoro",
    tagline: "Ogni chiusura gestita con precisione.",
    short:
      "Dimissioni, scadenza del termine, licenziamenti, accordi consensuali: comunicazioni, TFR e ultima busta paga.",
    metaTitle: "Cessazione Rapporto di Lavoro | Dimissioni, Licenziamento, TFR — Rovereto",
    metaDescription:
      "Gestione della cessazione del rapporto di lavoro a Rovereto e Trentino: dimissioni telematiche, licenziamento, scadenza del termine, calcolo TFR e ultima busta paga, comunicazioni agli enti.",
    h1: "Cessazioni del rapporto di lavoro gestite correttamente",
    intro: [
      "La fine di un rapporto di lavoro è un momento delicato dal punto di vista umano e rischioso dal punto di vista legale. Dimissioni, licenziamento per giustificato motivo, scadenza del termine o risoluzione consensuale: ogni caso ha procedure, preavvisi e comunicazioni proprie.",
      "Ti accompagno in ogni fase: verifica della procedura corretta, calcolo delle ultime spettanze (TFR, ferie e permessi residui, ratei di tredicesima e quattordicesima), comunicazione agli enti e consegna della documentazione al lavoratore. Con l'obiettivo di chiudere in modo pulito e ridurre il rischio di contestazioni.",
    ],
    include: [
      "Dimissioni volontarie e verifica della procedura telematica",
      "Licenziamento per giustificato motivo oggettivo o soggettivo",
      "Scadenza del termine e mancato rinnovo",
      "Risoluzioni consensuali e accordi in sede protetta",
      "Calcolo del preavviso e dell'indennità sostitutiva",
      "Elaborazione dell'ultima busta paga con TFR e ratei",
      "Comunicazione di cessazione (UNILAV) e adempimenti verso INPS e INAIL",
      "Consegna della documentazione: CU, prospetto TFR, modulistica NASpI",
    ],
    perChi: [
      "Aziende che devono gestire dimissioni o fine contratto",
      "Imprese che affrontano una riorganizzazione o una riduzione del personale",
      "Datori di lavoro che vogliono tutelarsi da contestazioni",
    ],
    faq: [
      {
        domanda: "Come si calcola il TFR alla cessazione?",
        risposta:
          "Il TFR è pari alla somma delle quote accantonate ogni anno (retribuzione annua diviso 13,5), rivalutate secondo l'indice ISTAT. Alla cessazione si liquida l'importo maturato, al netto delle anticipazioni già erogate e con la tassazione separata prevista dalla legge.",
      },
      {
        domanda: "Le dimissioni possono essere date a voce o via email?",
        risposta:
          "No. Dal 2016 le dimissioni volontarie e le risoluzioni consensuali sono valide solo se presentate con la procedura telematica sul portale del Ministero del Lavoro, direttamente dal lavoratore o tramite un soggetto abilitato. Dimissioni date a voce o per email non hanno effetto.",
      },
      {
        domanda: "Posso licenziare un dipendente durante il periodo di prova?",
        risposta:
          "Sì: durante il periodo di prova entrambe le parti possono recedere liberamente, senza preavviso né motivazione, purché la prova sia stata pattuita per iscritto e la sua durata rispetti il CCNL. Verifico sempre questi requisiti prima di procedere.",
      },
    ],
  },
  {
    slug: "dichiarativi-annui",
    icon: "BookOpen",
    title: "Dichiarativi annui",
    tagline: "Nessuna scadenza annuale dimenticata.",
    short:
      "Certificazione Unica, Modello 770, 730/4, autoliquidazione INAIL e tutti gli adempimenti annuali del datore di lavoro.",
    metaTitle: "Dichiarativi Annui Datore di Lavoro | CU, 770, Autoliquidazione INAIL",
    metaDescription:
      "Adempimenti annuali del datore di lavoro a Rovereto e Trentino: Certificazione Unica (CU), Modello 770, conguagli 730/4, autoliquidazione INAIL. Scadenze rispettate, nessuna sanzione.",
    h1: "Dichiarativi annui e adempimenti periodici",
    intro: [
      "Oltre alla gestione mensile, ogni datore di lavoro ha un calendario di adempimenti annuali con scadenze precise: la Certificazione Unica da consegnare ai dipendenti e trasmettere all'Agenzia delle Entrate, il Modello 770, l'autoliquidazione del premio INAIL, i conguagli dei modelli 730/4.",
      "Mi occupo di tutti i dichiarativi annuali collegati al personale, coordinandomi con il tuo commercialista dove necessario, così che nessuna scadenza venga saltata.",
    ],
    include: [
      "Certificazione Unica (CU) per dipendenti, collaboratori e professionisti",
      "Modello 770 per le ritenute operate come sostituto d'imposta",
      "Autoliquidazione annuale del premio INAIL e regolazione",
      "Conguagli fiscali dei modelli 730/4",
      "Prospetto informativo disabili (Legge 68/99) quando dovuto",
      "Adempimenti annuali di Cassa Edile e fondi di categoria",
      "Riepiloghi annuali del costo del lavoro per il bilancio",
    ],
    perChi: [
      "Tutte le aziende con dipendenti o collaboratori",
      "Imprese che vogliono un unico referente per gli adempimenti del personale",
      "Studi commercialisti che cercano un partner per l'area paghe",
    ],
    faq: [
      {
        domanda: "Entro quando va consegnata la Certificazione Unica?",
        risposta:
          "La CU va trasmessa all'Agenzia delle Entrate e consegnata ai lavoratori entro il 16 marzo di ogni anno (o il primo giorno lavorativo successivo). Preparo e trasmetto tutte le certificazioni entro la scadenza.",
      },
      {
        domanda: "Ti coordini con il mio commercialista?",
        risposta:
          "Sì. I dati del personale confluiscono nel bilancio e nelle dichiarazioni fiscali dell'azienda: lavoro in modo coordinato con il commercialista fornendo prospetti e riepiloghi nei formati necessari.",
      },
    ],
  },
  {
    slug: "consulenza-del-lavoro",
    icon: "AlertCircle",
    title: "Consulenza del lavoro",
    tagline: "Un riferimento nelle decisioni quotidiane.",
    short:
      "Supporto continuativo su rapporti di lavoro, interpretazione normativa, contratti collettivi, adempimenti e scelte operative.",
    metaTitle: "Consulenza del Lavoro a Rovereto | Contratti, CCNL, Normativa per Aziende",
    metaDescription:
      "Consulenza del lavoro continuativa per aziende e PMI a Rovereto e in Trentino: interpretazione dei CCNL, contratti, normativa, ispezioni, costo del personale. Consulente iscritta all'Albo.",
    h1: "Consulenza del lavoro per aziende e PMI",
    intro: [
      "Le buste paga sono solo la parte visibile del lavoro. Quello che fa davvero la differenza per un'azienda è avere qualcuno a cui chiedere prima di decidere: quale contratto usare, come gestire un dipendente assente da settimane, cosa fare se arriva un'ispezione, quanto costa davvero una nuova assunzione.",
      "La consulenza del lavoro è un rapporto continuativo: conosco la tua azienda, ti aggiorno sulle novità normative che ti riguardano e rispondo alle domande quotidiane con soluzioni concrete, non con tecnicismi.",
    ],
    include: [
      "Interpretazione e applicazione dei contratti collettivi (CCNL)",
      "Scelta della tipologia contrattuale più adatta a ogni esigenza",
      "Analisi del costo del lavoro e simulazioni di nuove assunzioni",
      "Gestione di malattia, maternità, congedi, infortuni e assenze prolungate",
      "Procedimenti disciplinari e gestione dei rapporti conflittuali",
      "Assistenza in caso di ispezioni INPS, INAIL e Ispettorato del Lavoro",
      "Aggiornamento su novità normative, incentivi e scadenze",
      "Supporto nei rapporti con sindacati e organismi bilaterali",
    ],
    perChi: [
      "Imprenditori che vogliono decidere con sicurezza",
      "Aziende in crescita che affrontano situazioni nuove",
      "PMI senza un ufficio del personale interno",
    ],
    faq: [
      {
        domanda: "La consulenza è inclusa nel servizio paghe?",
        risposta:
          "Il supporto ordinario sulle questioni quotidiane è parte del rapporto con i clienti che mi affidano l'elaborazione delle paghe. Per pratiche complesse — vertenze, ispezioni, riorganizzazioni — concordiamo l'intervento in anticipo, in modo trasparente.",
      },
      {
        domanda: "Posso rivolgermi a te solo per una consulenza puntuale?",
        risposta:
          "Sì. Anche se il tuo consulente attuale è un altro, puoi chiedermi un parere su una questione specifica: un contratto da verificare, un'assunzione da valutare, una situazione da gestire.",
      },
    ],
  },
  {
    slug: "consulenza-buste-paga",
    icon: "FileText",
    title: "Consulenza buste paga",
    tagline: "Capire davvero quanto costa il personale.",
    short:
      "Analisi e verifica dei cedolini, costo del lavoro, voci retributive, contributi e agevolazioni disponibili.",
    metaTitle: "Consulenza Buste Paga | Verifica Cedolini e Costo del Lavoro — Rovereto",
    metaDescription:
      "Verifica dei cedolini e analisi del costo del lavoro per aziende di Rovereto e Trentino: controllo delle voci retributive, dei contributi e delle agevolazioni non applicate.",
    h1: "Consulenza e verifica delle buste paga",
    intro: [
      "Sai leggere davvero una busta paga? Molti datori di lavoro pagano ogni mese cedolini che non riescono a interpretare: voci retributive, contributi, trattenute, imponibili diversi. E spesso non sanno se stanno pagando il giusto o se esistono agevolazioni che non vengono applicate.",
      "Offro un servizio di analisi e verifica: controllo la correttezza dei cedolini, spiego ogni voce in modo comprensibile e calcolo il costo reale di ciascun dipendente, così puoi pianificare con numeri veri.",
    ],
    include: [
      "Controllo di correttezza dei cedolini elaborati da terzi",
      "Spiegazione chiara di ogni voce della busta paga",
      "Calcolo del costo aziendale complessivo per dipendente",
      "Verifica di sgravi, esoneri e agevolazioni non applicati",
      "Simulazioni del costo di nuove assunzioni o aumenti",
      "Analisi dell'inquadramento rispetto al CCNL",
    ],
    perChi: [
      "Aziende che vogliono una seconda opinione sui propri cedolini",
      "Imprenditori che devono pianificare il budget del personale",
      "Chi sta valutando il passaggio a un nuovo consulente",
    ],
    faq: [
      {
        domanda: "Quanto costa un dipendente all'azienda?",
        risposta:
          "In media il costo aziendale è tra il 130% e il 140% della retribuzione lorda: al lordo si aggiungono i contributi a carico del datore (circa 30%), il TFR, i ratei di tredicesima e quattordicesima e i premi INAIL. Con una simulazione calcolo il costo esatto per il tuo CCNL e livello.",
      },
      {
        domanda: "Posso farti verificare le buste paga fatte dal mio attuale consulente?",
        risposta:
          "Sì, è un servizio a sé. Analizzo un campione di cedolini, ti segnalo eventuali anomalie o agevolazioni mancanti e ti spiego cosa stai pagando e perché. Senza alcun impegno a cambiare consulente.",
      },
    ],
  },
];

export function getServizio(slug: string): Servizio | undefined {
  return servizi.find((s) => s.slug === slug);
}
