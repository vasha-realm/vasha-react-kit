'use client'
import { forwardRef, useImperativeHandle, useState } from "react";
import { IconClose } from "@/components/icons";

type PopupPosition = 'center' | 'bottom' | 'left' | 'right';

type PopupProps = {
  children: React.ReactNode;
  classNames?: string;
  position?: PopupPosition;
  headerTitle?: string;
  contentClassNames?: string;
}

export type PopupRef = {
  open: () => void;
  close: () => void;
}

const Popup = forwardRef<PopupRef, PopupProps>((props, ref) => {
  const { children, classNames = '', position = 'center', headerTitle = '', contentClassNames = '', ...rest } = props;
  const [isShow, setIsShow] = useState(false);
  useImperativeHandle(ref, () => ({
    open: () => {
      setIsShow(true);
    },
    close: () => {
      setIsShow(false);
    }
  }))
  return (
    <div
      className={`fixed inset-0 *:absolute ${isShow || 'hidden'} ${classNames}`}
      {...rest}
    >
      <div className="inset-0 bg-black/50 backdrop-blur-[.25rem]" />
      <div className={`
        shadow-[0_0_4rem_0_rgba(255,255,255,.25)]
        bg-[var(--bgc)] text-[var(--tc)] overflow-hidden
        ${position === 'center' && 'rounded-[1rem] landscape:h-3/4 landscape:w-1/2 portrait:h-1/2 portrait:w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}
        ${position === 'bottom' && 'rounded-t-[.5rem] bottom-0 left-0 right-0 h-1/2'}
        ${position === 'left' && 'left-0 inset-y-0 w-1/4'}
        ${position === 'right' && 'right-0 inset-y-0 w-1/4'}
      `}>
        <IconClose classNames="cursor-pointer w-[1rem] absolute top-[2rem] right-[2rem] translate-x-1/2 -translate-y-1/2" onClick={() => setIsShow(false)} />
        <h3 className={`h-[4rem] bg-[#171717] flex items-center justify-center text-[1.25rem] font-bold ${headerTitle || 'hidden'}`}>{headerTitle}</h3>
        <div className={`h-[calc(100%-4rem)] p-[2rem] overflow-hidden overflow-y-auto ${contentClassNames}`}>
          {children}
        </div>
      </div>
    </div>
  )
})

export default Popup;