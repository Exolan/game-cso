import { GameEvent } from "src/types/types";

export class EventManager {
  public events: Map<string, GameEvent>;

  constructor() {
    this.events = new Map();
  }

  private initializeEvents(): void {
    this.events.set("visit-registation", {
      eventId: 1,
      eventType: "message",
      eventData: {
        messageId: 1,
        messageText: "Пациент ждет у окна регистратуры",
        messageButtons: [
          {
            buttonId: 1,
            buttonText: "Обслужить сейчас",
            buttonEmit: "accept-dialog",
          },
          {
            buttonId: 2,
            buttonText: "Поставить в очередь",
            buttonEmit: "place-queue-registrature",
          },
        ],
      },
      isActive: false,
    });
  }

  public createEvent(
    senderId: number,
    recepientId: number,
    eventEmit: string
  ): void {}
}
