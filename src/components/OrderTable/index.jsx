"use client";
import { useState } from "react";
import Image from "next/image";

const OrderTable = ({ data }) => {
  const [tableData, settableData] = useState(data);
  return (
    <div
      className="w-full"
      style={{
        boxShadow: "0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
        border: "1px solid rgb(238, 238, 238)",
        borderRadius: "20px",
        overflow: "auto"
      }}
    >
      <table
        className="w-full"
      >
        <thead>
          <tr className="text-left text-sm">
            <th className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}>Product</th>
            <th  className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}>Date</th>
            <th  className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}>Time Spent</th>
            <th  className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}>Order Value</th>
            <th  className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}>Commission</th>
            <th  className="font-normal p-5" style={{
              backgroundColor: "#F9FAFB",
              color: "#667085"
            }}></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td className="font-normal p-5">
                <div className="flex items-center">
                  <div
                    className="mr-2"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  >
                    <Image
                      src={item?.image}
                      alt="product image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "auto",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <span>{item.product}</span>
                </div>
              </td>
              <td className="font-normal p-5">{new Date(item?.date).toLocaleDateString()}</td>
              <td className="font-normal p-5">
                {/* convert milliseconds to h and mins */}
                {Math.floor(item.timeSpent / 3600000)}h{" "}
                {Math.floor((item.timeSpent % 3600000) / 60000)}m
              </td>
              <td className="font-normal p-5">$ {item.price}</td>
              <td className="font-normal p-5">$ {item.commission}</td>
              <td className="font-normal p-5">
                <button>View Chart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
