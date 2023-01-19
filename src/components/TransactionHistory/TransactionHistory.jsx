import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";


export default function TransactionHistory({items}){
    return (
      <table className={css.transaction_history}>
        <thead className={css.transaction}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
          {items.map((item, index) => {
            return index % 2 === 0 ? (
              <tr key={item.id}>
                <td className={css.kon}>{item.type}</td>
                <td className={css.kon}>{item.amount}</td>
                <td className={css.kon}>{item.currency}</td>
              </tr>
            ) : (<tr>
              <td className={css.mot}>{item.type}</td>
              <td className={css.mot}>{item.amount}</td>
              <td className={css.mot}>{item.currency}</td>
            </tr>
            );
          })}
            </tbody>
          </table>
  )
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
        
    })
  ).isRequired,
 
};