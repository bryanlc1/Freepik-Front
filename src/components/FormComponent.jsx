import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const data = require('../data/train.json')

const FormComponent = () => {
	// Data form
	const [formData, setFormData] = useState({})
	const { formAge, formPosition, formCountry } = formData

	// Data
	const countries = new Set()
	const positions = new Set()

	data.forEach((player) => {
		countries.add(player.nation)
	})

	data.forEach((player) => {
		positions.add(player.position)
	})

	const sortedCountries = [...countries].sort()
	const sortedPositions = [...positions].sort()

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formAge">
				<Form.Label>Age</Form.Label>
				<Form.Control type="number" min="15" value={formAge} onChange={onChange} required />
				<Form.Text className="text-muted">Introduce age player</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPosition">
				<Form.Label>Position</Form.Label>
				<Form.Select onChange={onChange} required>
					<option value="all">Choose one</option>
					{sortedPositions.map((position) => (
						<option value={position} key={position}>
							{position}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formCountry">
				<Form.Label>Country</Form.Label>
				<Form.Select onChange={onChange} required>
					<option value="all">Choose one</option>
					{sortedCountries.map((country) => (
						<option value={country} key={country}>
							{country}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	)
}
export default FormComponent
