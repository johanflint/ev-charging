import { Fragment } from "react";
import { countries } from "./data.ts";
import { ChargingNetwork, ChargingRate, isFastCharger } from "./interfaces/ChargingNetwork.ts";

interface Props {
    network: ChargingNetwork;
}

const formatter = Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });

export function Card({ network } : Props) {
    return <li className="col-span-1 rounded-lg bg-white shadow-sm divide-y divide-gray-200">
        <div className="flex w-full items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate fl">
                <div className="flex items-center">
                    <h3 className="truncate text-lg font-medium text-gray-900">{countries[network.countryCode].flag}&nbsp;{network.name}</h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{network.howToUse}</p>
            </div>
            <img className="h-10 w-10" src={`images/${network.logoUrl}`} alt={network.name} />
        </div>
        <div className="grid grid-cols-[16px_repeat(2,minmax(0,1fr))] p-6 text-sm text-gray-500 gap-y-3">
            <Rates rates={network.rates} />
        </div>
        <div>
            <div className="flex mt-[-1] divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                    <span className="relative inline-flex w-0 flex-1 items-center justify-center gap-3 p-4 text-sm font-semibold text-gray-900 mr-[-1]">
                        <a href={network.infoUrl}>Info</a>
                    </span>
                </div>
                <div className="flex w-0 flex-1 ml-[-1]">
                    <span className="relative inline-flex w-0 flex-1 items-center justify-center gap-3 p-4 text-sm font-semibold text-gray-900">
                        📍<a href={network.mapUrl}>Map</a>
                    </span>
                </div>
            </div>
        </div>
    </li>;
}

function Rates({ rates }: { rates: ChargingRate[] }) {
    return rates.map((rate: ChargingRate) =>
        <Fragment key={rate.kiloWattHour}>
            <div><img className="h-[16]" src={isFastCharger(rate) ? "images/supercharger.png" : "images/charger.png"} alt={isFastCharger(rate) ? "Fast charger" : "Charger"} /></div>
            <div className="pl-3">{rate.kiloWattHour} kWh</div>
            <div className="text-end">{formatter.format(rate.centsPerKwh / 100)}</div>
        </Fragment>
    );
}
