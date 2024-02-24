import { InputInterfaceProps } from "../interfaces/interfaces";

function InputInterface ({state, handleChange}:InputInterfaceProps) {
const currentIndex = state.length - 1;
const currentYear = 2024;
  return (
	  <form onSubmit={(event)=> handleChange(event, true, "finish")}
	className="input-section">
	<h1>JM</h1>
	<div className="input-row">
	  <div className="single-input">
	    <label htmlFor='client-name'>Paciente</label>
	    <input type="text" id="client-name" 
	    placeholder="Ejem. Jose Moreno"
	    value={state[currentIndex].clientName} 
	    onChange={(e)=> handleChange(undefined, e.target.value, 'clientName')}
	    />
	  </div>
	    <div className="single-input">
	      <label htmlFor='client-seller'>Doctor</label>
	      <input type="text" id="client-seller" 
	      placeholder="Ejem. Gonzalo Ramirez"
	      value={state[currentIndex].clientSeller} 
	      onChange={(e)=> handleChange(undefined, e.target.value, 'clientSeller')}
	      />
	    </div>
	    </div>
	    <div className="input-row">
	    <div className="single-input">
	      <label htmlFor='client-branch'>Clinica</label>
	      <input type="text" id="client-branch" 
	      placeholder="Ejem. Smile Request"
	      value={state[currentIndex].branch}
	      onChange={(e)=> handleChange(undefined, e.target.value, 'branch')}/>
	    </div>
	    <div className="single-input">
	      <label htmlFor='product-name'>Producto</label>
	      <input type="text" id="product-name" 
	      placeholder="Corona Zirconio"
	      value={state[currentIndex].productName}
	      onChange={(e)=> handleChange(undefined, e.target.value, 'productName')}
	      />
	    </div>
	    </div>
	    <div className="input-row">
	    <div className="single-input">
	      <label htmlFor='product-price'>Cantidad</label>
	      <input type="number" id="product-price" 
	      value={state[currentIndex].productPrice}
	      onChange={(e)=> handleChange(undefined, e.target.value, 'productPrice')}
	      />
	    </div>
	      <div className="single-input">
	      <label htmlFor='product-price'>Año</label>
	      <input type="number" id="product-price" 
	      disabled
	      value={currentYear}
	      />
	      </div>
	    </div>
	  <button className="add-button" type='submit'>Add purchase</button>
	</form>
  );
}
export default InputInterface;
