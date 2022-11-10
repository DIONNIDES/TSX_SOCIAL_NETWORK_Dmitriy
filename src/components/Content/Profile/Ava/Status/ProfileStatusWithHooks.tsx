import React, {ChangeEvent, Component, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props:ProfileStatusType) =>{

    let [editMode,setEditMode] = useState<boolean>(false);
    let  [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const setProfileStatus = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)


        return (
            <>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}><h3>{props.status || 'Set your status...'}</h3></span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={setProfileStatus} value={status} onBlur={deactivateEditMode} autoFocus/>
                    </div>
                }
            </>
        );
    }
