import React from 'react'
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import {TechStack} from "./sections/TechStack.jsx";
import ContactUs from "./sections/ContactUs.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <Experience/>
            <TechStack/>
            <ContactUs/>
            <Footer/>
        </>

    )
}
export default App
