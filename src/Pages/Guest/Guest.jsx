import React, { useState } from 'react'

function Guest() {
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputMiddleName, setInputMiddleName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputBirthday, setInputBirthday] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputContactNo, setInputContactNo] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputAge, setInputAge] = useState('');

    const handleChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      if (name === 'inputEmail'){
          setInputEmail(value);
      }else if(name === 'inputFirstName'){
          setInputFirstName(value);
      }else if(name === 'inputMiddleName'){
        setInputMiddleName(value);
      }else if(name === 'inputLastName'){
        setInputLastName(value);
      }else if(name === 'inputBirthday'){
        setInputBirthday(value);
      }else if(name === 'inputAddress'){
        setInputAddress(value);
      }else if(name === 'inputContactNo'){
        setInputContactNo(value);
      }else if(name === 'inputAge'){
        setInputAge(value);
      }
      
    }
  return (
    <div> 
        <input name="inputFirstName" value={inputFirstName} onChange={handleChange} />
        <input name="inputMiddleName" value={inputMiddleName} onChange={handleChange} />
        <input name="inputLastName" value={inputLastName} onChange={handleChange} />
        <input type="date" name="inputBirthday" value={inputBirthday} onChange={handleChange} />
        <input name="inputAddress" value={inputAddress} onChange={handleChange} />
        <input name="inputContactNo" value={inputContactNo} onChange={handleChange} />
        <input name="inputEmail" value={inputEmail} onChange={handleChange} />
        <input name="inputAge" value={inputAge} onChange={handleChange} /> 
    </div>
  )
}

export default Guest