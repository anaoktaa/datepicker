import React,{ useState } from 'react';
import { id } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/id';
import { format } from 'date-fns';

import './App.css';

import Input from './components/input/input.component';
import Datepicker from './components/datepicker/datepicker.component';

function App() {
  const [ showPanel, setShowPanel ] = useState(false);
  const [ initialDate, setInitialDate ] = useState(new Date());
  const [ selectedDate, setSelectedDate ] = useState(new Date());  

  const handleClick = () => {
    setShowPanel(!showPanel);
  }

  const handlePickDate = (date) => {
    const pickDate = format(new Date(date), 'dd-MMMM-yyyy', { locale : id });
    setSelectedDate(format(new Date(date), 'MM-dd-yy', { locale : id }));
    setInitialDate(pickDate);
    setShowPanel(!showPanel);
  }

  return (
    <div className='App'>
     <div className='datepicker-app-container'>
        <Input
          handleClick={handleClick}
          value={format(new Date(selectedDate), 'dd MMMM yyyy', { locale : id })}
        />
        <div className={`${showPanel? `slide-panel`: ``} show-panel`}>
          <Datepicker
            initialDate={initialDate}
            selectedDate={selectedDate}
            locale={id}
            daysLocale={locale}
            onPickDate={handlePickDate}
          />
        </div>     
      </div>
    </div>
  );
}

export default App;
