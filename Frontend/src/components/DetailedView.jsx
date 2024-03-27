import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { LuMapPin } from "react-icons/lu";

const DetailedView = ({ data }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [rating, setRating] = useState(2);

    const handleClick = (newRating) => {
        setRating(newRating);
        //   if (onChange) {
        //     props.onChange(newRating);
        //   }
    };
    return (
        <div className="container">
            <div style={{ marginTop: "60px" }}>
                Results Found:
                <div className="card shadow-sm">
                    <div className="card-body d-flex ">
                        {/* Your card content here */}
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
                            <Button
                                variant="dark"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                }}
                            >
                                Detailed Review
                            </Button>
                        </div>
                    </div>
                    <hr style={{ marginLeft: 50, marginRight: 50 }} />
                    <div className="container mt-4">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-1 g-4">
                            <div className="col d-flex justify-content-between ">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src="https://via.placeholder.com/50"
                                        className="rounded-circle me-2"
                                        alt="UserImage"
                                    />
                                    <div>
                                        <h5 className="m-0">Jorgue Watson</h5>
                                        <span style={{ color: "grey", fontSize: 12 }}>
                                            01-01-2016 22:44
                                        </span>
                                    </div>
                                </div>
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
                        </div>
                        <p>
                            dolor sit amet, consectetur adipiscing elit. Congue netus feugiat
                            elitdolor sit amet, consectetur adipiscing elit. Congue netus
                            feugiat elit suspendisse...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedView;
