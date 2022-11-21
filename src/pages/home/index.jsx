import React from "react";
import Header from "../../common/components/header";
import "./home.css";
import googleLogo from "../../common/assets/images/Google-logo.png";
import SearchBar from "../../common/components/search-bar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = searchText => {
        const searchQuery = searchText.replaceAll(" ", "+");
        navigate(`/search?searchQuery=${searchQuery}`);
    };

    return (
        <div className='main'>
            <Header />

            <div className='w-full my-5 d-flex justify-content-center'>
                <div className='w-half'>
                    <img
                        src={googleLogo}
                        alt='Google Search logo'
                        className='logo-width'
                    />

                    <div className='search-container'>
                        <SearchBar onSubmit={handleSearchSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
