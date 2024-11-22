import React, { useState } from "react";

const AddFuncionarioForm = ({ onAdd }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome && cargo && salario && dataAdmissao) {
      const novoFuncionario = {
        nome,
        cargo,
        salario,
        dataAdmissao,
        dataDemissao: "",
      };

      onAdd(novoFuncionario);

      // Limpar campos após o envio
      setNome("");
      setCargo("");
      setSalario("");
      setDataAdmissao("");
    }
  };

  return (
    <div className="add-form-container">
      <h2>Adicionar Funcionário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <label>Cargo:</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
        <label>Salário:</label>
        <input
          type="number"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          required
        />
        <label>Data de Admissão:</label>
        <input
          type="date"
          value={dataAdmissao}
          onChange={(e) => setDataAdmissao(e.target.value)}
          required
        />
        <button type="submit" className="btn-submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddFuncionarioForm;
