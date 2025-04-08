import { CountryMap } from "./interfaces/ChargingNetwork.ts";

interface Props {
    countries: CountryMap;
}

export function FilterBar({ countries }: Props) {
    return (
        <div className="text-3xl grid grid-cols-2 bg-gray-200 rounded-lg px-6 py-3">
            <div>
                {Object.values(countries).map((country) =>
                    <span key={country.name} className="pr-3 hover:grayscale cursor-pointer">{country.flag}</span>)
                }
            </div>
            <div className="text-right">
                <img className="pr-3 h-[32] inline" src="images/charger.png" alt="Charger" />
                <img className="h-[32] inline" src="images/supercharger.png" alt="Fast charger" />
            </div>
        </div>);
}
