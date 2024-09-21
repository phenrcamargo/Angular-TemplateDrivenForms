import { UserEntity, UserEntityProps } from "../entities/user.entity";

export class UserEntityHandler {

  public static create(props: UserEntityProps): UserEntity {
    try {
      return UserEntity.create(props);
    } catch (error) {
      throw error;
    }
  }
}
