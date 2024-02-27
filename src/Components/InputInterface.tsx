import { InputInterfaceProps } from "../interfaces/interfaces";

function InputInterface ({state, handleChange}:InputInterfaceProps) {
const currentIndex = state.length - 1;
  return (
	  <form onSubmit={(event)=> handleChange(event, true, "finish")}
	className="input-section">
	<h1>JM</h1>
	<div className="input-row">
	  <div className="single-input">
	      <label htmlFor='productQuantity'>Cantidad</label>
	      <input type="number" id="productQuantity" 
	      value={state[currentIndex].productQuantity}
	      step={1}
	      min={0}
	      max={100}
	      required
	      onChange={(e)=> handleChange(undefined, e.target.value, 'productQuantity')}
	      />
	  </div>
	    <div className="single-input">
	      <label htmlFor='productName'>Producto/Servicio</label>
	      <input type="text" id="productName" 
	      placeholder="Corona Zirconio"
	      value={state[currentIndex].productName}
	      onChange={(e)=> handleChange(undefined, e.target.value, 'productName')}
	      required
	      />
	    </div>
	    </div>
	    <div className="input-row">
	    <div className="single-input">
	      <label htmlFor='productPrice'>Precio</label>
	      <input type="number" id="productPrice" 
	      value={state[currentIndex].productPrice}
	      step={1000}
	      min={0}
	      required
	      onChange={(e)=> handleChange(undefined, e.target.value, 'productPrice')}
	      />
	    </div>
	    <div className="single-input">
	      <label htmlFor='clientName'>Paciente</label>
	      <input type="text" id="clientName" 
	      placeholder="Ejem. Jose Moreno"
	      required
	      value={state[currentIndex].clientName} 
	      onChange={(e)=> handleChange(undefined, e.target.value, 'clientName')}
	      />
	    </div>
	    </div>
	    <div className="input-row">
	    <div className="single-input">
	      <label htmlFor='clientSeller'>Doctor</label>
	      <input type="text" id="clientSeller" 
	      required
	      placeholder="Ejem. Gonzalo Ramirez"
	      value={state[0].clientSeller} 
	      disabled={ state.length > 1 ? true : false }
	      onChange={(e)=> handleChange(undefined, e.target.value, 'clientSeller')}
	      />
	    </div>
	      <div className="single-input">
		<label htmlFor='clientBranch'>Clinica</label>
		<input type="text" id="clientBranch" 
		placeholder="Ejem. Smile Request"
		required
		value={state[0].branch}
		disabled={ state.length > 1 ? true : false }
		onChange={(e)=> handleChange(undefined, e.target.value, 'branch')}/>
	      </div>
	    </div>
	  <button className="add-button" type='submit'>Agregar</button>
	</form>
  );
}
export default InputInterface;
