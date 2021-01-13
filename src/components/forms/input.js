import React from "react"
import PropTypes from "prop-types"

const Input = ({
  inputType,
  inputId,
  inputDisabled,
  inputStep,
  inputValue,
  inputChange,
  inputSRT,
  inputLabel,
  inputHelper }) => {

  return(

    <div className="input-field-container" data-input={inputType}>
      <input
        type={inputType}
        id={inputId}
        className="input-field"
        disabled={inputDisabled ? inputDisabled : false}
        step={inputStep ? inputStep : 1}
        value={inputValue}
        onChange={inputChange}
      />
      <label htmlFor={inputId} className="input-field-label" data-srt={inputSRT}>{inputLabel}</label>
      {inputHelper && (
        <span className="input-field-helper">{inputHelper}</span>
      )}
      {(inputType === "checkbox" || inputType === "radio") && (
        <span className="input-field-icon" aria-hidden="true"></span>
      )}
    </div>
  )

}

Input.propTypes = {
  inputType: PropTypes.string,
  inputId: PropTypes.string,
  inputDisabled: PropTypes.bool,
  inputStep: PropTypes.number,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputChange: PropTypes.func,
  inputSRT: PropTypes.string,
  inputLabel: PropTypes.string,
  inputHelper: PropTypes.string
}

Input.defaultProps = {
  inputType: ``,
  inputId: ``,
  inputDisabled: false,
  inputStep: 1,
  inputValue: ``,
  inputChange: ``,
  inputSRT: ``,
  inputLabel: ``,
  inputHelper: ``
}

export default Input
