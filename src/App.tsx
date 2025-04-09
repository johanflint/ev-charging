import { useState } from "react";
import { Card } from "./Card.tsx";
import { countries, FilterKey } from "./data.ts";
import { FilterBar } from "./FilterBar.tsx";
import { ChargingNetwork, isFastCharger, isSlowCharger } from "./interfaces/ChargingNetwork.ts";

interface Props {
    networks: ChargingNetwork[];
}

interface FilterState {
    [filter: string]: boolean;
}

export function App({ networks }: Props) {
    const chargerFilters: FilterState = { [FilterKey.Charger]: true, [FilterKey.FastCharger]: true };
    const initialFilters = Object.keys(countries).reduce((filters, countryCode) => ({...filters, [countryCode]: countryCode !== FilterKey.World }), chargerFilters);
    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const toggleFilter = (filter: string) => setFilters({ ...filters, [filter]: !filters[filter] });
    const filterEnabled = (filter: string): boolean => filters[filter];

    const cards = networks
        .filter(network => showNetwork(network, filters))
        .map(network => <Card key={network.id} network={network} />);

    return (
        <>
            <h1 className="text-3xl font-bold py-6">Where to charge?</h1>
            <FilterBar countries={countries} filterEnabled={filterEnabled} toggleFilter={toggleFilter} />
            <div className="max-w-7xl w-7xl mt-6">
                <ul role="list" className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
                    {cards}
                </ul>
            </div>
        </>
    );
}

function showNetwork(network: ChargingNetwork, filters: FilterState): boolean {
    if (!(filters[FilterKey.World] || filters[network.countryCode])) {
        return false;
    }

    const hasFastCharger = network.rates.some(isFastCharger);
    const hasSlowCharger = network.rates.some(isSlowCharger);

    return (filters[FilterKey.Charger] && hasSlowCharger) || (filters[FilterKey.FastCharger] && hasFastCharger);
}
