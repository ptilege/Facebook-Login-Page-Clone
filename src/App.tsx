import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div id="pageFooter" data-referrer="page_footer">
        <ul className="footer-list" data-nocookies="1">
          <li>English (UK)</li>
          <li><a className="_sv4" dir="ltr" href="https://si-lk.facebook.com/"  title="Sinhala">සිංහල</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">தமிழ்</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">Español</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">Deutsch</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">Italiano</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">Français (France)</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">Português (Brasil)</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">日本語</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">العربية</a></li>
          <li><a className="_sv4" dir="ltr" href="https://ta-in.facebook.com/"  title="Tamil">हिन्दी</a></li>
          <li><a role="button"  title="Show more languages"><i className="img sp_8oGPGkzB8ig_1_5x sx_0d1895"></i></a></li>
        </ul>
        
        <div id="contentCurve"></div>
        <div id="pageFooterChildren" role="contentinfo" aria-label="Facebook site links">
          <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
            {/* Add Facebook site links */}
          </ul>
        </div>
        
        <div className="mvl copyright">
          <div><span>Meta © 2024</span></div>
        </div>
      </div>
        
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-1">

        </div>
        
        <div className="col-md-5 logo">
          <img
            className="fb_logo _8ilh img"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
          ></img>
          <h2 className="_8eso mt-3">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
       

        <div className="col-md-4 text-center mt-3 mr-3">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address or phone number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block log">
                  Log in
                </button>
              </form>

              <div className="forgot-password mt-3">
                <a href="#">Forgotten password?</a>
              </div>
              <hr className="hr-text" data-content="- OR" />
              <div className="register">
              <button type="submit" className="btn btn-success btn-block suc">
                 Create New Account
                </button>
              </div>
            </div>
          </div>
          <div >
            <p className="mt-3"><span><a href="#" className="createpage"> Create a Page</a></span> for a celebrity, brand or business.</p>
          </div>
        </div>
        <div className="col-md-2">

        </div>
      </div>
      
    </div>
    <div className="mt-5">
    <Footer />
    </div>
    
    </div>
   
    
   
  );
}

export default App;
