import React, { useState, useEffect } from "react";

const ImageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  // Simula a requisição à API para buscar a imagem
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Substitua com a URL da API de sua escolha
        const response = await fetch("https://api.example.com/image"); 
        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.url); // Supondo que a URL da imagem venha nesse campo
        }
      } catch (error) {
        console.error("Erro ao carregar a imagem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1>Título</h1>
        <p>Texto à esquerda, enquanto a imagem carrega, aguarde...</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img src={imageUrl} alt="Imagem carregada" style={{ width: "300px" }} />
        )}
      </div>
      <div style={{ flex: 1, textAlign: "left" }}>
        {/* Você pode adicionar mais conteúdo aqui */}
      </div>
    </div>
  );
};

export default ImageLoader;
