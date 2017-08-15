import React from 'react'
import { connect } from 'react-redux'
import { listingCreate } from '../../action/listing-actions.js'

class ListingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      listingURL: '',
      listingCreatedOn: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'name') this.setState({ name: e.target.value })
    if (e.target.name === 'listingURL')
      this.setState({ listingURL: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.state.listingCreatedOn = new Date()

    this.props.listingCreate(this.state)

    this.setState({ listingURL: '' })
    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        <form id="listing form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="listingURL"
            type="text"
            placeholder="listing URL"
            value={this.state.listingURL}
            onChange={this.handleChange}
          />
          <button>add listing</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  profile: state,
})

export const mapDispatchToProps = dispatch => ({
  listingCreate: listing => dispatch(listingCreate(listing)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)
