import { ReactElement, useEffect, useState } from "react"
import style from "./style.module.css"

interface OnChangeEvent {
    target: {
        value: any[]
    }
}
interface Option {
    value: any, label: string
}
type Props = {
    onOpenClick?: () => any
    options?: Option[]
    value?: any[]
    disabled?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    onSelect?: (e: OnChangeEvent) => any
    toggleIcon?: (props: { open: boolean }) => ReactElement
}

export const toggleInArray = (value: any, array: any[]): any[] => {
    return array.includes(value) ? array.filter(i => i !== value) : [...array, value]
}


export const DropDowButton = (props: Props) => {
    const options = props?.options ?? []
    const [open, setOpen] = useState<boolean>(false)
    const propsValue = props?.value ?? []
    const toggle = (value: any = undefined) => {
        if (props.disabled) {
            return
        }
        setOpen(!open)
        if (value) {
            props.onSelect && props.onSelect({ target: { value: toggleInArray(value, propsValue) } })
        }
    }
    useEffect(() => {
        setOpen(false)
    }, [props?.disabled])

    useEffect(() => {
        open ? (props?.onOpen && props.onOpen()) : (props?.onClose && props.onClose())
    }, [open])

    const label = options.filter(o => (propsValue).includes(o.value)).map(o => o.label).join(", ")

    return <>
        <div className={`${style.container} tk-drop-down`}>
            <div onClick={() => (options.length > 1) && toggle()} className={open ? `${style.open_input}  ${style.input}` : style.input}>
                <span>{label}</span>
                {props?.toggleIcon && props.toggleIcon({ open })}
            </div>
            {open && <div className={style.menu}>
                {options.map(o => <div key={o.value} onClick={() => toggle(o.value)} className={style.option}>{o.label}</div>)}
            </div>}
        </div>
    </>
}

DropDowButton.defaultProps = {
    options: [],
    disabled: false,
    toggleIcon: (props: { open: boolean }) => {
        return <span className={(props?.open ? "" : style.closed) + " " + style.open} >▼</span>
    }
};