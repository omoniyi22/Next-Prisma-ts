//SlateJS - WYSIWYG

import { useCallback, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

import { BaseEditor, createEditor, Descendant, Editor, Element, Transforms } from "slate"
import { Slate, Editable, withReact, ReactEditor, DefaultElement } from "slate-react"

type CustomElement = { type: "code" | "paragraph", children: CustomText[] }
type CustomText = { text: string }

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor,
        Element: CustomElement,
        Text: CustomText
    }
}

type NewPostPageProps = {
    children: React.ReactNode
}

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph" }]
    }
]

const CodeElement = props => (
    <pre { ...props.attributes } style={ { backgroundColor: "black", color: "white" } } >
        <code>{ props.children }</code>
    </pre>
)

const DefaultElement = props => <p { ...props.attributes }>{ props.children }</p>
const Leaf = props => (
    <span
        { ...props.attributes }
        style={ { fontWeight: props.leaf.bold ? "bold" : "normal" } }
    >
        { props.children }
    </span>
)

const NewPostPageProps = (props: NewPostPageProps) => {

    const [editor] = useState(() => withReact(createEditor()))

    const renderElement = useState(() => useCallback((props) => {
        switch (props.element.type) {
            case "code":
                return <CodeElement { ...props } />
            default:
                return <DefaultElement { ...props } />
        }
    }, []))

    const renderLeaf = useCallback(props => <Leaf { ...props } />, [])

    return (
        <Flex>
            New Posts
        </Flex>
    )
}

export default NewPostPageProps