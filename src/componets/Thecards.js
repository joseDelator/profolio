import React from 'react';
import './cards.css'
import Flag from './Flag'
import Agave from './agave'
import Linkin from './Linkin'
import Dashboard from './Dashboard'
import Github from './Github'
import Android from './ANdroid'
function Cards() {
    return(
    <div className="cards">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Flag />
                    <h2>flags</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p> This porject is based of the rest Countries API
                        and will up to date data from countries around the world
                    </p>
                    <a target="_blank" rel="noopener noreferrer"  href="https://master.d16a3vr9gu4cds.amplifyapp.com/"
                    className="Link">GO!</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Dashboard/>
                    <h2>Dashboarding</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>
                        Project Based On Nelson data, Stata, Tabeaul 
                    </p>
                    <a target="_blank" rel="noopener noreferrer"  href="https://public.tableau.com/profile/jose.de.la.torre#!/vizhome/PS11_15741799436960/Dashboard1"
                    className="Link">GO!</a>
                </div>
            </div>
        </div>
        
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Agave/>
                    <h2>Agave Green</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>Lorem
                    </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Linkin/>
                    <h2>Linked In</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>Lorem
                    </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Github/>
                    <h2>Github</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>Lorem
                    </p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Android />

                    <h2>Android App</h2>
                </div>
            </div>
            <div className="face face2">
                <div class="content">
                    <p>Lorem
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Cards;