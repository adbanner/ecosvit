"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
    {
        slag: "dashboard",
        name: "Дашборд",
        icon: "/icons/dashboard.svg",
        href: "/account"
    },
    {
        slag: "profile",
        name: "Профіль",
        icon: "/icons/user.svg",
        href: "/account/profile"
    },
    {
        slag: "payment",
        name: "Поповнення рахунку",
        icon: "/icons/wallet.svg",
        href: "/account/payment"
    },
    {
        slag: "logout",
        name: "Вихід",
        icon: "/icons/log-out.svg",
        href: "/"
    },
]

const MenuSideBar = () => {
    function closeEditMenu() {
        const menu = document.getElementById("editMenu")
        menu.classList.add('translate-x-full');
    }
    closeEditMenu()
    const pathname = usePathname()

    return (
        <div id="editMenu" className="xl:hidden z-20 fixed top-0 right-0  w-3xs  h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300">
            <button onClick={() => closeEditMenu()} id="closeMenu" className="cursor-pointer absolute top-0 right-0 text-gray-600 text-3xl px-4 py-2">&times;</button>

            <div className=" bg-white min-w-14 pb-5">
                <div className="flex flex-col">

                    <div className=" text-center bg-[url(/images/sidenav_bg.svg)] bg-cover py-5">
                        <Image src="/icons/profile.svg" width={40} height={40} alt="" className="m-auto" />
                        <div className="font-bold pt-2">Тібеж Денис</div>
                        <div className="text-sm">dn.tibezh@gmail.com</div>
                        <div className="text-sm pt-2">№ договору</div>
                        <div className="">06062101</div>

                    </div>

                    {
                        menu.map(obj => (
                            <Link key={obj.slag} href={obj.href}>
                                <div className={`h-14 border-t border-t-slate-50 flex items-center ${pathname == obj.href ? "bg-sky-50" : false}`}>
                                    <Image src={obj.icon} width={20} height={20} alt="" className=" m-5 opacity-40" />
                                    <p className="text-sm ">{obj.name}</p>
                                </div>
                            </Link>

                        ))
                    }



                </div>
            </div>
        </div>
    )
};

export default MenuSideBar
