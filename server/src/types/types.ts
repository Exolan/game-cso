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
  buttonEmit: string;
  buttonTitle: string;
  buttonDesc?: string;
  isActive: boolean;
  buttonData?: ButtonData[];
  buttonImage?: string;
}

export interface ButtonData {
  dataTitle: string;
  dataText: string;
  dataImg?: string;
  isActive: boolean;
}

export interface GameEvent {
  eventId: number;
  eventType: "call" | "message" | "dialog" | "minigame";
  eventData: Message;
  eventSender?: number | "bot";
  eventRecepient?: number;
  isActive: boolean;
}

export interface Message {
  messageId: number;
  messageText: string;
  messageButtons: MessageButton[];
}

export interface MessageButton {
  buttonId: number;
  buttonText: string;
  buttonEmit: string;
}
