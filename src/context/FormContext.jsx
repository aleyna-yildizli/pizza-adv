import { createContext, useState, useContext } from "react";


const initialForm = {
    size: "",
    hamur: "",
    ingredients: [],
    message: "",
    name: ""
   }

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(initialForm);
    const [count, setCount] = useState(1);
    const providerValues = {
        formData, setFormData,
        count, setCount
    };

    return (
        <FormContext.Provider value={providerValues}>
            {children}
        </FormContext.Provider>
    );
};



export const usePizzaForm = () => useContext(FormContext);