import {Characters} from "../components/CharactersContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {characterActions} from "../redux/slices/characterSlice";
import {useParams} from "react-router-dom";

const CharactersPage = () => {
    const {ids} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getCharacters({ids}))
    }, [ids, dispatch]);

    return (
        <div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};