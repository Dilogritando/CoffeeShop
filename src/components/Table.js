import '../css/styles.css';
import '../css/table-styles.css';
import Check from '../assets/table-icons/table-check.png';
import Cross from '../assets/table-icons/table-cross.png';

function Table() {
  return (
    <div className="table__block" id='table'>
        <h5>THE COURSE ALSO INCLUDES</h5>
      <div id='table__proper--box'>
        <div className="table__row"> <div className="table__row--icon"><img src={Check} alt="Checkmark" className="table__row--check"/></div> <p className="table__row--text">Coffee machine and grinder - practice - types of coffee machines and coffee grinders</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Check} alt="Checkmark" className="table__row--check"/></div> <p className="table__row--text">What makes professional coffee machines and coffee grinders.</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">Main components of coffee machines and coffee-Lathes, autolathes. Their purpose</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">How to choose a coffee machine and coffee grinder</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">The structure of the machine. How to maintain, clean and customize coffee machine</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">The structure of the grinders. How to maintain, clean and customize coffee Molko</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Check} alt="Checkmark" className="table__row--check"/></div> <p className="table__row--text">Making beverages - praktika- machines and espresso rules</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">Technology and regulations frothed milk</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">Terms of tasting coffee</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">Terms of preparation of standard drinks line: espresso, cappuccino, latte and others.</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">Latte Art - Features practice and the importance of Latte Art in business and the barista</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">1 views Latte Art - Pitching</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">2 views Latte Art - topping</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">3 views Latte Art - Etching</p></div>
        <div className="table__row"> <div className="table__row--icon"><img src={Cross} alt="Cross" className="table__row--cross"/></div> <p className="table__row--text">4 views Latte Art - chocolate chip stencils</p></div>
      </div>
    </div>
  );
}

export default Table;
