import { OutputInterfaceProps } from "../interfaces/interfaces";
import { formatToCurrency } from "../CustomHooks/reducerMethods";
import { useState } from "react";

function OutputInterface({state, totalPayment, handleChange}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);
const [menuOpenAt, setMenuOpenAt] = useState(-1);

return (
      <table className="output-section flex-center">
	<thead>
	  <tr>
	    <th className="qty">Uds.</th>
	    <th className="client">Paciente</th>
	    <th className="product">Producto</th> <th className="price">Precio</th>
	    <th className="delete">Delete</th>
	  </tr>
	</thead>
	<tbody>
	{outputState.map((currentValue, index) => {
	  return (
	      menuOpenAt != index ?

	      <tr key={index} onClick={()=> setMenuOpenAt(index)} >
		<td className="qty" >{currentValue.productQuantity}</td>
		<td className="client">{currentValue.clientName}</td>
		<td className="product">{currentValue.productName}</td>
		<td className="price">{formatToCurrency(currentValue.totalPrice)}</td>
		<td className="delete"><button onClick={()=> handleChange(undefined, index, 'delete')}>Delete</button></td>
	      </tr>

	      : 

	      <tr className="table-delete-menu" onClick={()=> setMenuOpenAt(-1)}>
	      <td></td>
	      <td colSpan={2} className="menu-delete-header">¿Deseas eliminar este cargo?</td>
	      <td><button onClick={()=> handleChange(undefined, index, 'delete')}>Si</button></td>
	      </tr>
	  )
	})}
	</tbody>
	<tfoot>
	<tr>
	<th></th>
	<th></th>
	<td><b>Total:$</b>{formatToCurrency(totalPayment)}</td>
	</tr>
	</tfoot>
      </table>
      )
}
export default OutputInterface;
