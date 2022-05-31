import Form from 'react-bootstrap/Form'
import Button from 'bootstrap/Button'

const FormComponent = () => {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formAge">
				<Form.Label>Age</Form.Label>
				<Form.Control type="number" min="15" required />
				<Form.Text className="text-muted">Introduce age player</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPosition">
				<Form.Label>Position</Form.Label>
				<Form.Select>
					<option>Country select</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formCountry">
				<Form.Select>
					<option>Country select</option>
				</Form.Select>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	)
}
export default FormComponent
