import { defineStore } from 'pinia'
import contacts from "../contacts.json";


export default defineStore("contacts",{
    state(){
        return{
            contacts:[]
        }
    },
    actions:{
        fiveContacts(){
            this.contacts = contacts.slice(0,5)
        },
        
        addRandomContact(){
            let random = contacts[Math.floor(Math.random()*contacts.length)]
            if(this.contacts.includes(random) === false){
                this.contacts.push(random)
            }
        }, 

        sortByName(){
            console.log("Entra la F")
             this.contacts.sort((a,b)=>{
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
             })
        },
        sortByPopularity(){
            console.log("Entra la F")
             this.contacts.sort((a,b)=>{
                return   b.popularity - a.popularity
           
             })

             console.log(this.contacts)
        },

        removingContact(id){
            console.log(id + "ESTE ES EL ID")
            this.contacts =  this.contacts.filter(contact => contact.id != id)
            console.log(this.contacts)
        }

    }
})