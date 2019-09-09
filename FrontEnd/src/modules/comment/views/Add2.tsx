import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Pagination, PaginationLink, PaginationItem, Table, Badge, Button, Form, Label, FormGroup, FormText, Input, CardFooter,
} from 'reactstrap';
import Moment from 'moment';
import { resolve } from 'dns';

class BookAdd extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: String,
      title: String,
      publisher: String,
      releaseDate: Date,
      price: String,
      categories: String,
      authors: String,
      categoriesData: [],
      authorsData: []
    };

    this.toggleSmall = this.toggleSmall.bind(this);
  }

  onChange = (e: { target: { name: any; value: any; }; }) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
    console.log(this.state.code)
  }

  componentDidMount() {
    this.loadCategories();
    this.loadAuthors();
  }

  async loadCategories(){
    try {
      const response = await fetch(`http://localhost:3001/category`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('response: ' + JSON.stringify(json));
      this.setState({ categoriesData: json.category });
      console.log('response: ' + json.category);
    } catch (error) {
      console.log(error);
    }
  }

  async loadAuthors(){
    try {
      const response = await fetch(`http://localhost:3001/author`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ authorsData: json.author });
    } catch (error) {
      console.log(error);
    }
  }

  insertBook = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    fetch(`http://localhost:3001/book/add`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: this.state.code,
        title: this.state.title,
        authors: new Array(this.state.authors),
        publisher: this.state.publisher,
        releaseDate: this.state.releaseDate,
        price: this.state.price,
        categories: new Array(this.state.categories)
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }


  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  render() {
    const { res, err } = this.state;

    const categoryOptions = this.state.categoriesData.map((category: any) => {
      return (
        <option value={category.name}>{category.name}</option>
        )
      })
    const authorOptions = this.state.authorsData.map((author: any) => {
      return (
        <option value={author.name}>{author.name}</option>
        )
      })

    return (
      <div className="animated fadeIn">
        <Col>
        <Card>
          <CardHeader>
            <strong>New Book</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.insertBook}>
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
            <Button type="submit" size="sm" color="primary" onClick={this.insertBook}><i className="fa fa-dot-circle-o"></i> Submit</Button>
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
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BookAdd);
