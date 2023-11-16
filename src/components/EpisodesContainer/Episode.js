import css from './Episode.module.css'
const Episode = ({item}) => {
    const {id, name, episode} = item
    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};