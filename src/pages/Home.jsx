import { Container } from 'react-bootstrap'
import FormComponent from '../components/FormComponent'
import Fut from "../assets/futbol.png"

const Home = () => {
	return (
    <Container className="contpage">
      <FormComponent />
      <div>
        <img src={Fut} alt="futbolista" className="futbol" />
        <div>
          <a
            href="https://www.flaticon.es/stickers-gratis/futbol-americano"
            title="fútbol americano stickers"
          >
            Fútbol americano stickers creadas por Stickers - Flaticon
          </a>
        </div>
      </div>
    </Container>
  );
}
export default Home
