// themes.js

export const themes = [
    {
      backgroundColor: '#16a085',
      textColor: '#fff',
      buttonColor: '#16a085',
      quoteColor:'#16a085'
    },
    {
      backgroundColor: '#27ae60',
      textColor: '#fff',
      buttonColor: '#27ae60',
      quoteColor:'#27ae60'
    },
    {
      backgroundColor: '#2c3e50',
      textColor: '#fff',
      buttonColor: '#2c3e50',
      quoteColor:'#2c3e50'
    },
    {
      backgroundColor: '#f39c12',
      textColor: '#fff',
      buttonColor: '#f39c12',
      quoteColor:'#f39c12'
    },
    {
      backgroundColor: '#e74c3c',
      textColor: '#fff',
      buttonColor: '#e74c3c',
      quoteColor:'#e74c3c'
    },
    {
      backgroundColor: '#9b59b6',
      textColor: '#fff',
      buttonColor: '#9b59b6',
      quoteColor:'#9b59b6'
    },
    {
      backgroundColor: '#FB6964',
      textColor: '#fff',
      buttonColor: '#FB6964',
      quoteColor:'#FB6964'
    },
    {
      backgroundColor: '#342224',
      textColor: '#fff',
      buttonColor: '#342224',
      quoteColor:'#342224'
    },
    {
      backgroundColor: '#472E32',
      textColor: '#fff',
      buttonColor: '#472E32',
      quoteColor:'#472E32'
    },
    {
      backgroundColor: '#BDBB99',
      textColor: '#fff',
      buttonColor: '#BDBB99',
      quoteColor:'#BDBB99'
    },
    {
      backgroundColor: '#77B1A9',
      textColor: '#fff',
      buttonColor: '#77B1A9',
      quoteColor:'#77B1A9'
    },
    {
      backgroundColor: '#73A857',
      textColor: '#fff',
      buttonColor: '#73A857',
      quoteColor:'#73A857'
    },
 
  ];
  
  export const getRandomTheme = () => {
    return themes[Math.floor(Math.random() * themes.length)];
  };
  