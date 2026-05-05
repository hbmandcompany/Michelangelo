import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

export type MichelangeloButtonProps = ButtonProps | AnchorProps

const base =
  'inline-flex cursor-pointer items-center justify-center px-8 py-3.5 text-center font-body text-base font-medium tracking-wide transition-colors duration-500 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:py-4'

const variants: Record<
  NonNullable<CommonProps['variant']>,
  string
> = {
  primary:
    'rounded-sm bg-forestGreen text-cream shadow-sm hover:bg-gold hover:text-charcoal [&:hover]:shadow-card-hover',
  secondary:
    'rounded-sm border border-stone bg-transparent text-charcoal hover:border-forestGreen hover:bg-cream hover:text-charcoal',
  ghost:
    'rounded-none border-none bg-transparent p-0 text-forestGreen underline-offset-8 hover:text-gold hover:underline hover:opacity-95',
}

const motionLiftClasses =
  'transition-transform duration-500 ease-luxury hover:scale-[1.02] active:scale-[0.99]'

export function Button(props: MichelangeloButtonProps) {
  const variant = variants[props.variant ?? 'primary']
  const className =
    `${base} ${variant} ${props.className ?? ''}`.trim()

  if ((props as AnchorProps).as === 'a') {
    const { as: _, children, variant: _v, ...rest } = props as AnchorProps
    return (
      <a {...rest} className={`${className} ${motionLiftClasses} will-change-transform`.trim()}>
        {children}
      </a>
    )
  }

  const {
    children,
    variant: _v,
    as: __,
    type = 'button',
    ...rest
  } = props as ButtonProps
  return (
    <button type={type} {...rest} className={`${className} ${motionLiftClasses}`.trim()}>
      {children}
    </button>
  )
}
