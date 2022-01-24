import React from 'react';

// Custom components
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';

function Home(props) {

    return (
        <div style={{ backgroundColor: "#FFFFFF" }} >
            <NavBar />
            <Header />
        </div>
    );
}

const styles = {

}

export default Home