document.addEventListener('DOMContentLoaded', () => {
    // Translation dictionaries
    const translations = {
        fr: {
            birthdate: "Date de naissance",
            timeUnit: "Unité temporelle",
            days: "Jours",
            weeks: "Semaines",
            months: "Mois",
            years: "Années",
            lifespan: "Espérance de vie (années)",
            generate: "Générer",
            daysLived: "Jours vécus",
            daysRemaining: "Jours restants",
            lifePercentage: "Pourcentage de vie",
            createdWith: "Créé avec",
            by: "par",
            copyright: "Tous droits réservés",
            dayUnit: "jour",
            weekUnit: "semaine",
            monthUnit: "mois",
            yearUnit: "année",
            dayPoint: "Chaque point représente un jour de votre vie.",
            weekPoint: "Chaque point représente une semaine de votre vie.",
            monthPoint: "Chaque point représente un mois de votre vie.",
            yearPoint: "Chaque point représente une année de votre vie.",
            today: "Aujourd'hui",
            death: "Fin de vie estimée",
            monthsLived: "Mois vécus",
            monthsRemaining: "Mois restants",
            weeksLived: "Semaines vécues",
            weeksRemaining: "Semaines restantes",
            yearsLived: "Années vécues",
            yearsRemaining: "Années restantes",
            lifeExpectancyList: "Liste des espérances de vie par pays",
            lifeExpectancyUrl: "https://fr.wikipedia.org/wiki/Liste_des_pays_par_esp%C3%A9rance_de_vie#Estimation_par_les_Nations_unies_de_l'espérance_de_vie_pour_différents_âges_en_2023"
        },
        en: {
            birthdate: "Date of birth",
            timeUnit: "Time unit",
            days: "Days",
            weeks: "Weeks",
            months: "Months",
            years: "Years",
            lifespan: "Life expectancy (years)",
            generate: "Generate",
            daysLived: "Days lived",
            daysRemaining: "Days remaining",
            lifePercentage: "Life percentage",
            createdWith: "Created with",
            by: "by",
            copyright: "All rights reserved",
            dayUnit: "day",
            weekUnit: "week",
            monthUnit: "month",
            yearUnit: "year",
            dayPoint: "Each dot represents one day of your life.",
            weekPoint: "Each dot represents one week of your life.",
            monthPoint: "Each dot represents one month of your life.",
            yearPoint: "Each dot represents one year of your life.",
            today: "Today",
            death: "Estimated end of life",
            monthsLived: "Months lived",
            monthsRemaining: "Months remaining",
            lifeExpectancyList: "List of countries by life expectancy",
            lifeExpectancyUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy#UN:_Estimate_of_life_expectancy_for_various_ages_in_2023",
            weeksLived: "Weeks lived",
            weeksRemaining: "Weeks remaining",
            yearsLived: "Years lived",
            yearsRemaining: "Years remaining"
        },
        es: {
            birthdate: "Fecha de nacimiento",
            timeUnit: "Unidad de tiempo",
            days: "Días",
            weeks: "Semanas",
            months: "Meses",
            years: "Años",
            lifespan: "Esperanza de vida (años)",
            generate: "Generar",
            daysLived: "Días vividos",
            daysRemaining: "Días restantes",
            lifePercentage: "Porcentaje de vida",
            createdWith: "Creado con",
            by: "por",
            copyright: "Todos los derechos reservados",
            dayUnit: "día",
            weekUnit: "semana",
            monthUnit: "mes",
            yearUnit: "año",
            dayPoint: "Cada punto representa un día de tu vida.",
            weekPoint: "Cada punto representa una semana de tu vida.",
            monthPoint: "Cada punto representa un mes de tu vida.",
            yearPoint: "Cada punto representa un año de tu vida.",
            today: "Hoy",
            death: "Fin de vida estimado",
            monthsLived: "Meses vividos",
            monthsRemaining: "Meses restantes",
            weeksLived: "Semanas vividas",
            weeksRemaining: "Semanas restantes",
            yearsLived: "Años vividos",
            yearsRemaining: "Años restantes",
            lifeExpectancyList: "Lista de países por esperanza de vida",
            lifeExpectancyUrl: "https://es.wikipedia.org/wiki/Anexo:Países_por_esperanza_de_vida"
        },
        pt: {
            birthdate: "Data de nascimento",
            timeUnit: "Unidade de tempo",
            days: "Dias",
            weeks: "Semanas",
            months: "Meses",
            years: "Anos",
            lifespan: "Expectativa de vida (anos)",
            generate: "Gerar",
            daysLived: "Dias vividos",
            daysRemaining: "Dias restantes",
            lifePercentage: "Percentagem de vida",
            createdWith: "Criado com",
            by: "por",
            copyright: "Todos os direitos reservados",
            dayUnit: "dia",
            weekUnit: "semana",
            monthUnit: "mês",
            yearUnit: "ano",
            dayPoint: "Cada ponto representa um dia da sua vida.",
            weekPoint: "Cada ponto representa uma semana da sua vida.",
            monthPoint: "Cada ponto representa um mês da sua vida.",
            yearPoint: "Cada ponto representa um ano da sua vida.",
            today: "Hoje",
            death: "Fim de vida estimado",
            monthsLived: "Meses vividos",
            monthsRemaining: "Meses restantes",
            weeksLived: "Semanas vividas",
            weeksRemaining: "Semanas restantes",
            yearsLived: "Anos vividos",
            yearsRemaining: "Anos restantes",
            lifeExpectancyList: "Lista de países por expectativa de vida",
            lifeExpectancyUrl: "https://pt.wikipedia.org/wiki/Lista_de_países_por_expectativa_de_vida"
        },
        it: {
            birthdate: "Data di nascita",
            timeUnit: "Unità di tempo",
            days: "Giorni",
            weeks: "Settimane",
            months: "Mesi",
            years: "Anni",
            lifespan: "Aspettativa di vita (anni)",
            generate: "Generare",
            daysLived: "Giorni vissuti",
            daysRemaining: "Giorni rimanenti",
            lifePercentage: "Percentuale di vita",
            createdWith: "Creato con",
            by: "da",
            copyright: "Tutti i diritti riservati",
            dayUnit: "giorno",
            weekUnit: "settimana",
            monthUnit: "mese",
            yearUnit: "anno",
            dayPoint: "Ogni punto rappresenta un giorno della tua vita.",
            weekPoint: "Ogni punto rappresenta una settimana della tua vita.",
            monthPoint: "Ogni punto rappresenta un mese della tua vita.",
            yearPoint: "Ogni punto rappresenta un anno della tua vita.",
            today: "Oggi",
            death: "Fine della vita stimata",
            monthsLived: "Mesi vissuti",
            monthsRemaining: "Mesi rimanenti",
            weeksLived: "Settimane vissute",
            weeksRemaining: "Settimane rimanenti",
            yearsLived: "Anni vissuti",
            yearsRemaining: "Anni rimanenti",
            lifeExpectancyList: "Elenco di paesi per aspettativa di vita",
            lifeExpectancyUrl: "https://it.wikipedia.org/wiki/Stati_per_aspettativa_di_vita"
        }
    };
    
    // Elements
    const birthdateInput = document.getElementById('birthdate');
    const lifespanInput = document.getElementById('lifespan');
    const timeUnitSelect = document.getElementById('timeUnit');
    const lifeVisualization = document.getElementById('life-visualization');
    const daysLivedElement = document.getElementById('days-lived');
    const daysRemainingElement = document.getElementById('days-remaining');
    const lifePercentageElement = document.getElementById('life-percentage');
    const subtitleElement = document.getElementById('subtitle');
    const languageSelect = document.getElementById('language');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const lifeExpectancyLink = document.getElementById('life-expectancy-link');
    
    // Initialize theme
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    // Initialize language
    const storedLanguage = localStorage.getItem('language') || 'fr';
    languageSelect.value = storedLanguage;
    applyTranslation(storedLanguage);
    
    // Initialize the Wikipedia link href
    if (lifeExpectancyLink && translations[storedLanguage]['lifeExpectancyUrl']) {
        lifeExpectancyLink.href = translations[storedLanguage]['lifeExpectancyUrl'];
        // S'assurer que le lien s'ouvre toujours dans un nouvel onglet
        lifeExpectancyLink.setAttribute('target', '_blank');
    }
    
    // Set default birthdate to 05.09.1988
    const today = new Date();
    const defaultBirthdate = new Date(1988, 8, 5); // Note: Month is 0-based, so 8 = September
    birthdateInput.value = formatDate(defaultBirthdate);
    
    // Initialize with default values
    generateLifeVisualization();
    
    // Event listeners - génération automatique à chaque changement
    birthdateInput.addEventListener('change', generateLifeVisualization);
    birthdateInput.addEventListener('input', generateLifeVisualization);
    timeUnitSelect.addEventListener('change', () => {
        updateSubtitle();
        generateLifeVisualization();
    });
    lifespanInput.addEventListener('change', generateLifeVisualization);
    lifespanInput.addEventListener('input', generateLifeVisualization);
    
    // Language change event
    languageSelect.addEventListener('change', () => {
        const selectedLanguage = languageSelect.value;
        applyTranslation(selectedLanguage);
        updateSubtitle();
        localStorage.setItem('language', selectedLanguage);
    });
    
    // Dark mode toggle event
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Add resize listener with debounce for better performance
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(generateLifeVisualization, 250);
    });
    
    // Apply translation to all elements with data-lang attribute
    function applyTranslation(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
                
                // Special handling for Wikipedia link
                if (element.id === 'life-expectancy-link' && translations[language]['lifeExpectancyUrl']) {
                    element.href = translations[language]['lifeExpectancyUrl'];
                    // S'assurer que le lien s'ouvre toujours dans un nouvel onglet
                    element.setAttribute('target', '_blank');
                }
            }
        });
        
        // Also update the subtitle
        updateSubtitle(language);
    }
    
    // Update subtitle based on selected time unit
    function updateSubtitle(lang) {
        const language = lang || languageSelect.value;
        const timeUnit = timeUnitSelect.value;
        
        switch(timeUnit) {
            case 'day':
                subtitleElement.textContent = translations[language].dayPoint;
                break;
            case 'week':
                subtitleElement.textContent = translations[language].weekPoint;
                break;
            case 'month':
                subtitleElement.textContent = translations[language].monthPoint;
                break;
            case 'year':
                subtitleElement.textContent = translations[language].yearPoint;
                break;
        }
    }
    
    // Initialize subtitle
    updateSubtitle();
    
    // Generate life visualization - afficher tous les points à la fois sans virtualisation
    function generateLifeVisualization() {
        const birthdate = new Date(birthdateInput.value);
        const lifespan = parseInt(lifespanInput.value);
        const timeUnit = timeUnitSelect.value;
        const language = languageSelect.value;
        
        if (isNaN(birthdate.getTime()) || isNaN(lifespan)) {
            const errorMessages = {
                'fr': 'Veuillez entrer une date de naissance et une espérance de vie valides.',
                'en': 'Please enter a valid birth date and life expectancy.',
                'es': 'Por favor, introduzca una fecha de nacimiento y una esperanza de vida válidas.',
                'pt': 'Por favor, insira uma data de nascimento e uma expectativa de vida válidas.',
                'it': 'Si prega di inserire una data di nascita e un\'aspettativa di vita valide.'
            };
            
            const errorMsg = errorMessages[language] || errorMessages['fr'];
            alert(errorMsg);
            return;
        }
        
        // Calculate units based on selected time unit
        const { totalUnits, unitsLived, unitsRemaining, unitNames, isDeceased } = calculateUnits(birthdate, lifespan, timeUnit, language);
        
        // Calculate life percentage
        const lifePercentage = isDeceased ? 100 : Math.min(100, Math.floor((unitsLived / totalUnits) * 100));
        
        // Update stats with appropriate unit names
        daysLivedElement.textContent = unitsLived.toLocaleString();
        daysRemainingElement.textContent = unitsRemaining.toLocaleString();
        lifePercentageElement.textContent = `${lifePercentage}%`;
        
        // Update stat labels with proper translations
        const statLabels = {
            day: { lived: 'daysLived', remaining: 'daysRemaining' },
            week: { lived: 'weeksLived', remaining: 'weeksRemaining' },
            month: { lived: 'monthsLived', remaining: 'monthsRemaining' },
            year: { lived: 'yearsLived', remaining: 'yearsRemaining' }
        };
        
        document.querySelectorAll('.stat-label')[0].textContent = translations[language][statLabels[timeUnit].lived] || `${unitNames.capitalizedName}s vécus`;
        document.querySelectorAll('.stat-label')[1].textContent = translations[language][statLabels[timeUnit].remaining] || `${unitNames.capitalizedName}s restants`;
        
        // Clear previous visualization
        lifeVisualization.innerHTML = '';
        
        // Ajouter une classe si la personne est décédée selon les dates
        if (isDeceased) {
            lifeVisualization.classList.add('deceased');
        } else {
            lifeVisualization.classList.remove('deceased');
        }
        
        // Determine optimal grid layout based on screen size
        const containerWidth = lifeVisualization.clientWidth;
        // Get the width of the controls element for reference
        const controlsElement = document.querySelector('.controls');
        const controlsWidth = controlsElement ? controlsElement.clientWidth : containerWidth;
        // Calculate width to match controls width but with a maximum of 700px
        const desiredWidth = Math.min(controlsWidth * 0.9, 700); // 90% de la largeur du menu, maximum 700px
        
        const dotSize = containerWidth <= 480 ? 4 : containerWidth <= 768 ? 5 : 6; // Points plus petits
        const dotGap = containerWidth <= 480 ? 1 : 2; // Espacement réduit
        const availableWidth = desiredWidth - 20; // Accounting for padding
        const adjustedAvailableWidth = desiredWidth - 30; // Minus padding
        
        // Calculate dots per row based on time unit
        let maxDotsPerRow;
        switch(timeUnit) {
            case 'day':
                maxDotsPerRow = 50; // 7 * 7 (semaines + un peu plus)
                break;
            case 'week':
                maxDotsPerRow = 52; // Une année de semaines
                break;
            case 'month':
                maxDotsPerRow = 24; // Deux années de mois
                break;
            case 'year':
                maxDotsPerRow = 20; // Une vie d'années
                break;
            default:
                maxDotsPerRow = 52;
        }
        
        // Calculate dots per row - adapté pour occuper la largeur réduite et centrée
        let dotsPerRow = Math.floor(availableWidth / (dotSize + dotGap));
        dotsPerRow = Math.max(dotsPerRow, 7); // Au moins 7 points par ligne
        // Ajuster le maximum en fonction de la largeur réduite
        const adjustedMaxDotsPerRow = Math.min(maxDotsPerRow, Math.floor(availableWidth / (dotSize + dotGap)));
        dotsPerRow = Math.min(dotsPerRow, adjustedMaxDotsPerRow);
        
        // Calculer la largeur effective pour occuper toute la largeur disponible
        const effectiveWidth = availableWidth;
        const actualDotSize = Math.floor((effectiveWidth - (dotsPerRow - 1) * dotGap) / dotsPerRow);
        
        // Add a visible label for screen readers
        const srLabel = document.createElement('div');
        srLabel.className = 'sr-only';
        
        // Utiliser la variable language qui est déjà définie plus haut dans la fonction
        const currentLang = language; // On utilise la variable language définie à la ligne 296
        
        // Texte pour les lecteurs d'écran selon la langue
        const srTexts = {
            'fr': `Visualisation de ${totalUnits} ${unitNames.name}s, représentant ${lifespan} années de vie.`,
            'en': `Visualization of ${totalUnits} ${unitNames.name}s, representing ${lifespan} years of life.`,
            'es': `Visualización de ${totalUnits} ${unitNames.name}s, representando ${lifespan} años de vida.`,
            'pt': `Visualização de ${totalUnits} ${unitNames.name}s, representando ${lifespan} anos de vida.`,
            'it': `Visualizzazione di ${totalUnits} ${unitNames.name}s, rappresentante ${lifespan} anni di vita.`
        };
        
        srLabel.textContent = srTexts[currentLang] || srTexts['fr'];
        lifeVisualization.appendChild(srLabel);
        
        // Calculer le nombre de rangées nécessaires
        const totalRows = Math.ceil(totalUnits / dotsPerRow);
        
        // Définir les dimensions pour le conteneur
        const dotHeight = actualDotSize + dotGap;
        // Définir une hauteur explicite pour le conteneur basée sur le nombre de lignes
        const totalHeight = totalRows * (actualDotSize + dotGap);
        lifeVisualization.style.height = `${totalHeight}px`;
        
        // Ajuster la largeur pour qu'elle soit plus centrée (environ 70% de la largeur du menu)
        lifeVisualization.style.width = `${desiredWidth}px`;
        lifeVisualization.style.margin = '0 auto'; // Centrer la visualisation
        
        // Optimisation: Précalculer les labels d'unités
        // On réutilise currentLang qui est défini plus haut
        const unitLabels = {
            fr: { day: "", week: "Semaine", month: "Mois", year: "Année" },
            en: { day: "", week: "Week", month: "Month", year: "Year" },
            es: { day: "", week: "Semana", month: "Mes", year: "Año" },
            pt: { day: "", week: "Semana", month: "Mês", year: "Ano" },
            it: { day: "", week: "Settimana", month: "Mese", year: "Anno" }
        };
        
        // Créer une fonction pour calculer les dates
        const calculateDotDate = (index) => {
            const dotDate = new Date(birthdate);
            
            switch(timeUnit) {
                case 'day':
                    dotDate.setDate(birthdate.getDate() + index);
                    break;
                case 'week':
                    dotDate.setDate(birthdate.getDate() + (index * 7));
                    break;
                case 'month':
                    dotDate.setMonth(birthdate.getMonth() + index);
                    break;
                case 'year':
                    dotDate.setFullYear(birthdate.getFullYear() + index);
                    break;
            }
            
            return dotDate;
        };
        
        // Utiliser un DocumentFragment pour regrouper les opérations DOM
        const fragment = document.createDocumentFragment();
        
        // Créer tous les points en une seule fois
        for (let i = 0; i < totalUnits; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            
            // Déterminer l'état du point
            if (i < unitsLived) {
                dot.classList.add('lived');
                
                // Si la personne est décédée et c'est le dernier point vécu, ajouter la tête de mort
                if (isDeceased && i === unitsLived - 1) {
                    dot.classList.add('death');
                    dot.innerHTML = '💀';
                    
                    // Utiliser la variable language plutôt que lang
                    const deathTitles = {
                        'fr': 'Date de décès',
                        'en': 'Date of death',
                        'es': 'Fecha de defunción',
                        'pt': 'Data de óbito',
                        'it': 'Data di morte'
                    };
                    dot.title = deathTitles[language] || deathTitles['fr'];
                }
            } else if (i === unitsLived && !isDeceased) {
                dot.classList.add('today');
                
                // Ajouter un indicateur spécial pour le point actuel
                const currentDot = document.createElement('span');
                currentDot.className = 'sr-only';
                
                // Utiliser la variable language plutôt que lang
                const todayLabels = {
                    'fr': 'Aujourd\'hui',
                    'en': 'Today',
                    'es': 'Hoy',
                    'pt': 'Hoje',
                    'it': 'Oggi'
                };
                currentDot.textContent = todayLabels[language] || todayLabels['fr'];
                dot.appendChild(currentDot);
                
                // Améliorer l'accessibilité
                dot.setAttribute('aria-current', 'true');
            } else if (i === totalUnits - 1 && !isDeceased) {
                // Ajouter une tête de mort pour le dernier point (point de la mort) - seulement si la personne n'est pas décédée
                dot.classList.add('death');
                dot.innerHTML = '💀';
                
                // Utiliser la variable language plutôt que lang
                const endOfLifeTitles = {
                    'fr': 'Fin de vie estimée',
                    'en': 'Estimated end of life',
                    'es': 'Fin de vida estimada',
                    'pt': 'Fim de vida estimado',
                    'it': 'Fine vita stimata'
                };
                dot.title = endOfLifeTitles[language] || endOfLifeTitles['fr'];
            }
            
            // Calculer la position
            const row = Math.floor(i / dotsPerRow);
            const col = i % dotsPerRow;
            
            // Ajouter un peu de marge pour éviter que les points ne se touchent
            const rowPosition = row * (actualDotSize + dotGap);
            
            // Calculer la largeur totale de tous les points d'une ligne
            const totalDotsWidth = dotsPerRow * (actualDotSize + dotGap) - dotGap;
            // Calculer le décalage horizontal pour centrer les points
            const horizontalOffset = Math.max(0, (desiredWidth - totalDotsWidth) / 2);
            // Ajouter le décalage à la position de la colonne
            const colPosition = horizontalOffset + col * (actualDotSize + dotGap);
            
            // Positionner le point de manière absolue
            dot.style.position = 'absolute';
            dot.style.top = `${rowPosition}px`;
            dot.style.left = `${colPosition}px`;
            dot.style.width = `${actualDotSize}px`;
            dot.style.height = `${actualDotSize}px`;
            
            // Calculer la date et les métadonnées
            const dotDate = calculateDotDate(i);
            const formattedDate = formatDate(dotDate);
            const displayDate = formatDateForDisplay(dotDate, language);
            
            // Ajouter le titre descriptif
            let title;
            if (timeUnit === 'day') {
                title = `${displayDate}`;
            } else {
                title = `${unitLabels[language][timeUnit]} ${i+1}: ${displayDate}`;
            }
            
            // Définir les attributs
            dot.setAttribute('data-date', formattedDate);
            dot.setAttribute('data-index', i);
            dot.setAttribute('title', title);
            dot.setAttribute('role', 'button');
            dot.setAttribute('aria-label', title);
            
            // Ajouter le point au fragment
            fragment.appendChild(dot);
        }
        
        // Ajouter tous les points en une seule fois au DOM
        lifeVisualization.appendChild(fragment);
        
        // Utiliser la délégation d'événements pour réduire le nombre de gestionnaires d'événements
        if (!lifeVisualization._hasClickListener) {
            lifeVisualization.addEventListener('click', (event) => {
                const dot = event.target.closest('.dot');
                if (!dot) return;
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                const title = dot.getAttribute('title');
                
                // Si c'est le point actuel, ajouter une indication spéciale
                if (dot.classList.contains('today')) {
                    const currentLabels = {
                        'fr': "AUJOURD'HUI",
                        'en': "TODAY",
                        'es': "HOY",
                        'pt': "HOJE",
                        'it': "OGGI"
                    };
                    
                    const unitLabelsUpper = {
                        fr: { day: "JOUR", week: "SEMAINE", month: "MOIS", year: "ANNÉE" },
                        en: { day: "DAY", week: "WEEK", month: "MONTH", year: "YEAR" },
                        es: { day: "DÍA", week: "SEMANA", month: "MES", year: "AÑO" },
                        pt: { day: "DIA", week: "SEMANA", month: "MÊS", year: "ANO" },
                        it: { day: "GIORNO", week: "SETTIMANA", month: "MESE", year: "ANNO" }
                    };
                    
                    const currentLabel = currentLabels[language] || currentLabels['fr'];
                    const unitLabel = unitLabelsUpper[language]?.[timeUnit] || unitLabelsUpper['fr'][timeUnit];
                    
                    alert(`🔴 ${currentLabel} - ${unitLabel} ${index+1}\n${title}`);
                } else {
                    alert(title);
                }
            });
            lifeVisualization._hasClickListener = true;
        }
    }
    
    // Calculate units based on time unit selection - optimisé pour réduire les calculs
    function calculateUnits(birthdate, lifespan, timeUnit, lang) {
        // Cache les constantes pour éviter les recalculs
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const DAYS_PER_YEAR = 365.25; // Accounting for leap years
        const DAYS_PER_WEEK = 7;
        const DAYS_PER_MONTH = 30.44; // Moyenne
        
        // Calcul optimisé des jours vécus
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normaliser à minuit pour une comparaison plus précise
        
        const birthdateCopy = new Date(birthdate);
        birthdateCopy.setHours(0, 0, 0, 0); // Normaliser à minuit
        
        const timeDiff = today - birthdateCopy;
        const daysLived = Math.max(0, Math.floor(timeDiff / MS_PER_DAY));
        
        // Calcul de l'espérance de vie en jours
        const lifespanDays = lifespan * DAYS_PER_YEAR;
        
        // Vérifier si la personne est déjà décédée selon les dates
        const deathDate = new Date(birthdate);
        deathDate.setFullYear(birthdate.getFullYear() + lifespan);
        const isDeceased = deathDate < today;
        
        const daysRemaining = isDeceased ? 0 : Math.max(0, Math.floor(lifespanDays - daysLived));
        
        // Optimisation: utilisation d'un objet pour mapper les unités
        const unitFactors = {
            day: 1,
            week: DAYS_PER_WEEK,
            month: DAYS_PER_MONTH,
            year: DAYS_PER_YEAR
        };
        
        // Calculer les unités en fonction de l'unité temporelle sélectionnée
        const factor = unitFactors[timeUnit];
        const totalUnits = Math.ceil(lifespanDays / factor);
        const unitsLived = isDeceased ? totalUnits : Math.floor(daysLived / factor);
        const unitsRemaining = isDeceased ? 0 : Math.floor(daysRemaining / factor);
        
        // Optimisation: stockage des noms d'unités dans un objet
        const language = lang || 'fr';
        const unitLabels = {
            fr: {
                day: { name: 'jour', capitalizedName: 'Jour' },
                week: { name: 'semaine', capitalizedName: 'Semaine' },
                month: { name: 'mois', capitalizedName: 'Mois' },
                year: { name: 'année', capitalizedName: 'Année' }
            },
            en: {
                day: { name: 'day', capitalizedName: 'Day' },
                week: { name: 'week', capitalizedName: 'Week' },
                month: { name: 'month', capitalizedName: 'Month' },
                year: { name: 'year', capitalizedName: 'Year' }
            },
            es: {
                day: { name: 'día', capitalizedName: 'Día' },
                week: { name: 'semana', capitalizedName: 'Semana' },
                month: { name: 'mes', capitalizedName: 'Mes' },
                year: { name: 'año', capitalizedName: 'Año' }
            },
            pt: {
                day: { name: 'dia', capitalizedName: 'Dia' },
                week: { name: 'semana', capitalizedName: 'Semana' },
                month: { name: 'mês', capitalizedName: 'Mês' },
                year: { name: 'ano', capitalizedName: 'Ano' }
            },
            it: {
                day: { name: 'giorno', capitalizedName: 'Giorno' },
                week: { name: 'settimana', capitalizedName: 'Settimana' },
                month: { name: 'mese', capitalizedName: 'Mese' },
                year: { name: 'anno', capitalizedName: 'Anno' }
            }
        };
        
        return {
            totalUnits,
            unitsLived,
            unitsRemaining,
            unitNames: unitLabels[language][timeUnit],
            isDeceased
        };
    }
    
    // Helper function to format date for input value
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    // Helper function to format date for display
    function formatDateForDisplay(date, lang) {
        // Format: "Monday, January 1, 2023"
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        // Map des locales pour chaque langue
        const locales = {
            'en': 'en-US',
            'fr': 'fr-FR',
            'es': 'es-ES',
            'pt': 'pt-PT',
            'it': 'it-IT'
        };
        
        const locale = locales[lang] || 'fr-FR';
        return date.toLocaleDateString(locale, options);
    }
});