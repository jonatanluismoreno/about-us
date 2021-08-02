import './styles.css'
import Section from '../Section'
import { publications } from '../../assets/content/text'

export default function Sections () {
    return (
        <div className="main--section">
            <div>
                <h1>HaciaReact ⚛</h1>
                <p>Basado en el routemap de React: https://roadmap.sh/react</p>
            </div>
            { 
                publications.map((publication) => (
                    <Section title= {publication.title} description= {publication.paragraphs} />
                )) 
            }
        </div>
    )
}