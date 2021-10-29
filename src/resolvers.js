const {getAllPersonne}=require('./Controller/Personne/personne')
const {addPersonne}=require('./Controller/Personne/personne')
const {editPersonne}=require('./Controller/Personne/personne')
const {personneById}=require('./Controller/Personne/personne')
const {deletePersonne}=require('./Controller/Personne/personne')
const resolvers={
    Query:{
        personnes:()=>{
            const allPersonne=getAllPersonne()
            if(allPersonne.length==0){
                throw new Error('Aucun Utilisateur')
            }

            return allPersonne
        },
        personne:(parent,{id})=>{
            return personneById(id)
        }
    },
    Mutation:{
        addPersonne:(parent,{nom,prenom,age,sexe})=>{
            return addPersonne(nom,prenom,age,sexe)
        },
        editPersonne:(parent,{id,nom,prenom,age,sexe})=>{
            return editPersonne(id,nom,prenom,age,sexe)
        },
        deletePersonne:(parent,{id})=>{
            return deletePersonne(id)
        }
    }
}

export default resolvers