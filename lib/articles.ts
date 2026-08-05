export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readingTime: string;
  keywords: string[];
  sections: ArticleSection[];
  faq?: { domanda: string; risposta: string }[];
}

export const articles: Article[] = [
  {
    slug: "consulente-del-lavoro-cosa-fa",
    title: "Cosa fa un Consulente del Lavoro? Guida completa per aziende",
    metaTitle: "Cosa fa un Consulente del Lavoro | Guida Completa 2026",
    metaDescription:
      "Cosa fa un Consulente del Lavoro, quando serve alla tua azienda e come sceglierlo: buste paga, assunzioni, adempimenti INPS e INAIL. Guida completa.",
    excerpt:
      "Buste paga, assunzioni, contratti, adempimenti: il Consulente del Lavoro è il professionista che affianca ogni azienda con dipendenti. Ecco cosa fa davvero e quando serve.",
    date: "2026-06-10",
    readingTime: "5 min",
    keywords: ["consulente del lavoro", "cosa fa il consulente del lavoro", "buste paga", "gestione personale"],
    sections: [
      {
        paragraphs: [
          "Il Consulente del Lavoro è un professionista iscritto all'Albo che gestisce tutti gli aspetti amministrativi, contributivi e normativi dei rapporti di lavoro. In pratica: se hai un'azienda con dipendenti — anche uno solo — il Consulente del Lavoro è la figura che ti permette di gestire il personale in modo corretto, evitando errori e sanzioni.",
          "A differenza di quanto molti pensano, non si occupa solo di buste paga. È un punto di riferimento per ogni decisione legata al personale: dall'assunzione alla cessazione, dalla scelta del contratto collettivo alla gestione di malattie, maternità e infortuni.",
        ],
      },
      {
        heading: "Le attività principali di un Consulente del Lavoro",
        paragraphs: [
          "Ecco, in concreto, di cosa si occupa un Consulente del Lavoro per le aziende che segue:",
        ],
        list: [
          "Elaborazione mensile delle buste paga: calcolo di retribuzioni, contributi INPS, trattenute IRPEF, ferie, malattie e voci variabili",
          "Gestione delle assunzioni: comunicazioni obbligatorie, scelta del CCNL, inquadramento, lettera di assunzione e verifica delle agevolazioni disponibili",
          "Trasformazioni contrattuali: passaggi da tempo determinato a indeterminato, variazioni d'orario, cambi di mansione",
          "Cessazioni del rapporto di lavoro: dimissioni, scadenze del termine, liquidazione del TFR e adempimenti finali",
          "Adempimenti verso gli enti: INPS, INAIL, Cassa Edile, dichiarativi annuali (CU, 770, autoliquidazione INAIL)",
          "Consulenza continuativa su contratti, normative e costo del personale",
        ],
      },
      {
        heading: "Quando serve un Consulente del Lavoro?",
        paragraphs: [
          "La risposta breve: dal momento in cui assumi il primo dipendente o collaboratore. La normativa italiana sul lavoro è tra le più complesse d'Europa e cambia continuamente. Gestire da soli comunicazioni obbligatorie, contributi e scadenze significa esporsi a errori che costano cari: sanzioni, contenziosi con i dipendenti, contestazioni degli enti.",
          "Il Consulente del Lavoro non è un costo, ma una protezione: ogni adempimento gestito correttamente riduce il rischio d'impresa e ti libera tempo da dedicare alla tua attività.",
        ],
      },
      {
        heading: "Consulente del Lavoro o commercialista: che differenza c'è?",
        paragraphs: [
          "È una domanda frequente. Il commercialista si occupa della parte fiscale e contabile dell'azienda (bilanci, dichiarazioni dei redditi, IVA). Il Consulente del Lavoro è invece lo specialista dei rapporti di lavoro: paghe, contributi, contratti e normativa del lavoro.",
          "Le due figure sono complementari e spesso lavorano insieme: il commercialista segue i conti dell'azienda, il Consulente del Lavoro segue le persone che ci lavorano.",
        ],
      },
      {
        heading: "Come scegliere il Consulente del Lavoro giusto",
        paragraphs: [
          "Tre criteri contano più di tutti: l'iscrizione all'Albo dei Consulenti del Lavoro (che garantisce abilitazione e aggiornamento professionale), la reperibilità (un consulente che risponde quando hai un dubbio urgente vale moltissimo) e la chiarezza (deve saperti spiegare le cose senza tecnicismi, perché sei tu a firmare).",
          "Diffida di chi promette solo il prezzo più basso: nella gestione del personale un errore costa molto di più di quanto si risparmia su un cedolino.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Il Consulente del Lavoro è obbligatorio?",
        risposta:
          "Non è obbligatorio per legge affidarsi a un Consulente del Lavoro, ma l'elaborazione dei cedolini e gli adempimenti connessi possono essere svolti solo dal datore di lavoro stesso o da professionisti abilitati. Nella pratica, quasi tutte le aziende con dipendenti si affidano a un Consulente del Lavoro.",
      },
      {
        domanda: "Quanto costa un Consulente del Lavoro?",
        risposta:
          "Il costo dipende dal numero di dipendenti e dai servizi richiesti. In genere si paga un canone mensile per cedolino elaborato, più eventuali pratiche una tantum (assunzioni, cessazioni). Richiedere un preventivo personalizzato è sempre gratuito.",
      },
    ],
  },
  {
    slug: "consulente-del-lavoro-rovereto",
    title: "Consulente del Lavoro a Rovereto: gestione del personale in Trentino",
    metaTitle: "Consulente del Lavoro Rovereto e Trentino | Elisa Moratelli",
    metaDescription:
      "Cerchi un Consulente del Lavoro a Rovereto o in Trentino? Buste paga, assunzioni e adempimenti per aziende e PMI locali. Iscritta all'Albo, presso CDL Group.",
    excerpt:
      "Le aziende di Rovereto e del Trentino hanno esigenze specifiche: contratti provinciali, stagionalità, settori come edilizia e artigianato. Ecco come un consulente del territorio fa la differenza.",
    date: "2026-06-10",
    readingTime: "4 min",
    keywords: ["consulente del lavoro rovereto", "consulente del lavoro trento", "consulente del lavoro trentino", "buste paga rovereto"],
    sections: [
      {
        paragraphs: [
          "Se gestisci un'azienda a Rovereto, in Vallagarina o più in generale in Trentino, sai che il territorio ha caratteristiche proprie: un tessuto di piccole e medie imprese, artigiani, aziende edili, attività stagionali legate al turismo. Gestire il personale in questo contesto richiede un professionista che conosca sia la normativa nazionale sia le specificità locali.",
          "Sono Elisa Moratelli, Consulente del Lavoro iscritta all'Albo, e opero a Rovereto presso CDL Group affiancando aziende e PMI del territorio nella gestione completa del personale.",
        ],
      },
      {
        heading: "Perché scegliere un Consulente del Lavoro del territorio",
        paragraphs: [
          "Con un consulente vicino puoi incontrarti di persona quando serve: per impostare una nuova assunzione, rivedere i costi del personale o affrontare una situazione delicata. E un professionista che lavora ogni giorno con le aziende trentine conosce i contratti integrativi provinciali, le dinamiche dei settori locali e gli enti bilaterali del territorio.",
          "Questo si traduce in risposte più rapide e soluzioni più aderenti alla realtà della tua azienda.",
        ],
      },
      {
        heading: "I servizi per le aziende di Rovereto e del Trentino",
        paragraphs: ["Alle aziende del territorio offro un supporto completo:"],
        list: [
          "Elaborazione mensile delle buste paga con contributi, trattenute e pagamento F24",
          "Gestione di assunzioni e comunicazioni obbligatorie, con verifica delle agevolazioni disponibili",
          "Apertura posizioni INAIL, INPS ed eventuali Casse Edili per le nuove attività",
          "Gestione delle specificità del settore edile: Cassa Edile, denunce mensili, indennità di cantiere",
          "Trasformazioni contrattuali e cessazioni del rapporto di lavoro",
          "Dichiarativi annui: Certificazione Unica, Modello 770, autoliquidazione INAIL",
          "Consulenza continuativa su contratti, CCNL e costo del personale",
        ],
      },
      {
        heading: "Come iniziare",
        paragraphs: [
          "Il primo passo è una chiacchierata senza impegno: mi racconti la tua situazione — quanti dipendenti hai, che contratto applichi, quali difficoltà incontri — e valutiamo insieme come posso supportarti. Puoi chiamare lo studio allo 0464 356826 o scrivere a info@elisamoratelli.it.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Seguite solo aziende di Rovereto?",
        risposta:
          "No. La sede è a Rovereto ma seguo aziende di tutto il Trentino e, grazie alla gestione digitale di documenti e comunicazioni, anche realtà del resto d'Italia.",
      },
      {
        domanda: "Lavorate con le imprese edili?",
        risposta:
          "Sì. Conosco le specificità del settore edile trentino: Cassa Edile, denunce mensili, indennità di cantiere e gestione di ferie, malattia e infortuni secondo i CCNL di riferimento.",
      },
    ],
  },
  {
    slug: "quanto-costa-consulente-del-lavoro",
    title: "Quanto costa un Consulente del Lavoro? Guida ai costi per le aziende",
    metaTitle: "Quanto Costa un Consulente del Lavoro | Prezzi e Preventivi 2026",
    metaDescription:
      "Quanto costa un Consulente del Lavoro per un'azienda? Costo per cedolino, canoni mensili, pratiche una tantum: guida completa ai prezzi e come valutare un preventivo.",
    excerpt:
      "Costo per cedolino, canone mensile, pratiche una tantum: ecco come si compone davvero il costo di un Consulente del Lavoro e come valutare un preventivo.",
    date: "2026-06-10",
    readingTime: "4 min",
    keywords: ["quanto costa consulente del lavoro", "costo consulente del lavoro", "prezzo elaborazione buste paga", "costo cedolino"],
    sections: [
      {
        paragraphs: [
          "È una delle prime domande che ogni imprenditore si pone: quanto costa affidarsi a un Consulente del Lavoro? La risposta onesta è: dipende dal numero di dipendenti, dal settore e dai servizi richiesti. Ma i criteri con cui si compone un preventivo sono standard, e conoscerli ti aiuta a valutare le proposte con consapevolezza.",
        ],
      },
      {
        heading: "Come si compone il costo",
        paragraphs: [
          "Nella maggior parte dei casi, il compenso di un Consulente del Lavoro si articola su tre voci:",
        ],
        list: [
          "Costo per cedolino: un importo mensile per ogni busta paga elaborata. È la voce principale e cresce con il numero di dipendenti.",
          "Pratiche una tantum: assunzioni, cessazioni, trasformazioni contrattuali e altre pratiche straordinarie, fatturate a intervento.",
          "Adempimenti annuali: Certificazione Unica, Modello 770, autoliquidazione INAIL, spesso compresi in un canone annuo o fatturati a parte.",
        ],
      },
      {
        heading: "Perché il prezzo più basso non è sempre la scelta giusta",
        paragraphs: [
          "Un cedolino elaborato male può costare molto più del risparmio ottenuto: contributi errati generano sanzioni e interessi, una comunicazione di assunzione tardiva può costare centinaia di euro, un contratto sbagliato può trasformarsi in un contenzioso con il dipendente.",
          "Nel valutare un preventivo, oltre al prezzo, considera cosa è incluso: la consulenza telefonica è compresa o si paga a parte? Chi risponde alle tue domande, e in quanto tempo? Il consulente ti avvisa proattivamente delle novità normative che riguardano la tua azienda?",
        ],
      },
      {
        heading: "Il costo è detraibile?",
        paragraphs: [
          "Sì: il compenso del Consulente del Lavoro è un costo aziendale interamente deducibile. Questo significa che il costo effettivo per l'azienda è inferiore all'importo fatturato, in proporzione all'aliquota fiscale applicata.",
        ],
      },
      {
        heading: "Richiedere un preventivo",
        paragraphs: [
          "Un preventivo serio parte sempre dalla tua situazione concreta: quanti dipendenti hai, che contratto applichi, quali esigenze particolari ha la tua attività. Per questo il preventivo è personalizzato — e richiederlo è gratuito e senza impegno.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Esiste un tariffario ufficiale dei Consulenti del Lavoro?",
        risposta:
          "Le tariffe professionali obbligatorie sono state abolite: ogni professionista definisce liberamente i propri compensi. Esistono parametri di riferimento ministeriali, ma il mercato si basa su preventivi personalizzati.",
      },
      {
        domanda: "Il primo incontro si paga?",
        risposta:
          "Nel mio studio il primo confronto conoscitivo è gratuito e senza impegno: serve a capire la tua situazione e a valutare se e come posso esserti utile.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
