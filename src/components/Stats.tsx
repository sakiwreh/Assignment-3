import { useState } from "react";

function Stats() {
  const data = localStorage.getItem("product");

  const [totalData, setTotalData] = useState(() => {
    return data ? JSON.parse(data).length : 0;
  });
  const [lowStocks, setLowStocks] = useState(() => {
    return data ? JSON.parse(data).filter((prod:any) => prod.quantity < 5).length : 0;
  });
  const [totalValue, setTotalValue] = useState(() => {
    return data
      ? JSON.parse(data).reduce((total:any, prod:any) => {
          console.log(total, prod.price);
          return total + parseInt(prod.price);
        }, 0)
      : 0;
  });

  return (
    <div>
      <div className=" flex flex-wrap items-center">
        <span  className=" text-2xl border p-4 rounded bg-orange-200">Total Product: {totalData}</span>
        <span className=" text-2xl border p-4 rounded bg-orange-200">Low Stocks: {lowStocks}</span>
        <span className=" text-2xl border p-4 rounded bg-orange-300">Total Value: {totalValue}</span>
      </div>
    </div>
  );
}

export default Stats;