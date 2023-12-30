import React,{useState,useEffect} from "react";

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
        <div>
            <h1>Login</h1>
            <input name="inputEmail" value={inputEmail} onChange={handleChange} />
            <input name="inputPassword" value={inputPassword} onChange={handleChange} />
            <button onClick={handleSubmitLogin}>Login</button>
        </div>
    )
}

export default LoginPage;