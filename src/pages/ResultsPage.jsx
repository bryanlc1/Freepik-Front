import Results from "./ResultsPage";
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
