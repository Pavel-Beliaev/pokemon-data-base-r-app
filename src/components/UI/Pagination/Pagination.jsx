import React from 'react';
import cl from './pagination.css'
import {DOTS, usePagination} from "../../hooks/usePagination";
import classnames from "classnames";

const Pagination = ({totalPages, page, onPageChange, className}) => {
    const paginationRange = usePagination({
        totalPages,
        page,
    });

    if (page === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(page + 1);
    };

    const onPrevious = () => {
        onPageChange(page - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={classnames('pagination_container', {[className]: className})}
        >
            <li
                className={classnames('pagination_item', {
                    disabled: page === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrows left"/>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination_item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={classnames('pagination_item', {
                            selected: pageNumber === page
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames('pagination_item', {
                    disabled: page === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrows right"/>
            </li>
        </ul>
    );
};

export default Pagination;