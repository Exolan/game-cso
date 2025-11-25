import React, { useState } from "react";

import styles from "./styles.module.css";

const Cards: React.FC = () => {
  const [roles, setRoles] = useState<any>([]);

  return (
    <div className={styles.conteiner}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <h4 className={styles.title}>ФАБРИКА ПРОЦЕССОВ</h4>
        </div>
        <div className={styles.headerPageName}>
          <h2 className={styles.pageName}>ПЕРСОНАЖИ</h2>
        </div>
      </header>
      <div className={styles.block}>
        <div className={styles.cards}>
          {/* {roles.map((role) => {
            return (
              <RoleCard
                key={role.roleKey}
                roleKey={role.roleKey}
                roleGameData={role.roleGameData}
                roleSelect={roleSelect}
                setRoleSelect={setRoleSelect}
                socket={socket}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
