import { Button, Card, Form } from 'react-bootstrap'
import Experience from '../types/Experience'

interface ExperienceAddProps {
  setAdd: React.Dispatch<React.SetStateAction<Experience>>
  add: Experience | null
  profileid: string
  APIKEY: string
}

const ExperienceAdd = ({
  setAdd,
  add,
  profileid,
  APIKEY,
}: ExperienceAddProps) => {
  const putExperiences = async () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profileid}/experiences`,
      {
        method: 'POST',
        body: JSON.stringify(add),
        headers: {
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Card>
      <Form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault()
          putExperiences()
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Ruolo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Di cosa ti occupavi?"
            required
            value={add!.role}
            onChange={(e) => setAdd({ ...add!, role: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Azienda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Azienda?"
            required
            value={add!.company}
            onChange={(e) => setAdd({ ...add!, company: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Inizio</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Inizio lavoro"
            required
            value={add!.startDate}
            onChange={(e) => setAdd({ ...add!, startDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Fine</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Fine Lavoro"
            value={add!.endDate}
            onChange={(e) => setAdd({ ...add!, endDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Area"
            value={add!.area}
            onChange={(e) => setAdd({ ...add!, area: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrizione mansioni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cosa facevi?"
            required
            value={add!.description}
            onChange={(e) => setAdd({ ...add!, description: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crea Esperienza
        </Button>
      </Form>
    </Card>
  )
}
export default ExperienceAdd
