import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
import React from 'react'

export default function App() {

  const cards = data.map(card => {
    return <Card 
      imageUrl={card.imageUrl}
      location={card.location}
      description={card.description}
    />
  })

  return (
    <>
      <Header />
      {cards}
    </>
  )
}
