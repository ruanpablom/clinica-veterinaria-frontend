import { Input } from "../../../../../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { cadastroTutorValidationSchema, CadastroTutorValidationSchema } from "./validations";
import { zodResolver } from "@hookform/resolvers/zod";

import './styles.css';

export function CadastroForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CadastroTutorValidationSchema>({
        resolver: zodResolver(cadastroTutorValidationSchema),
      });
    
      const onSubmit: SubmitHandler<CadastroTutorValidationSchema> = data =>
        console.info(data);
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <Input id="nome" label="Nome" type="text" {...register("nome")} errors={errors.nome}/>
        <div className="row">
            <Input id="cpf" label="CPF" type="text" {...register("cpf")} errors={errors.cpf}/>
            <Input id="telefone" label="Telefone" type="text" {...register("telefone")} errors={errors.telefone}/>
        </div>
        <div className="row">
            <Input id="email"  label="Email" type="text" {...register("email")} errors={errors.email}/>
            <Input id="endereco"  label="Endereço" type="text" {...register("endereco")} errors={errors.endereco}/>
        </div>
        
        <button style={{marginLeft: 'auto'}} type="submit">Cadastrar</button>
    </form>
  );
}