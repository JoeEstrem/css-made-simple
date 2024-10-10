import "./ButtonsPage.css";

import React, { useState } from 'react';



function ButtonsPage() {

  let initialValue = "Copy";
  const [buttonText, setButtonText] = useState(initialValue);
  const [buttonClass, setButtonClass] = useState("copy-button-default");

  const handleClick = () => {
    setButtonText('Copied');
    setButtonClass('copy-button-active');

    setTimeout(() => {
      setButtonText(initialValue);
      setButtonClass('copy-button-default');
    }, 1500);
  }


  return (
    <div>
      <h1>Buttons Page</h1>

      {/* COMPONENT */}
      <h2>Simple button</h2>
      <div className="component-card">
        <button className="simple-button">
          Click me!
        </button>
      </div>

      {/* COMPONENT CODE */}
      <div className="code-cards">
        <div className="code-card"> {/* HTML */}
          <div className="code-elements">
            <div>
              <h2 className="code-h2">HTML Code</h2>
            </div>
            <button
              className={buttonClass}
              onClick={ () => {
                handleClick();
                const codeCopy = `<button class="simple-button">Click me!</button>`;
                navigator.clipboard.writeText(codeCopy).then(() => {
                  alert('Copied to clipboard!');
                }).catch(err => {
                  console.error('Failed to copy text: ', err);
                });
              }}
            >
              {buttonText}
            </button>
          </div>
          <p className="code-text">
            &lt;button class=&quot;simple-button&quot;&gt;Click me!&lt;/button&gt;
          </p>
        </div>

        <div className="code-card"> {/* CSS */}
          <div className="code-elements">
            <div>
              <h2 className="code-h2">CSS Code</h2>
            </div>
            <button
              className={buttonClass}
              onClick={ () => {
                handleClick();
                const codeCopy = `.simple-button {
                                    background-color: blue;
                                    color: white;
                                    border: none;
                                    padding: 10px 20px;
                                  }`;
                navigator.clipboard.writeText(codeCopy).then(() => {
                  alert('Copied to clipboard!');
                }).catch(err => {
                  console.error('Failed to copy text: ', err);
                });
              }}
            >
              {buttonText}
            </button>
          </div>
          <p className="code-text">
            .simple-button <br />
                  &nbsp;&nbsp;background-color: blue;<br />
                  &nbsp;&nbsp;color: white;<br />
                  &nbsp;&nbsp;border: none;<br />
                  &nbsp;&nbsp;padding: 10px 20px;<br />
          </p>
        </div>
      </div>





    </div>
  );
}


export default ButtonsPage;
