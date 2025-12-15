import React, { useState } from "react";
import { EventData, LobbyPlayer } from "../../types";
import EventModal from "../EventModal/EventModal";
import PhoneModal from "../PhoneModal/PhoneModal";

import styles from "./styles.module.css";

const ActionsModal: React.FC<{
  playerData: LobbyPlayer | null;
  setIsActionsModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ playerData, setIsActionsModal }) => {
  const [isPhoneModal, setIsPhoneModal] = useState<boolean>(false);
  const [isEventModal, setIsEventModal] = useState<boolean>(false);
  const [eventModalData, setEventModalData] = useState<EventData[]>([]);

  const openEventModal = (eventData: EventData[]): void => {
    setEventModalData(eventData);
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
            {playerData?.playerRole?.roleEvents.map((button, index) => {
              return (
                button.isActive && (
                  <button
                    key={index}
                    onClick={() => {
                      button.eventData
                        ? openEventModal(button.eventData)
                        : console.log("Запуск события", button.eventEmit);
                    }}
                    className={styles.button}
                  >
                    <div className={styles.buttonTitle}>
                      {button.eventImage && (
                        <img src={button.eventImage} alt="" />
                      )}
                      <h5>
                        {button.eventData
                          ? `${button.eventTitle} (${button.eventData?.length})`
                          : button.eventTitle}
                      </h5>
                    </div>
                    {button.eventDesc && (
                      <div className={styles.buttonDesc}>
                        <p>{button.eventDesc}</p>
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
            <button className={styles.messageButton}>
              <p className={styles.buttonText}>Сообщения</p>
              <span className={styles.buttonBadge}>0</span>
              {/* {events.length > 0 && (
                <span className={styles.buttonBadge}>{events.length}</span>
              )} */}
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
