import React from 'react'
import styles from './Products.module.css'

import { connect } from 'react-redux'

import Product from './Product/Product'

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.map((prod) => (
        <Product />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)
