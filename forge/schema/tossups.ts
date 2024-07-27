import { z } from 'zod'; 

const TossupSchema = z.object({
    question: z.string().min(1, "question cannot be empty"),
    answer: z.string().min(1, "answer cannot be empty"),
    category: z.string().min(1, "category cannot be empty"),
    subcategory: z.string().min(1, "subcategory cannot be empty"),
    packet: z.object({
        name: z.string().min(1, "packet name cannot be empty"),
        number: z.number().int().min(1, "packet number must be a positive integer"),
    }),
    set: z.object({
        name: z.string().min(1, "packet name cannot be empty"),
        year: z.number().int().min(1, "year must be a positive integer"),
        standard: z.boolean(),
    }),
    question_sanitized: z.string().min(1, "question cannot be empty"),
    answer_sanitized: z.string().min(1, "answer cannot be empty"),
});

 export default TossupSchema;

export const config = {"path":"tossups","public":true,"cache":"None","name":"infinite-tossups"};