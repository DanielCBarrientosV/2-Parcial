import React from 'react';
import Card from './card';

interface CardData {
  id: string;
  label: string;
  number: number;
  title: string;
  jiraId: string;
  description: string;
  date: string;
  datetime: string;
  headerColor: string;
}

interface CardListTemplateProps {
  cards: CardData[];
  onAddCard: () => void;
}

const CardListTemplate: React.FC<CardListTemplateProps> = ({ cards, onAddCard }) => {
  return (
    <div className="container">
      {cards.map(card => (
        <Card
          key={card.id}
          label={card.label}
          number={card.number}
          title={card.title}
          jiraId={card.jiraId}
          description={card.description}
          date={card.date}
          datetime={card.datetime}
          headerColor={card.headerColor}
        />
      ))}
      <button id="addCardBtn" onClick={onAddCard}>
        Añadir Tarjeta
      </button>
    </div>
  );
};

export default CardListTemplate;