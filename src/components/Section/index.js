import './styles.css'


export default function Section (params) {
    return (
        <div className="section--box">
            <h1 className="section--title"> {params.title} </h1>
            {
                params.description.map((paragraph) => (
                    <p className="section--paragraph"> {paragraph.paragraph} </p>
                ))      
            }
        </div>
    )
}