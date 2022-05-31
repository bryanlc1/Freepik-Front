import Results from "./components/Results";
import { Container } from "react-bootstrap";
import CardPlayer from "../components/CardPlayer";
const ResultsPage = () => {
  return (
    <>
      <Container className="contpage">
        <CardPlayer />
        <Results />
      </Container>
    </>
  );
};

export default ResultsPage;
