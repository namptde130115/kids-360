export interface UserLoginInfo {
  isKeepSignedIn: boolean;
  password: string;
  username: string;
}

export interface authInfor {
  accessToken: string;
  expiresIn: number;
  homeUrl: string;
  imageToken: string;
  refreshToken: string;
  tokenType: string;
}

export enum ROLE {
	Admin = "Admin",
  User = "User",
  None = "None"
}

export interface Permission {
  role: ROLE;
  isAuthenticated: boolean;
}

export interface User {
  email: string
  role: ROLE
  userName: string
  fullName: string
  shortName: string
  phoneNumber: string
  avatarImg: string | null
}