import React from 'react';

import "./Header.css"

function Header(props) {
    return (
        <div className='container ' >
            <div className='d-flex row justify-content-center mt-5' >
                <div className='col-md-6 d-flex justify-content-start c-header-heading1 ' >
                    Welcome to BBC.com
                </div>

                <div className='col-md-6 d-flex justify-content-end c-header-heading2 ' >
                    Tuesday, 25 January
                </div>
            </div>
        </div>
    );
}

export default Header;