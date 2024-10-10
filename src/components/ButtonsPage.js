import "./ButtonsPage.css";

import React, { useState } from 'react';



function ButtonsPage() {

  let initialValue = "Copy";
  const [buttonText] = useState(initialValue);

  const handleClick = (event) => {
    const button = event.target;
    button.textContent = "Copied";
    button.className = "copy-button-active";

    setTimeout(() => {
      button.textContent = initialValue;
      button.className = "copy-button-default";
    }, 1500);
  }


  return (
    <div>
      <h1>Buttons Page</h1>

      {/* COMPONENT */}
      <h2>Simple button</h2>
      <div className="component-block">
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
                className="copy-button-default"
                onClick={ (event) => {
                  handleClick(event);
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
                className="copy-button-default"
                onClick={ (event) => {
                  handleClick(event);
                  const codeCopy = `.simple-button {
                                      color: rgb (25, 25, 25);
                                      background-color: white;
                                      border: 1px solid rgb (25, 25, 25);
                                      border-radius: 40px;
                                      padding: 12px 40px;
                                    }

                                    .simple-button:hover {
                                      color: #05f;
                                      border: 1px solid #05f;
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
                    &nbsp;&nbsp;color: rgb(25, 25, 25);<br />
                    &nbsp;&nbsp;background-color: white;<br />
                    &nbsp;&nbsp;border: 1px solid rgb(25, 25, 25);<br />
                    &nbsp;&nbsp;border-radius: 40px;<br />
                    &nbsp;&nbsp;padding: 12px 40px;<br />
              <br />
              .simple-button:hover <br />
                &nbsp;&nbsp;color: #05f;<br />
                &nbsp;&nbsp;border: 1px solid #05f;<br />
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>





    </div>
  );
}


export default ButtonsPage;
