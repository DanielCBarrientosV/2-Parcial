import React from 'react';
// Los estilos globales se importan en src/app/page.tsx o src/app/layout.tsx
// y se aplican a través de las clases CSS.

// Definimos una interfaz para las props del componente Card
interface CardProps {
  label: string;
  number: number;
  title: string;
  jiraId: string; // El identificador tipo SAAS-0000
  description: string;
  date: string; // La fecha en formato legible para el usuario (ej: 3/8/2020)
  datetime: string; // La fecha en formato ISO 8601 para el atributo <time> (ej: 2020-03-08)
  headerColor: string; // El color de fondo del encabezado
}

// Usamos React.FC (Function Component) con la interfaz de props
const Card: React.FC<CardProps> = ({
  label,
  number,
  title,
  jiraId,
  description,
  date,
  datetime,
  headerColor,
}) => {
  return (
    <> {/* Un fragmento de React para agrupar elementos sin un div extra */}
      {/* Etiqueta encima de la tarjeta */}
      <div className="card-label-container">
        <span className="label-icon">♦</span> {label}
      </div>

      {/* La estructura de la tarjeta */}
      <article className="card">
        {/* Encabezado de la tarjeta */}
        <div className="card-header" style={{ backgroundColor: headerColor }}>
          <div className="card-header-left">
            <span className="card-number">{number}</span>
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-header-right">
            <span className="card-id">{jiraId}</span>
            {/* Espacio reservado para el ícono (div vacío por ahora) */}
            <div className="card-icon-placeholder"></div>
          </div>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="card-body">
          <p className="card-description">{description}</p>
          <div className="card-divider"></div> {/* Línea divisoria */}
          {/* Pie de página de la tarjeta */}
          <div className="card-footer">
            <span className="card-last-updated">Last Updated</span>
            {/* Usamos el formato ISO para el atributo datetime y el formato legible para el texto */}
            <time dateTime={datetime} className="card-date">{date}</time>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;