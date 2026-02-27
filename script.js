/* ========================================
   Notes4Pets Landing Page — JavaScript
   Animations, Navigation, Scroll Effects
   + i18n Translation System (FR/EN/DE/ES)
   ======================================== */

/* ===========================
   TRANSLATIONS
   =========================== */
const translations = {
    fr: {
        // Nav
        nav_features: "Fonctionnalités",
        nav_health: "Carnet de santé",
        nav_journal: "Journal",
        nav_pets: "Animaux",
        nav_download: "Télécharger",

        // Hero
        hero_badge: "Disponible sur iOS",
        hero_title: 'Le carnet de santé <span class="gradient-text">digital</span> pour vos compagnons',
        hero_subtitle: "Suivez la santé, les souvenirs et le bien-être de vos animaux de compagnie. Tout ce dont vous avez besoin, dans une seule application magnifique.",
        hero_cta: "Télécharger l'app",
        hero_discover: "Découvrir",
        stat_species: "Espèces supportées",
        stat_languages: "Langues",
        stat_memories: "Souvenirs",

        // Hero phone screen
        screen_greeting: "Bonjour, Marie 👋",
        screen_subtitle: "Vos compagnons vous attendent",
        screen_age_3: "3 ans",
        screen_age_2: "2 ans",
        screen_breed_siamese: "Siamois",
        screen_vaccine_max: "Vaccin — Max",
        screen_in_3_days: "Dans 3 jours",

        // Floating cards
        float_health: "Suivi santé",
        float_journal: "Journal",
        float_reminders: "Rappels",

        // Features
        features_tag: "Fonctionnalités",
        features_title: "Tout pour le bonheur de vos animaux",
        features_subtitle: "Une suite complète d'outils pensés avec amour pour prendre soin de vos compagnons au quotidien.",
        feat_health_title: "Carnet de santé",
        feat_health_desc: "Vaccins, traitements, visites vétérinaires et suivi du poids. Tout le dossier médical en un seul endroit.",
        feat_journal_title: "Journal intime",
        feat_journal_desc: "Capturez chaque moment spécial avec photos, humeurs et tags. Un vrai journal de bord de vos compagnons.",
        feat_reminders_title: "Rappels intelligents",
        feat_reminders_desc: "Ne manquez plus jamais un vaccin ou un rendez-vous. Rappels récurrents avec notifications push.",
        feat_pdf_title: "Export PDF",
        feat_pdf_desc: "Générez un carnet de santé complet en PDF à partager avec votre vétérinaire en un clic.",
        feat_family_title: "Partage familial",
        feat_family_desc: "Partagez les fiches de vos animaux avec toute la famille. Jusqu'à 5 membres avec un code d'invitation.",
        feat_personality_title: "Personnalité & histoire",
        feat_personality_desc: "Documentez le caractère unique de votre animal : goûts, peurs, habitudes et son histoire personnelle.",

        // Health section
        health_tag: "Carnet de santé",
        health_title: "Le dossier médical complet de votre animal",
        health_subtitle: "Fini les carnets papier perdus. Centralisez toutes les informations de santé et ne manquez plus aucun rendez-vous.",
        health_screen_title: "Carnet de santé",
        health_tab_vaccines: "Vaccins",
        health_tab_treatments: "Traitements",
        health_tab_visits: "Visites",
        health_tab_weight: "Poids",
        health_status_valid: "✓ À jour",
        health_status_soon: "⏰ Bientôt",
        health_rabies: "Rage",
        health_leukosis: "Leucose",
        health_next_1: "Prochain : 12 mars 2026",
        health_next_2: "Prochain : 5 juin 2025",
        health_next_3: "Prochain : 20 janv. 2026",
        health_vaccines: "Vaccins",
        health_vaccines_desc: "Suivi des dates, lots, vétérinaires et statuts (à jour, bientôt, expiré)",
        health_treatments: "Traitements",
        health_treatments_desc: "Antiparasitaires, vermifuges et médicaments avec rappels automatiques",
        health_visits: "Visites vétérinaires",
        health_visits_desc: "Historique complet : motifs, diagnostics, traitements et coûts",
        health_weight: "Suivi du poids",
        health_weight_desc: "Courbe d'évolution avec dates et notes pour suivre la forme",

        // Journal section
        journal_tag: "Journal",
        journal_title: "Chaque moment mérite d'être gardé",
        journal_subtitle: "Créez un journal intime pour votre compagnon. Photos, humeurs, anecdotes... ne perdez aucun souvenir.",
        journal_notes: "Notes",
        journal_moments: "Moments",
        journal_health: "Santé",
        journal_funny: "Drôle",
        journal_milestones: "Jalons",
        journal_mood_label: "Suivez l'humeur :",
        mood_happy: "😊 Heureux",
        mood_calm: "😌 Calme",
        mood_playful: "🎾 Joueur",
        mood_tired: "😴 Fatigué",
        mood_sick: "🤒 Malade",
        mood_anxious: "😰 Anxieux",
        journal_screen_title: "Journal de Max",
        journal_entry_moment: "📸 Moment",
        journal_entry_health: "🏥 Santé",
        journal_entry_funny: "😂 Drôle",
        journal_today: "Aujourd'hui",
        journal_yesterday: "Hier",
        journal_3days: "Il y a 3 jours",
        journal_entry1_title: "Première baignade !",
        journal_entry1_text: "Max a adoré sa première fois à la plage. Il n'arrêtait pas de courir...",
        journal_entry1_mood: "😊 Heureux",
        journal_entry2_title: "Visite de contrôle",
        journal_entry2_text: "Tout va bien ! Le vétérinaire est satisfait de son poids.",
        journal_entry2_mood: "😌 Calme",
        journal_entry3_title: "Le voleur de chaussettes",
        journal_entry3_text: "Encore pris en flagrant délit avec ma chaussette préférée !",
        journal_entry3_mood: "🎾 Joueur",

        // Pets
        pets_tag: "Tous vos compagnons",
        pets_title: "Pour chaque animal, une attention unique",
        pets_subtitle: "Notes4Pets s'adapte à tous les types d'animaux de compagnie. Chacun mérite le meilleur suivi.",
        pet_dogs: "Chiens",
        pet_dogs_desc: "Du chihuahua au dogue allemand",
        pet_cats: "Chats",
        pet_cats_desc: "Du persan au chat de gouttière",
        pet_rabbits: "Lapins",
        pet_rabbits_desc: "Nain, bélier ou géant",
        pet_birds: "Oiseaux",
        pet_birds_desc: "Perruches, perroquets et canaris",
        pet_rodents: "Rongeurs",
        pet_rodents_desc: "Hamsters, cochons d'Inde...",
        pet_other: "Et plus",
        pet_other_desc: "Reptiles, poissons et autres",

        // Reminders
        reminders_tag: "Rappels",
        reminders_title: "Ne manquez plus rien",
        reminders_subtitle: "Des rappels intelligents qui s'adaptent à votre routine. Récurrents, ponctuels, urgents — tout est sous contrôle.",
        reminders_screen_title: "Rappels",
        rem_vaccine_max: "Vaccin Rage — Max",
        rem_in_2_days: "Dans 2 jours",
        rem_urgent: "Urgent",
        rem_dewormer_luna: "Vermifuge — Luna",
        rem_in_1_week: "Dans 1 semaine",
        rem_annual_max: "Visite annuelle — Max",
        rem_grooming_luna: "Toilettage — Luna",
        rem_antiparasitic_max: "Antiparasitaire — Max",
        rem_completed: "Complété",
        rem_type_vaccines: "Vaccins",
        rem_type_treatments: "Traitements",
        rem_type_vet: "Visites véto",
        rem_type_meds: "Médicaments",
        rem_type_grooming: "Toilettage",
        rem_type_custom: "Personnalisé",

        // Milestones
        milestones_tag: "Jalons & anniversaires",
        milestones_title: "Célébrez chaque étape",
        milestones_subtitle: "Premiers pas, anniversaires, adoptions... Notes4Pets célèbre ces moments avec vous, confettis inclus !",
        mile_birthdays: "Anniversaires",
        mile_birthdays_desc: "Célébration automatique avec carte d'anniversaire et animation confettis",
        mile_adoption: "Adoption",
        mile_adoption_desc: "Gardez en mémoire la date et l'histoire de l'arrivée dans votre famille",
        mile_firsts: "Premières fois",
        mile_firsts_desc: "Premier bain, première promenade, premier jouet... chaque première compte",
        mile_achievements: "Accomplissements",
        mile_achievements_desc: "Progrès en éducation, concours, exploits... immortalisez les victoires",

        // Premium
        premium_title: "Passez au niveau supérieur",
        premium_subtitle: "Débloquez toute la puissance de Notes4Pets avec nos offres Premium et Famille.",
        price_free: "Gratuit",
        price_forever: "Pour toujours",
        price_1_pet: "1 animal",
        price_health_record: "Carnet de santé",
        price_reminders: "Rappels",
        price_limited_journal: "Journal limité",
        price_1_photo: "1 photo par entrée",
        price_pdf_export: "Export PDF",
        price_scan_prescriptions: "Scan d'ordonnances",
        price_family_share: "Partage familial",
        price_start: "Commencer",
        price_popular: "Populaire",
        price_premium_price: '2,99€<span>/mois</span>',
        price_premium_period: "Ou 29,99€/an",
        price_unlimited_pets: "Animaux illimités",
        price_full_health: "Carnet de santé complet",
        price_advanced_reminders: "Rappels avancés",
        price_unlimited_journal: "Journal illimité",
        price_unlimited_photos: "Photos illimitées",
        price_priority_support: "Support prioritaire",
        price_try_premium: "Essayer Premium",
        price_family: "Famille",
        price_family_price: '39,99€<span>/an</span>',
        price_family_period: "Jusqu'à 5 membres",
        price_all_premium: "Tout le Premium",
        price_5_members: "5 membres max",
        price_invite_code: "Code d'invitation",
        price_shared_access: "Accès partagé",
        price_member_mgmt: "Gestion des membres",
        price_choose_family: "Choisir Famille",

        // Languages
        lang_title: "Disponible en 4 langues",
        lang_subtitle: "Notes4Pets parle votre langue, où que vous soyez.",

        // Download
        dl_title: "Prêt à prendre soin de vos compagnons ?",
        dl_subtitle: "Téléchargez Notes4Pets gratuitement et commencez à créer le carnet de santé digital de vos animaux dès aujourd'hui.",
        dl_appstore: "Télécharger sur l'App Store",
        dl_note: "Gratuit — iOS 15.0 ou supérieur",

        // Footer
        footer_tagline: "Le carnet de santé digital pour vos compagnons.",
        footer_app: "Application",
        footer_pricing: "Tarifs",
        footer_legal: "Légal",
        footer_terms: "Conditions d'utilisation",
        footer_privacy: "Politique de confidentialité",
        footer_legal_notices: "Mentions légales",
        footer_about: "À propos",
        footer_copyright: "© 2026 Notes4Pets. Tous droits réservés. Fait avec ❤️ pour vos animaux.",

        // Blog nav
        blog_nav_home: "Accueil",
        blog_nav_blog: "Blog",
        blog_nav_privacy: "Confidentialité",
        blog_nav_terms: "CGU",
        blog_nav_download: "Télécharger",

        // Blog article
        blog_tag: "Guide complet",
        blog_h1: "Carnet de santé digital pour chien et chat : le guide complet 2026",
        blog_date: "Publié le 27 février 2026 · Temps de lecture : 15 min",
        blog_s1_title: "1. Pourquoi un carnet de santé digital en 2026 ?",
        blog_s1_p1: "En France, on dénombre plus de 15 millions de chats et 7,5 millions de chiens. À l'échelle européenne, ce sont près de 90 millions de foyers qui partagent leur quotidien avec un animal de compagnie. Ces compagnons à quatre pattes occupent une place de plus en plus importante dans nos vies, et leur santé est devenue une préoccupation majeure pour leurs propriétaires. Pourtant, la gestion du suivi médical reste souvent archaïque : un carnet papier que l'on égare, des dates de rappel que l'on oublie, des informations dispersées entre plusieurs vétérinaires.",
        blog_s1_p2: "La révolution numérique a transformé notre manière de gérer notre propre santé — applications de suivi, dossiers médicaux en ligne, téléconsultation. Il était naturel que cette transformation atteigne également le monde de la santé animale. Le carnet de santé digital pour animaux de compagnie représente cette évolution : un outil moderne, pratique et complet qui centralise toutes les informations médicales de votre chien, chat, lapin ou oiseau dans une seule application sur votre smartphone.",
        blog_s1_p3: "Dans ce guide complet, nous allons explorer en détail ce qu'est un carnet de santé digital, pourquoi il surpasse le carnet papier traditionnel, et quels sont les 10 avantages concrets qui en font un outil indispensable pour tout propriétaire d'animal en 2026. Que vous ayez un chiot qui vient d'arriver dans votre famille ou un vieux chat que vous accompagnez depuis des années, ce guide vous aidera à mieux comprendre comment la technologie peut vous aider à prendre soin de vos compagnons.",
        blog_s2_title: "2. Qu'est-ce qu'un carnet de santé digital pour animaux ?",
        blog_s2_p1: "Un carnet de santé digital pour animaux est une application mobile qui remplace — ou complète — le carnet de vaccination papier traditionnel délivré par votre vétérinaire. Il s'agit d'un véritable dossier médical numérique qui vous permet de centraliser, organiser et consulter à tout moment l'ensemble des informations relatives à la santé et au bien-être de votre animal de compagnie.",
        blog_s2_p2: "Contrairement au simple carnet papier qui se limite souvent aux vaccins et à quelques notes manuscrites, un carnet de santé digital offre un éventail de fonctionnalités beaucoup plus large. Voici ce que contient généralement une application de carnet de santé animal complète :",
        blog_s2_l1: "Le profil complet de l'animal : nom, espèce, race, date de naissance, poids, numéro de puce, caractère et histoire",
        blog_s2_l2: "L'historique vaccinal avec les dates, lots, noms des vaccins et dates de rappel",
        blog_s2_l3: "Le suivi des traitements : antiparasitaires, vermifuges, médicaments en cours",
        blog_s2_l4: "L'historique des visites vétérinaires avec motifs, diagnostics et coûts",
        blog_s2_l5: "Le suivi du poids et de la croissance avec courbe d'évolution",
        blog_s2_l6: "Un système de rappels automatiques pour ne jamais oublier un rendez-vous",
        blog_s2_l7: "Un journal de bord avec photos et suivi de l'humeur",
        blog_s2_l8: "La possibilité d'exporter un PDF complet à partager avec le vétérinaire",
        blog_s3_title: "3. Les limites du carnet papier traditionnel",
        blog_s3_p1: "Le carnet de santé papier a rendu de précieux services pendant des décennies. Mais soyons honnêtes : en 2026, il montre ses limites. Combien de propriétaires d'animaux peuvent affirmer savoir exactement où se trouve le carnet de vaccination de leur compagnon en ce moment même ? Voici les principales limites du format papier qui poussent de plus en plus de propriétaires vers le digital :",
        blog_s3_l1: "<strong>Risque de perte ou de détérioration</strong> — Un carnet papier peut être égaré lors d'un déménagement, mâchouillé par le chien lui-même, ou tout simplement oublié au fond d'un tiroir. Une fois perdu, toutes les informations sont perdues avec lui.",
        blog_s3_l2: "<strong>Pas de rappels automatiques</strong> — Le carnet papier ne sonne pas pour vous prévenir que le rappel de vaccin de votre chien est dans 3 jours. Vous devez vous souvenir de vérifier manuellement les dates, ce qui conduit souvent à des oublis.",
        blog_s3_l3: "<strong>Difficulté de partage</strong> — Si vous changez de vétérinaire, partez en vacances avec votre animal, ou si un membre de la famille doit emmener le chien chez le véto, le partage des informations est compliqué.",
        blog_s3_l4: "<strong>Espace limité</strong> — Les pages d'un carnet papier sont vite remplies. Impossible d'y coller des photos, de tracer une courbe de poids ou d'y écrire un journal détaillé de la vie de votre compagnon.",
        blog_s3_l5: "<strong>Pas toujours avec vous</strong> — En cas d'urgence vétérinaire, vous n'avez pas forcément le carnet papier sur vous. Avec une application, votre smartphone suffit pour accéder à toutes les informations.",
        blog_s3_l6: "<strong>Aucune analyse ni suivi</strong> — Un carnet papier ne permet pas de visualiser l'évolution du poids de votre animal, de comparer des traitements dans le temps ou d'identifier des tendances de santé.",
        blog_s3_l7: "<strong>Pas de sauvegarde</strong> — Si le carnet est détruit, il n'existe aucune copie. Un carnet digital est sauvegardé dans le cloud et peut être restauré à tout moment.",
        blog_s4_title: "4. Les 10 avantages du carnet de santé digital",
        blog_s4_intro: "Maintenant que nous avons identifié les limites du carnet papier, explorons en détail les 10 avantages majeurs qui font du carnet de santé digital un outil incontournable pour tout propriétaire d'animal de compagnie soucieux de la santé de son compagnon.",
        blog_s4_1_title: "4.1. Centralisation de toutes les données de santé",
        blog_s4_1_p: "Le premier avantage, et peut-être le plus fondamental, est la centralisation de toutes les informations de santé de votre animal en un seul endroit. Vaccins, traitements antiparasitaires, vermifuges, visites vétérinaires, résultats d'analyses, chirurgies passées — tout est regroupé dans une interface claire et organisée. Fini les informations dispersées entre le carnet papier, les factures du vétérinaire rangées dans un tiroir, et les notes griffonnées sur un post-it. En quelques secondes, vous accédez à l'historique médical complet de votre chien ou chat, parfaitement structuré et facilement consultable.",
        blog_s4_2_title: "4.2. Accessible partout, tout le temps",
        blog_s4_2_p: "Votre smartphone est toujours dans votre poche. Cela signifie que le carnet de santé digital de votre animal vous accompagne partout : en vacances, chez un nouveau vétérinaire, en cas d'urgence la nuit, ou simplement lors d'une promenade si quelqu'un vous pose des questions sur votre compagnon. Plus besoin de rentrer chez vous pour chercher le carnet papier. Que vous soyez en France, en Espagne ou en Allemagne, toutes les informations sont là, synchronisées dans le cloud et accessibles instantanément depuis votre téléphone.",
        blog_s4_3_title: "4.3. Rappels automatiques de vaccins et traitements",
        blog_s4_3_p: "C'est sans doute l'avantage le plus apprécié des propriétaires d'animaux. Un carnet de santé digital vous envoie des notifications push pour vous rappeler les dates importantes : rappel de vaccin de la rage, renouvellement du vermifuge, prochain rendez-vous vétérinaire, renouvellement de l'antiparasitaire. Ces rappels intelligents s'adaptent au calendrier de soins de votre animal et peuvent être récurrents (tous les 3 mois pour le vermifuge, par exemple). Grâce à eux, vous ne manquerez plus jamais une échéance médicale importante pour votre chien ou votre chat.",
        blog_s4_4_title: "4.4. Suivi du poids et de la croissance",
        blog_s4_4_p: "Le suivi du poids est un indicateur clé de la santé de votre animal. Un chien ou un chat en surpoids est exposé à de nombreux risques : diabète, problèmes articulaires, maladies cardiaques. Avec un carnet de santé digital, vous enregistrez régulièrement le poids de votre compagnon et visualisez son évolution grâce à une courbe graphique. Cela vous permet de détecter rapidement une prise ou une perte de poids anormale et d'en parler à votre vétérinaire. Pour les chiots et les chatons, ce suivi est particulièrement précieux pour s'assurer que la croissance se déroule normalement.",
        blog_s4_5_title: "4.5. Historique complet des vaccins et traitements",
        blog_s4_5_p: "Quand a eu lieu le dernier vaccin contre la rage de votre chien ? Quel vermifuge avez-vous utilisé il y a 6 mois ? Ces questions deviennent triviales avec un carnet digital. Chaque vaccin, chaque traitement est enregistré avec sa date, le nom du produit, le numéro de lot, le nom du vétérinaire et la date de prochain rappel. L'historique est complet, consultable en un clic, et ne risque jamais d'être effacé. Si vous changez de vétérinaire, vous pouvez présenter l'intégralité du dossier médical de votre animal en quelques secondes.",
        blog_s4_6_title: "4.6. Partage facile avec le vétérinaire (export PDF)",
        blog_s4_6_p: "L'export PDF est une fonctionnalité particulièrement utile du carnet de santé digital. En un clic, vous générez un document professionnel contenant l'ensemble du dossier médical de votre animal : profil, vaccins, traitements, visites, courbe de poids. Ce PDF peut être envoyé par email à votre vétérinaire, à un pension pour animaux, ou à une assurance. C'est également indispensable si vous voyagez à l'étranger avec votre animal et devez présenter un historique vaccinal complet aux autorités. Le document est clair, bien formaté et contient toutes les informations essentielles.",
        blog_s4_7_title: "4.7. Journal intime de votre animal",
        blog_s4_7_p: "Au-delà de l'aspect médical, un carnet de santé digital moderne offre un véritable journal de bord pour immortaliser les moments de la vie de votre compagnon. Première promenade, premier bain, rencontre avec un autre animal, moment drôle, étape importante — chaque souvenir peut être enregistré avec des photos, un texte et même l'humeur de votre animal ce jour-là. Ce journal crée un récit unique de la vie de votre chien ou chat que vous pourrez relire avec émotion pendant des années. C'est aussi un outil précieux pour noter des changements de comportement qui pourraient indiquer un problème de santé.",
        blog_s4_8_title: "4.8. Partage en famille",
        blog_s4_8_p: "Votre animal ne vit pas en isolation — toute la famille s'en occupe. Le partage familial permet à chaque membre du foyer d'accéder aux informations de santé et de contribuer au suivi. Votre conjoint emmène le chat chez le véto ? Il a accès à l'historique complet. Vos enfants veulent ajouter une photo au journal ? Ils le peuvent. Un code d'invitation permet d'ajouter jusqu'à 5 membres à la famille, chacun avec son propre compte. Cela garantit que tout le monde est informé et peut agir en cas de besoin, même si vous n'êtes pas disponible.",
        blog_s4_9_title: "4.9. Sécurité et sauvegarde des données",
        blog_s4_9_p: "Contrairement à un carnet papier qui peut être détruit, perdu ou volé, un carnet de santé digital stocke vos données de manière sécurisée dans le cloud. Les informations sont chiffrées, protégées par votre authentification personnelle (email, Apple ID ou compte Google), et automatiquement sauvegardées. Même si vous perdez votre téléphone ou changez d'appareil, vous retrouvez instantanément toutes les données de vos animaux en vous reconnectant. Les règles de sécurité strictes garantissent que seuls vous et les membres de votre famille autorisés peuvent accéder à ces informations.",
        blog_s4_10_title: "4.10. Gain de temps considérable",
        blog_s4_10_p: "En fin de compte, le carnet de santé digital vous fait gagner un temps précieux au quotidien. Plus besoin de chercher le carnet papier, de feuilleter des pages pour retrouver une information, de noter manuellement les dates de rappel dans votre agenda, ou de refaire l'historique médical de votre animal à chaque nouvelle consultation. En quelques secondes, vous accédez à toute l'information, vous exportez un PDF, vous recevez automatiquement les rappels. Ce gain de temps se traduit par une meilleure gestion de la santé de votre animal et moins de stress pour vous.",
        blog_cta_title: "Prêt à digitaliser le carnet de santé de votre animal ?",
        blog_cta_text: "Téléchargez Notes4Pets gratuitement et commencez dès aujourd'hui.",
        blog_cta_button: "Télécharger Notes4Pets",
        blog_s5_title: "5. Carnet digital pour chien : cas d'usage spécifiques",
        blog_s5_p1: "Le chien est l'animal de compagnie qui nécessite le plus de suivi médical régulier. Entre les vaccins obligatoires, les traitements préventifs et les visites de contrôle, le calendrier de soins d'un chien peut vite devenir complexe. Un carnet de santé digital est particulièrement adapté pour les propriétaires de chiens, car il permet de gérer efficacement tous ces aspects sans risquer d'oublier une échéance importante.",
        blog_s5_p2: "Voici les cas d'usage spécifiques du carnet de santé digital pour les propriétaires de chiens :",
        blog_s5_l1: "<strong>Calendrier vaccinal complet</strong> — Suivi des vaccins rage, maladie de Carré, hépatite (DHPP), leptospirose et piroplasmose avec rappels automatiques annuels",
        blog_s5_l2: "<strong>Vermifuge régulier</strong> — Rappels tous les 3 à 6 mois selon l'âge et le mode de vie (4 fois par an pour un chien qui sort souvent)",
        blog_s5_l3: "<strong>Antiparasitaires</strong> — Suivi des traitements anti-puces et anti-tiques avec renouvellement mensuel en saison chaude",
        blog_s5_l4: "<strong>Suivi du poids</strong> — Indispensable pour les grandes races (Labrador, Golden Retriever, Berger Allemand) susceptibles de surpoids",
        blog_s5_l5: "<strong>Suivi de stérilisation</strong> — Date de l'opération, suivi post-opératoire, impact sur le poids et le comportement",
        blog_s5_l6: "<strong>Passeport européen</strong> — Enregistrement du numéro de puce, des vaccinations obligatoires pour les voyages et des contrôles sanitaires",
        blog_s6_title: "6. Carnet digital pour chat : cas d'usage spécifiques",
        blog_s6_p1: "Le chat est un animal indépendant mais dont la santé mérite tout autant d'attention. Que votre chat soit un chat d'intérieur ou qu'il sorte régulièrement, ses besoins en termes de suivi médical sont différents. Un carnet de santé digital permet de personnaliser le suivi en fonction du mode de vie de votre félin et de ne jamais oublier les échéances de soins spécifiques à cette espèce.",
        blog_s6_p2: "Voici les cas d'usage spécifiques du carnet de santé digital pour les propriétaires de chats :",
        blog_s6_l1: "<strong>Vaccins essentiels</strong> — Suivi des vaccins typhus (panleucopénie), coryza et leucose (FeLV) avec rappels annuels ou triennaux selon le protocole",
        blog_s6_l2: "<strong>Test FIV/FeLV</strong> — Enregistrement des résultats de dépistage du virus de l'immunodéficience féline et de la leucose",
        blog_s6_l3: "<strong>Chat d'intérieur vs extérieur</strong> — Adaptation du calendrier de soins selon que le chat sort ou non (plus de vermifuges et antiparasitaires pour un chat d'extérieur)",
        blog_s6_l4: "<strong>Suivi rénal et urinaire</strong> — Les chats sont particulièrement sujets aux problèmes rénaux ; le suivi du poids et des visites véto aide à détecter les signes précoces",
        blog_s6_l5: "<strong>Stérilisation et suivi hormonal</strong> — Date de stérilisation, suivi du comportement post-opératoire, gestion du poids après l'opération",
        blog_s6_l6: "<strong>Journal comportemental</strong> — Suivi des changements d'humeur, d'appétit ou de comportement qui peuvent indiquer un problème de santé chez le chat",
        blog_s7_title: "7. Comment choisir son application de carnet de santé animal ?",
        blog_s7_p1: "Face à l'offre croissante d'applications de suivi de santé animale, il est important de savoir quels critères privilégier pour faire le bon choix. Toutes les applications ne se valent pas, et certaines fonctionnalités sont essentielles pour un suivi réellement efficace. Voici les critères clés à examiner avant de choisir votre application de carnet de santé digital :",
        blog_s7_l1: "<strong>Facilité d'utilisation</strong> — L'interface doit être intuitive et agréable. Si l'application est compliquée, vous ne l'utiliserez pas régulièrement.",
        blog_s7_l2: "<strong>Gestion multi-animaux</strong> — Si vous avez plusieurs animaux, l'application doit permettre de gérer des profils séparés pour chacun d'entre eux.",
        blog_s7_l3: "<strong>Rappels et notifications</strong> — Des rappels intelligents et personnalisables sont indispensables pour ne jamais oublier un vaccin ou un traitement.",
        blog_s7_l4: "<strong>Export PDF</strong> — La possibilité de générer un document complet à partager avec le vétérinaire est un atout majeur.",
        blog_s7_l5: "<strong>Partage familial</strong> — Si plusieurs personnes s'occupent de l'animal, le partage de données en famille est essentiel.",
        blog_s7_l6: "<strong>Sécurité des données</strong> — Vérifiez que l'application utilise un stockage sécurisé et chiffré pour protéger les informations de votre animal.",
        blog_s7_l7: "<strong>Multi-langues</strong> — Si vous voyagez ou si votre famille est internationale, une application disponible en plusieurs langues est un plus non négligeable.",
        blog_s7_l8: "<strong>Support de plusieurs espèces</strong> — Chiens, chats, mais aussi lapins, oiseaux, rongeurs... Une application polyvalente vous évitera de multiplier les outils.",
        blog_s7_l9: "<strong>Rapport qualité-prix</strong> — Privilégiez une application avec une version gratuite fonctionnelle et un abonnement premium raisonnable pour les fonctionnalités avancées.",
        blog_s8_title: "8. Notes4Pets : la solution complète pour vos compagnons",
        blog_s8_p1: "Notes4Pets a été conçue par des passionnés d'animaux pour répondre à tous les besoins que nous avons évoqués dans ce guide. C'est une application iOS moderne et élégante qui transforme votre smartphone en véritable carnet de santé digital pour tous vos animaux de compagnie. Que vous ayez un chien, un chat, un lapin, un oiseau, un rongeur ou tout autre animal, Notes4Pets s'adapte à chaque espèce avec un suivi personnalisé.",
        blog_s8_p2: "L'application propose un carnet de santé complet avec suivi des vaccins, des traitements et des visites vétérinaires, un système de rappels intelligents avec notifications push, un journal intime avec photos et suivi de l'humeur, un export PDF professionnel, et un partage familial permettant jusqu'à 5 membres de collaborer sur le suivi de leurs animaux. Disponible en français, anglais, allemand et espagnol, Notes4Pets s'adapte automatiquement à la langue de votre appareil.",
        blog_s8_p3: "Notes4Pets est gratuite pour 1 animal avec les fonctionnalités de base. L'abonnement Premium à seulement 2,99€/mois (ou 29,99€/an) débloque les animaux illimités, le journal complet, l'export PDF, la sauvegarde cloud et la suppression des publicités. Le plan Famille à 39,99€/an permet de partager toutes les fonctionnalités Premium avec jusqu'à 5 membres. Un investissement minime pour la tranquillité d'esprit et le bien-être de vos compagnons.",
        blog_s9_title: "9. Questions fréquentes",
        blog_faq1_q: "Qu'est-ce qu'un carnet de santé digital pour animaux ?",
        blog_faq1_a: "Un carnet de santé digital est une application mobile qui centralise toutes les informations médicales de votre animal : vaccins, traitements, visites vétérinaires, poids et rappels. Il remplace le carnet papier traditionnel avec plus de fonctionnalités, comme les rappels automatiques, le partage en famille et l'export PDF.",
        blog_faq2_q: "Est-ce que Notes4Pets est gratuit ?",
        blog_faq2_a: "Oui, Notes4Pets propose une version gratuite qui permet de gérer 1 animal avec le carnet de santé de base et les rappels. La version Premium à 2,99€/mois débloque les animaux illimités, l'export PDF, le journal complet avec photos, la sauvegarde cloud et le partage familial.",
        blog_faq3_q: "Un carnet digital remplace-t-il le carnet de vaccination papier ?",
        blog_faq3_a: "Le carnet digital est un complément idéal au carnet officiel de vaccination. Il vous permet de ne jamais oublier un rappel et de partager facilement l'historique médical avec votre vétérinaire. Certains pays exigent encore le carnet papier ou le passeport européen pour les voyages internationaux avec votre animal.",
        blog_faq4_q: "Mes données sont-elles sécurisées ?",
        blog_faq4_a: "Oui, Notes4Pets utilise Firebase avec des règles de sécurité strictes. Vos données sont chiffrées, sauvegardées dans le cloud et accessibles uniquement par vous et les membres de votre famille que vous autorisez. Vous pouvez supprimer votre compte et toutes vos données à tout moment depuis les paramètres de l'application.",
        blog_faq5_q: "Puis-je gérer plusieurs animaux ?",
        blog_faq5_a: "La version gratuite permet de gérer 1 animal. Avec Notes4Pets Premium, vous pouvez ajouter un nombre illimité d'animaux : chiens, chats, lapins, oiseaux, rongeurs et autres. Chaque animal dispose de son propre profil avec un carnet de santé, un journal et des rappels dédiés.",
        blog_s10_title: "10. Conclusion : le digital au service du bien-être animal",
        blog_s10_p1: "En 2026, le carnet de santé digital n'est plus un gadget pour technophiles — c'est un outil pratique et essentiel pour tout propriétaire d'animal de compagnie qui souhaite offrir le meilleur suivi médical à son compagnon. Centralisation des données, rappels automatiques, partage familial, export PDF, journal de bord... les avantages sont nombreux et concrets. Que vous ayez un chien, un chat ou tout autre animal, passer au digital vous permet de gagner du temps, d'éviter les oublis et de garder une trace complète de la vie et de la santé de votre compagnon.",
        blog_s10_p2: "Notes4Pets est disponible gratuitement sur l'App Store. Téléchargez l'application dès maintenant et découvrez à quel point il est simple de gérer le carnet de santé de vos animaux depuis votre iPhone. Vos compagnons méritent le meilleur — et le meilleur commence par un suivi de santé organisé, accessible et moderne.",
        blog_back_home: "← Retour à l'accueil",
        blog_download_cta: "Télécharger Notes4Pets"
    },

    en: {
        nav_features: "Features",
        nav_health: "Health record",
        nav_journal: "Journal",
        nav_pets: "Pets",
        nav_download: "Download",

        hero_badge: "Available on iOS",
        hero_title: 'The <span class="gradient-text">digital</span> health record for your companions',
        hero_subtitle: "Track the health, memories and well-being of your pets. Everything you need, in one beautiful app.",
        hero_cta: "Download the app",
        hero_discover: "Discover",
        stat_species: "Species supported",
        stat_languages: "Languages",
        stat_memories: "Memories",

        screen_greeting: "Hello, Marie 👋",
        screen_subtitle: "Your companions are waiting",
        screen_age_3: "3 yrs",
        screen_age_2: "2 yrs",
        screen_breed_siamese: "Siamese",
        screen_vaccine_max: "Vaccine — Max",
        screen_in_3_days: "In 3 days",

        float_health: "Health tracking",
        float_journal: "Journal",
        float_reminders: "Reminders",

        features_tag: "Features",
        features_title: "Everything for the happiness of your pets",
        features_subtitle: "A complete suite of tools designed with love to take care of your companions every day.",
        feat_health_title: "Health record",
        feat_health_desc: "Vaccines, treatments, vet visits and weight tracking. All the medical records in one place.",
        feat_journal_title: "Personal journal",
        feat_journal_desc: "Capture every special moment with photos, moods and tags. A true logbook for your companions.",
        feat_reminders_title: "Smart reminders",
        feat_reminders_desc: "Never miss a vaccine or appointment again. Recurring reminders with push notifications.",
        feat_pdf_title: "PDF Export",
        feat_pdf_desc: "Generate a complete health record in PDF to share with your vet in one click.",
        feat_family_title: "Family sharing",
        feat_family_desc: "Share your pets' records with the whole family. Up to 5 members with an invite code.",
        feat_personality_title: "Personality & story",
        feat_personality_desc: "Document your pet's unique character: likes, fears, habits and their personal story.",

        health_tag: "Health record",
        health_title: "Your pet's complete medical file",
        health_subtitle: "No more lost paper records. Centralize all health information and never miss an appointment.",
        health_screen_title: "Health record",
        health_tab_vaccines: "Vaccines",
        health_tab_treatments: "Treatments",
        health_tab_visits: "Visits",
        health_tab_weight: "Weight",
        health_status_valid: "✓ Up to date",
        health_status_soon: "⏰ Soon",
        health_rabies: "Rabies",
        health_leukosis: "Leukosis",
        health_next_1: "Next: March 12, 2026",
        health_next_2: "Next: June 5, 2025",
        health_next_3: "Next: Jan. 20, 2026",
        health_vaccines: "Vaccines",
        health_vaccines_desc: "Track dates, batches, vets and statuses (up to date, due soon, expired)",
        health_treatments: "Treatments",
        health_treatments_desc: "Antiparasitics, dewormers and medications with automatic reminders",
        health_visits: "Vet visits",
        health_visits_desc: "Complete history: reasons, diagnoses, treatments and costs",
        health_weight: "Weight tracking",
        health_weight_desc: "Progress chart with dates and notes to monitor fitness",

        journal_tag: "Journal",
        journal_title: "Every moment deserves to be kept",
        journal_subtitle: "Create a personal journal for your companion. Photos, moods, anecdotes... don't lose a single memory.",
        journal_notes: "Notes",
        journal_moments: "Moments",
        journal_health: "Health",
        journal_funny: "Funny",
        journal_milestones: "Milestones",
        journal_mood_label: "Track the mood:",
        mood_happy: "😊 Happy",
        mood_calm: "😌 Calm",
        mood_playful: "🎾 Playful",
        mood_tired: "😴 Tired",
        mood_sick: "🤒 Sick",
        mood_anxious: "😰 Anxious",
        journal_screen_title: "Max's journal",
        journal_entry_moment: "📸 Moment",
        journal_entry_health: "🏥 Health",
        journal_entry_funny: "😂 Funny",
        journal_today: "Today",
        journal_yesterday: "Yesterday",
        journal_3days: "3 days ago",
        journal_entry1_title: "First swim!",
        journal_entry1_text: "Max loved his first time at the beach. He couldn't stop running...",
        journal_entry1_mood: "😊 Happy",
        journal_entry2_title: "Check-up visit",
        journal_entry2_text: "Everything is fine! The vet is satisfied with his weight.",
        journal_entry2_mood: "😌 Calm",
        journal_entry3_title: "The sock thief",
        journal_entry3_text: "Caught red-handed again with my favorite sock!",
        journal_entry3_mood: "🎾 Playful",

        pets_tag: "All your companions",
        pets_title: "Unique care for every animal",
        pets_subtitle: "Notes4Pets adapts to all types of pets. Each one deserves the best care.",
        pet_dogs: "Dogs",
        pet_dogs_desc: "From Chihuahua to Great Dane",
        pet_cats: "Cats",
        pet_cats_desc: "From Persian to alley cat",
        pet_rabbits: "Rabbits",
        pet_rabbits_desc: "Dwarf, lop or giant",
        pet_birds: "Birds",
        pet_birds_desc: "Parakeets, parrots and canaries",
        pet_rodents: "Rodents",
        pet_rodents_desc: "Hamsters, guinea pigs...",
        pet_other: "And more",
        pet_other_desc: "Reptiles, fish and others",

        reminders_tag: "Reminders",
        reminders_title: "Never miss a thing",
        reminders_subtitle: "Smart reminders that adapt to your routine. Recurring, one-time, urgent — everything under control.",
        reminders_screen_title: "Reminders",
        rem_vaccine_max: "Rabies Vaccine — Max",
        rem_in_2_days: "In 2 days",
        rem_urgent: "Urgent",
        rem_dewormer_luna: "Dewormer — Luna",
        rem_in_1_week: "In 1 week",
        rem_annual_max: "Annual visit — Max",
        rem_grooming_luna: "Grooming — Luna",
        rem_antiparasitic_max: "Antiparasitic — Max",
        rem_completed: "Completed",
        rem_type_vaccines: "Vaccines",
        rem_type_treatments: "Treatments",
        rem_type_vet: "Vet visits",
        rem_type_meds: "Medications",
        rem_type_grooming: "Grooming",
        rem_type_custom: "Custom",

        milestones_tag: "Milestones & birthdays",
        milestones_title: "Celebrate every step",
        milestones_subtitle: "First steps, birthdays, adoptions... Notes4Pets celebrates these moments with you, confetti included!",
        mile_birthdays: "Birthdays",
        mile_birthdays_desc: "Automatic celebration with birthday card and confetti animation",
        mile_adoption: "Adoption",
        mile_adoption_desc: "Remember the date and story of their arrival into your family",
        mile_firsts: "First times",
        mile_firsts_desc: "First bath, first walk, first toy... every first matters",
        mile_achievements: "Achievements",
        mile_achievements_desc: "Training progress, competitions, exploits... immortalize the victories",

        premium_title: "Take it to the next level",
        premium_subtitle: "Unlock the full power of Notes4Pets with our Premium and Family plans.",
        price_free: "Free",
        price_forever: "Forever",
        price_1_pet: "1 pet",
        price_health_record: "Health record",
        price_reminders: "Reminders",
        price_limited_journal: "Limited journal",
        price_1_photo: "1 photo per entry",
        price_pdf_export: "PDF Export",
        price_scan_prescriptions: "Prescription scanning",
        price_family_share: "Family sharing",
        price_start: "Get started",
        price_popular: "Popular",
        price_premium_price: '$2.99<span>/mo</span>',
        price_premium_period: "Or $29.99/yr",
        price_unlimited_pets: "Unlimited pets",
        price_full_health: "Full health record",
        price_advanced_reminders: "Advanced reminders",
        price_unlimited_journal: "Unlimited journal",
        price_unlimited_photos: "Unlimited photos",
        price_priority_support: "Priority support",
        price_try_premium: "Try Premium",
        price_family: "Family",
        price_family_price: '$39.99<span>/yr</span>',
        price_family_period: "Up to 5 members",
        price_all_premium: "All Premium features",
        price_5_members: "5 members max",
        price_invite_code: "Invite code",
        price_shared_access: "Shared access",
        price_member_mgmt: "Member management",
        price_choose_family: "Choose Family",

        lang_title: "Available in 4 languages",
        lang_subtitle: "Notes4Pets speaks your language, wherever you are.",

        dl_title: "Ready to take care of your companions?",
        dl_subtitle: "Download Notes4Pets for free and start creating your pets' digital health record today.",
        dl_appstore: "Download on the App Store",
        dl_note: "Free — iOS 15.0 or later",

        footer_tagline: "The digital health record for your companions.",
        footer_app: "Application",
        footer_pricing: "Pricing",
        footer_legal: "Legal",
        footer_terms: "Terms of use",
        footer_privacy: "Privacy policy",
        footer_legal_notices: "Legal notices",
        footer_about: "About",
        footer_copyright: "© 2026 Notes4Pets. All rights reserved. Made with ❤️ for your pets.",

        // Blog nav
        blog_nav_home: "Home",
        blog_nav_blog: "Blog",
        blog_nav_privacy: "Privacy",
        blog_nav_terms: "Terms",
        blog_nav_download: "Download",

        // Blog article
        blog_tag: "Complete guide",
        blog_h1: "Digital health record for dogs and cats: the complete guide 2026",
        blog_date: "Published February 27, 2026 · Reading time: 15 min",
        blog_s1_title: "1. Why a digital health record in 2026?",
        blog_s1_p1: "In France alone, there are over 15 million cats and 7.5 million dogs. Across Europe, nearly 90 million households share their daily life with a pet. These four-legged companions occupy an increasingly important place in our lives, and their health has become a major concern for their owners. Yet medical tracking often remains outdated: a paper booklet that gets lost, reminder dates that are forgotten, information scattered between several veterinarians.",
        blog_s1_p2: "The digital revolution has transformed the way we manage our own health — tracking apps, online medical records, telemedicine. It was natural for this transformation to also reach the world of animal health. The digital health record for pets represents this evolution: a modern, practical and complete tool that centralizes all the medical information of your dog, cat, rabbit or bird in a single app on your smartphone.",
        blog_s1_p3: "In this complete guide, we will explore in detail what a digital health record is, why it surpasses the traditional paper booklet, and what are the 10 concrete advantages that make it an essential tool for every pet owner in 2026. Whether you have a puppy that just arrived in your family or an old cat you've been caring for years, this guide will help you understand how technology can help you take care of your companions.",
        blog_s2_title: "2. What is a digital health record for pets?",
        blog_s2_p1: "A digital health record for pets is a mobile application that replaces — or complements — the traditional paper vaccination booklet given by your veterinarian. It is a true digital medical file that allows you to centralize, organize and consult at any time all the information related to the health and well-being of your pet.",
        blog_s2_p2: "Unlike the simple paper booklet which is often limited to vaccines and a few handwritten notes, a digital health record offers a much wider range of features. Here is what a complete pet health record app typically contains:",
        blog_s2_l1: "Complete pet profile: name, species, breed, date of birth, weight, microchip number, personality and history",
        blog_s2_l2: "Vaccination history with dates, batches, vaccine names and booster dates",
        blog_s2_l3: "Treatment tracking: antiparasitics, dewormers, current medications",
        blog_s2_l4: "Veterinary visit history with reasons, diagnoses and costs",
        blog_s2_l5: "Weight and growth tracking with progress chart",
        blog_s2_l6: "Automatic reminder system so you never forget an appointment",
        blog_s2_l7: "A journal with photos and mood tracking",
        blog_s2_l8: "The ability to export a complete PDF to share with your vet",
        blog_s3_title: "3. The limitations of the traditional paper booklet",
        blog_s3_p1: "The paper health booklet has served well for decades. But let's be honest: in 2026, it shows its limitations. How many pet owners can say they know exactly where their companion's vaccination booklet is right now? Here are the main limitations of paper that are pushing more and more owners toward digital:",
        blog_s3_l1: "<strong>Risk of loss or damage</strong> — A paper booklet can be misplaced during a move, chewed by the dog itself, or simply forgotten at the bottom of a drawer. Once lost, all information is lost with it.",
        blog_s3_l2: "<strong>No automatic reminders</strong> — The paper booklet doesn't ring to remind you that your dog's vaccine booster is in 3 days. You must remember to manually check dates, which often leads to missed appointments.",
        blog_s3_l3: "<strong>Difficulty sharing</strong> — If you change veterinarians, go on vacation with your pet, or if a family member needs to take the dog to the vet, sharing information is complicated.",
        blog_s3_l4: "<strong>Limited space</strong> — The pages of a paper booklet fill up quickly. It's impossible to add photos, track weight charts, or write a detailed journal of your companion's life.",
        blog_s3_l5: "<strong>Not always with you</strong> — In case of a veterinary emergency, you may not have the paper booklet with you. With an app, your smartphone is enough to access all information.",
        blog_s3_l6: "<strong>No analysis or tracking</strong> — A paper booklet doesn't allow you to visualize your pet's weight evolution, compare treatments over time, or identify health trends.",
        blog_s3_l7: "<strong>No backup</strong> — If the booklet is destroyed, there is no copy. A digital record is backed up in the cloud and can be restored at any time.",
        blog_s4_title: "4. The 10 advantages of a digital health record",
        blog_s4_intro: "Now that we have identified the limitations of paper, let's explore in detail the 10 major advantages that make the digital health record an essential tool for every pet owner who cares about their companion's health.",
        blog_s4_1_title: "4.1. Centralization of all health data",
        blog_s4_1_p: "The first advantage, and perhaps the most fundamental, is the centralization of all your pet's health information in one place. Vaccines, antiparasitic treatments, dewormers, vet visits, test results, past surgeries — everything is gathered in a clear and organized interface. No more information scattered between the paper booklet, vet invoices filed in a drawer, and notes scribbled on a post-it. In seconds, you access your dog or cat's complete medical history, perfectly structured and easily searchable.",
        blog_s4_2_title: "4.2. Accessible anywhere, anytime",
        blog_s4_2_p: "Your smartphone is always in your pocket. This means your pet's digital health record goes everywhere with you: on vacation, at a new vet, in case of an emergency at night, or simply during a walk if someone asks about your companion. No need to go home to find the paper booklet. Whether you're in France, Spain or Germany, all the information is there, synced in the cloud and instantly accessible from your phone.",
        blog_s4_3_title: "4.3. Automatic vaccine and treatment reminders",
        blog_s4_3_p: "This is probably the most appreciated advantage for pet owners. A digital health record sends you push notifications to remind you of important dates: rabies vaccine booster, dewormer renewal, next vet appointment, antiparasitic renewal. These smart reminders adapt to your pet's care calendar and can be recurring (every 3 months for dewormer, for example). Thanks to them, you will never miss an important medical deadline for your dog or cat again.",
        blog_s4_4_title: "4.4. Weight and growth tracking",
        blog_s4_4_p: "Weight tracking is a key indicator of your pet's health. An overweight dog or cat is exposed to many risks: diabetes, joint problems, heart disease. With a digital health record, you regularly record your companion's weight and visualize its evolution through a graphical chart. This allows you to quickly detect abnormal weight gain or loss and discuss it with your veterinarian. For puppies and kittens, this tracking is particularly valuable to ensure growth is progressing normally.",
        blog_s4_5_title: "4.5. Complete vaccine and treatment history",
        blog_s4_5_p: "When was your dog's last rabies vaccine? Which dewormer did you use 6 months ago? These questions become trivial with a digital record. Every vaccine, every treatment is recorded with its date, product name, batch number, vet name and next booster date. The history is complete, viewable in one click, and will never be erased. If you change veterinarians, you can present your pet's entire medical file in seconds.",
        blog_s4_6_title: "4.6. Easy sharing with your vet (PDF export)",
        blog_s4_6_p: "PDF export is a particularly useful feature of the digital health record. In one click, you generate a professional document containing your pet's entire medical file: profile, vaccines, treatments, visits, weight chart. This PDF can be emailed to your veterinarian, a pet boarding facility, or an insurance company. It's also essential if you travel abroad with your pet and need to present a complete vaccination history to authorities. The document is clear, well-formatted and contains all essential information.",
        blog_s4_7_title: "4.7. Your pet's personal journal",
        blog_s4_7_p: "Beyond the medical aspect, a modern digital health record offers a true journal to capture the moments of your companion's life. First walk, first bath, meeting another animal, funny moment, important milestone — every memory can be recorded with photos, text and even your pet's mood that day. This journal creates a unique narrative of your dog or cat's life that you can reread with emotion for years. It's also a valuable tool for noting behavioral changes that could indicate a health issue.",
        blog_s4_8_title: "4.8. Family sharing",
        blog_s4_8_p: "Your pet doesn't live in isolation — the whole family takes care of it. Family sharing allows every household member to access health information and contribute to the tracking. Your partner takes the cat to the vet? They have access to the complete history. Your kids want to add a photo to the journal? They can. An invitation code allows up to 5 members to join the family, each with their own account. This ensures everyone is informed and can act when needed, even if you're unavailable.",
        blog_s4_9_title: "4.9. Data security and backup",
        blog_s4_9_p: "Unlike a paper booklet that can be destroyed, lost or stolen, a digital health record stores your data securely in the cloud. Information is encrypted, protected by your personal authentication (email, Apple ID or Google account), and automatically backed up. Even if you lose your phone or switch devices, you instantly recover all your pet data by logging back in. Strict security rules ensure that only you and your authorized family members can access this information.",
        blog_s4_10_title: "4.10. Significant time savings",
        blog_s4_10_p: "Ultimately, the digital health record saves you valuable time every day. No more searching for the paper booklet, flipping through pages to find information, manually noting reminder dates in your calendar, or rebuilding your pet's medical history at each new consultation. In seconds, you access all the information, export a PDF, and automatically receive reminders. This time saving translates into better management of your pet's health and less stress for you.",
        blog_cta_title: "Ready to digitize your pet's health record?",
        blog_cta_text: "Download Notes4Pets for free and start today.",
        blog_cta_button: "Download Notes4Pets",
        blog_s5_title: "5. Digital record for dogs: specific use cases",
        blog_s5_p1: "Dogs require the most regular medical follow-up of any pet. Between mandatory vaccines, preventive treatments and check-up visits, a dog's care calendar can quickly become complex. A digital health record is particularly suited for dog owners, as it efficiently manages all these aspects without risking missing an important deadline.",
        blog_s5_p2: "Here are the specific use cases of the digital health record for dog owners:",
        blog_s5_l1: "<strong>Complete vaccination schedule</strong> — Track rabies, distemper, hepatitis (DHPP), leptospirosis and piroplasmosis vaccines with automatic annual reminders",
        blog_s5_l2: "<strong>Regular deworming</strong> — Reminders every 3 to 6 months depending on age and lifestyle (4 times a year for dogs that go out often)",
        blog_s5_l3: "<strong>Antiparasitics</strong> — Track flea and tick treatments with monthly renewal during warm season",
        blog_s5_l4: "<strong>Weight tracking</strong> — Essential for large breeds (Labrador, Golden Retriever, German Shepherd) prone to overweight",
        blog_s5_l5: "<strong>Spaying/neutering tracking</strong> — Surgery date, post-operative follow-up, impact on weight and behavior",
        blog_s5_l6: "<strong>European passport</strong> — Record microchip number, mandatory vaccinations for travel and health checks",
        blog_s6_title: "6. Digital record for cats: specific use cases",
        blog_s6_p1: "Cats are independent animals whose health deserves just as much attention. Whether your cat is an indoor cat or goes outside regularly, its medical follow-up needs are different. A digital health record allows you to customize tracking based on your feline's lifestyle and never forget species-specific care deadlines.",
        blog_s6_p2: "Here are the specific use cases of the digital health record for cat owners:",
        blog_s6_l1: "<strong>Essential vaccines</strong> — Track panleukopenia, calicivirus and feline leukemia (FeLV) vaccines with annual or triennial boosters depending on protocol",
        blog_s6_l2: "<strong>FIV/FeLV testing</strong> — Record screening results for feline immunodeficiency virus and leukemia",
        blog_s6_l3: "<strong>Indoor vs outdoor cat</strong> — Adapt the care schedule depending on whether the cat goes outside or not (more dewormers and antiparasitics for an outdoor cat)",
        blog_s6_l4: "<strong>Kidney and urinary monitoring</strong> — Cats are particularly prone to kidney problems; weight tracking and vet visits help detect early signs",
        blog_s6_l5: "<strong>Spaying and hormonal monitoring</strong> — Spay date, post-operative behavior monitoring, weight management after surgery",
        blog_s6_l6: "<strong>Behavioral journal</strong> — Track changes in mood, appetite or behavior that may indicate a health problem in cats",
        blog_s7_title: "7. How to choose your pet health record app?",
        blog_s7_p1: "With the growing number of pet health tracking apps, it's important to know which criteria to prioritize. Not all apps are created equal, and some features are essential for truly effective tracking. Here are the key criteria to examine before choosing your digital health record app:",
        blog_s7_l1: "<strong>Ease of use</strong> — The interface must be intuitive and pleasant. If the app is complicated, you won't use it regularly.",
        blog_s7_l2: "<strong>Multi-pet management</strong> — If you have multiple pets, the app must allow you to manage separate profiles for each one.",
        blog_s7_l3: "<strong>Reminders and notifications</strong> — Smart, customizable reminders are essential to never forget a vaccine or treatment.",
        blog_s7_l4: "<strong>PDF export</strong> — The ability to generate a complete document to share with the vet is a major asset.",
        blog_s7_l5: "<strong>Family sharing</strong> — If multiple people care for the pet, family data sharing is essential.",
        blog_s7_l6: "<strong>Data security</strong> — Verify that the app uses secure, encrypted storage to protect your pet's information.",
        blog_s7_l7: "<strong>Multi-language</strong> — If you travel or your family is international, an app available in multiple languages is a significant plus.",
        blog_s7_l8: "<strong>Multi-species support</strong> — Dogs, cats, but also rabbits, birds, rodents... A versatile app saves you from multiplying tools.",
        blog_s7_l9: "<strong>Value for money</strong> — Look for an app with a functional free version and a reasonable premium subscription for advanced features.",
        blog_s8_title: "8. Notes4Pets: the complete solution for your companions",
        blog_s8_p1: "Notes4Pets was designed by animal lovers to meet all the needs discussed in this guide. It's a modern and elegant iOS app that transforms your smartphone into a true digital health record for all your pets. Whether you have a dog, cat, rabbit, bird, rodent or any other animal, Notes4Pets adapts to each species with personalized tracking.",
        blog_s8_p2: "The app offers a complete health record with vaccine, treatment and vet visit tracking, a smart reminder system with push notifications, a personal journal with photos and mood tracking, professional PDF export, and family sharing for up to 5 members to collaborate on their pets' care. Available in French, English, German and Spanish, Notes4Pets automatically adapts to your device's language.",
        blog_s8_p3: "Notes4Pets is free for 1 pet with basic features. The Premium subscription at just $2.99/month (or $29.99/year) unlocks unlimited pets, full journal, PDF export, cloud backup and ad removal. The Family plan at $39.99/year lets you share all Premium features with up to 5 members. A minimal investment for peace of mind and the well-being of your companions.",
        blog_s9_title: "9. Frequently asked questions",
        blog_faq1_q: "What is a digital health record for pets?",
        blog_faq1_a: "A digital health record is a mobile application that centralizes all your pet's medical information: vaccines, treatments, vet visits, weight and reminders. It replaces the traditional paper booklet with more features, such as automatic reminders, family sharing and PDF export.",
        blog_faq2_q: "Is Notes4Pets free?",
        blog_faq2_a: "Yes, Notes4Pets offers a free version that allows you to manage 1 pet with basic health record and reminders. The Premium version at $2.99/month unlocks unlimited pets, PDF export, full journal with photos, cloud backup and family sharing.",
        blog_faq3_q: "Does a digital record replace the paper vaccination booklet?",
        blog_faq3_a: "The digital record is an ideal complement to the official vaccination booklet. It helps you never forget a booster and easily share medical history with your vet. Some countries still require the paper booklet or European passport for international travel with your pet.",
        blog_faq4_q: "Is my data secure?",
        blog_faq4_a: "Yes, Notes4Pets uses Firebase with strict security rules. Your data is encrypted, backed up in the cloud and only accessible by you and the family members you authorize. You can delete your account and all your data at any time from the app settings.",
        blog_faq5_q: "Can I manage multiple pets?",
        blog_faq5_a: "The free version allows you to manage 1 pet. With Notes4Pets Premium, you can add an unlimited number of animals: dogs, cats, rabbits, birds, rodents and more. Each pet has its own profile with a dedicated health record, journal and reminders.",
        blog_s10_title: "10. Conclusion: digital technology serving animal welfare",
        blog_s10_p1: "In 2026, the digital health record is no longer a gadget for tech enthusiasts — it's a practical and essential tool for every pet owner who wants to provide the best medical care for their companion. Data centralization, automatic reminders, family sharing, PDF export, journal... the advantages are numerous and concrete. Whether you have a dog, a cat or any other pet, going digital allows you to save time, avoid oversights and keep a complete record of your companion's life and health.",
        blog_s10_p2: "Notes4Pets is available for free on the App Store. Download the app now and discover how easy it is to manage your pets' health record from your iPhone. Your companions deserve the best — and the best starts with organized, accessible and modern health tracking.",
        blog_back_home: "← Back to Home",
        blog_download_cta: "Download Notes4Pets"
    },

    de: {
        nav_features: "Funktionen",
        nav_health: "Gesundheitsheft",
        nav_journal: "Tagebuch",
        nav_pets: "Tiere",
        nav_download: "Herunterladen",

        hero_badge: "Verfügbar auf iOS",
        hero_title: 'Das <span class="gradient-text">digitale</span> Gesundheitsheft für Ihre Begleiter',
        hero_subtitle: "Verfolgen Sie die Gesundheit, Erinnerungen und das Wohlbefinden Ihrer Haustiere. Alles, was Sie brauchen, in einer wunderschönen App.",
        hero_cta: "App herunterladen",
        hero_discover: "Entdecken",
        stat_species: "Unterstützte Arten",
        stat_languages: "Sprachen",
        stat_memories: "Erinnerungen",

        screen_greeting: "Hallo, Marie 👋",
        screen_subtitle: "Ihre Begleiter warten auf Sie",
        screen_age_3: "3 J.",
        screen_age_2: "2 J.",
        screen_breed_siamese: "Siamkatze",
        screen_vaccine_max: "Impfung — Max",
        screen_in_3_days: "In 3 Tagen",

        float_health: "Gesundheit",
        float_journal: "Tagebuch",
        float_reminders: "Erinnerungen",

        features_tag: "Funktionen",
        features_title: "Alles für das Glück Ihrer Tiere",
        features_subtitle: "Eine komplette Suite von Werkzeugen, mit Liebe entwickelt, um täglich für Ihre Begleiter zu sorgen.",
        feat_health_title: "Gesundheitsheft",
        feat_health_desc: "Impfungen, Behandlungen, Tierarztbesuche und Gewichtsverfolgung. Alle medizinischen Unterlagen an einem Ort.",
        feat_journal_title: "Persönliches Tagebuch",
        feat_journal_desc: "Halten Sie jeden besonderen Moment mit Fotos, Stimmungen und Tags fest. Ein echtes Logbuch für Ihre Begleiter.",
        feat_reminders_title: "Intelligente Erinnerungen",
        feat_reminders_desc: "Verpassen Sie nie wieder eine Impfung oder einen Termin. Wiederkehrende Erinnerungen mit Push-Benachrichtigungen.",
        feat_pdf_title: "PDF-Export",
        feat_pdf_desc: "Erstellen Sie ein vollständiges Gesundheitsheft als PDF, um es mit einem Klick mit Ihrem Tierarzt zu teilen.",
        feat_family_title: "Familienfreigabe",
        feat_family_desc: "Teilen Sie die Daten Ihrer Tiere mit der ganzen Familie. Bis zu 5 Mitglieder mit einem Einladungscode.",
        feat_personality_title: "Persönlichkeit & Geschichte",
        feat_personality_desc: "Dokumentieren Sie den einzigartigen Charakter Ihres Tieres: Vorlieben, Ängste, Gewohnheiten und seine Geschichte.",

        health_tag: "Gesundheitsheft",
        health_title: "Die vollständige Krankenakte Ihres Tieres",
        health_subtitle: "Schluss mit verlorenen Papierunterlagen. Zentralisieren Sie alle Gesundheitsinformationen und verpassen Sie keinen Termin.",
        health_screen_title: "Gesundheitsheft",
        health_tab_vaccines: "Impfungen",
        health_tab_treatments: "Behandlungen",
        health_tab_visits: "Besuche",
        health_tab_weight: "Gewicht",
        health_status_valid: "✓ Aktuell",
        health_status_soon: "⏰ Bald fällig",
        health_rabies: "Tollwut",
        health_leukosis: "Leukose",
        health_next_1: "Nächste: 12. März 2026",
        health_next_2: "Nächste: 5. Juni 2025",
        health_next_3: "Nächste: 20. Jan. 2026",
        health_vaccines: "Impfungen",
        health_vaccines_desc: "Verfolgung von Daten, Chargen, Tierärzten und Status (aktuell, bald fällig, abgelaufen)",
        health_treatments: "Behandlungen",
        health_treatments_desc: "Antiparasitika, Entwurmungen und Medikamente mit automatischen Erinnerungen",
        health_visits: "Tierarztbesuche",
        health_visits_desc: "Vollständige Historie: Gründe, Diagnosen, Behandlungen und Kosten",
        health_weight: "Gewichtsverfolgung",
        health_weight_desc: "Entwicklungskurve mit Daten und Notizen zur Formkontrolle",

        journal_tag: "Tagebuch",
        journal_title: "Jeder Moment verdient es, bewahrt zu werden",
        journal_subtitle: "Erstellen Sie ein persönliches Tagebuch für Ihren Begleiter. Fotos, Stimmungen, Anekdoten... verlieren Sie keine Erinnerung.",
        journal_notes: "Notizen",
        journal_moments: "Momente",
        journal_health: "Gesundheit",
        journal_funny: "Lustig",
        journal_milestones: "Meilensteine",
        journal_mood_label: "Stimmung verfolgen:",
        mood_happy: "😊 Glücklich",
        mood_calm: "😌 Ruhig",
        mood_playful: "🎾 Verspielt",
        mood_tired: "😴 Müde",
        mood_sick: "🤒 Krank",
        mood_anxious: "😰 Ängstlich",
        journal_screen_title: "Max' Tagebuch",
        journal_entry_moment: "📸 Moment",
        journal_entry_health: "🏥 Gesundheit",
        journal_entry_funny: "😂 Lustig",
        journal_today: "Heute",
        journal_yesterday: "Gestern",
        journal_3days: "Vor 3 Tagen",
        journal_entry1_title: "Erstes Bad!",
        journal_entry1_text: "Max hat sein erstes Mal am Strand geliebt. Er hörte nicht auf zu rennen...",
        journal_entry1_mood: "😊 Glücklich",
        journal_entry2_title: "Kontrollbesuch",
        journal_entry2_text: "Alles in Ordnung! Der Tierarzt ist mit seinem Gewicht zufrieden.",
        journal_entry2_mood: "😌 Ruhig",
        journal_entry3_title: "Der Sockendieb",
        journal_entry3_text: "Wieder auf frischer Tat ertappt mit meiner Lieblingssocke!",
        journal_entry3_mood: "🎾 Verspielt",

        pets_tag: "Alle Ihre Begleiter",
        pets_title: "Einzigartige Aufmerksamkeit für jedes Tier",
        pets_subtitle: "Notes4Pets passt sich an alle Arten von Haustieren an. Jedes verdient die beste Betreuung.",
        pet_dogs: "Hunde",
        pet_dogs_desc: "Vom Chihuahua bis zur Deutschen Dogge",
        pet_cats: "Katzen",
        pet_cats_desc: "Von Perser bis Hauskatze",
        pet_rabbits: "Kaninchen",
        pet_rabbits_desc: "Zwerg, Widder oder Riese",
        pet_birds: "Vögel",
        pet_birds_desc: "Wellensittiche, Papageien und Kanarienvögel",
        pet_rodents: "Nagetiere",
        pet_rodents_desc: "Hamster, Meerschweinchen...",
        pet_other: "Und mehr",
        pet_other_desc: "Reptilien, Fische und andere",

        reminders_tag: "Erinnerungen",
        reminders_title: "Verpassen Sie nichts mehr",
        reminders_subtitle: "Intelligente Erinnerungen, die sich an Ihren Alltag anpassen. Wiederkehrend, einmalig, dringend — alles unter Kontrolle.",
        reminders_screen_title: "Erinnerungen",
        rem_vaccine_max: "Tollwut-Impfung — Max",
        rem_in_2_days: "In 2 Tagen",
        rem_urgent: "Dringend",
        rem_dewormer_luna: "Entwurmung — Luna",
        rem_in_1_week: "In 1 Woche",
        rem_annual_max: "Jahresbesuch — Max",
        rem_grooming_luna: "Fellpflege — Luna",
        rem_antiparasitic_max: "Antiparasitikum — Max",
        rem_completed: "Erledigt",
        rem_type_vaccines: "Impfungen",
        rem_type_treatments: "Behandlungen",
        rem_type_vet: "Tierarztbesuche",
        rem_type_meds: "Medikamente",
        rem_type_grooming: "Fellpflege",
        rem_type_custom: "Benutzerdefiniert",

        milestones_tag: "Meilensteine & Geburtstage",
        milestones_title: "Feiern Sie jeden Schritt",
        milestones_subtitle: "Erste Schritte, Geburtstage, Adoptionen... Notes4Pets feiert diese Momente mit Ihnen, inklusive Konfetti!",
        mile_birthdays: "Geburtstage",
        mile_birthdays_desc: "Automatische Feier mit Geburtstagskarte und Konfetti-Animation",
        mile_adoption: "Adoption",
        mile_adoption_desc: "Behalten Sie das Datum und die Geschichte der Ankunft in Ihrer Familie",
        mile_firsts: "Erste Male",
        mile_firsts_desc: "Erstes Bad, erster Spaziergang, erstes Spielzeug... jedes Erste zählt",
        mile_achievements: "Erfolge",
        mile_achievements_desc: "Fortschritte in der Erziehung, Wettbewerbe, Heldentaten... verewigen Sie die Siege",

        premium_title: "Auf das nächste Level",
        premium_subtitle: "Schalten Sie die volle Leistung von Notes4Pets frei mit unseren Premium- und Familien-Angeboten.",
        price_free: "Kostenlos",
        price_forever: "Für immer",
        price_1_pet: "1 Tier",
        price_health_record: "Gesundheitsheft",
        price_reminders: "Erinnerungen",
        price_limited_journal: "Begrenztes Tagebuch",
        price_1_photo: "1 Foto pro Eintrag",
        price_pdf_export: "PDF-Export",
        price_scan_prescriptions: "Rezept-Scan",
        price_family_share: "Familienfreigabe",
        price_start: "Loslegen",
        price_popular: "Beliebt",
        price_premium_price: '2,99€<span>/Mon.</span>',
        price_premium_period: "Oder 29,99€/Jahr",
        price_unlimited_pets: "Unbegrenzte Tiere",
        price_full_health: "Vollständiges Gesundheitsheft",
        price_advanced_reminders: "Erweiterte Erinnerungen",
        price_unlimited_journal: "Unbegrenztes Tagebuch",
        price_unlimited_photos: "Unbegrenzte Fotos",
        price_priority_support: "Prioritäts-Support",
        price_try_premium: "Premium testen",
        price_family: "Familie",
        price_family_price: '39,99€<span>/Jahr</span>',
        price_family_period: "Bis zu 5 Mitglieder",
        price_all_premium: "Alle Premium-Funktionen",
        price_5_members: "Max. 5 Mitglieder",
        price_invite_code: "Einladungscode",
        price_shared_access: "Geteilter Zugang",
        price_member_mgmt: "Mitgliederverwaltung",
        price_choose_family: "Familie wählen",

        lang_title: "Verfügbar in 4 Sprachen",
        lang_subtitle: "Notes4Pets spricht Ihre Sprache, egal wo Sie sind.",

        dl_title: "Bereit, für Ihre Begleiter zu sorgen?",
        dl_subtitle: "Laden Sie Notes4Pets kostenlos herunter und beginnen Sie noch heute mit dem digitalen Gesundheitsheft für Ihre Tiere.",
        dl_appstore: "Im App Store laden",
        dl_note: "Kostenlos — iOS 15.0 oder neuer",

        footer_tagline: "Das digitale Gesundheitsheft für Ihre Begleiter.",
        footer_app: "Anwendung",
        footer_pricing: "Preise",
        footer_legal: "Rechtliches",
        footer_terms: "Nutzungsbedingungen",
        footer_privacy: "Datenschutzrichtlinie",
        footer_legal_notices: "Impressum",
        footer_about: "Über uns",
        footer_copyright: "© 2026 Notes4Pets. Alle Rechte vorbehalten. Mit ❤️ für Ihre Tiere gemacht.",

        // Blog nav
        blog_nav_home: "Startseite",
        blog_nav_blog: "Blog",
        blog_nav_privacy: "Datenschutz",
        blog_nav_terms: "AGB",
        blog_nav_download: "Herunterladen",

        // Blog article
        blog_tag: "Kompletter Leitfaden",
        blog_h1: "Digitales Gesundheitsheft für Hund und Katze: Der komplette Leitfaden 2026",
        blog_date: "Veröffentlicht am 27. Februar 2026 · Lesezeit: 15 Min.",
        blog_s1_title: "1. Warum ein digitales Gesundheitsheft im Jahr 2026?",
        blog_s1_p1: "Allein in Frankreich gibt es über 15 Millionen Katzen und 7,5 Millionen Hunde. Europaweit teilen fast 90 Millionen Haushalte ihren Alltag mit einem Haustier. Diese vierbeinigen Begleiter nehmen einen immer wichtigeren Platz in unserem Leben ein, und ihre Gesundheit ist zu einem Hauptanliegen ihrer Besitzer geworden. Dennoch bleibt die medizinische Nachverfolgung oft veraltet: ein Papierheft, das verloren geht, Erinnerungsdaten, die vergessen werden, Informationen, die bei mehreren Tierärzten verstreut sind.",
        blog_s1_p2: "Die digitale Revolution hat unsere Art verändert, unsere eigene Gesundheit zu verwalten — Tracking-Apps, Online-Gesundheitsakten, Telemedizin. Es war nur natürlich, dass diese Transformation auch die Welt der Tiergesundheit erreicht. Das digitale Gesundheitsheft für Haustiere steht für diese Entwicklung: ein modernes, praktisches und vollständiges Werkzeug, das alle medizinischen Informationen Ihres Hundes, Ihrer Katze, Ihres Kaninchens oder Vogels in einer einzigen App auf Ihrem Smartphone bündelt.",
        blog_s1_p3: "In diesem umfassenden Leitfaden werden wir im Detail untersuchen, was ein digitales Gesundheitsheft ist, warum es das traditionelle Papierheft übertrifft, und welche 10 konkreten Vorteile es zu einem unverzichtbaren Werkzeug für jeden Tierhalter im Jahr 2026 machen. Ob Sie einen Welpen haben, der gerade in Ihre Familie gekommen ist, oder eine alte Katze, die Sie seit Jahren begleiten — dieser Leitfaden hilft Ihnen zu verstehen, wie Technologie Ihnen bei der Pflege Ihrer Begleiter helfen kann.",
        blog_s2_title: "2. Was ist ein digitales Gesundheitsheft für Tiere?",
        blog_s2_p1: "Ein digitales Gesundheitsheft für Tiere ist eine mobile Anwendung, die das traditionelle Impfheft aus Papier ersetzt — oder ergänzt. Es ist eine echte digitale Gesundheitsakte, die es Ihnen ermöglicht, alle Informationen zur Gesundheit und zum Wohlbefinden Ihres Haustieres jederzeit zu zentralisieren, zu organisieren und einzusehen.",
        blog_s2_p2: "Im Gegensatz zum einfachen Papierheft, das sich oft auf Impfungen und einige handschriftliche Notizen beschränkt, bietet ein digitales Gesundheitsheft einen viel breiteren Funktionsumfang. Folgendes enthält eine vollständige Tier-Gesundheits-App typischerweise:",
        blog_s2_l1: "Vollständiges Tierprofil: Name, Art, Rasse, Geburtsdatum, Gewicht, Chipnummer, Charakter und Geschichte",
        blog_s2_l2: "Impfhistorie mit Daten, Chargen, Impfstoffnamen und Auffrischungsterminen",
        blog_s2_l3: "Behandlungsverfolgung: Antiparasitika, Entwurmungen, aktuelle Medikamente",
        blog_s2_l4: "Tierarztbesuch-Historie mit Gründen, Diagnosen und Kosten",
        blog_s2_l5: "Gewichts- und Wachstumsverfolgung mit Entwicklungskurve",
        blog_s2_l6: "Automatisches Erinnerungssystem, damit Sie nie einen Termin vergessen",
        blog_s2_l7: "Ein Tagebuch mit Fotos und Stimmungsverfolgung",
        blog_s2_l8: "Die Möglichkeit, ein vollständiges PDF zum Teilen mit dem Tierarzt zu exportieren",
        blog_s3_title: "3. Die Grenzen des traditionellen Papierhefts",
        blog_s3_p1: "Das Papier-Gesundheitsheft hat jahrzehntelang gute Dienste geleistet. Aber seien wir ehrlich: Im Jahr 2026 zeigt es seine Grenzen. Wie viele Tierbesitzer können behaupten, genau zu wissen, wo sich das Impfheft ihres Begleiters gerade befindet? Hier sind die Haupteinschränkungen des Papierformats, die immer mehr Besitzer zum Digitalen treiben:",
        blog_s3_l1: "<strong>Verlust- und Beschädigungsrisiko</strong> — Ein Papierheft kann bei einem Umzug verloren gehen, vom Hund selbst zerkaut oder einfach in einer Schublade vergessen werden. Einmal verloren, sind alle Informationen damit verloren.",
        blog_s3_l2: "<strong>Keine automatischen Erinnerungen</strong> — Das Papierheft klingelt nicht, um Sie daran zu erinnern, dass die Auffrischungsimpfung Ihres Hundes in 3 Tagen fällig ist. Sie müssen sich daran erinnern, die Daten manuell zu überprüfen, was oft zu Versäumnissen führt.",
        blog_s3_l3: "<strong>Schwierigkeit beim Teilen</strong> — Wenn Sie den Tierarzt wechseln, mit Ihrem Tier in den Urlaub fahren oder ein Familienmitglied den Hund zum Tierarzt bringen muss, ist das Teilen von Informationen kompliziert.",
        blog_s3_l4: "<strong>Begrenzter Platz</strong> — Die Seiten eines Papierhefts sind schnell voll. Es ist unmöglich, Fotos einzufügen, eine Gewichtskurve zu zeichnen oder ein detailliertes Tagebuch über das Leben Ihres Begleiters zu führen.",
        blog_s3_l5: "<strong>Nicht immer dabei</strong> — Bei einem tierärztlichen Notfall haben Sie das Papierheft möglicherweise nicht bei sich. Mit einer App reicht Ihr Smartphone, um auf alle Informationen zuzugreifen.",
        blog_s3_l6: "<strong>Keine Analyse oder Verfolgung</strong> — Ein Papierheft ermöglicht es nicht, die Gewichtsentwicklung Ihres Tieres zu visualisieren, Behandlungen im Zeitverlauf zu vergleichen oder Gesundheitstrends zu erkennen.",
        blog_s3_l7: "<strong>Keine Sicherung</strong> — Wenn das Heft zerstört wird, gibt es keine Kopie. Ein digitales Heft wird in der Cloud gesichert und kann jederzeit wiederhergestellt werden.",
        blog_s4_title: "4. Die 10 Vorteile des digitalen Gesundheitshefts",
        blog_s4_intro: "Nachdem wir die Grenzen des Papiers identifiziert haben, lassen Sie uns die 10 wichtigsten Vorteile im Detail erkunden, die das digitale Gesundheitsheft zu einem unverzichtbaren Werkzeug für jeden Tierbesitzer machen, dem die Gesundheit seines Begleiters am Herzen liegt.",
        blog_s4_1_title: "4.1. Zentralisierung aller Gesundheitsdaten",
        blog_s4_1_p: "Der erste und vielleicht grundlegendste Vorteil ist die Zentralisierung aller Gesundheitsinformationen Ihres Tieres an einem Ort. Impfungen, antiparasitäre Behandlungen, Entwurmungen, Tierarztbesuche, Testergebnisse, vergangene Operationen — alles ist in einer klaren und organisierten Oberfläche zusammengefasst. Schluss mit verstreuten Informationen zwischen dem Papierheft, Tierarztrechnungen in der Schublade und Notizen auf Post-its. In Sekunden greifen Sie auf die vollständige Krankengeschichte Ihres Hundes oder Ihrer Katze zu, perfekt strukturiert und leicht durchsuchbar.",
        blog_s4_2_title: "4.2. Überall und jederzeit zugänglich",
        blog_s4_2_p: "Ihr Smartphone ist immer in Ihrer Tasche. Das bedeutet, dass das digitale Gesundheitsheft Ihres Tieres Sie überallhin begleitet: im Urlaub, beim neuen Tierarzt, bei einem Notfall in der Nacht oder einfach beim Spaziergang, wenn jemand nach Ihrem Begleiter fragt. Kein Grund mehr, nach Hause zu gehen, um das Papierheft zu suchen. Ob in Frankreich, Spanien oder Deutschland — alle Informationen sind da, in der Cloud synchronisiert und sofort von Ihrem Telefon aus zugänglich.",
        blog_s4_3_title: "4.3. Automatische Impf- und Behandlungserinnerungen",
        blog_s4_3_p: "Dies ist wahrscheinlich der am meisten geschätzte Vorteil für Tierbesitzer. Ein digitales Gesundheitsheft sendet Ihnen Push-Benachrichtigungen, um Sie an wichtige Termine zu erinnern: Tollwut-Auffrischung, Entwurmungserneuerung, nächster Tierarzttermin, Antiparasitikum-Erneuerung. Diese intelligenten Erinnerungen passen sich dem Pflegekalender Ihres Tieres an und können wiederkehrend sein (alle 3 Monate für die Entwurmung zum Beispiel). Dank ihnen werden Sie nie wieder einen wichtigen medizinischen Termin für Ihren Hund oder Ihre Katze verpassen.",
        blog_s4_4_title: "4.4. Gewichts- und Wachstumsverfolgung",
        blog_s4_4_p: "Die Gewichtsverfolgung ist ein Schlüsselindikator für die Gesundheit Ihres Tieres. Ein übergewichtiger Hund oder eine übergewichtige Katze ist vielen Risiken ausgesetzt: Diabetes, Gelenkprobleme, Herzerkrankungen. Mit einem digitalen Gesundheitsheft erfassen Sie regelmäßig das Gewicht Ihres Begleiters und visualisieren seine Entwicklung anhand einer grafischen Kurve. So können Sie schnell eine abnormale Gewichtszunahme oder -abnahme erkennen und mit Ihrem Tierarzt besprechen. Für Welpen und Kätzchen ist diese Verfolgung besonders wertvoll, um sicherzustellen, dass das Wachstum normal verläuft.",
        blog_s4_5_title: "4.5. Vollständige Impf- und Behandlungshistorie",
        blog_s4_5_p: "Wann war die letzte Tollwutimpfung Ihres Hundes? Welches Entwurmungsmittel haben Sie vor 6 Monaten verwendet? Diese Fragen werden mit einem digitalen Heft trivial. Jede Impfung, jede Behandlung wird mit Datum, Produktname, Chargennummer, Tierarztname und nächstem Auffrischungsdatum erfasst. Die Historie ist vollständig, mit einem Klick einsehbar und wird nie gelöscht. Wenn Sie den Tierarzt wechseln, können Sie die gesamte Krankenakte Ihres Tieres in Sekunden vorlegen.",
        blog_s4_6_title: "4.6. Einfaches Teilen mit dem Tierarzt (PDF-Export)",
        blog_s4_6_p: "Der PDF-Export ist eine besonders nützliche Funktion des digitalen Gesundheitshefts. Mit einem Klick erstellen Sie ein professionelles Dokument mit der gesamten Krankenakte Ihres Tieres: Profil, Impfungen, Behandlungen, Besuche, Gewichtskurve. Dieses PDF kann per E-Mail an Ihren Tierarzt, eine Tierpension oder eine Versicherung gesendet werden. Es ist auch unverzichtbar, wenn Sie mit Ihrem Tier ins Ausland reisen und eine vollständige Impfhistorie vorlegen müssen. Das Dokument ist klar, gut formatiert und enthält alle wesentlichen Informationen.",
        blog_s4_7_title: "4.7. Das persönliche Tagebuch Ihres Tieres",
        blog_s4_7_p: "Über den medizinischen Aspekt hinaus bietet ein modernes digitales Gesundheitsheft ein echtes Tagebuch, um die Momente im Leben Ihres Begleiters festzuhalten. Erster Spaziergang, erstes Bad, Begegnung mit einem anderen Tier, lustiger Moment, wichtiger Meilenstein — jede Erinnerung kann mit Fotos, Text und sogar der Stimmung Ihres Tieres an diesem Tag festgehalten werden. Dieses Tagebuch schafft eine einzigartige Erzählung vom Leben Ihres Hundes oder Ihrer Katze, die Sie jahrelang mit Rührung nachlesen können. Es ist auch ein wertvolles Werkzeug, um Verhaltensänderungen zu notieren, die auf ein Gesundheitsproblem hinweisen könnten.",
        blog_s4_8_title: "4.8. Familienfreigabe",
        blog_s4_8_p: "Ihr Tier lebt nicht isoliert — die ganze Familie kümmert sich darum. Die Familienfreigabe ermöglicht es jedem Haushaltsmitglied, auf die Gesundheitsinformationen zuzugreifen und zur Nachverfolgung beizutragen. Ihr Partner bringt die Katze zum Tierarzt? Er hat Zugang zur vollständigen Historie. Ihre Kinder möchten ein Foto ins Tagebuch einfügen? Sie können es. Ein Einladungscode ermöglicht es, bis zu 5 Mitglieder zur Familie hinzuzufügen, jeder mit seinem eigenen Konto. So ist jeder informiert und kann bei Bedarf handeln, auch wenn Sie nicht verfügbar sind.",
        blog_s4_9_title: "4.9. Datensicherheit und Backup",
        blog_s4_9_p: "Im Gegensatz zu einem Papierheft, das zerstört, verloren oder gestohlen werden kann, speichert ein digitales Gesundheitsheft Ihre Daten sicher in der Cloud. Die Informationen sind verschlüsselt, durch Ihre persönliche Authentifizierung (E-Mail, Apple-ID oder Google-Konto) geschützt und werden automatisch gesichert. Selbst wenn Sie Ihr Telefon verlieren oder das Gerät wechseln, stellen Sie sofort alle Daten Ihrer Tiere wieder her, indem Sie sich erneut anmelden. Strenge Sicherheitsregeln stellen sicher, dass nur Sie und Ihre autorisierten Familienmitglieder auf diese Informationen zugreifen können.",
        blog_s4_10_title: "4.10. Erhebliche Zeitersparnis",
        blog_s4_10_p: "Letztendlich spart Ihnen das digitale Gesundheitsheft täglich wertvolle Zeit. Kein Suchen mehr nach dem Papierheft, kein Durchblättern von Seiten, um eine Information zu finden, kein manuelles Notieren von Erinnerungsdaten in Ihrem Kalender und kein Neuaufbau der Krankengeschichte Ihres Tieres bei jeder neuen Konsultation. In Sekunden greifen Sie auf alle Informationen zu, exportieren ein PDF und erhalten automatisch Erinnerungen. Diese Zeitersparnis führt zu einer besseren Verwaltung der Gesundheit Ihres Tieres und weniger Stress für Sie.",
        blog_cta_title: "Bereit, das Gesundheitsheft Ihres Tieres zu digitalisieren?",
        blog_cta_text: "Laden Sie Notes4Pets kostenlos herunter und starten Sie noch heute.",
        blog_cta_button: "Notes4Pets herunterladen",
        blog_s5_title: "5. Digitales Heft für Hunde: spezifische Anwendungsfälle",
        blog_s5_p1: "Der Hund ist das Haustier, das die regelmäßigste medizinische Nachsorge erfordert. Zwischen Pflichtimpfungen, vorbeugenden Behandlungen und Kontrollbesuchen kann der Pflegekalender eines Hundes schnell komplex werden. Ein digitales Gesundheitsheft eignet sich besonders für Hundebesitzer, da es alle diese Aspekte effizient verwaltet, ohne Gefahr zu laufen, einen wichtigen Termin zu verpassen.",
        blog_s5_p2: "Hier sind die spezifischen Anwendungsfälle des digitalen Gesundheitshefts für Hundebesitzer:",
        blog_s5_l1: "<strong>Vollständiger Impfkalender</strong> — Verfolgung von Tollwut-, Staupe-, Hepatitis- (DHPP), Leptospirose- und Piroplasmose-Impfungen mit automatischen jährlichen Erinnerungen",
        blog_s5_l2: "<strong>Regelmäßige Entwurmung</strong> — Erinnerungen alle 3 bis 6 Monate je nach Alter und Lebensstil (4 Mal pro Jahr für Hunde, die oft draußen sind)",
        blog_s5_l3: "<strong>Antiparasitika</strong> — Verfolgung von Floh- und Zeckenbehandlungen mit monatlicher Erneuerung in der warmen Jahreszeit",
        blog_s5_l4: "<strong>Gewichtsverfolgung</strong> — Unverzichtbar für große Rassen (Labrador, Golden Retriever, Deutscher Schäferhund), die zu Übergewicht neigen",
        blog_s5_l5: "<strong>Kastrations-/Sterilisationsverfolgung</strong> — OP-Datum, postoperative Nachsorge, Auswirkungen auf Gewicht und Verhalten",
        blog_s5_l6: "<strong>Europäischer Pass</strong> — Erfassung der Chipnummer, der Pflichtimpfungen für Reisen und der Gesundheitskontrollen",
        blog_s6_title: "6. Digitales Heft für Katzen: spezifische Anwendungsfälle",
        blog_s6_p1: "Die Katze ist ein unabhängiges Tier, dessen Gesundheit ebenso viel Aufmerksamkeit verdient. Ob Ihre Katze eine Wohnungskatze ist oder regelmäßig nach draußen geht, ihre Bedürfnisse in Bezug auf die medizinische Nachsorge sind unterschiedlich. Ein digitales Gesundheitsheft ermöglicht es, die Nachverfolgung an den Lebensstil Ihrer Katze anzupassen und nie die artspezifischen Pflegetermine zu vergessen.",
        blog_s6_p2: "Hier sind die spezifischen Anwendungsfälle des digitalen Gesundheitshefts für Katzenbesitzer:",
        blog_s6_l1: "<strong>Wichtige Impfungen</strong> — Verfolgung von Katzenseuche (Panleukopenie), Katzenschnupfen und Katzenleukämie (FeLV) mit jährlichen oder dreijährlichen Auffrischungen je nach Protokoll",
        blog_s6_l2: "<strong>FIV/FeLV-Test</strong> — Erfassung der Screening-Ergebnisse für das feline Immundefizienz-Virus und Leukämie",
        blog_s6_l3: "<strong>Wohnungskatze vs. Freigänger</strong> — Anpassung des Pflegeplans, je nachdem ob die Katze rausgeht oder nicht (mehr Entwurmungen und Antiparasitika für Freigänger)",
        blog_s6_l4: "<strong>Nieren- und Harnwegsüberwachung</strong> — Katzen sind besonders anfällig für Nierenprobleme; Gewichtsverfolgung und Tierarztbesuche helfen, frühe Anzeichen zu erkennen",
        blog_s6_l5: "<strong>Sterilisation und hormonelle Überwachung</strong> — Sterilisationsdatum, postoperative Verhaltensüberwachung, Gewichtsmanagement nach der OP",
        blog_s6_l6: "<strong>Verhaltens-Tagebuch</strong> — Verfolgung von Veränderungen in Stimmung, Appetit oder Verhalten, die auf ein Gesundheitsproblem hinweisen können",
        blog_s7_title: "7. Wie wählt man seine Tier-Gesundheits-App?",
        blog_s7_p1: "Angesichts des wachsenden Angebots an Tier-Gesundheits-Apps ist es wichtig zu wissen, welche Kriterien man bevorzugen sollte. Nicht alle Apps sind gleich, und einige Funktionen sind für eine wirklich effektive Nachverfolgung unerlässlich. Hier sind die wichtigsten Kriterien, die Sie vor der Wahl Ihrer digitalen Gesundheitsheft-App prüfen sollten:",
        blog_s7_l1: "<strong>Benutzerfreundlichkeit</strong> — Die Oberfläche muss intuitiv und angenehm sein. Wenn die App kompliziert ist, werden Sie sie nicht regelmäßig nutzen.",
        blog_s7_l2: "<strong>Multi-Tier-Verwaltung</strong> — Wenn Sie mehrere Tiere haben, muss die App separate Profile für jedes Tier ermöglichen.",
        blog_s7_l3: "<strong>Erinnerungen und Benachrichtigungen</strong> — Intelligente, anpassbare Erinnerungen sind unerlässlich, um nie eine Impfung oder Behandlung zu vergessen.",
        blog_s7_l4: "<strong>PDF-Export</strong> — Die Möglichkeit, ein vollständiges Dokument zum Teilen mit dem Tierarzt zu erstellen, ist ein großer Vorteil.",
        blog_s7_l5: "<strong>Familienfreigabe</strong> — Wenn mehrere Personen sich um das Tier kümmern, ist das Teilen von Daten in der Familie wesentlich.",
        blog_s7_l6: "<strong>Datensicherheit</strong> — Stellen Sie sicher, dass die App einen sicheren, verschlüsselten Speicher zum Schutz der Informationen Ihres Tieres verwendet.",
        blog_s7_l7: "<strong>Mehrsprachig</strong> — Wenn Sie reisen oder Ihre Familie international ist, ist eine in mehreren Sprachen verfügbare App ein nicht zu unterschätzender Vorteil.",
        blog_s7_l8: "<strong>Unterstützung mehrerer Tierarten</strong> — Hunde, Katzen, aber auch Kaninchen, Vögel, Nagetiere... Eine vielseitige App erspart Ihnen die Vervielfachung von Werkzeugen.",
        blog_s7_l9: "<strong>Preis-Leistungs-Verhältnis</strong> — Bevorzugen Sie eine App mit einer funktionalen kostenlosen Version und einem vernünftigen Premium-Abonnement für erweiterte Funktionen.",
        blog_s8_title: "8. Notes4Pets: die komplette Lösung für Ihre Begleiter",
        blog_s8_p1: "Notes4Pets wurde von Tierliebhabern entwickelt, um alle in diesem Leitfaden besprochenen Bedürfnisse zu erfüllen. Es ist eine moderne und elegante iOS-App, die Ihr Smartphone in ein echtes digitales Gesundheitsheft für alle Ihre Haustiere verwandelt. Ob Hund, Katze, Kaninchen, Vogel, Nagetier oder anderes Tier — Notes4Pets passt sich jeder Art mit personalisierter Nachverfolgung an.",
        blog_s8_p2: "Die App bietet ein vollständiges Gesundheitsheft mit Impf-, Behandlungs- und Tierarztbesuch-Tracking, ein intelligentes Erinnerungssystem mit Push-Benachrichtigungen, ein persönliches Tagebuch mit Fotos und Stimmungsverfolgung, professionellen PDF-Export und Familienfreigabe für bis zu 5 Mitglieder zur gemeinsamen Tierpflege. Verfügbar auf Französisch, Englisch, Deutsch und Spanisch, passt sich Notes4Pets automatisch an die Sprache Ihres Geräts an.",
        blog_s8_p3: "Notes4Pets ist für 1 Tier mit Grundfunktionen kostenlos. Das Premium-Abonnement für nur 2,99€/Monat (oder 29,99€/Jahr) schaltet unbegrenzte Tiere, vollständiges Tagebuch, PDF-Export, Cloud-Backup und Werbefreiheit frei. Der Familienplan für 39,99€/Jahr ermöglicht es, alle Premium-Funktionen mit bis zu 5 Mitgliedern zu teilen. Eine minimale Investition für Seelenfrieden und das Wohlbefinden Ihrer Begleiter.",
        blog_s9_title: "9. Häufig gestellte Fragen",
        blog_faq1_q: "Was ist ein digitales Gesundheitsheft für Tiere?",
        blog_faq1_a: "Ein digitales Gesundheitsheft ist eine mobile Anwendung, die alle medizinischen Informationen Ihres Tieres zentralisiert: Impfungen, Behandlungen, Tierarztbesuche, Gewicht und Erinnerungen. Es ersetzt das traditionelle Papierheft mit mehr Funktionen wie automatischen Erinnerungen, Familienfreigabe und PDF-Export.",
        blog_faq2_q: "Ist Notes4Pets kostenlos?",
        blog_faq2_a: "Ja, Notes4Pets bietet eine kostenlose Version, mit der Sie 1 Tier mit dem grundlegenden Gesundheitsheft und Erinnerungen verwalten können. Die Premium-Version für 2,99€/Monat schaltet unbegrenzte Tiere, PDF-Export, vollständiges Tagebuch mit Fotos, Cloud-Backup und Familienfreigabe frei.",
        blog_faq3_q: "Ersetzt ein digitales Heft das Papier-Impfheft?",
        blog_faq3_a: "Das digitale Heft ist eine ideale Ergänzung zum offiziellen Impfheft. Es hilft Ihnen, nie eine Auffrischung zu vergessen und die Krankengeschichte leicht mit Ihrem Tierarzt zu teilen. Einige Länder verlangen immer noch das Papierheft oder den europäischen Pass für internationale Reisen mit Ihrem Tier.",
        blog_faq4_q: "Sind meine Daten sicher?",
        blog_faq4_a: "Ja, Notes4Pets verwendet Firebase mit strengen Sicherheitsregeln. Ihre Daten sind verschlüsselt, in der Cloud gesichert und nur für Sie und die von Ihnen autorisierten Familienmitglieder zugänglich. Sie können Ihr Konto und alle Ihre Daten jederzeit in den App-Einstellungen löschen.",
        blog_faq5_q: "Kann ich mehrere Tiere verwalten?",
        blog_faq5_a: "Die kostenlose Version ermöglicht die Verwaltung von 1 Tier. Mit Notes4Pets Premium können Sie eine unbegrenzte Anzahl von Tieren hinzufügen: Hunde, Katzen, Kaninchen, Vögel, Nagetiere und mehr. Jedes Tier hat ein eigenes Profil mit einem speziellen Gesundheitsheft, Tagebuch und Erinnerungen.",
        blog_s10_title: "10. Fazit: Digitaltechnik im Dienste des Tierwohls",
        blog_s10_p1: "Im Jahr 2026 ist das digitale Gesundheitsheft kein Gadget für Technikbegeisterte mehr — es ist ein praktisches und unverzichtbares Werkzeug für jeden Tierbesitzer, der seinem Begleiter die beste medizinische Versorgung bieten möchte. Datenzentralisierung, automatische Erinnerungen, Familienfreigabe, PDF-Export, Tagebuch... die Vorteile sind zahlreich und konkret. Ob Hund, Katze oder anderes Tier — der Umstieg auf Digital ermöglicht es Ihnen, Zeit zu sparen, Versäumnisse zu vermeiden und eine vollständige Aufzeichnung über Leben und Gesundheit Ihres Begleiters zu führen.",
        blog_s10_p2: "Notes4Pets ist kostenlos im App Store erhältlich. Laden Sie die App jetzt herunter und entdecken Sie, wie einfach es ist, das Gesundheitsheft Ihrer Tiere von Ihrem iPhone aus zu verwalten. Ihre Begleiter verdienen das Beste — und das Beste beginnt mit einer organisierten, zugänglichen und modernen Gesundheitsverfolgung.",
        blog_back_home: "← Zurück zur Startseite",
        blog_download_cta: "Notes4Pets herunterladen"
    },

    es: {
        nav_features: "Funciones",
        nav_health: "Cartilla de salud",
        nav_journal: "Diario",
        nav_pets: "Mascotas",
        nav_download: "Descargar",

        hero_badge: "Disponible en iOS",
        hero_title: 'La cartilla de salud <span class="gradient-text">digital</span> para tus compañeros',
        hero_subtitle: "Sigue la salud, los recuerdos y el bienestar de tus mascotas. Todo lo que necesitas, en una sola aplicación magnífica.",
        hero_cta: "Descargar la app",
        hero_discover: "Descubrir",
        stat_species: "Especies soportadas",
        stat_languages: "Idiomas",
        stat_memories: "Recuerdos",

        screen_greeting: "Hola, Marie 👋",
        screen_subtitle: "Tus compañeros te esperan",
        screen_age_3: "3 años",
        screen_age_2: "2 años",
        screen_breed_siamese: "Siamés",
        screen_vaccine_max: "Vacuna — Max",
        screen_in_3_days: "En 3 días",

        float_health: "Salud",
        float_journal: "Diario",
        float_reminders: "Recordatorios",

        features_tag: "Funciones",
        features_title: "Todo para la felicidad de tus animales",
        features_subtitle: "Un conjunto completo de herramientas diseñadas con amor para cuidar de tus compañeros cada día.",
        feat_health_title: "Cartilla de salud",
        feat_health_desc: "Vacunas, tratamientos, visitas al veterinario y seguimiento del peso. Todo el expediente médico en un solo lugar.",
        feat_journal_title: "Diario personal",
        feat_journal_desc: "Captura cada momento especial con fotos, estados de ánimo y etiquetas. Un verdadero diario de tus compañeros.",
        feat_reminders_title: "Recordatorios inteligentes",
        feat_reminders_desc: "No vuelvas a olvidar una vacuna o una cita. Recordatorios recurrentes con notificaciones push.",
        feat_pdf_title: "Exportar PDF",
        feat_pdf_desc: "Genera una cartilla de salud completa en PDF para compartir con tu veterinario en un clic.",
        feat_family_title: "Compartir en familia",
        feat_family_desc: "Comparte las fichas de tus animales con toda la familia. Hasta 5 miembros con un código de invitación.",
        feat_personality_title: "Personalidad e historia",
        feat_personality_desc: "Documenta el carácter único de tu animal: gustos, miedos, costumbres y su historia personal.",

        health_tag: "Cartilla de salud",
        health_title: "El expediente médico completo de tu animal",
        health_subtitle: "Se acabaron las cartillas de papel perdidas. Centraliza toda la información de salud y no pierdas ninguna cita.",
        health_screen_title: "Cartilla de salud",
        health_tab_vaccines: "Vacunas",
        health_tab_treatments: "Tratamientos",
        health_tab_visits: "Visitas",
        health_tab_weight: "Peso",
        health_status_valid: "✓ Al día",
        health_status_soon: "⏰ Pronto",
        health_rabies: "Rabia",
        health_leukosis: "Leucosis",
        health_next_1: "Próxima: 12 marzo 2026",
        health_next_2: "Próxima: 5 junio 2025",
        health_next_3: "Próxima: 20 ene. 2026",
        health_vaccines: "Vacunas",
        health_vaccines_desc: "Seguimiento de fechas, lotes, veterinarios y estados (al día, próxima, vencida)",
        health_treatments: "Tratamientos",
        health_treatments_desc: "Antiparasitarios, desparasitantes y medicamentos con recordatorios automáticos",
        health_visits: "Visitas veterinarias",
        health_visits_desc: "Historial completo: motivos, diagnósticos, tratamientos y costos",
        health_weight: "Seguimiento del peso",
        health_weight_desc: "Curva de evolución con fechas y notas para seguir la forma",

        journal_tag: "Diario",
        journal_title: "Cada momento merece ser guardado",
        journal_subtitle: "Crea un diario personal para tu compañero. Fotos, estados de ánimo, anécdotas... no pierdas ningún recuerdo.",
        journal_notes: "Notas",
        journal_moments: "Momentos",
        journal_health: "Salud",
        journal_funny: "Gracioso",
        journal_milestones: "Hitos",
        journal_mood_label: "Sigue el ánimo:",
        mood_happy: "😊 Feliz",
        mood_calm: "😌 Tranquilo",
        mood_playful: "🎾 Juguetón",
        mood_tired: "😴 Cansado",
        mood_sick: "🤒 Enfermo",
        mood_anxious: "😰 Ansioso",
        journal_screen_title: "Diario de Max",
        journal_entry_moment: "📸 Momento",
        journal_entry_health: "🏥 Salud",
        journal_entry_funny: "😂 Gracioso",
        journal_today: "Hoy",
        journal_yesterday: "Ayer",
        journal_3days: "Hace 3 días",
        journal_entry1_title: "¡Primer baño!",
        journal_entry1_text: "A Max le encantó su primera vez en la playa. No paraba de correr...",
        journal_entry1_mood: "😊 Feliz",
        journal_entry2_title: "Visita de control",
        journal_entry2_text: "¡Todo bien! El veterinario está satisfecho con su peso.",
        journal_entry2_mood: "😌 Tranquilo",
        journal_entry3_title: "El ladrón de calcetines",
        journal_entry3_text: "¡Atrapado de nuevo con mi calcetín favorito!",
        journal_entry3_mood: "🎾 Juguetón",

        pets_tag: "Todos tus compañeros",
        pets_title: "Una atención única para cada animal",
        pets_subtitle: "Notes4Pets se adapta a todos los tipos de mascotas. Cada uno merece el mejor seguimiento.",
        pet_dogs: "Perros",
        pet_dogs_desc: "Del chihuahua al gran danés",
        pet_cats: "Gatos",
        pet_cats_desc: "Del persa al gato callejero",
        pet_rabbits: "Conejos",
        pet_rabbits_desc: "Enano, belier o gigante",
        pet_birds: "Aves",
        pet_birds_desc: "Periquitos, loros y canarios",
        pet_rodents: "Roedores",
        pet_rodents_desc: "Hámsters, cobayas...",
        pet_other: "Y más",
        pet_other_desc: "Reptiles, peces y otros",

        reminders_tag: "Recordatorios",
        reminders_title: "No te pierdas nada",
        reminders_subtitle: "Recordatorios inteligentes que se adaptan a tu rutina. Recurrentes, puntuales, urgentes — todo bajo control.",
        reminders_screen_title: "Recordatorios",
        rem_vaccine_max: "Vacuna Rabia — Max",
        rem_in_2_days: "En 2 días",
        rem_urgent: "Urgente",
        rem_dewormer_luna: "Desparasitante — Luna",
        rem_in_1_week: "En 1 semana",
        rem_annual_max: "Visita anual — Max",
        rem_grooming_luna: "Peluquería — Luna",
        rem_antiparasitic_max: "Antiparasitario — Max",
        rem_completed: "Completado",
        rem_type_vaccines: "Vacunas",
        rem_type_treatments: "Tratamientos",
        rem_type_vet: "Visitas véto",
        rem_type_meds: "Medicamentos",
        rem_type_grooming: "Peluquería",
        rem_type_custom: "Personalizado",

        milestones_tag: "Hitos y cumpleaños",
        milestones_title: "Celebra cada etapa",
        milestones_subtitle: "Primeros pasos, cumpleaños, adopciones... Notes4Pets celebra estos momentos contigo, ¡con confeti incluido!",
        mile_birthdays: "Cumpleaños",
        mile_birthdays_desc: "Celebración automática con tarjeta de cumpleaños y animación de confeti",
        mile_adoption: "Adopción",
        mile_adoption_desc: "Guarda en la memoria la fecha y la historia de la llegada a tu familia",
        mile_firsts: "Primeras veces",
        mile_firsts_desc: "Primer baño, primer paseo, primer juguete... cada primera vez cuenta",
        mile_achievements: "Logros",
        mile_achievements_desc: "Progresos en educación, concursos, hazañas... inmortaliza las victorias",

        premium_title: "Pasa al siguiente nivel",
        premium_subtitle: "Desbloquea todo el poder de Notes4Pets con nuestras ofertas Premium y Familia.",
        price_free: "Gratuito",
        price_forever: "Para siempre",
        price_1_pet: "1 mascota",
        price_health_record: "Cartilla de salud",
        price_reminders: "Recordatorios",
        price_limited_journal: "Diario limitado",
        price_1_photo: "1 foto por entrada",
        price_pdf_export: "Exportar PDF",
        price_scan_prescriptions: "Escaneo de recetas",
        price_family_share: "Compartir en familia",
        price_start: "Empezar",
        price_popular: "Popular",
        price_premium_price: '2,99€<span>/mes</span>',
        price_premium_period: "O 29,99€/año",
        price_unlimited_pets: "Mascotas ilimitadas",
        price_full_health: "Cartilla de salud completa",
        price_advanced_reminders: "Recordatorios avanzados",
        price_unlimited_journal: "Diario ilimitado",
        price_unlimited_photos: "Fotos ilimitadas",
        price_priority_support: "Soporte prioritario",
        price_try_premium: "Probar Premium",
        price_family: "Familia",
        price_family_price: '39,99€<span>/año</span>',
        price_family_period: "Hasta 5 miembros",
        price_all_premium: "Todo el Premium",
        price_5_members: "5 miembros máx.",
        price_invite_code: "Código de invitación",
        price_shared_access: "Acceso compartido",
        price_member_mgmt: "Gestión de miembros",
        price_choose_family: "Elegir Familia",

        lang_title: "Disponible en 4 idiomas",
        lang_subtitle: "Notes4Pets habla tu idioma, estés donde estés.",

        dl_title: "¿Listo para cuidar de tus compañeros?",
        dl_subtitle: "Descarga Notes4Pets gratis y empieza a crear la cartilla de salud digital de tus animales hoy mismo.",
        dl_appstore: "Descargar en el App Store",
        dl_note: "Gratuito — iOS 15.0 o superior",

        footer_tagline: "La cartilla de salud digital para tus compañeros.",
        footer_app: "Aplicación",
        footer_pricing: "Precios",
        footer_legal: "Legal",
        footer_terms: "Condiciones de uso",
        footer_privacy: "Política de privacidad",
        footer_legal_notices: "Avisos legales",
        footer_about: "Acerca de",
        footer_copyright: "© 2026 Notes4Pets. Todos los derechos reservados. Hecho con ❤️ para tus mascotas.",

        // Blog nav
        blog_nav_home: "Inicio",
        blog_nav_blog: "Blog",
        blog_nav_privacy: "Privacidad",
        blog_nav_terms: "Términos",
        blog_nav_download: "Descargar",

        // Blog article
        blog_tag: "Guía completa",
        blog_h1: "Cartilla de salud digital para perro y gato: la guía completa 2026",
        blog_date: "Publicado el 27 de febrero de 2026 · Tiempo de lectura: 15 min",
        blog_s1_title: "1. ¿Por qué una cartilla de salud digital en 2026?",
        blog_s1_p1: "Solo en Francia hay más de 15 millones de gatos y 7,5 millones de perros. En toda Europa, casi 90 millones de hogares comparten su día a día con una mascota. Estos compañeros de cuatro patas ocupan un lugar cada vez más importante en nuestras vidas, y su salud se ha convertido en una preocupación fundamental para sus dueños. Sin embargo, el seguimiento médico sigue siendo a menudo arcaico: una cartilla de papel que se pierde, fechas de recordatorio que se olvidan, información dispersa entre varios veterinarios.",
        blog_s1_p2: "La revolución digital ha transformado nuestra manera de gestionar nuestra propia salud — aplicaciones de seguimiento, historiales médicos en línea, telemedicina. Era natural que esta transformación llegara también al mundo de la salud animal. La cartilla de salud digital para mascotas representa esta evolución: una herramienta moderna, práctica y completa que centraliza toda la información médica de tu perro, gato, conejo o ave en una sola aplicación en tu smartphone.",
        blog_s1_p3: "En esta guía completa, exploraremos en detalle qué es una cartilla de salud digital, por qué supera a la cartilla de papel tradicional, y cuáles son las 10 ventajas concretas que la convierten en una herramienta imprescindible para todo dueño de mascota en 2026. Ya sea que tengas un cachorro que acaba de llegar a tu familia o un gato viejo al que acompañas desde hace años, esta guía te ayudará a entender cómo la tecnología puede ayudarte a cuidar de tus compañeros.",
        blog_s2_title: "2. ¿Qué es una cartilla de salud digital para animales?",
        blog_s2_p1: "Una cartilla de salud digital para animales es una aplicación móvil que reemplaza — o complementa — la cartilla de vacunación de papel tradicional entregada por tu veterinario. Es un verdadero expediente médico digital que te permite centralizar, organizar y consultar en todo momento toda la información relativa a la salud y el bienestar de tu mascota.",
        blog_s2_p2: "A diferencia de la simple cartilla de papel que se limita a menudo a las vacunas y algunas notas manuscritas, una cartilla de salud digital ofrece un abanico de funcionalidades mucho más amplio. Esto es lo que contiene generalmente una aplicación completa de cartilla de salud animal:",
        blog_s2_l1: "Perfil completo del animal: nombre, especie, raza, fecha de nacimiento, peso, número de chip, carácter e historia",
        blog_s2_l2: "Historial de vacunación con fechas, lotes, nombres de vacunas y fechas de refuerzo",
        blog_s2_l3: "Seguimiento de tratamientos: antiparasitarios, desparasitantes, medicamentos en curso",
        blog_s2_l4: "Historial de visitas veterinarias con motivos, diagnósticos y costes",
        blog_s2_l5: "Seguimiento de peso y crecimiento con curva de evolución",
        blog_s2_l6: "Sistema de recordatorios automáticos para no olvidar nunca una cita",
        blog_s2_l7: "Un diario con fotos y seguimiento del estado de ánimo",
        blog_s2_l8: "La posibilidad de exportar un PDF completo para compartir con el veterinario",
        blog_s3_title: "3. Las limitaciones de la cartilla de papel tradicional",
        blog_s3_p1: "La cartilla de salud de papel ha prestado valiosos servicios durante décadas. Pero seamos honestos: en 2026, muestra sus limitaciones. ¿Cuántos dueños de mascotas pueden afirmar que saben exactamente dónde está la cartilla de vacunación de su compañero en este momento? Estas son las principales limitaciones del papel que empujan a cada vez más dueños hacia lo digital:",
        blog_s3_l1: "<strong>Riesgo de pérdida o deterioro</strong> — Una cartilla de papel puede extraviarse en una mudanza, ser mordisqueada por el propio perro o simplemente olvidarse en el fondo de un cajón. Una vez perdida, toda la información se pierde con ella.",
        blog_s3_l2: "<strong>Sin recordatorios automáticos</strong> — La cartilla de papel no suena para avisarte de que el refuerzo de la vacuna de tu perro es en 3 días. Debes recordar revisar manualmente las fechas, lo que a menudo lleva a olvidos.",
        blog_s3_l3: "<strong>Dificultad para compartir</strong> — Si cambias de veterinario, te vas de vacaciones con tu animal, o un familiar necesita llevar al perro al veterinario, compartir la información es complicado.",
        blog_s3_l4: "<strong>Espacio limitado</strong> — Las páginas de una cartilla de papel se llenan rápido. Es imposible pegar fotos, trazar una curva de peso o escribir un diario detallado de la vida de tu compañero.",
        blog_s3_l5: "<strong>No siempre contigo</strong> — En caso de urgencia veterinaria, puede que no tengas la cartilla de papel a mano. Con una app, tu smartphone basta para acceder a toda la información.",
        blog_s3_l6: "<strong>Sin análisis ni seguimiento</strong> — Una cartilla de papel no permite visualizar la evolución del peso de tu animal, comparar tratamientos en el tiempo ni identificar tendencias de salud.",
        blog_s3_l7: "<strong>Sin copia de seguridad</strong> — Si la cartilla se destruye, no existe copia. Una cartilla digital se guarda en la nube y puede restaurarse en cualquier momento.",
        blog_s4_title: "4. Las 10 ventajas de la cartilla de salud digital",
        blog_s4_intro: "Ahora que hemos identificado las limitaciones del papel, exploremos en detalle las 10 ventajas principales que hacen de la cartilla de salud digital una herramienta imprescindible para todo dueño de mascota preocupado por la salud de su compañero.",
        blog_s4_1_title: "4.1. Centralización de todos los datos de salud",
        blog_s4_1_p: "La primera ventaja, y quizás la más fundamental, es la centralización de toda la información de salud de tu animal en un solo lugar. Vacunas, tratamientos antiparasitarios, desparasitantes, visitas veterinarias, resultados de análisis, cirugías pasadas — todo está agrupado en una interfaz clara y organizada. Se acabó la información dispersa entre la cartilla de papel, las facturas del veterinario guardadas en un cajón y las notas garabateadas en un post-it. En segundos, accedes al historial médico completo de tu perro o gato, perfectamente estructurado y fácilmente consultable.",
        blog_s4_2_title: "4.2. Accesible en cualquier lugar, en todo momento",
        blog_s4_2_p: "Tu smartphone siempre está en tu bolsillo. Esto significa que la cartilla de salud digital de tu animal te acompaña a todas partes: de vacaciones, en un nuevo veterinario, en caso de urgencia por la noche, o simplemente durante un paseo si alguien te pregunta sobre tu compañero. Ya no necesitas volver a casa para buscar la cartilla de papel. Estés en Francia, España o Alemania, toda la información está ahí, sincronizada en la nube y accesible al instante desde tu teléfono.",
        blog_s4_3_title: "4.3. Recordatorios automáticos de vacunas y tratamientos",
        blog_s4_3_p: "Esta es probablemente la ventaja más apreciada por los dueños de mascotas. Una cartilla de salud digital te envía notificaciones push para recordarte fechas importantes: refuerzo de la vacuna de la rabia, renovación del desparasitante, próxima cita con el veterinario, renovación del antiparasitario. Estos recordatorios inteligentes se adaptan al calendario de cuidados de tu animal y pueden ser recurrentes (cada 3 meses para el desparasitante, por ejemplo). Gracias a ellos, nunca más perderás una fecha médica importante para tu perro o gato.",
        blog_s4_4_title: "4.4. Seguimiento del peso y del crecimiento",
        blog_s4_4_p: "El seguimiento del peso es un indicador clave de la salud de tu animal. Un perro o gato con sobrepeso está expuesto a numerosos riesgos: diabetes, problemas articulares, enfermedades cardíacas. Con una cartilla de salud digital, registras regularmente el peso de tu compañero y visualizas su evolución gracias a una curva gráfica. Esto te permite detectar rápidamente un aumento o pérdida de peso anormal y hablarlo con tu veterinario. Para cachorros y gatitos, este seguimiento es especialmente valioso para asegurar que el crecimiento se desarrolla normalmente.",
        blog_s4_5_title: "4.5. Historial completo de vacunas y tratamientos",
        blog_s4_5_p: "¿Cuándo fue la última vacuna antirrábica de tu perro? ¿Qué desparasitante usaste hace 6 meses? Estas preguntas se vuelven triviales con una cartilla digital. Cada vacuna, cada tratamiento se registra con su fecha, nombre del producto, número de lote, nombre del veterinario y fecha del próximo refuerzo. El historial es completo, consultable en un clic, y nunca se borrará. Si cambias de veterinario, puedes presentar el expediente médico completo de tu animal en segundos.",
        blog_s4_6_title: "4.6. Compartir fácilmente con el veterinario (exportar PDF)",
        blog_s4_6_p: "La exportación PDF es una funcionalidad especialmente útil de la cartilla de salud digital. Con un clic, generas un documento profesional con todo el expediente médico de tu animal: perfil, vacunas, tratamientos, visitas, curva de peso. Este PDF puede enviarse por correo electrónico a tu veterinario, una residencia de animales o una aseguradora. También es indispensable si viajas al extranjero con tu animal y necesitas presentar un historial vacunal completo a las autoridades. El documento es claro, bien formateado y contiene toda la información esencial.",
        blog_s4_7_title: "4.7. El diario personal de tu animal",
        blog_s4_7_p: "Más allá del aspecto médico, una cartilla de salud digital moderna ofrece un verdadero diario para inmortalizar los momentos de la vida de tu compañero. Primer paseo, primer baño, encuentro con otro animal, momento gracioso, etapa importante — cada recuerdo puede registrarse con fotos, un texto e incluso el estado de ánimo de tu animal ese día. Este diario crea un relato único de la vida de tu perro o gato que podrás releer con emoción durante años. También es una herramienta valiosa para anotar cambios de comportamiento que podrían indicar un problema de salud.",
        blog_s4_8_title: "4.8. Compartir en familia",
        blog_s4_8_p: "Tu animal no vive aislado — toda la familia se ocupa de él. El uso compartido en familia permite a cada miembro del hogar acceder a la información de salud y contribuir al seguimiento. ¿Tu pareja lleva al gato al veterinario? Tiene acceso al historial completo. ¿Tus hijos quieren añadir una foto al diario? Pueden hacerlo. Un código de invitación permite añadir hasta 5 miembros a la familia, cada uno con su propia cuenta. Esto garantiza que todos estén informados y puedan actuar cuando sea necesario, incluso si tú no estás disponible.",
        blog_s4_9_title: "4.9. Seguridad y copia de seguridad de datos",
        blog_s4_9_p: "A diferencia de una cartilla de papel que puede destruirse, perderse o ser robada, una cartilla de salud digital almacena tus datos de forma segura en la nube. La información está cifrada, protegida por tu autenticación personal (correo electrónico, Apple ID o cuenta de Google) y guardada automáticamente. Incluso si pierdes tu teléfono o cambias de dispositivo, recuperas instantáneamente todos los datos de tus animales al volver a iniciar sesión. Las estrictas reglas de seguridad garantizan que solo tú y los miembros de tu familia autorizados puedan acceder a esta información.",
        blog_s4_10_title: "4.10. Ahorro de tiempo considerable",
        blog_s4_10_p: "En definitiva, la cartilla de salud digital te hace ganar un tiempo valioso cada día. Ya no necesitas buscar la cartilla de papel, hojear páginas para encontrar información, anotar manualmente las fechas de recordatorio en tu agenda o reconstruir el historial médico de tu animal en cada nueva consulta. En segundos, accedes a toda la información, exportas un PDF y recibes automáticamente los recordatorios. Este ahorro de tiempo se traduce en una mejor gestión de la salud de tu animal y menos estrés para ti.",
        blog_cta_title: "¿Listo para digitalizar la cartilla de salud de tu animal?",
        blog_cta_text: "Descarga Notes4Pets gratis y empieza hoy mismo.",
        blog_cta_button: "Descargar Notes4Pets",
        blog_s5_title: "5. Cartilla digital para perro: casos de uso específicos",
        blog_s5_p1: "El perro es la mascota que requiere más seguimiento médico regular. Entre las vacunas obligatorias, los tratamientos preventivos y las visitas de control, el calendario de cuidados de un perro puede volverse rápidamente complejo. Una cartilla de salud digital es especialmente adecuada para los dueños de perros, ya que permite gestionar eficazmente todos estos aspectos sin arriesgarse a olvidar una fecha importante.",
        blog_s5_p2: "Estos son los casos de uso específicos de la cartilla de salud digital para dueños de perros:",
        blog_s5_l1: "<strong>Calendario vacunal completo</strong> — Seguimiento de vacunas de rabia, moquillo, hepatitis (DHPP), leptospirosis y piroplasmosis con recordatorios automáticos anuales",
        blog_s5_l2: "<strong>Desparasitación regular</strong> — Recordatorios cada 3 a 6 meses según la edad y el estilo de vida (4 veces al año para perros que salen a menudo)",
        blog_s5_l3: "<strong>Antiparasitarios</strong> — Seguimiento de tratamientos contra pulgas y garrapatas con renovación mensual en temporada cálida",
        blog_s5_l4: "<strong>Seguimiento del peso</strong> — Indispensable para razas grandes (Labrador, Golden Retriever, Pastor Alemán) propensas al sobrepeso",
        blog_s5_l5: "<strong>Seguimiento de esterilización</strong> — Fecha de la operación, seguimiento postoperatorio, impacto en el peso y el comportamiento",
        blog_s5_l6: "<strong>Pasaporte europeo</strong> — Registro del número de chip, vacunaciones obligatorias para viajes y controles sanitarios",
        blog_s6_title: "6. Cartilla digital para gato: casos de uso específicos",
        blog_s6_p1: "El gato es un animal independiente cuya salud merece tanta atención. Ya sea que tu gato sea un gato de interior o salga regularmente, sus necesidades de seguimiento médico son diferentes. Una cartilla de salud digital permite personalizar el seguimiento según el estilo de vida de tu felino y no olvidar nunca las fechas de cuidados específicas de esta especie.",
        blog_s6_p2: "Estos son los casos de uso específicos de la cartilla de salud digital para dueños de gatos:",
        blog_s6_l1: "<strong>Vacunas esenciales</strong> — Seguimiento de vacunas contra panleucopenia, calicivirus y leucemia felina (FeLV) con refuerzos anuales o trienales según el protocolo",
        blog_s6_l2: "<strong>Test FIV/FeLV</strong> — Registro de resultados de detección del virus de inmunodeficiencia felina y leucemia",
        blog_s6_l3: "<strong>Gato de interior vs exterior</strong> — Adaptación del calendario de cuidados según si el gato sale o no (más desparasitantes y antiparasitarios para un gato de exterior)",
        blog_s6_l4: "<strong>Monitoreo renal y urinario</strong> — Los gatos son especialmente propensos a problemas renales; el seguimiento del peso y las visitas veterinarias ayudan a detectar signos tempranos",
        blog_s6_l5: "<strong>Esterilización y seguimiento hormonal</strong> — Fecha de esterilización, seguimiento del comportamiento postoperatorio, gestión del peso tras la operación",
        blog_s6_l6: "<strong>Diario de comportamiento</strong> — Seguimiento de cambios de humor, apetito o comportamiento que pueden indicar un problema de salud en el gato",
        blog_s7_title: "7. ¿Cómo elegir tu aplicación de cartilla de salud animal?",
        blog_s7_p1: "Ante la creciente oferta de aplicaciones de seguimiento de salud animal, es importante saber qué criterios priorizar para tomar la decisión correcta. No todas las aplicaciones son iguales, y algunas funcionalidades son esenciales para un seguimiento realmente efectivo. Estos son los criterios clave a examinar antes de elegir tu aplicación de cartilla de salud digital:",
        blog_s7_l1: "<strong>Facilidad de uso</strong> — La interfaz debe ser intuitiva y agradable. Si la aplicación es complicada, no la usarás regularmente.",
        blog_s7_l2: "<strong>Gestión de múltiples animales</strong> — Si tienes varias mascotas, la aplicación debe permitir gestionar perfiles separados para cada una.",
        blog_s7_l3: "<strong>Recordatorios y notificaciones</strong> — Recordatorios inteligentes y personalizables son indispensables para no olvidar nunca una vacuna o tratamiento.",
        blog_s7_l4: "<strong>Exportar PDF</strong> — La posibilidad de generar un documento completo para compartir con el veterinario es una ventaja importante.",
        blog_s7_l5: "<strong>Compartir en familia</strong> — Si varias personas cuidan del animal, compartir datos en familia es esencial.",
        blog_s7_l6: "<strong>Seguridad de datos</strong> — Verifica que la aplicación utilice almacenamiento seguro y cifrado para proteger la información de tu animal.",
        blog_s7_l7: "<strong>Multi-idioma</strong> — Si viajas o tu familia es internacional, una aplicación disponible en varios idiomas es una ventaja significativa.",
        blog_s7_l8: "<strong>Soporte de varias especies</strong> — Perros, gatos, pero también conejos, aves, roedores... Una aplicación versátil te evitará multiplicar herramientas.",
        blog_s7_l9: "<strong>Relación calidad-precio</strong> — Prioriza una aplicación con una versión gratuita funcional y una suscripción premium razonable para funciones avanzadas.",
        blog_s8_title: "8. Notes4Pets: la solución completa para tus compañeros",
        blog_s8_p1: "Notes4Pets fue diseñada por amantes de los animales para satisfacer todas las necesidades que hemos comentado en esta guía. Es una aplicación iOS moderna y elegante que transforma tu smartphone en una verdadera cartilla de salud digital para todas tus mascotas. Ya tengas un perro, gato, conejo, ave, roedor u otro animal, Notes4Pets se adapta a cada especie con un seguimiento personalizado.",
        blog_s8_p2: "La aplicación ofrece una cartilla de salud completa con seguimiento de vacunas, tratamientos y visitas veterinarias, un sistema de recordatorios inteligentes con notificaciones push, un diario personal con fotos y seguimiento del estado de ánimo, exportación PDF profesional y uso compartido en familia para hasta 5 miembros que colaboren en el cuidado de sus animales. Disponible en francés, inglés, alemán y español, Notes4Pets se adapta automáticamente al idioma de tu dispositivo.",
        blog_s8_p3: "Notes4Pets es gratuita para 1 animal con funcionalidades básicas. La suscripción Premium por solo 2,99€/mes (o 29,99€/año) desbloquea animales ilimitados, diario completo, exportación PDF, copia de seguridad en la nube y eliminación de publicidad. El plan Familia por 39,99€/año permite compartir todas las funcionalidades Premium con hasta 5 miembros. Una inversión mínima para la tranquilidad y el bienestar de tus compañeros.",
        blog_s9_title: "9. Preguntas frecuentes",
        blog_faq1_q: "¿Qué es una cartilla de salud digital para animales?",
        blog_faq1_a: "Una cartilla de salud digital es una aplicación móvil que centraliza toda la información médica de tu animal: vacunas, tratamientos, visitas veterinarias, peso y recordatorios. Reemplaza la cartilla de papel tradicional con más funcionalidades, como recordatorios automáticos, uso compartido en familia y exportación PDF.",
        blog_faq2_q: "¿Notes4Pets es gratuita?",
        blog_faq2_a: "Sí, Notes4Pets ofrece una versión gratuita que permite gestionar 1 animal con la cartilla de salud básica y los recordatorios. La versión Premium por 2,99€/mes desbloquea animales ilimitados, exportación PDF, diario completo con fotos, copia de seguridad en la nube y uso compartido en familia.",
        blog_faq3_q: "¿Una cartilla digital reemplaza la cartilla de vacunación de papel?",
        blog_faq3_a: "La cartilla digital es un complemento ideal de la cartilla oficial de vacunación. Te permite no olvidar nunca un refuerzo y compartir fácilmente el historial médico con tu veterinario. Algunos países aún exigen la cartilla de papel o el pasaporte europeo para viajes internacionales con tu animal.",
        blog_faq4_q: "¿Mis datos están seguros?",
        blog_faq4_a: "Sí, Notes4Pets utiliza Firebase con estrictas reglas de seguridad. Tus datos están cifrados, guardados en la nube y accesibles solo por ti y los miembros de tu familia que autorices. Puedes eliminar tu cuenta y todos tus datos en cualquier momento desde los ajustes de la aplicación.",
        blog_faq5_q: "¿Puedo gestionar varias mascotas?",
        blog_faq5_a: "La versión gratuita permite gestionar 1 animal. Con Notes4Pets Premium, puedes añadir un número ilimitado de animales: perros, gatos, conejos, aves, roedores y más. Cada animal tiene su propio perfil con una cartilla de salud, un diario y recordatorios dedicados.",
        blog_s10_title: "10. Conclusión: la tecnología digital al servicio del bienestar animal",
        blog_s10_p1: "En 2026, la cartilla de salud digital ya no es un gadget para entusiastas de la tecnología — es una herramienta práctica y esencial para todo dueño de mascota que quiera ofrecer el mejor seguimiento médico a su compañero. Centralización de datos, recordatorios automáticos, uso compartido en familia, exportación PDF, diario... las ventajas son numerosas y concretas. Ya tengas un perro, un gato o cualquier otro animal, pasarte a lo digital te permite ahorrar tiempo, evitar olvidos y mantener un registro completo de la vida y la salud de tu compañero.",
        blog_s10_p2: "Notes4Pets está disponible gratis en la App Store. Descarga la aplicación ahora mismo y descubre lo fácil que es gestionar la cartilla de salud de tus animales desde tu iPhone. Tus compañeros merecen lo mejor — y lo mejor empieza con un seguimiento de salud organizado, accesible y moderno.",
        blog_back_home: "← Volver al inicio",
        blog_download_cta: "Descargar Notes4Pets"
    }
};

/* ===========================
   PAGE TITLE PER LANGUAGE
   =========================== */
const pageTitles = {
    fr: "Notes4Pets — Carnet de santé digital pour chien, chat et animaux de compagnie | App iOS",
    en: "Notes4Pets — Digital Pet Health Record for Dogs, Cats & Pets | Free iOS App",
    de: "Notes4Pets — Digitales Gesundheitsheft für Hunde, Katzen & Haustiere | iOS App",
    es: "Notes4Pets — Cartilla de salud digital para perros, gatos y mascotas | App iOS gratis"
};

const blogPageTitles = {
    fr: "Carnet de santé digital pour chien et chat : le guide complet 2026 | Notes4Pets",
    en: "Digital Health Record for Dogs and Cats: The Complete Guide 2026 | Notes4Pets",
    de: "Digitales Gesundheitsheft für Hund und Katze: Der komplette Leitfaden 2026 | Notes4Pets",
    es: "Cartilla de salud digital para perro y gato: la guía completa 2026 | Notes4Pets"
};

/* ===========================
   i18n ENGINE
   =========================== */
function detectLang() {
    const supported = ['fr', 'en', 'de', 'es'];

    // 1. URL parameter ?lang=xx
    const urlParam = new URLSearchParams(window.location.search).get('lang');
    if (urlParam && supported.includes(urlParam)) return urlParam;

    // 2. User's previous choice
    const saved = localStorage.getItem('n4p_lang');
    if (saved && supported.includes(saved)) return saved;

    // 3. Browser language detection
    const langs = navigator.languages || [navigator.language || 'fr'];
    for (const raw of langs) {
        const code = raw.slice(0, 2).toLowerCase();
        if (supported.includes(code)) return code;
    }

    return 'fr';
}

let currentLang = detectLang();

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (el.getAttribute('data-i18n-html') === 'true') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Update page title and lang attribute
    document.documentElement.lang = lang;
    const isBlogPage = window.location.pathname.includes('blog-');
    document.title = isBlogPage ? (blogPageTitles[lang] || blogPageTitles.fr) : (pageTitles[lang] || pageTitles.fr);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    currentLang = lang;
    localStorage.setItem('n4p_lang', lang);
}

/* ===========================
   MAIN INIT
   =========================== */
document.addEventListener('DOMContentLoaded', () => {

    // === Apply saved language ===
    applyTranslations(currentLang);

    // === Language switcher clicks ===
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });

    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');

    const handleNavScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // === Mobile Menu Toggle ===
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // === Scroll Animations (Intersection Observer) ===
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // === Smooth Scroll for Anchor Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const navHeight = navbar.offsetHeight;
                const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Active Nav Link Highlighting ===
    const sections = document.querySelectorAll('section[id]');

    const highlightNav = () => {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });

    // === Parallax Float Effect on Cards ===
    const floatingCards = document.querySelectorAll('[data-float]');

    if (window.matchMedia('(min-width: 769px)').matches) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            floatingCards.forEach((card, i) => {
                const speed = (i + 1) * 4;
                const offsetX = x * speed;
                const offsetY = y * speed;
                card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    }

    // === Counter Animation for Stats ===
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    const animateStats = () => {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;
            statNumbers.forEach(el => {
                const value = el.textContent;
                if (!isNaN(parseInt(value))) {
                    const target = parseInt(value);
                    let current = 0;
                    const increment = Math.ceil(target / 30);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current;
                    }, 40);
                }
            });
        }
    };

    window.addEventListener('scroll', animateStats, { passive: true });
    animateStats();

});
