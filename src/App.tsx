import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { addInList, removeFromList } from './features/list/listSlice';

const App: React.FC = () => {
  const list = useSelector((state:RootState)=>state.list.value)
 const [inputValue, setInputValue] = useState<string>(''); 
  const dispatch = useDispatch<AppDispatch>();
  
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      dispatch(addInList(inputValue));
      setInputValue('');
    }
  };


  const handleRemoveItem = (index:number) => {
    if (list.length>0) {
      dispatch(removeFromList(index));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Redux with TypeScript</h1>
   
      <div style={{ marginTop: '30px' }}>
        <h2>Add Items</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAddItem}>Add Item</button>

   
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Items List</h2>
        {list.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', margin: '0 auto' }}>
                <span>{item}</span>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </li>
            ))}
      </div>
    </div>
  
  );
};



export default App;
