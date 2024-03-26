import React, { useState } from 'react';
import AddCompanyModal from "./AddCompany/AddCompanyForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

const LandingPage = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="search-bar">
            <div className="search-bar1">

                <input
                    type="text"
                    placeholder="Search by location..."
                    onChange={handleSearch}
                    className="search-input"
                />
                <button className="add-company-btn">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="add-company-icon" />
                    find Company
                </button>
            </div>

            <div className="search-bar2">
                <button className="add-company-btn" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faPlus} className="add-company-icon" />
                    Add Company
                </button>
                <select className="filter-dropdown">
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <AddCompanyModal isOpen={showModal} onClose={toggleModal} />
        </div>

    );
};

export default LandingPage;



