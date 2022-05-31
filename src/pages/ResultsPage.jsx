import Results from '../components/Results'
import { Container } from 'react-bootstrap'
import CardPlayer from '../components/CardPlayer'
import usePlayer from '../hooks/usePlayer'

const ResultsPage = () => {
	const { player } = usePlayer()
	return (
		<>
			<Container className="contpage">
				<div className="singleCard mb-5 mx-auto">
					<CardPlayer player={player} />
				</div>
				<Results />
			</Container>
		</>
	)
}

export default ResultsPage
