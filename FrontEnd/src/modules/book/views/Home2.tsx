import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Pagination, PaginationLink, PaginationItem, Table, Badge, Button,
} from 'reactstrap';
import Moment from 'moment';
import { resolve } from 'dns';
import { Link } from 'react-router-dom';

class BookHome extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      redux: this.props.redux,
      items: []
    };

    this.toggleSmall = this.toggleSmall.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:3001/book`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('response: ' + JSON.stringify(json));
      this.setState({ items: json.book });
      console.log('response: ' + json.book);
    } catch (error) {
      console.log(error);
    }
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  render() {
    const { res, err } = this.state;

    const items = this.state.items.map((item: any) => {
      return (
        <tr key={item.id}>
          <td>{item.code}</td>
          <td>{item.title}</td>
          <td>{item.publisher}</td>
          <td>{item.releaseDate}</td>
          <td>{"Rp. "+Number(item.price.toFixed(1)).toLocaleString()}</td>
          <td><Button block color="secondary">Edit</Button></td>
        </tr>
        )
      })
    
    return (
      <div className="animated fadeIn">
        <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Books
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                <tr>
                  <th>Book Code</th>
                  <th>Title</th>
                  <th>Publisher</th>
                  <th>Publish Date</th>
                  <th>Price</th>
                  <th>Edit</th>
                </tr>
                  {items}
                  <br></br>  
                <Link to='/add'>
                  <Button block color="primary">New Book</Button>
                </Link>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>

        <Modal isOpen={this.state.small} toggle={this.toggleSmall} className="modal-sm modal-danger">
          <ModalHeader toggle={this.toggleSmall}>Error</ModalHeader>
          <ModalBody>{err}</ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  redux: state.redux,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BookHome);
