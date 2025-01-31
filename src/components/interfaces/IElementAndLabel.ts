export interface optionSelect {
    key: string,
    value: string,
};

export interface propsElementAndLabel {
    label: string,
    name: string,
    type ?: string,
    marginBottom: string,
    options ?: optionSelect[],
};