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
  roleEvents: RoleEvent[];
  isSelected: boolean;
}

export interface RoleEvent {
  eventEmit: string;
  eventTitle: string;
  eventDesc?: string;
  isActive: boolean;
  eventData?: EventData[];
  eventImage?: string;
}

export interface EventData {
  dataTitle: string;
  dataText: string;
  dataImg?: string;
}

export interface GameEvent {
  eventId: number;
  eventType: "call" | "message" | "dialog" | "minigame";
  eventData: any;
  isActive: boolean;
}
