import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { About, Blog, Contact, Home, Listing, Pages, Auth } from "../Menu";
import useClickOutside from "../../components/useClickOutside";
import { useAuth } from "../../AuthContext";

const Header3 = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useClickOutside(() => setUserDropdownOpen(false));
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleAddListing = () => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      router.push("/add-listing");
    }
  };

  return (
    <header className="header-area header-area-three transparent-header d-none d-xl-block">
      {/* Header Top Section */}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="top-social">
                <ul className="social-link">
                  <li>
                    <span>Follow us:</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-content text-center">
                <p>
                  We Have Special Offers Every{" "}
                  <Link href="/">
                    <a>Find your offer</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right">
                <ul className="d-flex">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-search" />
                        <span>Search here</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-heart" />
                        <span>Wishlist</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-shopping-cart" />
                        <span>Cart</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-navigation">
        <div className="container">
          <div className="primary-menu">
            <div className="row align-items-center">
              {/* Logo Section */}
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img src="assets/images/logo/logo-1.png" alt="Brand Logo" />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Main Menu */}
              <div className="col-lg-7 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close" />
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item has-children">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        <ul className="sub-menu">
                          <Home />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down" />
                        </span>
                      </li>
                      <About />
                      <li className="menu-item has-children">
                        <a href="#">Listings</a>
                        <ul className="sub-menu">
                          <Listing />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down" />
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <Pages />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down" />
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Article</a>
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down" />
                        </span>
                      </li>
                      <Contact />
                      <Auth />
                      <li className="nav-btn">
                        <button
                          className="main-btn icon-btn"
                          onClick={handleAddListing}
                        >
                          Add Listing
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Right Side Navigation */}
              <div className="col-lg-3 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center justify-content-end">
                    {/* User Dropdown */}
                    <li
                      className="user-btn relative group"
                      ref={userDropdownRef}
                      onMouseEnter={() => setUserDropdownOpen(true)}
                      onMouseLeave={() => setUserDropdownOpen(false)}
                    >
                      <button
                        className="icon p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                      >
                        <i className="flaticon-avatar text-xl text-gray-700" />
                      </button>
                      <div
                        className={`user-dropdown absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 ${
                          isUserDropdownOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        } transition-all duration-200 ease-in-out`}
                      >
                        <Link href="/login">
                          <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            Login
                          </a>
                        </Link>
                        <Link href="/registration">
                          <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            Register
                          </a>
                        </Link>
                      </div>
                    </li>

                    {/* Add Listing Button */}
                    <li className="hero-nav-btn ml-4">
                      <button
                        className="main-btn icon-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        onClick={handleAddListing}
                      >
                        Add Listing
                      </button>
                    </li>

                    {/* Mobile Menu Toggle */}
                    <li className="nav-toggle-btn ml-4">
                      <div className="navbar-toggler" onClick={() => setToggle(!toggle)}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3;