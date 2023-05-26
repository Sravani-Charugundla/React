import React from "react";
const Dropdown = (props) =>
{
    console.log("drop",props.ord);
    
    return(
        <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Products
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Product 1
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Product 2
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Product 3
      </a>
    </li>
  </ul>
</div>
    )
}
export default Dropdown;