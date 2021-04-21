
import * as React from "react";

const DependentDropdown = () => {
  
  const [selected, setSelected] = React.useState("");
  
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const marke = ["Adidas","Nike","Tommy Hilfiger"];
  const farbe = ["Rot", "Grün", "Blau", "Gelb"];
  const kategorie = ["Plastik", "Holz", "Metall", "Gummi"];
  
  let type = null;
  let count = null;
  let options = null;

  if (selected === "Marke") {
    type = marke;
    count = 1;
  } else if (selected === "Farbe") {
    type = farbe;
    count = 2;
  } else if (selected === "Kategorie") {
    type = kategorie;
    count = 3;
  }

  if (type) {
    options = type.map((el) => <option value={count} key={el}>{el}</option>);
  }

  return (
           <div className="d-flex bd-highlight example-parent">
             <div className="p-2 flex-fill bd-highlight col-6">

                 <h5>Merkmalsart: </h5>
                 <select onChange={changeSelectOptionHandler} className="browser-default custom-select">
                   <option>Wähle eine Merkmalsart aus</option>
                   <option value="Marke">Marke</option>
                   <option value="Farbe">Farbe</option>
                   <option value="Kategorie">Kategorie</option>
                 </select>

             </div>
             <div className="p-2 flex-fill bd-highlight col-6">

                <h5>{selected}:</h5>
                <select className="browser-default custom-select">
                  <option>Wähle ein Merkmal aus</option>
                  {options}
                </select>

             </div>
          </div>
  );
};

export default DependentDropdown;
