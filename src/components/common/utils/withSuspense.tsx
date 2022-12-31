import React, {Suspense} from 'react';
import {Preloader} from '../Preloader/Preloader';

export const withSuspense = (Component: React.ComponentType) => {
    return (props: any) => {

        return (<Suspense fallback={< Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}