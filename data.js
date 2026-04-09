    // ==========================================
    // 1. TES DONNÉES (FACILES À MODIFIER)
    // ==========================================
    const myData = {
      nodes: [
        { id: "MOI", group: 0, type: 'central' },
        
        { id: "Compétences Techniques", group: 1, type: 'category' },
        { id: "Amélioration continue", group: 1 }, { id: "Transfert industriel", group: 1 },
        { id: "Gestion de projet industriel", group: 1 }, { id: "Industrialisation", group: 1 },
        { id: "Méthodes / procédés", group: 1 }, { id: "Management d’équipe", group: 1 },
        { id: "Conduite du changement", group: 1 }, { id: "Lean", group: 1 }, 
        { id: "5S", group: 1 }, { id: "Kaizen", group: 1 }, { id: "VSM", group: 1 }, 
        { id: "AMDEC", group: 1 }, { id: "SAP", group: 1 }, { id: "Excel", group: 1 }, 
        { id: "Power BI", group: 1 }, { id: "MS Project", group: 1 },

        { id: "Soft Skills", group: 2, type: 'category' },
        { id: "Résolution de problèmes", group: 2 }, { id: "Intelligence émotionnelle", group: 2 },
        { id: "Créativité", group: 2 }, { id: "Esprit d'entreprendre", group: 2 },
        { id: "Sens du Collectif", group: 2 }, { id: "Capacité de synthèse", group: 2 },
        { id: "Esprit d'innovation", group: 2 }, { id: "Sens de l'organisation", group: 2 },
        { id: "Pragmatisme", group: 2 }, { id: "Adaptabilité", group: 2 },
        { id: "Agilité", group: 2 }, { id: "Leadership", group: 2 },

        { id: "Centres d'intérêt", group: 3, type: 'category' },
        { id: "Programmation informatique", group: 3 }, { id: "Apprentissage autodidacte", group: 3 },
        { id: "DIY / fabrication électronique", group: 3 }, { id: "Réparation / Réemploi", group: 3 },

        { id: "Langues", group: 4, type: 'category' },
        { id: "Anglais (Professionnel)", group: 4 }
      ],
      links: [
        { source: "MOI", target: "Compétences Techniques" },
        { source: "MOI", target: "Soft Skills" },
        { source: "MOI", target: "Centres d'intérêt" },
        { source: "MOI", target: "Langues" },

        { source: "Compétences Techniques", target: "Amélioration continue" },
        { source: "Amélioration continue", target: "Lean" },
        { source: "Lean", target: "5S" }, { source: "Lean", target: "Kaizen" },
        { source: "Lean", target: "VSM" }, { source: "Lean", target: "Conduite du changement" },
        { source: "Compétences Techniques", target: "Méthodes / procédés" },
        { source: "Méthodes / procédés", target: "AMDEC" },
        { source: "Méthodes / procédés", target: "Industrialisation" },
        { source: "Compétences Techniques", target: "Gestion de projet industriel" },
        { source: "Gestion de projet industriel", target: "MS Project" },
        { source: "Gestion de projet industriel", target: "Excel" },
        { source: "Gestion de projet industriel", target: "Power BI" },
        { source: "Gestion de projet industriel", target: "SAP" },
        { source: "Compétences Techniques", target: "Management d’équipe" },
        { source: "Compétences Techniques", target: "Transfert industriel" },

        { source: "Soft Skills", target: "Résolution de problèmes" },
        { source: "Soft Skills", target: "Adaptabilité" }, { source: "Adaptabilité", target: "Agilité" },
        { source: "Soft Skills", target: "Sens de l'organisation" }, { source: "Adaptabilité", target: "Pragmatisme" },
        { source: "Soft Skills", target: "Capacité de synthèse" }, { source: "Adaptabilité", target: "Créativité" },
        { source: "Soft Skills", target: "Sens du Collectif" }, { source: "Soft Skills", target: "Esprit d'innovation" },
        { source: "Soft Skills", target: "Esprit d'entreprendre"}, { source: "Soft Skills", target: "Intelligence émotionnelle"},
        { source: "Soft Skills", target: "Leadership" },

        { source: "Centres d'intérêt", target: "Programmation informatique" },
        { source: "Centres d'intérêt", target: "DIY / fabrication électronique" },
        { source: "Centres d'intérêt", target: "Réparation / Réemploi" },
        { source: "Centres d'intérêt", target: "Apprentissage autodidacte" },

        { source: "Langues", target: "Anglais (Professionnel)" }
      ]
    };