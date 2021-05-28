import React,{Component} from 'react'
import SideBarNav from '../components/SideBarNav'
import '../helpers/main.css'
import SalesSummary from '../components/charts/SalesSummary'
import { getProducts }from '../actions/products'
import {connect} from 'react-redux'

class Dashboard extends Component 
{
    componentDidMount(){
        this.props.getProducts()
    }
    render(){
        console.log("page Dashboard",this.props.Products)
    return (
        <div >
            <SideBarNav />
            <div className="main">
                <SalesSummary />   
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope = "col">ID</th>
                                <th scope = "col">REF</th>
                                <th scope = "col">QT</th>
                                <th scope = "col">Provider</th>
                                <th scope = "col">Descreption</th>
                                <th scope = "col">Buy Price</th>
                                <th scope = "col">Selle Price</th>
                            </tr>
                        </thead>
                        {this.props.Products.map((product,index) =>
                            <tbody>
                                <tr>
                                    <th scope = "row">{index+1}</th>
                                    <td>{product.ref}</td>
                                    <td>{product.Qt}</td>
                                    <td>{product.Provaider}</td>
                                    <td>{product.Descreption}</td>
                                    <td>{product.buyingprice}</td>
                                    <td>{product.sellingprice}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
            </div>
        </div>
    )}
}

const mapStateToProps = state =>
{
   return{
       Products: state.moduleProducts.listProducts
   }
}
export default connect(mapStateToProps,{getProducts})(Dashboard)
