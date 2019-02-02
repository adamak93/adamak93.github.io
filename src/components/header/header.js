import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            <img className="profile-pic" src="images/profileimg.jpg" alt />
               <h1 className="responsive-headline">Hi, I'm {resumeData.name}.</h1>
               <h3>I'm a self-taught Toronto-based mobile & web developer and I'd like to help you build something amazing. </h3>
               <hr/>
               <h3>Feel free to give me a shout if you ever want to work together sometime.</h3>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
                  
               </ul>
               
               <hr/>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}
