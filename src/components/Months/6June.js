import {useState} from 'react'

const June = (props) => {
    const [view, setView] = useState(false)

    const viewToggle = () => {
        setView(!view)
    }

    return (
        <>
            <div class='grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-px pt-px mt-1 bg-gray-200'>
                <div class='relative flex flex-col bg-gray group'>
                    <span class='mx-2 my-1 text-xs font-bold'>29</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-gray group'>
                    <span class='mx-2 my-1 text-xs font-bold'>30</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-gray group'>
                    <span class='mx-2 my-1 text-xs font-bold'>31</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>1</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'>
                    </div>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>2</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>3</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>4</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>5</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>6</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>7</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>8</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>9</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>10</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>11</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>12</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>13</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>14</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>15</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>16</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>17</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>18</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>19</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>20</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>21</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>22</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>23</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>24</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>25</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>26</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>27</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>28</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>29</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-white group'>
                    <span class='mx-2 my-1 text-xs font-bold'>30</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-gray group'>
                    <span class='mx-2 my-1 text-xs font-bold'>1</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
                <div class='relative flex flex-col bg-gray group'>
                    <span class='mx-2 my-1 text-xs font-bold'>2</span>
                    <div class='flex flex-col px-1 py-1 overflow-auto'/>
                    <button class='absolute bottom-0 right-0 flex items-center justify-center hidden w-4 h-4 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500'>
                        <img src='https://img.icons8.com/?size=512&id=30M9wv1iFkcH&format=png'/>
                    </button>
                </div>
            </div>
            {view ?
            (
                <>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center mt-40">
                    <div class="relative w-full max-w-xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    26 May
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={viewToggle}>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-6 space-y-6">
                            </div>
                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
                            <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Add</button>
                            <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
            :
            (
                <>
                </>
            )
            }
        </>
    )
}

export default June;