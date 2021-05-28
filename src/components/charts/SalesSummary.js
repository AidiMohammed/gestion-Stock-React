import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../actions/products'
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip}from 'recharts'

class SalesSummary extends Component 
{

    componentDidMount(){
        this.props.getProducts()
    }

    render() 
    {
        const data = [
            {name: "Mohammed",age: 35},
            {name: "Ahmed",age: 32},
            {name: "karim",age: 25},
            {name: "Hanan",age: 45},
        ]
        
        return (
            <div>
                {console.log("dans le component chart",this.props.Products)}
                <AreaChart 
                    width ={100}
                    height ={400}
                    data ={this.props.Products}
                    margin ={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    
                    <Tooltip/>
                    <Area type="monotone" dataKey= "Qt" stroke="8884d8" fill="8884d8"/>
                </AreaChart>
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return{
        Products : state.moduleProducts.listProducts
    }
}

export default connect(mapStateToProps,{getProducts})(SalesSummary)
