import React from 'react';

export default function Calculo(props) {
  const { totalNotas, percentualTotal, aprovMedia, aprovPercentTotal } = props;

  return (
    <>
      <div className="has-text-centered">
        <h1 className="has-text-weight-bold is-size-3-desktop">Cálculos</h1>
        <div className="block has-text-left">
          <p>
            <strong>Nota Total:</strong> {totalNotas}
          </p>
          <p>
            <strong>Percentual Total:</strong> {percentualTotal}
          </p>
          <p>
            <strong>Aprovação pela média (60%)</strong> {aprovMedia}
          </p>
          <p>
            <strong>Aprovação pelo percentual total (70%)</strong>{' '}
            {aprovPercentTotal}
          </p>
        </div>
      </div>
    </>
  );
}
