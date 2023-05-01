import {useState} from 'react'

const Profile = (props) => {
    const [quoteCategories, setQuoteCategories] = useState(false)
    const [icons, setIcons] = useState(false)

    const quoteCategoriesToggle = () => {
        setQuoteCategories(!quoteCategories)
        setIcons(false)
    }
    const iconsToggle = () => {
        setQuoteCategories(false)
        setIcons(!icons)
    }

    return (
        <>
            <div class='relative py-32 bg-blueGray-200 '>
                <div class='container mx-auto px-4'>
                    <div class='relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-lg'>
                        <div class='px-6'>
                            <div class='flex flex-wrap justify-center'>
                                <div class='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                                    <div class='relative'>
                                        <img id='prof-pic'src='https://i.imgur.com/ch3OAl8.jpg' class='shadow-xl rounded-full h-auto align-middle border-none mx-auto -mt-20'/>
                                    </div>
                                </div>
                            </div>
                        <div class='text-center mt-12'>
                            <h3 class='text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
                            Sammy Liao
                            </h3>
                            <div class='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                                <i class='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                            MA, 02118
                            </div>
                        </div>
                            <div class='mt-10 py-10 border-t border-blueGray-200 text-center'>
                                <div class='flex flex-wrap justify-center'>
                                    <div class='w-full lg:w-9/12 px-4'>
                                        <p class='mb-4 text-lg leading-relaxed text-blueGray-700'>
                                        Options
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <br/>
                    <form>
                        <label for='name'>Name:</label>
                        <input class='h-7 rounded-md' type='text' name='name'/>
                        <br/>
                        <br/>
                        <label for='state'>State:</label>
                        <select class='h-7 rounded-md'>
                            <option class='text-center'>-----------------</option>
                            <option value='AL'>Alabama</option>
                            <option value='AK'>Alaska</option>
                            <option value='AZ'>Arizona</option>
                            <option value='AR'>Arkansas</option>
                            <option value='CA'>California</option>
                            <option value='CO'>Colorado</option>
                            <option value='CT'>Connecticut</option>
                            <option value='DE'>Delaware</option>
                            <option value='DC'>District Of Columbia</option>
                            <option value='FL'>Florida</option>
                            <option value='GA'>Georgia</option>
                            <option value='HI'>Hawaii</option>
                            <option value='ID'>Idaho</option>
                            <option value='IL'>Illinois</option>
                            <option value='IN'>Indiana</option>
                            <option value='IA'>Iowa</option>
                            <option value='KS'>Kansas</option>
                            <option value='KY'>Kentucky</option>
                            <option value='LA'>Louisiana</option>
                            <option value='ME'>Maine</option>
                            <option value='MD'>Maryland</option>
                            <option value='MA'>Massachusetts</option>
                            <option value='MI'>Michigan</option>
                            <option value='MN'>Minnesota</option>
                            <option value='MS'>Mississippi</option>
                            <option value='MO'>Missouri</option>
                            <option value='MT'>Montana</option>
                            <option value='NE'>Nebraska</option>
                            <option value='NV'>Nevada</option>
                            <option value='NH'>New Hampshire</option>
                            <option value='NJ'>New Jersey</option>
                            <option value='NM'>New Mexico</option>
                            <option value='NY'>New York</option>
                            <option value='NC'>North Carolina</option>
                            <option value='ND'>North Dakota</option>
                            <option value='OH'>Ohio</option>
                            <option value='OK'>Oklahoma</option>
                            <option value='OR'>Oregon</option>
                            <option value='PA'>Pennsylvania</option>
                            <option value='RI'>Rhode Island</option>
                            <option value='SC'>South Carolina</option>
                            <option value='SD'>South Dakota</option>
                            <option value='TN'>Tennessee</option>
                            <option value='TX'>Texas</option>
                            <option value='UT'>Utah</option>
                            <option value='VT'>Vermont</option>
                            <option value='VA'>Virginia</option>
                            <option value='WA'>Washington</option>
                            <option value='WV'>West Virginia</option>
                            <option value='WI'>Wisconsin</option>
                            <option value='WY'>Wyoming</option>
                        </select>
                        <br/>
                        <br/>
                        <label for='zipcode'>Zip Code:</label>
                        <input class='h-7 rounded-md' type='text' name='zipcode'/>
                        <br/>
                        <br/>
                        <p>Options:</p>
                        <br/>
                        <label for='quote'>Show Quotes: </label>
                        <input type='checkbox' name='quote' checked/>
                        <br/>
                        {quoteCategories ? 
                        (
                            <>
                            <label for='anger'>anger: </label>
                            <input type='checkbox' name='anger' checked/>
                            <br/>
                            <label for='art'>art: </label>
                            <input type='checkbox' name='art' checked/>
                            <br/>
                            <label for='attitude'>attitude: </label>
                            <input type='checkbox' name='attitude' checked/>
                            <br/>
                            <label for='beauty'>beauty: </label>
                            <input type='checkbox' name='beauty' checked/>
                            <br/>
                            <label for='business'>business: </label>
                            <input type='checkbox' name='business' checked/>
                            <br/>
                            <label for='change'>change: </label>
                            <input type='checkbox' name='change' checked/>
                            <br/>
                            <label for='communications'>communications: </label>
                            <input type='checkbox' name='communications' checked/>
                            <br/>
                            <label for='courage'>courage: </label>
                            <input type='checkbox' name='courage' checked/>
                            <br/>
                            <label for='dating'>dating: </label>
                            <input type='checkbox' name='dating' checked/>
                            <br/>
                            <label for='death'>death: </label>
                            <input type='checkbox' name='death' checked/>
                            <br/>
                            <label for='dreams'>dreams: </label>
                            <input type='checkbox' name='dreams' checked/>
                            <br/>
                            <label for='education'>equality: </label>
                            <input type='checkbox' name='equality' checked/>
                            <br/>
                            <label for='equality'>equality: </label>
                            <input type='checkbox' name='equality' checked/>
                            <br/>
                            <label for='experience'>experience: </label>
                            <input type='checkbox' name='experience' checked/>
                            <br/>
                            <label for='failure'>failure: </label>
                            <input type='checkbox' name='failure' checked/>
                            <br/>
                            <label for='faith'>faith: </label>
                            <input type='checkbox' name='faith' checked/>
                            <br/>
                            <label for='family'>family: </label>
                            <input type='checkbox' name='family' checked/>
                            <br/>
                            <label for='fear'>fear: </label>
                            <input type='checkbox' name='fear' checked/>
                            <br/>
                            <label for='fitness'>fitness: </label>
                            <input type='checkbox' name='fitness' checked/>
                            <br/>
                            <label for='forgiveness'>forgiveness: </label>
                            <input type='checkbox' name='forgiveness' checked/>
                            <br/>
                            <label for='freedom'>freedom: </label>
                            <input type='checkbox' name='freedom' checked/>
                            <br/>
                            <label for='friendship'>friendship: </label>
                            <input type='checkbox' name='friendship' checked/>
                            <br/>
                            <label for='funny'>funny: </label>
                            <input type='checkbox' name='funny' checked/>
                            <br/>
                            <label for='governmoneyt'>governmoneyt: </label>
                            <input type='checkbox' name='governmoneyt' checked/>
                            <br/>
                            <label for='happiness'>happiness: </label>
                            <input type='checkbox' name='happiness' checked/>
                            <br/>
                            <label for='history'>history: </label>
                            <input type='checkbox' name='history' checked/>
                            <br/>
                            <label for='hope'>hope: </label>
                            <input type='checkbox' name='hope' checked/>
                            <br/>
                            <label for='humor'>humor: </label>
                            <input type='checkbox' name='humor' checked/>
                            <br/>
                            <label for='inspirational'>inspirational: </label>
                            <input type='checkbox' name='inspirational' checked/>
                            <br/>
                            <label for='intelligence'>intelligence: </label>
                            <input type='checkbox' name='intelligence' checked/>
                            <br/>
                            <label for='knowledge'>knowledge: </label>
                            <input type='checkbox' name='knowledge' checked/>
                            <br/>
                            <label for='leadership'>leadership: </label>
                            <input type='checkbox' name='leadership' checked/>
                            <br/>
                            <label for='life'>life: </label>
                            <input type='checkbox' name='life' checked/>
                            <br/>
                            <label for='love'>love: </label>
                            <input type='checkbox' name='love' checked/>
                            <br/>
                            <label for='marriage'>marriage: </label>
                            <input type='checkbox' name='marriage' checked/>
                            <br/>
                            <label for='money'>money: </label>
                            <input type='checkbox' name='money' checked/>
                            <br/>
                            <label for='success'>success: </label>
                            <input type='checkbox' name='success' checked/>
                            <br/>
                            <button onClick={quoteCategoriesToggle}>Hide</button>
                            </>
                        )
                            :
                        (
                            <>
                            <button onClick={quoteCategoriesToggle}>Categories</button>
                            </>
                        )
                        }
                        <br/>
                        <label for='icons'>Show Icons: </label>
                        <input type='checkbox' name='icons' checked/>
                        <br/>
                        {icons ?
                        (
                            <>
                            <label for='gmail'>Gmail: </label>
                            <input type='checkbox' name='gmail' checked/>
                            <br/>
                            <label for='gmail-link'>link: </label>
                            <input type='url' name='gmail-link'/>
                            <br/>
                            <label for='github'>Github: </label>
                            <input type='checkbox' name='github' checked/>
                            <br/>
                            <label for='github-link'>link: </label>
                            <input type='url' name='github-link'/>
                            <br/>
                            <button onClick={iconsToggle}>Hide</button>
                            </>
                        )
                            :
                        (
                            <>
                            <button onClick={iconsToggle}>Categories</button>
                            </>
                        )
                        }
                    </form>
        </>
    )
}

export default Profile;