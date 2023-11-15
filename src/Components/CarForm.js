import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux/slices/carSlice";
import {useEffect} from "react";

const CarForm = () => {
    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver()
    })
    const dispatch = useDispatch()
    const {updateCar} = useSelector(state => state.forCar)

    useEffect(() => {
        if (updateCar) {
            setValue
        }
    }, []);

    const save = async (newCar) => {
        await carService.create(newCar)
        dispatch(carActions.setTriger())
        reset()
    }

    const update = async (updCar) => {
        await carService.update(updateCar.id, updCar)
        dispatch(carActions.setTriger())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(updateCar ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>

            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={isValid}>{updateCar ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};