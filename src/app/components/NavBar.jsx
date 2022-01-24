import React from 'react';

import bbcLogo from "../assets/blq-orbit-blocks_white_alpha.png"

import Colors from "../config/Colors"

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
        <div style={styles.navbarContainer}  >
            <nav className="row navbar navbar-expand-lg justify-content-center align-items-center">
                <div style={styles.logoContainer} className="col-md-1 d-flex align-content-center flex-wrap ">
                    <img style={styles.logo} src={bbcLogo} />
                </div>

                <div style={styles.signinContainer} className="col-md-1 d-flex justify-content-start align-items-center">
                    <div style={{ marginLeft: "0.2rem" }} className='row d-flex align-items-center' >
                        <i style={styles.userIcon} className="fa fa-user-circle" aria-hidden="true" />
                        <p style={styles.siginText} >Sign in</p>
                    </div>
                </div>

                {
                    menues.map(item =>
                        <div key={item.id.toString()} style={styles.menueButtons} className="d-flex justify-content-center align-items-center">
                            <p style={styles.menueText} >{item.title}</p>
                        </div>)
                }

                <div style={styles.searchFeild} className="d-flex justify-content-center align-items-center">
                    <div style={{ marginTop: -7, marginLeft: "0.6rem", backgroundColor: Colors.white }} className='row d-flex align-items-center justify-content-center ' >
                        <input style={{
                            border: "none",
                            background: "none",
                            height: "1.246em",
                            minHeight: "24px",
                            fontWeight: "bold",
                            width: "162px",
                            float: "left",
                            padding: "0 0 0 6px",
                            color: "#333",
                            fontWeight: "bold",
                            fontSize: "0.8rem"
                        }} className='' type="text" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" placeholder='Search' />
                        <img src='https://nav.files.bbci.co.uk/searchbox/2432a71c53a3b82accd4f32608cae098/img/gel-icon-search-dark.svg' style={{
                            width: "1rem",
                            margin: 5
                        }} />
                    </div>
                </div>

            </nav>
        </div>
    );
}

const styles = {
    navbarContainer: {
        backgroundColor: "#000",
        height: '2.5rem',
    },
    logoContainer: { height: "2.4rem", marginTop: -7, boxShadow: "0.5px 0 0 0 white", maxWidth: "7rem" },
    logo: { height: "1.3rem", marginRight: "1rem" },
    signinContainer: { height: "2.4rem", marginTop: -7, boxShadow: "0.5px 0 0 0 white", minWidth: "12rem" },
    siginText: { color: Colors.white, fontFamily: "inherit", fontSize: "0.9rem", fontWeight: "800", marginTop: "0.9rem", marginLeft: "0.3rem" },
    userIcon: { color: "white", fontSize: "1.1rem" },
    menueButtons: { cursor: "pointer", height: "2.4rem", marginTop: -7, boxShadow: "0.5px 0 0 0 white", width: "5rem" },
    menueText: { color: Colors.white, fontFamily: "inherit", fontSize: "0.8rem", marginTop: "0.9rem", fontWeight: "800", marginLeft: "0.3rem" },
    // searchFeild: { maHeight: "1rem" },


}

export default NavBar