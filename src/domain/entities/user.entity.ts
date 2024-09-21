import { MusicVO } from "../value-objects/music.vo";

export type UserEntityProps = {
  name: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;
  state: number;
  musics: MusicVO[];
}

export class UserEntity {
  #name: string;
  #username: string;
  #email: string;
  #password: string;
  #birthDate: string;
  #state: number;
  #musics: MusicVO[];

  private constructor(props: UserEntityProps) {
    this.#name = props.name;
    this.#username = props.username;
    this.#email = props.email;
    this.#password = props.password;
    this.#birthDate = props.birthDate;
    this.#state = props.state;
    this.#musics = props.musics;
  }

  public static create(props: UserEntityProps): UserEntity {
    try {
      return new UserEntity(props);
    } catch (error) {
      throw new Error("Error creating user: " + error);
    }
  }

  get name(): string {
    return this.#name;
  }

  get username(): string {
    return this.#username;
  }

  get email(): string {
    return this.#email;
  }

  get password(): string {
    return this.#password;
  }

  get birthDate(): string {
    return this.#birthDate;
  }

  get state(): number {
    return this.#state;
  }

  get musics(): MusicVO[] {
    return this.#musics;
  }
}
