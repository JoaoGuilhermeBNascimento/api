import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

//list categories
router.get('/categories', listCategories);

//create category

router.post('/categories',(req,res) =>{
	res.send('OK');
});

//list products

router.get('/products',(req,res) =>{
	res.send('OK');
});

//create products

router.post('/products',(req,res) =>{
	res.send('OK');
});

//Get products by category

router.get('/categories/:categoryId/products',(req,res) =>{
	res.send('OK');
});

// List orders

router.get('/orders',(req,res) =>{
	res.send('OK');
});

// Create order
router.post('/orders',(req,res) =>{
	res.send('OK');
});

// Change order status | Usaria put caso alterasse todas as informações da orders. A única alteração aqui é o status por isso o uso do patch, alteração parcial.

router.patch('/orders/:orderId',(req,res) =>{
	res.send('OK');
});

// Delete / cancel order

router.delete('/orders/:orderId',(req,res) =>{
	res.send('OK');
});