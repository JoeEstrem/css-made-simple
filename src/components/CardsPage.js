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
       <h2 id="glass-card">.glass-card</h2>
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
              .glass-card &#123;<br />
              &nbsp;&nbsp;background-color: rgba(255, 255, 255, .05);<br />
              &nbsp;&nbsp;backdrop-filter: blur(10px);<br />
              &nbsp;&nbsp;border: 2px solid rgba (255, 255, 255, .25);<br />
              &nbsp;&nbsp;color: rgb(255, 255, 255);<br />
              &nbsp;&nbsp;padding: 24px 40px;<br />
              &nbsp;&nbsp;border-radius: 18px;<br />
              &nbsp;&nbsp;display: flex;<br />
              &nbsp;&nbsp;flex-direction: column;<br />
              &nbsp;&nbsp;align-items: center;<br />
              &#125;<br />
              <br />
              .glass-card-avatar &#123;<br />
                &nbsp;&nbsp;border-radius: 50%;<br />
                &nbsp;&nbsp;border: 2px solid rgba (255, 255, 255, .25);<br />
                &nbsp;&nbsp;width: 128px%;<br />
                &#125;<br />
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* COMPONENT */}
      <h2 id="property-card">.property-card</h2>
      <div className="component-block">
        <div className="component-card">
          <div className="property-card">
            <div className="property-card-img-container">
              <img
                src={require('../imgs/House-pexels-pixasquare-1115804.jpg')}
                alt="avatar"
                className="property-card-img"
              />
            </div>
            <h3>Property Name</h3>
            <p className="property-card-price">15,500,000 USD</p>
            <p className="property-card-description">Pacific Heights, California</p>
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
                  `<div class="property-card">
                    <img src="you/image/path.png" class="property-card-img">
                    <h3>Property name</h3>
                    <p class="property-card-price">Property price</p>
                    <p class="property-card-description">Property description</p>
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
              &lt;div class="property-card"&gt;<br />
                &nbsp;&nbsp;&lt;img src="your/image/path.png" class="property-card-img"&gt;<br />
                &nbsp;&nbsp;&lt;h3&gt;Property Name&lt;/h3&gt;<br />
                &nbsp;&nbsp;&lt;p class="property-card-price"&gt;15,500,000 USD&lt;/p&gt;<br />
                &nbsp;&nbsp;&lt;p class="property-card-description"&gt;Pacific Heights, California&lt;/p&gt;<br />
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
                  const codeCopy = `.property-card {
                                      background-color: rgb(255, 255, 255, .05);
                                      border-radius: 16px;
                                      padding: 24px;
                                      box-shadow: 0 4px 4px rgba(25, 25, 25, .2);
                                      border: 1px solid rgb(240, 240, 240);
                                      transition: .25s
                                      width: 224px;
                                      display: flex;
                                      flex-direction: column;
                                    }

                                    .property-card:hover {
                                      border: 2px solid #05F;
                                    }

                                    .property-card-price {
                                      font-size: 16px;
                                      font-weight: 500px;
                                      margin-top: 0px;
                                    }

                                    .property-card-description {
                                      font-size: 12px;
                                      font-weight: 300px;
                                      margin-top: -16px;
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
              .property-card &#123;<br />
              &nbsp;&nbsp;background-color: rgba(255, 255, 255);<br />
              &nbsp;&nbsp;border-radius: 16px;<br />
              &nbsp;&nbsp;padding: 24px;<br />
              &nbsp;&nbsp;box-shadow: 0 4px 4px rgba(25, 25, 25, .2);<br />
              &nbsp;&nbsp;border: 1px solid rgb (240, 240, 240);<br />
              &nbsp;&nbsp;transition: .25s;<br />
              &nbsp;&nbsp;width: 224px;
              &nbsp;&nbsp;display: flex;
              &nbsp;&nbsp;flex-direction: column;
              &#125;<br />
              <br />
              .property-card:hover &#123;<br />
              &nbsp;&nbsp;border: 2px solid #0055FF;<br />
              &#125;<br />
              <br />
              .property-card-price &#123;<br />
              &nbsp;&nbsp;font-size: 16px;<br />
              &nbsp;&nbsp;margin-top: 0px;<br />
              &nbsp;&nbsp;font-weight: 500;<br />
              &#125;<br />
              <br />
              .property-card-description &#123;<br />
              &nbsp;&nbsp;font-size: 12px;<br />
              &nbsp;&nbsp;margin-top: -16px;<br />
              &nbsp;&nbsp;font-weight: 300;<br />
              &#125;<br />

            </p>
          </div>
        </div>
      </div>

    <div className="page-bottom"></div>
    </div>
  );
}

export default CardsPage;
