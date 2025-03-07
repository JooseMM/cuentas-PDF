import CustomForm from "../CustomForm/CustomForm";
import ChargeTable from "../Table/ChargeTable";
import "./Home.css";
import { useCustomFormState } from "../../CustomHooks/useAccountState";

function Home() {
  const {
    singleCharge,
    order,
    handleSumit,
    handleChargeChange,
    handleClientInfoChange,
    handleClear,
    handleDelete,
    handleEdit,
    modifiyingAt,
  } = useCustomFormState();
  return (
    <main className="main-container">
      <CustomForm
        singleCharge={singleCharge}
        order={order}
        handleClientInfoChange={handleClientInfoChange}
        handleSubmit={handleSumit}
        handleChargeChange={handleChargeChange}
        modifiyingAt={modifiyingAt}
      />
      {order.charges.length > 0 && (
        <div className="output-section">
          <ChargeTable
            modifyingAt={modifiyingAt}
            order={order}
            handleDelete={handleDelete}
            handleClear={handleClear}
            handleEdit={handleEdit}
          />
        </div>
      )}
    </main>
  );
}
export default Home;
/*
						<PDFDownloadLink
							className="download-btn"
							document={<PDFDocument state={chargeList} />}
							fileName='Cuenta de Cobro'
						>
							Descargar
						</PDFDownloadLink>
 *
 */
