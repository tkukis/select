import { ReactElement, useEffect, useRef, useState, MutableRefObject } from "react"
import { toggleInArray } from "../../utils/toggleInArray"
import style from "./style.module.css"
interface OnChangeEvent {
    target: {
        value: any[]
    }
};
interface Option {
    value: any, label: string
};
type Props = {
    style?: React.CSSProperties,
    onOpenClick?: () => any
    options?: Option[]
    value?: any[]
    disabled?: boolean;
    onlyOneSelect?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    onSelect?: (e: OnChangeEvent) => any
    valuesRender?: (props: { options: Option[], value: any[] }) => ReactElement
    toggleIcon?: (props: { open: boolean }) => ReactElement
};
function useOutsideAlerter(ref: MutableRefObject<any>, action: () => any) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                action()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, action]);
}

export const Select = (props: Props) => {
    const options = props?.options ?? [];
    const wrapperRef = useRef(null);
    const [open, setOpen] = useState<boolean>(false);
    const propsValue = props?.value ?? [];
    useOutsideAlerter(wrapperRef, () => setOpen(false));
    const toggle = (value?: any) => {
        if (props.disabled) {
            return;
        }
        setOpen(!open);
        open ? (props?.onClose && props.onClose()) : (props?.onOpen && props.onOpen());
        if (value && props.onSelect) {
            const newValue = toggleInArray(value, propsValue, props.onlyOneSelect)
            props.onSelect({ target: { value: newValue } });
        }
    }
    const label = props.valuesRender && props.valuesRender({ options, value: propsValue });

    useEffect(() => {
        setOpen(false);
    }, [props?.disabled]);

    return <>
        <div ref={wrapperRef} className={`${style.container} tk-select`}>
            <div style={props.style} onClick={() => (options.length > 1) && toggle()} className={"tk-input " + (open ? `open ${style.open_input}  ${style.input}` : `closed ${style.input}`)}>
                <span className="tk-values">{label}</span>
                {props?.toggleIcon && props.toggleIcon({ open })}
            </div>
            {open && <div className={`$tk-menu ${style.menu}`}>
                {options.map(o => <div key={o.value} onClick={() => toggle(o.value)} className={`tk-option ${style.option}`}>{o.label}</div>)}
            </div>}
        </div>
    </>;
}

Select.defaultProps = {
    options: [],
    disabled: false,
    onlyOneSelect: false,
    valuesRender: (props: { options: Option[], value: any[] }) => props.options.filter(o => (props.value).includes(o.value)).map(o => o.label).join(", "),
    toggleIcon: (props: { open: boolean }) => {
        return <span className={(props?.open ? "" : style.closed) + " " + style.open} >▼</span>
    }
};