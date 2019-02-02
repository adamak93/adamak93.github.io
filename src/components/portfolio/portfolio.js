import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
     
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
          <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt src="images/portfolioresized/twiliosf.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Salesforce+Twilio Video Calling</h5>
                  <p>Web App</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt src="images/portfolioresized/chatbotsf.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Salesforce Chatbot Proof of Concept</h5>
                  <p>Web App</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt src="images/portfolioresized/usafe.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>USafe Campus Project</h5>
                  <p>Web site</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt src="images/portfolioresized/soceropayment.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Socero/Loop Payment System</h5>
                  <p>Mobile App</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>
          </div>
        </div>

        </div>
        <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolioresized/twiliosf.png" alt />
      <div className="description-box">
        <h4>Salesforce + Twilio Video Calling</h4>  
        <p>This Salesforce web app leverages Twilio's Video SDK to allow its users to place video calls between other users using the same application on WebRTC compliant browsers. More information can be found below.</p>
      </div>
      <div className="link-box">
        <a href="http://ballistictoaster.com/index.php/2016/08/11/twilio-video-in-force-com/">Details</a>  {/*CHANGE THIS*/}
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolioresized/chatbotsf.png" alt />  {/*CHANGE THIS*/}
      <div className="description-box">
        <h4>Salesforce Chatbot Proof of Concept</h4>  {/*CHANGE THIS*/}
          <p>This Salesforce web app showcases the business value proposition for chatbots that allows users to interact with a chatbot to assist them if no agents are available through Salesforce's Live Agent plugin. More information can be found below. </p>
      </div>
      <div className="link-box">
        <a href="http://ballistictoaster.com/index.php/2017/08/26/watson-salesforce-deploy-liveagent/">Details</a>  {/*CHANGE THIS*/}
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/usafe.png" alt />  {/*CHANGE THIS*/}
      <div className="description-box">
         <h4>USafe Campus Project</h4>
         <p>Originally conceived and created as part of a Social Psychology project, USafe addresses the growing need for improving the safety and security of the Keele Campus of York University by offering a suite of resources such as heat maps showing the frequency of assault crimes depending on location and time of day on campus, on and off-campus resources, prevention strategies, and forums to communicate with other students. USafe was developed on the Wix platform for members of the development team to quickly acheive milestones without requiring technical knowledge of web design frameworks and languages.</p>
       
      </div>
      <div className="link-box">
        <a href="https://yorkusafe.wixsite.com/usafe">Visit USafe</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/soceropayment.png" alt />
      <div className="description-box">
        <h4>Socero/Loop Payment System</h4>
        <p>During my time in Socero, I was placed in charge of creating a payment solution for users to purchase tickets or other items through the app. This particular build makes use of Stripe, a payment processing platform that allows users to make transactions on behalf of the product owner, including being able to charge a commission rate on top of the tickets. </p>
      </div>
      <div className="link-box">
       {/* <a href="http://www.behance.net">Details</a>*/}
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>
      
         </section>
  
 
        );
  }
}