import {UserDetails} from "../Components/UsersContainer/UserDetails";
import {useLoaderData} from "react-router-dom";

const UserDetailsPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <UserDetails user={data}/>
        </div>
    );
};

export {UserDetailsPage};