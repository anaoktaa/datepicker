import React,{ useState } from 'react';
import { id } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/id';

import './App.css';

import Input from './components/input/input.component';
import Datepicker from './components/datepicker/datepicker.component';

function App() {
  const [ showPanel, setShowPanel ] = useState(false);

  const handleClick = () => {
    setShowPanel(!showPanel);
  }

  return (
    <div className='App'>
     <div className='datepicker-app-container'>
        <Input
          handleClick={handleClick}
        />
        <div className={`${showPanel? `slide-panel`: ``} show-panel`}>
          <Datepicker
            initialDate={new Date()}
            locale={id}
            daysLocale={locale}
          />
        </div>     
      </div>
    </div>
  );
}

export default App;
