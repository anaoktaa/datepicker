import React, { useState, useRef, useEffect } from 'react';
import { id } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/id';
import { format, subMonths, addMonths } from 'date-fns';

import './App.css';

import Input from './components/input/input.component';
import Datepicker from './components/datepicker/datepicker.component';
import FullScreenDatepicker from './components/full-screen-datepicker/full-screen-datepicker.component';

function App() {
  const timeout = 500;
  const ref = useRef(null);
  const [ showPanel, setShowPanel ] = useState(false);
  const [ initialDate, setInitialDate ] = useState(new Date());
  const [ selectedDate, setSelectedDate ] = useState(new Date());  

  const handleClick = () => {
    setShowPanel(!showPanel);
    setTimeout(() => {
      setInitialDate(new Date(selectedDate));
    }, timeout);
  }

  const handleCancel = () => {
    setShowPanel(!showPanel);
  }

  const handlePickDate = (date) => {
    const pickDate = format(new Date(date), 'MM-dd-yy', { locale : id });
    setSelectedDate(pickDate);
    setTimeout(() => {
      setInitialDate(new Date(date));
    }, timeout);
    setShowPanel(!showPanel);
  }

  const handleNextSlideMonth = () => {
    setInitialDate(addMonths(initialDate, 1));
  }

  const handlePreviousSlideMonth = () => {
    setInitialDate(subMonths(initialDate, 1));
  }
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowPanel(false);
      setTimeout(() => {
        setInitialDate(new Date(selectedDate));
      }, timeout);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className='App'>
     <div className='datepicker-app-container' ref={ref}>
        <Input
          handleClick={handleClick}
          value={format(new Date(selectedDate), 'dd MMMM yyyy', { locale : id })}
        />
        <div className={`${showPanel? `show`: ``} full-screen-panel `}>
          <FullScreenDatepicker
              initialDate={initialDate}
              selectedDate={selectedDate}
              locale={id}
              daysLocale={locale}
              onPickDate={handlePickDate}
              handleNext={handleNextSlideMonth}
              handlePrevious={handlePreviousSlideMonth}
              handleCancel={handleCancel}
          />
        </div>
        <div className={`${showPanel? `slide-panel`: ``} show-panel`}>
          <Datepicker
            initialDate={initialDate}
            selectedDate={selectedDate}
            locale={id}
            daysLocale={locale}
            onPickDate={handlePickDate}
            handleNext={handleNextSlideMonth}
            handlePrevious={handlePreviousSlideMonth}
          />
        </div>     
      </div>
    </div>
  );
}

export default App;
