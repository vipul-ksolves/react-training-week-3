import React from "react";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="bg-light text-dark">
        <div className="container py-5 py-md-6">
          <div className="row justify-content-md-between">
            <div className="col-4 col-md-2">
              <h2 className="h6">About</h2>
              <ul className="nav flex-column">
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Team
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Careers
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-2">
              <h2 className="h6 mb-3">Services</h2>
              <ul className="nav flex-column">
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Branding
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Design
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Photography
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    UX/UI
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-2">
              <h2 className="h6 mb-3">Social</h2>
              <ul className="nav flex-column">
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Twitter
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Instagram
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Dribbble
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="#" className="link-secondary text-decoration-none">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 mt-4 mt-md-0">
              <h2 className="h6 mb-3">Company</h2>
              <p className="text-secondary">
                Focus is Link portfolio theme based on Bootstrap 5 and created
                by
                <Link
                  className="text-black"
                  to="https://www.linkedin.com/in/vipul-p-46171118a/"
                  target="_blank"
                  rel="noopener"
                >
                  Vipul
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
