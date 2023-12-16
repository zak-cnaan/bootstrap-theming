function Sink() {
  return (
    <>
      

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <a className="o-skip-link" href="#content">
            Skip to main content
          </a>
          <div className="container">
            <a className="navbar-brand" href="/bootstrap-theme/">
              <img
                src="/bootstrap-theme/assets/img/logo.svg"
                alt="Talis"
                width="75"
                height="30"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " href="/bootstrap-theme/forms/">
                    Forms
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/bootstrap-theme/error/">
                    Error
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/bootstrap-theme/html-ipsum/">
                    HTML Ipsum
                  </a>
                </li>

                <li className="nav-item">
                  <button className="nav-link js-loader-toggle" type="button">
                    Toggle loader
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <span className="dropdown-header">Dropdown header</span>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <main id="content" tabIndex="-1">
            <div className="alert alert-warning">
              <span>
                For demonstration purposes only. This section is non-normative.
              </span>
            </div>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>

            <header className="page-header d-flex justify-content-between align-items-center">
              <h1 className="m-0">
                Primary task
                <small className="text-muted">Additional information</small>
              </h1>

              <button type="button" className="btn btn-primary btn-lg">
                Action
              </button>
            </header>

            <h1>h1, .alpha</h1>
            <h2>h2, .beta</h2>
            <h3>h3, .gamma</h3>
            <h4>h4, .delta</h4>
            <h5>h5, .epsilon</h5>
            <h6>h6, .zeta</h6>
            <p>
              Lorem ipsum dolor sit amet,
              <a href="#">consectetur adipiscing elit</a>. Ut at augue leo. In
              eros ligula, volutpat id neque eu, maximus pretium nisl. Aliquam
              non mi lobortis augue cursus dignissim. Vivamus blandit augue eget
              sapien facilisis suscipit. In bibendum lacus sed orci condimentum,
              a faucibus ante dignissim.
              <a href="#">
                Quisque vel mi dolor. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae
              </a>
              a; Vivamus et erat eu tellus sollicitudin egestas venenatis
              consectetur massa. Curabitur non euismod lorem. Vivamus viverra
              nisl at vulputate pharetra. In hac habitasse platea dictumst.
            </p>
            <ul>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>

            <div className="well">
              <h1>h1, .alpha</h1>
              <h2>h2, .beta</h2>
              <h3>h3, .gamma</h3>
              <h4>h4, .delta</h4>
              <h5>h5, .epsilon</h5>
              <h6>h6, .zeta</h6>
              <p>
                Lorem ipsum dolor sit amet,
                <a href="#">consectetur adipiscing elit</a>. Ut at augue leo. In
                eros ligula, volutpat id neque eu, maximus pretium nisl. Aliquam
                non mi lobortis augue cursus dignissim. Vivamus blandit augue
                eget sapien facilisis suscipit. In bibendum lacus sed orci
                condimentum, a faucibus ante dignissim.
                <a href="#">
                  Quisque vel mi dolor. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia Curae
                </a>
                a; Vivamus et erat eu tellus sollicitudin egestas venenatis
                consectetur massa. Curabitur non euismod lorem. Vivamus viverra
                nisl at vulputate pharetra. In hac habitasse platea dictumst.
              </p>
              <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>

              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="exampleInputEmail">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Email"
                    data-assigned="true"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="text">
                    A textarea
                  </label>
                  <textarea id="text" className="form-control" rows="3">
                    I am a textarea
                  </textarea>
                </div>

                <label className="form-label" htmlFor="searchInput">
                  Search
                </label>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    id="searchInput"
                    type="text"
                    placeholder="Search the library catalogue"
                  />
                  <button className="btn btn-outline-primary" type="button">
                    <svg
                      className="svg-inline--fa fa-search fa-w-16 fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fa"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                    <i className="fa fa-fw fa-search"></i> Font Awesome
                    fontawesome.com
                    <span className="visually-hidden">Search</span>
                  </button>
                </div>
              </form>

              <div className="mb-3">
                <label className="form-label" htmlFor="select-num">
                  Choose a number:
                </label>
                <select className="form-select" id="select-num">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="custom-select">
                  Custom select:
                </label>
                <select className="form-select" id="custom-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <button className="btn btn-default" type="button">
                I am a button
              </button>

              <button className="btn btn-default" type="button" disabled="">
                I am a disabled button
              </button>

              <div className="btn-group">
                <button
                  className="btn btn-default dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-header">Dropdown header</li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Dropdown header</li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li className="danger">
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>

              <h2>Buttons</h2>
              <h3>Normal</h3>

              <button className="btn btn-default " type="button">
                Normal button
              </button>

              <button className="btn btn-primary " type="button">
                Primary button
              </button>

              <button className="btn btn-success " type="button">
                Success button
              </button>

              <button className="btn btn-warning " type="button">
                Warning button
              </button>

              <button className="btn btn-info " type="button">
                Info button
              </button>

              <button className="btn btn-danger " type="button">
                Danger button
              </button>

              <button className="btn btn-link " type="button">
                Link button
              </button>

              <h3>Large</h3>

              <button className="btn btn-default btn-lg" type="button">
                Normal button
              </button>

              <button type="button" className="btn btn-lg btn-primary">
                Primary button
              </button>
              <button type="button" className="btn btn-lg btn-success">
                Success button
              </button>
              <button type="button" className="btn btn-lg btn-warning">
                Warning button
              </button>
              <button type="button" className="btn btn-lg btn-info">
                Info button
              </button>
              <button type="button" className="btn btn-lg btn-danger">
                Danger button
              </button>
              <button type="button" className="btn btn-lg btn-link">
                Link button
              </button>
              <button
                type="button"
                className="btn btn-default btn-lg"
                disabled=""
              >
                Default inactive button
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                disabled=""
              >
                Default inactive button
              </button>

              <div className="btn-group">
                <button
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  disabled=""
                >
                  I am a disabled dropdown
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-header">Dropdown header</li>
                  <li>
                    <a href="#">Link 1</a>
                  </li>
                  <li>
                    <a href="#">Link 2</a>
                  </li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Dropdown header</li>
                  <li>
                    <a href="#">Link 3</a>
                  </li>
                  <li className="divider"></li>
                  <li className="danger">
                    <a href="#">Delete</a>
                  </li>
                </ul>
              </div>

              <h3>XS</h3>
              <button className="btn btn-xs btn-default">XS button</button>
              <button className="btn btn-xs btn-primary">XS button</button>
              <button className="btn btn-xs btn-primary" disabled="">
                XS button
              </button>
              <button className="btn btn-xs btn-default" disabled="">
                XS button
              </button>
              <hr />
            </div>

            <h2>Buttons</h2>
            <h3>Normal</h3>

            <button className="btn btn-default " type="button">
              Normal button
            </button>

            <button className="btn btn-primary " type="button">
              Primary button
            </button>

            <button className="btn btn-success " type="button">
              Success button
            </button>

            <button className="btn btn-warning " type="button">
              Warning button
            </button>

            <button className="btn btn-info " type="button">
              Info button
            </button>

            <button className="btn btn-danger " type="button">
              Danger button
            </button>

            <button className="btn btn-link " type="button">
              Link button
            </button>

            <h3>Large</h3>

            <button className="btn btn-default btn-lg" type="button">
              Normal button
            </button>

            <button type="button" className="btn btn-lg btn-primary">
              Primary button
            </button>
            <button type="button" className="btn btn-lg btn-success">
              Success button
            </button>
            <button type="button" className="btn btn-lg btn-warning">
              Warning button
            </button>
            <button type="button" className="btn btn-lg btn-info">
              Info button
            </button>
            <button type="button" className="btn btn-lg btn-danger">
              Danger button
            </button>
            <button type="button" className="btn btn-lg btn-link">
              Link button
            </button>
            <button
              type="button"
              className="btn btn-default btn-lg"
              disabled=""
            >
              Default inactive button
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              disabled=""
            >
              Default inactive button
            </button>

            <div className="btn-group">
              <button
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                disabled=""
              >
                I am a disabled dropdown
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Dropdown header</li>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li className="divider"></li>
                <li className="dropdown-header">Dropdown header</li>
                <li>
                  <a href="#">Link 3</a>
                </li>
                <li className="divider"></li>
                <li className="danger">
                  <a href="#">Delete</a>
                </li>
              </ul>
            </div>

            <h3>XS</h3>
            <button className="btn btn-xs btn-default">XS button</button>
            <button className="btn btn-xs btn-primary">XS button</button>
            <button className="btn btn-xs btn-primary" disabled="">
              XS button
            </button>
            <button className="btn btn-xs btn-default" disabled="">
              XS button
            </button>
            <hr />

            <h2>Tables</h2>
            <table className="table table-striped">
              <caption className="visually-hidden">An example caption</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Course</th>
                  <th>Requester</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <td>1</td>
                  <td>
                    <span className="label label-default">Normal</span>
                  </td>
                  <td>Computer Science</td>
                  <td>Daniel Matthew</td>
                  <td>
                    <div className="text-end">
                      <button
                        data-bs-toggle="dropdown"
                        className="btn btn-lg btn-default"
                      >
                        <span className="visually-hidden">Actions</span>
                        <svg
                          className="svg-inline--fa fa-ellipsis-v fa-w-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="ellipsis-v"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            View details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Upload document
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit &amp; resubmit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <span className="label label-primary">Live</span>
                  </td>
                  <td>Computer Science</td>
                  <td>Daniel Matthew</td>
                  <td>
                    <div className="text-end">
                      <button
                        data-bs-toggle="dropdown"
                        className="btn btn-lg btn-default"
                      >
                        <span className="visually-hidden">Actions</span>
                        <svg
                          className="svg-inline--fa fa-ellipsis-v fa-w-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="ellipsis-v"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            View details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Upload document
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit &amp; resubmit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <span className="label label-danger">Failed</span>
                  </td>
                  <td>Computer Science</td>
                  <td>Daniel Matthew</td>
                  <td>
                    <div className="text-end">
                      <button
                        data-bs-toggle="dropdown"
                        className="btn btn-lg btn-default"
                      >
                        <span className="visually-hidden">Actions</span>
                        <svg
                          className="svg-inline--fa fa-ellipsis-v fa-w-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="ellipsis-v"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            View details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Upload document
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit &amp; resubmit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <span className="label label-warning">Warning</span>
                  </td>
                  <td>Computer Science</td>
                  <td>Daniel Matthew</td>
                  <td>
                    <div className="text-end">
                      <button
                        data-bs-toggle="dropdown"
                        className="btn btn-lg btn-default"
                      >
                        <span className="visually-hidden">Actions</span>
                        <svg
                          className="svg-inline--fa fa-ellipsis-v fa-w-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="ellipsis-v"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            View details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Upload document
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit &amp; resubmit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="table-responsive">
              <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Course</th>
                    <th>Requester</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td>1</td>
                    <td>
                      <span className="label label-default">Alpha</span>
                    </td>
                    <td>Mathematics</td>
                    <td>One</td>
                    <td>
                      <div className="text-end">
                        <button
                          data-bs-toggle="dropdown"
                          className="btn btn-lg btn-default"
                        >
                          <span className="visually-hidden">Actions</span>
                          <svg
                            className="svg-inline--fa fa-ellipsis-v fa-w-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                            ></path>
                          </svg>
                          {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              View details
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Upload document
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Edit &amp; resubmit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <span className="label label-default">Beta</span>
                    </td>
                    <td>Mathematics</td>
                    <td>Two</td>
                    <td>
                      <div className="text-end">
                        <button
                          data-bs-toggle="dropdown"
                          className="btn btn-lg btn-default"
                        >
                          <span className="visually-hidden">Actions</span>
                          <svg
                            className="svg-inline--fa fa-ellipsis-v fa-w-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                            ></path>
                          </svg>
                          {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              View details
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Upload document
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Edit &amp; resubmit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      <span className="label label-default">Delta</span>
                    </td>
                    <td>Mathematics</td>
                    <td>Three</td>
                    <td>
                      <div className="text-end">
                        <button
                          data-bs-toggle="dropdown"
                          className="btn btn-lg btn-default"
                        >
                          <span className="visually-hidden">Actions</span>
                          <svg
                            className="svg-inline--fa fa-ellipsis-v fa-w-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                            ></path>
                          </svg>
                          {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              View details
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Upload document
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Edit &amp; resubmit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      <span className="label label-default">Epsilon</span>
                    </td>
                    <td>Mathematics</td>
                    <td>Four</td>
                    <td>
                      <div className="text-end">
                        <button
                          data-bs-toggle="dropdown"
                          className="btn btn-lg btn-default"
                        >
                          <span className="visually-hidden">Actions</span>
                          <svg
                            className="svg-inline--fa fa-ellipsis-v fa-w-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                            ></path>
                          </svg>
                          {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              View details
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Upload document
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Edit &amp; resubmit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      <span className="label label-default">Gamma</span>
                    </td>
                    <td>Mathematics</td>
                    <td>Five</td>
                    <td>
                      <div className="text-end">
                        <button
                          data-bs-toggle="dropdown"
                          className="btn btn-lg btn-default"
                        >
                          <span className="visually-hidden">Actions</span>
                          <svg
                            className="svg-inline--fa fa-ellipsis-v fa-w-4"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="ellipsis-v"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
                            ></path>
                          </svg>
                          {/* <!-- <i className="far fa-ellipsis-v"></i> Font Awesome fontawesome.com --> */}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              View details
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Upload document
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Edit &amp; resubmit
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />

            <h2>Forms</h2>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmailAgain">
                  Email address{" "}
                  <span className="field-required">(Required)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmailAgain"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputPassword1">
                  Email{" "}
                  <span className="field-hint">
                    This field is read-only; useful for prepopulated information
                  </span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  readOnly=""
                  value="dm@talis.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  disabled=""
                  placeholder="I am disabled"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="searchInput">
                  Search
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="searchInput"
                    type="text"
                    placeholder="Search the library catalogue"
                  />
                  <button className="btn btn-default" type="button">
                    <svg
                      className="svg-inline--fa fa-search fa-w-16 fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fa"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                    {/* <!-- <i className="fa fa-fw fa-search"></i> Font Awesome fontawesome.com --> */}
                    <span className="visually-hidden">Search</span>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="select-num-again">
                  Choose a number
                </label>
                <select className="form-select" id="select-num-again">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="custom-select-again">
                  Custom select
                  <p className="help-block">
                    Select menus have more consistent styles
                  </p>
                </label>
                <select className="form-select" id="custom-select-again">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputFile">
                  <span className="field-label">File input</span>
                  <span className="field-hint">
                    Bootstrap v5 adds this <code>-plaintext</code> modifer
                  </span>
                </label>
                <input
                  className="form-control-plaintext"
                  type="file"
                  id="exampleInputFile"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputFile-jazzy">
                  <span className="field-label">File input</span>
                  <span className="field-hint">
                    …it also adds this jazzy new file-picker with use of
                    <code>.form-control</code>
                  </span>
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="exampleInputFile-jazzy"
                />
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox"
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="checkbox"
                >
                  Check me out
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox-checked"
                  checked=""
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="checkbox-checked"
                >
                  Check me out
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input form-check-input--alt"
                  type="checkbox"
                  id="checkbox-again"
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="checkbox-again"
                >
                  Check me out
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="radio"
                  name="radio"
                />
                <label className="form-check-label form-label" htmlFor="radio">
                  Check me out
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="radio-checked"
                  name="radio"
                  checked=""
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="radio-checked"
                >
                  Check me out
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input form-check-input--alt"
                  type="radio"
                  id="radio-checked-again"
                  name="radio"
                />
                <label
                  className="form-check-label form-label"
                  htmlFor="radio-checked-again"
                >
                  Check me out
                </label>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="testarea"></label>
                <textarea
                  className="form-control"
                  id="testarea"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </div>
            </form>

            <h2>Navigation</h2>
            <h3>Tabs</h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#home"
                  role="tab"
                  data-toggle="tab"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#profile"
                  role="tab"
                  data-toggle="tab"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#messages"
                  role="tab"
                  data-toggle="tab"
                >
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#settings"
                  role="tab"
                  data-toggle="tab"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="home">
                Home tab
              </div>
              <div role="tabpanel" className="tab-pane" id="profile">
                Profile tab
              </div>
              <div role="tabpanel" className="tab-pane" id="messages">
                Messages tab
              </div>
              <div role="tabpanel" className="tab-pane" id="settings">
                Settings tab
              </div>
            </div>

            <h3>Pills</h3>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Messages
                </a>
              </li>
            </ul>

            <h3>Stacked Pills</h3>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Messages
                </a>
              </li>
            </ul>
            <hr />

            <h2>Alerts</h2>
            {/* <!-- Basic --> */}
            <div className="alert alert-info" id="alert">
              <span>Something has happened. Yup.</span>
              <a href="#alert" className="btn btn-alert btn-outline-light">
                Click me
              </a>
              <a href="#alert" className="btn btn-alert--primary ">
                Click me
              </a>
              <button className="btn btn-alert btn-outline-light">
                Click me
              </button>
              <button className="btn btn-alert--primary ">Click me</button>
              <button className="btn btn-alert--primary " disabled="">
                Can t click me
              </button>
              <button className="btn btn-alert" disabled="">
                Can t click me
              </button>
            </div>

            {/* <!-- Success --> */}
            <div className="alert alert-success">
              <p className="mb-0">
                Something <strong>good</strong> has happened.
              </p>
              <button className="btn btn-alert btn-outline-dark">
                Click me
              </button>
            </div>

            <p className="text-success">Success!</p>

            {/* <!-- Info --> */}
            <div className="alert alert-warning">
              <p className="mb-0">
                Something <strong>useful</strong> has happened.
              </p>
              <button className="btn btn-alert btn-outline-dark">
                Click me
              </button>
            </div>

            <p className="text-warning">Warning!</p>

            {/* <!-- Danger --> */}
            <div className="alert alert-danger">
              <p className="mb-0">
                Something <strong>bad</strong> has happened.
                <a href="error.html" className="alert-link">
                  error
                </a>
              </p>
              <button className="btn btn-alert">Click me</button>
              <a href="error.html" className="btn btn-alert btn-outline-dark">
                Click me
              </a>
            </div>

            <p className="text-danger">Danger, Will Robinson!</p>
            <hr />

            <h2 id="badges">Badges</h2>

            <span className="badge label-default">Basic</span>
            <span className="badge bg-primary">Primary</span>
            <span className="badge bg-info">Info</span>
            <span className="badge bg-success">Success</span>
            <span className="badge bg-warning">Warning</span>
            <span className="badge bg-danger">Danger</span>

            <button className="btn btn-primary">
              Messages
              <span className="badge rounded-pill bg-secondary text-light">
                99
              </span>
            </button>
            <hr />

            <h2>Pagination</h2>
            <h3>Pagination Block</h3>
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            <h3>Pager (Deprecated)</h3>
            <nav>
              <ul className="pagination pager justify-content-between">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">←</span> Older
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Newer
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              </ul>
            </nav>
            <hr />

            <h2>Modals</h2>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Launch demo modal
            </button>

            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#confirmation-modal"
            >
              Launch confirmation modal
            </button>

            <div
              className="modal fade"
              id="myModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal-label"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="modal-label">
                      Modal title
                    </h2>
                  </div>
                  <div className="modal-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem quis dolore voluptas et, sint, impedit amet quos,
                      sequi minima commodi odio accusantium excepturi ratione
                      ullam qui libero error laborum quam!
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
                {/* <!-- /.modal-content --> */}
              </div>
              {/* <!-- /.modal-dialog --> */}
            </div>

            <div
              className="modal o-confirmation-modal fade"
              id="confirmation-modal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="confirmation-label"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <img
                    src="/bootstrap-theme/assets/img/discard.svg"
                    className="modal-image"
                    alt=""
                    width="149"
                    height="158"
                  />
                  <div className="modal-header">
                    <h2 className="modal-title" id="confirmation-label">
                      Are you sure?
                    </h2>
                  </div>
                  <div className="modal-body">
                    <p>You will lose your unsaved data.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-lg btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Yes
                    </button>
                    <button type="button" className="btn btn-lg btn-default">
                      Cancel
                    </button>
                  </div>
                </div>
                {/* <!-- /.modal-content --> */}
              </div>
              {/* <!-- /.modal-dialog --> */}
            </div>
            <hr />

            <button
              type="button"
              className="btn btn-primary btn-lg js-btn-toast"
            >
              Display a toast
            </button>

            <div
              className="position-relative my-3"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div
                className="
      toast-container
      position-absolute
      bottom-0
      start-50
      translate-middle-x
    "
              >
                <div
                  className="toast align-items-center"
                  data-bs-autohide="false"
                >
                  <div className="d-flex">
                    <svg
                      className="svg-inline--fa fa-spinner-third fa-w-16 fa-spin fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="spinner-third"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z"
                      ></path>
                    </svg>
                    {/* <!-- <i className="fal fa-spinner-third fa-spin fa-fw"></i> Font Awesome fontawesome.com --> */}
                    <div className="toast-body">
                      Hello, world! This is a toast message.
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              hidden=""
              className="loading-indicator qa-loading-indicator"
              role="status"
              aria-live="polite"
            >
              <div className="cradle">
                <div className="cradle-node">
                  <div className="cradle-ball"></div>
                </div>
                <div className="cradle-node">
                  <div className="cradle-ball"></div>
                </div>
                <div className="cradle-node">
                  <div className="cradle-ball"></div>
                </div>
                <div className="cradle-node">
                  <div className="cradle-ball"></div>
                </div>
              </div>

              <span className="visually-hidden">Loading</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{"width": "25%"}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Upload progress"
              ></div>
            </div>
          </main>

          <footer className="py-4 mt-5">
            <hr />
            <small className="d-block mb-0">
              <a href="https://talis.com/accessibility" rel="noreferrer">
                Accessibility
              </a>
            </small>
            <small className="d-block mb-0">
              Copyright © Talis Education Limited, all rights reserved
            </small>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Sink;
