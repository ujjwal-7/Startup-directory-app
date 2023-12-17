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
    searchStartup
}