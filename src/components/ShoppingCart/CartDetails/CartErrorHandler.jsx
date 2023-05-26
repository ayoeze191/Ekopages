import React, { Component } from 'react';



const withCartErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null,
            showModal: true
        }
        
        
        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
            })}
        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
            window.location.reload();
        }

        render () {
            return (
                this.showModal &&
                <div className='bg-black-900 opacity-[0.5]' onClick={this.setState({...this.state, showModal:false})}>
                    <div className='bg-white px-14 py-14'>{this.state.error ? this.state.error.message : null}</div>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}

export default withCartErrorHandler;