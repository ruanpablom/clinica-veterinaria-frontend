import * as z from 'zod';

export const cadastroTutorValidationSchema = z.object({
    nome: z
    .string()
    .min(1, { message: 'Você deve preencher o nome' }),
    telefone: z
    .string()
    .min(11, { message: 'Você deve preencher o telefone' }),
    cpf: z
    .string()
    .min(11, { message: 'Você deve preencher o CPF' }),
    email: z.union( [
        z.literal( '' ),
        z.string().email({ message: 'Você deve preencher um email válido' }),
    ] ),
    endereco: z
    .string()
    .min(1, { message: 'Você deve preencher o endereço' }),
});

export type CadastroTutorValidationSchema = z.infer<typeof cadastroTutorValidationSchema>;
