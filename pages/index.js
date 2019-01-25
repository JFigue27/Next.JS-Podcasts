import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>!Hola Inspiracode!</h1>
        <p>!Bienvenidos al curso de Next.Js.!!!!</p>

        <img src="/static/IC-Logo.png" alt="Inspiracode.com" />

        <style jsx>{`
          h1 {
            max-width: 50%;
            display: block;
            margin: 0 auto;
            text-align: center;
          }
          p {
            max-width: 50%;
            display: block;
            margin: 0 auto;
            text-align: center;
          }
          img {
            max-width: 50%;
            display: block;
            margin: 0 auto;
            margin-top: 20px;
          }
        `}</style>
        <style jsx global>{`
          body {
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}

/* Afecta en todos los componentes P de la app/*
/* :global (p) {
  color: green;
} */
/* Afecta unicamente al div del componentes
/* div :global (p) {
  color: green;
} */
/* Afecta a todas las P que esten dentro de un div en la app.
/* :global (div p) {
  color: green;
} */
