import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { useForm } from './hooks/useForm'
import axios from 'axios'

export const Prueba = () => {

    const [formValues, handleInputChange] = useForm({
        name: ''
    });

    const { name } = formValues;

    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(name);
        axios.post('http://localhost:8080/empleado', { nombre: name }).then((res) => console.log(res));
    }

    return (
        <>
            <div className="container">
                <form className='cards mt-4'>
                    <div className='row'>
                        <div className='col-md-5 inputs'>
                            <input
                                className='form-control'
                                placeholder='Ingrese su nombre'
                                type='text'
                                name='name'
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-md-2 inputs'>
                            <button
                                className='btn btn-block btn-outline-primary'
                                type='submit'
                                onClick={handleSubmit}
                            >
                                Enviar
                            </button>
                        </div>
                        <div className='col-md-5 inputs'>
                            <p
                                className='form-control'
                            >
                                {state}
                            </p>
                        </div>
                    </div>
                </form>
                <div className='second-part'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <p
                                className='text-justify'
                            >
                                Persona con gran sentido de responsabilidad, dinámica, capacidad de análisis ,
                                organización, honesta, puntual, habilidades para trabajar en equipo, caracterizado por
                                dar un esfuerzo extra en las funciones que se me asignan, realizando en forma eficiente
                                mi trabajo buscando siempre mejorar como persona y como profesional, adquiriendo y
                                aplicando mis conocimientos en el área laboral.
                            </p>
                        </div>
                        <div className='col-md-8'>
                            <div
                                className='cards mb-3'
                            >
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className='img'
                                            src="./assets/Primero.jpeg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <p
                                                className='text-justify text-light bg-dark'
                                            >
                                                Las Caminatas Ecológicas son actividades de recreación pasiva, organizadas y programadas previamente. Su ejercicio permite contemplar y reconocer el ambiente con fines informativos, interpretativos, de aprovechamiento cultural y educativo.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className='img'
                                            src="./assets/Segundo.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <p
                                                className='text-justify text-light bg-dark'
                                            >
                                                El voleibol, balonvolea o simplemente voley, es un deporte donde dos equipos se enfrentan sobre un terreno de juego liso separados por una red central, tratando de pasar el balón por encima de la red hacia el suelo del campo contrario.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className='img'
                                            src="./assets/Tercero.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <p
                                                className='text-justify text-light bg-dark'
                                            >
                                                La competencia busca al equipo que sea capaz de resolver la mayor cantidad de problemas y probar su habilidad en la programación de computadores.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
