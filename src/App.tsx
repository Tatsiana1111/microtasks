import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'RUBLS' | 'Dollars'

export function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, nominal: ' a1234567890'},
        {banknots: 'Dollars', value: 50, nominal: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, nominal: ' w1234567890'},
        {banknots: 'Dollars', value: 100, nominal: ' e1234567890'},
        {banknots: 'Dollars', value: 50, nominal: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, nominal: ' r1234567890'},
        {banknots: 'Dollars', value: 50, nominal: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, nominal: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
}

export default App;
