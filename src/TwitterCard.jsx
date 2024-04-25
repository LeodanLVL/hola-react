import { useState } from "react"

export function TwitterCard({FormatUserName, userName ="unknown", name, InicialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(InicialIsFollowing  )
    
    

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handlerClick = () =>{
        setIsFollowing(!isFollowing)

    }    

    return (
       <article className='tw-followCard' > 
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src={`https://unavatar.io/${userName}`}
            alt="El avatar de midudev" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span
                className='tw-followCard-infouserName'>{FormatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handlerClick}>
               {text}
            </button>
        </aside>
       </article>
    )
}