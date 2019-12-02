export class Quote {
    showDescription: boolean;
 
constructor(
public id: number,
public name: string,
public description: string,


public author: string,
public postDate:Date,
public numberOfLikes:number, 
public numberOfDislikes:number
)
{
  this.showDescription=false;
}
}

