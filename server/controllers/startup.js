const fs = require('fs');
const startups = require('../startups');
const getFilteredData = require('../utils/getFilteredData');
const searchStartupCheck = require('../utils/searchStartupCheck');

const getAllStartups = (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const filter = req.query.filter || 'All';
    const itemsPerPage = 18;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredStartups = getFilteredData(filter);

    const paginatedStartups = filteredStartups.slice(startIndex, endIndex);

    res.status(200).json({
        startups: paginatedStartups,
        currentPage: page,
        totalPages: Math.ceil(filteredStartups.length / itemsPerPage)
    });


}

const addStartup = (req, res) => {

    const { startupName, date, industryVertical, subVertical, cityLocation, investorsName, investmentType, funding } = req.body;

    if(!startupName || !date || !industryVertical || !subVertical || !cityLocation || !investorsName || !investmentType || !funding) {
        return res.status(400).json({message: 'All fields are required!'})
    }

    const newStartup = {
        
        Date: date,
        StartupName: startupName,
        IndustryVertical: industryVertical,
        SubVertical: subVertical,
        CityLocation: cityLocation,
        InvestorsName: investorsName,
        InvestmentType: investmentType,
        AmountInUSD: funding
    }
    
    fs.readFile('./startups.json', (e, data) => {

        if(e) {
            return res.status(500).json({message: 'Interval server error'});
        }

        const startups = JSON.parse(data);
        
        const startupExists = startups.some((startup) => {
            return startup.StartupName.toLowerCase() ===  newStartup.StartupName.toLowerCase();
        });

        if(startupExists) {
            return res.status(400).json({ message: 'Startup with the same name already exists!' });
        }

        startups.push(newStartup);
        fs.writeFile('./startups.json', JSON.stringify(startups), (e) => {

            if(e) {
                return res.status(500).json({message: 'Interval server error'});
            }

            return res.status(200).json({ message: 'Startup Added successfully' });

        });
    });
}

const searchStartup = (req, res) => {

    const searchQuery = req.query.searchQuery;
    const page = parseInt(req.query.page) || 1;
    const itemsPerPage = 18;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if(!searchQuery) {
        return res.status(400).json({ error: 'Query parameter is required for search.' });
    }

    const filteredStartups = startups.filter((startup) => {

        if(searchStartupCheck(startup, searchQuery)) {
            return true;
        }
        return false;
    });

    const paginatedStartups = filteredStartups.slice(startIndex, endIndex);

    res.status(200).json({
        startups: paginatedStartups,
        currentPage: page,
        totalPages: Math.ceil(filteredStartups.length / itemsPerPage)
    });

}

module.exports = {
    getAllStartups,
    addStartup,
    searchStartup
}