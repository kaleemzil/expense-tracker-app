import React, { useState } from "react";

export default function AddTransactions({ id, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id,
      text,
      amount: +amount,
      date,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Add Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label>Text</label>
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Enter Text..."
          />
        </div>
        <div>
          <label>Amount</label>
          <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            type="number"
            placeholder="Enter Amount..."
          />
        </div>
        <div>
          <label>Date</label>
          <input 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            type="date"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Add Transaction</button>
      </form>
    </div>
  );
}
