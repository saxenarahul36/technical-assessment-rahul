import React, { useState, useEffect } from "react";
const Loader = require("react-loader");
import { Link } from "react-router-dom";
import Modal from "../../common/modalBox";
import { getLicenses } from "../../services/api/licensesApi";
import { CardContainer, HomeWapper } from "./ui";

const Home = () => {
  const [showMoreinfo, setMoreInfo] = useState({});
  const [licenses, setLicenses] = useState([]);
  useEffect(() => {
    getLicenses().then((res) => {
      setLicenses(res);
      console.log("test", res);
    });
  }, []);
  return (
    <HomeWapper>
      <h1>Welcome To Licenses Page</h1>
      <Modal
        title={showMoreinfo.name}
        details={showMoreinfo.details}
        open={showMoreinfo.open}
        image={showMoreinfo.image}
        closeHandler={() => setMoreInfo({ open: false })}
      />
      {licenses?.length ? (
        <CardContainer>
          {licenses.map((card) => {
            return (
              <div class="card">
                <img src={`images/${card.image}`} alt="Nature"></img>
                <div class="header" data-header>
                  <a href="#">
                    <h5>{card.name}</h5>
                  </a>
                </div>
                <p>{card.subHeading}</p>
                <div class="action">
                  <Link to={"/licensesregistertion"} className="nav-link">
                    Apply
                  </Link>

                  <Link
                    for="modal-1"
                    onClick={() => {
                      setMoreInfo({ ...card, open: true });
                    }}
                    className="nav-link"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            );
          })}
        </CardContainer>
      ) : (
        <Loader />
      )}
    </HomeWapper>
  );
};

export default Home;
