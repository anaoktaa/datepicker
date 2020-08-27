# React Datepicker

React datepicker is an awesome customizable datepicker component build using React and date-fns. It provides multi language (using date-fns) and customizable properties.

<p align="center">
  <img src='./src/assets/gif/datepicker.gif' />
</p>


## Usage

```bash
$ npm install
$ npm start
```

## Available Props

- `selectedDate => date`
  - Selected date when first render (mandatory).
- `onPickDate(date) => void`
  - Function where the callback is selected date
- `type => string`
  - Type of datepicker : regular & full-screen
- `locale`
  - Select language from date-fns/locale, default id (Indonesia) 
- selectedColor => string
  - Color of datepicker when date is selected, default color #7cc33b
- title => string
  - If type is full-screen, title of datepicker can changes with this properties, default 'datepicker'

## Usage

```jsx
import { enUS } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/en-US';

function MyApp() {
  return (
    <div className="App">
        <Datepicker
            selectedDate={selectedDate}
            locale={enUS}
            localeDate={locale}
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
```
