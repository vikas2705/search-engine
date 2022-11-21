import React, { useState } from "react";
import "./search-bar.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const SearchBar = props => {
    const { onSubmit, hideButtons = false, defaultValue = "" } = props;
    const [searchText, setSearchText] = useState(defaultValue);

    const handleChange = e => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(searchText);
    };

    return (
        <form onSubmit={handleSubmit} className={"home-body"}>
            <InputGroup className='search-custom'>
                <InputGroup.Text id='basic-addon1' onClick={handleSubmit}>
                    <i className='bi bi-search'></i>
                </InputGroup.Text>
                <Form.Control
                    aria-label='search-text'
                    aria-describedby='basic-addon1'
                    onChange={handleChange}
                    value={searchText}
                />
                <InputGroup.Text id='basic-addon1'>
                    <i className='bi bi-mic-fill'></i>
                </InputGroup.Text>
            </InputGroup>
            {!hideButtons && (
                <div className='d-flex justify-content-center mt-3'>
                    <Button
                        type='submit'
                        className='btn btn-secondary bg-light text-dark border-light'
                    >
                        Google Search
                    </Button>
                    <Button
                        type='button'
                        className='btn mx-3 btn-secondary bg-light text-dark border-light'
                    >
                        I'm feeling lucky
                    </Button>
                </div>
            )}
        </form>
    );
};

export default SearchBar;
