import React, { Component } from "react";
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';
// import images from "./images.js";
// const transition = transitions.scaleDown;

class Illustrations extends Component {
    render() {
    // const images = [
    //     { src: './images/sunflower.gif', label: 'sunflower' },
    //     { src: './images/sunrise.jpg', label: 'sunrise' },
    //     { src: './images/sunset.jpg', label: 'sunset' },
    //     { src: './images/DataDiary1.png', label: 'DataDiary1' },
    //     { src: './images/LogoW.png', label: 'LogoW' },
    //   ]
    const { 
        size: { 
          width
        } 
      } = this.props;
    return (
        <section className="section-body-middle section-body-last">
            <h1>Besides UX Design, I also love caligraphy, oil painting, and doodling.</h1>

            <StackGrid
                monitorImagesLoaded
                columnWidth={150}
                columnWidth={width <= 768 ? '100%' : '33.33%'}
                duration={600}
                gutterWidth={15}
                gutterHeight={15}
                easing={easings.cubicOut}            
                // appearDelay={60}
                // appear={transition.appear}
                // appeared={transition.appeared}
                // enter={transition.enter}
                // entered={transition.entered}
                // leaved={transition.leaved}
            >
                <img src={require("./images/DataDiary1.png")} alt="DataDiary1" className="img-work-large"/>
                <img src={require("./images/sunrise.jpg")} alt="sunrise" className="img-work-large"/>
                <img src={require("./images/sunset.jpg")} alt="sunset" className="img-work-large"/>
                <img src={require("./images/sunflower.gif")} alt="sunflower" className="img-work-large"/>
                <img src={require("./images/LogoW.png")} alt="LogoW" className="img-work-large"/>
                <img src={require("./images/calli-1.png")} alt="calli-1" className="img-work-large"/>
                <img src={require("./images/calli-2.png")} alt="calli-1" className="img-work-large"/>
                <img src={require("./images/calli-3.png")} alt="calli-1" className="img-work-large"/>
                <img src={require("./images/calli-4.png")} alt="calli-1" className="img-work-large"/>
                <img src={require("./images/TsaSocial.png")} alt="calli-1" className="img-work-large"/>
                <img src={require("./images/dd-1.png")} alt="calli-1" className="img-work-large"/>

                {/* {images} */}
                {/* {images.map(obj => (
                <figure key={obj.src} className="img-work-large">            
                    <img src={obj.src} alt={obj.label} />
                    <figcaption>{obj.label}</figcaption>
                </figure>
                ))}                */}
            </StackGrid>
        </section>
    );
  }
}
export default sizeMe()(Illustrations)