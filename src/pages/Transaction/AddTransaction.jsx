import { Form, Card, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
    const [product_name, setName] = useState("ayamm");
    const [product_qty, setQty] = useState("23");
    const [product_price, setPrice] = useState("200000");

    const navigate = useNavigate();
    // Fungsi untuk mengirim data ke controller product agar bisa dilakukan penyimpanan
    const saveTransaction = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/transaction/send", {
                product_name,
                product_qty,
                product_price,
            });
            navigate("/transaction");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <Card style={{ width: '18rem' }}> <h2>Masukan data product</h2>

                <Form onSubmit={saveTransaction}>
                    <Form.Control type="text"
                        className="input"
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Transaction name" />
                    <Form.Control type="number"
                        className="input"
                        value={product_qty}
                        onChange={(e) => setQty(e.target.value)}
                        placeholder="Transaction stok" />
                    <Form.Control type="number"
                        className="input"
                        value={product_price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Transaction price" />

                    <Button type='submit'>
                        Kirim
                    </Button>

                </Form>
            </Card>



        </div>
    );
};

export default AddTransaction;