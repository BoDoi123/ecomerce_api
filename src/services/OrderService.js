const Order = require("../models/OrderProduct");

const createOrder = (newOrder) => {
	return new Promise(async (resolve, reject) => {
		const {
			orderItems,
			paymentMethod,
			itemsPrice,
			shippingPrice,
			totalPrice,
			fullname,
			address,
			city,
			phone,
			user,
		} = newOrder;

		try {
			const createOrder = await Order.create({
				orderItems,
				shippingAddress: {
					fullname,
					address,
					city,
					phone,
				},
				paymentMethod,
				itemsPrice,
				shippingPrice,
				totalPrice,
				user: user,
			});

			if (createOrder) {
				resolve({
					status: "OK",
					message: "SUCCESS",
					data: createOrder,
				});
			}
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	createOrder,
};
