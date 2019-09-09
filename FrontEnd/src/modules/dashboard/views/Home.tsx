/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardHeader, Row, Col, CardImg, Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import Moment from 'moment';

import { nowPlayingFetch } from '../ActionDashboard';
import { NOWPLAYINGSUCCESS, NOWPLAYINGFAIL } from '../ConfigDashboard';

class DashboardHome extends Component<any, any> {
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

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.action !== prevState.action) {
      let nextErr = prevState.err;
      if (nextProps.action === NOWPLAYINGFAIL) nextErr = nextProps.err;

      let nextRes = prevState.res;
      if (nextProps.action === NOWPLAYINGSUCCESS) nextRes = nextProps.res;

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
      if (this.state.action === NOWPLAYINGFAIL) {
        this.toggleSmall();
      }
    }
  }

  componentDidMount() {
    const start = Moment().startOf('month');
    const end   = Moment(start).add(2, 'month');
    const data = {
      'primary_release_date.gte': start.format('YYYY-MM-DD'),
      'primary_release_date.lte': end.format('YYYY-MM-DD'),
    };
    this.props.onRequest(data);
  }

  render() {
    const { res, err } = this.state;
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>Home</strong>
              </CardHeader>
              <CardBody>
                Welcome
              </CardBody>
            </Card>
          </Col>
        </Row>
        {
          res && res.length > 0 && (
            <Row>
              {
                res.map((movie: any, key: number) => {
                  let theImg: string = movie.backdrop_path;
                  if (theImg === null) theImg = movie.poster_path;
                  
                  return (
                    <Col xs="12" sm="6" md="4" lg="3" key={key.toString()}>
                      <Card>
                        <CardHeader>
                          <strong>{movie.original_title}</strong>
                        </CardHeader>
                        <CardImg top width="100%" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Card image cap" />
                        <CardBody>
                          {movie.overview}
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
          )
        }

        <Modal isOpen={this.state.small} toggle={this.toggleSmall} className="modal-sm modal-danger">
          <ModalHeader toggle={this.toggleSmall}>Error</ModalHeader>
          <ModalBody>{err}</ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.nowPlaying.fetch,
  res: state.nowPlaying.res,
  err: state.nowPlaying.err,
  action: state.nowPlaying.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: object) => dispatch(nowPlayingFetch(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);
