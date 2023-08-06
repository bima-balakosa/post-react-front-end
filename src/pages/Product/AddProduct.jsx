import { Form, Card, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const AddProduct = () => {
    const [product_name, setName] = useState("ayamm");
    const [product_stok, setStok] = useState("23");
    const [product_price, setPrice] = useState("200000");

    const navigate = useNavigate();
    // Fungsi untuk mengirim data ke controller product agar bisa dilakukan penyimpanan
    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/product/send", {
                product_name,
                product_stok,
                product_price,
            });
            navigate("/product");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <Card style={{ width: '18rem' }}> <h2>Masukan data product</h2>

                <Form onSubmit={saveProduct}>
                    <Form.Control type="text"
                        className="input"
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product name" />
                    <Form.Control type="text"
                        className="input"
                        value={product_stok}
                        onChange={(e) => setStok(e.target.value)}
                        placeholder="Product stok" />
                    <Form.Control type="text"
                        className="input"
                        value={product_price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Product price" />

                    <Button type='submit'>
                        Kirim
                    </Button>

                </Form>
            </Card>



        </div>
    );
};

export default AddProduct;