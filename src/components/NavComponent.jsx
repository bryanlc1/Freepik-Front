import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import fee from '../assets/freepik.png'

function NavComponent() {
	return (
		<div className="nav">
			<Navbar bg="dark" variant="dark" fixed="top" expand="sm" className="margin-b">
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<i className="fi fi-rr-football freepik"></i> Front-end
						</Link>
					</Navbar.Brand>
					<Nav.Link>
						<Link to="/players">Players</Link>
					</Nav.Link>
					<img src={fee} alt="hh" />
				</Container>
			</Navbar>
		</div>
	)
}

export default NavComponent
