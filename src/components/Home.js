import {useState} from 'react'

const Home = (props) => {

    return (
        <>
            <ul class='flex'>
                <li class='mr-6'>
                    <a class='text-blue-800 hover:text-blue-800 cursor-pointer' onClick={props.homeToggle}>Home</a>
                </li>
                <li class='mr-6'>
                    <a class='text-blue-500 hover:text-blue-800 cursor-pointer' onClick={props.profileToggle}>Profile</a>
                </li>
                <li class='mr-6'>
                    <a class='text-blue-500 hover:text-blue-800 cursor-pointer' onClick={props.loginToggle}>Sign In / Up</a>
                </li>
            </ul>
                <h1>Home</h1>
        </>
    )
}

export default Home;