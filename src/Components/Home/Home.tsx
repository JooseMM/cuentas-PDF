import CustomForm from '../CustomForm/CustomForm';
import ChargeTable from '../Table/ChargeTable';
import './Home.css'
import { useCustomFormState } from '../../CustomHooks/useAccountState';

function Home() {
	const { singleCharge, order, handleSumit, handleChargeChange, handleClientInfoChange } = useCustomFormState();
	return (
		<main className="main-container">
			<CustomForm
				singleCharge={singleCharge}
				order={order}
				handleClientInfoChange={handleClientInfoChange}
				handleSubmit={handleSumit}
				handleChargeChange={handleChargeChange}
			/>
			{order.charges.length > 0 && <div className="output-section">
				<ChargeTable chargeList={order.charges} deleteAt={() => null} />
			</div>}
		</main>
	)
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
