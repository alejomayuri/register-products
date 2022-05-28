export default function HeaderButton ({ onClick, text }) {
    return(
        <button className='header-button' onClick={onClick}>{text}</button>
    )
}