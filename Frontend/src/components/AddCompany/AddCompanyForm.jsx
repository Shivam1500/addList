import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './AddCompanyForm.css';

const AddCompanyModal = ({ isOpen, onClose }) => {
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [foundedOn, setFoundedOn] = useState('');
    const [city, setCity] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};
        if (!companyName.trim()) {
            errors.companyName = 'Company name is required';
        }
        if (!location.trim()) {
            errors.location = 'Location is required';
        }
        if (!foundedOn.trim()) {
            errors.foundedOn = 'Founded on date is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }


        setCompanyName('');
        setLocation('');
        setFoundedOn('');
        setErrors({});
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="add-company-modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>&times;</span>
                        <h2>Add Company</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faBuilding} className="input-icon" />
                                    <input
                                        type="text"
                                        id="companyName"
                                        placeholder="Enter company name"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>
                                {errors.companyName && <p className="error">{errors.companyName}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder="Enter location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                {errors.location && <p className="error">{errors.location}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="foundedOn">Founded On</label>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
                                    <input
                                        type="date"
                                        id="foundedOn"
                                        value={foundedOn}
                                        onChange={(e) => setFoundedOn(e.target.value)}
                                    />
                                </div>
                                {errors.foundedOn && <p className="error">{errors.foundedOn}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="foundedOn">City</label>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faBuilding} className="input-icon" />
                                    <input
                                        type="text"
                                        id="foundedOn"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                {errors.foundedOn && <p className="error">{errors.foundedOn}</p>}
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddCompanyModal;
