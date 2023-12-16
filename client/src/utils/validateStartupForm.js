export const validateStartupForm = (formData) => {

    const newError = {};

    if(!formData.startupName.trim()) {
        newError.startupName = 'Startup name is required.'
    }

    if(!formData.date.trim()) {
        newError.date = 'Launch date is required.'
    }

    const fundingAmount = parseInt(formData.funding);
    if(isNaN(fundingAmount) || fundingAmount <= 0) {
        newError.funding = 'Funding amount must be a positive number.'
    }

    if(!formData.industryVertical.trim()) {
        newError.industryVertical = 'Industry vertical is required.'
    }

    if(!formData.subVertical.trim()) {
        newError.subVertical = 'Sub vertical is required.'
    }

    if(!formData.cityLocation.trim()) {
        newError.cityLocation = 'Location is required'
    }

    if(!formData.investorsName.trim()) {
        newError.investorsName = 'Investors are required.'
    }

    if(!formData.investmentType.trim()) {
        newError.investmentType = 'Investment type is required.'
    }


   return newError;
}

