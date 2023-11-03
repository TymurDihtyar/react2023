import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators/carValidator";

const CarForm = () => {
    const {reset, register, handleSubmit, formState:{errors, isValid}} = useForm({
        mode:"onBlur",
        resolver: joiResolver(carValidator)
    })
    const save = async (car) => {
        await carService.create(car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export {CarForm};