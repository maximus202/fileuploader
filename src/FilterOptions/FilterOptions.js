import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component {
    render() {
        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <label htmlFor="filter_all">
                        <input type="radio" value="All" id="filter_all" name="filter" /*checked={filterOption === "All"}*/ />
                        All
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_uploaded">
                        <input type="radio" value="Uploaded" id="filter_uploaded" name="filter" /*checked={filterOption === "Uploaded"}*/ />
                        Uploaded
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter__synced">
                        <input type="radio" value="Synced" id="filter_synced" name="filter" /*checked={filterOption === "Synced"}*/ />
                        Synced
                    </label>
                </div>
                <div className="FilterOptions__option">
                    <label htmlFor="filter_new">
                        <input type="radio" value="New" id="filter_new" name="filter" /*checked={filterOption === "New"}*/ />
                        New
                    </label>
                </div>
            </div>
        );
    }
}

export default FilterOptions;