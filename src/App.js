import React from "react";
import Window from "./Window";
import Windows from "./Windows";
import fileIconImage from "./images/file-30.png";

function App() {
  return (
    <React.Fragment>
      <Windows>
        <Window name="File of the day 1" iconImageSrc={fileIconImage} />
        <Window
          name="River.jpg"
          iconImageSrc={
            "https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&w=50"
          }
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="River"
            />
          </div>
        </Window>
        <Window name="File 3" iconImageSrc={fileIconImage}>
          <div className="css-12n5kwj">
            <h1 className="css-1eqadyu">Adam Risberg</h1>
            <div className="css-15hy0ov">
              <div className="css-1b5b5d2">
                <div>
                  <p>
                    Full-stack Web Developer, currently specializing in React
                    and Node based web apps with a background in windows
                    software development. A hard worker who is always excited to
                    learn and face new challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="css-15hy0ov">
              <h2 className="css-1rwysbj">WORK HISTORY</h2>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>Freelance Web Development, 2016-Present</h3>
                  <p>
                    Full-stack development, specializing in React and Node based
                    websites.
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-lp4ycl"></div>
                <div>
                  <h3>
                    Freelance Programmer &amp; Computer Technician, 2011-2018
                  </h3>
                  <p>
                    Custom programming (Windows software), static websites,
                    computer repair, and technical support.
                  </p>
                </div>
              </div>
            </div>
            <div className="css-15hy0ov">
              <h2 className="css-1rwysbj">WEB PROJECTS</h2>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>React Express Cart</h3>
                  <a href="https://www.cart.adamrisberg.com">
                    www.cart.adamrisberg.com
                  </a>
                  <p>
                    An open source React and Express based shopping cart system.
                    Similar to Magento, OpenCart, etc. (React, Express, MongoDB)
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>React Image Magnifiers</h3>
                  <a href="https://adamrisberg.github.io/react-image-magnifiers">
                    adamrisberg.github.io/react-image-magnifiers
                  </a>
                  <p>
                    An open source collection of responsive, image magnifying
                    React components with mouse and touch interactions. (React)
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>React Input Position</h3>
                  <a href="https://adamrisberg.github.io/react-input-position">
                    adamrisberg.github.io/react-input-position
                  </a>
                  <p>
                    An open source React component that decorates it's children
                    with mouse/touch position tracking and a status toggle fired
                    by click/gesture events. (React)
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>Only Music Folders Online Store</h3>
                  <a href="https://www.onlymusicfolders.com">
                    www.onlymusicfolders.com
                  </a>
                  <p>
                    Installed, configured, and customized OpenCart. Wrote
                    extensions and tweaked source code to handle product option
                    requirements, fit their workflow, and allow integration with
                    the company's business software. (OpenCart, PHP, MYSQL)
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-lp4ycl"></div>
                <div>
                  <h3>Deer River Folio Website</h3>
                  <a href="https://www.deerriverfolio.com">
                    www.deerriverfolio.com
                  </a>
                  <p>
                    Redesign of an old site to make it mobile friendly with
                    improved look, user experience, and maintainability. (React
                    &amp; Static Rendering)
                  </p>
                </div>
              </div>
            </div>
            <div className="css-15hy0ov">
              <h2 className="css-1rwysbj">WINDOWS PROJECTS</h2>
              <div className="css-1b5b5d2">
                <div className="css-bpexqj"></div>
                <div>
                  <h3>Deer River Folio Business Software</h3>
                  <p>
                    Business software including accounting, payroll, orders,
                    inventory, etc. Worked closely with the company to automate
                    everything possible and tailor the software to their desired
                    workflow. (C#, WPF, MYSQL)
                  </p>
                </div>
              </div>
              <div className="css-1b5b5d2">
                <div className="css-lp4ycl"></div>
                <div>
                  <h3>Deer River Folio Time Clock Software</h3>
                  <p>
                    Windows software allowing employees to clock in/out and
                    request vacation days. (C#, WPF, MYSQL)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Window>
      </Windows>
    </React.Fragment>
  );
}

export default App;
