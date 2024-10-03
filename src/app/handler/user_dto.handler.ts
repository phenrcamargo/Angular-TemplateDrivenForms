import { UserEntity } from "../../domain/entities/user.entity";
import { MusicDTO } from "../dto/music.dto";
import { UserDTO } from "../dto/user.dto";

export class UserDTOHandler {

  public static convertToUserDTO(user: UserEntity): UserDTO {

    if (!user) {
      throw Error("User not informed");
    }

    const musics: MusicDTO[] = [];

    user.musics.forEach(music => {
      musics.push({
        title: music.title,
        band: music.band,
        genre: music.genre,
        isFavorite: music.isFavorite
      })
    });

    return {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      birthDate: user.birthDate,
      state: user.state,
      musics: musics,
    }
  }
}
