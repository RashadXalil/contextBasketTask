import React from 'react'

const index = () => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.macrumors.com/t/9UoZb7ByUxi2co7sPSqv7ZI2SbQ=/1600x0/article-new/2022/02/13-inch-macbook-pro-m2-mock-feature-2.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Macbook Pro</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11CC7/production/_126630927_apple-iphone-14-pro-iphone-14-pro-max-hero-220907.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Iphone</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static.lenovo.com/ww/campaigns/2022/legion-brand/lenovo-campaign-legion-brand-agnostic-hero.jpg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lenovo Legion</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  )
}

export default index
