import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div class="container-fluid background-white shadow p-3 mb-5 d-none d-lg-block d-xl-block">
      <h2 class="title h2-pc d-none d-lg-block d-xl-block">Vertretung nach außen</h2>
      <h2 class="title h2-mobile d-block d-lg-none d-xl-none">Vertretung nach außen</h2>
      <div class="row">
        <div class="col-6">
          <h4 class="card-title h4-pc d-none d-lg-block d-xl-block">Auftraggeber</h4>
          <h4 class="card-title h4-mobile d-block d-lg-none d-xl-none">Auftraggeber</h4>
          <p class="card-text">Leo Winkler<br />leo.winkler@outlook.com</p>
          <p class="card-text">Semih Cakir<br />secakir20@gmail.com</p>
        </div>
        <div class="col-6">
          <h4 class="card-title h4-pc d-none d-lg-block d-xl-block">Projektleitung</h4>
          <h4 class="card-title h4-mobile d-block d-lg-none d-xl-none">Projektleitung</h4>
          <p class="card-text">Christian Broz<br />cbroz@student.tgm.ac.at</p>
        </div>
      </div>
    </div>

    <div class="container-fluid background-white shadow p-3 mb-5 d-block d-lg-none d-xl-none">
      <h2 class="title h2-pc d-none d-lg-block d-xl-block">Vertretung nach außen</h2>
      <h2 class="title h2-mobile d-block d-lg-none d-xl-none">Vertretung nach außen</h2>
      <div class="row">
        <h4 class="card-title h4-pc d-none d-lg-block d-xl-block">Auftraggeber</h4>
        <h4 class="card-title h4-mobile d-block d-lg-none d-xl-none">Auftraggeber</h4>
        <p class="card-text">Leo Winkler<br />leo.winkler@outlook.com</p>
        <p class="card-text">Semih Cakir<br />secakir20@gmail.com</p>
        <h4 class="card-title h4-pc d-none d-lg-block d-xl-block">Projektleitung</h4>
        <h4 class="card-title h4-mobile d-block d-lg-none d-xl-none">Projektleitung</h4>
        <p class="card-text">Christian Broz<br />cbroz@student.tgm.ac.at</p>
      </div>
    </div>
  );
}

export default FooterPage;
