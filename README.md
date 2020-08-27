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

- `value`
  - A date object, default value is `today`
- `onChange(date) => void`
  - Function where the callback is selected date
- `customColor` an object which the value is one of these
  - `selected_date`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#000', bgColor: '#fff' }`
  - `date`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#000', bgColor: '#fff' }`
  - `month`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#fff', bgColor: '#2196f3' }`
  - `year`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#fff', bgColor: '#39373A' }`

## Usage

```jsx
import React from 'react';
import { Datepicker } from '@adibfirman/datepicker';

function MyApp() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Datepicker />
    </div>
  );
}
```

## Contribute & Help

- Fork and send Pull Requests are welcome
- Submit an issues
- A new feature requests

## License

This library is [MIT licensed](https://github.com/adibfirman/react-datepicker/blob/master/LICENSE)
