export const moneyAbbr2Symbol = (abbr) => {
    switch (abbr) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'RUB': return '₽';
        case 'GBP': return '£';
        case 'CAD': return 'C$';
        case 'AUD': return 'A$';
        default: return abbr;
    }
};
