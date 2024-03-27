import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

const Header = ({ data }) => {
    return (
        <div className="header" style={{ width: "100%" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundImage:
                                    "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                position: "relative", // Add position relative for parent container
                            }}
                        >
                            <GoStarFill
                                color="white"
                                size="30px"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1, // Set z-index as required
                                }}
                            />
                        </div>

                        <h2 style={{ marginTop: 3, marginLeft: 6 }}>Review <span style={{ color: "#6600ff " }}>&</span>Rate</h2>
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-end">
                        <form className="d-flex search-form" role="search">
                            <div className="input-container" style={{ width: "400px" }}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <FiSearch className="search-icon" color="#6600ff " />
                            </div>
                        </form>
                        <span className="btn  ms-2">Sign Up</span>
                        <span className="btn ">Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
