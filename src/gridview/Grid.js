import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

import Address from '../Address';
import '../style/Grid.css';

export default class GridView extends Component {
  constructor(props){
    super(props);
    this.state={data: this.props.data}
  }

  render() {
    return(
      <React.Fragment>
        <div className="main_grid_view">
           {this.state.data.properties.map((value) => {
              return <div key={value.id} className="grid_card">
                  <Card>
                    <Link to={{
                            pathname: `/details/${value.id}`,
                            state: {
                              details: value
                            }                
                          }}
                    >
                      <Card.Img variant="top" src={value.mainImageUrl} width={280} height={230} alt="Image"/>
                    </Link>
                    {value.financial&&
                      <Link to={{
                              pathname: `/details/${value.id}`,
                              state: {
                                details: value
                              }
                            }} 
                            style={{textDecoration: "none"}}
                      >
                        <Card.Title className="grid_card_title">                      
                          <h4 style={{lineHeight:"18px", fontFamily: "Muli, sans-serif"}}>
                            ${Number.parseFloat(value.financial.listPrice)
                              .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h4>
                          <small>Built in {value.physical.yearBuilt}</small>
                        </Card.Title>
                      </Link>
                    }
                    {value.financial&&
                      <Card.Text className="grid_card_text">
                        <p className="property_detail_heading">Current Rent</p>
                        <h5>
                          ${Number.parseFloat(value.financial.monthlyRent)
                            .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h5> 
                      </Card.Text>
                    }
                    {value.financial&&
                      <Card.Text className="grid_card_text">
                        <p className="property_detail_heading">Cap Rate</p>
                        <h5>{Number.parseFloat((value.financial.monthlyRent*12)/value.financial.listPrice)
                          .toFixed(2)}%</h5>
                      </Card.Text>
                    }
                    {value.address&&
                      <Card.Text  className="property_address_detail_heading">
                        <Address {...value.address}/>
                      </Card.Text>
                    }
                  </Card>
                </div>
            })}
        </div>
      </React.Fragment>
    )
  }
}
