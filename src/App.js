import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import data from './data/data.json'

/*
    TODO:
    - Add category variables to state

    - find a way to select a category, and set state.selected to that category
      - set state.selected based on the link that's clicked
    - render only selected data 
*/


// Using Redux to select data:
// ---------------------------
// // declare variable to grab data from state
// const selectEpisodes = state => {
//   const selectedEpisodes = state.podcastData
//   return selectedEpisodes
// }
// ---------------------------


function App() {
  const [podcastData, updateData] = useState(data.nodes) // destructure json data to save only the array and update to state
  const [selected, setSelected] = useState('') // declare/update selected category in state
  return (
    <div className="App">
      <div className="container">
        <header className="">
  
        </header>
        <div className="main">
          <nav className="categories">
            {/* Need to update links to set the selected category in state */}
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item">
                <a className="nav-link active" href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="https://grants.nih.gov/grants/oer.htm">Link</a>
              </li>
            </ul>
          </nav>
          {/* Map the podcast data from state into media objects */}
          <div className="episodes">
            {console.log(podcastData)}
            {podcastData.map((podcast, i) => (
              <div className="media" key={i}>
                <img src="..." className="mr3" alt="podcast title text"/>
                <div className="media-body">
                  <h5 className="mt-0">{podcast.node.Title}</h5>
                  <p>Date: {podcast.node.Date} <br/>
                    Category: {podcast.node.Category} <br/>
                    Length: {podcast.node.Length}
                  </p>
                </div>
               </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default App;
