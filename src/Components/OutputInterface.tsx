import { OutputInterfaceProps } from "../interfaces/interfaces";
import { formatToCurrency } from "../CustomHooks/reducerMethods";
import { useState } from "react";
import DeleteSVG from "../assets/delete.svg";

function OutputInterface({state, totalPayment, handleChange}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);
const [menuOpenAt, setMenuOpenAt] = useState(-1);
return (
      <div className="output-section ">
	  <ul className="table-head grid-table">
	    <li>Uds.</li>
	    <li >Paciente</li>
	    <li >Producto</li>
	    <li>Precio</li>
	    <li className="delete-column">Delete</li>
	  </ul>
	  <ul>
	    {outputState.map((element, index)=> {
	      return (
	      menuOpenAt == index ? 
	      <li className="body-table delete-menu" onClick={() => setMenuOpenAt(-1)}><span>¿Deseas eleminar este cargo?</span><button onClick={()=>handleChange(undefined, index, 'delete')} className="mobile-delete-button">Si</button></li>
	      : 
	      <li className="grid-table body-table" onClick={()=> window.innerWidth < 800 ? setMenuOpenAt(index) : null}>
		<span>{element.productQuantity}</span>
		<span className="wrap-text">{element.clientName}</span>
		<span className="wrap-text">{element.productName}</span>
		<span>$&nbsp;&nbsp;{formatToCurrency(element.totalPrice)}</span>
		<button className="desktop-delete-btn" onClick={() => handleChange(undefined, index, 'delete')}>
		  <img src={DeleteSVG} width={30} height={30} alt="delete charge"/>
		</button>
	      </li>
	      )
	    })}
	    <li className="total-payment-row"><span className="bold">TOTAL:&nbsp;&nbsp;</span>${formatToCurrency(totalPayment)}</li>
	  </ul>

      </div>
      )
}
export default OutputInterface;
