import { FilterKey } from "./data.ts";
import { CountryMap } from "./interfaces/ChargingNetwork.ts";

interface Props {
    countries: CountryMap;
    filterEnabled: (filter: string) => boolean;
    toggleFilter: (filter: string) => void;
}

export function FilterBar({ countries, filterEnabled, toggleFilter }: Props) {
    return (
        <div className="grid grid-cols-2 rounded-lg bg-gray-200 px-6 py-3 text-3xl">
            <div>
                {Object.entries(countries).map(([countryCode, country]) =>
                    <span key={countryCode} data-filter-enabled={filterEnabled(countryCode)} className="pr-3 cursor-pointer data-filter-disabled:grayscale" onClick={() => toggleFilter(countryCode)}>{country.flag}</span>)
                }
            </div>
            <div className="text-right">
                <img className="pr-3 h-[32] inline cursor-pointer" src={`images/charger${filterEnabled(FilterKey.Charger) ? "" : "-disabled"}.png`} alt="Charger" onClick={() => toggleFilter(FilterKey.Charger)} />
                <img data-filter-enabled={filterEnabled(FilterKey.FastCharger)} className="h-[32] inline cursor-pointer data-filter-disabled:grayscale" src="images/supercharger.png" alt="Fast charger" onClick={() => toggleFilter(FilterKey.FastCharger)} />
            </div>
        </div>);
}
