import React from 'react'
import { Col, ListGroupItem, Row } from "reactstrap";
import { ListaRefeicoesTypes } from '../utils/lista_refeicoes';

export type ItemProps = {
  data: ListaRefeicoesTypes
};

export default function Item(props: ItemProps) {
  return (
    <ListGroupItem>
      <Row>
        <Col md={6}>
          <p>{props.data.nome}</p>
        </Col>
        <Col md={6}>
          <p>{props.data.preco}</p>
        </Col>
        <Col md={12}>
          <p>{props.data.descricao}</p>
        </Col>
      </Row>
    </ListGroupItem>
  )
}
