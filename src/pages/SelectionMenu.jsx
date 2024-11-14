import React, { useState, useEffect, useRef } from 'react'; 
import brandlogo from '../assets/Images/default.png'; 
import '../styles/SelectionMenu.scss';

const SelectionMenu = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const cricketRef = useRef(null);
  const kabaddiRef = useRef(null);
  const cricketDropdownRef = useRef(null);
  const kabaddiDropdownRef = useRef(null);

  const showDropdown = (sport) => {
    if (sport === 'cricket') {
      cricketDropdownRef.current.style.display = 'block';
      kabaddiDropdownRef.current.style.display = 'none';
    } else if (sport === 'kabaddi') {
      kabaddiDropdownRef.current.style.display = 'block';
      cricketDropdownRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    const cricketElement = cricketRef.current;
    const kabaddiElement = kabaddiRef.current;

    const cricketClickHandler = () => showDropdown('cricket');
    cricketElement.addEventListener('click', cricketClickHandler);

    const kabaddiClickHandler = () => showDropdown('kabaddi');
    kabaddiElement.addEventListener('click', kabaddiClickHandler);

    return () => {
      cricketElement.removeEventListener('click', cricketClickHandler);
      kabaddiElement.removeEventListener('click', kabaddiClickHandler);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={brandlogo} alt="Logo" className="brand-logo" />
        </div>
        <div className="header-tournament">
          <p className="tournament-name"> | AUCTION DASHBOARD</p>
        </div>
        <div className="logout-icon">&#8594;</div>
      </header>

      <main className="main-content">
        <div className="sport-selection">
          <div id="cricket" ref={cricketRef} className="sport-wrapper">
            <div className="sport-icon cricket-icon"></div>
            <span className="sport-text">Cricket</span>
          </div>

          <div id="kabaddi" ref={kabaddiRef} className="sport-wrapper">
            <div className="sport-icon kabaddi-icon"></div>
            <span className="sport-text">Kabaddi</span>
          </div>

          <div id="cricket-dropdown" ref={cricketDropdownRef} className="series-dropdown" style={{ display: 'none' }}>
            <select>
              <option>Select Series</option>
              <option>Women's Premier League, 2024</option>
              <option>Women's Premier League Testing, 2024</option>
            </select>
          </div>

          <div id="kabaddi-dropdown" ref={kabaddiDropdownRef} className="series-dropdown" style={{ display: 'none' }}>
            <select>
              <option>Select Series</option>
              <option>Pro Kabaddi League Season 11, 2024</option>
              <option>Testing Pro Kabaddi League Season 11, 2024</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectionMenu;
