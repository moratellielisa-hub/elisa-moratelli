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
  {
    slug: "assumere-primo-dipendente",
    title: "Assumere il primo dipendente: guida passo passo per l'azienda",
    metaTitle: "Assumere il Primo Dipendente | Guida Passo Passo 2026",
    metaDescription:
      "Cosa fare per assumere il primo dipendente in regola: posizioni INPS e INAIL, scelta del CCNL, comunicazione UNILAV, lettera di assunzione, agevolazioni e costi. Guida pratica.",
    excerpt:
      "Aprire le posizioni INPS e INAIL, scegliere il contratto, inviare la comunicazione obbligatoria, verificare gli incentivi. Ecco tutti i passaggi per la prima assunzione, in ordine.",
    date: "2026-09-09",
    readingTime: "6 min",
    keywords: ["assumere primo dipendente", "prima assunzione", "comunicazione obbligatoria assunzione", "aprire posizione INPS"],
    sections: [
      {
        paragraphs: [
          "La prima assunzione è un passaggio importante per un'attività: significa che il lavoro è cresciuto al punto da non poterlo più fare da soli. È anche il momento in cui l'azienda entra in un mondo di adempimenti nuovi, con scadenze precise e sanzioni pesanti se qualcosa viene saltato.",
          "In questa guida trovi tutti i passaggi in ordine, così sai cosa aspettarti e cosa preparare. Nella pratica, il datore di lavoro fornisce i dati e prende le decisioni: alla parte tecnica pensa il Consulente del Lavoro.",
        ],
      },
      {
        heading: "1. Aprire le posizioni INPS e INAIL",
        paragraphs: [
          "Prima ancora dell'assunzione, l'azienda deve essere registrata come datore di lavoro: si apre una posizione contributiva presso l'INPS (la cosiddetta matricola aziendale) e una posizione assicurativa presso l'INAIL, che copre gli infortuni sul lavoro. Per alcune categorie, come le imprese edili, va aperta anche la posizione presso la Cassa Edile.",
          "Queste pratiche si fanno una volta sola e vanno completate prima dell'inizio del rapporto. In Trentino i tempi sono in genere rapidi, ma è bene muoversi con almeno una settimana di anticipo.",
        ],
      },
      {
        heading: "2. Scegliere il contratto collettivo e la tipologia contrattuale",
        paragraphs: [
          "Il CCNL (contratto collettivo nazionale) dipende dal settore dell'azienda: commercio, artigianato, edilizia, turismo, metalmeccanica, studi professionali. Determina la retribuzione minima, l'orario, le ferie, i livelli di inquadramento e molti altri aspetti. Sceglierlo correttamente è fondamentale, perché un CCNL sbagliato si trascina dietro errori su tutte le buste paga.",
          "Poi si decide la tipologia contrattuale: tempo indeterminato, tempo determinato, apprendistato (per i giovani fino a 29 anni, con contributi molto ridotti), part-time. Ogni scelta ha costi e vincoli diversi, e vale la pena confrontarli con numeri alla mano prima di decidere.",
        ],
      },
      {
        heading: "3. Verificare le agevolazioni disponibili",
        paragraphs: [
          "Ogni anno esistono incentivi per chi assume: esoneri contributivi per giovani, donne, over 50, disoccupati di lunga durata, oltre alle agevolazioni strutturali dell'apprendistato. Un incentivo può ridurre il costo del dipendente di diverse migliaia di euro l'anno, ma va verificato prima dell'assunzione: molti non sono recuperabili dopo.",
        ],
      },
      {
        heading: "4. Inviare la comunicazione obbligatoria (UNILAV)",
        paragraphs: [
          "È l'adempimento più importante: la comunicazione di assunzione al Centro per l'Impiego va inviata entro le ore 24 del giorno precedente l'inizio del lavoro. Anche un solo giorno di ritardo espone l'azienda alla maxi-sanzione per lavoro irregolare, che parte da diverse migliaia di euro per ogni lavoratore.",
          "Per questo motivo il Consulente del Lavoro ha bisogno di sapere della nuova assunzione con qualche giorno di anticipo e di ricevere i dati del lavoratore: documento d'identità, codice fiscale, eventuale permesso di soggiorno, dati bancari.",
        ],
      },
      {
        heading: "5. Lettera di assunzione e documenti",
        paragraphs: [
          "Il lavoratore deve ricevere, prima dell'inizio, la lettera di assunzione con tutte le informazioni sul rapporto: mansione, livello, retribuzione, orario, durata del periodo di prova, CCNL applicato, ferie e preavviso. Dal 2022 le informazioni obbligatorie sono molto dettagliate (Decreto Trasparenza) e una lettera incompleta è sanzionabile.",
          "Servono poi il documento di valutazione dei rischi aggiornato, la formazione obbligatoria sulla sicurezza, la visita medica preventiva dove prevista e l'informativa privacy.",
        ],
      },
      {
        heading: "6. La prima busta paga",
        paragraphs: [
          "Dal mese di assunzione partono i cedolini mensili, i versamenti dei contributi con F24 entro il 16 del mese successivo e le denunce Uniemens. Il costo complessivo per l'azienda è in genere tra il 130% e il 140% della retribuzione lorda: prima di assumere, conviene farsi fare una simulazione del costo annuo reale.",
        ],
      },
      {
        heading: "Checklist della prima assunzione",
        paragraphs: ["In sintesi, ecco cosa serve:"],
        list: [
          "Posizione INPS e INAIL aperte (e Cassa Edile per l'edilizia)",
          "CCNL e tipologia contrattuale scelti",
          "Agevolazioni verificate prima dell'assunzione",
          "Comunicazione UNILAV inviata entro il giorno precedente",
          "Lettera di assunzione consegnata e firmata",
          "Sicurezza sul lavoro: DVR, formazione, visita medica",
          "Busta paga mensile, F24 e Uniemens gestiti con regolarità",
        ],
      },
    ],
    faq: [
      {
        domanda: "Quanto tempo serve per assumere il primo dipendente?",
        risposta:
          "Se le posizioni INPS e INAIL non sono ancora aperte, conviene calcolare almeno 7–10 giorni. Se l'azienda è già registrata come datore di lavoro, un'assunzione si prepara in 2–3 giorni lavorativi.",
      },
      {
        domanda: "Posso far iniziare il dipendente e regolarizzarlo dopo?",
        risposta:
          "No. Il lavoratore trovato al lavoro senza comunicazione preventiva è considerato irregolare e scatta la maxi-sanzione, oltre alla possibile sospensione dell'attività. La comunicazione va sempre inviata prima dell'inizio.",
      },
      {
        domanda: "Un artigiano con un solo dipendente ha bisogno del consulente del lavoro?",
        risposta:
          "Sì, perché gli adempimenti sono gli stessi di un'azienda con dieci dipendenti: comunicazioni, buste paga, contributi, dichiarativi. Il costo del servizio per un singolo cedolino è contenuto e protegge da errori molto più costosi.",
      },
    ],
  },
  {
    slug: "quanto-costa-un-dipendente-azienda",
    title: "Quanto costa un dipendente all'azienda? Il calcolo del costo del lavoro",
    metaTitle: "Quanto Costa un Dipendente all'Azienda | Calcolo Costo del Lavoro",
    metaDescription:
      "Come si calcola il costo reale di un dipendente: retribuzione lorda, contributi INPS a carico azienda, INAIL, TFR, tredicesima e quattordicesima. Esempio pratico e percentuali.",
    excerpt:
      "Lo stipendio netto è solo una parte. Contributi, TFR, mensilità aggiuntive e INAIL portano il costo aziendale al 130–140% del lordo. Ecco come farsi i conti prima di assumere.",
    date: "2026-09-09",
    readingTime: "5 min",
    keywords: ["quanto costa un dipendente", "costo del lavoro", "costo aziendale dipendente", "calcolo costo dipendente"],
    sections: [
      {
        paragraphs: [
          "Una delle domande più frequenti che ricevo dagli imprenditori è: «Se offro 1.500 euro netti, quanto mi costa davvero?». La risposta sorprende quasi sempre, perché tra lo stipendio che il lavoratore vede sul conto e la cifra che l'azienda spende ogni anno c'è una differenza importante.",
          "Vediamo da cosa è composto il costo del lavoro e come stimarlo prima di assumere.",
        ],
      },
      {
        heading: "Dal netto al lordo",
        paragraphs: [
          "Il punto di partenza è la retribuzione lorda, fissata dal CCNL in base al livello di inquadramento. Dal lordo si arriva al netto sottraendo i contributi a carico del lavoratore (circa il 9–10%) e l'IRPEF con le relative addizionali regionali e comunali. Per questo motivo a un netto di 1.500 euro corrisponde, indicativamente, un lordo mensile intorno ai 2.000–2.100 euro, a seconda delle detrazioni.",
        ],
      },
      {
        heading: "Cosa si aggiunge al lordo",
        paragraphs: ["Al lordo mensile l'azienda deve aggiungere diverse voci:"],
        list: [
          "Contributi INPS a carico del datore di lavoro: circa il 28–30% del lordo, con variazioni per settore e dimensione aziendale",
          "Premio INAIL: da meno dell'1% per il lavoro d'ufficio fino a diversi punti percentuali per le mansioni a rischio, come l'edilizia",
          "TFR: il 6,91% della retribuzione annua, accantonato ogni anno",
          "Tredicesima e, in molti CCNL, quattordicesima: una o due mensilità in più all'anno",
          "Ferie e permessi maturati, che sono retribuiti anche se non goduti",
          "Eventuali fondi di categoria: assistenza sanitaria integrativa, previdenza complementare, enti bilaterali",
        ],
      },
      {
        heading: "Un esempio pratico",
        paragraphs: [
          "Prendiamo un impiegato del commercio con retribuzione lorda mensile di 1.800 euro, quattordici mensilità. Il lordo annuo è di 25.200 euro. Aggiungendo i contributi a carico azienda (circa 7.300 euro), il TFR (circa 1.740 euro) e l'INAIL (poche centinaia di euro), il costo aziendale annuo si aggira intorno ai 34.500 euro: circa il 137% del lordo.",
          "Le percentuali cambiano da un CCNL all'altro e in presenza di agevolazioni: un apprendista, per esempio, costa molto meno perché i contributi a carico azienda sono ridotti a una frazione. Per questo, prima di ogni assunzione, faccio una simulazione precisa sul caso concreto.",
        ],
      },
      {
        heading: "Come ridurre il costo del lavoro in modo legale",
        paragraphs: ["Esistono strumenti che permettono di contenere il costo senza tagliare la retribuzione:"],
        list: [
          "Incentivi all'assunzione: esoneri contributivi per giovani, donne, over 50, disoccupati",
          "Apprendistato: contribuzione agevolata e formazione integrata nel rapporto",
          "Welfare aziendale e fringe benefit: valori esenti da contributi e tasse entro le soglie di legge",
          "Premi di risultato con tassazione agevolata, se previsti da accordi",
          "Corretto inquadramento: un livello sbagliato per eccesso costa ogni mese",
        ],
      },
    ],
    faq: [
      {
        domanda: "Un dipendente part-time costa la metà?",
        risposta:
          "In proporzione all'orario sì: retribuzione, contributi e TFR si riducono in base alla percentuale di part-time. Alcuni costi fissi, come la formazione sulla sicurezza o la visita medica, restano invece uguali.",
      },
      {
        domanda: "Il TFR va versato ogni mese?",
        risposta:
          "Dipende. Nelle aziende con meno di 50 dipendenti il TFR resta in azienda come accantonamento, salvo che il lavoratore scelga un fondo di previdenza complementare. Nelle aziende con almeno 50 dipendenti va versato al Fondo di Tesoreria INPS.",
      },
      {
        domanda: "Posso avere una simulazione del costo prima di assumere?",
        risposta:
          "Sì: è il modo giusto di procedere. Con il CCNL, il livello e l'orario previsti calcolo il costo mensile e annuo esatto, includendo eventuali agevolazioni applicabili.",
      },
    ],
  },
  {
    slug: "cassa-edile-trentino-guida-imprese",
    title: "Cassa Edile in Trentino: cosa deve fare un'impresa edile con dipendenti",
    metaTitle: "Cassa Edile Trentino | Guida per Imprese Edili con Operai",
    metaDescription:
      "Cassa Edile per le imprese edili del Trentino: iscrizione, denuncia mensile, versamenti, DURC, ferie e gratifica natalizia. Cosa deve fare il datore di lavoro e come evitare irregolarità.",
    excerpt:
      "Iscrizione, denuncia mensile, versamenti e DURC: tutto quello che un'impresa edile trentina deve sapere sulla Cassa Edile per lavorare in regola e partecipare agli appalti.",
    date: "2026-09-09",
    readingTime: "5 min",
    keywords: ["cassa edile trento", "cassa edile trentino", "denuncia cassa edile", "DURC impresa edile", "CCNL edilizia"],
    sections: [
      {
        paragraphs: [
          "Chi apre un'impresa edile in Trentino e assume il primo operaio scopre presto che, oltre a INPS e INAIL, esiste un terzo ente con cui fare i conti ogni mese: la Cassa Edile. È un adempimento specifico del settore delle costruzioni, obbligatorio per chi applica il CCNL Edilizia, e ha regole proprie che non si possono improvvisare.",
        ],
      },
      {
        heading: "Cos'è la Cassa Edile",
        paragraphs: [
          "La Cassa Edile è un ente bilaterale, gestito dalle associazioni dei datori di lavoro e dai sindacati del settore, che eroga ai lavoratori edili una serie di prestazioni: la gratifica natalizia e le ferie (accantonate mensilmente dall'impresa e pagate dalla Cassa), l'anzianità professionale edile (APE), contributi per malattia e infortunio, prestazioni assistenziali. In Trentino opera la Cassa Edile della Provincia Autonoma di Trento.",
          "Il meccanismo è questo: ogni mese l'impresa versa alla Cassa una percentuale della retribuzione degli operai, e la Cassa provvede a pagare direttamente ai lavoratori ferie e gratifica. È una tutela pensata per un settore dove i rapporti di lavoro sono spesso brevi e legati ai cantieri.",
        ],
      },
      {
        heading: "Gli adempimenti per l'impresa",
        paragraphs: ["Per un'impresa edile con dipendenti gli obblighi principali sono:"],
        list: [
          "Iscrizione alla Cassa Edile competente per territorio, prima dell'assunzione del primo operaio",
          "Denuncia mensile dei lavoratori occupati, con ore lavorate, retribuzione e cantieri, da trasmettere telematicamente",
          "Versamento mensile dei contributi calcolati sulla denuncia, entro la scadenza fissata dalla Cassa",
          "Comunicazione di apertura e chiusura dei cantieri, con i lavoratori impiegati",
          "Aggiornamento delle variazioni: assunzioni, cessazioni, trasferimenti tra Casse diverse",
        ],
      },
      {
        heading: "Il DURC e la regolarità contributiva",
        paragraphs: [
          "Perché la Cassa Edile è così importante? Perché la regolarità dei versamenti è una delle condizioni per ottenere il DURC (Documento Unico di Regolarità Contributiva), che attesta che l'impresa è in regola con INPS, INAIL e Cassa Edile. Senza DURC non si partecipa agli appalti pubblici, non si incassano i pagamenti dalle stazioni appaltanti e si rischiano problemi anche nei subappalti privati, dove il committente lo richiede.",
          "Una denuncia in ritardo o un versamento saltato bloccano il DURC. Per un'impresa edile questo significa fermare i cantieri e i pagamenti: è il motivo per cui la gestione della Cassa Edile deve essere precisa e puntuale ogni mese.",
        ],
      },
      {
        heading: "Le voci in busta paga dell'operaio edile",
        paragraphs: [
          "La busta paga di un operaio edile ha voci che non esistono negli altri settori: l'accantonamento per ferie e gratifica versato alla Cassa, l'indennità di trasferta o di cantiere, l'EDR, la quota per l'APE. Il CCNL Edilizia inoltre si distingue tra Industria e Artigianato, con tabelle retributive e contribuzioni diverse. Elaborare correttamente questi cedolini richiede conoscenza specifica del contratto.",
        ],
      },
      {
        heading: "Come mi occupo delle imprese edili",
        paragraphs: [
          "Seguo le imprese edili della Vallagarina e del Trentino in tutto il ciclo: apertura delle posizioni INPS, INAIL e Cassa Edile, assunzioni di operai anche per singolo cantiere, buste paga secondo il CCNL Edilizia, denuncia mensile e versamenti alla Cassa, richiesta e monitoraggio del DURC. L'obiettivo è che l'impresa possa concentrarsi sui cantieri sapendo che gli adempimenti sono in ordine.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Un'impresa edile senza operai deve iscriversi alla Cassa Edile?",
        risposta:
          "No. L'obbligo scatta con l'assunzione del primo operaio inquadrato con il CCNL Edilizia. Le imprese individuali senza dipendenti non hanno obbligo di iscrizione, ma per lavorare in cantieri con DURC richiesto devono comunque dimostrare la regolarità INPS e INAIL.",
      },
      {
        domanda: "Se ho cantieri fuori dal Trentino, a quale Cassa Edile verso?",
        risposta:
          "Di norma alla Cassa Edile del territorio dove si svolge il cantiere, se la trasferta supera una certa durata. Esistono regole di reciprocità tra le Casse che permettono in alcuni casi di continuare a versare a quella di origine. Ogni situazione va verificata in anticipo.",
      },
      {
        domanda: "Cosa succede se salto una denuncia mensile?",
        risposta:
          "La Cassa segnala l'irregolarità, il DURC risulta non regolare e l'impresa non può partecipare agli appalti né ricevere i pagamenti pubblici fino alla regolarizzazione, che comporta anche sanzioni e interessi. È l'errore più costoso che un'impresa edile possa fare.",
      },
    ],
  },
  {
    slug: "contratto-tempo-determinato-regole",
    title: "Contratto a tempo determinato: durata, proroghe, causali e trasformazione",
    metaTitle: "Contratto a Tempo Determinato | Durata, Proroghe e Causali 2026",
    metaDescription:
      "Le regole del contratto a tempo determinato: durata massima, quante proroghe sono possibili, quando servono le causali, limiti di utilizzo e trasformazione a indeterminato. Guida per aziende.",
    excerpt:
      "Dodici mesi liberi, poi servono le causali; massimo quattro proroghe; oltre i limiti il contratto diventa a tempo indeterminato. Le regole che ogni datore di lavoro deve conoscere.",
    date: "2026-09-09",
    readingTime: "5 min",
    keywords: ["contratto a tempo determinato", "proroga contratto a termine", "causali tempo determinato", "durata massima tempo determinato"],
    sections: [
      {
        paragraphs: [
          "Il contratto a tempo determinato è lo strumento più usato dalle aziende per gestire picchi di lavoro, sostituzioni e periodi di prova prolungati. Ma è anche il contratto con più regole e più trappole: superare un limite senza accorgersene trasforma automaticamente il rapporto in un contratto a tempo indeterminato, con effetti retroattivi.",
          "Ecco le regole essenziali, spiegate per chi deve decidere.",
        ],
      },
      {
        heading: "Durata massima",
        paragraphs: [
          "Un contratto a tempo determinato può durare fino a 12 mesi senza bisogno di alcuna motivazione. Oltre i 12 mesi e fino a un massimo di 24 mesi complessivi (tra contratto iniziale, proroghe e rinnovi con lo stesso lavoratore per mansioni equivalenti), serve una causale: una ragione specifica prevista dal CCNL, da un accordo aziendale o, in mancanza, indicata dalle parti per esigenze tecniche, organizzative o produttive. Il CCNL applicato può prevedere durate diverse, quindi va sempre verificato.",
          "Superati i 24 mesi, salvo un ulteriore contratto in deroga da firmare presso l'Ispettorato del Lavoro, il rapporto si trasforma a tempo indeterminato.",
        ],
      },
      {
        heading: "Proroghe e rinnovi",
        paragraphs: [
          "La proroga estende un contratto in corso, prima della scadenza: sono ammesse al massimo 4 proroghe nell'arco dei 24 mesi, indipendentemente dal numero di contratti. La quinta proroga trasforma il rapporto a tempo indeterminato.",
          "Il rinnovo è invece un nuovo contratto dopo la scadenza del precedente: tra un contratto e l'altro deve passare una pausa (il cosiddetto stop and go) di 10 giorni per contratti fino a 6 mesi e di 20 giorni per contratti più lunghi. Un rinnovo richiede sempre la causale, anche nei primi 12 mesi, e comporta un contributo addizionale aumentato.",
        ],
      },
      {
        heading: "Limiti numerici",
        paragraphs: [
          "Il numero di lavoratori a tempo determinato non può superare il 20% dei lavoratori a tempo indeterminato in forza al 1° gennaio dell'anno di assunzione, salvo diversa previsione del CCNL. Le aziende fino a 5 dipendenti possono comunque stipulare sempre un contratto a termine. Sono esclusi dal conteggio, tra gli altri, i contratti per sostituzione e le attività stagionali.",
        ],
      },
      {
        heading: "Costi aggiuntivi",
        paragraphs: [
          "Il tempo determinato costa più dell'indeterminato: si applica un contributo addizionale dell'1,4% sulla retribuzione, che aumenta dello 0,5% a ogni rinnovo. Alla trasformazione in indeterminato il contributo addizionale degli ultimi 6 mesi viene restituito. È uno dei motivi per cui, quando il lavoratore è valido, la stabilizzazione conviene anche economicamente.",
        ],
      },
      {
        heading: "Quando conviene e quando no",
        paragraphs: ["Il contratto a termine è la scelta giusta per:"],
        list: [
          "Sostituzione di lavoratori assenti (maternità, malattia lunga, aspettativa)",
          "Attività stagionali del turismo, dell'agricoltura, del commercio",
          "Picchi di lavoro legati a commesse o cantieri con durata definita",
          "Progetti a scadenza",
        ],
      },
      {
        paragraphs: [
          "Non è invece la scelta giusta per «provare» un lavoratore: per quello esiste il periodo di prova, previsto anche nel contratto a tempo indeterminato, durante il quale entrambe le parti possono recedere liberamente. Usare il tempo determinato come prova prolungata costa di più e consuma i limiti disponibili.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Posso assumere a tempo determinato senza indicare un motivo?",
        risposta:
          "Sì, per i primi 12 mesi complessivi con lo stesso lavoratore non serve alcuna causale. La causale diventa obbligatoria oltre i 12 mesi e in ogni caso di rinnovo.",
      },
      {
        domanda: "Cosa succede se il dipendente continua a lavorare dopo la scadenza?",
        risposta:
          "Per i primi 30 giorni (contratti fino a 6 mesi) o 50 giorni (contratti più lunghi) il rapporto prosegue con una maggiorazione retributiva. Oltre questi termini il contratto si considera a tempo indeterminato. La scadenza va quindi gestita per tempo: proroga formale o cessazione.",
      },
      {
        domanda: "Il lavoratore a termine ha diritto alle stesse condizioni degli altri?",
        risposta:
          "Sì: stessa retribuzione, ferie, tredicesima, TFR e trattamento normativo del lavoratore a tempo indeterminato di pari livello. Ha inoltre un diritto di precedenza nelle assunzioni a tempo indeterminato effettuate nei 12 mesi successivi, se ha lavorato più di 6 mesi.",
      },
    ],
  },
  {
    slug: "consulente-del-lavoro-trento-vallagarina",
    title: "Consulente del Lavoro a Trento e in Vallagarina: come scegliere il professionista giusto",
    metaTitle: "Consulente del Lavoro Trento e Vallagarina | Come Scegliere",
    metaDescription:
      "Cerchi un consulente del lavoro a Trento, Rovereto o in Vallagarina? Cosa valutare: iscrizione all'Albo, conoscenza dei CCNL del territorio, reattività, chiarezza sui costi. Guida per aziende trentine.",
    excerpt:
      "Iscrizione all'Albo, esperienza con i settori del territorio, tempi di risposta e trasparenza sui costi: i criteri per scegliere il consulente del lavoro in Trentino.",
    date: "2026-09-09",
    readingTime: "4 min",
    keywords: ["consulente del lavoro trento", "consulente del lavoro vallagarina", "consulente del lavoro rovereto", "studio paghe trento"],
    sections: [
      {
        paragraphs: [
          "Scegliere il consulente del lavoro è una decisione che un'azienda prende raramente e che pesa per anni: è la persona che gestisce le buste paga dei dipendenti, i rapporti con INPS e INAIL e le scelte sui contratti. In un territorio come il Trentino, con un tessuto di piccole imprese, artigiani, imprese edili e attività turistiche, conta anche conoscere le specificità locali.",
          "Ecco i criteri che consiglio di usare, senza giri di parole.",
        ],
      },
      {
        heading: "1. L'iscrizione all'Albo",
        paragraphs: [
          "Sembra scontato ma non lo è: solo i Consulenti del Lavoro iscritti all'Albo (oltre a commercialisti e avvocati che ne diano comunicazione all'Ispettorato) possono elaborare buste paga e tenere gli adempimenti per conto di terzi. Chi si affida a un «centro elaborazione dati» o a un servizio non abilitato si assume un rischio: in caso di controllo, la responsabilità resta dell'azienda. Verificare l'iscrizione all'Ordine dei Consulenti del Lavoro di Trento è il primo passo.",
        ],
      },
      {
        heading: "2. La conoscenza dei settori del territorio",
        paragraphs: [
          "In Vallagarina e nel Trentino i settori più rappresentati hanno ciascuno le proprie particolarità: l'edilizia con la Cassa Edile e il CCNL specifico, il turismo con gli stagionali e i contratti a termine ricorrenti, l'artigianato con i suoi CCNL e gli enti bilaterali, l'agricoltura con gli operai a tempo determinato. Un consulente che conosce già questi settori evita errori e trova le agevolazioni giuste.",
        ],
      },
      {
        heading: "3. La reattività",
        paragraphs: [
          "Una domanda sul personale raramente può aspettare una settimana: un dipendente che si dimette, un'ispezione annunciata, un'assunzione da fare per lunedì. Prima di scegliere, chiedete quali sono i tempi di risposta e chi risponde: la persona che conosce la vostra azienda o un centralino.",
        ],
      },
      {
        heading: "4. La chiarezza sui costi",
        paragraphs: [
          "Un preventivo serio indica il canone mensile per cedolino, cosa include (dichiarativi annuali, consulenza ordinaria, comunicazioni obbligatorie) e cosa viene fatturato a parte (pratiche straordinarie, vertenze). Diffidate dei preventivi vaghi e di quelli troppo bassi: spesso escludono proprio le attività che poi servono.",
        ],
      },
      {
        heading: "5. Vicinanza e rapporto diretto",
        paragraphs: [
          "Oggi molte cose si gestiscono a distanza, ma potersi incontrare di persona con il proprio consulente ha ancora valore, soprattutto nelle situazioni delicate. Uno studio a Rovereto serve comodamente tutta la Vallagarina, l'Alto Garda e Trento, e resta raggiungibile anche per chi lavora nelle valli.",
        ],
      },
      {
        heading: "Il mio studio a Rovereto",
        paragraphs: [
          "Sono Consulente del Lavoro iscritta all'Albo, con studio a Rovereto presso CDL Group. Seguo aziende, PMI, artigiani, imprese edili e studi professionali di Rovereto, Trento, della Vallagarina e dell'Alto Garda. Il primo confronto è gratuito e senza impegno: serve a capire la vostra situazione e a valutare insieme se posso esservi utile.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Il consulente del lavoro deve essere per forza nella mia città?",
        risposta:
          "No: gli adempimenti sono telematici e i documenti viaggiano via email o portale. Ma un consulente del territorio conosce i CCNL, gli enti locali e le prassi della zona, e resta raggiungibile per un incontro quando serve. Per le aziende della Vallagarina e di Trento, uno studio a Rovereto è la soluzione più comoda.",
      },
      {
        domanda: "Posso cambiare consulente del lavoro in qualsiasi momento?",
        risposta:
          "Sì. Il momento più semplice è l'inizio dell'anno, ma il passaggio è possibile in qualunque mese: il nuovo consulente recupera i dati storici dal precedente studio e garantisce la continuità dei cedolini.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
