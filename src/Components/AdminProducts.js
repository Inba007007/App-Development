import React, { useState } from 'react';
import './AdminProducts.css';

function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id: newId, name: newProduct.name, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: '', price: '' });
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts(products.map(p => p.id === editProduct.id ? editProduct : p));
    setEditProduct(null);
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="admin-products">
      <h2>Manage Products</h2>
      
      <form onSubmit={editProduct ? handleUpdateProduct : handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={editProduct ? editProduct.name : newProduct.name}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={editProduct ? editProduct.price : newProduct.price}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <button type="submit">{editProduct ? 'Update Product' : 'Add Product'}</button>
      </form>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProducts;
