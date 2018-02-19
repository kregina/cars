var oldCars = {
    "source_request": {
        "pick_up_location": {
            "iata": "MIA",
            "type": "AIRPORT",
            "country_code": "USA",
            "description": "Aeropuerto Internacional Miami"
        },
        "drop_off_location": {
            "iata": "MIA",
            "type": "AIRPORT",
            "country_code": "USA",
            "description": "Aeropuerto Internacional Miami"
        },
        "pick_up_date": "2018-02-18",
        "pick_up_time": "10:00",
        "drop_off_date": "2018-02-22",
        "drop_off_time": "10:00",
        "requested_days": 4,
        "age_range": "AGE_25"
    },
    "companies": {
        "ZL": {
            "description": "NATIONAL",
            "offices": [
                {
                    "latitude": 25.79861,
                    "longitude": -80.25995
                }
            ]
        },
        "ZR": {
            "description": "DOLLAR",
            "offices": [
                {
                    "latitude": 25.79698,
                    "longitude": -80.26198
                }
            ]
        },
        "ZT": {
            "description": "THRIFTY",
            "offices": [
                {
                    "latitude": 25.79698,
                    "longitude": -80.26198
                }
            ]
        },
        "ZD": {
            "description": "BUDGET",
            "offices": [
                {
                    "latitude": 25.8,
                    "longitude": -80.28333
                }
            ]
        },
        "AL": {
            "description": "ALAMO",
            "offices": [
                {
                    "latitude": 25.79845,
                    "longitude": -80.26075
                }
            ]
        },
        "ZE": {
            "description": "HERTZ",
            "offices": [
                {
                    "latitude": 25.8,
                    "longitude": -80.28332
                }
            ]
        },
        "ZI": {
            "description": "AVIS",
            "offices": [
                {
                    "latitude": 25.8,
                    "longitude": -80.28333
                }
            ]
        }
    },
    "clusters": [
        {
            "category": {
                "code": "ECONOMY",
                "description": "ECONOMY",
                "passengers": 4,
                "baggage_big": 1,
                "baggage_small": 1
            },
            "companies": [
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Kia Rio",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3d7fecc6-f1f7-4917-b795-bd93154dd026"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1127.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 4509,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1409.07,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 5636.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2608cb32-c9d2-4c49-bdfb-0ecb3ce89b2f"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1298.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5193,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1622.82,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 6491.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "KIA RIO",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a192728b-0a49-4c61-9e1f-23dbe54278d9"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1142.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 4570,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|982ea40c-dc47-4e27-b3e2-a5b4096e689c"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1331.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5325,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 188.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|773db826-8f33-4bfe-98dd-2253cac45eba"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1486.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5945,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 343.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ab3320ca-7abf-4c8b-8e41-12b057735af3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1486.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5945,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 343.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4409e8ac-c938-4a1b-9a1c-b8626e9f7e22"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1641,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6564,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 498.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Chevrolet Spark",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|737a0f3d-35b4-4950-9b74-0ffbab88edb3"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1326.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5305,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b350779d-a3fa-47aa-92be-67212f1bfcaf"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1496.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5986,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a30fa50d-d4a6-4322-90c4-065deba66ea0"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1527.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6110,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|0920d467-5228-490c-8045-d1f41a11e788"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1697.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6791,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Ford Fiesta",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|38b19755-6137-4e27-aa2e-008cf937ec22"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1327,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5308,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b743d710-fc9f-4cde-878e-f5c4f50ead5c"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1481.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5927,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|e7ced02e-5861-4b27-9123-b16f654b79a1"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1481.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5927,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|03e1f5cf-9d77-434d-8dfd-5014a592953e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1636.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6547,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Chevrolet Spark",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3028e615-4f93-4dad-8228-24d8b564afd0"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1352,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5408,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|8bdc9b46-baf4-4ba4-a007-18fb65051d29"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1522.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6089,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|95cab8d1-df78-48f3-806c-04334cc78377"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1723.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6894,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "EDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Fiesta",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f7385a07-1c7a-40fb-bcc8-ea57b64af9c1"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1430.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5721,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3513deb6-ba20-452c-b784-86a1e9a5fcae"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1585,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6340,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|d01b5941-853b-46d0-b31a-752f1df3e1df"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1729.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6918,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "KIA RIO",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b8300135-ef7a-4493-a83e-a34bae04a746"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1486.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5945,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|20434d53-60db-4a6e-b453-5c2e39138b97"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1641,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6564,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ad5a1408-9075-4da0-818b-c323ee568a50"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1641,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6564,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ECAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "COMPACT",
                "description": "COMPACT",
                "passengers": 5,
                "baggage_big": 1,
                "baggage_small": 1
            },
            "companies": [
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Ford Focus",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|7cc1daae-fc91-4cac-bef8-fb2fe37ca2dd"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1144.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 4579,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1430.94,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 5723.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|da16f220-ef0c-4803-9c41-b3478f9e1390"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1315.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5263,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1644.69,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 6578.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "NISSAN VERSA NOTE",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2d5880bf-580e-4b46-b587-42e2cbc896f0"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1204.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 4818,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|6ef94f97-4458-44b6-a734-43bba672e0c3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1352,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5408,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 147.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9897b335-1209-4f33-ad5d-87d4311089c2"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1506.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6027,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 302.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|74333b6b-6e41-43f8-82ee-3dabfc5d8276"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1506.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6027,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 302.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|8c0a74cb-173b-4d01-85f0-8483eab42e81"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1661.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6647,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 457.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "NISSAN VERSA NOTE",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2b623d3f-8854-472b-8c37-f78fd9f902b2"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1234.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 4938,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NDC1",
                                    "cd": "NS0399NS",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f17f159c-c333-41a3-83f8-f176e04c6642"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1506.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6027,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 272.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4822dd93-3f90-41f3-88c5-fcc962461ab5"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1661.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6647,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 427.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b718541c-dbb3-45b6-9973-e3b4202fcf29"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1661.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6647,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 427.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Nissan Versa",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5b70cb21-4a3e-466f-96bb-9f1313c79693"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1346.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5387,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|801a90a1-1783-47c5-b46b-80dfc2f4c200"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1517.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6069,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|8055b4a4-0fdb-4d26-a1b9-7d041ea47e0e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1548,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6192,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|fccdf2af-f727-4c7d-b6f9-99fcad5bc457"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1718.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6874,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Ford Focus",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a969d2d9-6ce9-4d21-922a-14dff0901c12"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1348.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5394,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|6a996af7-e28d-4162-984c-1da292271b4e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1503.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6013,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|bf586740-5353-4d0e-b4dd-aff09009d2f3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1503.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6013,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|23b9498d-9f56-4cee-90c5-b71853788cec"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1658.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6633,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Nissan Versa Note",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3a1406f0-36b3-4289-9b9d-c96be75538c8"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1377.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5511,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ae629579-6bc3-40c5-852f-44009c146ac7"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1548,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6192,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|233af1da-ee34-4941-90b7-d965952b1a41"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1749.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6997,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Focus",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5e5699f8-830d-4925-81dc-ff4a8948ed0d"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1451.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5807,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f46e9459-872b-4a20-90b6-a38da34e6322"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1606.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6426,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|115d48bc-a534-4c48-a9e5-85227bac554e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1751,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7004,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "CCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "INTERMEDIATE",
                "description": "INTERMEDIATE",
                "passengers": 5,
                "baggage_big": 1,
                "baggage_small": 1
            },
            "companies": [
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Toyota Corolla",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9eb86b18-6039-4223-bdf8-6461d3f5931e"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1285.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5141,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1606.57,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 6426.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9f4ec462-fb38-4707-a059-20218eed4bb1"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1456.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5825,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1820.32,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 7281.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "TOYOTA COROLLA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|e57047bc-c2b9-4e02-823e-ffb6627e775f"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1287,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5148,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|dfe53a21-3e87-44ae-bb01-bc0f7aa68e06"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6048,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 225,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|0f7344d9-83d0-4d39-b5c0-1f1983ce4268"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1666.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6667,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 379.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|6ca70396-792b-4ff2-b267-45a3988ac098"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1666.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6667,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 379.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|cccbd12d-9027-4ba1-ba76-0bd29edbf23e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1821.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7286,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 534.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Hyundai Elantra",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a29ae6ec-abc3-42f9-9acd-08553c1264e7"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1510,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6040,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ede2a216-ef42-4634-9579-d6e71d26ba28"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1664.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6659,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|35351616-7661-44f3-994a-2e7325bb920b"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1664.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6659,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a51b7cbe-54c0-4908-a8ab-b1758a04d730"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1819.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7278,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Toyota Corolla",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5d860faf-5004-45af-9747-165570fbf91f"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6048,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9b659986-e0e2-47ec-9c60-5ce7170eae50"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1682.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6729,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|0c1b52ee-806f-47bc-a2f1-381195bd0d7a"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1713.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6853,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|879a78e7-8bbc-4a3e-a191-ab8651c8a42a"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1883.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7534,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Toyota Corolla",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5bdf8f92-2bd3-450e-8d9a-da2bcae1a06f"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6048,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "IDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ca90548e-e804-4bae-b311-8fc93c30ff95"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1682.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6729,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "IDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|df7eaf77-3f2d-41ae-b21e-5758d1bbb805"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1883.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7534,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "IDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Chevrolet Cruze",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ef2b39c0-f71c-4557-a506-603c7dd4cae5"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1613.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6453,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c1dd0964-e630-4bb0-9fc6-0a00d258ad5a"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1768,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7072,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c9a82fe4-5e32-41c9-8fca-f35b3804b01e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1912.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7650,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "TOYOTA COROLLA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4531d171-5806-4a28-bba9-83ad7928e4dd"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1666.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6667,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9c0ff434-fbc1-4284-ac8c-aac3c69642bb"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1821.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7286,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f5b811b8-5b5f-4af6-b814-0de2de1a7f6d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1821.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7286,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "ICAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "FULLSIZE",
                "description": "FULLSIZE",
                "passengers": 5,
                "baggage_big": 1,
                "baggage_small": 1
            },
            "companies": [
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "NISSAN ALTIMA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|8aec4833-503a-4d99-ad01-166c93c1e83b"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1390.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 5561,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|329a789f-9f27-45bd-9ec3-ab340c0355b8"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1955.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7823,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 565.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|140ca6f8-9391-49df-be12-a18bda639904"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2110.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8442,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 720.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9bf2832b-4bc9-40af-825b-b1ab25fec4ad"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2110.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8442,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 720.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|824754eb-6769-4f50-a3ab-6017ebded637"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 875.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Chevrolet Malibu",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|938bab8e-54c2-41f5-bac9-0a72ca0d3831"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1513.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6053,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 1891.57,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 7566.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|bc01e62b-f9dd-4098-a8fc-0160904ff244"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1684.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6737,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2105.32,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 8421.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Chevrolet Malibu",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9778e72a-93c7-469f-a9fc-82cf921ecca8"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1778.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7115,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|521f31a6-156b-4989-8563-d18fe024ba4c"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1933.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7734,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|efc841eb-8699-48b8-8d47-5c3e59ecd7ec"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1933.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7734,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a09619c7-a228-45ee-a670-dcbc69dce13f"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2088.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8353,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Chrysler 200",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ee1cfc9e-a01a-43ce-91e0-6467be9b4335"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1780.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7121,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "FDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a477efc8-6c07-4ce3-9cbb-f6d673ea1960"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1950.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7803,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "FDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5525970c-4983-410d-ae35-60a14856497b"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2152,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8608,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "FDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Chrysler 200",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9f10ea4b-ad76-42c7-bbab-62e4b38850f1"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1780.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7121,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|eba25148-b712-4a70-bc02-421c11f5a541"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1950.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7803,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2fe9dd44-6f65-4c82-b7e1-40b8e860940e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1981.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7926,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|d9a42bbd-2ec0-485d-b435-f3fcc013d070"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2152,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8608,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Fusion",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|45beddef-7e6c-4521-9ec3-2f41dec8b76b"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1882,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7528,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|173fbd3f-6dd9-46ec-97ed-45f3a7a3ca34"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2036.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8147,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|31b8bd1b-04dd-4225-9993-f12e80c7688f"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2181.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8725,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "NISSAN ALTIMA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a2d02266-4a11-4af1-8929-014e3f9c2394"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1909.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7638,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT2",
                                    "cd": "NS0399NI",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|679bd3eb-d6d1-4712-9a64-2d4d889684ab"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2110.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8442,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c925cb6d-14fe-4126-89cf-30a60b3e8b5b"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 356,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3a4d804b-4591-4e8e-95b3-4852e45e4683"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 356,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "FCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "LUXURY",
                "description": "LUXURY",
                "passengers": 5,
                "baggage_big": 2,
                "baggage_small": 2
            },
            "companies": [
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Chevrolet Impala",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|73b203d2-49aa-45aa-8bc1-45416270ba03"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1706.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6825,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2132.82,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 8531.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|06577536-36a5-4d6b-8e46-bc9360b021b5"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1877.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7509,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2346.57,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 9386.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "CEHVY IMPALA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f7a3ddef-9b59-460c-962f-e5e00c0c5f59"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1720.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 6883,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|05db8e98-002a-424a-9d4f-31263e01a902"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2213.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8855,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 493,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|166d75d4-e62e-46b7-8c74-400faab96fec"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2368.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9475,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 648,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|632338e1-7885-4d6d-93f5-f97f0e5f95f6"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2368.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9475,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 648,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|658f5b2c-2e6a-4366-99a0-6ba5d980511d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2523.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10094,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 802.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "CHEVY IMPALA",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4d12c3b5-8c8e-4fd3-bdb4-8569779cd418"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1940.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7761,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT2",
                                    "cd": "NS0399NI",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4dd6d817-d2cc-4c4e-b776-ef006c8d2d37"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2368.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9475,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 428.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9a0e1723-cdc9-400d-8752-8c846e6da6be"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2523.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10094,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 583.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b45a2850-068f-4056-a64b-449f3d3ffb3e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2523.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10094,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 583.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Chevrolet Impala",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|dd7733b8-eadc-4089-82b1-801b819e78a1"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2007.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8030,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ee0c3917-b3c1-4504-ae7f-1ffddb3cf2db"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2177.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8711,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|24bacfc0-a78e-4c7d-80bb-80230db7830a"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2379,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9516,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Chevrolet Impala",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a042c3fa-71ad-4049-8f4b-33aca5f1295b"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2007.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8030,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|9613c7dd-7da0-464c-a0e3-873f9e11185e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2177.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8711,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c2f3f355-4fe0-4241-8a35-b997ec577ccf"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2208.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8835,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ac21ab62-dcec-4b85-8c54-54c36b76c42e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2379,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9516,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "PDAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Chevrolet Impala LT",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|df0c07cb-87fb-496c-8d76-3188c9833574"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2146.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8586,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5c06a938-1352-4cf6-94be-73a1144b3324"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2301.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9205,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|124c2cf5-c5e2-4ce4-97de-937b5581eb2f"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2301.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9205,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c6021bbe-3302-4374-afee-369dd6cc4770"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2456.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9825,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Taurus",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|d7678036-ea52-409e-828c-c0a548411e40"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2301.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9205,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3dbd30f4-f947-48a3-9750-7d6618e4297d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2456.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9825,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 155,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|d3cb22ab-9dbd-4b4c-bad9-35ca74613579"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2600.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10403,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "PCAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "SUV",
                "description": "SUV",
                "passengers": 5,
                "baggage_big": 2,
                "baggage_small": 2
            },
            "companies": [
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "TOYOTA RAV4",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|59e1797c-30cb-4d98-abbf-c2a53ef43b0a"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1761.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7047,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|25948508-6a34-47a1-ae47-c57ecba4db33"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2110.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8442,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 348.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a5cf5052-8203-4dc9-8388-64173b3925eb"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 503.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|99ef2aa0-760e-488f-af2b-d356b87b114e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 503.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|22864565-a415-4927-967a-5af4f58dfab3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2420.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9681,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 658.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Jeep Compass",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a4f912fe-f71a-42eb-a900-f307fe2bb284"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1789.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7158,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2236.88,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 8947.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|87235d64-3089-44b6-b2c8-a98c4b145508"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 1960.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7843,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2450.94,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 9803.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Jeep Compass",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|15e122df-7653-47d4-82e0-b93ba4269189"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2105.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8422,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5b101417-1fb2-4847-9610-e362da4ba183"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2275.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9103,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|5d8bf9bb-3e1a-4140-aca6-e9dca144eebc"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2306.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9227,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|688784dd-747e-4686-b32e-4122d64ce11b"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2477,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9908,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Jeep Compass",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|861f86c5-db6e-477b-adfd-dae72f305bb3"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2105.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8422,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|462583bd-928b-4b58-ab3b-3c0372e447d6"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2275.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9103,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|32f72120-d625-471a-894e-6afb04bb71fb"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2477,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9908,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Ford Escape",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|76a1c3bf-0e63-4f3f-84a1-2ca617cdd3e0"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2106.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8427,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ca5fe33b-1e21-4477-bed2-8e0ee4de546a"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2261.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9046,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c8a0389c-2e2f-4862-b4eb-07d5f8bc3160"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2261.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9046,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2eace9f7-0cf2-4ef3-b519-76b6c99065a3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2416.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9665,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "TOYOTA RAV4",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|423eff73-160c-4737-a840-c68d46271d8a"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2198,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8792,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT2",
                                    "cd": "NS0399NI",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f38e6a15-7cdc-4ad4-b2e3-392d0c46c3ac"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2265.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9062,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 67.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f5a14621-1742-411c-ad44-6f624e29fd2e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2420.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9681,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 222.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|597b3ff3-fa75-45d6-9e8a-35dedd2ee5fd"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2420.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9681,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 222.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Escape",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b2cc2c22-448d-4546-b8f4-32699005c0ff"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2210,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8840,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|fc469d55-dcba-40e0-9e3e-79906867f52e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2364.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9459,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|e2be1d62-ede4-4909-8b76-02998026225c"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2509.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10037,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "IFAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "VAN",
                "description": "VAN",
                "passengers": 7,
                "baggage_big": 2,
                "baggage_small": 2
            },
            "companies": [
                {
                    "company_id": "AL",
                    "vehicle": {
                        "model": "Dodge Grand Caravan",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2f7520a4-0e75-4cfd-b36c-e28c5efccda3"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1885.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7543,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADC1",
                                    "cd": "S00470TM",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "SSU",
                                    "CRF",
                                    "SCG",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c7a2b18e-7bb3-4e13-98c5-b32c8d7a956d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3473,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 13892,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1587.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "MF1",
                                    "cd": "S00470MF",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|ef9ab714-c4c5-4420-a463-bab4bc4cc1f3"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3628,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 14512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1742.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "P31",
                                    "cd": "S00470P3",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|3b4ddeca-89d0-4ca6-a607-227970f87617"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3628,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 14512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1742.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "JS1",
                                    "cd": "S00470NK",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_ALAMO*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|243c020f-c394-49b8-aa28-4f86a69248ee"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3782.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 15131,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "SSU",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "CDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                },
                                {
                                    "code": "EP",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1897,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "GP1",
                                    "cd": "S00470GP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "NAV",
                                    "AMADD",
                                    "AMGPS",
                                    "TAX",
                                    "EP",
                                    "AMTAN",
                                    "VLE",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "CDW",
                                    "TBF"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Dodge Grand Caravan",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|47727491-392c-42d0-967c-d1f09131cce8"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 1899,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 7596,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|c80230c3-3e11-4b50-9fae-affea746df98"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2730.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10922,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 831.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|62daab17-8dca-4514-9698-27f1c1cc7d83"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2885.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11541,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 986.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZE",
                    "vehicle": {
                        "model": "Dodge Grand Caravan",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b33dfa35-f3db-4169-b568-545117493eaa"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2232.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 8931,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 2790.94,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 11163.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADF",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_HERTZ*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|a0c51da1-f81f-42a2-a935-78ee9b724836"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2403.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9615,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": {
                                    "amount": 3004.69,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total_without_discount": {
                                    "amount": 12018.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "discount": 0.2
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AIR",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 171,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "ADP",
                                    "cd": "1083008",
                                    "it": "HI00380833",
                                    "pc": "176131"
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AIR",
                                    "TAX",
                                    "AMTAN",
                                    "VLE",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZL",
                    "vehicle": {
                        "model": "Dodge Grand Caravan",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4032ab31-b463-4838-b917-6a6a0e945900"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2253.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 9013,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT2",
                                    "cd": "NS0399NI",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "UNL",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b157e40f-f48d-4e35-887d-17022f34e96e"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3628,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 14512,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1374.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT5",
                                    "cd": "NS0399CT",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|e00b2d33-7406-4b4e-b04e-c61352db55c4"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3782.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 15131,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1529.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT3",
                                    "cd": "NS0399NP",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "TBF",
                                    "TAX",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_NATIONAL*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|78c0f008-ece4-42f5-91f9-ee6a790885f6"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3782.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 15131,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "VLF",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "NAV",
                                    "description": "Gps",
                                    "category": null
                                },
                                {
                                    "code": "CRF",
                                    "description": "Cargos de aeropuerto",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 1529.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "NAT6",
                                    "cd": "NS0399CE",
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "VLF",
                                    "SLI",
                                    "NAV",
                                    "UNL",
                                    "AMADD",
                                    "SSU",
                                    "SCG",
                                    "CRF",
                                    "AMGPS",
                                    "TBF",
                                    "TAX",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZT",
                    "vehicle": {
                        "model": "Nissan Quest",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|b0363dff-79f9-4702-91a9-46aac35d9237"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2575,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10300,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002842LGA",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|4ed22cde-2c9a-4a02-90ff-4198fef70607"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2745.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10982,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002842PSG",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|394b0974-29a9-4198-8798-21f92936cb9f"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2776.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11105,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 201.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8MLB",
                                    "cd": null,
                                    "it": "IT1002842MLB",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_THRIFTY*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|36bead72-4db0-43b2-91eb-24e0cf108f9b"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2946.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11787,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "FEE",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002842LSN",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZR",
                    "vehicle": {
                        "model": "Nissan Quest",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|59effb93-c02e-49f8-bbf7-58a12d76620d"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2575,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10300,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LGA",
                                    "cd": null,
                                    "it": "IT1002839LGA",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "FEE",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|912984ef-45e1-4d8f-b9f5-535aedd67424"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2745.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10982,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 170.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8PSG",
                                    "cd": null,
                                    "it": "IT1002839PSG",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_DOLLAR*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|004e25ba-31fe-4468-a76b-8ec0e1ff623d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2946.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11787,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SCG",
                                    "description": "Cargos adicionales",
                                    "category": "IMP"
                                },
                                {
                                    "code": "TAX",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "SLC",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 371.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "L8LSN",
                                    "cd": null,
                                    "it": "IT1002839LSN",
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SCG",
                                    "AMGPS",
                                    "FEE",
                                    "NVS",
                                    "TAX",
                                    "SLC",
                                    "AMTAN",
                                    "PFU",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Chrysler Town & Country",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|16ccfda3-56cb-40e9-9934-32c6c126f51e"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2679,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10716,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|6352fcd7-24b1-47c8-b743-fe740ddbdec6"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2833.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11335,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|21cb0ad7-090d-4465-9c65-6115b4746928"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2978.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11913,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "MVAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                }
            ]
        },
        {
            "category": {
                "code": "SPORT",
                "description": "SPORT",
                "passengers": 5,
                "baggage_big": 1,
                "baggage_small": 1
            },
            "companies": [
                {
                    "company_id": "ZD",
                    "vehicle": {
                        "model": "Ford Mustang",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|f8064b4f-fb88-4c61-a8ee-1c6fc5582297"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2633.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10535,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LQ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|17c5737a-f151-47f8-8e12-36cb5f54d456"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2788.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11154,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "LV",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|79d3c076-feb8-44d9-9272-c68c42e1d03d"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2788.5,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11154,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "BZ",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_BUDGET*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|90877b73-b19a-48fd-952c-150e19be90ea"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2943.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11773,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "SLI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 309.5,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "HX",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "SLI",
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW"
                                ]
                            }
                        }
                    ],
                    "suggested": false
                },
                {
                    "company_id": "ZI",
                    "vehicle": {
                        "model": "Ford Mustang",
                        "category": null,
                        "air_conditioner": true,
                        "automatic_transmission": true
                    },
                    "rates": [
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|2b7bbd75-dbb6-4425-b40b-b2294073770c"
                            ],
                            "default_rate": true,
                            "price": {
                                "daily": {
                                    "amount": 2737,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 10948,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": null,
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "H8",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|93e8c5ad-f9d2-40b4-b7a2-de5c16ca2c10"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 2891.75,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 11567,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 154.75,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "SC",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        },
                        {
                            "ids": [
                                "AMADEUS_AVIS*MIA-AIRPORT*MIA-AIRPORT*2018-02-18-10:00*2018-02-22-10:00*AGE_25*ARG*WEB*ALMUNDO|0832488d-176c-4628-837b-8478e0a99001"
                            ],
                            "default_rate": false,
                            "price": {
                                "daily": {
                                    "amount": 3036.25,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "total": {
                                    "amount": 12145,
                                    "currency": {
                                        "code": "ARS",
                                        "prefix": "$"
                                    }
                                },
                                "daily_without_discount": null,
                                "total_without_discount": null,
                                "discount": 0
                            },
                            "capabilities": [
                                {
                                    "code": "AMADD",
                                    "description": "Conductor adicional",
                                    "category": "EXT"
                                },
                                {
                                    "code": "UNL",
                                    "description": "Kilometraje ilimitado",
                                    "category": "EXT"
                                },
                                {
                                    "code": "AMGPS",
                                    "description": "Gps",
                                    "category": "EXT"
                                },
                                {
                                    "code": "SLT",
                                    "description": "Impuestos",
                                    "category": "IMP"
                                },
                                {
                                    "code": "AMTAN",
                                    "description": "Tanque de combustible",
                                    "category": "EXT"
                                },
                                {
                                    "code": "ALI",
                                    "description": "Extensión de responsabilidad civil",
                                    "category": "COV"
                                },
                                {
                                    "code": "LDW",
                                    "description": "Cobertura total por daño y/o robo",
                                    "category": "COV"
                                }
                            ],
                            "additional_daily_price": {
                                "amount": 299.25,
                                "currency": {
                                    "code": "ARS",
                                    "prefix": "$"
                                }
                            },
                            "additional_information": {
                                "rate_codes": {
                                    "rc": "AR",
                                    "cd": null,
                                    "it": null,
                                    "pc": null
                                },
                                "acriss": "STAR",
                                "capabilities_codes": [
                                    "UNL",
                                    "AMADD",
                                    "AMGPS",
                                    "SLT",
                                    "AMTAN",
                                    "LDW",
                                    "ALI"
                                ]
                            }
                        }
                    ],
                    "suggested": true
                }
            ]
        }
    ],
    "hash": null
}