import Link from "next/link";
import React, { useState } from "react";
import { About, Blog, Contact, Home, Listing, Pages, Auth } from "./Menu";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/router";
import useClickOutside from "../../src/components/useClickOutside";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useClickOutside(() => setUserDropdownOpen(false));
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value);
  const activeLi = (value) =>
    value === activeMenu ? { display: "block" } : { display: "none" };

  const handleAddListing = () => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      router.push("/add-listing");
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="header-area header-area-one d-xl-none">
      {/* Header Top Section */}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="top-social">
                <ul className="social-link">
                  <li><span>Follow us:</span></li>
                  <li><a href="#"><i className="ti-facebook"></i></a></li>
                  <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                  <li><a href="#"><i className="ti-pinterest"></i></a></li>
                  <li><a href="#"><i className="ti-dribbble"></i></a></li>
                  <li><a href="#"><i className="ti-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="top-content text-center">
                <p>
                  We Have Special Offers Every{" "}
                  <Link href="/"><a>Find your offer</a></Link>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-right">
                <ul className="d-flex">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-search"></i>
                        <span>Search here</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-heart"></i>
                        <span>Wishlist</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="ti-shopping-cart"></i>
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
      <div className="header-navigation sticky breakpoint-on">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img src="assets/images/logo/logo-1.png" alt="Brand Logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
                  <div className="navbar-close" onClick={() => setToggle(false)}>
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item has-children">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        <ul className="sub-menu" style={activeLi("Home")}>
                          <Home />
                        </ul>
                        <span className="dd-trigger" onClick={() => activeMenuSet("Home")}>
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <About />
                      <li className="menu-item has-children">
                        <a href="#">Listings</a>
                        <ul className="sub-menu" style={activeLi("Listings")}>
                          <Listing />
                        </ul>
                        <span className="dd-trigger" onClick={() => activeMenuSet("Listings")}>
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu" style={activeLi("Pages")}>
                          <Pages />
                        </ul>
                        <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Article</a>
                        <ul className="sub-menu" style={activeLi("Article")}>
                          <Blog />
                        </ul>
                        <span className="dd-trigger" onClick={() => activeMenuSet("Article")}>
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <Contact />
                      <Auth />
                      <li className="nav-btn">
                        <button className="main-btn icon-btn" onClick={handleAddListing}>
                          Add Listing
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="user-btn relative group" ref={userDropdownRef}>
                      <button
                        className="icon p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                      >
                        <i className="flaticon-avatar text-xl text-gray-700"></i>
                      </button>
                      <ul className={`user-dropdown ${isUserDropdownOpen ? "visible" : "invisible"} transition-all duration-200 ease-in-out`}>
                        {isAuthenticated ? (
                          <>
                            <li>
                              <Link href="/profile">
                                <a>Profile</a>
                              </Link>
                            </li>
                            <li>
                              <button onClick={handleLogout}>Logout</button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link href="/login">
                                <a>Login</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/registration">
                                <a>Register</a>
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                    <li className="hero-nav-btn ml-4">
                      <button className="main-btn icon-btn" onClick={handleAddListing}>
                        Add Listing
                      </button>
                    </li>
                    <li className="nav-toggle-btn ml-4">
                      <div className={`navbar-toggler ${toggle ? "active" : ""}`} onClick={() => setToggle(!toggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
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

export default MobileMenu;