import React, {FC} from 'react';
import {createField} from '../utils/form-helpers';
import {useFormik} from 'formik';
import {Button} from '../Button/Button';
import {UpdatedProfileType} from '../../../DAL/API';
import styles from './UpdateProfileForm.module.css';

type UpdateProfileFormType = {
    updateUserProfile: (profileData: UpdatedProfileType) => void
    setEditMode: (editMode: boolean) => void
    profile: UpdatedProfileType
    userID: number | null
}

type ValuesType = {
    aboutMe?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
}

export const UpdateProfileForm: FC<UpdateProfileFormType> = ({userID, profile, updateUserProfile, setEditMode}) => {


    const formik = useFormik({
        initialValues: {
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            github: profile.contacts?.github,
            vk: profile.contacts?.vk,
            facebook: profile.contacts?.facebook,
            instagram: profile.contacts?.instagram,
            twitter: profile.contacts?.twitter,
        },
        onSubmit: (values: ValuesType) => {
            const updatedProfile = {
                ...values,
                userID
            }
            updateUserProfile(updatedProfile);
            setEditMode(false);
        },
        validate: (values) => {
            const errors: FormikProfileErrorsType = {}
            if (!values.aboutMe) {
                errors.aboutMe = 'Field is required'
            }
            if (!values.fullName) {
                errors.fullName = 'Field is required'
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Field is required'
            }
            return errors
        },

    });
    return (
        <form onSubmit={formik.handleSubmit} className={styles.updateProfileFormWrapper}>
            {createField('aboutMe', 'text', formik, styles.formInput)}
            {createField('lookingForAJob', 'checkbox', formik)}
            {createField('lookingForAJobDescription', 'text', formik)}
            {createField('fullName', 'text', formik)}
            {createField('github', 'text', formik)}
            {createField('vk', 'text', formik)}
            {createField('facebook', 'text', formik)}
            {createField('instagram', 'text', formik)}
            {createField('twitter', 'text', formik)}
            <Button type={'submit'} title={'Update'} className={styles.formButton} callback={() => {
            }}/>
        </form>
    );
};

export type FormikProfileErrorsType = {
    aboutMe?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
}
