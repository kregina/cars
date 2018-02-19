function byCompanyCode(rate) {
    return rate.company.code;
}

function byCategoryCode(rate) {
    return rate.vehicle.category;
}

function ratesToCompanies(rates){
    let ratesByCompanyCode = _.groupBy(rates, byCompanyCode)
    return _.mapValues(ratesByCompanyCode, (groupedRates) => {
        return {
            description: groupedRates[0].company.name,
            offices: [{
                latitude: 'SOME_VALUE',
                longitude: 'SOME_VALUE'
            }]
        }
    })
}

function ratesToClusters(rates) {
    let companiesByCategory = nest(rates, [byCategoryCode, byCompanyCode]);
    return _.map(companiesByCategory, (companies, categoryCode) => {
        return {
            category: {
                code: categoryCode,
                description: categoryCode,
                passengers: 'SOME_VALUE',
                baggage_big: 'SOME_VALUE',
                baggage_small: 'SOME_VALUE'
            }, 
            companies: _.map(companies, (rates, companyCode) => {
                return {
                    company_id: companyCode,
                    vehicle: rates[0].vehicle,
                    rates: _.map(rates, (rate) => {
                        _.orderBy(rate.rate_price.daily.amount, ['desc'])
                        return {
                            ids: [
                                rate.availability_id + '|' + rate.rate_id
                            ],
                            default_rate: 'SOME_VALUE',
                            price: rate.rate_price,
                            capabilities: _.map(rate.capabilities, (description, code) => {
                                return  {
                                    code: code.replace(/\[|\]/g, ''),
                                    description: description,
                                    category: 'SOME_VALUE'
                                };
                            }),
                            additional_daily_price: {
                                amount: 'SOME_VALUE',
                                currency: {
                                    code: 'SOME_VALUE',
                                    prefix: 'SOME_VALUE'
                                }
                            },
                            additional_information : {
                                rate_codes: rate.rate_codes,
                                acriss: rate.vehicle.acriss,
                                capabilities_codes: Object.keys(rate.capabilities).map((code) => code.replace(/\[|\]/g, ''))
                            }                                
                        };
                    }),
                    suggested: 'SOME_VALUE'
                };
            })            
        }
    })    
}

function newToOld(newCars) {
    return {
        source_request: newCars.source_request,
        companies: ratesToCompanies(newCars.rates),
        clusters: ratesToClusters(newCars.rates),
        hash: 'SOME_VALUE',
    }
}

var nest = function (seq, keys) {
    if (!keys.length)
        return seq;
    var first = keys[0];
    var rest = keys.slice(1);
    return _.mapValues(_.groupBy(seq, first), function (value) { 
        return nest(value, rest)
    });
};

var result = newToOld(newCars);

console.log(result);