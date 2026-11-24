import './App.css'
import context from './Context.js'
import logo from './assets/images/logo.png'

import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import DifferentSection from './Components/DifferentSection'
import ServiceSection from './Components/ServiceSection'
import ProjectSection from './Components/ProjectSection'
import PriceSection from './Components/PriceSection'
import CounterSection from './Components/CounterSection'
import TeamSection from './Components/TeamSection'
import VideoSection from './Components/VideoSection'
import FAQSection from './Components/FAQSection'
import ToolsSection from './Components/ToolsSection'
import TestimonialSection from './Components/TestimonialSection'
import ContactsSection from './Components/ContactsSection'
import NewsSection from './Components/NewsSection'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header logo={logo}></Header>
      <main>
        <HeroSection data={context.HeroSectionContext}></HeroSection>
        <FeatureSection data={context.FeatureSectionContext}></FeatureSection>
        <DifferentSection data={context.DifferentSectionContext}></DifferentSection>
        <ServiceSection data={context.ServiceSectionContext}></ServiceSection>
        <ProjectSection data={context.ProjectSectionContext}></ProjectSection>
        <PriceSection data={context.PriceSectionContext}></PriceSection>
        <CounterSection data={context.CounterSectionContext}></CounterSection>
        <TeamSection data={context.TeamSectionContext}></TeamSection>
        <VideoSection></VideoSection>
        <FAQSection data={context.FAQSectionContext}></FAQSection>
        <ToolsSection></ToolsSection>
        <TestimonialSection data={context.TestimonialSectionContext}></TestimonialSection>
        <ContactsSection></ContactsSection>
        <NewsSection data={context.NewsSectionContext}></NewsSection>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
