import React from "react";

const LGPDModal = ({ onAccept }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Política de Privacidade</h2>
        <p>
          Este site armazena informações de funcionários no dispositivo local
          (Local Storage) para fins de gerenciamento. Nenhuma informação é
          compartilhada ou enviada para servidores externos.
        </p>
        <p>
          Ao utilizar este sistema, você concorda com o armazenamento e uso
          desses dados.
        </p>
        <button onClick={onAccept}>Aceitar</button>
      </div>
    </div>
  );
};

export default LGPDModal;
