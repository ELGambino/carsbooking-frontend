import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Calendar } from "primereact/calendar";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import { testimonialsData } from "../../core/data/json/testimonials_data";
import { all_routes } from "../router/all_routes";

const Home = () => {
  const routes = all_routes;
  const testimonials = testimonialsData;
  /* const [selectedItems, setSelectedItems] = useState(Array(10).fill(false)); */
  const [setSelectedItems] = useState(Array(10).fill(false));
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const onChange = (time: Dayjs, timeString: string) => {
    console.log(time, timeString);
  };
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  const settings = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  };
  const one = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
 
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Banner */}
      <section className="banner-section banner-slider">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-8" data-aos="fade-down">
                <p className="explore-text">
                  Zaplanuj swoją podróż
                </p>
                <h1>Wynajmij <br></br>samochód u nas i <br></br><span>oszczędzaj</span></h1>
                <p>
                Potrzebujesz elastyczności w podróży? Z naszą wypożyczalnią samochodową możesz jechać tam, gdzie chcesz, kiedy chcesz. Wynajmij z nami i daj sobie wolność odkrywania nowych miejsc!
                </p>
                <div className="view-all">
                  <Link
                    to={routes.listinggrid}
                    className="btn btn-view d-inline-flex align-items-center"
                  >
                    Sprawdź naszą ofertę{" "}
                    <span>
                      <i className="feather icon-arrow-right ms-2" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Banner */}
      {/* Search */}
      <div className="section-search">
        <div className="container">
          <div className="search-box-banner">
            <form >
              <ul className="align-items-center">
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Lokalizacja</label>
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Wprowadź punkt odbioru... "
                      />
                      <span>
                        <i className="feather icon-map-pin" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Data odbioru</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widget">
                      <div className="group-img">
                        <Calendar
                          value={date1}
                          onChange={(e) => setDate1(e.value)}
                          placeholder="04/04/2024"
                        />
                        {/* <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" /> */}
                        <span>
                          <i className="feather icon-calendar"></i>
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="11:00 AM"
                          className="form-control timepicker"
                          onChange={onChange}
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                        <span>
                          <i className="feather icon-clock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Data zwrotu</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widge">
                      <div className="group-img">
                        <Calendar
                          value={date2}
                          onChange={(e) => setDate2(e.value)}
                          placeholder="04/11/2023"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="11:00 AM"
                          className="form-control timepicker"
                          onChange={onChange}
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                        <span>
                          <i className="feather icon-clock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-last">
                  <div className="input-block">
                    <div className="search-btn">
                      <button className="btn search-button" type="submit">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true" />
                        Szukaj
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* /Search */}
      {/* services */}
      <section className="section services">
        <div className="service-right">
          <ImageWithBasePath 
          src="assets/img/bg/service-right.svg" 
          className="img-fluid" 
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Zaplanuj swoją podróż</h2>
            <p>
            Bez względu na cel podróży, mamy idealny samochód dla Ciebie. Oferujemy wygodne i niezawodne pojazdy.
            </p>
          </div>
          {/* /Heading title */}
          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div>
                    <img
                      src="assets/img/iconbox-image-01-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>1. Wybierz samochód</h3>
                    <p>
                    Wybierz samochód, który najbardziej odpowiada twoim potrzebom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="">
                    <img className=""
                      src="assets/img/iconbox-image-02-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>2. Uzupełnij dane</h3>
                    <p>
                    Wypełnij formularz, który jest potrzebny do dokonania rezerwacji.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-height">
                    <img
                      src="assets/img/iconbox-image-03-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>3. w Drogę</h3>
                    <p>
                    Ciesz się samochodem, który wypożyczyłeś i ruszaj w drogę!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services */}
      {/* Popular Services */}
      <section className="section popular-services popular-explore">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Nasza flota samochodów</h2>
            <p>
            Gotowy na niezapomnianą podróż? Nasza wypożyczalnia oferuje szeroki wybór popularnych samochodów.
            </p>
          </div>
          {/* /Heading title */}
          <div className="row justify-content-center">
            <div className="col-lg-12" data-aos="fade-down">
              <div className="listing-tabs-group">
                <ul className="nav listing-buttons gap-3" data-bs-tabs="tabs">
                  <li>
                    <div>
                    <Link
                      className="active"
                      aria-current="true"
                      data-bs-toggle="tab"
                      to="#Carmazda"
                    >
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-01.svg"
                          className="car-brands-filter"
                          alt="Mazda"
                        />
                      </span>
                      Mazda
                    </Link>
                    </div>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Caraudi">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-02.svg"
                          className="car-brands-filter"
                          alt="Audi"
                        />
                      </span>
                      Audi
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Carhonda">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-03.svg"
                          className="car-brands-filter"
                          alt="Honda"
                        />
                      </span>
                      Honda
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Cartoyota">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-04.svg"
                          className="car-brands-filter"
                          alt="Toyota"
                        />
                      </span>
                      Toyota
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Caracura">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-05.svg"
                          className="car-brands-filter"
                          alt="Acura"
                        />
                      </span>
                      Acura
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Cartesla">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-06.svg"
                          className="car-brands-filter"
                          alt="Tesla"
                        />
                      </span>
                      Tesla
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="Carmazda">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={1}
                        onClick={() => handleItemClick(1)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[1] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={2}
                        onClick={() => handleItemClick(2)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[2] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={3}
                        onClick={() => handleItemClick(3)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[3] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={4}
                        onClick={() => handleItemClick(4)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[4] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                alt=""
                                src="assets/img/icons/car-parts-05.svg"
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={5}
                        onClick={() => handleItemClick(5)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[5] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={6}
                        onClick={() => handleItemClick(6)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[6] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={7}
                        onClick={() => handleItemClick(7)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[7] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={8}
                        onClick={() => handleItemClick(8)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[8] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={9}
                        onClick={() => handleItemClick(9)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[9] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg" alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Caraudi">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={10}
                        onClick={() => handleItemClick(10)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[10] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={11}
                        onClick={() => handleItemClick(11)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[11] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={12}
                        onClick={() => handleItemClick(12)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[12] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={13}
                        onClick={() => handleItemClick(13)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[13] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={14}
                        onClick={() => handleItemClick(14)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[14] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={15}
                        onClick={() => handleItemClick(15)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[15] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={16}
                        onClick={() => handleItemClick(16)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[16] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={17}
                        onClick={() => handleItemClick(17)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[17] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={18}
                        onClick={() => handleItemClick(18)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[18] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Carhonda">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={19}
                        onClick={() => handleItemClick(19)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[19] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={20}
                        onClick={() => handleItemClick(20)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[20] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={21}
                        onClick={() => handleItemClick(21)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[21] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={22}
                        onClick={() => handleItemClick(22)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[22] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={23}
                        onClick={() => handleItemClick(23)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[23] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={24}
                        onClick={() => handleItemClick(24)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[24] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={25}
                        onClick={() => handleItemClick(25)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[25] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={26}
                        onClick={() => handleItemClick(26)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[26] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={27}
                        onClick={() => handleItemClick(27)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[27] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Cartoyota">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={28}
                        onClick={() => handleItemClick(28)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[28] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={29}
                        onClick={() => handleItemClick(29)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[29] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={30}
                        onClick={() => handleItemClick(30)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[30] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={31}
                        onClick={() => handleItemClick(31)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[31] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={32}
                        onClick={() => handleItemClick(32)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[32] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={33}
                        onClick={() => handleItemClick(33)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[33] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={34}
                        onClick={() => handleItemClick(34)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[34] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={35}
                        onClick={() => handleItemClick(35)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[35] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={36}
                        onClick={() => handleItemClick(36)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[36] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Caracura">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={37}
                        onClick={() => handleItemClick(37)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[37] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={38}
                        onClick={() => handleItemClick(38)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[38] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={39}
                        onClick={() => handleItemClick(39)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[39] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={40}
                        onClick={() => handleItemClick(40)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[40] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={41}
                        onClick={() => handleItemClick(41)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[41] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={42}
                        onClick={() => handleItemClick(42)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[42] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={43}
                        onClick={() => handleItemClick(43)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[43] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={44}
                        onClick={() => handleItemClick(44)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[44] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={45}
                        onClick={() => handleItemClick(45)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[45] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Cartesla">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={46}
                        onClick={() => handleItemClick(46)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[46] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={47}
                        onClick={() => handleItemClick(47)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[47] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
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
                          <Link  to= {routes.listingdetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            400 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={48}
                        onClick={() => handleItemClick(48)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[48] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={49}
                        onClick={() => handleItemClick(49)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[49] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2019</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            45 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={50}
                        onClick={() => handleItemClick(50)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[50] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            160 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={51}
                        onClick={() => handleItemClick(51)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[51] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2018</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>4 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            36 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={52}
                        onClick={() => handleItemClick(52)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[52] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2013</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            30 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={53}
                        onClick={() => handleItemClick(53)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[53] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manualna"
                              />
                            </span>
                            <p>Manualna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                              />
                            </span>
                            <p>10 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2012</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            77 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link  to= {routes.listingdetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={54}
                        onClick={() => handleItemClick(54)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon {
                            selectedItems[54] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link  to= {routes.listingdetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                              />
                            </span>
                            <p>Automatyczna</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
                              />
                            </span>
                            <p>Benzyna</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Energetyczny"
                              />
                            </span>
                            <p>Energetyczny</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2021</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-06.svg"
                                alt="Persons"
                              />
                            </span>
                            <p>5 osobowy</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            80 zł<span>/ dziennie</span>
                          </h6>
                        </div>
                      </div>
                      <div className="listing-button">
                        <Link
                           to= {routes.listingdetails}
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
                {/* /col */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Services */}
      {/* Popular Cartypes */}
      <section className="section popular-car-type">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Wybierz swój styl</h2>
            <p>
            Odkryj różnorodność świata samochodów! Bez względu na Twoje potrzeby, istnieje idealny pojazd który zapewni Ci wszechstronność.
            </p>
          </div>
          {/* /Heading title */}
          <div className="row">
            <div className="popular-slider-group">
              <Slider {...settings}>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-01.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Crossover</h6>
                    <p>35 samochodów</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-02.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Sports Coupe</h6>
                    <p>45 samochodów</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-03.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Sedan</h6>
                    <p>15 samochodów</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-04.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Pickup</h6>
                    <p>17 samochodów</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-05.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Family MPV</h6>
                    <p>24 samochodów</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* View More */}
          <div className="view-all text-center" data-aos="fade-down">
            <Link
              to={routes.listinggrid}
              className="btn btn-view d-inline-flex align-items-center"
            >
              Sprawdź wszystkie modele{" "}
              <span>
                <i className="feather icon-arrow-right ms-2" />
              </span>
            </Link>
          </div>
          {/* View More */}
        </div>
      </section>
      {/* /Popular Cartypes */}
      {/* Facts By The Numbers */}
      <section className="section facts-number">
        <div className="facts-right">
          <ImageWithBasePath
            src="assets/img/bg/facts-right.png"
            className="img-fluid"
            alt="facts right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">Rzeczywistość w liczbach</h2>
            <p className="description text-white">
            Nie ma dwóch identycznych podróży, dlatego oferujemy Ci ponad 100 modeli samochodów 
            do wyboru! Bez względu na Twój cel podróży czy preferencje, mamy pojazd, 
            który spełni Twoje oczekiwania
            </p>
          </div>
          {/* /Heading title */}
          <div className="counter-group">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-heart.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={16000}
                          duration={3}
                          separator=","
                        />
                        <br />
                      </h4>
                      <p> Zadowolonych klientów </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-car.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={2547}
                          duration={3}
                          separator=","
                        />
                        +<br />
                      </h4>
                      <p>Wszystkich samochodów</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-headphone.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={625}
                          duration={3}
                          separator=","
                        />
                        +
                        <br />
                      </h4>
                      <p>Wypożyczonych pojazdów</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-history.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={200}
                          duration={3}
                          separator=","
                        />
                        +
                        <br />
                      </h4>
                      <p>Przyjechanych kilometrów</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Facts By The Numbers */}
      {/* Rental deals */}
      <section className="section popular-services">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Wybierz spośród naszych rekomendacji</h2>
            <p>
            Odkryj najlepsze oferty wynajmu samochodów, wyselekcjonowane specjalnie dla Ciebie 
            przez nasz zespół ekspertów!
            </p>
          </div>
          {/* /Heading title */}
          <div className="row">
            <div className="popular-slider-group">
              <div className="owl-carousel rental-deal-slider owl-theme">
                <Slider {...one} className="service-slider">
                  {/* owl carousel item */}
                  <div className="rental-car-item">
                    <div className="listing-item mb-0">
                      <div className="listing-img">
                        <Link  to= {routes.listingdetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-01.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <div className="fav-item-rental">
                            <span className="featured-text">400/dzień</span>
                          </div>
                          <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                          </div>
                          <h3 className="listing-title">
                            <Link  to= {routes.listingdetails}>
                              Toyota Camry SE 350
                            </Link>
                          </h3>
                          <h6>
                            Dodane przez : <span>Venis Darren</span>
                          </h6>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
                                  alt="Automatyczna"
                                />
                              </span>
                              <p>Automatyczna</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt="Benzyna"
                                />
                              </span>
                              <p>Benzyna</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt="Energetyczny"
                                />
                              </span>
                              <p>Energetyczny</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 osobowy</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                             to= {routes.listingdetails}
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
                  {/* /owl carousel item */}
                  {/* owl carousel item */}
                  <div className="rental-car-item">
                    <div className="listing-item mb-0">
                      <div className="listing-img">
                        <Link  to= {routes.listingdetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-03.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <div className="fav-item-rental">
                            <span className="featured-text">400/dzień</span>
                          </div>
                          <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                          </div>
                          <h3 className="listing-title">
                            <Link  to= {routes.listingdetails}>
                              Toyota Camry SE 350
                            </Link>
                          </h3>
                          <h6>
                            Dodane przez : <span>Venis Darren</span>
                          </h6>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
                                  alt="Automatyczna"
                                />
                              </span>
                              <p>Automatyczna</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt="Benzyna"
                                />
                              </span>
                              <p>Benzyna</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt="Energetyczny"
                                />
                              </span>
                              <p>Energetyczny</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 osobowy</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                             to= {routes.listingdetails}
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
                  {/* /owl carousel item */}
                  {/* owl carousel item */}
                  <div className="rental-car-item">
                    <div className="listing-item mb-0">
                      <div className="listing-img">
                        <Link  to= {routes.listingdetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-04.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <div className="fav-item-rental">
                            <span className="featured-text">400/dzień</span>
                          </div>
                          <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                          </div>
                          <h3 className="listing-title">
                            <Link  to= {routes.listingdetails}>
                              Toyota Camry SE 350
                            </Link>
                          </h3>
                          <h6>
                            Dodane przez : <span>Venis Darren</span>
                          </h6>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
                                  alt="Automatyczna"
                                />
                              </span>
                              <p>Automatyczna</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt="Benzyna"
                                />
                              </span>
                              <p>Benzyna</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt="Energetyczny"
                                />
                              </span>
                              <p>Energetyczny</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 osobowy</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                             to= {routes.listingdetails}
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
                  {/* /owl carousel item */}
                  {/* owl carousel item */}
                  <div className="rental-car-item">
                    <div className="listing-item mb-0">
                      <div className="listing-img">
                        <Link  to= {routes.listingdetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-05.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <div className="fav-item-rental">
                            <span className="featured-text">400/dzień</span>
                          </div>
                          <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                          </div>
                          <h3 className="listing-title">
                            <Link  to= {routes.listingdetails}>
                              Toyota Camry SE 350
                            </Link>
                          </h3>
                          <h6>
                            Dodane przez : <span>Venis Darren</span>
                          </h6>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
                                  alt="Automatyczna"
                                />
                              </span>
                              <p>Automatyczna</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt="Benzyna"
                                />
                              </span>
                              <p>Benzyna</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt="Energetyczny"
                                />
                              </span>
                              <p>Energetyczny</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 osobowy</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                             to= {routes.listingdetails}
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
                  {/* /owl carousel item */}
                  {/* owl carousel item */}
                  <div className="rental-car-item">
                    <div className="listing-item mb-0">
                      <div className="listing-img">
                        <Link  to= {routes.listingdetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-03.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <div className="fav-item-rental">
                            <span className="featured-text">400/dzień</span>
                          </div>
                          <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                          </div>
                          <h3 className="listing-title">
                            <Link  to= {routes.listingdetails}>
                              Toyota Camry SE 350
                            </Link>
                          </h3>
                          <h6>
                            Dodane przez : <span>Venis Darren</span>
                          </h6>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
                                  alt="Automatyczna"
                                />
                              </span>
                              <p>Automatyczna</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt="10 KM"
                                />
                              </span>
                              <p>10 KM</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt="Benzyna"
                                />
                              </span>
                              <p>Benzyna</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt="Energetyczny"
                                />
                              </span>
                              <p>Energetyczny</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>2018</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>5 osobowy</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                             to= {routes.listingdetails}
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
                  {/* /owl carousel item */}
                </Slider>
              </div>
            </div>
          </div>
          {/* View More */}
          <div className="view-all text-center" data-aos="fade-down">
            <Link
              to={routes.listinggrid}
              className="btn btn-view d-inline-flex align-items-center"
            >
              Sprawdź nasze rekomendacje{" "}
              <span>
                <i className="feather icon-arrow-right ms-2" />
              </span>
            </Link>
          </div>
          {/* View More */}
        </div>
      </section>
      {/* /Rental deals */}
      {/* About us Testimonials */}
      <section className="section about-testimonial testimonials-section">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">Opinie Klientów, nasz klucz do sukcesu!</h2>
            <p className="description text-white">
            Zadowolenie klientów jest dla nas najwyższym priorytetem. 
            Przekonaj się, co nasi klienci mają do powiedzenia o swoich doświadczeniach z naszą firmą!
            </p>
          </div>
          {/* /Heading title */}
          <div className="owl-carousel about-testimonials testimonial-group mb-0 owl-theme">
            {/* /Carousel Item  */}
            {/* Carousel Item */}
            <Slider {...setting}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="quotes-head" />
                      <div className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <ImageWithBasePath
                              src={testimonial.image}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>{testimonial.name}</h6>
                          <div className="list-rating">
                            <div className="list-rating-star">
                              {[...Array(Math.floor(testimonial.rating))].map(
                                (_, i) => (
                                  <i key={i} className="fas fa-star filled" />
                                )
                              )}
                            </div>
                            <p>
                              <span>({testimonial.rating})</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* /Carousel Item  */}
            {/* Carousel Item */}

            {/* /Carousel Item  */}
          </div>
        </div>
      </section>
      {/* About us Testimonials */}
      {/* FAQ  */}
      <section className="section faq-section bg-light-primary">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Często zadawane pytania </h2>
            <p>
              Zapomnij o niepewnościach. Nasze często zadawane pytania dostarczą Ci wszystkich
              potrzebnych informacji.
            </p>
          </div>
          {/* /Heading title */}
          <div className="faq-info">
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqOne"
                  aria-expanded="false"
                >
                  Jak się z nami skontaktować?
                </Link>
              </h4>
              <div id="faqOne" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqTwo"
                  aria-expanded="false"
                >
                  Ile kosztuje wynajem samochodu w carsbooking.pl?
                </Link>
              </h4>
              <div id="faqTwo" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqThree"
                  aria-expanded="false"
                >
                  Od jakiego wieku można wynająć samochód?
                </Link>
              </h4>
              <div id="faqThree" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFour"
                  aria-expanded="false"
                >
                  Jakie są wymagane dokumenty przy wynajmie?
                </Link>
              </h4>
              <div id="faqFour" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFive"
                  aria-expanded="false"
                >
                  Czy dostanę samochód zatankowany do pełna??
                </Link>
              </h4>
              <div id="faqFive" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSix"
                  aria-expanded="false"
                >
                  Czy mogę wynająć samochód na lotnisku?
                </Link>
              </h4>
              <div id="faqSix" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSeven"
                  aria-expanded="false"
                >
                  Czy mogę wynająć samochód na lotnisku?
                </Link>
              </h4>
              <div id="faqSeven" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ */}
    </>
  );
};

export default Home;
