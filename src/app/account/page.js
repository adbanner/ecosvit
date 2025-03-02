import Image from "next/image";

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


export default function Home() {
  return (
    <>
      {/* menu */}

      <div className="space-y-4 pt-5">
        {/* Balance statement */}
        <div className="space-y-4 ">
          <div className="border-b border-b-slate-200 flex uppercase">
            <div className="text-sm font-bold px-4 py-3 border-b-2  border-b-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> ОСОБИСТИЙ РАХУНОК</div>
            <div className="text-sm font-normal px-4 py-3 "> Історія платежів</div>
          </div>
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

          {/* Payment section */}
          <div className="w-full bg-white py-5 rounded-lg shadow-md space-y-4">
            <div className="flex items-center justify-between px-5">
              <div className="flex gap-4 items-center">
                <Image src="/icons/wallet.svg" width={16} height={16} alt="" className="ml-auto" />
                <div className="w-max text-md font-medium">ПОПОВНЕННЯ</div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/payment/mastercard_logo.svg" width={35} height={40} alt="" className="ml-auto" />
                <Image src="/payment/visa_logo.svg" width={50} height={40} alt="" className="ml-auto" />
              </div>

            </div>
            {/* Options */}
            <div className="w-full h-[115px] p-2 bg-slate-100 flex gap-2 overflow-x-scroll relative">
              {
                peymentMethods.map(obj => (
                  <div key={obj.name} className="w-[118px] min-w-[118px] bg-white p-2 leading-[0.2px] rounded-lg shadow-md flex flex-col justify-between">
                    <div>
                      <p className="w-max text-xs uppercase">{obj.name}</p>
                      <span className="w-max text-xs text-slate-400">{obj.description}</span>
                    </div>

                    <div className="">
                      <img src={obj.icon} height="20px" alt={obj.name} className="ml-auto" />
                    </div>

                  </div>
                ))
              }
            </div>

            {/* Payment */}
            <div className="flex flex-col gap-4 p-2 items-center">
              {/* Options */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">{`Рекомендовано до сплати:`}</p>
                <div className="flex gap-4">
                  {
                    priceSuggections.map((obj, index) => (
                      <div key={index} className="text-sm font-medium border border-blue-500 rounded-full px-3 py-1">200x{index ? index : ""}</div>
                    ))
                  }
                </div>

              </div>
              {/* Amount */}
              <div className="">
                <div className="w-max text-xs px-0.5 m-auto text-gray-400 bg-white z-10 relative">Сума поповнення від 10 грн</div>
                <input defaultValue={300} className="mt-[-9px] max-w-[200px] text-3xl text-right p-2 rounded-sm border border-amber-600"></input>
              </div>
              {/* Action */}
              <div className="flex flex-col gap-2 items-center">
                <div className="w-max px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-orange-500 to-orange-700 ">
                  Поповнити рахунок
                </div>
                <div className="text-sm text-gray-400 text-center">Кошти будуть зараховані протягом 5 хвилин</div>
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
