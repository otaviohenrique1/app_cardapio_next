import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'reactstrap'
import Item from '../components/Item';
import { ListaRefeicoesTypes, lista_refeicoes } from '../utils/lista_refeicoes'

export default function HomePage() {
  const [data, setData] = useState<ListaRefeicoesTypes[]>([]);

  useEffect(() => {
    setData(lista_refeicoes);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Cardapio App</h1>
        </Col>
        <Col md={12}>
          <ListGroup>
            {data.map((item, index) => {
              return (
                <Item
                  key={index}
                  data={item}
                />
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
