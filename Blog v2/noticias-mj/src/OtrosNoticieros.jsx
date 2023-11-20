import React, { useEffect, useState } from 'react';
import './styles.css';

const OtrosNoticieros = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const apiKey = '6e21174b936f8472caa9b4b4cddb5ddf'; 
    fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        
        setNoticias(data.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <main>
        <section id="Otros-Noticieros">
          <h2>Otros Noticieros</h2>
          <ul>
            {noticias.map((noticia) => (
              <article key={noticia.id}>
                <img src={noticia.image} alt={noticia.title} />
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
                <a href={noticia.url} target="_blank" rel="noopener noreferrer">Leer más</a>
              </article>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default OtrosNoticieros;
