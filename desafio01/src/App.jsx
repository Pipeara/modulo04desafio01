import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card'; 
import Tags from './components/Tags';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const headerTitle = "Adopta un perrito";

  const cardsData = [
    {
      imageUrl: 'https://placedog.net/600',
      name: "Albo",
      description: "perrito regalón y casero ",
      tagText: "chiguagua",
      tagColor: "success",
    },
    {
      imageUrl:'https://placedog.net/900',
      name: "chuk",
      description: "fiel y cuidador",
      tagText: "Shiba inu",
      tagColor: "secondary",
    },
    {
      imageUrl: 'https://placedog.net/500',
      name: "Nero",
      description: "Obediente y cariñoso",
      tagText: "ingles",
      tagColor: "info",
    },
    {
      imageUrl: 'https://placedog.net/400',
      name: "Mini",
      description: "Desordenado y jugueton",
      tagText: "Siberiano",
      tagColor: "danger",
    },
   
  ];

 
  return (
    <div>
      <Header title={headerTitle} />
      <div className="cards-container">
        {cardsData.map((data, index) => (
          <Card
            key={index}
            imageUrl={data.imageUrl}
            name={data.name}
            description={data.description}
          >
            <Tags text={data.tagText} bg={data.tagColor} />
          
          </Card>
          
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
