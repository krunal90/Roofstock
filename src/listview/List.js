import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, Table} from 'react-bootstrap';

import Address from '../Address';
import '../style/List.css';

export default class ListView extends Component{
  constructor(props){
    super(props);
    this.state = {data: this.props.data}
  }
  render() {
    return(
      <React.Fragment>
        <div className="main_grid_view">
                  <Table hover className="list_view">
                    <tbody>
                      <tr>
                        <td></td>
                        <td>Address</td>
                        <td>Price</td>
                        <td>Current Rent</td>
                        <td>Cap Rate</td>
                        <td>Year Build</td>
                      </tr>
                      {this.state.data.properties.map((value) => {
                        return  <tr key={value.id}>
                          <td>
                            {value.resources&&
                              <Link to={{
                                  pathname: `/details/${value.id}`,
                                  state: {
                                    details: value
                                  }                
                                }}
                              >
                                {value.resources.photos[0]&&
                                <img className="list_view_image" src={value.resources.photos[0].urlSmall}
                                     alt="Image"/>}
                              </Link>
                            }
                          </td>
                          <td>{value.address&&
                                <Link className="link" to={{
                                        pathname: `/details/${value.id}`,
                                        state: {
                                            details: value
                                        }                
                                      }}
                                >
                                  <Address {...value.address}/>
                                </Link>
                              }
                          </td>
                          {value.financial&&
                            <td>
                              ${Number.parseFloat(value.financial.listPrice)
                                .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td>
                          }
                          {!value.financial&&
                            <td>-</td>
                          }
                          {value.financial&&
                            <td>
                              ${Number.parseFloat(value.financial.monthlyRent)
                              .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </td> 
                          }
                          {!value.financial&&
                            <td>-</td>
                          }
                          {value.financial&&
                            <td>{Number.parseFloat((value.financial.monthlyRent*12)/value.financial.listPrice)
                                .toFixed(2)}%
                            </td>
                          }
                          {!value.financial&&
                            <td>-</td>
                          }
                          {value.physical&&
                            <td>{value.physical.yearBuilt}</td>
                          }
                          {!value.physical&&
                            <td>-</td>
                          }
                        </tr>
                      })}
                    </tbody>
                  </Table>
                </div>
      </React.Fragment>
    )
  }
}
