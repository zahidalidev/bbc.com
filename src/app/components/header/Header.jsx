import React from 'react';

import HeaderCard from '../headerCard/HeaderCard';

import "./Header.css"

function Header(props) {
    return (
        <div className='container-fluid' >
            <div className='row justify-content-md-center mt-4' >
                <div className='col-md-4 d-flex justify-content-start c-header-heading1 ' >
                    Welcome to BBC.com
                </div>

                <div className='col-md-4 d-flex justify-content-end c-header-heading2 ' >
                    Tuesday, 25 January
                </div>
            </div>

            <div className='row justify-content-md-center mt-4' >
                <div className='col-md-4 d-flex justify-content-start c-header-heading1 ' >
                    <HeaderCard />
                </div>

                <div className='col-md-4 d-flex justify-content-end c-header-heading2 ' >
                    Tuesday, 25 January
                </div>
            </div>
        </div>
    );
}

export default Header;