import {memo} from 'react'

function HeaderComponent(){
    return (
        <header className='h-[90vh]'>
        <div className='text-[#000000]'>Julhão Roludo</div>
        </header>
    )


}
export const Header = memo(HeaderComponent)