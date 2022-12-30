import React, {useState} from 'react';
import {Button} from '../Button/Button';
import styles from './Paginator.module.css';

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onCurrentPageHandler: (currentPage: number) => void
    portionSize: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalCount,
                                                            currentPage,
                                                            pageSize,
                                                            onCurrentPageHandler,
                                                            portionSize
                                                        }) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div className={styles.paginatorWrapper}>
            {portionNumber > 1 ? <Button title={'<<<'} callback={() => {
                setPortionNumber(portionNumber - 1)
            }}/> : <div></div>}
            <div className={styles.paginatorWrap}>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <Button className={p === currentPage ? styles.currentPage : ''}
                                      title={p.toString()} callback={() => onCurrentPageHandler(p)}/>)}
            </div>
            {portionCount > portionNumber ? <Button title={'>>>'} callback={() => {
                setPortionNumber(portionNumber + 1)
            }}/>: <div></div>}
        </div>


    );
}
