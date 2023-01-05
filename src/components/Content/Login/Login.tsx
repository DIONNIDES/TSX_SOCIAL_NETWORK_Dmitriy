import React from 'react';
import {Button} from '../../common/Button/Button';
import styles from './Login.module.css';
import {useFormik} from 'formik';
import {connect} from 'react-redux';
import {login} from '../../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../../../redux/redux-store';
import {createField} from '../../common/utils/form-helpers';

export type FormikErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string | null
}

export type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}

type LoginPropsType = MapStateToPropsType & {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

const Login = ({isAuth, captcha, login}: LoginPropsType) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            login(values.email, values.password, values.rememberMe, captcha);
        },
        validate: (values) => {
            const errors: FormikErrorsType = {}
            if (!values.email) {
                errors.email = 'Field is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Field is required'
            } else if (values.password.length < 3) {
                errors.password = 'Incorrect password length'
            }
            return errors
        },

    });

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <form onSubmit={formik.handleSubmit} className={styles.loginFormWrapper}>

            {createField('email', 'email', formik)}
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            {createField('password', 'password', formik)}
            {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
            <div>
                {createField('rememberMe', 'checkbox', formik)}
            </div>
            {captcha && <img src={captcha}/>}
            {captcha && createField('captchaURL', 'text', formik)}
            <Button type={'submit'} title={'Login'} callback={() => {
            }} className={styles.submitButton}/>
        </form>
    );
};
export const mapStateToProps = (state: RootStateType) => {
    debugger
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export const LoginContainer = connect(mapStateToProps, {login})(Login);



