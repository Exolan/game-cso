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

export interface GameEvent {
  eventId: number;
  eventType: "call" | "message" | "dialog" | "minigame";
  eventData: any;
  isActive: boolean;
}

export interface EventData {
  dataTitle: string;
  dataText: string;
  dataImg?: string;
  isActive: boolean;
}
