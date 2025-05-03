'use client';

import React, { useState } from 'react';
import CardListTemplate from '@/components/cardListtemplat';
import '../styles.css'; 

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

function getRandomColor(): string {
    const randomChannel = () => Math.floor(Math.random() * 156 + 100);
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default function Home() {
    const [cards, setCards] = useState<CardData[]>([
        {
            id: 'initial-card',
            label: 'helper/note/future',
            number: 1,
            title: 'Agenda/Topic',
            jiraId: 'SAAS-0000',
            description: 'Description of what is done here',
            date: '3/8/2020',
            datetime: '2020-03-08',
            headerColor: '#AB47BC',
        },
    ]);

    const handleAddCard = () => {
        const now = new Date();
        const newCardData: CardData = {
            id: `card-${Date.now()}-${Math.random()}`,
            label: 'helper/note/active',
            number: cards.length + 1,
            title: `New Task ${cards.length + 1}`,
            jiraId: `SAAS-${Math.floor(Math.random() * 9000 + 1000)}`,
            description: 'This is the description for the newly added card.',
            date: `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`,
            datetime: now.toISOString().split('T')[0],
            headerColor: getRandomColor(),
        };

        setCards(prevCards => [...prevCards, newCardData]);
    };

    return (
        <CardListTemplate cards={cards} onAddCard={handleAddCard} />
    );
}
