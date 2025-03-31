export type HeaderProps = {
    header: string | undefined,

}

const Header = ({ header }: HeaderProps) => {
    return (
        <h2 className="header text-purple-900 text-3xl font-semibold" >
            {header}
        </h2>
    )
}

export default Header