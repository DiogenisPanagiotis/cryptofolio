import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import { withRouter } from 'react-router-dom'
import NavContainer from './navContainer'
import '../index.css'

class tableContainer extends Component {

    renderTables = () => {
        let { cryptocurrencies } = this.props.cryptoReducer
        if (cryptocurrencies) { 
            return (
                <div className="table-responsive-sm">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cryptocurrencies.map((cryptocurrency, i) => {
                                return (
                                    <tr key={i}>
                                      <th scope="row">{i + 1}</th>
                                      <td>{cryptocurrency.symbol}</td>
                                      <td>{cryptocurrency.price_usd}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            ) 
        } else {
            return this.renderFetching()
        }
    }

    renderFetching = () => {
        return (
            <div className="card">
              <div className="card-body">
                <p className="card-text">Fetching...</p>
              </div>
            </div>
        )
    }

    render() {
        let { cryptocurrencies } = this.props.cryptoReducer
        return (
            <div>
            {this.renderTables()}
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { userReducer, cryptoReducer } = state
    return { userReducer, cryptoReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(tableContainer))