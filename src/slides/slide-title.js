import React from 'react';
import './slides.css';
import title from '../assets/xsense-title.svg'

function Title() {
  return (
    <div className="container title">
      <div className="slide light">
        <div className="slide">
          <img src={title}/>
          <div className="title-line"></div>
          <h2>Removing the doubt from diagnostics</h2>
          <a target="_top" className="contact-button" href="https://imperiallondon.sharepoint.com/sites/VCCSoftNano-MM/Shared%20Documents/General/Research/xSense%20Draft%20Design.pptx?web=0?download.aspx">
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Title;
