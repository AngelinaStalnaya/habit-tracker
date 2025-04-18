export type CheckboxProps = {
    label: string,
    id: string,
    name: string,
    value: string,
    checked: boolean,
    setChecked: (prop: boolean) => void,
};