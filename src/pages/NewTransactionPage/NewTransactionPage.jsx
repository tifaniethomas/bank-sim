import Balance from "../../components/Balance/Balance"
import { useState } from "react"

export default function NewTransactionPage({ balance, setBalance }) {
    const [newBalance, setNewBalance] = useState(0)

    function handleClick(evt) {
        evt.preventDefault()
        console.log(evt.target.value)
        setNewBalance(evt.target.value)
    }
    return (
        <>
            <h1>New Transaction</h1>
            <Balance balance={balance} />
            <TransactionForm newBalance={newBalance} setNewBalance={setNewBalance} />
        </>
    )
}