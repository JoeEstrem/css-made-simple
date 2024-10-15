import "./CardsPage.css";

import React, { useState } from 'react';

function CardsPage() {

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
      <h1>.cards</h1>

       {/* COMPONENT */}
       <h2>.glass-card</h2>
      <div className="component-block">
        <div className="component-card glass-card-background">
          <div className="glass-card">
            <img
              src={require('../imgs/Joe-Square-2024.png')}
              alt="avatar"
              className="glass-card-avatar"
            />
            <h3>Joe Estrem</h3>
            <p className="glass-card-description">Tokyo-based Web Developer</p>
          </div>
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
                  const codeCopy =
                  `<div class="glass-card">
                    <img src="you/image/path.png" class="glass-card-avatar" alt="avatar">
                    <h3>Joe Estrem</h3>
                    <p>Tokyo-based Web Developer</p>
                  </div>`;
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
              &lt;div class="glass-card"&gt;<br />
                &nbsp;&nbsp;&lt;img src="your/image/path.png" class="glass-card-avatar" alt="avatar"&gt;<br />
                &nbsp;&nbsp;&lt;h3&gt;Joe Estrem&lt;/h3&gt;<br />
                &nbsp;&nbsp;&lt;p&gt;Tokyo-based Web Developer&lt;/p&gt;<br />
              &lt;/div&gt;
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
                  const codeCopy = `.glass-card {
                                      background-color: rgba(255, 255, 255, .05);
                                      backdrop-filter: blur(10px);
                                      border: 2px solid rgba (255, 255, 255, .25);
                                      color: rgb(255, 255, 255);
                                      padding: 24px 40px;
                                      border-radius: 18px;
                                      display: flex;
                                      flex-direction: column;
                                      align-items: center;
                                    }

                                    .glass-card-avatar {
                                      border-radius: 50%;
                                      border: 2px solid rgba (255, 255, 255, .25);
                                      width: 128px;
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
              .glass-card <br />
              &nbsp;&nbsp;background-color: rgba(255, 255, 255, .05);<br />
              &nbsp;&nbsp;backdrop-filter: blur(10px);<br />
              &nbsp;&nbsp;border: 2px solid rgba (255, 255, 255, .25);<br />
              &nbsp;&nbsp;color: rgb(255, 255, 255);<br />
              &nbsp;&nbsp;padding: 24px 40px;<br />
              &nbsp;&nbsp;border-radius: 18px;<br />
              &nbsp;&nbsp;display: flex;<br />
              &nbsp;&nbsp;flex-direction: column;<br />
              &nbsp;&nbsp;align-items: center;<br />
              <br />
              .glass-card-avatar <br />
                &nbsp;&nbsp;border-radius: 50%;<br />
                &nbsp;&nbsp;border: 2px solid rgba (255, 255, 255, .25);<br />
                &nbsp;&nbsp;width: 128px%;<br />
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CardsPage;
