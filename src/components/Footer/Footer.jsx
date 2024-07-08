import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  background-color: #0d0d0d;
  color: #f2e7dc;
  `;

const FooterContainer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Manzillar</h5>
              <ul>
                <li>
                  <a href="#">Bosh sahifa</a>
                </li>
                <li>
                  <a href="#">Xizmatlar</a>
                </li>
                <li>
                  <a href="#">Biz haqimizda</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Biz haqimizda</h5>
              <p>
                Loxudan kichik dalg'asiga qadar, biz sizni biz haqimizda bilib
                oling.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Bog'lanish</h5>
              <p>
                Agar savollar yoki takliflar bo'lsa, biz bilan bog'laning.
              </p>
              <p>Email: info@example.com</p>
            </div>
          </div>
          <p className="text-muted">
            <p style={{color: "gray", display: "flex", justifyContent: "center", padding: "1rem"}}>Barcha huquqlar himoyalangan &copy; 2024</p>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterContainer;
