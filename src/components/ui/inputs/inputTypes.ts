export type InputTextProps = {
    name: string,
    required?: boolean,
};

export type InputTimeProps = {
    required: boolean,
    startValue? : string,
}

export type InputNumProps = {
    name: string,
}

export type InputDateProps = {
    id: string,
    presetDate?: string | null,
    required: boolean,
}