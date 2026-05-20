function Header() {
  return (
    <section className="header-section">
        <section className= "header-nav">
            <img src="https://res.cloudinary.com/dvdd6swn9/image/upload/v1779136455/graphics_2_snej3a.png" alt="Project Logo" />
        </section>

        <section className="intro-hero-container">
            <div className="intro-hero-wrapper">
              <div className="intro-hero">
                <h1>Explore Our Solar System Through Data</h1>
                <p>Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.</p>
              <div className="header-buttons">
                  <a href="" id = "explore-data">Explore the data</a>  <a href="Contact us" id = "contact-us">Contact us</a>
              </div>
            </div>
              
              <div className="intro-hero-image-container">
                <img src="https://res.cloudinary.com/dvdd6swn9/image/upload/v1779207974/075cfe8711f093d2ee4330cfa37d385003066f0a_1_oj7zcy.png" alt="Solar System Image" className="intro-hero-image"/>
               </div>
            </div>
        </section>
    </section>



  )
}

export default Header