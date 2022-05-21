import React, { useState } from 'react'

export const useSelect = (initialValue: string) => {
  const [selected, setSelected] = useState(initialValue)

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelected(e.target.value)
  }

  return [selected, onChange] as const
}
