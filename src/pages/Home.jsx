import { Container } from 'react-bootstrap'
import FormComponent from '../components/FormComponent'
import Fut from "../assets/futbol.png"

const Home = () => {
	return (
		<Container className='contpage'>
			<FormComponent />
			<img src={Fut} alt="sdsd" />
		</Container>
	)
}
export default Home
