import React from "react";

const FuncionarioTable = ({ funcionarios, onEdit, onDismiss, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Salário</th>
          <th>Data de Admissão</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {funcionarios.map((funcionario, index) => (
          <tr key={index}>
            <td>{funcionario.nome}</td>
            <td>{funcionario.cargo}</td>
            <td>{`R$ ${parseFloat(funcionario.salario).toFixed(2)}`}</td>
            <td>{funcionario.dataAdmissao}</td>
            <td>
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDismiss(index, new Date().toISOString())}>Demitir</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FuncionarioTable;
