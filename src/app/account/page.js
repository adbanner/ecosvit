"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const peymentMethods = [
  {
    name: "Portmone",
    description: "сервіс платежів",
    icon: "/payment/portmone.svg",
    action: ""
  },
  {
    name: "IPay",
    description: "сервіс платежів",
    icon: "/payment/iPay.svg",
    action: ""
  },
  {
    name: "easyPay",
    description: "сервіс платежів",
    icon: "/payment/easyPay.svg",
    action: ""
  },
  {
    name: "masterpass",
    description: "оплата карткою",
    icon: "/payment/masterpass.svg",
    action: ""
  },
  {
    name: "Квитанція",
    description: "квитанція на оплату",
    icon: "/payment/payOrder.svg",
    action: ""
  },
  {
    name: "Промокод",
    description: "бонуси на рахунок",
    icon: "/payment/promoCodes.svg",
    action: ""
  }
]

const priceSuggections = [
  {
    name: ""
  },
  {
    name: ""
  },
  {
    name: ""
  },
  {
    name: ""
  },
]


export default function Account() {

  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      {/* Balance statement */}
      <div className="space-y-4 ">

        {/* menu */}
        <div className="space-y-4 ">
         
          {/* Balance */}
          <div className="w-full bg-white p-5 rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-6">
              <div className="flex gap-4 items-center">
                <Image src="/icons/wallet.svg" width={16} height={16} alt="" className="ml-auto" />
                <p className="w-max text-xl">{`ОСОБИСТИЙ РАХУНОК, ₴`}</p>
              </div>
              <span className="w-max text-3xl  border-b-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">100.00</span>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Negative */}
            <div className="w-full bg-white p-5 rounded-lg shadow-md">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <p className="w-max text-xl">{`НЕСТАЧА`}</p>
                  <Image src="/icons/info.svg" width={16} height={16} alt="" className="ml-auto" />
                </div>

                <span className="w-max text-3xl text-red-400">200.00</span>
              </div>
            </div>
            {/* Bonus */}
            <div className="w-full bg-white p-5 rounded-lg shadow-md">
              <div className="flex flex-col items-center gap-3">
                <p className="w-max text-xl">{`БОНУСНИЙ`}</p>
                <span className="w-max text-3xl  border-b-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">0.00</span>
              </div>
            </div>
          </div>

         
        </div>

        {/* Payment section */}
        <div className=" w-full bg-white p-5 rounded-lg shadow-md space-y-4">
          <div className="flex gap-4 items-center">
            <Image src="/icons/wallet.svg" width={16} height={16} alt="" />
            <div className="w-max text-md font-medium uppercase">Кредитний період</div>
          </div>
          <div className="text-sm text-gray-800 text-left">Якщо на рахунку не вистачає коштів для початку нового періоду, можливо скористатися кредитним періодом.</div>



          {/* Action */}
          <div className="mt-auto flex flex-col gap-2 items-center">
            <div className="w-max px-6 py-2  font-medium rounded-full border border-blue-500 ">
              Кредитний період
            </div>
          </div>



        </div>
      </div>


    </>
  );
}
