import React from 'react';
import styles from '../../Content/Users/Users.module.css';
import {Button} from '../Button/Button';
type PaginatorPropsType = {
    totalCount:number
    pageSize:number
    currentPage:number
    onCurrentPageHandler:(currentPage:number)=>void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalCount,currentPage,pageSize,onCurrentPageHandler }) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    console.log(pagesCount)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
        return (
            <div className={styles.paginatorWrap}>
                {pages.map(p => <Button className={p === currentPage ? styles.currentPage : ''}
                                        title={p.toString()} callback={() => onCurrentPageHandler(p)}/>)}
            </div>
        );
}
