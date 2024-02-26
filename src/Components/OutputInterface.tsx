import { useEffect } from "react";
import { OutputInterfaceProps } from "../interfaces/interfaces";

function OutputInterface({state, totalPayment, setTotalPayment, handleChange}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);
useEffect(()=> {
  setTotalPayment(()=> state.reduce((accumulator, currentElement)=> accumulator + currentElement.totalPrice, 0))
}, [state.length])
return (
      <table className="output-section flex-center">
	<thead>
	  <tr>
	    <th className="qty">Cantidad</th>
	    <th>Paciente</th>
	    <th className="product">Producto</th>
	    <th className="price">Precio</th>
	    <th className="delete">Delete</th>
	  </tr>
	</thead>
	<tbody>
	{outputState.map((currentValue, index) => {
	  return (
	      <tr key={index}>
		<td className="qty" >{currentValue.productQuantity}</td>
		<td className="client">{currentValue.clientName}</td>
		<td className="product">{currentValue.productName}</td>
		<td className="price">{currentValue.totalPrice.toLocaleString('es-ES')}</td>
		<td className="delete"><button onClick={()=> handleChange(undefined, index, 'delete')}>Delete</button></td>
	      </tr>
	  )
	})}
	</tbody>
	<tfoot>
	<tr>
	<th></th>
	<th></th>
	{ totalPayment > 0 ? <td><b>total: $</b>{totalPayment.toLocaleString('es-ES')}</td>: null }
	</tr>
	</tfoot>
      </table>
      )
}
export default OutputInterface;
