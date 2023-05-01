import {useState} from 'react'
import moment from 'moment'

const Home = (props) => {
    const date = moment()
    return (
        <>
            <div class='container mx-auto flex flex-col my-5 px-10 rounded-xl' id='homecont'>
                <div class='px-10 py-10 mt-5 rounded-3xl shadow-2xl flex flex-col justify-center' id={props.weather.icon}>
                    <div class='conditionbg1 text-center'>
                        <h1 class='text-4xl'>{date.format('dddd')}</h1>
                        <h1>{date.format('MMM Do YY')}</h1>
                    </div>
                    <div class='conditionbg2 text-center'>
                        <p>Current: <span class='weatherspan'>{props.weather.temp}°F</span></p>
                        <p>Feels Like: <span class='weatherspan'>{props.weather.feelslike}°F</span></p>
                        <p>Humidity: <span class='weatherspan'>{props.weather.humidity}°F</span></p>
                        <p>WindSpeed: <span class='weatherspan'>{props.weather.windspeed} mph</span></p>
                        <p>UV index: <span class='weatherspan'>{props.weather.uvindex}</span></p>
                        <p>Conditions: <span class='weatherspan'>{props.weather.icon}</span></p>
                        <p>Last Updated: <span class='weatherspan'>{date.format('h:mm:ss a')}</span></p>
                    </div>
                </div>
                <br/>
                <div class='flex flex-row'>
                    <div class='flex flex-col px-5 py-5'>
                        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 shadow-2xl" id='quote'role="alert">
                            <p class='text-lg'>'{props.quote.quote}' - {props.quote.author} ({props.quote.category})</p>
                        </div>
                        <ul class='flex pt-10'>
                            <li class='mr-6'>
                                <a href='https://gmail.com' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" data-name="Layer 1" viewBox="0 0 32 32" id="gmail">
                                        <path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"/>
                                        <path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"/>
                                        <path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"/>
                                        <path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"/>
                                        <path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li class='mr-6'>
                                <a href='https://github.com/' target='_blank'>
                                    <img class='h-8 w-8' src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png'></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id='notepadcont flex'>
                        <form class='text-center'>
                            <label for='quicknotes'>Notes</label>
                            <br/>
                            <textarea id='notepad' name='quicknotes' rows='15' cols='50'/>
                            <input  type='submit' value='Store'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;