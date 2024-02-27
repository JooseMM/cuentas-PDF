import { OutputInterfaceProps } from "../interfaces/interfaces";

function OutputInterface({state, totalPayment, handleChange}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);

function formatToCurrency(amout: number):string {
  console.log("execute");
  return amout.toLocaleString('es-ES');
}
return (
      <table className="output-section flex-center">
	<thead>
	  <tr>
	    <th className="qty">Cantidad</th>
	    <th>Paciente</th>
	    <th className="product">Producto</th> <th className="price">Precio</th>
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
		<td className="price">{formatToCurrency(currentValue.totalPrice)}</td>
		<td className="delete"><button onClick={()=> handleChange(undefined, index, 'delete')}>Delete</button></td>
	      </tr>
	  )
	})}
	</tbody>
	<tfoot>
	<tr>
	<th></th>
	<th></th>
	{ totalPayment > 0 ? <td><b>Total: $</b>{formatToCurrency(totalPayment)}</td>: null }
	</tr>
	</tfoot>
      </table>
      )
}
export default OutputInterface;
