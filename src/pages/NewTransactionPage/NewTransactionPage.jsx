import { useState } from "react"

export default function NewTransactionPage({ balance, setBalance }) {
    const [newBalance, setBewBalance] = useState(0)

    function handleClick(evt) {
        evt.preventDefault()
        console.log(evt.target.value)
        setNewBalance(evt.target.value)
    }
    return (<h1>NewTransactionPage</h1>)
}