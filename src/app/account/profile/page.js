import Image from "next/image";
const AccountInfo = ({ userData }) => {
    return (
        <>
            <div className="w-full bg-white py-5 rounded-lg shadow-md space-y-4">
                <div className="flex items-center justify-between px-5">
                    <div className="flex gap-4 items-center">
                        <Image src="/icons/wallet.svg" width={16} height={16} alt="" className="ml-auto" />
                        <div className="w-max text-md font-medium uppercase">ПРОФІЛЬ</div>
                    </div>
                    <div className="flex items-center gap-2">

                    </div>

                </div>

                <form className="px-6">
                    <div className="space-y-6 bg-white max-w-2xl ">

                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">{`Ім'я`}</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" defaultValue={userData?.name.split(" ")[0] || ""} autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">{`Основний номер телефону`}</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" defaultValue={userData?.name.split(" ")[1] || ""} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>



                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">{`Адреса`}</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" defaultValue={userData?.name.split(" ")[1] || ""} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">{`Юридична адреса`}</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" defaultValue={userData?.name.split(" ")[1] || ""} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">{`Договір`}</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" defaultValue={userData?.name.split(" ")[1] || ""} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" defaultValue={userData?.email || ""} disabled autoComplete="email" className="block w-full rounded-md  bg-slate-100 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                                <p className="text-xs text-red-700 hidden max-w-xs" id='email_warning'>User with this email already exist</p>
                            </div>

                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-between gap-x-6">
                        <button type="submit" className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>

            </div>

        </>
    )
};

export default AccountInfo
