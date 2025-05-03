'use client'; // Esto le indica a Next.js que este componente debe ejecutarse en el cliente, ya que usa hooks de React como useState y manejo de eventos del DOM.

import React, { useState } from 'react';
import Card from '@/components/card';// Importa el componente Card

// Definimos una interfaz para la estructura de datos de cada tarjeta
interface CardData {
    id: string; // Un ID único para React (usado como 'key' en listas)
    label: string;
    number: number;
    title: string;
    jiraId: string;
    description: string;
    date: string; // Fecha mostrada (ej: 3/8/2020)
    datetime: string; // Fecha para el atributo <time> (ej: 2020-03-08)
    headerColor: string; // Color del encabezado
}

// Función para generar un color hexadecimal aleatorio
function getRandomColor(): string {
    // Esta función intenta generar colores que no sean ni demasiado oscuros ni demasiado claros
    const randomChannel = () => Math.floor(Math.random() * 156 + 100); // Rango 100-255
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


export default function Home() {
    // Estado para almacenar la lista de tarjetas
    // Inicializamos con los datos de la primera tarjeta
    const [cards, setCards] = useState<CardData[]>([
        {
            id: 'initial-card', // ID único para la primera tarjeta
            label: 'helper/note/future',
            number: 1,
            title: 'Agenda/Topic',
            jiraId: 'SAAS-0000',
            description: 'Description of what is done here',
            date: '3/8/2020', // Formato legible
            datetime: '2020-03-08', // Formato ISO 8601
            headerColor: '#AB47BC', // Color morado de la imagen
        },
    ]);

    // Función que se ejecuta al hacer clic en el botón
    const handleAddCard = () => {
        const now = new Date();
        const newCardData: CardData = {
            id: `card-${Date.now()}-${Math.random()}`, // Genera un ID único (combina timestamp y aleatorio)
            label: 'helper/note/active', // Etiqueta para las nuevas tarjetas (ejemplo)
            number: cards.length + 1, // Número incremental simple
            title: `New Agenda Item ${cards.length + 1}`, // Título dinámico
            jiraId: `SAAS-${Math.floor(Math.random() * 9000 + 1000)}`, // ID aleatorio
            description: 'This is the description for the newly added card.',
            date: `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`, // Fecha actual en formato legible
            datetime: now.toISOString().split('T')[0], // Fecha actual en formato ISO 8601 (YYYY-MM-DD)
            headerColor: getRandomColor(), // Obtiene un color aleatorio para el encabezado
        };

        // Actualiza el estado añadiendo la nueva tarjeta al array existente
        setCards(prevCards => [...prevCards, newCardData]);
    };

    return (
        <div className="container">
            {/* Mapea el array de tarjetas en el estado y renderiza un componente Card para cada una */}
            {cards.map(card => (
                <Card
                    key={card.id} // ESENCIAL: Proporciona una clave única cuando mapeas listas
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

            {/* Botón para añadir nuevas tarjetas */}
            {/* En React, manejamos eventos directamente con props como onClick */}
            <button id="addCardBtn" onClick={handleAddCard}>
                Añadir Tarjeta
            </button>
        </div>
    );
}