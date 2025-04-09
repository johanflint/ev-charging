import { ChargingNetwork, CountryMap } from "./interfaces/ChargingNetwork.ts";

export const networks: ChargingNetwork[] = [
    {
        id: "lidl",
        name: "Lidl",
        countryCode: "FR",
        logoUrl: "lidl.png",
        howToUse: "Use Lidl Plus",
        infoUrl: "https://www.lidl.fr/c/bornes-de-recharges/s10019703",
        mapUrl: "https://m.intercharge.eu/qr?",
        rates: [{
            centsPerKwh: 29,
            kiloWattHour: 22,
        }, {
            centsPerKwh: 39,
            kiloWattHour: 120,
        }, {
            centsPerKwh: 39,
            kiloWattHour: 180,
        }]
    },
    {
        id: "iecharge",
        name: "IECharge",
        countryCode: "FR",
        logoUrl: "iecharge.png",
        howToUse: "Use IECharge app",
        infoUrl: "https://iecharge.io/pricing/",
        mapUrl: "https://iecharge.io/locations/",
        rates: [{
            centsPerKwh: 25,
            kiloWattHour: 160,
        }, {
            centsPerKwh: 25,
            kiloWattHour: 320,
        }]
    }
];

export enum FilterKey {
    World = "WW",
    Charger = "charger",
    FastCharger = "fastCharger",
}

export const countries: CountryMap = {
    [FilterKey.World]: {
        name: "World",
        flag: "🌍"
    },
    "FR": {
        name: "France",
        flag: "🇫🇷"
    },
}
