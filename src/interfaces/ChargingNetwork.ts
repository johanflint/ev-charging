export interface ChargingNetwork {
    id: string;
    name: string;
    countryCode: keyof CountryMap;
    logoUrl: string;
    howToUse: string;
    infoUrl: string;
    mapUrl: string;
    rates: ChargingRate[];
}

export type CountryMap = { [countryCode: string]: Country };

export interface Country {
    name: string;
    flag: string;
}

export interface ChargingRate {
    centsPerKwh: number;
    kiloWattHour: number;
    from?: string; // 24h clock, inclusive
    until?: string; // 24h clock, exclusive
}

export const isFastCharger = (chargingRate: ChargingRate) => chargingRate.kiloWattHour >= 50;
