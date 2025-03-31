export type ParagraphProps = {
    paragraph: string | undefined,

}

const Paragraph = ({ paragraph }: ParagraphProps) => {
    return (
        <p className="paragraph text-purple-700 text-lg font-medium" >
            {paragraph}
        </p>
    )
}

export default Paragraph;