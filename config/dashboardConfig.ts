// GitLab Configuration
export const GITLAB_CONFIG = {
    API_URL: 'https://gitlab.com/api/graphql',
    GROUP_PATH: 'dhbw-se/se2-tinf23b6/g2-julia',
    TOKEN: 'glpat-0-mjyX9VB_TCowcUSxVPPm86MQp1OmRyeXU1Cw.01.120xuoirr',
    ISSUE_BASE_URL: 'https://gitlab.com/dhbw-se/se2-tinf23b6/g2-julia/wc/-/issues'
} as const;

// Team Members
export const TEAM_MEMBERS = [
    "KlausKleber1969",
    "maxjjj", 
    "joscha20044",
    "mohammad-ahmadi10",
] as const;

// Category Configuration
export const CATEGORIES = {
    REQUIREMENTS_ENGINEERING: "Requirements Engineering",
    ENTWURF: "Entwurf", 
    IMPLEMENTATION_TEST: "Implementation & Test",
    PROJEKTMANAGEMENT: "Projektmanagement"
} as const;

export const CATEGORY_MAP = {
    [CATEGORIES.REQUIREMENTS_ENGINEERING]: 0,
    [CATEGORIES.ENTWURF]: 0,
    [CATEGORIES.IMPLEMENTATION_TEST]: 0,
    [CATEGORIES.PROJEKTMANAGEMENT]: 0,
} as const;

export const CATEGORY_LIST = Object.values(CATEGORIES);

// Color Schemes
export const COLORS = {
    PRIMARY: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    TEAM: [
        '#0088FE', // Blau
        '#00C49F', // Türkis
        '#FFBB28', // Gelb
        '#FF8042', // Orange
        '#8884D8', // Lila
        '#82CA9D', // Grün
        '#FF6B6B', // Rot
        '#4ECDC4', // Mint
        '#45B7D1', // Hellblau
        '#96CEB4', // Pastellgrün
        '#FFEEAD', // Cremegelb
        '#D4A5A5'  // Rosé
    ],
    HEATMAP: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    CATEGORY: {
        [CATEGORIES.REQUIREMENTS_ENGINEERING]: '#8884d8', // Blau
        [CATEGORIES.ENTWURF]: '#82ca9d', // Grün
        [CATEGORIES.IMPLEMENTATION_TEST]: '#ffc658', // Gelb
        [CATEGORIES.PROJEKTMANAGEMENT]: '#ff8042', // Orange
    }
} as const;

// Chart Configuration
export const CHART_CONFIG = {
    HEIGHTS: {
        SMALL: 200,
        MEDIUM: 300,
        LARGE: 400
    },
    ANGLES: {
        LABEL_ROTATION: -45
    },
    DECIMAL_PLACES: 2
} as const;

// Time Configuration
export const TIME_CONFIG = {
    SECONDS_PER_HOUR: 3600,
    SECONDS_PER_MINUTE: 60,
    HOURS_PER_DAY: 24,
    DAYS_PER_WEEK: 7
} as const;

// Deviation Thresholds
export const DEVIATION_THRESHOLDS = {
    EXCELLENT: 10,  // ≤ 10% deviation
    GOOD: 30,       // ≤ 30% deviation
    POOR: 50        // > 50% deviation
} as const;

// Display Configuration
export const DISPLAY_CONFIG = {
    MAX_TITLE_LENGTH: 50,
    MAX_CATEGORY_LENGTH: 30,
    TOP_COLLABORATIONS: 6,
    TOP_ISSUES: 5
} as const;

// German Day Names
export const GERMAN_DAYS = [
    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 
    'Donnerstag', 'Freitag', 'Samstag'
] as const;

export const GERMAN_DAY_SHORT = [
    'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
] as const;

// Error Messages
export const ERROR_MESSAGES = {
    FETCH_ISSUES: 'Error fetching issues',
    FETCH_TIMELOGS: 'Error fetching timelogs',
    LOADING_ERROR: 'Fehler beim Laden der Daten',
    NO_DATA: 'Keine Daten verfügbar',
    LOADING: 'Daten werden geladen...'
} as const;

// Tooltip Labels
export const TOOLTIP_LABELS = {
    HOURS: 'Stunden',
    TEAM_MEMBERS: 'Teammitglieder',
    DEVIATION: 'Abweichung',
    TOTAL_HOURS: 'Gesamtstunden',
    HOURS_PER_WEEK: 'Stunden pro Woche'
} as const;

// Chart Labels
export const CHART_LABELS = {
    ESTIMATED_TIME: 'Geschätzte Zeit',
    ACTUAL_TIME: 'Tatsächliche Zeit',
    AVERAGE_DEVIATION: 'Durchschnittliche Abweichung',
    TEAM_SIZE: 'Durchschnittliche Teamgröße',
    AVERAGE_TIME_PER_ISSUE: 'Durchschnittliche Zeit pro Issue',
    WORK_TIME: 'Arbeitszeit'
} as const;

// Section Titles
export const SECTION_TITLES = {
    PROJECT_OVERVIEW: 'Projektübersicht',
    TIME_DEVELOPMENT: 'Zeitliche Entwicklung',
    TEAM_CATEGORIES: 'Team & Kategorien',
    PRODUCTIVITY_ANALYSIS: 'Produktivitätsanalyse',
    TEAM_COLLABORATION: 'Team Zusammenarbeit',
    ISSUE_ANALYSIS: 'Issue Analyse',
    ISSUE_TIME_ANALYSIS: 'Issue Zeitanalyse',
    DETAILED_ACTIVITY: 'Detaillierte Aktivität'
} as const;

// KPI Labels
export const KPI_LABELS = {
    WEEKLY_PERFORMANCE: 'Durchschnittliche Wochenleistung',
    MAIN_FOCUS: 'Hauptfokus',
    ISSUE_COMPLETION_TIME: 'Durchschnittliche Issue-Abschlusszeit',
    MOST_ACTIVE_WEEK: 'Aktivste Woche',
    ACTIVE_WEEKS: 'aktive Wochen',
    HOURS_PER_WEEK: 'h pro Woche',
    COMPLETED_ISSUES: 'abgeschlossene Issues'
} as const;

// Chart Titles
export const CHART_TITLES = {
    WEEKLY_PERFORMANCE: 'Wöchentliche Leistung',
    CUMULATIVE_PROGRESS: 'Kumulativer Fortschritt',
    TEAM_ACTIVITY_COMPARISON: 'Team Aktivitätsvergleich',
    HOURS_PER_WEEK_PER_PERSON: 'Stunden pro Woche pro Person',
    CATEGORY_TREND: 'Kategorie-Trend',
    CATEGORY_DISTRIBUTION: 'Kategorie Verteilung',
    TEAM_ACTIVITY: 'Team Aktivität',
    HOURLY_DISTRIBUTION: 'Tageszeitliche Verteilung',
    WEEKLY_DISTRIBUTION: 'Wöchentliche Verteilung',
    TOP_COLLABORATIONS: 'Top Team Zusammenarbeit',
    AVERAGE_TEAM_SIZE: 'Durchschnittliche Teamgröße pro Issue',
    ISSUE_COMPLEXITY: 'Issue Komplexität',
    TIME_COMPARISON: 'Zeitvergleich nach Kategorien',
    DAILY_ACTIVITY: 'Tägliche Aktivität'
} as const; 
