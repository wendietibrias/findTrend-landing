import { 
    DevDeskSection,
    Hero,
    Navbar,
    NewTabSection,
    PartnerSection,
    ConnectSection,
    PricingSection,
    ContactSection,
    Footer
} from "./components"

const App = () => {
    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <NewTabSection/>
            <DevDeskSection/>
            <PartnerSection/>
            <ConnectSection/>
            <PricingSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default App
