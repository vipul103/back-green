const express = require('express');
const router = express.Router();
const userOrderController = require('../controller/userOrderController');
const verifyToken = require('../middleware/verifyToken');

// get dashboard amount
router.get('/dashboard-amount', userOrderController.getDashboardAmount);

// get sales-report
router.get('/sales-report', userOrderController.getSalesReport);

// get sales-report
router.get('/most-selling-category', userOrderController.mostSellingCategory);

// get sales-report
router.get('/dashboard-recent-order', userOrderController.getDashboardRecentOrder);

//get all order by a user
router.get('/order-by-user',verifyToken, userOrderController.getOrderByUser);

//get a order by id
router.get('/single-order/:id', userOrderController.getOrderById);


module.exports = router;
