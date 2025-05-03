import React from 'react';
// No importamos estilos aquí si son globales en src/styles.css o globals.css

// Interfaz para las props que este componente recibirá
interface CardProps {
  label: string; // Etiqueta encima de la tarjeta
  number: number; // Número en el círculo
  title: string; // Título de la agenda
  jiraId: string; // ID tipo SAAS-0000
  description: string; // Descripción del cuerpo
  date: string; // Fecha mostrada (ej: 3/8/2020)
  datetime: string; // Fecha para el atributo <time> (ej: 2020-03-08)
  headerColor: string; // Color de fondo del encabezado
  // Si agregas el ícono, puedes añadir iconSrc: string; aquí
}

const Card: React.FC<CardProps> = ({
  label,
  number,
  title,
  jiraId,
  description,
  date,
  datetime,
  headerColor,
  // iconSrc // Si lo agregaste
}) => {
  return (
    <> {/* Usamos un fragmento para incluir la etiqueta antes de la tarjeta */}
      {/* Etiqueta encima de la tarjeta */}
      <div className="card-label-container">
        <span className="label-icon">♦</span> {label}
      </div>

      {/* El contenedor principal de la tarjeta */}
      <article className="card">
        {/* Encabezado de la tarjeta */}
        <div className="card-header" style={{ backgroundColor: headerColor }}>
          <div className="card-header-left">
            <span className="card-number">{number}</span>
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-header-right">
            <span className="card-id">{jiraId}</span>
            {/* Espacio reservado para el ícono. Usamos un div con tamaño fijo */}
            <div className="card-icon-placeholder">
              {/* Si tuvieras una imagen o SVG para el ícono, iría aquí */}
              {/* <img src={iconSrc} alt="Icon" className="card-icon" /> */}
            </div>
          </div>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="card-body">
          <p className="card-description">{description}</p>
          <div className="card-divider"></div> {/* Línea divisoria */}
          {/* Pie de página de la tarjeta */}
          <div className="card-footer">
            <span className="card-last-updated">Last Updated</span>
            {/* Usamos el formato ISO 8601 para el atributo dateTime y el formato legible para el texto */}
            <time dateTime={datetime} className="card-date">{date}</time>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;