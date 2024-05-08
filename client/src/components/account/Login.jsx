
import { Box , TextField , Button ,Styled  } from '@mui/material';

const Component = Styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    return (
    <Component>
        <img src={imageURL} alt = "Login"/>
        <TextField variant='standard' />
        <TextField variant='standard' />
        <Button variant='contained'>Login</Button>
        <Button>Create an Account </Button>
    </Component>   
    )
}

export default Login;