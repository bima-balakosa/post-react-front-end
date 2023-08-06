import React, { useState } from "react";
import { FaHome, FaShoppingBasket, FaThList, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />,
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBasket />,
        },
        {
            path: "/transaction",
            name: "Transaction",
            icon: <FaThList />,
        },
    ];
    return (
        <div className="container">
            <div className='sidebar' style={{ width: isOpen ? "250px" : "50px" }}>
                <div className="top_section">
                    <h3 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        NUKARI MASIH
                    </h3>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        activeclassName="active" className="link">

                        <div className='icon'>{item.icon}</div>
                        <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                    </NavLink>
                ))}
            </div>

            <main>{children}</main>
        </div >
    )
}

export default Sidebar