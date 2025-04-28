import { useState } from "react";

interface UseFormProps<T>{
    initialValue : T;

    //값이 올바른지 검증하는 함수
    validate : (values: T) => Record<keyof T, string>;
}

function useForm<T>({initialValue, validate}:UseFormProps<T>){
    const [values: T, setValues : React.Dispatch<React.SetStateAction/>] = useState(initialValue);

}