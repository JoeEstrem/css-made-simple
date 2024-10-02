import "./ButtonsPage.css";

import React from 'react';

function ButtonsPage() {
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
      <div className="code-card">
        <p className="code-text">
          <div>
            <button>HTML</button>
            <button>CSS</button>
          </div>
          <div id="HTML">
            &lt;button class=&quot;simple-button&quot;&gt;Click me!&lt;/button&gt;
          </div>
          <div id="CSS">
            &lt;button class=&quot;simple-button&quot;&gt;Click me!&lt;/button&gt;
          </div>
        </p>
      </div>


    </div>


  );
}

export default ButtonsPage;
