const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export const getAllPersonne=async()=>{
    return await prisma.personnes.findMany({})
}

export const personneById=async(id)=>{
    return await prisma.personnes.findUnique({
        where:{
            id:parseInt(id)
        }
    })
}

export const addPersonne=async(nom,prenom,age,sexe)=>{
    return await prisma.personnes.create({
        data:{
            nom,
            prenom,
            age,
            sexe
        }
    })
}

export const editPersonne=async(id,nom,prenom,age,sexe)=>{
    return await prisma.personnes.update({
        where:{
            id:parseInt(id)
        },
        data:{
            nom,
            prenom,
            age,
            sexe
        }
    })
}

export const deletePersonne=async(id)=>{
    const del= await prisma.personnes.delete({
        where:{
            id:parseInt(id)
        }
    })

    if(del){
        return true
    }
}