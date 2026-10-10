/*
MIT License

Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
Mindoro State University - Philippines

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { User } from "../models/userModel.js";
import { Order } from "../models/orderModel.js";

const homeController = {
  index: async (req, res) => {
    res.send("Index Page");
  },
  dashboard: async (req, res) => {
    try {
      const [totalUsers, totalOrders, completedOrders, orders] = await Promise.all([
        User.count(),
        Order.count(),
        Order.count({ where: { status: "Completed" } }),
        Order.findAll({
          order: [["orderDate", "DESC"]],
          limit: 10
        })
      ]);

      res.render("dashboard", {
        totalUsers,
        totalOrders,
        completedOrders,
        orders: orders.map(order => ({
          orderId: order.orderId,
          customer: order.customer,
          date: new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }).format(order.orderDate),
          amount: Number(order.amount).toLocaleString("en-US", {
            style: "currency",
            currency: "PHP"
          }),
          status: order.status
        }))
      });
    } catch (error) {
      console.error("Dashboard data could not be loaded:", error);
      res.render("dashboard", {
        totalUsers: 0,
        totalOrders: 0,
        completedOrders: 0,
        orders: [],
        databaseError: {
          message: "Database is unavailable. Start MySQL to load live dashboard data."
        }
      });
    }
  },
  page1: async (req, res) => {
    res.render("page1");
  }
};

export default homeController;