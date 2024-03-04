import { Col, Container, Row } from 'react-bootstrap';
import Square from './Square/Square';
import './home.scss';

export default function Home(): JSX.Element {
	return (
		<>
			<Container className="text-center">
				<Row className="justify-content-center">
					<Square />
					<Square />
					<Square />
				</Row>
				<Row className="justify-content-center">
					<Square />
					<Square />
					<Square />
				</Row>
				<Row className="justify-content-center">
					<Square />
					<Square />
					<Square />
				</Row>
			</Container>
		</>
	);
}
