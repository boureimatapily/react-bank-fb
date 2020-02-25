import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect} from 'react-redux'
import  {addNewAccount}  from './redux/actions/CatActions'
import { Link } from 'react-router-dom'

class AddAccount extends React.Component{

    addAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: Math.random().toString(36).substr(2, 5),
            accountName:event.target.elements.accountName.value,
            accountNumber:event.target.elements.accountNumber.value,
            bankName:event.target.elements.bankName.value,
            bankBranch:event.target.elements.bankBranch.value,
        }
        this.props.addNewAccount(account)
        //this.props.history.push('/')
    }

        render(){
           
            return(
                <div>

                <Container>
                    <Row>

                        <Col  lg={{offset: 3 }} >
                            <Form onSubmit={this.addAccount}>
                                <Form.Group as={Row} controlId="AccountName">
                                    <Form.Label column lg={2}>
                                        Account Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="accountName"
                                             placeholder="Account Name"
                                             />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="anumber">
                                    <Form.Label column lg={2}>
                                        Account Number
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="accountNumber"
                                         placeholder="Account Number"
                                            />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="bname">
                                    <Form.Label column lg={2}>
                                        Bank Name
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="bankName"
                                             placeholder="Bank Name"
                                            />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="bbranch">
                                    <Form.Label column lg={2}>
                                        Bank Branch
                              </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="bankBranch"
                                             placeholder="Bank Branch"
                                             />
                                    </Col>
                                </Form.Group>
                                <Col className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">Add Account</Button>
                        </Col>
                            </Form>
                        </Col>

                    </Row>
                </Container>


                </div>

            )
        
        }
        
}

const mapDispatchToProps = {
    addNewAccount
}


export default connect(null, mapDispatchToProps)(AddAccount)
