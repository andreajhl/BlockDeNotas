import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {Formik, Form, Field,ErrorMessage} from 'formik';


import {login} from '../../actions/index';

import swal from 'sweetalert';
import '../../Styles/login.scss';

const errorState = (state)=> state.errors;

export default function Login(){
    
    const history= useHistory();
    const dispatch = useDispatch();
    const error = useSelector(errorState)

    return (
        <div className='div_form'>
            <p className='div_form_p'>Inicio de Seccion</p>
            <Formik
                initialValues={{
                    email:'',
                    password:''
                }}
                validate={(valores)=>{
                    let errors={}
                    if(!valores.email) errors.email='Es necesario ingresar un email'
                    if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) errors.email='El email no es valido'
                    
                    if(!valores.password) errors.password='Es necesario agregar una password'
                    if(!/^[A-Za-z0-9]{4,8}$/.test(valores.password)) errors.password='La contraseña debe contener letras y numeros'
                    if(valores.password.length<4 || valores.password.length>8) errors.password='la contraseña debe tener de 4 a 8 caracteres '
                    return errors
                }}
                onSubmit={async (values, {resetForm})=>{

                    await dispatch(login(values.email,values.password))
                    
                    resetForm();

                    if(error){
                        swal ( `¡${error}! ` , { 
                            icon: "error",
                            button : false , 
                        }); 

                    }else{
                        history.push('/')
                    };
                }}
            >
                
                {({errors, values})=>(
                    <Form className='form' >
                        <div className='form_div'>
                            <p className='form_div_p'>Email</p>
                            <Field
                                className='form_div_i'
                                autoComplete='username'
                                type='email' 
                                placeholder='correo@correo.com' 
                                id='email' 
                                name='email' 
                            /> 
                            <hr/>   
                            <ErrorMessage name='email' component={()=><p className='form_div_error'>{errors.email}</p>}/>
                        </div>
                        <div className='form_div'>
                            <p className='form_div_p'>Password</p>
                            <Field
                                className='form_div_i'
                                autoComplete='current-password'
                                type='password' 
                                placeholder='******'
                                id='password'                                
                                name='password' 

                            />  
                            <hr/> 
                             <ErrorMessage name='password' component={()=><p className='form_div_error'>{errors.password}</p>}/> 
                  
                        </div>
                        {!errors.email && !errors.password && values.password.length>0 && values.email.length>0 && <button type='submit' className='form_button'>Enviar</button>}
                    
                    </Form> 
                )}
            </Formik>
        </div>
    );
};