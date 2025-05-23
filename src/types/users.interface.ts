export interface IUserData {
  userId: string;
  userName: string;
  email: string;
  password: string;
}

export interface IUserDataWithoutUserId {
  userName: string;
  email: string;
  password: string;
}

export interface IUserDataWithoutPassword {
  userId: string;
  userName: string;
  email: string;
}

export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IUserDataLoginCheck {
  userId: string;
  email: string;
  password: string;
}