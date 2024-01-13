import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

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
                    
                    
                navigate(`/${data[0].EMPLOYEE_TYPE}/dashboard/${data[0].EMPLOYEE_ID}`)
                        
                    
                }
            }else {
                console.log('Server returned an error:', response.statusText);
              }

        }   catch (error){
            console.log('Error occured while logging in',error)
        }    
    }

    return(
        <section className = "login_container">
        <div className = "login_body">
            <h1 className = "login_header">Login</h1>
            <div className = "login_components">
                <h1 className = "login_subtitle">Email</h1>
                <input className = "login_input" name="inputEmail" value={inputEmail} onChange={handleChange} />
                <h1 className = "login_subtitle">Password</h1>
                <input className = "login_input" name="inputPassword" value={inputPassword} onChange={handleChange} type="password" />
                
                <div className = "login_button_comp ">
                    <button className = "login_button btn" onClick={handleSubmitLogin}>LOGIN</button>
                </div>
                
            </div> 
        </div>

        {/* <div className = "login_body">

        <div className = "login_photos">
            <div>
                <img src={IMAGES.imgBar1} alt ="" />
            </div>
        </div>

        </div> */}
    </section> 
    )
}

export default LoginPage;