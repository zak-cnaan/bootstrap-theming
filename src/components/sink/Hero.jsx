import css from "./hero.module.css";

function Hero() {
  return (
    <div className={" " + css.hero}>
      <div className="p-3 mb-2 bg-primary text-primary-subtle">.bg-primary</div>
      <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
        .bg-primary-subtle
      </div>
      <div className="p-3 mb-2 bg-main text-white">.bg-main</div>
      <div className="p-3 mb-2 bg-main-subtle text-primary-emphasis">
        .bg-main-subtle
      </div>
      <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
      <div className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
        .bg-secondary-subtle
      </div>
      <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
      <div className="p-3 mb-2 bg-success-subtle text-success-emphasis">
        .bg-success-subtle
      </div>
      <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
      <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis">
        .bg-danger-subtle
      </div>
      <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
      <div className="p-3 mb-2 bg-warning-subtle text-warning-emphasis">
        .bg-warning-subtle
      </div>
      <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
      <div className="p-3 mb-2 bg-info-subtle text-info-emphasis">
        .bg-info-subtle
      </div>
      <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
      <div className="p-3 mb-2 bg-light-subtle text-light-emphasis">
        .bg-light-subtle
      </div>
      <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
      <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        .bg-dark-subtle
      </div>
      <div className="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
      <div className="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>

      <div className="p-3 mb-2 bg-body text-body">.bg-body</div>
      <div className="p-3 mb-2 bg-black text-white">.bg-black</div>
      <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
      <div className="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>

      <p className="text-primary">.text-primary</p>
      <p className="text-primary-emphasis">.text-primary-emphasis</p>
      <p className="text-main">.text-main</p>
      <p className="text-main-emphasis">.text-main-emphasis</p>
      <p className="text-secondary">.text-secondary</p>
      <p className="text-secondary-emphasis">.text-secondary-emphasis</p>
      <p className="text-success">.text-success</p>
      <p className="text-success-emphasis">.text-success-emphasis</p>
      <p className="text-danger">.text-danger</p>
      <p className="text-danger-emphasis">.text-danger-emphasis</p>
      <p className="text-warning bg-dark">.text-warning</p>
      <p className="text-warning-emphasis">.text-warning-emphasis</p>
      <p className="text-info bg-dark">.text-info</p>
      <p className="text-info-emphasis">.text-info-emphasis</p>
      <p className="text-light bg-dark">.text-light</p>
      <p className="text-light-emphasis">.text-light-emphasis</p>
      <p className="text-dark bg-white">.text-dark</p>
      <p className="text-dark-emphasis">.text-dark-emphasis</p>

      <p className="text-body">.text-body</p>
      <p className="text-body-emphasis">.text-body-emphasis</p>
      <p className="text-body-secondary">.text-body-secondary</p>
      <p className="text-body-tertiary">.text-body-tertiary</p>

      <p className="text-black bg-white">.text-black</p>
      <p className="text-white bg-dark">.text-white</p>
      <p className="text-black-50 bg-white">.text-black-50</p>
      <p className="text-white-50 bg-dark">.text-white-50</p>
    </div>
  );
}

export default Hero;
