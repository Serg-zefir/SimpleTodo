import "react-table/react-table.css"

import React, { Component } from 'react'

import ActModal from './ActModal'
import ReactTable from "react-table"
import moment from 'moment'

// import { Link } from 'react-router-dom'
// import ProductSummary from './ProductSummary'


const DatColmn = (dat) =>
  <span>{moment(dat.toDate()).calendar()}</span>;

const LastColmn = (row, openMod) =>
  <div>
    <span className="icon has-text-info">
      <i className="far fa-edit" onClick={() => openMod('edit', row.original)}></i>
    </span>
    <span className="icon has-text-danger">
      <i className="far fa-times-circle" onClick={() => openMod('del', row.original)}></i>
    </span>
  </div>;

const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: 0,
      typeModal: ''
    }
  }
  openMod = (val = '', currentProduct = 0) => {
    this.setState({
      currentProduct,
      typeModal: val
    });
  };
  render() {
    let rows = this.props.products && this.props.products[0].hasOwnProperty('title') ? this.props.products : [],
      operData = {
        curProd: this.state.currentProduct,
        type: this.state.typeModal,
        close: this.openMod
      };
    return (
      <div className="product-list section">
        <button className="button is-primary" onClick={() => this.openMod('new')}>Add Product</button>
        {rows && <ReactTable data={rows} columns={[
          {
            Header: "Title",
            accessor: "title"
          },
          {
            Header: "Description",
            accessor: "content"
          },
          {
            Header: "Author",
            columns: [
              {
                Header: "First Name",
                accessor: "authorFirstName"
              },
              {
                Header: "Last Name",
                accessor: "authorLastName"
              }
            ]
          },
          {
            Header: "Created at",
            columns: [
              {
                Header: "Date",
                accessor: "createdAt",
                Cell: props => DatColmn(props.value)
              }
            ]
          },
          {
            Header: "Action",
            accessor: "id",
            Cell: props => LastColmn(props, this.openMod)
          }
        ]}
          defaultSorted={[
            {
              id: "createdAt",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />}
        <br />
        <Tips />
        <ActModal mClose={operData.close} cPrd={operData.curProd} mType={operData.type}/>
      </div>
    )
  }
}

export default ProductList
// title: '',
//     content: ''
// authorFirstName: profile.firstName,
//       authorLastName: profile.lastName,
//       authorId: authorId,
//       createdAt: new Date()
// { products && products.map(product => {
//   return (
//     <Link to={'/product/' + product.id} key={product.id}>
//       <ProductSummary product={product} />
//     </Link>
//   )
// })} 