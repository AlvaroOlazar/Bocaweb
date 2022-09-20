export const Busca = ({busca, buscaODA}) =>{
    return(
      <html>
        <head>
          <link href="./estilo.css" rel="stylesheet"></link>
        </head>
        <body>
        <div className='componentebusca'>
        <form className="d-flex justify-content-center" role="search">
            <input className='form-control'
            name='busca'
            type = 'text'
            value={busca}
            placeholder= 'O que deseja buscar'
            onChange={buscaODA}
        />
        </form>
          
          

        </div>
        </body>
        </html>
    )
}