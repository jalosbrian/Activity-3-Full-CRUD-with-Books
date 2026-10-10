import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Order = sequelize.define("Order", {
  orderId: { type: DataTypes.STRING, allowNull: false, unique: true },
  customer: { type: DataTypes.STRING, allowNull: false },
  orderDate: { type: DataTypes.DATE, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false }
});

export { sequelize };