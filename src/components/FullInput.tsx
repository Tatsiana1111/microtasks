import React, {ChangeEvent, useState} from 'react';

type FillInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FillInputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        title = event.currentTarget.value
        return setTitle(title)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle(' ')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};
