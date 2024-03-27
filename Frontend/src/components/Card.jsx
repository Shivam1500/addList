import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { LuMapPin } from "react-icons/lu";
import { useNavigate } from "react-router-dom"

const Card = ({ data }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [rating, setRating] = useState(2);

    const navigate = useNavigate();

    const handleClick = (newRating) => {
        setRating(newRating);


    };

    const handleNav = () => {
        navigate('/detailview', { replace: true });
    }
    return (
        <div className="container">
            <div style={{ marginTop: "60px" }}>
                Results Found:
                <div className="card shadow-sm">
                    <div className="card-body d-flex ">
                        <div className="me-4">
                            <img src="https://via.placeholder.com/100" alt="d" />
                        </div>
                        <div style={{ width: "80%" }}>
                            {" "}
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">
                                {" "}
                                <LuMapPin /> {data.text}
                            </p>
                            <div className="star-rating">
                                <span style={{ fontSize: 14 }}>4.5</span>{" "}
                                {[...Array(5)].map((_, index) => {
                                    const starRating = index + 1;
                                    return (
                                        <span
                                            key={index}
                                            className={`star ${starRating <= (hoverRating || rating) ? "filled" : ""
                                                }`}
                                            onMouseEnter={() => setHoverRating(starRating)}
                                            onMouseLeave={() => setHoverRating(rating)}
                                            onClick={() => handleClick(starRating)}
                                        >
                                            ★
                                        </span>
                                    );
                                })}{" "}
                                <span style={{ fontSize: 14 }}>41 reviews</span>
                            </div>
                        </div>

                        <div style={{ width: "15%" }}>
                            <p style={{ marginBottom: "40px" }}>Founded on 01-01-2016</p>
                            <Button variant="dark" onClick={handleNav}>Detailed Review</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
