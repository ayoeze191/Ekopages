import { AboutContainer } from "../../components/about/aboutContainer"

import { useEffect } from "react";

const AboutPage = () => {
    
    const loc = window.location

    useEffect(() => {
        window.scrollTo(0, 0);
  
    }, [ loc]);

    return (
        <AboutContainer></AboutContainer>
    )
}

export default AboutPage