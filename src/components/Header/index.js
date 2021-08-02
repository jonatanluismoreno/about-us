import Button from '../Button'
import './styles.css'

import { ReactComponent as Comment } from './comment.svg'
import { ReactComponent as Search } from './search.svg'
import { ReactComponent as Notion } from './notion.svg'
import { ReactComponent as Dots } from './dots.svg'

export default function Header () {
    return (
        
        <div className="header--box">
            <div className="header--routes">
                <Button clickeable hover text = "📕 Recursos" />
                <Button text = "/" />
                <Button text = "Hacia React ⚛" />
            </div>
            <div className="header--options">
                <Button text = " Comment " clickeable hover bordered icon={Comment}/>
                <Button text = " Search " clickeable hover icon={Search} />
                <Button text = " Duplicate " clickeable hover />
                <Button text = " " clickeable hover icon={Dots} />
                <Button text = " Notion " clickeable hover icon={Notion} />
            </div>
        </div>
    )
}