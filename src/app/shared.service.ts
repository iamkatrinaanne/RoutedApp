import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

shNameCollection: Array<object> = [];
nameObject: {firstName: string, lastName:string, studentProgram:string, studentNumber:number, studentYear: number};

  constructor() { }

addNewName (firstname: string, lastname:string, studentProg:string, studentNum:number, studentYr: number){
this.nameObject= {
firstName: firstname,
lastName: lastname,
studentProgram: studentProg,
studentNumber: studentNum,
studentYear: studentYr
};
this.shNameCollection.push(this.nameObject);

}

getNames():Array<object>{
return this.shNameCollection;
}
}
