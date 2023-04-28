import {useState} from 'react'

const Login = (props) => {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(true)

    const signInToggle = () => {
        setSignIn(!signIn)
        setSignUp(false)
    }
    const signUpToggle = () => {
        setSignIn(false)
        setSignUp(!signUp)
    }

    return (
        <>
            <div class='container mx-auto'>
                <button onClick={signUpToggle}>Sign Up</button>
                <br/>
                <button onClick={signInToggle}>Sign In</button>
                {signUp ?
                (
                    <>
                    <h1>Sign Up</h1>
                    <form>
                        <label for='username'>Username:</label>
                        <input type='text' name='username'/>
                        <br/>
                        <label for='password'>Password:</label>
                        <input type='text' name='password'/>
                        <br/>
                        <label for='password2'>Reenter Password:</label>
                        <input type='text' name='password2'/>
                        <br/>
                        <input type='submit' value='Create Account'/>
                    </form>
                    </>
                )
                    :
                (
                    <>
                    </>
                )
                }
                {signIn ?
                (
                    <>
                    <h1>Sign In</h1>
                    <form>
                        <label for='username'>Username:</label>
                        <input type='text' name='username'/>
                        <br/>
                        <label for='password'>Password:</label>
                        <input type='text' name='password'/>
                        <br/>
                        <input type='submit' value='Login'/>
                    </form>
                    </>
                )
                    :
                (
                    <>
                    </>
                )
                }
            </div>
        </>
    )
}

export default Login;