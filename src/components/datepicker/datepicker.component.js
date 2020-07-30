import React, { useState, useRef, useEffect } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import PropTypes from 'prop-types';
import { id } from 'date-fns/locale';
import locale from 'date-fns/esm/locale/id';

import Input from '../input/input.component';
import RegularDatepicker from '../regular-datepicker/regular-datepicker.component';
import FullScreenDatepicker from '../full-screen-datepicker/full-screen-datepicker.component';

const Datepicker = ({ selectedDate, locale, localeDate, onPickDate, type }) => {
    const timeout = 500;
    const ref = useRef(null);
    const [ showPanel, setShowPanel ] = useState(false);
    const [ defaultDate, setDefaultDate ] = useState(new Date(selectedDate));
    const [ datePick, setDatePick ] = useState(new Date(selectedDate));  
  
    const handleClick = () => {
        setShowPanel(!showPanel);
        setTimeout(() => {
            setDefaultDate(new Date(datePick));
        }, timeout);
    }
  
    const handleCancel = () => {
      setShowPanel(!showPanel);
    }
  
    const handlePickDate = (date) => {
        // const pickDate = format(new Date(date), 'MM-dd-yy', { locale : locale });
        setDatePick(new Date(date));
        onPickDate(new Date(date));
        setTimeout(() => {
            setDefaultDate(new Date(date));
        }, timeout);
        setShowPanel(!showPanel);
    }
  
    const handleNextSlideMonth = () => {
        setDefaultDate(addMonths(defaultDate, 1));
    }
  
    const handlePreviousSlideMonth = () => {
        setDefaultDate(subMonths(defaultDate, 1));
    }
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowPanel(false);
            setTimeout(() => {
            setDefaultDate(new Date(datePick));
            }, timeout);
        }
    };
  
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    if (type === 'regular') {
        return (
 
            <div className='datepicker-app-container' ref={ref} >
                <Input
                    handleClick={handleClick}
                    value={format(new Date(selectedDate), 'dd MMMM yyyy', { locale : locale })}
                />
                <div className={`${showPanel? `slide-panel`: ``} show-panel`}>
                    <RegularDatepicker
                        initialDate={defaultDate}
                        selectedDate={datePick}
                        locale={locale}
                        daysLocale={localeDate}
                        onPickDate={handlePickDate}
                        handleNext={handleNextSlideMonth}
                        handlePrevious={handlePreviousSlideMonth}
                    
                    />
                </div>  
            </div>
    
        )
    }
    else if (type === 'full-screen') {
        return (
            <div className='datepicker-app-container' ref={ref} >
                <Input
                    handleClick={handleClick}
                    value={format(new Date(selectedDate), 'dd MMMM yyyy', { locale : locale })}
                />
                <div className={`${showPanel? `show`: ``} full-screen-panel `}>
                    <FullScreenDatepicker
                        initialDate={defaultDate}
                        selectedDate={datePick}
                        locale={locale}
                        daysLocale={localeDate}
                        onPickDate={handlePickDate}
                        handleNext={handleNextSlideMonth}
                        handlePrevious={handlePreviousSlideMonth}
                        handleCancel={handleCancel}
                    />
                </div>
           </div>
        )
    }
    return <div/>

};

export default Datepicker;

Datepicker.propTypes = {
    onPickDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    type: PropTypes.oneOf(['full-screen', 'regular']),
};

Datepicker.defaultProps = {
    locale: id,
    localeDate: locale
};