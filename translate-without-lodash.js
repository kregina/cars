function groupRatesByCompanyCode(rates){
    return rates.reduce((result, rate) => {
        let company = result[rate.company.code];
        if(! company){
            company = result[rate.company.code] = {
                description: rate.company.name,
                rates: []
            }
        }
        company.rates.push(rate);
        return result;
    }, {});
}

function ratesToCompanies(ratesGroupedByCompany){
    return Object.keys(ratesGroupedByCompany).reduce((result, companyCode) => {    
        let company = ratesGroupedByCompany[companyCode];
        result[companyCode] = {
            description: company.description,
            offices: []
        }
        //adicionar offices
        company.offices.push({
            latitude: 'SOME_VALUE',
            longitude: 'SOME_VALUE'
        });
        return result;
    }, {})
}

function ratesToClusters(rates, ratesGroupedByCompany){
    let lookup = rates.reduce((result, rate) => {
        var category = result[rate.vehicle.category];
        if(! category){
            category = result[rate.vehicle.category] = {
                category: {
                    code: rate.vehicle.category,
                    description: rate.vehicle.category,
                    passengers: 'SOME_VALUE',
                    baggage_big: 'SOME_VALUE',
                    baggage_small: 'SOME_VALUE'
                },
                companies: [],

            }
        }
        // category.rates.push(rate);
        return result;
    }, {});

    return Object.values(lookup);
    return [];
}

function newToOld(newCars) {
    let ratesGroupedByCompany = groupRatesByCompanyCode(newCars.rates);
    console.log(ratesGroupedByCompany);
    return {
        companies: ratesToCompanies(ratesGroupedByCompany),
        clusters: ratesToClusters(newCars.rates, ratesGroupedByCompany)
    }
}

var result = newToOld(newCars);
console.log(result);