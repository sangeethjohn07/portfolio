import React from 'react'
import MainSection from '../MainSection'
import '../MainSection.css'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import ProfileCard from '../ProfileCard'
import EducationSection from '../EducationSection'
import CareerSection from '../CareerSection'
import SkillsSection from '../SkillsSection'

function HomePage() {
    return (
        <>
            <MainSection />
            <ProfileCard />
            <EducationSection />
            <CareerSection />
            <Cards />
            <SkillsSection />
            <Footer />
            

        </>
    )
}

export default HomePage;
