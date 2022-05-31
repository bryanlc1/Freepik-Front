import { Container } from 'react-bootstrap'
import FormComponent from '../components/FormComponent'
import Fut from "../assets/futbol.png"
import { Link } from 'react-router-dom';

const Home = () => {
	return (
    <Container className="contpage">
      <FormComponent />
      <div>
        <img src={Fut} alt="futbolista" className="futbol" />
        <div>
          <Link
            to={{pathname:'"https://www.flaticon.es/stickers-gratis/futbol-americano"'}}
			target='_blank'
          >
            Fútbol stickers creadas por Stickers - Flaticon
          </Link>
        </div>
      </div>
    </Container>
  );
}
export default Home
