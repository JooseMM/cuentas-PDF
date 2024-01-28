import { InputInterfaceProps } from "../interfaces/interfaces";

function InputInterface ({state, handleChange}:InputInterfaceProps) {
const currentIndex = state.length - 1;
  return (
	  <form onSubmit={(event)=> handleChange(event, true, "finish")}
	className="input-section flex-center">
	<h1>Data</h1>
	  <label htmlFor='client-name'>Client name</label>
	  <input type="text" id="client-name" 
	  value={state[currentIndex].clientName} 
	  onChange={(e)=> handleChange(undefined, e.target.value, 'clientName')}
	  />
	  <label htmlFor='client-seller'>Client seller</label>
	    <input type="text" id="client-seller" 
	    value={state[currentIndex].clientSeller} 
	    onChange={(e)=> handleChange(undefined, e.target.value, 'clientSeller')}
	    />
	  <label htmlFor='client-branch'>Client branch</label>
	  <input type="text" id="client-branch" 
	  value={state[currentIndex].branch}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'branch')}
	  />
	  <label htmlFor='product-name'>Product</label>
	  <input type="text" id="product-name" 
	  value={state[currentIndex].productName}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'productName')}
	  />
	  <label htmlFor='product-price'>Product Name</label>
	  <input type="number" id="product-price" 
	  value={state[currentIndex].productPrice}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'productPrice')}
	  />
	  <button type='submit'>Add purchase</button>
	</form>
  );
}
export default InputInterface;
