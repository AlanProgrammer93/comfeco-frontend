import React from 'react'
import { Button, Col, Label, Row } from 'reactstrap'

export const HeaderActionButton = ({ label, text, ...rest }) => (
  <Row>
    <Col className="d-flex align-items-center">
      <Label for="id-button-header-action" className="p-4 font-size-14">
        {label}
      </Label>
      <Button
        outline
        color="primary"
        data-testid="JqTayoZFEj-QA"
        id="id-button-header-action"
        className="rounded-pill font-size-14"
        style={{ paddingLeft: '1.8rem', paddingRight: '1.8rem', height: 40 }}
        {...rest}
      >
        {text}
      </Button>
    </Col>
  </Row>
)


