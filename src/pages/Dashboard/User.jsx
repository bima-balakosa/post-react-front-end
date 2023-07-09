import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReuseButton from "../../component/ReuseButton";
import { Link } from "react-router-dom";

const User = () => {
    const [userlists, setUserLists] = useState([]);

    useEffect(() => {
        getUserLists();
    }, []);

    const getUserLists = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUserLists(response.data);
    };

    const destroyUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/delete/users/${id}`);
            getUserLists();
        }
        catch (error) {
            console.log(error.message);
        };
    };


    return (
        <div>
            <ReuseButton
                variant="primary"
                direction="/user/add"
                title="Tambah data"

            />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">No hp</th>
                        <th scope="col">Password</th>
                        <th scope="col">Aksi</th>

                    </tr>
                </thead>

                <tbody>
                    {userlists.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.user_name}</td>
                            <td>{user.user_nohp}</td>
                            <td>{user.user_password}</td>
                            <div className="btn bg-danger btn-danger"
                                onClick={() => destroyUser(user.id)}>Hapus</div>
                            <Link
                                to={`/user/edit/${user.id}`}
                                className="button is-small is-info mr-2"
                            >
                                Edit
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
