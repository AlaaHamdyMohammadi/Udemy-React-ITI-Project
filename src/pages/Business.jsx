/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Button, NavDropdown, Dropdown } from 'react-bootstrap';

import { changeNavbar } from './../store/slices/navbar';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import './Business.css';

export default function Business() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNavbar(false));

    return () => {
      dispatch(changeNavbar(true));
    };
  });

  return (
    <div>
      <Helmet>
        <title>Request a free demo | Udemy Business</title>
      </Helmet>
      {/* Nav */}
      <div className="whole-nav  bg-light row" style={{ paddingLeft: '2rem' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
          <div className=" nav-class">
            <img
              src="https://business.udemy.com/wp-content/uploads/2021/04/udemy-business-logo.svg"
              alt="udemy-logo"
              className="udemy-logo"
              style={{ transform: 'translateY(-0.5rem)' }}
            />
            <Button
              className="navbar-toggler"
              type="Button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>

            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-lg-0 mb-2 me-auto">
                <li className="what-we-do nav-item dropdown">
                  <NavDropdown title="What we do" id="navbarDropdown">
                    <div className="d-flex gap-4">
                      <div>
                        <NavDropdown.Item
                          as="div"
                          className="text-secondary fw-bolder disabled mb-3"
                        >
                          By need
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Enterprise-Wide Training
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Small Team Training
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Tech Team Training
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Leadership Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Dedicated Customer Success Team
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Remote & Hybrid Team Training
                        </NavDropdown.Item>
                      </div>

                      <div>
                        <NavDropdown.Item
                          as="div"
                          className="text-secondary fw-bolder disabled mb-3"
                        >
                          By team
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Leaders & Executives
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Learning & Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Human Resources
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Engineering
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          IT Operations
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Data Science
                        </NavDropdown.Item>
                      </div>

                      <div>
                        <NavDropdown.Item
                          as="div"
                          className="text-secondary fw-bolder disabled mb-3"
                        >
                          By industry
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Technology
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Professional Services
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Financial Services
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Manufacturing
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Government
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as="button"
                          className="dropdown-item btn"
                        >
                          Higher Ed
                        </NavDropdown.Item>
                      </div>
                    </div>
                  </NavDropdown>
                </li>

                <li className="nav-item dropdown">
                  <NavDropdown title="How we do it" id="navbarDropdown">
                    <NavDropdown.Item as="a" href="#">
                      Learning Ecosystem
                    </NavDropdown.Item>
                    <div className="btn-group dropend">
                      <NavDropdown.Item as="button" className="dropdown-item">
                        On-Demand Learning
                      </NavDropdown.Item>
                      <button
                        type="button"
                        className="btn btn-light dropdown-toggle dropdown-toggle-split drop1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropend</span>
                      </button>
                      <ul className="dropdown-menu menu1">
                        <li className="dropdown-item">Management</li>
                        <li className="dropdown-item">Sales</li>
                        <li className="dropdown-item">Business Strategy</li>
                      </ul>
                    </div>
                    <NavDropdown.Item as="a" href="#">
                      Immersive Learning
                    </NavDropdown.Item>
                    <div className="btn-group dropend d-flex justify-content-between">
                      <NavDropdown.Item as="button" className="dropdown-item">
                        Cohort Learning
                      </NavDropdown.Item>
                      <button
                        type="button"
                        className="btn btn-light dropdown-toggle dropdown-toggle-split drop1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropend</span>
                      </button>
                      <ul className="dropdown-menu menu1">
                        <li className="dropdown-item">Management</li>
                        <li className="dropdown-item">Sales</li>
                        <li className="dropdown-item">Business Strategy</li>
                      </ul>
                    </div>
                  </NavDropdown>
                </li>

                <li className="nav-item dropdown">
                  <NavDropdown title="Resources" id="navbarDropdown">
                    <div className="btn-group dropend">
                      <NavDropdown.Item as="a" href="#" className="text-left">
                        All Resources
                      </NavDropdown.Item>
                      <ul className="dropdown-menu menu1">
                        <li className="dropdown-item text-left">
                          IT Certificates
                        </li>
                        <li className="dropdown-item text-left">Network</li>
                        <li className="dropdown-item text-left">
                          other IT & Software
                        </li>
                      </ul>
                    </div>
                    <div className="btn-group dropend">
                      <ul
                        type="button"
                        className="bg-light border-0 p-0 text-left"
                      >
                        <NavDropdown.Item className="dropdown-item text-left">
                          Resources by Topic
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Podcast: Leading Up
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Small Business Hub
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Case Studies
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Events
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Integrations
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Partner with Udemy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" className="text-left">
                          Blog
                        </NavDropdown.Item>
                      </ul>
                      <ul className="dropdown-menu menu1">
                        <li className="dropdown-item text-left">Web Design</li>
                        <li className="dropdown-item text-left">
                          Design Tools
                        </li>
                        <li className="dropdown-item text-left">Game Design</li>
                      </ul>
                    </div>
                  </NavDropdown>
                </li>

                <li className="nav-item dropdown ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="rounded-0 bg-light border-0"
                      id="navbarDropdown4"
                    >
                      <img
                        src="/images/flags-png/usa.png"
                        width="22"
                        alt="usa-logo"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#"
                        className="d-flex flex-column gap-2"
                      >
                        <img
                          src="/images/flags-png/usa.png"
                          width="22"
                          alt="usa-logo"
                        />
                        <img
                          src="/images/flags-png/brazil.png"
                          width="22"
                          alt="usa-logo"
                        />
                        <img
                          src="/images/flags-png/mexico.png"
                          width="22"
                          alt="usa-logo"
                        />
                        <img
                          src="/images/flags-png/germany.png"
                          width="22"
                          alt="usa-logo"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#"></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <div className="log-register ps-5">
                  <a
                    href="./logInPage.html"
                    className="text-decoration-none ms-5 ps-5"
                  >
                    <p className="btn">Login &nbsp; &nbsp;</p>
                  </a>
                  <a href="./signUpPage.html" className="text-decoration-none">
                    <p className="btn rounded-0 bg-dark text-light border p-2">
                      Get started
                    </p>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="row mt-5">
        <div className="col-lg-7 col-md-7 mx-4">
          <h2
            style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}
            className="fw-bold mb-4 mt-2"
          >
            {t('Get your demo')}
          </h2>
          <p className="fs-5 mb-3">
            {t(
              'See why leading organizations choose Udemy Business as their destination for employee learning.',
            )}
          </p>
          <h3 className="fw-bold">{t('In your demo, learn more about:')}</h3>
          <div className="section-box mb-5">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <span className="marker">&#xf00c; &nbsp;</span>
                {t(
                  'Unlimited access to 22,000 + top Udemy courses and certifications – anytime, on any device',
                )}
              </li>
              <li>
                <span className="marker">&#xf00c; &nbsp;</span>
                {t(
                  'Fresh content taught by global instructors in 15 languages – for any learning style',
                )}
              </li>
              <li>
                <span className="marker">&#xf00c; &nbsp;</span>
                {t('Actionable learning insights and admin functionality')}
              </li>
            </ul>
          </div>

          <div className="trust">
            <h3 className="trusted fw-bold">{t('Trusted by:')}</h3>
          </div>

          <div className="container">
            <div className="row d-flex m-5">
              <div className="col-md-4 col-sm-6 p-4">
                <img src="/images/Business/citi.webp" alt="citi" width="100" />
              </div>
              <div className="col-md-4 col-sm-6 p-4">
                <img src="/images/Business/Box.webp" alt="Box" width="100" />
              </div>
              <div className="col-md-4 col-sm-6 p-4">
                <img
                  src="/images/Business/Fender.webp"
                  alt="Fender"
                  width="100"
                />
              </div>
              <div className="col-md-4 col-sm-6 p-4">
                <img
                  src="/images/Business/Aflac.webp"
                  alt="Aflac"
                  width="100"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-sm-6 VW p-4">
                <img
                  src="/images/Business/VW-logo-grey.webp"
                  alt="VW-logo-grey"
                  width="90"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 col-sm-6 p-4">
                <img
                  src="/images/Business/Tata.TCS.webp"
                  alt="Tata.TCS"
                  width="100"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 container">
          <form>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control border-dark rounded-0 border-dark rounded-0 border-dark shadow"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={t('Work email *')}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border-dark rounded-0 border-dark rounded-0 border-dark rounded-0 shadow"
                id="exampleInputPassword1"
                placeholder={t('First Name *')}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border-dark rounded-0 border-dark rounded-0 border-dark rounded-0 shadow outline-0"
                id="exampleInputPassword1"
                placeholder={t('Last Name *')}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control border-dark rounded-0 border-dark rounded-0 border-dark rounded-0 shadow"
                id="exampleInputPassword1"
                placeholder={t('Phone Number*')}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border-dark rounded-0 border-dark rounded-0 shadow"
                id="exampleInputPassword1"
                placeholder={t('Company Name*')}
              />
            </div>
            <select
              className="form-select border-dark  rounded-0 mb-3 shadow"
              aria-label="Default select example"
            >
              <option selected>{t('Company Size')}</option>
              <option value="1">{t('I am a contractor / freelancer')}</option>
              <option value="2">1-199</option>
              <option value="3">200-999</option>
              <option value="4">1000-5000</option>
              <option value="5">+5001</option>
            </select>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border-dark rounded-0 border-dark rounded-0 shadow"
                id="exampleInputPassword1"
                placeholder={t('Job Title*')}
              />
            </div>
            <select
              className="form-select border-dark rounded-0 mb-3 shadow"
              aria-label="Default select example"
            >
              <option selected>{t('Job Level*')}</option>
              <option value="1">{t('C-Level')}</option>
              <option value="2">VP</option>
              <option value="3">{t('Director / SR')}</option>
              <option value="4">{t('Manager')}</option>
              <option value="5">{t('Individual Contributor')}</option>
            </select>
            <select
              className="form-select border-dark rounded-0 mb-3 shadow"
              aria-label="Default select example"
            >
              <option selected>{t('Where are you located? * Select')}</option>
              <option value="1">{t('Egypt')}</option>
              <option value="2">{t('United States')}</option>
              <option value="3">{t('United Kingdom')}</option>
              <option value="4">{t('Australia')}</option>
              <option value="5">{t('Saudi Arabia')}</option>
            </select>
            <select
              className="form-select border-dark rounded-0 mb-3 shadow"
              aria-label="Default select example"
            >
              <option selected>
                {t('How many people are you planning to train? * Select...')}
              </option>
              <option value="1">{t('Just myself')}</option>
              <option value="2">5 - 20</option>
              <option value="3">21 - 200</option>
              <option value="4">201 - 2000</option>
              <option value="5">2001+</option>
            </select>
            <div className="form-group">
              <input
                type="text"
                className="form-control border-dark rounded-0 border-dark rounded-0 shadow"
                id="exampleInputPassword1"
                placeholder={t("What are your organization's training needs ?")}
              />
            </div>
            <Button
              type="submit"
              className="get-in-touch btn bg-dark rounded-0 w-100 text-light fw-bolder mt-4 border pb-3 pt-3"
            >
              {t('Get in touch')}
            </Button>
            <p className="fs-6 fw-lighter text-secondary pt-3">
              {t('By signing up, you agree to our ')}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.udemy.com/terms/ub/"
              >
                {t('terms')}
              </a>{' '}
              {t('and')}{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.udemy.com/terms/privacy/"
              >
                {t('privacy policy')}
              </a>
              {t(
                'You agree that we can contact you about Udemy and use data from third parties to personalize your experience.',
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
