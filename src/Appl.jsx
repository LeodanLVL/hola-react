import './Card.css'
import { TwitterCard } from './TwitterCard.jsx'

export function App() {

    const FormatUserName = (userName) => `@${userName}`
    const midudev = {   userName : 'midudev', name:' Migel Angel Duran' ,InicialIsFollowing: true}
    return (
        <section className='App'>
            <TwitterCard
                FormatUserName={FormatUserName}
                {...midudev} />
            <TwitterCard
                FormatUserName={FormatUserName}
                userName="tanjiro"
                name="Kamado Tanjiro" />
            <TwitterCard
                FormatUserName={FormatUserName}
                userName="elonmusk"
                name="Elon Musk"/>
            <TwitterCard
                FormatUserName={FormatUserName}
                userName="vfxnder" name="Vanderhart" />

        </section>

    )

}