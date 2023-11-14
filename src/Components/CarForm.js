import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carsService} from "../services/carsService";
import {carValidator} from "../carValidator/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {oneCarAction} from "../redux/slices/oneCarSlice";

const CarForm = ({refresh}) => {
    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })
    const {oneCar} = useSelector(state => state.oneCar);
    const dispatch = useDispatch();

    useEffect(() => {
        if (oneCar) {
            setValue('brand', oneCar.brand, {shouldValidate: true})
            setValue('price', oneCar.price, {shouldValidate: true})
            setValue('year', oneCar.year, {shouldValidate: true})
        }
    }, [oneCar, setValue]);

    const save = async (car) => {
        await carsService.create(car)
        refresh()
        reset()
    }
    const update = async (car) => {
        await carsService.update(oneCar.id, car)
        refresh()
        dispatch(oneCarAction.setOneCar(null))
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(oneCar ? update : save)}>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                <input type="text" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{oneCar ? 'update' : 'save'}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};