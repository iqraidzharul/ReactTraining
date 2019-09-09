import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Button, Table, Pagination, PaginationLink, PaginationItem, FormGroup, Form, Label, Input, CardFooter,
} from 'reactstrap';
import Moment from 'moment';

import { bookFetch, bookAdd } from '../ActionBook';
import { BOOKSUCESS, BOOKFAIL } from '../ConfigBook';
import { Link } from 'react-router-dom';
import { authorFetch } from '../../author/ActionAuthor';
import { categoryFetch } from '../../category/ActionCategory';

class BookAdd extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      action: this.props.action,
      err: this.props.err,
      res: this.props.res,
      author: this.props.author,
      category: this.props.category,
      small: false,

      code: String,
      title: String,
      publisher: String,
      releaseDate: Date,
      price: String,
      categories: String,
      authors: String,
    };

    this.toggleSmall = this.toggleSmall.bind(this);
  }

  onChange = (e: { target: { name: any; value: any; }; }) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
    console.log(this.state.code)
  }

  submitForm = (e: { preventDefault: () => void; }) => {
    console.log("Submit Form");
    console.log(this.state.code);
    const data = {
      'code': this.state.code,
      'title': this.state.title,
      'publisher': this.state.publisher,
      'releaseDate': this.state.releaseDate,
      'price': this.state.price,
      'categories': new Array(this.state.categories),
      'authors': new Array(this.state.authors),
    };
    this.props.onSubmit(data)
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
    this.props.getAuthor();
    this.props.getCategory();
  }

  render() {
    const { res, err, author, category } = this.state;
    let categoryOptions = null;
    let authorOptions = null;
    if(category && category.length >0){
      categoryOptions = category.map((category: any, key: number) => {
        return (
          <option key={key.toString()} value={category.name}>{category.name}</option>
          )
        })
    }
    if(author && author.length >0){
      authorOptions = author.map((author: any, key: number) => {
        return (
          <option key={key.toString()} value={author.name}>{author.name}</option>
          )
        })
    }
    return (
      <div className="animated fadeIn">
        <Col>
        <Card>
          <CardHeader>
            <strong>New Book</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label>Book Code</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="code" onChange={this.onChange} value={this.state.code === null ? '' : this.state.code}  placeholder="Book Code" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Title</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} placeholder="Title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Publisher</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="publisher" onChange={this.onChange} value={this.state.publisher === null ? '' : this.state.publisher} placeholder="Publisher" />
                </Col>
              </FormGroup>
              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Publish Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="releaseDate" onChange={this.onChange} value={this.state.releaseDate === null ? '' : this.state.releaseDate} placeholder="Publish Date" />
                    </Col>
                  </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Price</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="price" onChange={this.onChange} value={this.state.price === null ? '' : this.state.price} placeholder="Price" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Category</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="categories" id="select" onChange={this.onChange}>
                    <option value="0">Select a category</option>
                    {categoryOptions}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Author</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="authors" id="select" onChange={this.onChange}>
                    <option value="0">Select an Author</option>
                    {authorOptions}
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary" onClick={this.submitForm}><i className="fa fa-dot-circle-o"></i> Submit</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
          </CardFooter>
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
  author: state.author.res,
  category: state.category.res,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: object) => dispatch(bookFetch(value)),
  getAuthor: (value: object) => dispatch(authorFetch(value)),
  getCategory: (value: object) => dispatch(categoryFetch(value)),
  onSubmit: (value: object) => dispatch(bookAdd(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookAdd);
