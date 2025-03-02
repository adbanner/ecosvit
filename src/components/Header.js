import Image from "next/image";

const Header = () => {
    return (
        <>
            <div className="w-full ">
                {/* Mobile */}
                <div className="w-full m-auto  py-4 grid grid-cols-3 px-4 sm:w-xl lg:hidden">
                    <div>
                        <Image src="/icons/menu.svg" width={24} height={20} alt="" className="" />
                    </div>
                    <div>
                        <Image src="/images/ecosvit-logo.png" width={100} height={50} alt="" className="m-auto" />
                    </div>
                    <div className="">
                        <Image src="/icons/phone.svg" width={24} height={20} alt="" className="ml-auto" />
                    </div>
                </div>

                {/* Desctop */}
                <div className="w-full bg-white lg:block hidden ">
                    <div className="w-3xl xl:w-6xl h-[60px]  m-auto flex gap-6 items-center px-4">
                        <div className="pr-6">
                            <Image src="/images/ecosvit-logo.png" width={100} height={50} alt="" />
                        </div>

                        <div className="text-xs ">
                            <span>Адреса:</span>
                            <p className="text-blue-500"> Київ, Електриків, 26</p>
                        </div>

                        <div className="space-y-1 text-blue-500">
                            <div className="flex gap-2 items-center">
                                <Image src="/icons/mail.svg" width={16} height={16} alt=""/>
                                <p className="text-xs">vvr.ecosvit@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src="/icons/phone.svg" width={16} height={16} alt=""/>
                                <p className="text-xs">(044) 209 76 99</p>
                            </div>
                        </div>
                        <div className="w-max px-3 py-1.5 text-xs uppercase  font-medium rounded-full border-2 border-green-500 ml-auto">
                            ЗАМОВИТИ ДЗВІНОК
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Header
