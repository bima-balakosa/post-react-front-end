import React from "react";

// 1. Import pustaka untuk meminta atau mengirim data melalui http
import axios from "axios";

// 2. Import pustaka untuk menambahkan dan mengaplikasikan state
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReuseButton from "../../component/ReuseButton";

const Transactions = () => {
    //3. gunakan pustaka untuk menambahkan state pada bagian kosong berikut
    const [transactionLists, setTransactionLists] = useState([]);

    // 4. gunakan fungsi pada pustaka yang untuk mengaplikasikan state yang ditambahkan pada bagian kosong berikut
    useEffect(() => {
        getTransactionLists();
    }, []);

    const getTransactionLists = async () => {
        // 5. gunakan fungsi pada suatu pustaka yang digunakan untuk meminta data melalui http dan gunakan fungsi get untuk mengambil data itu
        const response = await axios.get("http://localhost:5000/transaction");
        setTransactionLists(response.data);
    };
    const formatCurrency = (value) => {
        const formattedValue = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(value);
        return formattedValue.replace(/\D00$/, "");
    }

    return (
        <div>
            <ReuseButton
                variant="primary"
                direction="/transaction/add"
                title="Tambah data"
            />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col-2">Nama Produk</th>
                        <th scope="col">Harga</th>
                        <th scope="col">QTY</th>
                        <th scope="col-5">Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {transactionLists.map((transaction, index) => (
                        <tr key={transaction.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{transaction.product_name}</td>
                            <td>{formatCurrency(transaction.product_price)}</td>
                            <td>{transaction.product_qty}</td>
                            <td className="row">
                                <div className="btn bg-danger btn-danger button-space">Hapus</div>
                                <div className="small-button">
                                    <Link to={``} className="button is-small is-info mr-2 ">
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

export default Transactions;