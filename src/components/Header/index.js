import Button from '../Button'
import './styles.css'


export default function Header () {
    return (
        <div className="header--box">
            <div className="header--routes">
                <Button clickeable = {true} hover = {true} text = "📕 Recursos" />
                <Button text = " / " />
                <Button text = "Hacia React" />
            </div>
            <div className="header--options">
                <Button text = " Comment " clickeable = {true} hover = {true} bordered = {true} />
                <Button text = " Search " clickeable = {true} hover = {true} />
                <Button text = " Duplicate " clickeable = {true} hover = {true} />
                <Button text = " ... " clickeable = {true} hover = {true} />
                <Button text = " Notion " clickeable = {true} hover = {true} />
            </div>
        </div>
    )
}