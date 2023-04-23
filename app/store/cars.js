import { action, computed, makeObservable, observable } from "mobx"




class CarInfo{
    carsInfo=[{
        id:12122,
        matricule:'122/11',
        carName:'dacia' ,
        carModel:'logan' ,
        numberKmCurrent:'11333',
        numberKmToChangeOil:'122333',
        kmToNotifyBeforeAtachNbrKmCurrent:'1223333'
    }]

    constructor(){
        makeObservable(this,{
            carsInfo:observable,
            addCar:action,
            getCar:action,
        })
    }

    addCar(carInfo){
      
        this.carsInfo=[...this.carsInfo,{...carInfo,id:Math.random()}]
    }

    getCar=(id)=>{
           const carFilter=this.carsInfo.filter(car=>car.id === id)
           return carFilter[0]
        
    }

}export const carsStore= new CarInfo()
