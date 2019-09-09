import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader, Button, Table, Pagination, PaginationLink, PaginationItem,
} from 'reactstrap';
import Moment from 'moment';

import { categoryFetch, categoryDelete } from '../ActionCategory';
import { CATEGORYSUCESS, CATEGORYFAIL } from '../ConfigCategory';
import { Link } from 'react-router-dom';

class CategoryHome extends Component<any, any> {
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
    console.log("Delete CATEGORY");
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
      if (nextProps.action === CATEGORYFAIL) nextErr = nextProps.err;

      let nextRes = prevState.res;
      if (nextProps.action === CATEGORYSUCESS) nextRes = nextProps.res;

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
      if (this.state.action === CATEGORYFAIL) {
        this.toggleSmall();
      }
    }
  }

  componentDidMount() {
    this.props.onRequest();
  }

  render() {
    const { res, err } = this.state;
    return (
      <div className="animated fadeIn">
        
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.category.fetch,
  res: state.category.res,
  err: state.category.err,
  action: state.category.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: object) => dispatch(categoryFetch(value)),
  deleteItem: (value: object) => dispatch(categoryDelete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);
