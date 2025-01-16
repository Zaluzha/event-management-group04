import React from "react";
import ReactLoading from "react-loading";
import Link from "next/link";
import {
  ButtonType,
  IconPlacementType,
  SizeType,
  VariantType,
} from "@/type/FormInputs/CommonFormInputs";

interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  iconPlacement?: IconPlacementType;
  variant?: VariantType;
  disabled?: boolean;
  size?: SizeType;
  icon?: string;
  onConfirm?: () => void;
  isLoading?: boolean;
  link?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const getBaseClassName = (disabled?: boolean, isLoading?: boolean) => {
  const commonClassName = `${
    isLoading && "relative flex justify-center"
  } py-[0.844rem] rounded-[8px] text-[0.875rem] font-semibold justify-center disabled:bg-secondary-dark disabled:text-primary-grey disabled:cursor-not-allowed px-6 outline-none transition-all ease-in-out duration-[400ms]`;
  return `${commonClassName}`;
};

const getVariantClassName = (variant: VariantType) => {
  switch (variant) {
    case VariantType.CONTAINED:
      return "bg-gradient-to-r from-[#6097ff] to-[#a46de6] text-white";
    case VariantType.OUTLINED:
      return "text-primary-light bg-[#006096]";
    case VariantType.OUTLINED_GREEN:
      return "text-[#6d911e] border border-[#6d911e]";
    case VariantType.OUTLINED_BLACK:
      return "text-[#1d1b20] border border-[#1d1b20]";
    default:
      return "bg-primary-red text-white";
  }
};

const getIconPlacementClassName = (iconPlacement?: IconPlacementType) => {
  return iconPlacement ? "flex gap-x-[0.5rem] items-center" : "";
};

const getButtonClassName = (props: CustomButtonProps) => {
  const {
    variant = VariantType.CONTAINED,
    size = SizeType.DEFAULT,
    iconPlacement,
    disabled,
    isLoading,
  } = props;
  const baseClassName = getBaseClassName(disabled, isLoading);
  const sizeClassName =
    size === SizeType.DEFAULT ? "px-[1.25rem]" : "w-full min-px-[1.25rem]";
  const variantClassName = getVariantClassName(variant);
  const iconPlacementClassName = getIconPlacementClassName(iconPlacement);

  return `${sizeClassName} ${baseClassName} ${variantClassName} ${iconPlacementClassName}`;
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    label,
    disabled,
    onConfirm,
    type = ButtonType.BUTTON,
    icon,
    iconPlacement,
    isLoading,
    link = "",
    target = "_self",
  } = props;
  const buttonClassName = getButtonClassName(props);

  return (
    <div className="font-mulish">
      {link ? (
        <Link
          className={`${buttonClassName} block text-center`}
          href={link}
          target={target}
        >
          {isLoading ? (
            <ReactLoading
              type={"spin"}
              color="#fff"
              className=""
              height="1.4rem"
              width="1.4rem"
            />
          ) : (
            <>
              {iconPlacement === IconPlacementType.LEFT && (
                <img src={icon} alt="icon" />
              )}
              {label}
              {iconPlacement === IconPlacementType.RIGHT && (
                <img src={icon} alt="icon" />
              )}
            </>
          )}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={buttonClassName}
          onClick={onConfirm}
        >
          {isLoading ? (
            <ReactLoading
              type={"spin"}
              color="#dc1623"
              className=""
              height="1.4rem"
              width="1.4rem"
            />
          ) : (
            <>
              {iconPlacement === IconPlacementType.LEFT && (
                <img src={icon} alt="icon" />
              )}
              {label}
              {iconPlacement === IconPlacementType.RIGHT && (
                <img src={icon} alt="icon" />
              )}
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
