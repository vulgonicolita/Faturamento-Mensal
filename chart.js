

    const eixox = [];
    const eixoy = [];

    chartIt();

    async function chartIt(){
      await Faturamento();
      const ctx = document.getElementById('grafico').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: eixox,
              datasets: [{
                  label: 'Faturamento Mensal',
                  data: eixoy,
                  backgroundColor: [
                  '#132d46',
                  ],
                  borderColor: [
                  '#132d46',
                  ],
                  borderWidth: 1.5
              }]
          },
          options: {
              scales: {
                  yAxes: [
                    {
                    ticks:{
                      beginAtZero: true
                  }
              }
            ]
          }
        }
      });
    } 

//--------------------------------------------------------------------
   
    async function Faturamento(){
    const fat = await fetch ('FaturamentoMensal.csv');
    const fat_text = await fat.text();
    console.log(fat_text);

    const linhas = fat_text.split('\n').slice(2);
    console.log(linhas);

    linhas.forEach(valores =>{
        const linhas = valores.split(';');
        const reais = linhas[0];
        eixoy.push(reais);
        const meses = linhas[1];
        eixox.push(meses);
        console.log(reais, meses);
    });
}
