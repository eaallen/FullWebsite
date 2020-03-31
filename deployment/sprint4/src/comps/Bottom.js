import React from 'react';

//import Footer from 'react-bootstrap/';



function Bottom(props) {
  const d = new Date()
  const year = d.getFullYear()
    return (
        <div
            className={props.className}
        >           
         &copy; {year}  <a style={{color:'white'}} href='https://www.linkedin.com/in/elijah-andrew-allen/'>Elijah Allen</a>
        </div>
  );
}

export default Bottom;
