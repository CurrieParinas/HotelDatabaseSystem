import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () =>{
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if (name === 'inputEmail'){
            setInputEmail(value);
        }else if(name === 'inputPassword'){
            setInputPassword(value);
        }
    }

    const handleSubmitLogin = async (e) =>{
        e.preventDefault();

        const inputEmployee ={
            email:inputEmail,
            password: inputPassword
        };
    
        console.log(inputEmployee);

        try{
            const response = await fetch(`http://localhost:8080/miancurocho/accounts/getIdAndType?email=${inputEmployee.email}&password=${inputEmployee.password}`)
            if(response.ok){
                const data = await response.json();
                //PERFORM NAVIGATION HERE
                if(data.length === 0){
                    console.log('Invalid password')
                }
                else{
                    
                    if(data[0].EMPLOYEE_TYPE === "FD"){
                        navigate(`/fd/dashboard/${data[0].EMPLOYEE_ID}`)
                    } else{
                        navigate(`/${data[0].EMPLOYEE_TYPE}/dashboard/${data[0].EMPLOYEE_ID}`)
                        console.log('OTHERS TYPE ')
                    }
                    
                }
            }else {
                console.log('Server returned an error:', response.statusText);
              }

        }   catch (error){
            console.log('Error occured while logging in',error)
        }    
    }

    return(
        <div>
            <h1>Login</h1>
            <input name="inputEmail" value={inputEmail} onChange={handleChange} />
            <input name="inputPassword" value={inputPassword} onChange={handleChange} />
            <button onClick={handleSubmitLogin}>Login</button>
        </div>
    )
}

export default LoginPage;