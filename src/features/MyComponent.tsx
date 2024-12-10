// MyComponent.tsx
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser ,addToCart, dashboard, removeFromCart} from './api/apiActions';
import { RootState, AppDispatch } from '../app/store';

const MyComponent = () => {
  const dispatch: AppDispatch = useDispatch(); // Use typed dispatch
  const { data, loading, error, successMessage } = useSelector((state: RootState) => state.api);
  const [image, setImage] = useState<File | null>(null);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleCreateUser = () => {
    dispatch(
      createUser({
        name: 'John Doe',
        email: 'honn.doe@example.com',
        password: 'password123',
        mobile: '1234567890',
        gender: 'male',
        image:image
      })
    );

  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product_id: 9, // Replace `:id` in the URL
        qty: 2,
      })
    );
  };
  const handleDashboard = () => {
    dispatch(
      dashboard({

      })
    );
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeFromCart({
        id:9
      })
    );
  };
  return (
    <div>
      <h1>Create User</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {successMessage && <p style={{ color: 'green' }}>Success: {successMessage}</p>}
      {data && <pre>{JSON.stringify(data.categorylist, null, 2)}</pre>}
       {
       data?.token ? localStorage.setItem("token", data.token) : ""
      }     
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleCreateUser} disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </button>

      
      <button onClick={handleAddToCart}>Add to Cart</button>


      <button onClick={handleDashboard}>Dashboard</button>

      
      <button onClick={handleRemoveFromCart}>handleRemoveFromCart</button>
    </div>
  );
};

export default MyComponent;
