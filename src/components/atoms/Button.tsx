import React from 'react'
import { IButton } from '@/types/buttonType'

function Button({
  children, type = 'button', color = 'purple', customClass,
}: IButton) {
  const buttonConfig: any = {
    purple: {
      background: 'bg-prod-purple hover:bg-prod-purple/[.65]',
    },
    blue: {
      background: 'bg-prod-blue-royal hover:bg-prod-blue-royal/[.65]',
    },
    american: {
      background: 'bg-prod-blue-american-main hover:bg-prod-blue-american-main/[.65]',
    },
    red: {
      background: 'bg-prod-red-jasper-main hover:bg-prod-red-jasper-main/[.65]',
    },
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`rounded-md ${buttonConfig[color].background} w-full py-3 text-center text-sm font-bold capitalize text-white transition-all ${customClass}`}
    >
      {children}
    </button>
  )
}

export default Button
