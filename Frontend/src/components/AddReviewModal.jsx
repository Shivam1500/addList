import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddReviewModal = ({ show, handleClose }) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered>
            <Modal.Body>
                <h4 className="  d-flex justify-content-center">Add Company</h4>
                <form className=" search-form" role="search">
                    <div className="mb-2">
                        <label style={{ color: "gray" }}>Company Name</label>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Enter..."
                            aria-label="Search"
                        />
                    </div>
                    <div className="mb-2">
                        <label style={{ color: "gray" }}>Location</label>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Select Location..."
                            aria-label="Search"
                        />
                    </div>
                    <div className="mb-2">
                        <label style={{ color: "gray" }}>Founded On</label>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="DD/MM/YY..."
                            aria-label="Search"
                        />
                    </div>
                    <div className="mb-4">
                        <label style={{ color: "gray" }}>City</label>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Enter City..."
                            aria-label="Search"
                        />
                    </div>
                </form>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="primary"
                        onClick={handleClose}
                        style={{
                            backgroundImage:
                                "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                            borderColor:
                                "linear-gradient(to bottom right, #ff99ff 11%, #6600ff 87%)",
                        }}
                    >
                        Save
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddReviewModal;