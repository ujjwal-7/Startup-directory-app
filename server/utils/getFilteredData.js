const startups = require('../startups');

const getFilteredData = (filter) => {

    if(filter === 'All') {
        return startups;
    }
    
    const filters = ['technology', 'ecommerce', 'logistics', 'healthcare', 'food & beverages', 'finance', 'education', 'real estate', 'fmcg', 'consumer internet'];

    if(filter === 'Others') {

        const filteredData = startups.filter((startup) => {

            const industryType = startup.IndustryVertical;
            if(industryType) {
                return !filters.some((item) => industryType.toLocaleLowerCase().includes(item));
                
            }
        });

        return filteredData;
    }

    const filteredData = startups.filter((startup) => {
        
        const industryType = startup.IndustryVertical;

        if(industryType) {
            
            return startup.IndustryVertical.toLowerCase().includes(filter.toLowerCase());
        }
            
    });

    return filteredData;

};

module.exports = getFilteredData;