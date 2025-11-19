// 1. התקנה
// npm i react-hook-form
// 2. ייבוא
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
    const {
        // פונקציה שנשלח לה את השם של כל אינפוט בטופס
        register,

        // פונקציה שמטפלת באירוע שליחת הטופס
        // פונקציה שמבטלת אוטומטית את הדיפולט
        // וכן שולחת את כל הערכים מהטופס
        handleSubmit,

        // אוביקט עם כל השגיאות בטופס
        formState: { errors },
    } = useForm();


    const myOnSubmit = (data) => { console.log(data); }


    // console.log(watch("example")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(myOnSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("username")} />


            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}


            <input type="submit" />
        </form>
    )
}