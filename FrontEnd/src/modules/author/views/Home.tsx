import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Button, Table, Pagination, PaginationLink, PaginationItem,
} from 'reactstrap';
import Moment from 'moment';

import { authorFetch, authorDelete } from '../ActionAuthor';
import { AUTHORSUCESS, AUTHORFAIL } from '../ConfigAuthor';
import { Link } from 'react-router-dom';

class AUTHORHome extends Component<any, any> {
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
    console.log("Delete AUTHOR");
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
      if (nextProps.action === AUTHORFAIL) nextErr = nextProps.err;

      let nextRes = prevState.res;
      if (nextProps.action === AUTHORSUCESS) nextRes = nextProps.res;

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
      if (this.state.action === AUTHORFAIL) {
        this.toggleSmall();
      }
    }
  }

  componentDidMount() {
    this.props.onRequest();
  }

  render() {
    const { res, err } = this.state;
    // let authors = null
    // if(res && res.length >0){
    //   authors = res.map((author: any, key: number) => {
    //     return (
    //       <tr key={key.toString()}>
    //         <td>{author.code}</td>
    //         <td>{author.title}</td>
    //         <td>{author.publisher}</td>
    //         <td>{author.releaseDate}</td>
    //         <td>{"Rp. "+Number(author.price.toFixed(1)).toLocaleString()}</td>
    //         <td><Button block color="secondary" onClick={this.deleteItem.bind(this, author.code)}>DELETE</Button></td>
    //       </tr>
    //     )
    //   })
    // }
    
    return (
      <div className="animated fadeIn">
        {/* <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> AUTHORs
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                <tr>
                  <th>AUTHOR Code</th>
                  <th>Title</th>
                  <th>Publisher</th>
                  <th>Publish Date</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
                  {authors}
                  <br></br>  
                <Link to='/add'>
                  <Button block color="primary">New AUTHOR</Button>
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
        </Modal> */}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.author.fetch,
  res: state.author.res,
  err: state.author.err,
  action: state.author.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: object) => dispatch(authorFetch(value)),
  deleteItem: (value: object) => dispatch(authorDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AUTHORHome);
