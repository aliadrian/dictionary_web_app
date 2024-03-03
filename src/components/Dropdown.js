import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useFont } from './FontContext'

const FontMenu = () => {
  const [selectedFont, setSelectedFont] = useState('sans');
  const { fontFamily, toggleFont } = useFont();

  useEffect(() => {
    setSelectedFont(fontFamily);
  }, [fontFamily]);
  return (
    <Menu as="div" className={`relative inline-block text-left`}>
      <div>
        <Menu.Button className={`inline-flex justify-center items-center gap-x-1.5 px-3 py-2 lg:text-lg text-sm font-semibold`}>
          {selectedFont === 'serif' ? 'Serif' : 'Sans-Serif'}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-purple" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 focus:outline-none whitespace-nowrap text-black w-32 cursor-pointer`}>
          <div className="py-1">
            <Menu.Item>
              {selectedFont === 'serif' ? (
                <a
                  onClick={() => {
                    setTimeout(() => {
                      toggleFont();
                    }, 70)
                  }}
                  className="block px-4 py-2 lg:text-lg text-sm font-sans"
                >
                  Sans-Serif
                </a>
              ) : (
                <a
                  onClick={() => {
                    setTimeout(() => {
                      toggleFont();
                    }, 70)
                  }}
                  className="block px-4 py-2 lg:text-lg text-sm font-serif"
                >
                  Serif
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FontMenu;
