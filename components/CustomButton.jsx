'use client'
import Image from "next/image"



const CustomButton = ({isDisabled, btnType, containerStyle, textStyles, title, rightIcon, handleClick}) => {
  return (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyle}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  )
}

export default CustomButton