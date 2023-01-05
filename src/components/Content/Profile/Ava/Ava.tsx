import React, {ChangeEvent, useState} from 'react';
import styles from './Ava.module.css';
import ava from './../../../../asets/user_post_ava.png';
import {ProfileStatusWithHooks} from './Status/ProfileStatusWithHooks';
import {UpdatedProfileType} from '../../../../DAL/API';
import {UpdateProfileForm} from '../../../common/UpdateProfile/UpdateProfileForm';


type AvaPropsType = {
    profile: UpdatedProfileType
    profileStatus: string
    updateUserStatus: (status: string) => void
    updateUserProfile: (profileData: UpdatedProfileType) => void
    isOwner: boolean
    setUserPhoto: (photo: any) => void
    userID: number | null
}
export const Ava = ({
                        profile,
                        profileStatus,
                        updateUserStatus,
                        isOwner,
                        setUserPhoto,
                        updateUserProfile,
                        userID
                    }: AvaPropsType) => {
    const [editMode, setEditMode] = useState(false);

    const onSetUserPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setUserPhoto(e.target.files[0])
        }
    }
    return (
        <div className={styles.ava_wrapper}>
            <div className={styles.main_ava}>
                {isOwner && <input type="file" onChange={onSetUserPhoto}/>}
                <a href="#"><img
                    src={profile.photos && profile.photos.large ? profile.photos.large : ava}/></a>
            </div>
            <div className={styles.main_description_wrapper}>
                <div className={styles.main_description} onDoubleClick={() => {
                    setEditMode(true)
                }}>
                    <div className={styles.main_title}>
                        <h2>{profile.fullName}</h2>
                    </div>
                    {isOwner && editMode
                        ? <UpdateProfileForm profile={profile}
                                             updateUserProfile={updateUserProfile}
                                             setEditMode={setEditMode}
                                             userID={userID}
                        />
                        : isOwner && <div className={styles.main_profile_data}>
                        <div>{profile.aboutMe}</div>
                        <div>{profile.lookingForAJob && 'I`m looking for a job'}</div>
                        <div>{profile.lookingForAJobDescription}</div>
                        <div>Contacts:</div>
                        {profile.contacts && Object.keys(profile.contacts).map(c => <div>{`${c}: ${c}`}</div>)}
                    </div>}
                    <ProfileStatusWithHooks status={profileStatus}
                                            updateUserStatus={updateUserStatus}/>
                </div>

            </div>

        </div>
    );
};
