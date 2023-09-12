// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateDenomination = (id, value) => {
    this.setState(prevState => {
      console.log(value)
      return {
        amount: prevState.amount - parseInt(value),
      }
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="cash-withdrawal-bg-container">
        <div className="cash-withdrawal-container">
          <div className="user-details">
            <div className="user-profile">
              <p className="user-profile-icon">S</p>
            </div>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balance-section">
            <p>Your Balance</p>
            <p>{amount}</p>
          </div>
          <div className="withdraw-section">
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachList => (
                <DenominationItem
                  eachDenomination={eachList}
                  key={eachList.id}
                  updateDenomination={this.updateDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
