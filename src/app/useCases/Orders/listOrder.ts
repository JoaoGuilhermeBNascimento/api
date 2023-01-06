import { Request, Response } from 'express';
import { Order } from '../../models/Order';


export async function listOrder(req: Request, res: Response) {
	try {

		const orders = await Order.find()
			.sort({ createdAt: 1 }) // 1 desc -1 asc, como é um app de restaurante, os mais antigos vem em primeiro
			.populate('products.product');

		res.json(orders);

	}catch (error ){
		console.log(error);
		res.sendStatus(500);

	}

}