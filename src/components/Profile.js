import {useState} from 'react'

const Profile = (props) => {
    const [quoteCategories, setQuoteCategories] = useState(false)
    const [icons, setIcons] = useState(false)
    const [edit, setEdit] = useState(true)
    const [profileInfo, setProfileInfo] = useState({...props.profileInfo})

    const quoteCategoriesToggle = () => {
        setQuoteCategories(!quoteCategories)
        setIcons(false)
    }
    const iconsToggle = () => {
        setQuoteCategories(false)
        setIcons(!icons)
    }
    const editToggle = () => {
        setEdit(!edit)
    }
    const handleChange = (event) => {
        setProfileInfo({...profileInfo[0], [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdateProfileInfo(profileInfo)
    }

    return (
        <>
            <div class='relative py-32 bg-blueGray-200'>
                <div class='container mx-auto px-4'>
                    <div class='relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-lg'>
                        <div class='px-6'>
                            <div class='flex flex-wrap justify-center'>
                                <div class='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                                    <div class='relative'>
                                        <img id='prof-pic'src='https://i.imgur.com/CbL4ECc.jpg' class='shadow-xl rounded-full h-auto align-middle border-none mx-auto -mt-20'/>
                                    </div>
                                </div>
                            </div>
                        {edit ? (
                        <>
                        <div class='text-center mt-12'>
                            <h3 class='text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
                            {props.profileInfo[0].name}
                            </h3>
                            <div class='text-lg leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                                <p class='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></p>
                            {props.profileInfo[0].zipcode}
                            </div>
                        </div>
                        <div class='mt-10 py-10 border-t border-blueGray-200 text-center'>
                            <div class='flex flex-wrap justify-center'>
                                <div class='w-full lg:w-9/12 px-4'>
                                    <p class='mb-4 text-lg leading-relaxed text-blueGray-700 cursor-pointer' onClick={editToggle}>
                                    Options / Edit
                                    </p>
                                </div>
                            </div>
                        </div>
                        </>
                        ) :
                        (
                        <>
                        <div class='justify-center container flex mt-20'>
                        <form id='editform' onSubmit={handleSubmit}>
                        <label for='name'>Name:</label>
                        <input class='h-7 rounded-md' type='text' name='name' onChange={handleChange} value={props.profileInfo[0].name}/>
                        <br/>
                        <br/>
                        <label for='zipcode'>Zip Code:</label>
                        <input class='h-7 rounded-md' type='text' name='zipcode' onChange={handleChange} value={props.profileInfo[0].zipcode}/>
                        <br/>
                        <br/>
                        <p>Options: </p>
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
                            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 mr-4 px-2 rounded-full' onClick={quoteCategoriesToggle}>Hide</button>
                            </>
                        )
                            :
                        (
                            <>
                            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 mr-4 px-2 rounded-full' onClick={quoteCategoriesToggle}>Categories</button>
                            </>
                        )
                        }
                        <br/>
                        <br/>
                        <label for='icons'>Show Icons: </label>
                        <input type='checkbox' name='icons' checked/>
                        <br/>
                        {icons ?
                        (
                            <>
                            <br/>
                            <label for='gmail'>Gmail: </label>
                            <input type='checkbox' name='gmail' checked/>
                            <br/>
                            <label for='gmail-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='gmail-link'/>
                            <br/>
                            <br/>
                            <label for='github'>Github: </label>
                            <input type='checkbox' name='github' checked/>
                            <br/>
                            <label for='github-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='github-link'/>
                            <br/>
                            <br/>
                            <label for='facebook'>Facebook: </label>
                            <input type='checkbox' name='facebook' checked/>
                            <br/>
                            <label for='facebook-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='facebook-link'/>
                            <br/>
                            <br/>
                            <label for='linkedin'>Linkedin: </label>
                            <input type='checkbox' name='linkedin' checked/>
                            <br/>
                            <label for='linkedin-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='linkedin-link'/>
                            <br/>
                            <br/>
                            <label for='instagram'>Instagram: </label>
                            <input type='checkbox' name='instagram' checked/>
                            <br/>
                            <label for='instagram-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='instagram-link'/>
                            <br/>
                            <br/>
                            <label for='twitter'>Twitter: </label>
                            <input type='checkbox' name='twitter' checked/>
                            <br/>
                            <label for='twitter-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='twitter-link'/>
                            <br/>
                            <br/>
                            <label for='imgur'>Imgur: </label>
                            <input type='checkbox' name='imgur' checked/>
                            <br/>
                            <label for='imgur-link'>link: </label>
                            <input class='h-7 rounded-md' type='url' name='imgur-link'/>
                            <br/>
                            <br/>
                            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 mr-4 px-2 rounded-full' onClick={iconsToggle}>Hide</button>
                            </>
                        )
                            :
                        (
                            <>
                            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 mr-4 px-2 rounded-full' onClick={iconsToggle}>Categories</button>
                            </>
                        )
                        }
                        </form>
                        </div>
                        <div class='mt-10 py-10 border-t border-blueGray-200 text-center'>
                            <div class='flex flex-wrap justify-center'>
                                <div class='w-full lg:w-9/12 px-4 flex justify-evenly'>
                                    <p class='mb-4 text-lg leading-relaxed text-blueGray-700 cursor-pointer' onClick={editToggle}>
                                    Go Back
                                    </p>
                                    <button type='submit' form='editform' value='Update'>Save Changes</button>
                                </div>
                            </div>
                        </div>
                        </>)
                        }
                        </div>
                    </div>
                </div>
            </div>
                    <br/>
        </>
    )
}

export default Profile;