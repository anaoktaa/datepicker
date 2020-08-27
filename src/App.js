import React, { useState } from 'react';
import { enUS } from 'date-fns/locale';

import './App.css';

import Datepicker from './components/datepicker/datepicker.component';

function App() {
  const [ selectedDate, setSelectedDate ] = useState( new Date());  
  const [ selectedDateRegular, setSelectedDateRegular ] = useState( new Date('09-09-2020'));  

  const handlePickDate = (date) => {
    console.log("DATE", date);
    setSelectedDate(date);
  }

  const handlePickDateRegular = (date) => {
    console.log("DATE", date);
    setSelectedDateRegular(date);
  }

  return (
    <div className='App'>
      <Datepicker
        selectedDate={selectedDate}
        locale={enUS}
        onPickDate={handlePickDate}
        type='full-screen'
        selectedColor='#987df5'
        title='Calendar'
      />
      <br/>
      <Datepicker
        selectedDate={selectedDateRegular}
        onPickDate={handlePickDateRegular}
        type='regular'
        selectedColor='#f16969'
      />    
    </div>
  );
}

export default App;
