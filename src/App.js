import React from 'react';
import { id } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/id';

import './App.css';

import Input from './components/input/input.component';
import Datepicker from './components/datepicker/datepicker.component';

function App() {
  return (
    <div className='App'>
     <div className='datepicker-app-container'>
        <Input/>
        <Datepicker
          initialDate={new Date()}
          locale={id}
          daysLocale={locale}
        />
      </div>
    </div>
  );
}

export default App;
