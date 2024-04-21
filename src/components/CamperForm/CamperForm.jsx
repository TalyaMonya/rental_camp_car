import { Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, SendButton, SubtitleForm, Textarea, TitleForm } from "./CamperForm.styled";

const CamperFormSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name is too Short").required("Name is needed"),
    email: Yup.string().email().required("Please, enter email"),
    date: Yup.string().required("Please, put in desired date"),
    message: Yup.string(),
});

export const CamperForm = () => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        date: "",
                        email: "",
                        message: "",
                    }}
                    validationSchema={CamperFormSchema}
                    onSubmit={(values, action) => {
                        console.log(values);
                        action.resetForm();
                        window.location.reload();
                    }}>
                    <Form>
                        <TitleForm>Book your campervan now</TitleForm>
                        <SubtitleForm>
                            Stay connected! We are always ready to help you.
                        </SubtitleForm>
                        <ErrorMessage name="name" component="span" />
                        <Field name="name" placeholder="Name" type="text" required />

                        <ErrorMessage name="email" component="span" />
                        <Field name="email" placeholder="Email" type="email" required />

                        <ErrorMessage name="date" component="span" />
                        <Field name="date" placeholder="Booking Date" type="date" required />

                        <Textarea name="message" as="textarea" placeholder="Comment" />
                        <SendButton type="submit">Send</SendButton>
                    </Form>
                </Formik>
            </div>
        </>
    )
}