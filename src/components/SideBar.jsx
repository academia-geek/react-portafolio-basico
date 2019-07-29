import React from 'react';

const SideBar = ( { children }) => (
    <div className="SideBar">
        <div className="SideBar-container">
            { children }
        </div>
    </div>
);

export default SideBar;

