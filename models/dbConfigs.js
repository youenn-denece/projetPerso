const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://root:synapps@localhost:27017/projetPerso?authSource=admin",
    {
        useNewUrlParser: true, useUnifiedTopology: true
    },
    (err) => {
        if (!err) {
            console.log("Connecté à la base Mongo")
        }    
        else {
            console.log("Erreur de connection à la base Mongo !" + err)
        }
            
    }
)