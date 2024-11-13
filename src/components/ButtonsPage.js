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
      <h1>.buttons</h1>

      {/* COMPONENT */}
      <h2 id="simple-button">.simple-button</h2>
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
                                      background-color: transparent;
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
              .simple-button &#123;<br />
                &nbsp;&nbsp;color: rgb(25, 25, 25);<br />
                &nbsp;&nbsp;background-color: transparent;<br />
                &nbsp;&nbsp;border: 1px solid rgb(25, 25, 25);<br />
                &nbsp;&nbsp;border-radius: 40px;<br />
                &nbsp;&nbsp;padding: 12px 40px;<br />
                &#125;<br />
                <br />
              .simple-button:hover &#123;<br />
                &nbsp;&nbsp;color: #05f;<br />
                &nbsp;&nbsp;border: 1px solid #05f;<br />
                &#125;<br />
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* COMPONENT */}
      <h2 id="bevel-button">.bevel-button</h2>
            <div className="component-block">
              <div className="component-card">
                <button className="bevel-button">
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
                        const codeCopy = `<button class="bevel-button">Click me!</button>`;
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
                    &lt;button class=&quot;bevel-button&quot;&gt;Click me!&lt;/button&gt;
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
                        const codeCopy = `.bevel-button {
                                            background: #f9f9f9;
                                            padding: 24px 40px;
                                            border: none;
                                            transition: .2s;
                                          }

                                          .bevel-button:hover {
                                            box-shadow:
                                            8px 8px 8px rgba(0, 0, 0, 0.1),
                                            -8px -8px 8px white;
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
                    .bevel-button &#123;<br />
                      &nbsp;&nbsp;color: rgb(25, 25, 25);<br />
                      &nbsp;&nbsp;background-color: #f9f9f9;<br />
                      &nbsp;&nbsp;border: none;<br />
                      &nbsp;&nbsp;transition: .2s;<br />
                      &#125;<br />
                      <br />
                    .bevel-button:hover &#123;<br />
                      &nbsp;&nbsp;box-shadow:;<br />
                      &nbsp;&nbsp;8px 8px 8px rgba(0, 0, 0, 0.1),<br />
                      &nbsp;&nbsp;-8px -8px 8px white;<br />
                      &#125;<br />
                  </p>
                </div>
              </div>
            </div>

          <div className="page-bottom"></div>


    </div>
  );
}

export default ButtonsPage;
