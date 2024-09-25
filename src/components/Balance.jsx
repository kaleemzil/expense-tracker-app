import React from "react";

export default function Balance({ transactions }) {
  const amounts = transactions.map((transaction) => Number(transaction.amount));
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg shadow">
      <h4 className="text-lg font-bold">Balance</h4>
      <h1 className="text-2xl font-semibold">Rs: {total}</h1>
    </div>
  );
}
