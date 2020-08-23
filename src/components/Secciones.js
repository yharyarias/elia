import React from 'react';
import Card from './Card';

function Secciones() {
    return (
        <React.Fragment>
            <section>
                <img alt="Logo" className="logo" src="elia/logoElia.png" />
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
                <br/>
                <br/>
                <p className="font-llamativo2">Empieza desde cero con nuestro career path o elige el curso que necesites</p>
                <br/>
            </section>            
            <section className="purple">
                <h3>Cursos avanzados</h3>
                <Card title="6 lecciones | 4 horas con Omar Espejel" type="Avanzado" price="$20 mil COP" img="logoElia.png" textHead="Creando el GPT-2" />
                <Card title="12 lecciones | 8 horas con Omar Espejel" type="Avanzado" price="$20 mil COP" img="logoElia.png" textHead="Transformers" />                
            </section>
            <section className="coolgray">
                <h3>Gratuitos</h3>
                <Card title="4 lecciones | 3 horas con Omar Espejel" type="Principiante" price="Gratis" img="logoElia.png" textHead="Python para I.A." />
                <Card title="4 lecciones | 3 horas con Omar Espejel" type="Principiante" price="Gratis" img="logoElia.png" textHead="Usando tensores" />                
            </section>
        </React.Fragment>
    );
}

export default Secciones;
