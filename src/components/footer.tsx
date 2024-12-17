//Your access token for Token Based Authentication is eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWNkNTBlYTI4NjAwMTUyOGI5MzgiLCJpYXQiOjE3MzQzMzk4MDgsImV4cCI6MTczNTU0OTQwOH0.5HPfvkSAPZ28-rx1k9NO_gj8CHPY87IhvozKa7wxX4s" 

// interface HeroProps {
//   profile: Profile
//   isLoading: boolean
//   isError: boolean
// }
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className="container-fluid d-flex ">
        <Row>
        <Col className="d-flex col-12 col-lg-2 justify-content-between ">
        <p><a href="#">Informazioni</a></p>
        <p><a href="#">Informativa sulla community professionale</a></p>
        <DropdownButton id="dropdown-item-button" title="Privacy e condizioni">
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item as="button">Informativa sulla privacy</Dropdown.Item>
            <Dropdown.Item as="button">Contratto di licenza</Dropdown.Item>
            <Dropdown.Item as="button">Termini e condizioni delle pagine</Dropdown.Item>
            <Dropdown.Item as="button">Informativa sui cookie</Dropdown.Item>
            <Dropdown.Item as="button">Informativa sul copyright</Dropdown.Item>
            <Dropdown.Item as="button">Opzioni relative all'Informativa sulla Privacy &lparStato della California&rpar</Dropdown.Item>
        </DropdownButton>
        <p><a href="#">Sales Solutions</a></p>
        <p><a href="#">Centro sicurezza</a></p>
        </Col>

        <Col className="d-flex col-12 col-lg-2 justify-content-between ">
        <p><a href="#">Accesibilità</a></p>
        <p><a href="#">Carriera</a></p>
        <p><a href="#">Opzioni per gli annunci pubblicitari</a></p>
        <p><a href="#">Mobile</a></p>
        </Col>

        <Col className="d-flex col-12 col-lg-2 justify-content-between ">
        <p><a href="#">Talent Solution</a></p>
        <p><a href="#">Soluzioni di marketing</a></p>
        <p><a href="#">Pubblicità</a></p>
        <p><a href="#">Piccole imprese</a></p>
        </Col>

        <Col className="d-flex col-12 col-lg-3 justify-content-between ">
        <div>
            <div><i className="bi bi-question-circle-fill"></i></div>
            <div>
                <p>Domande?</p>
                <p>Visita il nostro Centro assistenza</p>
            </div>
        </div>
        <div>
            <div><i className="bi bi-gear-fill"></i></div>
            <div>
                <p>Gestisci il tuo account e la tua Privacy</p>
                <p>Vai alle impostazioni</p>
            </div>
        </div>
        <div>
            <div><i className="bi bi-shield-fill"></i></div>
            <div>
                <p>Trasparenza sui contenuti consigliati </p>
                <p>Scopri di più sui contenuti consigliati.</p>
            </div>
        </div>
        </Col>
        <Col className="col col-lg-3 justify-content-between ">
        <p>Seleziona lingua</p>
        <Form.Select aria-label="Default select example">
            <option>Italiano</option>
            <option value="1">Français</option>
            <option value="2">English</option>
            <option value="3">Spagnolo</option>
        </Form.Select>
        </Col>
        </Row>
    </Container>
  )
}

export default Footer