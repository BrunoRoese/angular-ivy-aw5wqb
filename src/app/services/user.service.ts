import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private _name: string;
  private _img: string;

  login() {
    // this.api.login(user => {
    this._name = 'JV';
    this._img = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Pink&eyeType=Side&eyebrowType=Angry&mouthType=Disbelief&skinColor=Brown';
    // });
  }

  get name(): string {
    return this._name;
  }

  get img(): string {
    return this._img;
  }
}
