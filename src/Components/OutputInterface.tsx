import { PurchaseDetails } from "../interfaces/interfaces";

function OutputInterface({state}:{state: PurchaseDetails[]}){
return (
      <div className="output-section flex-center">
	{state.map((currentValue, index) => {
	  return (
	  <ul key={index}>
	    <li >Id:{index}</li>
	    <li >{currentValue.clientName}</li> 
	    <li >{currentValue.productPrice}</li>
	    <li >{currentValue.productName}</li> 
	    </ul>
	  )

	})}
      </div>
      )
}
export default OutputInterface;
