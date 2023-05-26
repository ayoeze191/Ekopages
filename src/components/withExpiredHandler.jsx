import React, { Component } from 'react';

const withExpiredHandler = (WrappedComponent, axios, exp) => {
  return class extends Component {
   
    componentWillMount() {
        this.reqInterceptor = axios.interceptors.request.use( req => {
            this.setState( { error: null });
            return req;
        })
    }

  }}
