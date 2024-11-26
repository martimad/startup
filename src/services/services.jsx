import React from 'react';
import './services.css';

export function Services(){
    //const placeholder = 'skullFlowerNails.jpg';
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  

    React.useEffect(() => {
        setImageUrl(`skullFlowerNails.jpg`);
      }, []);

    return(<div> 
        <h1>Services Offered:</h1>
        <a href="https://www.fresha.com/a/madelynn-manis-pleasant-grove-952-south-main-street-sw9co9y5/all-offer?venue=true">
          <button>Book now!</button>
        </a>
          <div className="cards">
            <div className="card">
              <img src={imageUrl} alt="Pic of nails"/>
              <div className="container">
                <h4><b>Luminary manicure</b></h4>
                <p>A structured Gel manicure for natural nails includes cuticle work, removal of old product, and reapplication</p>
              </div>
            </div>
            <div className="card">
                <img src={imageUrl} alt="Pic of nails"/>
                <div className="container">
                <h4><b>Gel-x Extensions</b></h4>
                <p>Manicure for making nails longer, includes cuticle work, removal of old product, and reapplication</p>
                </div>
            </div>
            <div className="card">
                <img src={imageUrl} alt="Pic of nails"/>
                <div className="container">
                <h4><b>Kids Manicure</b></h4>
                <p>a classic Gel manicure, includes very gentle cuticle work, removal of old product, and reapplication *Can only be applied with purchase of adult manicure*</p>
                </div>
            </div>
            <div className="card">
                <img src={imageUrl} alt="Pic of nails"/>
                <div className="container">
                <h4><b>Soft Gel Mani</b></h4>
                <p>A classic gel manicure, on natural nails, no additional structure, includes cuticle work, removal of old product, and reapplication</p>
                </div>
            </div>
            <div className="card">
                <img src={imageUrl} alt="Pic of nails"/>
                <div className="container">
                <h4><b>Healthy Removal</b></h4>
                <p>A classic gel manicure, on natural nails, no additional structure, includes cuticle work, removal of old product, and reapplication</p>
                </div>
            </div>
          </div>
  </div>)
}
