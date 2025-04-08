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
    }
];

export const countries: CountryMap = {
    "FR": {
        name: "France",
        flag: "🇫🇷"
    }
}
