// src/pages/RosterPage.js
import React, { useState } from 'react';
import Layout from '../components/Layout'; // Importa el componente Layout
import '../styles/roster.css';

const players = [
    { number: 3, name: 'Kevin Harrell', team: 'Top Club', position: 'Guard' },
    { number: 5, name: 'James Fletcher', team: 'Top Club', position: 'Center' },
    { number: 14, name: 'Jeff Montes', team: 'Top Club', position: 'Forward-Guard' },
    { number: 27, name: 'Bryan Warner', team: 'Top Club', position: 'Forward-Center' },
    { number: 30, name: 'Scott Dale', team: 'Top Club', position: 'Forward' },
    { number: 37, name: 'Noah Jones', team: 'Top Club', position: 'Guard' },
];

const RosterPage = () => {
    const [displayPlayers, setDisplayPlayers] = useState(players);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = (filterType) => {
        let filteredPlayers = [];
        if (filterType === 'all') {
            filteredPlayers = players;
        } else if (filterType === 'odd') {
            filteredPlayers = players.filter(player => player.number % 2 !== 0);
        } else if (filterType === 'even') {
            filteredPlayers = players.filter(player => player.number % 2 === 0);
        } else if (filterType === '1-10') {
            filteredPlayers = players.filter(player => player.number <= 10);
        } else if (filterType === '11-20') {
            filteredPlayers = players.filter(player => player.number > 10 && player.number <= 20);
        }
        setDisplayPlayers(filteredPlayers);
    };

    const handleSearch = () => {
        const searchValue = searchTerm.toLowerCase();
        setDisplayPlayers(players.filter(player =>
            player.name.toLowerCase().includes(searchValue)
        ));
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Layout
            title="Roster Page - Proyecto Final"
            author="Camila Herrera"
            keywords="roster, team members, organization"
            description="View the roster of team members."
        >
            <div className="roster">
                <h1>ROSTER</h1>
                <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-secondary" type="submit">Busqueda</button>
                </form>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleFilter('all')}>Ver Todos</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleFilter('even')}>Ver Pares</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleFilter('odd')}>Ver Impares</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleFilter('1-10')}>Ver del 1-10</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => handleFilter('11-20')}>Ver del 11-20</button>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Jugador</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Posición</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayPlayers.map(player => (
                            <tr key={player.number}>
                                <td>{player.number}</td>
                                <td>{player.name}</td>
                                <td>{player.team}</td>
                                <td>{player.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default RosterPage;
