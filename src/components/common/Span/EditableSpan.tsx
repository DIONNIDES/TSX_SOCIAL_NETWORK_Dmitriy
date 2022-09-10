import React, {ChangeEvent, useState} from 'react';

export type EditableSpanPropsType = {
    value:string
    callback:(fieldText:string)=>void

}

export const EditableSpan:React.FC<EditableSpanPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () =>{
        setEditMode(true);
    }

    const activateViewMode = (e:ChangeEvent<HTMLInputElement>) =>{
        setEditMode(false);
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        let fieldText = e.currentTarget.value
        props.callback(fieldText);
    }

    return (
            editMode
            ? <input onBlur={activateViewMode} autoFocus value={props.value} onChange={onChangeHandler}/>
            : <span onDoubleClick={activateEditMode} >{props.value}</span>


    );
};

