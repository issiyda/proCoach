import React, { FC } from "react"
import styled from "styled-components"
import RegisterIconSVG from "../../assets/images/register.svg"

export type Props = {
  size: number
}

export const RegisterIcon: FC<Props> = ({ size }) => {
  return (
    <Icon size={size}>
      <RegisterIconSVG />
    </Icon>
  )
}

export type StyleProps = {
  size: number
}

const Icon = styled.div`
  cursor: pointer;
  width: ${({ size }: StyleProps) => getSize(size)};
  &:hover {
    opacity: 0.7;
  }
`

const getSize = (size: number): string => {
  return size + "px;"
}
