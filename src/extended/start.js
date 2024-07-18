const start = async () =>{
    const bar = {
        capacidade : 200,
        mesas: 20,
        chopp: true,
        dono: {
            nome: 'José',
            sobrenome: 'silva'
        }
    }
    const bar2 = {
        capacidade : 100,
        mesas: 10,
        chopp: true,
        dono: {
            nome: 'Raphael',
            sobrenome: 'Vernil'
        }
    }
    const bar3 = {
        capacidade : 50,
        mesas:5,
        chopp: false,
        dono: {
            nome: 'Zé',
            sobrenome: 'Caramelo'
        }
    }


    const listaBar = [bar, bar2, bar3]
    let total = 0 
    for (const estabelecimento of listaBar){
        if(estabelecimento.chopp  == true){
            total += estabelecimento.mesas
        }
       
    }
    console.log('total: ' + total)

    listaBar.forEach(estabelecimento => {
        console.log ('mensagem:' + estabelecimento.mesas)
    })

    let total2 = 0
    listaBar.filter(estabelecimento => estabelecimento.chopp == true)
            .forEach(x => total2 += x.mesas)
    console.log('total: '+ total2)


    const listaCapacidade = listaBar.map(estabelecimento => estabelecimento.capacidade)
    console.log('capacidade: ' + listaCapacidade)

    const listaDonos = listaBar.map(estabelecimento => estabelecimento.dono)
    listaDonos.forEach(dono => console.log('Donos dos bares: ' + dono.nome))
 }

start()