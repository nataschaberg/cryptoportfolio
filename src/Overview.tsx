import React, { Fragment } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getProductIds, getProductStats } from './lib/utils'
import { CardDetails } from './Card'
const BASE_URL = `https://api.pro.coinbase.com/products`

interface Props {}
interface State {}

export class Overview extends React.Component<Props, State> {
  state = {
    products: [],
    reqError: false,
  }

  async componentDidMount() {
    this.setState({ reqError: false })
    if (!this.state.products.length) {
      try {
        const productIds = await getProductIds(BASE_URL)
        this.setState({ products: productIds })

        const products = await getProductStats(BASE_URL, this.state.products)
        this.setState({ products })
      } catch (err) {
        this.setState({ reqError: true })
      }
    }
  }

  renderCard = (card: any) => {
    const { id, stats } = card.item
    return (
      <View style={styles.cardContainer}>
        <Text>Product: {id} </Text>
        {!Object.keys(stats).length ? (
          <Text>Loading ...</Text>
        ) : (
          <CardDetails stats={stats} />
        )}
      </View>
    )
  }

  renderBody = () => {
    const { products } = this.state
    return !products.length ? (
      <Text>Loading ... </Text>
    ) : (
      <FlatList data={products} renderItem={this.renderCard} />
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.reqError ? (
          <Text>Ooops, something went wrong. Please retry.</Text>
        ) : (
          this.renderBody()
        )}
        <Text>Hell my wolrd</Text>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: '5%',
    marginVertical: '2%',
    backgroundColor: 'white',
  },
})
