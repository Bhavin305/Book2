import React, { useState } from 'react';
import './App.css';


const arr = [100, 101, 102, 103, 104, 203, 205, 207, 7001, 7002, 7003, 7004, 7005, 7010, 7011];

function checkInsideArr(...values) {
  const result = [];
  const duplicate = [];
  for (const val of values) {
    if(val) {
      const index = val.toString().indexOf('-');
      if (index > -1) {
        const start = val.substr(0, index);
        const end = val.substr(index + 1, val.length);
        for (let j = parseInt(start); j <= parseInt(end); j++) {
          if (!arr.includes(parseInt(j)) && !result.includes(parseInt(j)) && parseInt(j)) {
            result.push(parseInt(j));
          } else {
            if(parseInt(j) && !duplicate.includes(parseInt(j))) {
              duplicate.push(parseInt(j));
            }
          }
        }
      } else if (!arr.includes(parseInt(val)) && !result.includes(parseInt(val)) && parseInt(val)) {
        result.push(parseInt(val));
      } else {
        if(parseInt(val) && !duplicate.includes(parseInt(val))) {
          duplicate.push(parseInt(val));
        }
      }
    }
    
  }
  return {result, duplicate};
}



function App() {

  const [output, setOutput] = useState({ result: [], duplicate: [] });

  const checkForDuplicate = (e) => {
    const data = checkInsideArr(...e.target.value.split(','));
    setOutput(data);
  }

  return (
    <div className="App">
          <div>
            Original Array
            <p>{arr.map(item=> <span key={`original-${item}`}>{`${item}  `}</span>)}</p>
          </div>
       <input type="text" onKeyUp={checkForDuplicate} placeholder="enter values" />
       <br />
       <br />
       <div>
            Result
            <p>{output.result.map(item=> <span key={`result-${item}`}>{`${item}  `}</span>)}</p>
        </div>
        <div>
            Duplicated Item
            <p>{output.duplicate.map(item=> <span key={`duplicate-${item}`}>{`${item}  `}</span>)}</p>
        </div>
    </div>
  );
}

export default App;
