import React from "react";

// 1. Import pustaka untuk meminta atau mengirim data melalui http
import axios from "axios";

// 2. Import pustaka untuk menambahkan dan mengaplikasikan state
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReuseButton from "../../component/ReuseButton";

const Products = () => {
    //3. gunakan pustaka untuk menambahkan state pada bagian kosong berikut
    const [productLists, setProductLists] = useState([]);

    // 4. gunakan fungsi pada pustaka yang untuk mengaplikasikan state yang ditambahkan pada bagian kosong berikut
    useEffect(() => {
        getProductLists();
    }, []);

    const getProductLists = async () => {
        // 5. gunakan fungsi pada suatu pustaka yang digunakan untuk meminta data melalui http dan gunakan fungsi get untuk mengambil data itu
        const response = await axios.get("http://localhost:5000/product");
        setProductLists(response.data);
    };

    return (
        <div>
            <ReuseButton
                variant="primary"
                direction="/product/add"
                title="Tambah data"
            />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Stok</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {productLists.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.product_name}</td>
                            <td>{product.product_price}</td>
                            <td>{product.product_stok}</td>
                            <td>
                                <div className="btn bg-danger btn-danger">Hapus</div>
                                <div>
                                    <Link to={``} className="button is-small is-info mr-2">
                                        Edit
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;