import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    // accessing data
    const user = useLoaderData();
    // destructure user data
    const { name } = user;
    return (
        <div className="user">
            <h2>Details about users : {name}</h2>
        </div>
    );
};

export default UserDetails;