import { useTranslation } from 'react-i18next';

import { Button, Listbox, ListboxItem, Navbar, NavbarBrand, NavbarContent, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { useMemo, useState } from 'react';



const NavbarTop = () => {
    const { t, i18n } = useTranslation();

    const [selectedKeys, setSelectedKeys] = useState(new Set([i18n.language]));

    const onSelectChange = (e) => {
        setSelectedKeys(e);
        i18n.changeLanguage(e.currentKey);
    }

    return (
        <Navbar>
            <NavbarBrand>
                <h1 className="text-2xl font-semibold text-primary-500">
                    {
                        t('appName')
                    }
                </h1>
            </NavbarBrand>
            <NavbarItem>
                <Popover>
                    <PopoverTrigger className='dark'>
                        <Button color="primary" isIconOnly>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Listbox
                            aria-label='Select Language'
                            variant='flat'
                            color='primary'
                            selectionMode='single'
                            selectedKeys={selectedKeys}
                            onSelectionChange={onSelectChange}
                            defaultSelectedKeys={i18n.language}
                        >
                            <ListboxItem key={'ta'}>தமிழ்</ListboxItem>
                            <ListboxItem key={'en'}>English</ListboxItem>
                        </Listbox>
                    </PopoverContent>
                </Popover>
            </NavbarItem>
        </Navbar>
    )
}

export default NavbarTop;