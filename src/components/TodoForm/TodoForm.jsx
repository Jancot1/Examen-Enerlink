import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import { saveTodos } from '../../store';

export const TodoForm = () => {

  const dispatch = useDispatch();

  const todoSchema = Yup.object({
    todoLabel: Yup.string().min(4, 'Ingrese 4 caracteres como mínimo').required("El campo es requerido")
  })

  const { handleSubmit, handleChange, values, isSubmitting, touched, errors } = useFormik({
    initialValues: {
      todoLabel: ''
    },
    validationSchema: todoSchema,
    onSubmit: (values, actions) => {
      dispatch(saveTodos(values.todoLabel));
      actions.setSubmitting(false);
      toast.success('TO DO creado correctamente!');
    },
  });

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-9" style={{ width: '300px'}}>
          <Formik>
            <Form onSubmit={handleSubmit}>
              <input 
                name='todoLabel' type="text" value={values.todoLabel} onChange={handleChange} placeholder="Enter new to do"
                aria-label="todo" aria-describedby="basic-addon1" className="form-control"
              />
            </Form>
          </Formik>
        </div>
        <div className="col-3">
          {
            !isSubmitting ? (
              <button id="btn" type="button" className="btn btn-primary" onClick={handleSubmit}> Add To Do </button>
            ) : (
              <button id="btn" type="button" className="btn btn-secondary" disabled> Add To Do </button>
            )
          }
        </div>
        {touched.todoLabel && errors.todoLabel ? (
          <div 
            className="alert alert-danger" 
            role="alert"
            style={{
              fontSize: "15px",
              width: "250px",
              height: "30px" ,
              marginTop: 9,
              padding: 3
            }}
          >
            {errors.todoLabel}
          </div>
        ) : null}
      </div>
    </div>
  )
}
