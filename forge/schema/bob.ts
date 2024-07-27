import { z } from 'zod'; 

const PersonSchema = z.object({
  name: z.string().min(1, { message: "Name is required" })
});

 export default PersonSchema;

export const config = {"path":"bob","public":true,"cache":"None","name":"bob"};