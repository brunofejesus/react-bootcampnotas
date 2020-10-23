import React, { Component } from 'react';

export default class Grades extends Component {
  onGradesChange = (id, value) => {
    this.props.onChange(id, value);
  };

  render() {
    const { modulos } = this.props;
    return (
      <>
        {modulos.map(({ modulo, descricao, classInput, value }) => {
          return (
            <div className="field" key={modulo}>
              <label>{descricao}</label>
              <div className="control">
                <input
                  onChange={({ target }) =>
                    this.onGradesChange(modulo, target.value)
                  }
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
}
