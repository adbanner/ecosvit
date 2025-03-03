import Image from "next/image";
import Link from "next/link";

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
        href: "/account"
    },
]

const SideBar = () => {
    return (
        <div className="hidden lg:block bg-white w-14 min-w-14 pb-5 rounded-xl shadow-md xl:w-xs">
            <div className="flex flex-col">
                {/* Menu and profile icon */}
                <div className="xl:hidden pt-5">
                    <div className="h-12 xl:hidden">
                        <Image src="/icons/menu.svg" width={24} height={20} alt="" className="m-auto " />
                    </div>
                    <div className="h-12">
                        <Image src="/icons/profile.svg" width={24} height={20} alt="" className="m-auto" />
                    </div>
                </div>
                <div className="hidden xl:block text-center bg-[url(/images/sidenav_bg.svg)] bg-cover py-5">
                    <Image src="/icons/profile.svg" width={40} height={40} alt="" className="m-auto " />
                    <div className="font-bold pt-2">Тібеж Денис</div>
                    <div className="text-sm">dn.tibezh@gmail.com</div>
                    <div className="text-sm pt-2">№ договору</div>
                    <div className="">06062101</div>

                </div>

                {
                    menu.map(obj => (
                        <Link key={obj.slag} href={obj.href}>
                            <div  className="h-14 border-t border-t-slate-50 flex items-center">
                                <Image src={obj.icon} width={20} height={20} alt="" className=" xl:m-5 m-auto opacity-40" />
                                <p className="text-sm hidden xl:block">{obj.name}</p>
                            </div>
                        </Link>

                    ))
                }

                <div className="xl:hidden opacity-40 pt-10">
                    <div className="h-12">
                        <Image src="/social/facebook.svg" width={20} height={20} alt="" className="m-auto" />
                    </div>
                    <div className="h-12">
                        <Image src="/social/skype.svg" width={20} height={20} alt="" className="m-auto" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default SideBar
