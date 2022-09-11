import { useLayoutEffect } from "react";
import { Logo } from "../../../assets";
import Link from "next/link";
import {
  Github,
  Facebook,
  Linkdin,
  Whatsapp,
  PoniterIcon,
  PhoneIcon,
  EmailIcon,
  GlobeIcon,
  ScrollTopArrow,
} from "../../../assets";
const Footer = () => {
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scrollBar-Top");
      scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        var scroll = document.querySelector(".scrollBar-Top");
        scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
      });
    };
  }, []);
  return (
    <>
      <div className="footer w-100">
        <div className="mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-7 col-xl-5 mb-5">
              {/* Content */}
              <div>
                <Link href="/home">
                  <a>
                    <img className="logoFooter" src={Logo.src} alt="logo" />
                  </a>
                </Link>
              </div>
              <p className="text-white detail mt-4">
                We Know only engaging website returns online business, for this
                we are developing reliable, responsive and custom problem
                solving web solutions to grow your business potential online!
                Please read more about us
              </p>
              <div className="d-flex mt-4">
                <Link
                  href="https://github.com/Dawod-Ahmed"
                  rel="noreferrer noopener"
                >
                  <a className="footer-icon github">
                    <img
                      src={Github.src}
                      alt="whatsapp Icon"
                      className="w-50 h-50 "
                    />
                  </a>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100066460706518"
                  rel="noreferrer noopener"
                >
                  <a className="footer-icon facebook">
                    <img
                      src={Facebook.src}
                      alt="whatsapp Icon"
                      className="w-50 h-50 "
                    />
                  </a>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/daud-ahmed-webdev/"
                  rel="noreferrer noopener"
                >
                  <a className="footer-icon linkedin">
                    <img
                      src={Linkdin.src}
                      alt="whatsapp Icon"
                      className="w-50 h-50 "
                    />
                  </a>
                </Link>
                <Link
                  href="https://wa.me/+971521996785?text=Greetings Daud Ahmed, I need a quote!"
                  rel="noreferrer noopener"
                >
                  <a className="footer-icon whatsapp">
                    <img
                      src={Whatsapp.src}
                      alt="whatsapp Icon"
                      className="w-50 h-50 "
                    />
                  </a>
                </Link>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-xl-2 mb-5 ps-md-4">
              {/* Links */}
              <h6 className="fw-bold text-white linksHeading">Useful Links</h6>
              <p className="p-0 mb-4">
                <Link href="/home">
                  <a className="text-white links">Home</a>
                </Link>
              </p>
              <p className="p-0  mb-4">
                <Link href="/aboutMe">
                  <a className="text-white links">About Us</a>
                </Link>
              </p>
              <p className="p-0  mb-4">
                <Link href="/services">
                  <a className="text-white links">Services</a>
                </Link>
              </p>
              <p className="p-0  mb-4">
                <Link href="/projects">
                  <a className="text-white links">Portfolio</a>
                </Link>
              </p>
              <p className="p-0  mb-4">
                <Link href="/contact">
                  <a className="text-white links">Contact Us</a>
                </Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-7 col-xl-2 mb-5 ps-md-4">
              {/* Links */}
              <h6 className="fw-bold text-white linksHeading">Services</h6>
              <p className="p-0  mb-4">
                <a href="#!" className="text-white links">
                  UI/UX Design
                </a>
              </p>
              <p className="p-0  mb-4">
                <a className="text-white links">Front-End Development</a>
              </p>
              <p className="p-0  mb-4">
                <a className="text-white links">Full-Stack Development</a>
              </p>
              <p className="p-0  mb-4">
                <a className="text-white links">Fix-Bugs in Solution</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-xl-3 mb-5 ps-md-4 ">
              {/* Links */}
              <h6 className="fw-bold text-white linksHeading">Contact Us</h6>
              <p className="text-white links p-0  mb-4 contactus-icons pointer">
                <img src={PoniterIcon.src} alt="pointer" />
                {/* <span>Dragon Mart 2</span> */}
                <span>Dragon Mart 2, International City, Dubai , UAE</span>
              </p>
              <p className="p-0  mb-4 text-white links contactus-icons">
                <img src={PhoneIcon.src} alt="phone" />
                <span>+970 00 000 000</span>
              </p>
              <p className="p-0  mb-4 text-white links contactus-icons ">
                <img src={EmailIcon.src} alt="phone" />
                info@aewebsol.ae
              </p>
              <p className="p-0  mb-4 text-white links contactus-icons ">
                <img src={GlobeIcon.src} alt="phone" />
                www.aewebsol.com
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}

          <div className="websiteDetail text-white mt-3">
            <p className="text-center fs-3 mb-0">DESIGNED BY</p>
            <h2 className="text-center fw-bold">
              AE WEB<span>/</span>SOL.
            </h2>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3">
              <span className="opacity-75 fs-4">You Think, We Code</span>
              <span className="opacity-75 fs-4">
                &copy; {new Date().getFullYear().toString()} AE Web Sol.
              </span>
            </div>
          </div>
        </div>

        <div
          className="scrollBar-Top position-fixed d-none justify-content-center align-items-center"
          onClick={null}
        >
          <img
            src={ScrollTopArrow.src}
            alt="img"
            className="scrollTop-Arrow"
            onClick={scrolltotop}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
