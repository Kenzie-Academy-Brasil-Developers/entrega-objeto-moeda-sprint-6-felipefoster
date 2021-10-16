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
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      return image;
    },
  };


  function display20Flips(quant) {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < quant; i++){
      coin.flip()
      results.push (coin.toString())
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça

  
    return results
    
  }
  
  function display20Images(quant) {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < quant; i++) {
      
  }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    return results
    
  }