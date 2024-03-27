import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LuMapPin } from "react-icons/lu";

const SearchSection = ({ handleShow }) => {
    return (
        <React.Fragment>
            <section className="find-company">
                <Container>
                    <div className="d-flex  justify-content-between mb-2">
                        <label>Select City</label>
                        <label style={{ marginRight: 60 }}>Sort:</label>
                    </div>
                    <Row>
                        <Col sm={6} md={8} lg={8}>
                            <form className="d-flex search-form" role="search">
                                <div className="input-container" style={{ width: "500px" }}>
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                    <LuMapPin className="search-icon" color="#6600ff " />
                                </div>
                                <Button
                                    style={{
                                        marginLeft: 20,
                                        backgroundImage:
                                            "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                        borderColor:
                                            "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                    }}
                                >
                                    Find Company
                                </Button>
                            </form>
                        </Col>
                        <Col
                            sm={6}
                            md={4}
                            lg={4}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <Button
                                style={{
                                    marginLeft: 20,
                                    backgroundImage:
                                        "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                    borderColor:
                                        "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                                }}
                                onClick={handleShow}
                            >
                                + Add Company
                            </Button>
                            <div>
                                <Form.Select defaultValue="Name" style={{ width: 100 }}>
                                    <option>Name</option>
                                    <option value="Name"></option>
                                    <option value="Address"></option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <hr
                style={{
                    marginLeft: 80,
                    marginRight: 80,
                    marginBottom: 60,
                    marginTop: 60,
                    color: "lightgrey",
                }}
            />
        </React.Fragment>
    );
};

export default SearchSection;
