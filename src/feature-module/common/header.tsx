import React from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const Header = () => {
  const routes = all_routes;
  const location = useLocation();

  const header = [
    {
      tittle: "Strona Główna",
      showAsTab: false,
      separateRoute: true,
      routes: routes.home,
      hasSubRoute: false,
      showSubRoute: false,
    },
    {
      tittle: "Wypożyczalnia",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Lista",
          routes: routes.listinggrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        /*
        {
          menuValue: "Listing List",
          routes: routes.listinglist,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Listing Details",
          routes: routes.listingdetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        */
      ],
    },
    /*
    {
      tittle: "User",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Dashboard",
          routes: routes.dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "My bookings",
          routes: routes.userbookings,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
          additionlinks: [
            {
              links: "/user-booking-upcoming",
            },
            {
              links: "/user-booking-inprogress",
            },
            {
              links: "/user-booking-complete",
            },
            {
              links: "/user-booking-upcoming",
            },
            {
              links: "/user-booking-cancelled",
            }
          ]
        },

        {
          menuValue: "Reviews",
          routes: routes.reviews,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Wishlist",
          routes: routes.wishlist,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Messages",
          routes: routes.messages,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "My Wallet",
          routes: routes.wallet,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Payment",
          routes: routes.payment,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Settings",
          routes: routes.settings,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
      ],
    },
    */
   /*
    {
      tittle: "Pages",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "About Us",
          routes: routes.aboutus,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Authentication",
          hasSubRoute: true,
          showSubRoute: true,
          subMenus: [
            {
              menuValue: "Signup",
              routes: routes.signup,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: []
            },
            {
              menuValue: "Signin",
              routes: routes.login,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: []
            },
            {
              menuValue: "Forgot Password",
              routes: routes.forgotpassword,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: []
            },
            {
              menuValue: "Reset Password",
              routes: routes.resetpassword,
              hasSubRoute: true,
              showSubRoute: true,
              subMenus: []
            },
          ],
        },
        {
          menuValue: "Booking",
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: "Booking Checkout",
              routes: routes.bookingcheckout,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: []
            },
            {
              menuValue: "Booking",
              routes: routes.booking,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: []
            },
            {
              menuValue: "Invoice Details",
              routes: routes.invoice,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: []
            },
          ],
        },
        {
          menuValue: "Error Page",
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            {
              menuValue: "404 Error",
              routes: routes.error404,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: []
            },
            {
              menuValue: "500 Error",
              routes: routes.error500,
              hasSubRoute: false,
              showSubRoute: false,
              subMenus: []
            },
          ],
        },
        {
          menuValue: "Pricing",
          routes: routes.pricing,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "FAQ",
          routes: routes.faq,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Gallery",
          routes: routes.gallery,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Our Team",
          routes: routes.ourteam,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Testimonials",
          routes: routes.testimonial,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Terms & Conditions",
          routes: routes.termsconditions,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Privacy Policy",
          routes: routes.privacypolicy,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Maintenance",
          routes: routes.maintenance,
          hasSubRoute: false,
          showSubRoute: false,
        },
        {
          menuValue: "Coming Soon",
          routes: routes.comingsoon,
          hasSubRoute: false,
          showSubRoute: false,
        },
      ],
    },
    */
   /*
    {
      tittle: "Blog",
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: "Blog List",
          routes: routes.bloglist,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Blog Grid",
          routes: routes.bloggrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
        {
          menuValue: "Blog Details",
          routes: routes.blogdetails,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        },
      ],
    },
    */
    /*
    {
      tittle: "Contact",
      showAsTab: false,
      separateRoute: true,
      routes: routes.contact,
      hasSubRoute: false,
      showSubRoute: false,
    },
    */
    {
      tittle: "o Firmie",
      showAsTab: false,
      separateRoute: true,
      routes: routes,
      hasSubRoute: false,
      showSubRoute: false,
    },
    {
      tittle: "Blog",
      showAsTab: false,
      separateRoute: true,
      routes: routes,
      hasSubRoute: false,
      showSubRoute: false,
    },
    {
      tittle: "Kontakt",
      showAsTab: false,
      separateRoute: true,
      routes: routes,
      hasSubRoute: false,
      showSubRoute: false,
    },
  ];

  const pagesActiveClassArray = [
    '/pages/aboutus', '/authentication/register',
    '/authentication/login', '/authentication/forgot-password',
    '/authentication/reset-password', '/pages/booking-payment',
    '/pages/booking-payment', '/pages/invoice-details',
    '/pages/error-404', '/pages/error-500',
    '/pages/pricing', '/pages/faq',
    '/pages/gallery', '/pages/our-team',
    '/pages/testimonial', '/pages/terms-condition',
    '/pages/privacy-policy', '/pages/maintenance',
    '/pages/coming-soon'
  ]
  return (
    <>
      <header className="header header-carsbooking">
        <div className="container-fluid header-center">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon">
                  {/* <span />
                  <span />
                  <span /> */}
                </span>
              </Link>
              <Link to={routes.home} className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/CarsBooking.webp"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link to={routes.home} className="navbar-brand logo-small">
                <ImageWithBasePath
                  src="assets/img/CarsBooking.webp"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={routes.home} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  {" "}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                {header.map((mainMenus, mainIndex) => {
                  // const link_array:any = [];
                  // mainMenus?.menu?.map((link) => {
                  //   link_array?.push(link?.routes);
                  //   if (link?.subMenus) {
                  //     link?.subMenus?.map((item) => {
                  //       link_array?.push(item?.routes);
                  //     });
                  //   }
                  //   return link_array;
                  // });
                  // mainMenus.links = link_array;
                  return (
                    <React.Fragment key={mainIndex}>
                      {mainMenus.separateRoute ? (
                        <li
                          key={mainIndex}
                          className={
                            location.pathname.includes(mainMenus.routes || "") || mainMenus?.links?.includes(location.pathname) || (mainMenus.tittle == "Pages" && pagesActiveClassArray?.map((name) => name.includes(location.pathname)))
                              ? "active"
                              : ""
                          }
                        >
                          {/* {checkActiceClass(mainMenus)} */}
                          <Link to={mainMenus.routes}>{mainMenus.tittle}</Link>
                        </li>
                      ) : (
                        // <li className={`has-submenu ${mainMenus?.menu?.map((item)=> item?.routes).includes(location.pathname)  ? "active":""}`}>
                        <li className={`has-submenu ${mainMenus?.menu?.map((item) => item?.routes).includes(location.pathname) ? "active" : ""}`}>
                          <Link to="#">
                            {mainMenus.tittle}{" "}
                            <i className="fas fa-chevron-down"></i>
                          </Link>
                          <ul
                            className={`submenu ${mainMenus.showAsTab ? "d-block" : ""}`}
                          >
                            {mainMenus.menu?.map((menu, menuIndex) => (
                              <li
                                key={menuIndex}
                                className={`${menu.hasSubRoute ? "has-submenu" : ""} ${menu?.subMenus?.map((item) => item?.routes).includes(location.pathname) ? "active" : ""}`}
                              >
                                {menu.hasSubRoute ? (
                                  <React.Fragment>
                                    <Link href="#">{menu.menuValue}</Link>
                                    <ul
                                      className={`submenu ${menu.showSubRoute ? "d-block" : ""}`}
                                    >
                                      {menu.subMenus?.map(
                                        (subMenu, subMenuIndex) => (
                                          <li key={subMenuIndex}>
                                            <Link to={subMenu.routes}>
                                              {subMenu.menuValue}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </React.Fragment>
                                ) : (
                                  <li className={
                                    location.pathname.includes(
                                      menu.routes || ""
                                    )
                                      ? "active"
                                      : ""
                                  }>
                                    <Link
                                      to={menu.routes}

                                    >
                                      {menu.menuValue}
                                    </Link>
                                  </li>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </React.Fragment>)
                })}
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to={routes.login}>
                  Status rezerwacji
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-reg" to={routes.signup}>
                  <span>
                  <i className="fa-regular fa-user" />
                  </span>
                  Panel klienta
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
