import React, { useState, useEffect } from 'react';

function Content() {
  // Controlar o carregamento da imagem
  const [isLoading, setIsLoading] = useState(true);

  //carregamento 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="content-container" style={styles.container}>
      <h1 style={styles.title}>Descubra o Paraíso no Restaurante Vista Azul</h1>
      <div style={styles.content}>
        <p style={styles.text}>
          Venha viver uma experiência única em nosso restaurante localizado no coração da cidade. Sabores
          que vão encantar seu paladar e uma vista maravilhosa para relaxar enquanto saboreia nossos pratos
          exclusivos. Não perca a oportunidade de desfrutar de uma refeição memorável!
        </p>

        {isLoading ? (
          <div style={styles.loading}>
            <div className="spinner" style={styles.spinner}></div>
            Carregando...
          </div>
        ) : (
          <img 
            src="https://i.pinimg.com/736x/65/6e/38/656e387eac92abbdb617295bbfb4082c.jpg" 
            alt="Restaurante Vista Azul"
            style={styles.image} 
          />
        )}
      </div>
    </div>
  );
}

// Estilos 
const styles = {
    container: {
      textAlign: 'center',
      marginTop: '80px', 
      padding: '40px', 
      borderRadius: '15px', 
      boxShadow: '0 6px 12px rgba(33, 215, 203, 0.74)', // Ajustando a sombra
      backgroundColor: '#f5f5f5',
      maxWidth: '1000px', 
      minHeight: '500px', 
      margin: 'auto',
    },
    title: {
        fontSize: '32px', // Aumentando o tamanho da fonte
        marginBottom: '15px',
        fontWeight: 'bold', // Deixando o título em negrito
        
      },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
    },
    text: {
        fontSize: '20px', // Aumentando o tamanho do texto
        color: '#34495e', // Cor mais contrastante para o texto
        maxWidth: '55%', // Aumentando a largura do texto
        marginRight: '25px',
        lineHeight: '1.6', // Aumentando o espaçamento entre as linhas
        fontWeight: '500', // Tornando o texto um pouco mais grosso
      },
    image: {
      maxWidth: '50%',
      height: 'auto',
      borderRadius: '10px', 
    },
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      color: '#333',
    },
    spinner: {
      border: '5px solid #f3f3f3', 
      borderTop: '5px solid #3498db', 
      borderRadius: '50%',
      width: '40px', 
      height: '40px', 
      animation: 'spin 1s linear infinite',
      marginRight: '15px',
    }
  };
  
  // Estilo da animação de carregamento
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, styleSheet.cssRules.length);
  
  export default Content;