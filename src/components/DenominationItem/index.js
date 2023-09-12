// Write your code here
const DenominationItem = props => {
  const {eachDenomination, updateDenomination} = props
  const {value, id} = eachDenomination
  const onClickDenomination = () => {
    updateDenomination(id, value)
  }
  return (
    <li>
      <div>
        <button type="button" onClick={onClickDenomination}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
