import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

    const [user_name, setName] = useState("");
    const [user_password, setPassword] = useState("");
    const [user_nohp, setNohp] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/user/update/${id}`, {
                user_name,
                user_password,
                user_nohp,
            });
            navigate("/dashboard/");

        } catch (error) {
            console.log(error.message);
        }
    };
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/user/edit/${id}`);
        setName(response.data.user_name);
        setPassword(response.data.user_password);
        setNohp(response.data.user_nohp);
    };



    return (
        <div>
            <Card className="p-3">
                <h2>Update User</h2>
                <Form onSubmit={updateUser}>
                    <Form.Group>
                        <Form.Label className="label">Nama</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            className="input"
                            value={user_name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Contoh: Made"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="label">Password</Form.Label>
                        <Form.Control
                            type="text"
                            className="input"
                            value={user_password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contoh: ABC123"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nomor HP</Form.Label>
                        <Form.Control
                            type="text"
                            className="input"
                            value={user_nohp}
                            onChange={(e) => setNohp(e.target.value)}
                            placeholder="Contoh: GIanyar"
                        />
                    </Form.Group>

                    <Button className="my-3" type="submit" variant="warning">
                        Update
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default EditUser;