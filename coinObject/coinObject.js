

const coin = {
    state: 0,

    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      
      coin.state = Math.round(Math.random())
      
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      return coin.state
    },
  
    toString: function () {
    // Se o valor de "state" for 0, retorne "Heads"
        if (this.state === 0) {
            return "Heads"
    // Se o valor de "state" for 1, retorne "Tails"
        } else if (this.state === 1) {
            return "Tails"
        }
      
    },
  
    
    toHTML: function () {
      
      const image = document.createElement("img");
      document.body.appendChild(image)
      image.classList.add('image')
      
      if (this.toString() === 'Heads'){
      image.src = ".assets\img\cara.jpeg";
      image.style.width = "50px";
      image.style.height = "50px";
      image.alt = 'Heads'
      } else if (this.toString() === 'Tails') {
      image.src = ".assets\img\coroa.jpeg";
      image.style.width = "10px";
      image.style.height = "10px";
      image.alt = "Tails"
      }
      return image;
    },
  };

  

  function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < 20; i++){
      coin.flip()
      results.push (coin.toString())
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    
    const resultado = document.createElement("div")
    document.body.appendChild(resultado)
    resultado.classList.add('results')
    const titulo = document.createElement('h3')
    titulo.classList.add('textoResultado')
    titulo.innerHTML = 'Resultado 1: '
    resultado.appendChild(titulo)
    const texto = document.createElement('p')
    texto.classList.add('paragrafo')
    texto.innerHTML = results.toString().replace(/,/gi, ', ')
    resultado.appendChild(texto)

    return results
   
  }
  display20Flips()
  
  function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < 20; i++) {
      coin.flip()
      coin.toString()
      results.push (coin.toHTML())
  }
  
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    return results
    
  }
  display20Images()