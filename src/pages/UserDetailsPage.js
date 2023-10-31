import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../Components/UsersContainer/UserDetails";
import css from './UserDetails.module.css';

const UserDetailsPage = () => {
    const {data} = useLoaderData()

    return (
        <>
            <h1>USER DETAILS</h1>
            <div className={css.renderDetails}>
                <UserDetails user={data}/>
            </div>
            <Outlet/>
        </>
    );
};

export {UserDetailsPage};