export interface IQuestion {
    id: number;
    question_description: string;
    fields: IOptionalField[]
}

export interface IOptionalField {
    name: string;
    type: string;
}
