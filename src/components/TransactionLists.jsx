import React from "react";
import Transaction from "./Transaction";

export default function TransactionLists({ transactions, deleteTransaction }) {
  transactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold">Transactions</h3>
      <ul className="list space-y-4">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </ul>
    </div>
  );
}
