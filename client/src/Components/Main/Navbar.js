import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
    const s1 =
        "bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:drop-shadow-xl hover:px-10 dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";

    const { getLoggedIn } = useContext(AuthContext);

    return (
        <>
            <nav className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-14 w-auto ml-6"
                                src={logo}
                                draggable={false}
                                alt="Your Company"
                            />
                            <div className="text-2xl font-bold ml-2 text-blood">
                                OneLife
                            </div>
                        </div>
                    </Link>
                    <div className="flex items-center justify-between">
                        <>
                            <DropDown title="About Us" children={["Home", "About OneLife", "Contact Us"]} links={["/", "/about", "/contactUs"]}></DropDown>
                            {props.logIn ? (
                                <>
                                    <Link
                                        to={`/${props.user}/profile`}
                                        className={s1}
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                    <Link
                                        to="/"
                                        onClick={async () => {
                                            await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                            await getLoggedIn();
                                        }}
                                        className={s1}
                                    >
                                        Log Out
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <DropDown title="Looking For Blood" children={["Patient Login/Register", "Blood Bank Directory"]} links={["/register/patient", "/bloodDirect"]}></DropDown>
                                    <DropDown title="Want To Donate Blood" children={["Donor Login/Register", "Blood Donation Camps"]} links={["/register/donor", "/bloodCamps"]}></DropDown>
                                    <DropDown title="Blood Bank Login" children={["Login", "Add Your Bloodbank"]} links={["/login/bank", "/register/bank"]}></DropDown>
                                </>
                            )}

                        </>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
