import React from 'react';
import './content.css';
//import title from './assets/xsense-title.svg';
import line from './assets/line.svg';
import diagram from './assets/diagram.svg';

function Content() {
  return (
    <div className="container title">
      <div className="light scrollable">
        <div className="slide">
          <h1 className='title-text'>nanograb</h1>
          <img src={line} className="title-line" alt="line"/>
          <h2>Building synthetic antibodies that work everytime</h2>
          <a target="_blank" rel="noreferrer"  className="contact-button" href="https://drive.google.com/file/d/1ygm1D-zOsddVejKhes_JFb6_T6RD1kMr/view?usp=sharing">
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
        <div className="slide">
          <h1 className="contact-button theme-light">About Us</h1>
          <div className="text-box theme-light">
            <p>
            Antibodies are undergoing a reliability crisis. They are too expensive and unreliable, and in 2012 the
            "reproducibility crisis" was born after 47 out 52 cancer studies could not be replicated solely due to
            research antibodies. Antibodies can cost up to £500/mg and new ones take years to come to market
            costing millions if not billions. This is all because they are manufactured using living processes.
            We are building a platform to design and manufacture artificial made out of DNA that can offer a 10x
            price reduction and a 100x increase in reproducibility. Our vision is to use our platform to reduce
            the time taken to develop new target molecules from years (antibodies) down to days (Superselectors).
            We are doing this using our propietary software platform. Take a look at our pitch deck and get in touch
            if you are interested in finding out more.
            </p>
          </div>
          <a target="_blank" rel="noreferrer"  className="contact-button" href="https://drive.google.com/file/d/1ygm1D-zOsddVejKhes_JFb6_T6RD1kMr/view?usp=sharing">
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
        <div className="slide">
          <h1 className="contact-button theme-light">Our Technology</h1>
          <div className="text-box theme-light">
            <p>Superselectors: artificial antibodies powered by DNA</p>
            <img src={diagram} className="container" alt="diagram"/>
          </div>
          <div className="button-row-container">
            <div className="button-row">
              <a target="_blank" rel="noreferrer" className="contact-button" href="mailto:hello@nanograb.com">
                <h1>Contact Us</h1>
              </a>
              <a target="_blank" rel="noreferrer" className="contact-button" href="https://drive.google.com/file/d/1ygm1D-zOsddVejKhes_JFb6_T6RD1kMr/view?usp=sharing">
                <h1>Download Pitch Deck</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content;