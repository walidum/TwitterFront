export class Tweet {
    id :string; 
    text : string ; 
    idStr : string;
    createdAt : string;
    fromUser : string;
    languageCode : string;
    source : string;
    public Tweet(id : string , text : string){
      this.id = id;
      this.text = text;
    }
  }