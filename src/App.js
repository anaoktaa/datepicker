import React, { useState } from 'react';
import { enUS } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/en-US';

import './App.css';

import Datepicker from './components/datepicker/datepicker.component';

function App() {
  const [ selectedDate, setSelectedDate ] = useState( new Date('09-09-2020'));  
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
        localeDate={locale}
        onPickDate={handlePickDate}
        type='full-screen'
      />
      <br/>
      <Datepicker
        selectedDate={selectedDateRegular}
        // locale={id}
        // localeDate={locale}
        onPickDate={handlePickDateRegular}
        type='regular'
      />    
    </div>
  );
}

export default App;
