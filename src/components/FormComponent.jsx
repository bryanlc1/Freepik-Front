import { useEffect, useState, useId } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import usePlayer from '../hooks/usePlayer'

const data = require('../data/train.json')

const FormComponent = () => {
	// inicialization
	const idPlayer = useId()
	const navigate = useNavigate()
	// Data form
	const [formData, setFormData] = useState({
		id: 0,
		formAge: null,
		formPosition: '',
		formCountry: '',
		formPrice: null,
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
		if (formAge && formPosition !== '' && formCountry !== '') {
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
			<Form.Group className="mb-3"
				controlId="formAge"  >
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          min="15"
          max="45"
          value={formAge}
          placeholder="15"
          onChange={onChange}
					required
					
        />
        <Form.Text className="text-muted" >
          Min. 15 years, max 45 years
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPosition">
        <Form.Label>Position</Form.Label>
        <Form.Select onChange={onChange} required>
          <option>Choose position</option>
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
          <option>Choose country</option>
          {sortedCountries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {formAge && formPosition !== "" && formCountry !== "" && (
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <div className="d-flex w-100">
            <div className="text-light bg-secondary p-2">
              Min. {minPrice.toLocaleString()} €
            </div>
            <Form.Control
              type="number"
              min={minPrice}
              max={maxPrice}
              value={formPrice}
              placeholder="0"
              onChange={onChange}
              required
            />
            <div className="text-light bg-secondary p-2">
              Max. {maxPrice.toLocaleString()} €
            </div>
          </div>
        </Form.Group>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default FormComponent
