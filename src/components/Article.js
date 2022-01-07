import React from "react";

function Article({title, date ="January 1, 1970", preview, minutes}) {
  const roundedMin = (Math.ceil(minutes / 5) * 5)
  const coffees = "☕".repeat(roundedMin/5)
  const bentos = "🍱".repeat(roundedMin/10)
  const emojis = minutes < 30 ? coffees : bentos;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
