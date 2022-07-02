import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
    const [filter, setFilter] = useState('All')
    let currentMoney = money
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }
    return (
        <div>
            <ul className="App">
                {currentMoney.map((objFromMoneyArr, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="App">
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
            </div>
        </div>
    );
}

export default App;
