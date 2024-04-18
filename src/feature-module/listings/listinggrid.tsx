import React, { useEffect } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../router/all_routes";
import ListingSidebar from "./listingsidebar";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { useSelector } from "react-redux";
import { listgrids } from "../../core/data/interface/interface";
import Aos from "aos";

const ListingGrid = () => {
  const data = useSelector((state: listgrids) => state.listing_grid);

  const routes = all_routes;
  const options = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];
  const optionsTwo = [
    { value: 1, label: "Low to High" },
    { value: 2, label: "High to Low" },
  ];

  const optionsThree = [
    { value: "popular", label: "Popular" },
    { value: "toyota", label: "Toyota Camry SE 350" },
    { value: "audi", label: "Audi A3 2019 new" },
    { value: "ferrari", label: "Ferrari 458 MM Speciale" },
    { value: "chevrolet", label: "Chevrolet Camaro" },
    { value: "acura", label: "Acura Sport Version" },
  ];
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Wypożyczalnia" subtitle="Lista" />
      <div className="sortby-sec">
        <div className="container">
          <div className="sorting-div">
            <div className="row d-flex align-items-center">
              <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                <div className="count-search">
                  <p>
                    Pokaż <span>1-8</span> na 10 pojazdów
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                <div className="product-filter-group">
                  <div className="sortbyset">
                    <span className="sortbytitle">Pokaż : </span>
                    <div className="sorting-select select-one">
                      <Select
                        className="select w-100"
                        options={options}
                        placeholder="5"
                        isSearchable={false}
                      />
                    </div>
                    <div className="sorting-select select-two">
                      <Select
                        className="select w-100"
                        options={optionsTwo}
                        placeholder="od najniższej do najwyższej"
                        isSearchable={false}
                      />
                    </div>
                    <div className="sorting-select select-three">
                      <Select
                        className="select"
                        options={optionsThree}
                        placeholder="Popularne"
                        aria-labelledby="carDropdownLabel"
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="grid-listview">
                    <ul>
                      <li>
                        <Link to={routes.listinggrid} className="active">
                          <i className="feather icon-grid"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={routes.listinglist}>
                          <i className="feather icon-list"> </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section car-listing">
        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-12 theiaStickySidebar">
              <div className="stickybar">
                <ListingSidebar />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {/* col */}
                {data.map((item: listgrids, index: number) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 col-12"
                  >
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link to={routes.listingdetails}>
                          <ImageWithBasePath
                            src={item.image}
                            className="img-fluid"
                            alt={item.make}
                          />
                        </Link>
                        <div className="fav-item">
                          <span className="featured-text">{item.make}</span>
                          <Link to="#" className="fav-icon">
                            <i className="feather icon-heart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-0.jpg"
                              alt="author"
                            />
                          </Link>
                          <h3 className="listing-title">
                            <Link to={routes.listingdetails}>{item.model}</Link>
                          </h3>
                          <div className="list-rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <span>(5.0)</span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt={item.features?.type}
                                />
                              </span>
                              <p>{item.features?.type}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt={item.features?.mileage}
                                />
                              </span>
                              <p>{item.features?.mileage}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt={item.features?.fuel}
                                />
                              </span>
                              <p>{item.features?.fuel}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt={item.features?.power}
                                />
                              </span>
                              <p>{item.features?.power}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt={item.features?.year}
                                />
                              </span>
                              <p>{item.features?.year}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>{item.features?.capacity} Persons</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather icon-map-pin" />
                            </span>
                            {item.location}
                          </div>
                          <div className="listing-price">
                            <h6>{item.price}</h6>
                          </div>
                        </div>
                        <div className="listing-button">
                          <Link
                            to={routes.listingdetails}
                            className="btn btn-order"
                          >
                            <span>
                              <i className="feather icon-calendar me-2" />
                            </span>
                            Zarezerwuj pojazd
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* /col */}
                {/* col */}
              </div>
              {/*Pagination*/}
              <div className="blog-pagination">
                <nav>
                  <ul className="pagination page-item justify-content-center">
                    <li className="previtem">
                      <Link className="page-link" to="#">
                        <i className="fa-solid fa-arrow-left"></i>
                        Prev
                      </Link>
                    </li>
                    <li className="justify-content-center pagination-center">
                      <div className="page-group">
                        <ul>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="active page-link" to="#">
                              2{" "}
                              <span className="visually-hidden">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              4
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              5
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nextlink">
                      <Link className="page-link" to="#">
                        Next{" "}
                        <i className="fas fa-regular fa-arrow-right ms-2"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/Pagination*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingGrid;
