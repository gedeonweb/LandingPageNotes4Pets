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
        price_family_share: "Partage familial",
        price_start: "Commencer",
        price_popular: "Populaire",
        price_premium_price: '29,99€<span>/an</span>',
        price_premium_period: "Ou 3,99€/mois",
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
        footer_copyright: "© 2025 Notes4Pets. Tous droits réservés. Fait avec ❤️ pour vos animaux."
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
        price_family_share: "Family sharing",
        price_start: "Get started",
        price_popular: "Popular",
        price_premium_price: '$29.99<span>/yr</span>',
        price_premium_period: "Or $3.99/month",
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
        footer_copyright: "© 2025 Notes4Pets. All rights reserved. Made with ❤️ for your pets."
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
        price_family_share: "Familienfreigabe",
        price_start: "Loslegen",
        price_popular: "Beliebt",
        price_premium_price: '29,99€<span>/Jahr</span>',
        price_premium_period: "Oder 3,99€/Monat",
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
        footer_copyright: "© 2025 Notes4Pets. Alle Rechte vorbehalten. Mit ❤️ für Ihre Tiere gemacht."
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
        price_family_share: "Compartir en familia",
        price_start: "Empezar",
        price_popular: "Popular",
        price_premium_price: '29,99€<span>/año</span>',
        price_premium_period: "O 3,99€/mes",
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
        footer_copyright: "© 2025 Notes4Pets. Todos los derechos reservados. Hecho con ❤️ para tus mascotas."
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
    document.title = pageTitles[lang] || pageTitles.fr;

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
