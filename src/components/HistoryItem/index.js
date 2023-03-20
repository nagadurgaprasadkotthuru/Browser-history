import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItemDetails
  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img className="logo" alt="domain logo" src={logoUrl} />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          className="delete-logo"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
