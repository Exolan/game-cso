import React, { useState, useEffect } from "react";
import { LobbyPlayer } from "../../types";
import { socket } from "../../socket";

import styles from "./styles.module.css";

const Game: React.FC = () => {
  const [isActionsModal, setIsActionsModal] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState<LobbyPlayer>();

  const onOpen = (): void => {
    setIsActionsModal(true);
  };

  const onClose = (): void => {
    setIsActionsModal(false);
  };

  useEffect(() => {
    socket.emit("getPlayerData");

    const handlePlayerData = (newPlayerData: LobbyPlayer) => {
      setPlayerData(newPlayerData);
    };

    socket.on("sendPlayerData", handlePlayerData);
    socket.on("updatePlayerData", handlePlayerData);

    return () => {
      socket.off("sendPlayerData", handlePlayerData);
      socket.off("updatePlayerData", handlePlayerData);
    };
  }, []);

  return (
    <div className={styles.conteiner}>
      {isActionsModal && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <h2 className={styles.title}>Выберите одно из действий</h2>
              </div>
              <button className={styles.headerButton} onClick={() => onClose()}>
                <img src="/images/close.png" alt="close modal" />
              </button>
            </div>
            <div className={styles.modalButtons}>
              {playerData?.playerRole?.roleButtons.map((button) => {
                return (
                  button.isActive && (
                    <button
                      key={button.buttonId}
                      onClick={() => {
                        console.log("Запуск ивента", button.buttonEvent);
                      }}
                      className={styles.button}
                    >
                      <p>{button.buttonText}</p>
                    </button>
                  )
                );
              })}
            </div>
          </div>
        </div>
      )}
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <h4 className={styles.title}>ФАБРИКА ПРОЦЕССОВ</h4>
        </div>
        <div className={styles.headerPageName}>
          <h2 className={styles.pageName}>КАРТОЧКА ПЕРСОНАЖА</h2>
        </div>
      </header>
      <div className={styles.block}>
        <div className={styles.infoBlock}>
          <div className={styles.cardBlock}>
            <div className={styles.cardBlockImg}>
              <img
                src={playerData?.playerRole?.roleImg}
                className={styles.cardImg}
                alt=""
              />
            </div>
            <div className={styles.cardBlockText}>
              <h4 className={styles.cardText}>
                {playerData?.playerRole?.roleName}
              </h4>
            </div>
          </div>
          <div className={styles.descBlock}>
            <header className={styles.dataTitle}>
              <h4 className={styles.titleText}>Описание персонажа</h4>
            </header>
            <div className={styles.dataText}>
              <div className={styles.textBlock}>
                <img
                  src="/images/profile.png"
                  alt=""
                  className={styles.textImage}
                />
                <p className={styles.text}>
                  {playerData?.playerRole?.roleProfile}
                </p>
              </div>
              <div className={styles.textBlock}>
                <img
                  src="/images/desc.png"
                  alt=""
                  className={styles.textImage}
                />
                <p className={styles.text}>
                  {playerData?.playerRole?.roleDescription}
                </p>
              </div>
              <div className={styles.textBlock}>
                <img
                  src="/images/task.png"
                  alt=""
                  className={styles.textImage}
                />
                <p className={styles.text}>
                  {playerData?.playerRole?.roleTask}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.numberBlock}>
            <header className={styles.dataTitle}>
              <h4 className={styles.titleText}>Номер телефона</h4>
            </header>
            <div className={styles.dataText}>
              <p className={styles.text}>
                {playerData?.playerRole?.roleNumber}
              </p>
            </div>
          </div>
          <div className={styles.passwordBlock}>
            <header className={styles.dataTitle}>
              <h4 className={styles.titleText}>Пароль от Госуслуг</h4>
            </header>
            <div className={styles.dataText}>
              <p className={styles.text}>
                {playerData?.playerRole?.rolePassword}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <button className={styles.button} onClick={() => onOpen()}>
            <h4 className={styles.buttonText}>перейти к действиям</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
