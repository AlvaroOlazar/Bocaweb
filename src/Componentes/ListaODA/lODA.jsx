export const Lista = ({lista}) => {
    return(
        <html>
            <head>
                <link href="./estilo.css" rel="stylesheet"></link>
            </head>
            <body>
                <p className="objetoODA"> {lista.length} Objetos Cadastrados</p>
            <section className="lista"> 
        {lista.map( oda => (
            <div className='cadaODA' key={oda._id}>
              <h1 className="nome">{oda.nome}</h1>
              <p className="usuario"><strong> Usuário: </strong>{oda.usuario} </p>
              <p className="descricao"><strong> Descrição: </strong>{oda.descricao} </p>
              <p className="inclusao"><strong> Data de inclusão: </strong>{oda.data_inclusao}</p>
              <p className="chave"><strong> Palavras chaves: </strong>{oda.palavras_chave}</p> 
            </div>  
        ))}
            </section>  
            </body>
        </html>
     
        
    )
}