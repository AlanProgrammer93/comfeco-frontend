import React from 'react'
import { Header } from '../../ui/header/Header'
import LogoComplete from '../../../assets/img/logo.svg'
import "./LoginScreen.css"
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginScreen = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email('El email no es valido')
            .required('El email es obligatorio'),
          password: Yup.string()
            .required('El password no puede estar vacio')
        }),
        onSubmit: valores => {
          console.log('enviar datos al servidor', valores);
        }
      });

    return (
        <div>
            <Header />
            <div className="login-content">
                <form onSubmit={formik.handleSubmit}>
                    <img src={LogoComplete} />
                    <h2 className="title">Login</h2>
                    <div className="input-div one">
                        
                        <AccountCircle className="iconUser" />
                        
                        <div className="div">
                            <input 
                                type="email" 
                                className="input"
                                id="email"
                                placeholder="Email Address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                    </div>
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className="cuadro-error">
                            <p className="error">Error</p>
                            <p>{formik.errors.email}</p>
                            </div>
                        ) : null
                    }
                    <div className="input-div pass">

                        <Lock className="iconUser" />

                        <div className="div">
                            <input 
                                type="password" 
                                className="input"
                                id="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                    </div>
                    {
                        formik.touched.password && formik.errors.password ? (
                            <div className="cuadro-error">
                            <p className="error">Error</p>
                            <p>{formik.errors.password}</p>
                            </div>
                        ) : null
                    }
                    
                    <input type="submit" className="btn" value="Login" />
                    
                </form>
                <a href="#">Forgot Password?</a>
            </div>
        </div>
    )
}
