type ParagraphProps = {
    text: string,

}

const Paragraph = ({ text }: ParagraphProps) => {
    return (
        <p className="paragraph text-purple-700 text-lg font-medium" >
            {text}
        </p>
    )
}

export default Paragraph;