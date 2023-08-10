import { Controller } from "react-hook-form";



const Input=(props)=>{
    const{control,id,label,placeholder,type='text',defaultValue='',sx}=props
    return (
        <Controller 
            name={id}
            control={control}
            defaultValue={defaultValue}
            render={({field:{onChange,value}})=>(CampoTexto)}
        ></Controller>
    )
}

export default Input