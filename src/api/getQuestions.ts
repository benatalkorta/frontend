import { IQuestion } from '../types';
import axios from 'axios';

export async function getQuestions(): Promise<IQuestion[]> {
    const response = await axios.get('/get-questions');
    return formatResponse(response.data)
}

function formatResponse(data: { variable_fields: string; variable_types: string; id: any; question_description: any; }[]) {
    return data.map((question: { variable_fields: string; variable_types: string; id: any; question_description: any; }) => {
        const fieldTokens = question.variable_fields?.split(',') ?? [];
        const typeTokens = question.variable_types?.split(',') ?? [];
        return {
            id: question.id,
            question_description: question.question_description,
            fields: fieldTokens.map((field, index) => {
                return {
                    name: field,
                    type: typeTokens[index]
                }
            })
        }
    })
}
