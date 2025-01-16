import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { languageList } from '@/constants/Resource';
import { classNames } from '@/utils/CssHandler';
import { ThemeType } from '@/type/Common';


interface LanguageButtonProps {
  type: string;
  navbar: boolean;
}

const LanguageButton: React.FC<LanguageButtonProps> = props => {
  const { type, navbar } = props;
  const { asPath, locale } = useRouter();
  const selectedLanguage = languageList.find(each => each.id === locale);

  return (
    <Menu>
      {({ open }) => {
        return (
          <>
            {open && <div className="fixed w-screen h-screen bg-black/50 inset-0" />}
            <MenuButton className="flex items-center gap-2">
              <img
                src={
                  navbar
                    ? '/common/globe-icon.svg'
                    : type === ThemeType.DARK
                    ? '/common/black-globe.svg'
                    : '/common/globe-icon.svg'
                }
                alt="language-icon"
              />
              <span
                className={classNames(
                  navbar ? 'text-primary-light' : type === ThemeType.DARK ? 'text-[#1d1b20]' : 'text-primary-light',
                  'font-semibold  text-[0.875rem] uppercase'
                )}
              >
                {selectedLanguage?.id}
              </span>
              {/* {navbar ? (
                <BeakerIcon className="w-5 h-auto text-primary-light" />
              ) : type === ThemeType.DARK ? (
                <BeakerIcon className="w-5 h-auto text-primary-dark" />
              ) : (
                <BeakerIcon className="w-5 h-auto text-primary-light" />
              )} */}
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom"
              className="w-52  origin-top-right rounded-[8px] bg-primary-light font-medium text-[0.875rem] text-primary-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col z-10 mt-6"
            >
              {languageList.map(language => (
                <MenuItem key={language.id}>
                  <Link href={asPath} locale={language.id} className="p-4">
                    {language.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </>
        );
      }}
    </Menu>
  );
};

export default LanguageButton;
