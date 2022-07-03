import React from 'react';
import {FilterType} from "./App";

type NewComponentType = {
    onClickFilterHandler: (filter: FilterType) => void
    money: Array<ObjFromMoneyArrType>
}


export type ObjFromMoneyArrType = {
    banknots: string
    value: number
    nominal: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul className="App">
                {props.money.map((money) => {
                    return (
                        <li>
                            <span>{money.banknots}</span>
                            <span>{money.value}</span>
                            <span>{money.nominal}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="App">
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            </div>
        </div>
    );
};
