import React from 'react';

interface CardProps {
  label: string;
  number: number;
  title: string;
  jiraId: string;
  description: string;
  date: string;
  datetime: string;
  headerColor: string;
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
}) => {
  return (
    <>
      {/* CardLabel (Molécula) - Representa la etiqueta encima de la tarjeta */}
      <div className="card-label-container">
        <span className="label-icon">♦</span> {label}
      </div>

      {/* La tarjeta completa (Organismo) */}
      <article className="card">
        {/* CardHeader (Molécula) - Representa la parte superior de la tarjeta */}
        <div className="card-header" style={{ backgroundColor: headerColor }}>
          <div className="card-header-left">
            <span className="card-number">{number}</span>
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-header-right">
            <span className="card-id">{jiraId}</span>
            <div className="card-icon-placeholder"></div>
          </div>
        </div>

        {/* CardBody (Contiene átomos y otras moléculas) - Representa el cuerpo de la tarjeta */}
        <div className="card-body">
          <p className="card-description">{description}</p>
          <div className="card-divider"></div>
          {/* CardFooter (Molécula) - Representa la parte inferior de la tarjeta */}
          <div className="card-footer">
            <span className="card-last-updated">Last Updated</span>
            <time dateTime={datetime} className="card-date">{date}</time>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;