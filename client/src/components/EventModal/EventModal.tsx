import React, { useEffect } from "react";

import styles from "./styles.module.css";
import { EventData } from "../../types";

const EventModal: React.FC<{
  setIsEventModal: React.Dispatch<React.SetStateAction<boolean>>;
  eventModalData: EventData[];
}> = ({ setIsEventModal, eventModalData }) => {
  useEffect(() => {
    if (eventModalData.length === 0) {
      return;
    }
  }, [eventModalData]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <h2 className={styles.title}>Выберите одно из действий</h2>
          </div>
          <button
            className={styles.headerButton}
            onClick={() => setIsEventModal(false)}
          >
            <img src="/images/close.png" alt="close modal" />
          </button>
        </div>
        <div className={styles.modalButtons}>
          {eventModalData.map((button, index) => {
            return (
              !button?.isActive && (
                <button
                  key={index}
                  onClick={() => {
                    console.log("Запуск события");
                  }}
                  className={styles.button}
                >
                  <div className={styles.buttonTitle}>
                    {button?.dataImg && <img src={button?.dataImg} alt="" />}
                    <h5>{button?.dataTitle}</h5>
                  </div>
                  {button?.dataText && (
                    <div className={styles.buttonDesc}>
                      <p>{button?.dataText}</p>
                    </div>
                  )}
                </button>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
