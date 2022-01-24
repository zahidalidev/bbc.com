import React from 'react';

import "./NavBar.css"
import Colors from "../../config/Colors"

import bbcLogo from "../../assets/blq-orbit-blocks_white_alpha.png"
const searchIcon = 'https://nav.files.bbci.co.uk/searchbox/2432a71c53a3b82accd4f32608cae098/img/gel-icon-search-dark.svg';

function NavBar(props) {

    const menues = [
        { id: 1, title: "Home", address: "" },
        { id: 2, title: "News", address: "" },
        { id: 3, title: "Sport", address: "" },
        { id: 4, title: "Reel", address: "" },
        { id: 5, title: "Worklife", address: "" },
        { id: 6, title: "Travel", address: "" },
        { id: 7, title: "Future", address: "" },
        { id: 8, title: "Culture", address: "" },
        { id: 9, title: "More", address: "" },
    ]

    return (
        <div className='navbarContainer'  >
            <nav style={{ padding: 0 }} className="row navbar navbar-expand-lg justify-content-center align-items-center">
                <div className="col-md-2 d-flex align-content-center flex-wrap logoContainer">
                    <img className='logo' src={bbcLogo} />
                </div>

                <div className="col-md-2 d-flex justify-content-center align-items-center signinContainer">
                    <div style={{ marginLeft: "0.2rem" }} className='row d-flex align-items-center' >
                        <i className="fa fa-user-circle userIcon" aria-hidden="true" />
                        <p className='siginText' >Sign in</p>
                    </div>
                </div>

                {menues.map(item =>
                    <div key={item.id.toString()} className="d-flex col-md-1 justify-content-center align-items-center menueButtons">
                        <p className='menueText' >{item.title}</p>
                    </div>
                )}

                {/* Search Feild */}
                <div className="d-flex col-md-2 justify-content-center align-items-center searchFeild">
                    <div style={{ backgroundColor: Colors.white }} className='row d-flex  justify-content-center  align-items-center ' >
                        <input className='navbar-search' type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" maxLength="100" placeholder='Search' />
                        <img className='nav-search-icon' src={searchIcon} />
                    </div>
                </div>

            </nav>
        </div>
    );
}


export default NavBar