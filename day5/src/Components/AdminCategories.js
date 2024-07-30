import React, { useState } from 'react';
import './AdminCategories.css';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCategory, setEditingCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleEditCategory = (index) => {
    setEditingIndex(index);
    setEditingCategory(categories[index]);
  };

  const handleSaveCategory = () => {
    const updatedCategories = categories.map((category, index) =>
      index === editingIndex ? editingCategory : category
    );
    setCategories(updatedCategories);
    setEditingIndex(null);
    setEditingCategory('');
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="admin-categories">
      <h2>Manage Categories</h2>
      <div className="add-category">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingCategory}
                  onChange={(e) => setEditingCategory(e.target.value)}
                />
                <button onClick={handleSaveCategory}>Save</button>
              </>
            ) : (
              <>
                <span>{category}</span>
                <button onClick={() => handleEditCategory(index)}>Edit</button>
                <button onClick={() => handleRemoveCategory(index)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
