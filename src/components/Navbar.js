const Navbar = (props) => {
    return (
        <>
        <nav class='flex justify-between px-20 py-10 items-center bg-white'>
                <h1 class='text-xl text-gray-800 font-bold'>EZPlanner {props.navigation}</h1>
                <div class='flex items-center'>
                    <div class='flex items-right pr-10'>
                    <img src='https://www.svgrepo.com/show/67599/magnifying-glass.svg' class='h-6 w-6 pt-1.5'></img>
                        <input class='ml-2 outline-none bg-transparent font- h-8 rounded-3xl' type='text' name='search' id='search' placeholder='Search...'/>
                    </div>
                    <ul class='flex items-center space-x-6'>
                        <li class='font-semibold text-gray-700 hover:text-black-800 cursor-pointer' onClick={props.homeToggle}>
                            Home
                        </li>
                        <li class='font-semibold text-gray-700 hover:text-black-800 cursor-pointer' onClick={props.plannerToggle}>
                            Planner
                        </li>
                        <li class='font-semibold text-gray-700 hover:text-black-800 cursor-pointer' onClick={props.profileToggle}>
                            Profile
                        </li>
                        <li class='font-semibold text-gray-700 hover:text-black-800 cursor-pointer' onClick={props.loginToggle}>
                            Sign In / Up
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="font-semibold text-gray-700 hover:text-black-800 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Tools 
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                            <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a class="text-sm cursor-pointer hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={props.notesToggle}>Notes</a>
                                </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;