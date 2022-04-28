import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark"/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">United States </a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Partner Central|</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Training|</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Community|</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Store</a>
        </li>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Cloud Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Support</a>
  </li>

  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Downloads</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Consulting</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Partner</a>
  </li>
  <li class="nav-item">
    <a class="nav-link "href="#">Company</a>
  </li>
</ul>

</div>

);
  }