const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async (db) => {
  // inserir dados na tabela
    await saveOrphanage(db, { 
        lat:"-7.8292189",
        lng:"-34.9068145",
        name: "Lar dos meninos ",
        whatsapp:"558198635248",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",

        whatsapp: "558198635248",
        
        images: [
            "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        
        opening_hours: "Horários de visitas das 18h até 8h",
        open_on_weekends:"1"



    })
    // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    // consultar apenas um orfanato ,pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);

    // deletar dado da tabela
   // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  //  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
  });