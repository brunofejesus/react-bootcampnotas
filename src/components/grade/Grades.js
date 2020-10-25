import React from 'react';

export default function Grades({ modulos, onChange }) {
  const onGradesChange = (id, value) => {
    onChange(id, value);
  };
  return (
    <>
      {modulos.map(({ modulo, descricao, classInput, value }) => {
        return (
          <div className="field" key={modulo}>
            <label>{descricao}</label>
            <div className="control">
              <input
                onChange={({ target }) => onGradesChange(modulo, target.value)}
                className={classInput}
                min={0}
                max={100}
                value={value}
                type="number"
                placeholder="Digite a nota"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
