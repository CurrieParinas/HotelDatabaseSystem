import React,{useState,useEffect} from "react";
import './LoginPage.css';
//import IMAGES from './Components/Photos/Photos.js';

const LoginPage = () =>{
    const [employee,setEmployee] = useState({
        email:'',
        password:''
    });
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword,setInputPassword] = useState('');

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
        

        setEmployee(inputEmployee);
        console.log(inputEmployee);

        try{
            const response = await fetch(`http://localhost:8080/miancurocho/accounts/getId?accountEmail=${inputEmployee.email}&accountPassword=${inputEmployee.password}`)
            if(response.ok){
                const data = await response.text();
                //PERFORM NAVIGATION HERE
                if(data === ''){
                    console.log('Invalid password')
                }
                else{
                    console.log(data)
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
                    <input className = "login_input" name="inputPassword" value={inputPassword} onChange={handleChange} />
                    
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

