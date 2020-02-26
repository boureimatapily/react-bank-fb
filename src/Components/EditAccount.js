import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editAccount } from './redux/actions/CatActions'
import { Link } from 'react-router-dom'

class EditAccount extends React.Component {

    updateAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: this.props.match.params.id,
            accountName:event.target.elements.accountName.value,
            accountNumber:event.target.elements.accountNumber.value,
            bankName:event.target.elements.bankName.value,
            bankBranch:event.target.elements.bankBranch.value,
        }
        this.props.editAccount(account)
        this.props.history.push('/')
    }

    render() {
        const id = this.props.match.params.id
        console.log(id)
        let account = this.props.accounts.find(item => {
            return item.id === id
        })
        console.log(account)

        return (
            <div>

                <Container>
                    <Row>

                        <Col lg={{ offset: 3 }} >
                            <Form onSubmit={this.updateAccount}>
                                <Link to="/">
                                    <p>Accounts</p>
                                </Link>
                                <Form.Group as={Row} controlId="AccountName">
                                    <Form.Label column lg={2}>
                                        Account Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="accountName"
                                         defaultValue={account.accountName}
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
                                            defaultValue={account.accountNumber}
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
                                            defaultValue={account.bankName}
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
                                            defaultValue={account.bankBranch}
                                        />
                                    </Col>
                                </Form.Group>
                                <Col className="d-flex justify-content-center">
                            <Button variant="primary" type="Submit">Update Account</Button>
                        </Col>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                


            </div>

        )

    }

}



const mapStateToProps = (state)=> {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {editAccount})(EditAccount)
