type HeaderProps = {
    text: string,

}

const Header = ({ text }: HeaderProps) => {
    return (
        <h2 className="header text-purple-900 text-3xl font-semibold" >
            {text}
        </h2>
    )
}

export default Header