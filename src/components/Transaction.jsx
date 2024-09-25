import React from "react";

export default function Transaction({ transaction, deleteTransaction }) {
  let sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={`flex justify-between p-2 border-b ${transaction.amount >= 0 ? "bg-green-100" : "bg-red-100"}`}>
      <span>{transaction.text}</span>
      <span className="flex items-center">
        <span className="mr-4">{transaction.date}</span>
        <span>{sign} Rs {Math.abs(transaction.amount)}</span>
        <button 
          className="ml-4 text-red-600 hover:text-red-800"
          onClick={() => deleteTransaction(transaction.id)}>
          X
        </button>
      </span>
    </li>
  );
}
