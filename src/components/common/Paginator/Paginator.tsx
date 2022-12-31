import React, {useState} from 'react';
import {Button} from '../Button/Button';
import styles from './Paginator.module.css';
import pageStyles from '../../Content/Users/Users.module.css'

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onCurrentPageHandler: (currentPage: number, portionNumber:number) => void
    portionSize: number
    portion:number
}
export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalCount,
                                                            currentPage,
                                                            pageSize,
                                                            onCurrentPageHandler,
                                                            portionSize,
                                                            portion
                                                        }) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(portion);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div className={styles.paginatorWrapper}>
            {portionNumber > 1
                ? <div>
                    <Button title={'<<'} callback={() => {
                        setPortionNumber(1)
                    }}/>
                    <Button title={'<<<'} callback={() => {
                        setPortionNumber(portionNumber - 1)
                    }}/>
                </div>

                : <div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className={styles.paginatorWrap}>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <Button className={p === currentPage ? pageStyles.currentPage : ''}
                                      title={p.toString()} callback={() => onCurrentPageHandler(p,portionNumber)}/>)}
            </div>
            {portionCount > portionNumber
                ? <div>
                    <Button title={'>>>'} callback={() => {
                        setPortionNumber(portionNumber + 1)
                    }}/>
                    <Button title={'>>'} callback={() => {
                        setPortionNumber(portionCount)
                    }}/>
                </div>
                : <div>
                    <div></div>
                    <div></div>
                </div>
            }
        </div>


    );
}
