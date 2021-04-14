
import * as React from "react";

const DependentDropdown = () => {
  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = React.useState("");

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  /** Different arrays for different dropdowns */
  const marke = ["Adidas","Nike","Tommy Hilfiger"];
  const farbe = ["Rot", "Grün", "Blau", "Gelb"];
  const material = ["Plastik", "Holz", "Metall", "Gummi"];

  /** Type variable to store different array for different dropdown */
  let type = null;

  /** Assigns value to option tag by count */
  let count = null;

  /** This will be used to create set of options that user will see */
  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Marke") {
    type = marke;
    count = 1;
  } else if (selected === "Farbe") {
    type = farbe;
    count = 2;
  } else if (selected === "Material") {
    type = material;
    count = 3;
  }

  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
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
                   <option value="Material">Material</option>
                 </select>

             </div>
             <div className="p-2 flex-fill bd-highlight col-6">

                 <h5>{selected}:</h5>
                 <select className="browser-default custom-select">
                   {
                     /** This is where we have used our options variable */
                     options
                   }
                 </select>

             </div>
          </div>
  );
};

export default DependentDropdown;
