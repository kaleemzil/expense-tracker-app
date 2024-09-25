import React from "react";

export default function IncomeExpense({ transactions }) {
  const amounts = transactions.map((transaction) => Number(transaction.amount));

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

    return (
      <div className="flex justify-between space-x-8 p-4 bg-white rounded-lg shadow">
        <div className="text-center">
          <h4 className="text-lg font-bold">Income</h4>
          <p className="text-green-600 font-semibold">Rs: +{income}</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">Expense</h4>
          <p className="text-red-600 font-semibold">Rs: -{expense}</p>
        </div>
      </div>
    );
}
