import {useSelector} from "react-redux";

import css from './Pagination.module.css'

const Paginatin = ({setQuery}) => {
    const {prevPage, nextPage} = useSelector(state => state.episodes)

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    return (
        <div className={css.buts}>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {Paginatin};
