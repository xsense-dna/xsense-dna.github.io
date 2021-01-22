import React from 'react';
import './content.css';
import title from './assets/xsense-title.svg'
import line from './assets/line.svg'

function Content() {
  return (
    <div className="container title">
      <div className="light scrollable">
        <div className="slide">
          <img src={title} className="logo-title"/>
          <img src={line} className="title-line"/>
          <h2>Removing the doubt from diagnostics</h2>
          <a target="_top" className="contact-button" href="https://imperiallondon.sharepoint.com/sites/VCCSoftNano-MM/Shared%20Documents/General/Research/xSense%20Draft%20Design.pptx?web=0?download.aspx">
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
        <div className="slide">
          <h1 className="contact-button theme-light">About Us</h1>
          <div className="text-box theme-light">
            <p>
              Over 100,000 people die every year from antimicrobial 
              resistant bacteria. Advanced diagnostics are needed to 
              identify these bacteria and get patients the treatment 
              they need to save their lives. Our product is a rapid 
              point-of-care test to identify any specific bacteria 
              using advanced DNA probing. This will save millions of 
              lives and billions from the economy.
            </p>
          </div>
          <a target="_top" className="contact-button" href="https://imperiallondon.sharepoint.com/sites/VCCSoftNano-MM/Shared%20Documents/General/Research/xSense%20Draft%20Design.pptx?web=0?download.aspx">
            <h1>Contact Us</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Content;