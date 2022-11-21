import React, { useCallback, useEffect, useState } from "react";
import "./search-result.css";
import googleLogo from "../../common/assets/images/Google-logo.png";
import SearchBar from "../../common/components/search-bar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { searchForQuery } from "../../api/search";
import SearchResults from "./components/search-results";

const SearchResult = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const searchQuery = params.get("searchQuery") || "";
    const [searchResults, setSearchResults] = useState({});

    const getSearchData = useCallback(() => {
        searchForQuery(searchQuery)
            .then(res => {
                console.log(res);
                setSearchResults(res);
            })
            .catch(error => {
                console.log(error);
            });
    }, [searchQuery]);

    useEffect(() => {
        getSearchData();
    }, [searchQuery, getSearchData]);

    const handleSearchSubmit = searchText => {
        const searchQuery = searchText.replaceAll(" ", "+");
        navigate(`/search?searchQuery=${searchQuery}`);
    };

    const goToFilter = link => {
        if (link) {
            navigate(link);
        }
    };

    const filterOptions = [
        {
            icon: <i className='bi bi-search'></i>,
            text: "All",
            link: "/all",
        },
        {
            icon: <i class='bi bi-newspaper'></i>,
            text: "News",
            link: "/news",
        },
        {
            icon: <i class='bi bi-image-fill'></i>,
            text: "Images",
            link: "/images",
        },
        {
            icon: <i class='bi bi-cart2'></i>,
            text: "Shopping",
            link: "/shopping",
        },
        {
            icon: <i class='bi bi-geo-alt-fill'></i>,
            text: "Maps",
            link: "/maps",
        },
        {
            icon: <i class='bi bi-three-dots-vertical'></i>,
            text: "More",
        },
    ];

    return (
        <div className='searh-result-main'>
            <div className='container'>
                <div className='search-result-header w-full d-flex justify-content-between align-items-center'>
                    <div className='left-part d-flex align-items-center w50per'>
                        <Link to='/'>
                            <img
                                src={googleLogo}
                                className='google-logo'
                                alt='google-logo'
                            />
                        </Link>

                        <div className='mx-4 w-100'>
                            <SearchBar
                                onSubmit={handleSearchSubmit}
                                hideButtons
                                defaultValue={searchQuery}
                            />
                        </div>
                    </div>
                </div>
                <div className='search-result-filters pb-4 w-full d-flex justify-content-between align-items-center'>
                    <div className='left-part d-flex align-items-center'>
                        {filterOptions.map(option => {
                            return (
                                <div
                                    className='d-flex align-items-center mx-2 cursor-pointer'
                                    onClick={() => {
                                        goToFilter(option.link);
                                    }}
                                >
                                    {option.icon}
                                    <span className='mx-1'>{option.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='search-results-container w50per'>
                    <SearchResults searchResults={searchResults} />
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
