import styles from './Login.module.css';
import React from 'react';

export const createField = (fieldName: string, fieldType: string, formik: any) => {
    let fieldTitle = fieldName[0].toUpperCase() + fieldName.slice(1);
    return (<>
            {fieldType === 'checkbox'
                ? <>
                    <label htmlFor={fieldName}>{fieldTitle}</label>
                    <input
                        id={fieldName}
                        type={fieldType}
                        placeholder={`Enter your ${fieldName}..`}
                        className={styles.formItem}
                        {...formik.getFieldProps(fieldName)}
                    />
                </>
                : <>
                    <label htmlFor={fieldName}>{fieldTitle}</label>
                    <input
                        id={fieldName}
                        type={fieldType}
                        placeholder={`Enter your ${fieldName}..`}
                        className={styles.formItem}
                        {...formik.getFieldProps(fieldName)}
                        checked={formik.values[fieldName]}
                    />
                </>
            }

        </>
    )
}