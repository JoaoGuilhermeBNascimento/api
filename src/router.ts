import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';


import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrder } from './app/useCases/Orders/listOrder';
import { createOrder } from './app/useCases/Orders/createOrder';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/Orders/cancelOrder';

export const router = Router();


const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null,`${Date.now()}-${file.originalname}`);
		},
	}),
});

//list categories
router.get('/categories', listCategories);

//create category

router.post('/categories',createCategory);

//list products

router.get('/products',listProducts);

//create products

router.post('/products', upload.single('image') ,createProduct);

//Get products by category

router.get('/categories/:categoryId/products',listProductsByCategory);

// List orders

router.get('/orders',listOrder);

// Create order
router.post('/orders', createOrder);

// Change order status | Usaria put caso alterasse todas as informações da orders. A única alteração aqui é o status por isso o uso do patch, alteração parcial.

router.patch('/orders/:orderId',changeOrderStatus);

// Delete / cancel order

router.delete('/orders/:orderId',cancelOrder);