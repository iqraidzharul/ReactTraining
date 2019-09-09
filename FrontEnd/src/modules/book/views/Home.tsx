import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Button, Table, Pagination, PaginationLink, PaginationItem,
} from 'reactstrap';
import Moment from 'moment';

import { bookFetch, bookDelete } from '../ActionBook';
import { BOOKSUCESS, BOOKFAIL } from '../ConfigBook';
import { Link } from 'react-router-dom';
import { authorFetch } from '../../author/ActionAuthor';

class BookHome extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      action: this.props.action,
      err: this.props.err,
      res: this.props.res,
      small: false,
    };

    this.toggleSmall = this.toggleSmall.bind(this);
  }

  deleteItem = (code: String) => {
    console.log("Delete Book");
    console.log(code);
    const data = {
      'code': code
    };
    this.props.deleteItem(data);
    window.location.reload();
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.action !== prevState.action) {
      let nextErr = prevState.err;
      if (nextProps.action === BOOKFAIL) nextErr = nextProps.err;

      let nextRes = prevState.res;
      if (nextProps.action === BOOKSUCESS) nextRes = nextProps.res;

      return {
        action: nextProps.action,
        err: nextErr,
        res: nextRes,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.action !== this.state.action) {
      if (this.state.action === BOOKFAIL) {
        this.toggleSmall();
      }
    }
  }

  componentDidMount() {
    this.props.onRequest();
  }

  render() {
    const { res, err } = this.state;
    let books = null
    if(res && res.length >0){
      books = res.map((book: any, key: number) => {
        return (
          <tr key={key.toString()}>
            <td>{book.code}</td>
            <td>{book.title}</td>
            <td>{book.publisher}</td>
            <td>{book.releaseDate}</td>
            <td>{"Rp. "+Number(book.price.toFixed(1)).toLocaleString()}</td>
            <td><Button block color="secondary" onClick={this.deleteItem.bind(this, book.code)}>DELETE</Button></td>
          </tr>
        )
      })
    }
    
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
                  <th>Delete</th>
                </tr>
                  {books}
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
  fetch: state.book.fetch,
  res: state.book.res,
  err: state.book.err,
  action: state.book.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: object) => dispatch(bookFetch(value)),
  deleteItem: (value: object) => dispatch(bookDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookHome);
