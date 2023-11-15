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
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate:true})
        }
    }, [updateCar]);

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
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={isValid}>{updateCar ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};