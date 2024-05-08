import { useState } from 'react';

import { Box , TextField , Button ,Styled, Typography  } from '@mui/material';

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



const Text = Styled(Typography)`
         color: #878787;
         font-size: 14px;

`


const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account ,toggleAccount] = useState('login');
    return (
    <Component>
        <Box>
           <image src={imageURL} alt = "Login"/>
           {
              account === 'login' ?
           <Wrapper>
             <TextField variant='standard' label="Enter username" />
             <TextField variant='standard' label="Enter password" />
             <LoginButton variant='contained'>Login</LoginButton>
             <Text style={{ textAlign: 'center'}} >OR</Text>
             <SignupButton>Create an Account </SignupButton>
            </Wrapper> 
            :
            <Wrapper>
             <TextField variant='standard' label="Enter name" />
             <TextField variant='standard' label="Enter username" />
             <TextField variant='standard'  label="password"/>

             <SignupButton>Signup</SignupButton>
             <Text style={{ textAlign: 'center'}} >OR</Text>
             <LoginButton variant ='contained'>Already have  an Account </LoginButton>
            </Wrapper> 
            }     
        </Box>
    </Component>   
    )
}

export default Login;