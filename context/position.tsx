import { createContext, useContext, useState } from 'react'

type TargetPosition = {
  x: number
  y: number
}

type TargetPositionContextType = [TargetPosition, React.Dispatch<TargetPosition>]

const TargetPositionContext = createContext<TargetPositionContextType>([{ x: 0, y: 0 }, () => {}])

export default function TargetPositionProvider({ children }) {
  const state = useState<TargetPosition>({ x: 0, y: 0 })

  return <TargetPositionContext.Provider value={state}>{children}</TargetPositionContext.Provider>
}

export const useTargetPosition = () => {
  return useContext(TargetPositionContext)
}
