import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './App.css';

function App() {
  const [funcionarios, setFuncionarios] = useState(
    JSON.parse(localStorage.getItem('funcionarios')) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: '',
    cargo: '',
    salario: '',
    admissao: '',
    demissao: ''
  });

  const handleAddFuncionario = () => {
    const novaLista = [...funcionarios, novoFuncionario];
    setFuncionarios(novaLista);
    localStorage.setItem('funcionarios', JSON.stringify(novaLista));
    setNovoFuncionario({ nome: '', cargo: '', salario: '', admissao: '', demissao: '' });
    setShowModal(false);
  };

  const handleExport = () => {
    if (funcionarios.length === 0) {
      alert("Não há funcionários para exportar.");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(funcionarios);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Funcionários');
    XLSX.writeFile(wb, 'funcionarios.xlsx');
  };

  const handleResetStorage = () => {
    if (window.confirm("Tem certeza de que deseja limpar todos os dados?")) {
      localStorage.clear();
      setFuncionarios([]);
      alert("Local storage limpo com sucesso!");
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Funcionários</h1>
      <div className="buttons-container">
        <button className="btn-add" onClick={() => setShowModal(true)}>Adicionar Funcionário</button>
        <button className="btn-export" onClick={handleExport}>Exportar para Excel</button>
        <button className="btn-reset" onClick={handleResetStorage}>Resetar Dados</button>
      </div>

      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <h2>Adicionar Funcionário</h2>
            <label>Nome:</label>
            <input
              type="text"
              value={novoFuncionario.nome}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })}
            />
            <label>Cargo:</label>
            <input
              type="text"
              value={novoFuncionario.cargo}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, cargo: e.target.value })}
            />
            <label>Salário:</label>
            <input
              type="number"
              value={novoFuncionario.salario}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, salario: e.target.value })}
            />
            <label>Data de Admissão:</label>
            <input
              type="date"
              value={novoFuncionario.admissao}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, admissao: e.target.value })}
            />
            <label>Data de Demissão:</label>
            <input
              type="date"
              value={novoFuncionario.demissao}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, demissao: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={handleAddFuncionario}>Adicionar</button>
              <button onClick={() => setShowModal(false)} className="close-btn">Fechar</button>
            </div>
          </div>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Salário</th>
              <th>Data de Admissão</th>
              <th>Data de Demissão</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario, index) => (
              <tr key={index}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cargo}</td>
                <td>{funcionario.salario}</td>
                <td>{funcionario.admissao}</td>
                <td>{funcionario.demissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
