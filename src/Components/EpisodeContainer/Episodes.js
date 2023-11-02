import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = ({episodes, setQuery, prevNext}) => {
    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
        })
    }

    return (
        <>
            <div className={css.allEpisodes}>
                {episodes.map(item => <Episode key={item.id} item={item}/>)}
            </div>
            <div className={css.buts}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </>
    );
};

export {Episodes};