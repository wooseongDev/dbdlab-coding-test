import { Icon } from '@components/icon'
import { css } from '@emotion/react'
import React from 'react'

export type SelectProps = {
  className?: string

  options: (string | { label: string; value: string })[]

  selected?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export const Select: React.FC<SelectProps> = (props) => {
  const { className, options, selected, onChange } = props

  return (
    <div className={className} css={rootStyle}>
      <div css={arrowStyle}>
        <Icon name="ArrowDown" />
      </div>

      <select css={selectStyle} value={selected} onChange={onChange}>
        {options.map((option) => {
          if (typeof option === 'string') {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            )
          }

          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

const rootStyle = css`
  position: relative;
  background-color: #ffffff;
`

const selectStyle = css`
  position: relative;
  padding-right: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  appearance: none;

  &::-ms-expand {
    display: none;
  }
`

const arrowStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
