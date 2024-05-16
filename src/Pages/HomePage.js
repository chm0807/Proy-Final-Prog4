// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
    return (
        <Layout
            title="Home Page - Proyecto Final"
            author="Camila Herrera"
            keywords="e-commerce, home, shopping"
            description="Welcome to the home page of our e-commerce site."
        >
            <h1>Home Page</h1>
            <p>Welcome to our e-commerce site!</p>
        </Layout>
    );
};

export default HomePage;
