import React from "react";
import { Link } from "react-router-dom";
import "./search-results.css";

const SearchResults = props => {
    const { searchResults = {} } = props;
    const { items = [] } = searchResults;

    return (
        <div className='results-container py-4'>
            {items.map(item => {
                const { link, htmlTitle, htmlSnippet } = item;

                return (
                    <div className='result-item my-4'>
                        <Link to={link}>
                            <h4
                                dangerouslySetInnerHTML={{ __html: htmlTitle }}
                            />
                        </Link>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: htmlSnippet,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SearchResults;
