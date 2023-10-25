import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carsService} from "../services/carsService";
import {carValidator} from "../carValidator/carValidator";

const CarForm = ({refresh, carForUpdate, setCarForUpdate}) => {
    const {reset, handleSubmit, register, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carsService.create(car)
        refresh()
        reset()
    }
    const update = async (car) => {
        await carsService.update(carForUpdate.id, car)
        refresh()
        setCarForUpdate(null)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                <input type="text" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};