import { Card } from "./Card.tsx";
import { countries } from "./data.ts";
import { FilterBar } from "./FilterBar.tsx";
import { ChargingNetwork } from "./interfaces/ChargingNetwork.ts";

interface Props {
    networks: ChargingNetwork[];
}

export function App({ networks }: Props) {
    const cards = networks.map(network => <Card key={network.id} network={network} />);
    return (
        <>
            <h1 className="text-3xl font-bold py-6">Where to charge?</h1>
            <FilterBar countries={countries} />
            <div className="max-w-7xl w-7xl mt-6">
                <ul role="list" className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
                    {cards}
                </ul>
            </div>
        </>
    );
}
