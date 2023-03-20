import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  // eslint-disable-next-line react/sort-comp
  getInitialHistoryList = () => {
    const {initialHistoryList} = this.props
    return initialHistoryList
  }

  state = {
    searchInput: '',
    updatedHistoryList: this.getInitialHistoryList(),
  }

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  deleteHistory = id => {
    const {updatedHistoryList} = this.state
    const filteredList = updatedHistoryList.filter(each => each.id !== id)
    return this.setState({updatedHistoryList: filteredList})
  }

  onTestingCondition = filteredList => {
    if (filteredList.length > 0) {
      return (
        <div className="container">
          <ul className="history-container">
            {filteredList.map(each => (
              <HistoryItem
                historyItemDetails={each}
                key={each.id}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="container container-height">
        <div className="empty-container">
          <p className="para">There is no history to show</p>
        </div>
      </div>
    )
  }

  render() {
    const {updatedHistoryList} = this.state
    const {searchInput} = this.state
    const filteredList = updatedHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <nav className="navbar">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="input-search-container">
            <img
              className="search-logo"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              className="search-element"
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </nav>
        {this.onTestingCondition(filteredList)}
      </div>
    )
  }
}

export default BrowserHistory
