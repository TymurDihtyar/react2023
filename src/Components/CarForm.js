import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../services/carsService";
import {carValidator} from "../carValidator/carValidator";
import {carsActions} from "../redux/slices/carSlice";

const CarForm = () => {
    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })
    const {updateCar, triger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar, setValue]);

    const save = async (car) => {
        await carsService.create(car)
        dispatch(carsActions.setTriger(!triger))
        reset()
    }
    const update = async (car) => {
        await carsService.update(updateCar.id, car)
        dispatch(carsActions.setTriger(!triger))
        dispatch(carsActions.setUpdateCar(null))
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(updateCar ? update : save)}>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                <input type="text" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};