import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type FillInputPropsType = {
    addMessage: (title: string) => void
}


export function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className='App'>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((elem, index) => {
                return <div key={index}>{elem.message}</div>
            })}
        </div>
    )
}

export default App;
