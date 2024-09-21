import { MusicDTO } from "./music.dto";

export type UserDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;
  state: number;
  musics: MusicDTO[];
}
