import { Button, Card, Form } from 'react-bootstrap'

import Experience from '../types/Experience'
import { useState } from 'react'

interface ExperienceModProps {
  setMod: React.Dispatch<React.SetStateAction<Experience | null>>
  mod: Experience | null
  profileid: string
  APIKEY: string
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  setRestart: React.Dispatch<React.SetStateAction<boolean>>
}

interface InitialState {
  role: string
  company: string
  startDate: string
  endDate?: string
  description: string
  area: string
}

const ExperienceMod = ({
  setMod,
  mod,
  profileid,
  APIKEY,
  setIsModified,
  setRestart,
}: ExperienceModProps) => {
  const InitialModState = {
    role: mod!.role,
    company: mod!.company,
    startDate: mod!.startDate,
    endDate: mod!.endDate,
    description: mod!.description,
    area: mod!.area,
  }

  const [formv, setFormv] = useState<InitialState>(InitialModState)

  const putExperiences = async () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profileid}/experiences/${mod?._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(formv),
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(response)
          setRestart(true)
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
          setMod({ ...mod, formv })
          putExperiences()
          setIsModified(false)
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Ruolo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Di cosa ti occupavi?"
            required
            value={formv?.role}
            onChange={(e) => setFormv({ ...formv!, role: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Azienda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Azienda?"
            required
            value={formv?.company}
            onChange={(e) => setFormv({ ...formv!, company: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Inizio</Form.Label>
          <Form.Control
            type="date"
            placeholder="Inizio lavoro"
            required
            value={formv?.startDate.slice(0, 10)}
            onChange={(e) => setFormv({ ...formv!, startDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Fine</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fine Lavoro"
            value={formv?.endDate ? formv?.endDate.slice(0, 10) : ''}
            onChange={(e) => setFormv({ ...formv!, endDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Area"
            value={formv?.area}
            onChange={(e) => setFormv({ ...formv!, area: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrizione mansioni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cosa facevi?"
            required
            value={formv?.description}
            onChange={(e) =>
              setFormv({ ...formv!, description: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Modifica Esperienza
        </Button>
      </Form>
    </Card>
  )
}
export default ExperienceMod
