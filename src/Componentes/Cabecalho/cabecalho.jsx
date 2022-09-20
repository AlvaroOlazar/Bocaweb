export const Cabecalho = () => {
    var logoboca = require ('./img/logobocaweb.png');
    return(
        <html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#!"><img src={logoboca} alt="Logo BocaWeb" className='d-inline-block'></img>BocaWeb Front</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="text-white nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#!">Conheça o BocaWeb</a>
            </li>
            <li className="text-white nav-item">
              <a className="nav-link text-white" href="#!">Contato</a>
            </li>
            <li className="text-white nav-item dropdown">
              <a className="nav-link text-white" href="#!"data-bs-toggle="dropdown" aria-expanded="false">
                Administração
              </a>
              <ul className="dropdown-menu">
                <li><a className="text-white dropdown-item" href="#!">Action</a></li>
                <li><a className="text-white dropdown-item" href="#!">Another action</a></li>
                <li><hr className="text-white dropdown-divider"></hr></li>
                <li><a className="text-white dropdown-item" href="#!">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
            </body>
      </html>
    )
}
