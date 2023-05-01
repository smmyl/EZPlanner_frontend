import {useState} from 'react'

const Login = (props) => {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(true)
    const [signInText, setSignInText] = useState('')
    const [signUpText, setSignUpText] = useState('text-4xl')

    const signInToggle = () => {
        setSignIn(true)
        setSignUp(false)
        setSignInText('text-4xl')
        setSignUpText('')
    }
    const signUpToggle = () => {
        setSignIn(false)
        setSignUp(true)
        setSignInText('')
        setSignUpText('text-4xl')
    }
    return (
        <>
            <div class='relative flex flex-col min-w-0 bg-white w-full my-20 mx-auto container p-20 shadow-xl rounded-lg border-8 border-black'>
                <div class='flex justify-evenly' id='loginbuttons'>
                    <button class={signUpText} onClick={signUpToggle}>Sign Up</button>
                    <button class={signInText} onClick={signInToggle}>Sign In</button>
                </div>
                <br/>
                <div class='flex flex-col ml-10 p-10' id='loginform'>
                {signUp ?
                (
                    <>

                    <form>
                        <label for='username'>Username:</label>
                        <input class='loginspan h-7 rounded-md' type='text' name='username'/>
                        <br/>
                        <br/>
                        <label for='password'>Password:</label>
                        <input class='loginspan h-7 rounded-md' type='text' name='password'/>
                        <br/>
                        <br/>
                        <label for='password2'>Reenter Password:</label>
                        <input class='loginspan h-7 rounded-md' type='text' name='password2'/>
                        <br/>
                        <br/>
                        <input class='loginspan cursor-pointer' type='submit' value='Create Account'/>
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
                    <form>
                        <label for='username'>Username:</label>
                        <input class='loginspan h-7 rounded-md' type='text' name='username'/>
                        <br/>
                        <br/>
                        <label for='password'>Password:</label>
                        <input class='loginspan h-7 rounded-md' type='text' name='password'/>
                        <br/>
                        <br/>
                        <input class='loginspan cursor-pointer' type='submit' value='Login'/>
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
            </div>
        </>
    )
}

export default Login;