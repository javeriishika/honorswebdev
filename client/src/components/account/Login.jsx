import { useState } from 'react';

import { Box , TextField , Button ,Styled, Typography  } from '@mui/material';
import{ API } from'../../service/api';
import { signupUser } from '../../../../server/controller/user-controller';

const Component = Styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`


const image = Styled( 'img' )({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',

});


const Wrapper = Styled(Box)`
      padding: 25px 35 px;
      display:flex;
      flex: 1;
      flex-direction; column;
      & > div ,& > button , & > p{
        margin-top:20px,
      }`

const LoginButton = Styled(Button)
      `text-tranform: none;
       backgorund: #FB641B;
       color: #fff;
       height: 48px;
       border-radius: 2px;

`

const SignupButton = Styled(Button)`
text-tranform: none;
       backgorund: #fff;
       color: #2874f0;
       height: 48px;
       border-radius: 2px;
       box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
 const Error = Styled(Typography)
 `
 font-size: 16px;
 color: #ff6161;
line-height: 0;
margin-top; 10px;
font-weight:600;


 `


const Text = Styled(Typography)`
         color: #878787;
         font-size: 14px;

`
const loginInitialValues={
    username:'',
    password:''
}
const signupInitialValues ={
    name:'',
    username:'',
    password:''
}

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account ,toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error,setError]=useState(loginInitialValues);
    const [login,setLogin] = useState()
    const toggleSignup = () =>{
          account ==='Signup' ?toggleAccount("Login"): toggleAccount('Signup');

    }

const onInputChange = (e) => {
       setSignup({...signup, [e.target.name]:e.target.value});

}

const signupUser= async() =>{
    let respone =  await API.userSignup(signup);
    if(Response.isSuccess){
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login')
    } else{
setError("something went wrong. please try again later");
    }



}
const onValueChange = (e) =>{
    setLogin({...login, [e.target.name]:e.target.value})

}
const loginUser = ()=>{
    
}
    return (
    <Component>
        <Box>
           <image src={imageURL} alt = "Login"/>
           {
              account === 'login' ?
           <Wrapper>
             <TextField variant='standard'onChange={(e)=>onValueChange(e)} name="username"label="Enter username" />
             <TextField variant='standard'onChange={(e)=>onValueChange(e)} 
             name="password"label="Enter password" />

{
    error && <Error>{error}</Error>
}

             <LoginButton variant='contained' onClick={()=>loginUser()}>Login</LoginButton>
             <Text style={{ textAlign: 'center'}} >OR</Text>
             <SignupButton onClick={() => toggleSignup()}>Create an Account </SignupButton>
            </Wrapper> 
            :
            <Wrapper>
             <TextField variant='standard' onChange={(e) => onInputChange(e)} name="name"label="Enter name" />
             <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter username" />
             <TextField variant='standard' onChange={(e) => onInputChange(e)}name='password' label="password"/>
             { error &&<Error>{error}</Error>}

             <SignupButton onClick={() => signupUser}>Signup</SignupButton>
             <Text style={{ textAlign: 'center'}} >OR</Text>
             <LoginButton variant ='contained' onClick={() => toggleSignup()}>Already have  an Account </LoginButton>
            </Wrapper> 
            }     
        </Box>
    </Component>   
    )
}

export default Login;