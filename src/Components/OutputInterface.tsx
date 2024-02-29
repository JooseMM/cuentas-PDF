import { OutputInterfaceProps } from "../interfaces/interfaces";
import { formatToCurrency } from "../CustomHooks/reducerMethods";
import { useState } from "react";

function OutputInterface({state, totalPayment, handleChange}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);
const [menuOpenAt, setMenuOpenAt] = useState(-1);

return (
      <div className="output-section ">
	  <ul className="table-head grid-table">
	    <li >Uds.</li>
	    <li className="client-column">Paciente</li>
	    <li >Producto</li>
	    <li >Precio</li>
	    <li className="desktop-delete-btn">Delete</li>
	  </ul>
	  <ul>
	    {outputState.map((element, index)=> {
	      return (
	      menuOpenAt != index ? 
	      <li className="grid-table body-table" onClick={()=> setMenuOpenAt(index)}>
		<span>{element.productQuantity}</span>
		<span className="bold">{element.clientName}</span>
		<span>{element.productName}</span>
		<span className="bold">$ {formatToCurrency(element.totalPrice)}</span>
		<button className="desktop-delete-btn" onClick={() => handleChange(undefined, index, 'delete')}>Delete</button>
	      </li>
	      : 
	      <li className="body-table delete-menu" onClick={() => setMenuOpenAt(-1)}><span>¿Deseas eleminar este cargo?</span><button onClick={()=>handleChange(undefined, index, 'delete')} className="delete-button">Si</button></li>
	      )
	    })}
	    <li className="total-payment-row"><span className="bold">TOTAL:&nbsp;</span>${formatToCurrency(totalPayment)}</li>
	  </ul>

      </div>
      )
}
export default OutputInterface;
