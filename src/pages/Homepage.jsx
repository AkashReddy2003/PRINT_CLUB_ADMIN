// App.js
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Homepage() {
    const {add,load,deleteP}=useContext(AuthContext);
    const [productId,setProductId]=useState("");
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState(null);
  const [store, setStore] = useState('Sticker');
  const [collection, setCollection] = useState('Movies & Series');
  const [price, setPrice] = useState('50');
  const [discountPrice, setDiscountPrice] = useState('15');
  const [tags, setTags] = useState('');

  const stores = ['Sticker', 'Poster'];  // Replace with your store options
  const collections = [
    "Movies & Series",
    "Sports",
    "Gaming",
    "Nature & Travel",
    "Music",
    "Art & Aesthetics",
    "Comics & Anime",
    "Quotes & Typography",
    "Space & Sci-Fi",
    "Cars & Motorsports"
  ];  // Replace with your collection options

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!productName || !image || !store || !collection || !price || !discountPrice || !tags) {
      alert('Please fill in all required fields.');
      return;
    }
    



    // For demo purposes, log product info
    add(
      productName,
      image,
      store,
      collection,
      price,
      discountPrice,
      tags  
    );

    // Reset form after submission
    
    setImage(null);
    
  };

  const handleDelete=(e)=>{
    e.preventDefault();
    if(!productId){
      alert("Enter product Id");
      return;
    }
    deleteP(productId);

    
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);  // Handling file input for image
  };

  return (
    <div style={{display: 'flex',flexDirection:"row"}}>
    <div style={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Store:</label>
          <select
            value={store}
            onChange={(e) => setStore(e.target.value)}
            style={styles.input}
          >
            <option value="">Select store</option>
            {stores.map((storeOption) => (
              <option key={storeOption} value={storeOption}>
                {storeOption}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>Collection:</label>
          <select
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            style={styles.input}
          >
            <option value="">Select collection</option>
            {collections.map((collectionOption) => (
              <option key={collectionOption} value={collectionOption}>
                {collectionOption}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Discount Price:</label>
          <input
            type="number"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter discount price"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Tags (comma-separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          {load?"Loading":"Add Product"}
        </button>
        
      </form>
    </div>
    <div style={styles.container}>
      <h2>Delete Product</h2>
      <form onSubmit={handleDelete} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Product Id:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product Id"
            style={styles.input}
          />
        </div>

        

        <button type="submit" style={styles.button}>
          {load?"Loading":"Delete Product"}
        </button>
        
      </form>
    </div>
    </div>
  );
}

// Basic inline styles for demo purposes
const styles = {
  container: {
    
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Homepage;
