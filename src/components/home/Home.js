import React, { Component } from 'react';
import Calculation from '../calculations/Calculation';
import Grades from '../grade/Grades';

const classIsPrimary = `input is-primary has-text-primary`;
const classIsDanger = `input is-danger has-text-danger`;

const MODULOS = [
  {
    modulo: '1',
    descricao: 'Módulo 01 - Fundamentos (0-100)',
    value: 0,
    classInput: 'input',
  },
  {
    modulo: '2',
    descricao: 'Módulo 02 - Angular (0-100)',
    value: 0,
    classInput: 'input',
  },
  {
    modulo: '3',
    descricao: 'Módulo 03 - React (0-100)',
    value: 0,
    classInput: 'input',
  },
  {
    modulo: '4',
    descricao: 'Módulo 04 - Vue (0-100)',
    value: 0,
    classInput: 'input',
  },
  {
    modulo: '5',
    descricao: 'Módulo 05 - Desafio Final (0-100)',
    value: 0,
    classInput: 'input',
  },
];

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      modulos: [...MODULOS],
    };
  }

  onChange(id, value) {
    const copyModulos = [...this.state.modulos];
    var current = copyModulos.find((current) => current.modulo === id);
    current.value = parseInt(value, 10);
    if (!isNaN(current.value)) {
      if (current.value >= 60) {
        current.classInput = classIsPrimary;
      } else {
        current.classInput = classIsDanger;
      }
    }
    var index = copyModulos.indexOf(current);
    copyModulos[index] = current;
    this.setState({ modulos: copyModulos });
  }

  render() {
    const { modulos } = this.state;

    const somaTotal = modulos.reduce((acc, { value }) => acc + value, 0);

    const percentutalTotal = ((somaTotal / 500) * 100)
      .toFixed(2)
      .replace('.', ',');

    const aprovaMedia = modulos.every((current) => current.value >= 60)
      ? 'Sim'
      : 'Não';
    const aprovaPercentualTotal =
      parseInt(percentutalTotal) >= 70 ? 'Sim' : 'Não';

    return (
      <div className="container">
        <div className="notification is-primary has-text-centered">
          <h1 className="has-text-weight-bold is-size-4-desktop">
            Controle de notas do Bootcamp IGTI com React
          </h1>
        </div>
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="has-text-centered">
              <h1 className="has-text-weight-bold is-size-3-desktop">
                Notas atuais
              </h1>
            </div>
            <Grades
              modulos={this.state.modulos}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="column">
            <Calculation
              totalNotas={somaTotal}
              percentualTotal={percentutalTotal}
              aprovMedia={aprovaMedia}
              aprovPercentTotal={aprovaPercentualTotal}
            />
          </div>
        </div>
      </div>
    );
  }
}