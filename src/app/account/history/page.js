
import Link from "next/link";
import Image from "next/image";

const history = [
    {
        "date": "2025-03-01",
        "description": "Groceries",
        "amount": 45.67
    },
    {
        "date": "2025-03-02",
        "description": "Electricity Bill",
        "amount": 120.50
    },
    {
        "date": "2025-03-03",
        "description": "Dinner with friends",
        "amount": 75.20
    },
    {
        "date": "2025-03-04",
        "description": "Gas Refill",
        "amount": 40.00
    },
    {
        "date": "2025-03-05",
        "description": "Online Subscription",
        "amount": 12.99
    },
    {
        "date": "2025-03-06",
        "description": "Movie Tickets",
        "amount": 30.00
    },
    {
        "date": "2025-03-07",
        "description": "Coffee",
        "amount": 5.75
    },
    {
        "date": "2025-03-08",
        "description": "Gym Membership",
        "amount": 50.00
    },
    {
        "date": "2025-03-09",
        "description": "Book Purchase",
        "amount": 20.45
    },
    {
        "date": "2025-03-10",
        "description": "Taxi Fare",
        "amount": 18.60
    }
]

const page = () => {
    return (
        <>
            {/* menu */}
            <div className="space-y-4 w-full">
                <div className="border-b border-b-slate-200 flex uppercase">
                    <Link href="/account/payment">
                        <div className="text-sm font-normal px-4 py-3 "> ОСОБИСТИЙ РАХУНОК</div>
                    </Link>

                    <div className="text-sm font-bold px-4 py-3 border-b-2  border-b-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Історія платежів </div>
                </div>
                {/* Payment section */}
                <div className="w-full bg-white py-5 rounded-lg shadow-md space-y-4">
                    <div className="flex items-center justify-between px-5">
                        <div className="flex gap-4 items-center">
                            <Image src="/icons/wallet.svg" width={16} height={16} alt="" className="ml-auto" />
                            <div className="w-max text-md font-medium uppercase">Історія</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/icons/archive.svg" width={20} height={20} alt="" className="ml-auto" />
                        </div>

                    </div>
                    {/* History */}
                    <div className="">
                        {
                            history.map((obj, index) => (
                                <div key={obj.date} className={`flex justify-between gap-2 items-center px-6 py-4
                                 ${index % 2 == 0 ? "bg-slate-50" : false}`}>
                                    <div>
                                        <p className="text-xs text-slate-400">{obj.date}</p>
                                        <span>{obj.description}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-500">{obj.amount.toFixed(2)}</p>
                                    </div>


                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>

        </>
    )
};

export default page
