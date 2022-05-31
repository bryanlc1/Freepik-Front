import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

import usePlayer from '../hooks/usePlayer'

const data = require('../data/train.json')

const FormComponent = () => {
	const navigate = useNavigate()
	// Data form
	const [formData, setFormData] = useState({
		id: 0,
		formAge: 0,
		formPosition: '',
		formCountry: '',
		formPrice: 0,
	})
	const { formAge, formPosition, formCountry, formPrice } = formData

	// Data
	const countries = new Set()
	const positions = new Set()

	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(0)

	data.forEach((player) => {
		countries.add(player.nation)
	})

	data.forEach((player) => {
		positions.add(player.position)
	})

	const sortedCountries = [...countries].sort()
	const sortedPositions = [...positions].sort()

	// Context
	const { setPlayer } = usePlayer()

	useEffect(() => {
		console.log(formData)
		if (formAge !== 0 && formPosition !== '' && formCountry !== '') {
			const sortedData = data
				.filter((player) => player.nation === formCountry)
				.filter((player) => player.age >= formAge - 5 && player.age <= formAge + 5)
				.filter((player) => player.position === formPosition)
			const prices = sortedData.map((player) => player.price)
			setMinPrice(Math.min(...prices))
			setMaxPrice(Math.max(...prices))
		}
	}, [formAge, formCountry, formData, formPosition])

	// Form functions
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const idPlayer = 9999
		setPlayer({
			id: idPlayer,
			position: formPosition,
			age: formAge,
			country: formCountry,
			price: formPrice,
		})
		navigate('results')
	}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className="mb-3" controlId="formAge">
				<Form.Label>Age</Form.Label>
				<Form.Control
					type="number"
					min="15"
					max="45"
					value={formAge}
					onChange={onChange}
					required
				/>
				<Form.Text className="text-muted">Introduce age player</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPosition">
				<Form.Label>Position</Form.Label>
				<Form.Select onChange={onChange} required>
					<option>- Choose one -</option>
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
					<option value={null}>- Choose one -</option>
					{sortedCountries.map((country) => (
						<option value={country} key={country}>
							{country}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			{formAge !== 0 && formPosition !== '' && formCountry !== '' && (
				<Form.Group className="mb-3">
					<Form.Label>Price</Form.Label>
					<InputGroup controlId="formPrice">
						<InputGroup.Text>{minPrice.toLocaleString()} €</InputGroup.Text>
						<Form.Control
							type="number"
							min={minPrice}
							max={maxPrice}
							value={formPrice < minPrice ? minPrice : formPrice}
							onChange={onChange}
							required
						/>
						<InputGroup.Text>{maxPrice.toLocaleString()} €</InputGroup.Text>
					</InputGroup>
				</Form.Group>
			)}
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	)
}
export default FormComponent
