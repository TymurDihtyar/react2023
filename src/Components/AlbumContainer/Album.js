import css from './Album.module.css'
const Album = ({item}) => {
    const {userId, id, title} = item
    return (
        <div className={css.album}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};