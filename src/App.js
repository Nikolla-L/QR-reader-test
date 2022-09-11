import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function App() {
  const [data, setData] = useState('No result');
  const [openQR, setOpenQR] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpenQR(!openQR)}>
        Open
      </button>
      {
        openQR &&
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{
            width: '100%',
            maxWidth: '500px',
            maxHeight: '80vh'
          }}
        />
      }
      <p>{data}</p>
    </div>
  );
}

export default App;
