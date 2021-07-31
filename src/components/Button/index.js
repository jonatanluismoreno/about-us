import './styles.css'



export default function Button (params) {
    var classes = 'button'
    if (params.clickeable) {
        classes = classes + ' clickeable '
    }
    if (params.hover) {
        classes = classes + ' hover '
    }
    if (params.bordered) {
        classes = classes + ' bordered '
    }
    return (
        <button className={classes}>
            {params.text}
        </button>
    )
}
