
import { Slider } from '@mui/material';
import { useState } from 'react';
import Hotels from '../pages/Hotels';
const RangePriceSlider = () => {
  
    // Our States
    const [value, setValue] = useState([50,2000]);
    const stylePrg ={
        fontSize : "12px",
        
       
    }
    
    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
    };
    // Hotels.filter(hotel=> hotel.price>value[0] & <value[1] )
    return (
      <div style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
      }}>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        min={50}
        max={2000}
      />
      <p className='text' style={stylePrg}>Your Range Price :  {value[0]}  - {value[1]} TND</p>
    </div>
  );
}
  
export default RangePriceSlider