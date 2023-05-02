import {z} from 'zod'

const moviesSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullish(),
    duration: z.number(),
    price:z.number()
})

const moviesSchemaRequest = moviesSchema.omit({
    id: true
})

const moviesSchemaUpdateRequest = moviesSchemaRequest.partial()

const moviesSchemaResponse = z.array(moviesSchema)

export {
    moviesSchema,
    moviesSchemaUpdateRequest,
    moviesSchemaRequest,
    moviesSchemaResponse
}