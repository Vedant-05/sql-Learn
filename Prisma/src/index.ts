import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName : string,
    lastName : string
}

async function insertUser (email: string,password:string,firstName:string,lastName:string)
{
    const res = await prisma.user.create({
        data:{
        email,
        password,
        firstName,
        lastName
    },
    select:{
        id:true,
        password:true
    }
    })
    console.log(res)
}

async function updateUser(username: string,{
    firstName,lastName}:UpdateParams
){
  const res = await prisma.user.update({
    where :{email:username},
    data:{
        firstName,
        lastName
    }
  })

  console.log(res)
}

updateUser("Vedant",{firstName:"update",lastName:"Updated"}).then(()=>{console.log("Updated name")})

insertUser("Hello123","password","Hemlo123","tun tu12313n").then(()=>{console.log("Looks like everything ran 😅")})


