import './App.css';
import { Component } from 'react';
import { Busca } from './Componentes/Busca/busca';
import { Lista } from './Componentes/ListaODA/lODA';
import { Cabecalho } from './Componentes/Cabecalho/cabecalho'
import { Rodape } from './Componentes/Rodape/rodape'

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log([busca])
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;
    return (
      <>
      <Cabecalho/>
      <Busca
        busca = {this.state.busca}
        buscaODA= {this.buscaODA}
        />
        <Lista
        lista = {odas}
        />
        <Rodape/>
      </>
    )
  }
}

export default App;