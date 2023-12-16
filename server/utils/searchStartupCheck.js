const searchStartupCheck = (startup, query) => {

    if(startup.StartupName && startup.StartupName.toLowerCase().includes(query.toLowerCase())) {
        return true
    }

    if(startup.CityLocation && startup.CityLocation.toLowerCase().includes(query.toLowerCase())) {
        return true;
    }

    if(startup.InvestorsName && startup.InvestorsName.toLowerCase().includes(query.toLowerCase())) {
        return true;
    }

    if(startup.AmountInUSD && startup.AmountInUSD.toLowerCase().includes(query.toLowerCase())) {
        return true;
    }

    if(startup.investmentType && startup.investmentType.toLowerCase().includes(query.toLowerCase())) {
        return true;
    }

    return  false;
}

module.exports = searchStartupCheck;