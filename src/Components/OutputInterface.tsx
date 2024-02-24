import { OutputInterfaceProps } from "../interfaces/interfaces";

function OutputInterface({state, total}:OutputInterfaceProps){
const outputState = state.slice(0, state.length - 1);
console.log(total)
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
		<td className="price">{`$${currentValue.productPrice}`}</td>
		<td className="delete"><button>Delete</button></td>
	      </tr>
	  )
	})}
	</tbody>
	<tfoot>
	<tr>
	<th></th>
	<th></th>
	<td><b>total: $</b>{total}</td>
	</tr>
	</tfoot>
      </table>
      )
}
export default OutputInterface;
