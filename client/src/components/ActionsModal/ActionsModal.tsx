import React, { useState } from "react";
import { EventData, Player } from "../../types";
import EventModal from "../EventModal/EventModal";
import PhoneModal from "../PhoneModal/PhoneModal";

import styles from "./styles.module.css";
import { socket } from "../../socket";

const ActionsModal: React.FC<{
  playerData: Player | null;
  setIsActionsModal: React.Dispatch<React.SetStateAction<boolean>>;
  messages: EventData[];
}> = ({ playerData, setIsActionsModal, messages }) => {
  const [isPhoneModal, setIsPhoneModal] = useState<boolean>(false);
  const [isEventModal, setIsEventModal] = useState<boolean>(false);
  const [eventModalData, setEventModalData] = useState<EventData[] | null>(
    null
  );

  const openEventModal = (eventsData: EventData[]): void => {
    setEventModalData(eventsData);
    setIsEventModal(true);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              <h2 className={styles.title}>Выберите одно из действий</h2>
            </div>
            <button
              className={styles.headerButton}
              onClick={() => setIsActionsModal(false)}
            >
              <img src="/images/close.png" alt="close modal" />
            </button>
          </div>
          <div className={styles.modalButtons}>
            {playerData?.playerRole?.roleButtons.map((button, index) => {
              return (
                button.isActive && (
                  <button
                    key={index}
                    onClick={() => {
                      console.log("Запуск события", button.buttonEmit);

                      socket.emit(button.buttonEmit, button.buttonData);
                    }}
                    className={styles.button}
                  >
                    <div className={styles.buttonTitle}>
                      {button.buttonImage && (
                        <img src={button.buttonImage} alt="" />
                      )}
                      <h5>{button.buttonTitle}</h5>
                    </div>
                    {button.buttonDesc && (
                      <div className={styles.buttonDesc}>
                        <p>{button.buttonDesc}</p>
                      </div>
                    )}
                  </button>
                )
              );
            })}
          </div>
        </div>

        <div className={styles.actionBox}>
          <div className={styles.actionPhone}>
            <button
              className={styles.phoneButton}
              onClick={() => setIsPhoneModal(true)}
            >
              <img src="/images/phone.png" alt="" />
            </button>
          </div>
          <div className={styles.actionMessage}>
            <button
              className={styles.messageButton}
              onClick={() => openEventModal(messages)}
            >
              <p className={styles.buttonText}>Сообщения</p>
              <span className={styles.buttonBadge}>{messages.length}</span>
            </button>
          </div>
        </div>
      </div>

      {isPhoneModal && <PhoneModal setIsPhoneModal={setIsPhoneModal} />}

      {isEventModal && eventModalData && (
        <EventModal
          setIsEventModal={setIsEventModal}
          eventModalData={eventModalData}
        />
      )}
    </>
  );
};

export default ActionsModal;
