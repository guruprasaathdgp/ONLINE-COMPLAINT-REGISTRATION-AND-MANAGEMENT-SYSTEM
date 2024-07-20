import React from 'react';

const Passwordrequirements = () => {
  return (
    <div id="message">
      <h3>Password must contain the following:</h3>
      <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
      <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
      <p id="number" className="invalid">A <b>number</b></p>
      <p id="length" className="invalid">Minimum <b>8 characters</b></p>
    </div>
  );
};

export default Passwordrequirements;
