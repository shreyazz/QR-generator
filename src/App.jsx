import "./App.css";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
function App() {
  const [text, setText] = useState("HELLO WORLD");
  const [show, updateShow] = useState(true);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    updateShow(!show);
  };

  let imageSrc =
    text.length !== 0
      ? `https://api.qrserver.com/v1/create-qr-code/?data=${text}`
      : `https://api.qrserver.com/v1/create-qr-code/?data=HELLO WORLD`;
  return (
    <>
      <div className="mainBox">
        <h1 className="heading">QR CODE GENERATOR</h1>
        <div className="main">
          <img src={imageSrc} alt="qr-code" />
          <input
            className="text-area"
            placeholder="Enter Email/Phone/URL/Text"
            onChange={handleChange}
          ></input>
        </div>
        
        <AiOutlineInfoCircle className="info-icon" onClick={handleClick} />
     

      </div>
      {
        <div className="alert" style={ show ?  {visibility: 'hidden'} : {visibility: 'visible'}}>
          <ul>
            <li>
              <b> Download QR on iPhones: </b> Long Press on the QR Code and
              click on 'add to photos'.
            </li>
            <li>
              <b> Download QR on Android: </b> Long Press on the QR Code and
              click on 'download image'.
            </li>
            <li>
              <b> Download QR on PC/MAC: </b> Right Click on the QR Code and
              click on 'save image as'.
            </li>
          </ul>
        </div>
      }
    </>
  );
}

export default App;
