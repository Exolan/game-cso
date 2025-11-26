export interface LobbyPlayer {
  playerSocket: string;
  playerId: number;
  playerRole?: GameRole;
  isReady: boolean;
}

export interface GameRole {
  roleId: number;
  roleName: string;
  roleDescription: string;
  roleCondition?: string;
  roleNumber: string;
  rolePassword: string;
  roleProfile: string;
  roleTask: string;
  roleImg: string;
  roleButtons: RoleButton[];
  isSelected: boolean;
}

export interface RoleButton {
  buttonId: number;
  buttonEvent: string;
  buttonText: string;
  isActive: boolean;
}
