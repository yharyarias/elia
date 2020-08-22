import React from 'react';
import Card from './Card';

function Secciones() {
    return (
        <React.Fragment>
            <section>
                <img alt="Logo" className="logo" src="logoElia.png" />
                <p className="font-llamativo">Despega tu camino a la inteligencia artificial</p>
                <p className="font-intermedio">Invertimos en ti. <br /> Creemos en ti.</p>
                <div className="centrar"><p className="boton-primario">Comienza con nuestro career path</p></div>
            </section>
            <section>
                <p className="font-intermedio2">¿Por qué aprender con la ELIA?</p>
                <div className="box-enfoque"><p className="font-enfoque">Enfoque en I.A.</p></div>
                <p className="font-texto">Olvidate de temas que no te interesan. Solo te enseñamos lo que necesitas para hacer inteligencia artificial</p>
                <div className="box-enfoque"><p className="font-enfoque">Accede a la comunidad</p></div>
                <p className="font-texto">Crea lazos con otros estudiantes, encuentra empleo con nuestras ofertas, conoce a tus próximos colaboradores.</p>
            </section>
            <section>
                <p className="font-llamativo2">Empieza desde cero con nuestro career path o elige el curso que necesites</p>
            </section>
            <section className="purple">
                <h3>Cursos avanzados</h3>
                <Card title="omar" img="logoElia.png" textHead="Creando el GPT-2"/>
            </section>
        </React.Fragment>
    );
}

export default Secciones;
