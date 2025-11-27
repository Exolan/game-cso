export type GamePhase = "lobby" | "cards" | "game";

export interface Player {
  playerId: number;
  isReady: boolean;
  playerRole?: GameRole;
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

export interface GameEvent {
  eventId: number;
  eventType: "call" | "message" | "dialog" | "minigame";
  eventData: any;
  isActive: boolean;
}
