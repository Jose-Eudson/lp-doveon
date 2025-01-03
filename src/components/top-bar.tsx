import {memo} from 'react'

function TopBarComponent(){
    return(
        <>

       <div className='py-4 px-8 flex justify-be'>
        <div className='text-[#000000] font-bold'>Doveon</div>
        <nav className='flex space-x-8'>
            <a className='text-[#000000]'>Julhão troxudo</a>
        </nav>
        <div className='border-t border-gray-400'></div>
       </div> 
        </>
    )


}
export const TopBar = memo(TopBarComponent)