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
        }
    };
    
    // Elements
    const birthdateInput = document.getElementById('birthdate');
    const lifespanInput = document.getElementById('lifespan');
    const timeUnitSelect = document.getElementById('timeUnit');
    const generateButton = document.getElementById('generate');
    const lifeVisualization = document.getElementById('life-visualization');
    const daysLivedElement = document.getElementById('days-lived');
    const daysRemainingElement = document.getElementById('days-remaining');
    const lifePercentageElement = document.getElementById('life-percentage');
    const currentYearElement = document.getElementById('current-year');
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
    }
    
    // Set current year in footer
    currentYearElement.textContent = new Date().getFullYear();
    
    // Set default birthdate to 05.09.1988
    const today = new Date();
    const defaultBirthdate = new Date(1988, 8, 5); // Note: Month is 0-based, so 8 = September
    birthdateInput.value = formatDate(defaultBirthdate);
    
    // Initialize with default values
    generateLifeVisualization();
    
    // Event listeners
    generateButton.addEventListener('click', generateLifeVisualization);
    birthdateInput.addEventListener('change', generateLifeVisualization);
    timeUnitSelect.addEventListener('change', () => {
        updateSubtitle();
        generateLifeVisualization();
    });
    lifespanInput.addEventListener('change', generateLifeVisualization);
    
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
            const errorMsg = language === 'fr' 
                ? 'Veuillez entrer une date de naissance et une espérance de vie valides.' 
                : 'Please enter a valid birth date and life expectancy.';
            alert(errorMsg);
            return;
        }
        
        // Calculate units based on selected time unit
        const { totalUnits, unitsLived, unitsRemaining, unitNames } = calculateUnits(birthdate, lifespan, timeUnit, language);
        
        // Calculate life percentage
        const lifePercentage = Math.min(100, Math.floor((unitsLived / totalUnits) * 100));
        
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
        
        // Determine optimal grid layout based on screen size
        const containerWidth = lifeVisualization.clientWidth;
        // Get the width of the controls element for reference
        const controlsElement = document.querySelector('.controls');
        const controlsWidth = controlsElement ? controlsElement.clientWidth : containerWidth;
        // Calculate reduced width (approximately aligned with the red lines in the user's drawing)
        const desiredWidth = Math.min(controlsWidth * 0.6, 700); // 60% de la largeur du menu, maximum 700px
        
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
        srLabel.textContent = `Visualisation de ${totalUnits} ${unitNames.name}s, représentant ${lifespan} années de vie.`;
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
        const lang = languageSelect.value;
        const unitLabels = {
            fr: { day: "", week: "Semaine", month: "Mois", year: "Année" },
            en: { day: "", week: "Week", month: "Month", year: "Year" }
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
            } else if (i === unitsLived) {
                dot.classList.add('today');
                
                // Ajouter un indicateur spécial pour le point actuel
                const currentDot = document.createElement('span');
                currentDot.className = 'sr-only';
                currentDot.textContent = lang === 'fr' ? 'Aujourd\'hui' : 'Today';
                dot.appendChild(currentDot);
                
                // Améliorer l'accessibilité
                dot.setAttribute('aria-current', 'true');
            } else if (i === totalUnits - 1) {
                // Ajouter une tête de mort pour le dernier point (point de la mort)
                dot.classList.add('death');
                dot.innerHTML = '💀';
                dot.title = lang === 'fr' ? 'Fin de vie estimée' : 'Estimated end of life';
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
            const displayDate = formatDateForDisplay(dotDate, lang);
            
            // Ajouter le titre descriptif
            let title;
            if (timeUnit === 'day') {
                title = `${displayDate}`;
            } else {
                title = `${unitLabels[lang][timeUnit]} ${i+1}: ${displayDate}`;
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
                    const currentLabel = lang === 'fr' ? "AUJOURD'HUI" : "TODAY";
                    const unitLabelsUpper = {
                        fr: { day: "JOUR", week: "SEMAINE", month: "MOIS", year: "ANNÉE" },
                        en: { day: "DAY", week: "WEEK", month: "MONTH", year: "YEAR" }
                    };
                    
                    alert(`🔴 ${currentLabel} - ${unitLabelsUpper[lang][timeUnit]} ${index+1}\n${title}`);
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
        const daysRemaining = Math.max(0, Math.floor(lifespanDays - daysLived));
        
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
        const unitsLived = Math.floor(daysLived / factor);
        const unitsRemaining = Math.floor(daysRemaining / factor);
        
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
            }
        };
        
        return {
            totalUnits,
            unitsLived,
            unitsRemaining,
            unitNames: unitLabels[language][timeUnit]
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
        const locale = lang === 'en' ? 'en-US' : 'fr-FR';
        return date.toLocaleDateString(locale, options);
    }
});