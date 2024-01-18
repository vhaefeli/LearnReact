import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {


 return (
    <Router>
        <div>
            {/*La barre de navigation commune à toutes les pages*/}
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to= "/" className="brand-logo center"> PoKédex</Link>
                </div>
            </nav>
            {/*le système de gestion des routes de notre application */}
            <Switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/pokemons" component={PokemonList} />
                <Route exact path="/pokemons/:id" component={PokemonsDetail} />
                <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
 )
}

export default App; 