import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { DocumentPdf, getProps } from './document-pdf';
import pdf from './harith_resume.pdf';  

export default function Intro() {
  const textRef = useRef();
  
  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: 'row',
  //     backgroundColor: '#E4E4E4'
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1
  //   }
  // });

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End Developer", "Full-Stack Developer", "Junior Software Developer"],
    });
  }, []);

  return (
    <>

      <div className="intro" id="intro">
        {/* <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>  */}
        
        <div className="right">
          <div className="wrapper">
            <h2>Hi, I'm</h2>
            <h1>Harith Anand</h1>
            <h3>
              <span ref={textRef}></span>
            </h3>
          <div><br/>
            <Button variant="outline-secondary" style={{color: 'inherit'}}
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://www.linkedin.com/in/harith-anand/';}}
            >Hire Me</Button>{' '}&emsp;&emsp;
            
            <Button variant="outline-secondary" style={{color: 'inherit'}}
            onClick={(e) => {
              e.preventDefault();
              window.open(pdf);}}
            >Download CV</Button>{' '}
          </div>
          </div>
          

        </div>

      </div>
    </>
  );
}
